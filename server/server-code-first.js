import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { queryType, makeSchema } from "nexus";

const Query = queryType({
    definition: (t) => {
        t.string('greeting', {
            resolve: () => 'Hello world!'
        })
    }
})

const schema = makeSchema({ types: [Query] })

const server = new ApolloServer({ schema });

startStandaloneServer(server, { listen: { port: 9000 } })
    .then((data) => console.log("Server running at 9000", JSON.stringify(data)))
    .catch((err) => console.log("Error while starting server", err?.message))