import { delay } from "./utils";
import { mockReports } from "@/data/mockReports";

export const getReports = async (spaceId: string) => {
  await delay(1000);
  return mockReports.filter((report) => report.spaceId === spaceId);
};
