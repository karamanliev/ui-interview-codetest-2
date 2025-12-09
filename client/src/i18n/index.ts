import { en } from "./en";

export function useTranslation() {
  const t = (key: string, params?: Record<string, string | number>) => {
    const text = key.split(".").reduce((obj: unknown, k) => (obj as Record<string, unknown>)?.[k], en) as string ?? key;

    if (!params) return text;

    return Object.entries(params).reduce(
      (result, [key, value]) => result.replace(`{{${key}}}`, String(value)),
      text,
    );
  };

  return { t };
}
