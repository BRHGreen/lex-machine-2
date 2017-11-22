export default (sequelize, DataTypes) => {
  const Profile = sequelize.define('profile', {
    age: DataTypes.INTEGER,
    occupation: DataTypes.STRING,
  });

  return Profile;
};
