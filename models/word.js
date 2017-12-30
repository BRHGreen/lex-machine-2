export default (sequelize, DataTypes) => {
  const Word = sequelize.define('word', {
    word: DataTypes.STRING,
    partOfSpeach: DataTypes.STRING,
    definition: DataTypes.STRING,
  });

  return Word;
};
