import formatErrors from '../formatErrors';
import requiresAuth from '../permissions';

export default {
  Query: {
    getWord: (parent, { id }, { models }) => models.Word.findOne({ where: { id } }),
  },
  Mutation: {
    deleteWord: (parent, args, { models }) =>
      models.Word.destroy({ where: args }),
    updateWord: (parent, {
      id,
      newWord,
      newPartOfSpeach,
      newDefinition,
    }, { models }) => models.Word.update({
      word: newWord,
      partOfSpeach: newPartOfSpeach,
      definition: newDefinition,
    }, { where: { id } }),
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
