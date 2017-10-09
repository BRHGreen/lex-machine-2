export default (sequelize, DataTypes) => {
  const Word = sequelize.define('word', {
    name: DataTypes.STRING,
  });

  return Word;
};
