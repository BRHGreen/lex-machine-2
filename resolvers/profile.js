import formatErrors from '../formatErrors';
import requiresAuth from '../permissions';

export default {
  Mutation: {
    createProfile: requiresAuth.createResolver(async (parent, args, { models, user }) => {
      try {
        await models.Profile.create({ ...args, owner: user.id });
        console.log('args:', args);
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
