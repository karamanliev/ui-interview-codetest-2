import DateRangePicker from "@/components/DateRangePicker";
import PageLayout from "@/components/PageLayout";
import SearchButton from "@/components/SearchButton";
import useSpace from "@/hooks/useSpace.ts";
import { useTranslation } from "@/i18n";
import Recommendations from "./Recommendations/Recommendations.tsx";
import Metrics from "./Metrics";
import Tickets from "./Tickets/Tickets";

function Home() {
  const { t } = useTranslation();
  const { currentSpaceId } = useSpace();

  return (
    <PageLayout
      title={t("home.title")}
      headerComponents={
        <>
          <DateRangePicker />
          <SearchButton />
        </>
      }
    >
      <Recommendations currentSpaceId={currentSpaceId} />
      <Metrics currentSpaceId={currentSpaceId} />
      <Tickets currentSpaceId={currentSpaceId} />
    </PageLayout>
  );
}

export default Home;
