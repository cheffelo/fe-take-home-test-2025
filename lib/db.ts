import { JSONFile, Low } from "lowdb";
import { join } from "path";
import { Listing } from "../types";

type Data = Listing[];

export const devdb = () => {
  const adapter = new JSONFile<Data>(join(process.cwd() + "/data/db.json"));
  return new Low(adapter);
};
