export default `
type User {
  id: Int!
  username: String!
  email: String
  createdAt: String!
  updatedAt: String!
  words: [Word!]!
}

type Query {
  allUsers: [User!]
  getUser: [User!]!
  userWords(owner: String!): [Word!]!
}

type RegisterResponse {
  ok: Boolean!
  user: User
  errors: [Error!]
}

type LoginResponse {
  ok: Boolean!
  token: String
  refreshToken: String
  errors: [Error!]
}

type Mutation {
  updateUser(username: String!, newUsername: String!): [Int!]!
  deleteUser(username: String!): Int!
  register(username: String!, email: String!, password: String!): RegisterResponse!
  login(email: String!, password: String!): LoginResponse!
}

`;
