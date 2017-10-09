export default (sequelize, DataTypes) => {
  const Word = sequelize.define('word', {
    word: DataTypes.STRING,
  });

  return Word;
};
