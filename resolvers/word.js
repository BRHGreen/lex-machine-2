import formatErrors from '../formatErrors';
import requiresAuth from '../permissions';

export default {
  Mutation: {
    updateWord: (parent, { word, newWord }, { models }) => models.Word.update({ word: newWord }, { where: { word } }),
    createWord: requiresAuth.createResolver(async (parent, args, { models, user }) => {
      try {
        await models.Word.create({ ...args, owner: user.id });
        return {
          ok: true,
        };
      } catch (err) {
        return {
          ok: false,
          errors: formatErrors(err, models),
        };
      }
    }),
  },
};
