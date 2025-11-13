import { describe, it, expect, vi } from "vitest";
import { resolvers } from "@/resolvers";

// Mock all service modules
vi.mock("@/services/ticketsService", () => ({
  getTickets: vi.fn(() =>
    Promise.resolve([
      {
        id: "1",
        title: "Test Ticket",
        spaceId: "nasa-1",
        health: 10,
        createdAt: "2024-01-01",
        ownerId: "1",
        progress: 10,
      },
    ])
  ),
}));

vi.mock("@/services/userService", () => ({
  getUser: vi.fn(() =>
    Promise.resolve({ id: "1", name: "Test User", spaces: ["nasa-1"] })
  ),
}));

vi.mock("@/services/teamsService", () => ({
  getTeams: vi.fn(() =>
    Promise.resolve([{ id: "1", name: "Test Team", spaceId: "nasa-1" }])
  ),
}));

vi.mock("@/services/metricsService", () => ({
  getMetrics: vi.fn(() =>
    Promise.resolve({
      spaceId: "nasa-1",
      totalRisk: { value: 100, delta: 10 },
      criticalExposures: { value: 10, delta: 10 },
      compliance: { value: 100, delta: 10 },
      speed: { value: 100, delta: 10 },
    })
  ),
}));

vi.mock("@/services/recommendationsService", () => ({
  getRecommendations: vi.fn(() =>
    Promise.resolve({
      spaceId: "nasa-1",
      readyToFix: 10,
      readyToReview: 5,
      approachingSla: 3,
    })
  ),
}));

vi.mock("@/services/reportsService", () => ({
  getReports: vi.fn(() =>
    Promise.resolve([{ id: "1", spaceId: "nasa-1", name: "Test Report" }])
  ),
}));

describe("GraphQL Resolvers", () => {
  describe("Query resolvers", () => {
    it("should have recommendations resolver", async () => {
      const result = await resolvers.Query.recommendations(null, {
        spaceId: "nasa-1",
      });
      expect(result).toBeDefined();
      expect(result).toHaveProperty("spaceId");
      expect(result).toHaveProperty("readyToFix");
      expect(result).toHaveProperty("readyToReview");
      expect(result).toHaveProperty("approachingSla");
    });

    it("should have metrics resolver", async () => {
      const result = await resolvers.Query.metrics(null, {
        spaceId: "nasa-1",
      });
      expect(result).toBeDefined();
      expect(result).toHaveProperty("spaceId");
      expect(result).toHaveProperty("totalRisk");
      expect(result).toHaveProperty("criticalExposures");
      expect(result).toHaveProperty("compliance");
      expect(result).toHaveProperty("speed");
    });

    it("should have user resolver", async () => {
      const result = await resolvers.Query.user();
      expect(result).toBeDefined();
      expect(result).toHaveProperty("id");
      expect(result).toHaveProperty("name");
      expect(result).toHaveProperty("spaces");
    });

    it("should have tickets resolver", async () => {
      const result = await resolvers.Query.tickets(null, { spaceId: "nasa-1" });
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);

      // Tickets can be empty, so only check if there are items
      if (result && result.length > 0) {
        const ticket = result[0];
        expect(ticket).toHaveProperty("id");
        expect(ticket).toHaveProperty("title");
        expect(ticket).toHaveProperty("spaceId");
        expect(ticket).toHaveProperty("health");
        expect(ticket).toHaveProperty("createdAt");
        expect(ticket).toHaveProperty("ownerId");
        expect(ticket).toHaveProperty("progress");
      }
    });
  });

  it("should have reports resolver", async () => {
    const result = await resolvers.Query.reports(null, { spaceId: "nasa-1" });
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);

    // Reports can be empty, so only check if there are items
    if (result && result.length > 0) {
      const report = result[0];
      expect(report).toHaveProperty("id");
      expect(report).toHaveProperty("name");
      expect(report).toHaveProperty("spaceId");
    }
  });
});
