"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { COUNTRIES, DEFAULT_COUNTRY, type Country, type CountryCode } from "@/config/platform";

const STORAGE_KEY = "capacity:country";

interface CountryContextValue {
  country: Country;
  setCountry: (code: CountryCode) => void;
}

const CountryContext = createContext<CountryContextValue | null>(null);

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [code, setCode] = useState<CountryCode>(DEFAULT_COUNTRY);

  // Read the saved choice after mount so server and client HTML match.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "NG" || saved === "KE") setCode(saved);
    } catch {
      // storage can be blocked; the default country is fine
    }
  }, []);

  const setCountry = useCallback((next: CountryCode) => {
    setCode(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo(() => ({ country: COUNTRIES[code], setCountry }), [code, setCountry]);

  return <CountryContext.Provider value={value}>{children}</CountryContext.Provider>;
}

export function useCountry(): CountryContextValue {
  const ctx = useContext(CountryContext);
  if (!ctx) throw new Error("useCountry must be used inside <CountryProvider>");
  return ctx;
}