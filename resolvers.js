export default {
  User: {
    words: ({ id }, args, { models }) =>
      models.Word.findAll({
        where: {
          owner: id,
        },
      }),
  },
  Query: {
    allUsers: (parent, args, { models }) => models.User.findAll(),
    getUser: (parent, { username }, { models }) =>
      models.User.findOne({
        where: {
          username,
        },
      }),
    userWords: (parent, { owner }, { models }) =>
      models.Word.findAll({
        where: {
          owner,
        },
      }),
  },

  Mutation: {
    createUser: (parent, args, { models }) => models.User.create(args),
    updateUser: (parent, { username, newUsername }, { models }) =>
      models.User.update({ username: newUsername }, { where: { username } }),
    deleteUser: (parent, args, { models }) =>
      models.User.destroy({ where: args }),
    createWord: (parent, args, { models }) => models.Word.create(args),
  },
};
