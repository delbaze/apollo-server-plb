import DataLoader from "dataloader";
import { authors } from "../resolvers/author.resolver";

// Fonction pour récupérer les auteurs par IDs
const getAuthorsByIds = async (ids: ReadonlyArray<string>) => {
  return ids.map((id) => authors.find((author) => author.id === id));
};

export const authorLoader = new DataLoader(getAuthorsByIds);
