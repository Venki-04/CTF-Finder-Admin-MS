import { connectToDb, sequelizeConnection } from "src/helpers/dbConnectionHelper";


export const helloData  = async (): Promise<any> => {
    connectToDb();
    return sequelizeConnection.query("SELECT * FROM emp_data", { type: sequelizeConnection.QueryTypes.SELECT});
 
}

export const helloDatasMocks  = async (): Promise<any> => {
    return new Promise((resolve, reject) => {
        try {
        resolve('data');
        }catch(ex) {
            reject(ex);
        }
    })
}