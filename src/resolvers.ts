import { getMetrics } from "@/services/metricsService";
import { getRecommendations } from "@/services/recommendationsService";
import { getTeams } from "@/services/teamsService";
import { getUser } from "@/services/userService";
import { getTickets } from "@/services/ticketsService";
import { getReports } from "@/services/reportsService";

export const resolvers = {
  Query: {
    recommendations: async (_, { spaceId }: { spaceId: string }) =>
      await getRecommendations(spaceId),
    metrics: async (_, { spaceId }: { spaceId: string }) =>
      await getMetrics(spaceId),
    user: async () => await getUser(),
    teams: async (_, { spaceId }: { spaceId: string }) =>
      await getTeams(spaceId),
    tickets: async (_, { spaceId }: { spaceId: string }) =>
      await getTickets(spaceId),
    reports: async (_, { spaceId }: { spaceId: string }) =>
      await getReports(spaceId),
  },
};
