import { useTranslation } from "@/i18n";

function SearchButton() {
  const { t } = useTranslation();

  return <button>{t("common.search")}</button>;
}

export default SearchButton;
