import { mockRecommendations } from "@/data/mockRecommendations";
import { delay } from "./utils";

export const getRecommendations = async (spaceId: string) => {
  await delay(1000);
  return mockRecommendations.find(
    (recommendation) => recommendation.spaceId === spaceId
  );
};
