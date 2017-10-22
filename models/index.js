import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  'lex_machine_2_3',
  'test_username_1',
  'test_password_1',
  {
    host: 'localhost',
    dialect: 'postgres',
    define: {
      underscored: true,
    },
  },
);


const db = {
  User: sequelize.import('./user'),
  Word: sequelize.import('./word'),
};

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

// needed to run the sequelize.sync in index
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
