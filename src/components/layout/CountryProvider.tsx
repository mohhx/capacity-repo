"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";
import { COUNTRIES, DEFAULT_COUNTRY, type Country, type CountryCode } from "@/config/platform";

const STORAGE_KEY = "capacity:country";

interface CountryContextValue {
  country: Country;
  setCountry: (code: CountryCode) => void;
}

const CountryContext = createContext<CountryContextValue | null>(null);

/*
  The saved country lives in localStorage, which React does not own, so it is read as an
  external store. The server snapshot is always the default country, so server and client HTML
  match on first render and the saved choice is applied right after hydration.
*/
const listeners = new Set<() => void>();
let memoryChoice: CountryCode | null = null; // used when storage is blocked

function isCode(value: string | null): value is CountryCode {
  return value === "NG" || value === "KE";
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange); // other tabs
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot(): CountryCode {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isCode(saved)) return saved;
  } catch {
    // storage can be blocked; fall through to the in-memory choice
  }
  return memoryChoice ?? DEFAULT_COUNTRY;
}

function getServerSnapshot(): CountryCode {
  return DEFAULT_COUNTRY;
}

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const code = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setCountry = useCallback((next: CountryCode) => {
    memoryChoice = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore: the in-memory choice still applies for this visit
    }
    listeners.forEach((notify) => notify());
  }, []);

  const value = useMemo(() => ({ country: COUNTRIES[code], setCountry }), [code, setCountry]);

  return <CountryContext.Provider value={value}>{children}</CountryContext.Provider>;
}

export function useCountry(): CountryContextValue {
  const ctx = useContext(CountryContext);
  if (!ctx) throw new Error("useCountry must be used inside <CountryProvider>");
  return ctx;
}
