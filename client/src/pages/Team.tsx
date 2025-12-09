import PageLayout from "@/components/PageLayout";
import { useTranslation } from "@/i18n";
import { useParams } from "react-router";

function Team() {
  const { t } = useTranslation();
  const { teamId } = useParams();

  return (
    <PageLayout title={t("teams.title")}>
      <div>{teamId}</div>
    </PageLayout>
  );
}

export default Team;
