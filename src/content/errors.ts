// 404 copy, from the Figma desktop and phone frames. The error page ("Something went wrong") joins this file next.
export const NOT_FOUND = {
  mark: "404",
  title: "We cannot find that page",
  text: "The link may be old, or the address may be mistyped. Start again from the home page.",
  home: { label: "Back to home", href: "/" },
  contact: { label: "Contact us", href: "/contact" },
} as const;

// "Something went wrong" copy, from the Figma desktop and phone frames.
export const ERROR_PAGE = {
  title: "Something went wrong",
  text: "That was on our side. Try again in a moment. If it keeps happening, reach us here:",
  retry: "Try again",
  // The link under the button is in the phone frame only, so it is hidden from 768px up.
  home: { label: "Back to home", href: "/" },
  contact: { emailLabel: "Email:", phoneLabel: "Phone:" },
} as const;
