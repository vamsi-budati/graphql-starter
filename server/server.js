import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//Schema(interface)
const typeDefs = `#graphql
    type Query {
        greeting: String
    }
`;

// Implementation
const resolvers = {
    Query: {
        greeting: () => 'Hello world!'
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, { listen: { port: 9000 } })
    .then((data) => console.log("Server running at 9000", JSON.stringify(data)))
    .catch((err) => console.log("Error while starting server", err?.message))