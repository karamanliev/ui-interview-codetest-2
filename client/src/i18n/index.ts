import { en } from "./en";

export function useTranslation() {
  const t = (key: string, params?: Record<string, string | number>) => {
    const text = key.split(".").reduce((obj: any, k) => obj?.[k], en) ?? key;

    if (!params) return text;

    return Object.entries(params).reduce(
      (result, [key, value]) => result.replace(`{{${key}}}`, String(value)),
      text,
    );
  };

  return { t };
}
