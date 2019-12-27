var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var _a = require('apollo-server'), ApolloServer = _a.ApolloServer, gql = _a.gql;
var typeDefs = gql(__makeTemplateObject(["\n\ttype Query {\n\t\thello: String\n\t}\n"], ["\n\ttype Query {\n\t\thello: String\n\t}\n"]));
var resolvers = {
    Query: {
        hello: function (root, args, context) { return 'Hello hmm k world!'; }
    }
};
var server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80 Server cool ye ready at " + url);
});
