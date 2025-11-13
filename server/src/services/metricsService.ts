import { mockMetrics } from "../data/mockMetrics";
import { delay } from "./utils";

export const getMetrics = async (spaceId: string) => {
  await delay(2000);
  return mockMetrics.find((metric) => metric.spaceId === spaceId);
};
