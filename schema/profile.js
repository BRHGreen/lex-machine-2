export default `

type Profile {
  id: Int!
  age: Int
  owner: Int!
}

type ProfileResponse {
  ok: Boolean!
  errors: [Error!]
}

type Mutation {
  createProfile(age: Int): ProfileResponse!
}
`;
