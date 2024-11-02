export const authors = [
  {
    id: "1",
    name: "Gabriel Garcia Marquez",
    age: 87,
    nationality: "Colombian",
  },
  {
    id: "2",
    name: "Haruki Murakami",
    age: 74,
    nationality: "Japanese",
  },
  {
    id: "3",
    name: "Toni Morrison",
    age: 88,
    nationality: "American",
  },
  {
    id: "4",
    name: "George Orwell",
    age: 46,
    nationality: "British",
  },
];

export default {
  Query: {
    authors: () => authors,
  },
};
