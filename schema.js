export default `
type User {
  id: Int!
  username: String!
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
    getUser(username: String!): User
    userWords(owner: String!): [Word!]!
  }

  type Mutation {
    createUser(username: String!): User
    updateUser(username: String!, newUsername: String!): [Int!]!
    deleteUser(username: String!): Int!
    createWord(owner: Int!, word: String!): Word!
  }
`;
