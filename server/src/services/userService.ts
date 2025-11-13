import { mockUser } from "@/data/mockUser";
import { delay } from "./utils";

export const getUser = async () => {
  await delay(500);
  return mockUser;
};
