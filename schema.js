export default `
type User {
  id: Int!
  username: String!
  email: String
  createdAt: String!
  updatedAt: String!
  words: [Word!]!
}
type Word {
  id: Int!
  word: String
  owner: Int!
}

  type Query {
    allUsers: [User!]
    me: User
    userWords(owner: String!): [Word!]!
  }

  type Mutation {
    updateUser(username: String!, newUsername: String!): [Int!]!
    deleteUser(username: String!): Int!
    createWord(owner: Int!, word: String!): Word!
    register(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): String!
  }
`;
