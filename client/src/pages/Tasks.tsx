import PageLayout from "@/components/layout/PageLayout";
import { useTranslation } from "@/i18n";

function Tasks() {
  const { t } = useTranslation();

  return (
    <PageLayout title={t("tasks.title")}>
      <div>Hello world</div>
    </PageLayout>
  );
}

export default Tasks;
