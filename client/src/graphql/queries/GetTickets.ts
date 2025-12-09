import { graphql } from "@/types";

export const GET_TICKETS = graphql(`
  query GetTickets($spaceId: ID!) {
    tickets(spaceId: $spaceId) {
      id
      title
      health
      createdAt
      ownerId
      progress
      spaceId
    }
  }
`);
