const nasaTeams = [
  {
    id: "artemis",
    name: "Artemis Program",
    spaceId: "nasa-1",
  },
  {
    id: "iss",
    name: "International Space Station",
    spaceId: "nasa-1",
  },
  {
    id: "hubble",
    name: "Hubble",
    spaceId: "nasa-1",
  },
  {
    id: "james-webb",
    name: "James Webb Space Telescope",
    spaceId: "nasa-1",
  },
];

const planetarySocietyTeams = [
  {
    id: "europa-clipper",
    name: "Europa Clipper",
    spaceId: "planetary-society",
  },
  {
    id: "jupiter-moons",
    name: "Jupiter Moons",
    spaceId: "planetary-society",
  },
  {
    id: "saturn-rings",
    name: "Saturn Rings",
    spaceId: "planetary-society",
  },
];

const findAndyTeams = [
  {
    id: "woodys-roundup",
    name: "Woody's Roundup",
    spaceId: "find-andy",
  },
  {
    id: "space-rangers",
    name: "Space Rangers",
    spaceId: "find-andy",
  },
  {
    id: "andys-room",
    name: "Andy's Room",
    spaceId: "find-andy",
  },
];

export const mockTeams = [
  ...nasaTeams,
  ...planetarySocietyTeams,
  ...findAndyTeams,
];
