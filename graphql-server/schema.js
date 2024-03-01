/**
 * @apiDefine UserSchema
 */

import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Query {
        user(id: Int!): User!
        users: [User!]!
    }

    type User {
        id: ID!
        name: String!
        email: String
        posts: [Post!]
    }

    type Post {
        id: ID!
        title: String!
        published: Boolean!
        link: String
        author: User!
    }
`);

export default schema;
