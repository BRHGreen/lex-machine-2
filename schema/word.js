export default `

type Word {
  id: Int!
  word: String
  owner: Int!
}

type Query {
  getWord(id: Int): Word
}

type WordResponse {
  ok: Boolean!
  errors: [Error!]
}

type Mutation {
  createWord(word: String!): WordResponse!
  updateWord(word: String!, newWord: String!): [Int!]!
  deleteWord(word: String!): Int!
}
`;
