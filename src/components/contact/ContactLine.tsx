interface ContactItem {
  value: string;
  tbc: boolean;
}

export function ContactLine({ item, kind }: { item: ContactItem; kind: "mail" | "tel" }) {
  if (item.tbc) return <span>{item.value}</span>;
  const href = kind === "mail" ? `mailto:${item.value}` : `tel:${item.value.replace(/\s/g, "")}`;
  return <a href={href}>{item.value}</a>;
}
