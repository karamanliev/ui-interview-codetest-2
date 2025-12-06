import { graphql } from "@/types";

export const GET_METRICS = graphql(`
  query GetMetrics($spaceId: ID!) {
    metrics(spaceId: $spaceId) {
      compliance {
        delta
        value
      }
      criticalExposures {
        delta
        value
      }
      speed {
        delta
        value
      }
      totalRisk {
        delta
        value
      }
    }
  }
`);
