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

  
export default {
    Query: {
        books: () => books
    }

}