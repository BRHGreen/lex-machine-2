##Setting JWT in local storage

*before starting the following process our app is able to create users, hash and save their password. The purpose of the following is to save the users' JWT in local storage so that we can create authenticated routes*

- Install the following dependencies on the server: `yarn add bcrypt jsonwebtoken lodash`
- If using mobx nstall the following dependencies on the client: `yarn add mobx mobx-react`

#Backend

Create an `auth.js`. This should export three functions:
  - `createTokens` - currently only used within the `auth.js` itself, not sure why we're exporting it.
  - `createRefreshToken`. This is imported into your `server/index.js`
  - `tryLogin`. This is used in the user resolver

Within `server/index.js`:
  - Create another `SECRECT` called `SECRET2`. This will be used in `auth.js` to create the secret for the refreshTokens.
  - Now put the `addUser` middleware in.
  - Create `const graphqlEndpoint = '/graphql';`
  - Give the context of `graphqlExpress` access to the `req` and set the user equal to `req.user` and pass in `SECRET` and `SECRET2`
/*
This should be all you need to do within the `server/index.js`
At this point the mutation to add users from graphiql and the register form is still working.
/*

Within `schema.js` (or userSchmea if you have a separate file for this at this point)
  - create a type for `loginResponse` and `registerResponse` and have the login and register mutations return these types instead of the `userType` in the case of register and `String` in the case of login (this was set to log the response of the JWT)
  Among other things the login/registerResponse types will include a boolean which will be set to either true or false in the resolvers depending on whether the user has been created or has logged in successfully.
  - Create an errorType either in the same file or in an `error.js` (if you haven't done the `merge-graphql-schemas` in `server/index.js` by this point you will either need to put it in the same doc or import it separately in `index.js`)
  /* At this point the mutations will stop working because you need to return the `ok` field within the resolvers, so lets do that next*/

Within `resolvers.js`:
 - You'll need to import `bcrypt` and `tryLogin` from the `auth.js` which you set up earlier. You'll also want to create and import a `formatErrors` module.
  - You shouldn't need to make any changes to the queries here, it's the mutations you'll need to look at. There is too much going on here for me to include here. Just have a look at the resolvers themselves
/*
At this point I get a syntax error, the parser doesn't like the spread opporater on the args and throws `enexpected token` on this line:
`register: async (parent, { password, ...otherArgs }, { models }) =>`
RESOLVED: The problem seemed to be that I was not using the appropriate babel-compiler so the syntax was not recognised
*/
/*
Moving on to `models/index.js` to see if this problem becomes resolved.
* /

Within `models/index.js`
  - At this point you can (probably) remove the test_user and password from the sequelize constructor. NOTE: You cannot remove the user/password from this here. I got a Sequelize error when I did.
  Also add `underscored: true` so that you can use camelCase in your resolvers and make sure that the `db.sequelize` variables at the bottom of the file are uncommented.
/*Note that in the Slack-clone example the model is exported as `model` whereas in ours we're exporting as `db`*/

Within `models/user.js`
  - here we are going to use some Sequelize methods to help us validate the input fields for the forms

AT THIS POINT YOU ARE ABLE TO CREATE USERS ON USING THE REGISTER MUTATION IN GRAPHIQL

***Think that is it for the backend***

#Frontend
Within `src/index.js`
  - put in the React Apollo `networkInterface` middleware and afterware. This will put the JWT tokens in the header so you are able to be varified as an authenticated user when attempting to access authenticated routes.

You'll have to create/export/import the appropriate mutations in the appropriate places but that's pretty much it for the Frontend

/*
At this point I tested the register form, the registerResponse is returning `ok` and there are no errors in the console but the users are not being created in the DB and there is nothing in localStorage
*/











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
