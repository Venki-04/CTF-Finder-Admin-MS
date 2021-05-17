const { Sequelize } = require('sequelize');


export const sequelizeConnection = new Sequelize('dev', 'dbadmin', '^2C!Yi4HP^*59r8mfvA#', {
  host: 'shush-dev.cluster-c4c2sa6jb2rt.eu-west-2.rds.amazonaws.com',
  dialect: 'postgres' 
});


export const connectToDb = async() => {
  try {
  await sequelizeConnection.authenticate();
  console.log('Connection has been established successfully.');
  }
  catch (ex) {
    console.log('error at connecting to DB');
  }
}