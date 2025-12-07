import PageLayout from "@/components/layout/PageLayout";
import { useParams } from "react-router";

function Team() {
  const { teamId } = useParams();

  return (
    <PageLayout title="Team">
      <div>{teamId}</div>
    </PageLayout>
  );
}

export default Team;
