import axios from "axios";

export default {
  Query: {
    getUser: async (_: any, { id }: { id: string }) => {
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
