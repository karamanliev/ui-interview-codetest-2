import { mockTeams } from "@/data/mockTeams";
import { delay } from "./utils";

export const getTeams = async (spaceId: string) => {
  await delay(200);
  return mockTeams.filter((team) => team.spaceId === spaceId);
};
