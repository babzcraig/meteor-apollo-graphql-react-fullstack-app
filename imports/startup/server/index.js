import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
type Query {
  hi: String,
  myName: String
}
`;

const resolvers = {
  Query: {
    hi() {
      return "Hello World! ";
    },
    myName() {
      return "Babasanya Craig";
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
