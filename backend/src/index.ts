import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import axios from "axios";

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

type User {
  id: String
  name: String
  username: String
  email: String
  phone: String
  website: String
}
  type Query {
    books: [Book]
    getUser(id: String): User
  }
`;
const books = [
  {
    title: "Titre 1",
    author: "Auteur 1",
  },
  {
    title: "Titre 2",
    author: "Auteur 2",
  },
];

const resolvers = {
  Query: {
    books: () => books,
    getUser: async (_: any, { id }: { id: number }) => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const user = response.data;
        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      } catch (error) {
        console.error(
          "Erreur lors de la récupération de l'utilisateur :",
          error
        );
        throw new Error("Erreur lors de la récupération de l'utilisateur.");
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function main() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
}
main();
