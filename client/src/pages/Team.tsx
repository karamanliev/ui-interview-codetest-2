import { useParams } from "react-router";

function Team() {
  const { teamId } = useParams();

  return <div>{teamId}</div>;
}

export default Team;
