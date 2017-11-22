export default `

type Profile {
  id: Int!
  age: Int
  occupation: String
  owner: Int!
}

type ProfileResponse {
  ok: Boolean!
  errors: [Error!]
}

type Mutation {
  createProfile(age: Int, occupation: String): ProfileResponse!
}
`;
