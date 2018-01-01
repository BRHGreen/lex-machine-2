export default `

type Word {
  id: Int!
  word: String
  partOfSpeach: String
  definition: String
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
  createWord(word: String!, partOfSpeach: String, definition: String ): WordResponse!
  updateWord(id: Int!, newWord: String!): [Int!]!
  deleteWord(word: String!): Int!
}
`;
