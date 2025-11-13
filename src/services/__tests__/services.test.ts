import { describe, it, expect, vi } from "vitest";
import { getTickets } from "@/services/ticketsService";
import { getUser } from "@/services/userService";
import { getTeams } from "@/services/teamsService";
import { getMetrics } from "@/services/metricsService";
import { getRecommendations } from "@/services/recommendationsService";
import { getReports } from "@/services/reportsService";

// Mock the delay utility to speed up tests
vi.mock("@/services/utils", () => ({
  delay: vi.fn(() => Promise.resolve()),
}));

describe("Services", () => {
  describe("getTickets", () => {
    it("should return tickets for a specific spaceId", async () => {
      const tickets = await getTickets("nasa-1");
      expect(tickets).toBeDefined();
      expect(Array.isArray(tickets)).toBe(true);
      expect(tickets.length).toBeGreaterThan(0);
      expect(tickets.every((ticket) => ticket.spaceId === "nasa-1")).toBe(true);
    });

    it("should return different tickets for different spaces", async () => {
      const nasaTickets = await getTickets("nasa-1");
      const findAndyTickets = await getTickets("find-andy");

      expect(nasaTickets.length).toBeGreaterThan(0);
      expect(findAndyTickets.length).toBeGreaterThan(0);
      expect(nasaTickets).not.toEqual(findAndyTickets);
    });

    it("should return tickets with required properties", async () => {
      const tickets = await getTickets("nasa-1");
      const ticket = tickets[0];

      expect(ticket).toHaveProperty("id");
      expect(ticket).toHaveProperty("title");
      expect(ticket).toHaveProperty("health");
      expect(ticket).toHaveProperty("createdAt");
      expect(ticket).toHaveProperty("ownerId");
      expect(ticket).toHaveProperty("spaceId");
      expect(ticket).toHaveProperty("progress");
    });
  });

  describe("getUser", () => {
    it("should return user data", async () => {
      const user = await getUser();
      expect(user).toBeDefined();
      expect(user).toHaveProperty("id");
      expect(user).toHaveProperty("name");
      expect(user).toHaveProperty("spaces");
    });

    it("should return user with spaces array", async () => {
      const user = await getUser();
      expect(Array.isArray(user.spaces)).toBe(true);
      expect(user.spaces.length).toBeGreaterThan(0);
    });
  });

  describe("getTeams", () => {
    it("should return teams for a specific spaceId", async () => {
      const teams = await getTeams("nasa-1");
      expect(teams).toBeDefined();
      expect(Array.isArray(teams)).toBe(true);
    });

    it("should return teams with required properties", async () => {
      const teams = await getTeams("nasa-1");
      if (teams.length > 0) {
        const team = teams[0];
        expect(team).toHaveProperty("id");
        expect(team).toHaveProperty("name");
        expect(team).toHaveProperty("spaceId");
      }
    });
  });

  describe("getMetrics", () => {
    it("should return metrics for a specific spaceId", async () => {
      const metrics = await getMetrics("nasa-1");
      expect(metrics).toBeDefined();
    });
  });

  describe("getRecommendations", () => {
    it("should return recommendations for a specific spaceId", async () => {
      const recommendations = await getRecommendations("nasa-1");
      expect(recommendations).toBeDefined();
      expect(recommendations).toBeTypeOf("object");
      expect(recommendations).toHaveProperty("readyToFix");
      expect(recommendations).toHaveProperty("readyToReview");
      expect(recommendations).toHaveProperty("approachingSla");
      expect(recommendations?.spaceId).toBe("nasa-1");
    });
  });

  describe("getReports", () => {
    it("should return reports for a specific spaceId", async () => {
      const reports = await getReports("nasa-1");
      expect(reports).toBeDefined();
      expect(Array.isArray(reports)).toBe(true);
    });
  });
});
