import { useParams } from "react-router";

function Team() {
  const { teamId } = useParams();

  return (
    <>
      <title>Team</title>
      <div>{teamId}</div>
    </>
  );
}

export default Team;
