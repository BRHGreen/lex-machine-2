##Setting JWT in local storage

*before starting the following process our app is able to create users, hash and save their password. The purpose of the following is to save the users' JWT in local storage so that we can create authenticated routes*

- Install the following dependencies on the server: `yarn add bcrypt jsonwebtoken lodash`
- If using mobx nstall the following dependencies on the client: `yarn add mobx mobx-react`

- Create an `auth.js`. This should export three functions:
  - `createTokens` - currently only used within the `auth.js` itself, not sure why we're exporting it.
  - `createRefreshToken`. This is imported into your `server/index.js`
  - `tryLogin`. This is used in the user resolver

- Within `server/index.js`:
  - Create another `SECRECT` called `SECRET2`. This will be used in `auth.js` to create the secret for the refreshTokens.
  - Now put the `addUser` middleware in.
  - Create `const graphqlEndpoint = '/graphql';`
  - Give the context of `graphqlExpress` access to the `req` and set the user equal to `req.user` and pass in `SECRET` and `SECRET2`
*This should be all you need to do within the `server/index.js`*




These mutations/queries work on the CRUD actions created by the end of the first tutorial.
mutation {
  deleteUser(username: "Sally")
}

mutation {
  createUser(username: "Sean") {
    id
    username
    createdAt
  }
}
mutation {
  updateUser(username: "Sean", newUsername: "Shaun")
}

{
	getUser(username: "Jimbob") {
    username
    createdAt
    updatedAt
  }
}

{
  allUsers {
    username
  }
}
