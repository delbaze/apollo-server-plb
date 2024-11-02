import { authorLoader } from "../dataloaders/author.dataloader";
import { authors } from "./author.resolver";
interface IBook {
  id: string;
  title: string;
  authorId: string;
}
const books: IBook[] = [
  {
    id: "1",
    title: "Titre 1",
    authorId: authors[0].id,
  },
  {
    id: "2",
    title: "Titre 2",
    authorId: authors[1].id,
  },
  {
    id: "3",
    title: "Titre 3",
    authorId: authors[1].id,
  },
];

export default {
  Query: {
    books: () => books,
  },
  Book: {
    author: (book: IBook) => {
      // Simulation d'une "requête" à la base de données pour chaque auteur
      // Avec ce code, chaque livre va déclencher une "requête" pour récupérer l'auteur, simulant ainsi un appel N+1.
      
      // console.log(`Récupération de l'auteur ayant l'id : ${book.authorId}`);
      // return authors.find(author => author.id === book.authorId);
      return authorLoader.load(book.authorId); // solution avec le dataloader
    },
  },
};
