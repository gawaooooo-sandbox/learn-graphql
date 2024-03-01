/**
 * Importing the resolvers
 */

import Users from "./data.js";

const resolvers = {
  users: async () => {
    return Users;
  },
  user: async ({ id }, context) => {
    return Users.find((user) => user.id === id);
  },
};

export default resolvers;
