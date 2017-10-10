export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany(models.Word, {
      foreignKey: 'owner',
    });
  };

  return User;
};
