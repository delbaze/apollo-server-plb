import { authors } from "./author.resolver";

const books = [
  {
    id: "1",
    title: "Titre 1",
    author: authors[0],
  },
  {
    id: "2",
    title: "Titre 2",
    author: authors[1],
  },
];

export default {
  Query: {
    books: () => books,
  },
};
