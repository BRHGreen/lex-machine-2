import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import _ from 'lodash'

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
    me: (parent, args, { models, user }) => {
      // you specify `req.header.authenticaton` in the header in index.js so
      // that you can check here if they are authenticated or not
      if (user) {
        console.log('hit me');
        // logged in
        return models.User.findOne({
          where: {
            id: user.id,
          },
        });
      }
      // if not logged in
      return null;
    },
    userWords: (parent, { owner }, { models }) =>
      models.Word.findAll({
        where: {
          owner,
        },
      }),
  },

  Mutation: {
    updateUser: (parent, { username, newUsername }, { models }) =>
      models.User.update({ username: newUsername }, { where: { username } }),
    deleteUser: (parent, args, { models }) =>
      models.User.destroy({ where: args }),
    createWord: (parent, args, { models }) => models.Word.create(args),
    register: async (parent, args, { models }) => {
      const user = args;
      user.password = await bcrypt.hash(user.password, 12);
      return models.User.create(user);
    },
    login: async (parent, { email, password }, { models, SECRET }) => {
      const user = await models.User.findOne({ where: { email } });
      if (!user) {
        throw new Error('Not user with that email');
      }

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error('Incorrect password');
      }

      // token = '12083098123414aslkjdasldf.asdhfaskjdh12982u793.asdlfjlaskdj10283491'
      // verify: needs secret | use me for authentication
      // decode: no secret | use me on the client side
      const token = jwt.sign(
        {
          user: _.pick(user, ['id', 'username']),
        },
        SECRET,
        {
          expiresIn: '1y',
        },
      );
      return token;
    },
  },
};
