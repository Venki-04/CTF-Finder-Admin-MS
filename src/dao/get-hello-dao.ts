import { connectToDb, sequelizeConnection } from "src/helpers/dbConnectionHelper";
import { User } from "src/interfaces/user";


export const helloData  = async (): Promise<any> => {
    connectToDb();
    return sequelizeConnection.query("SELECT * FROM emp_data", { type: sequelizeConnection.QueryTypes.SELECT});
 
}

export const helloDatasMocks  = async (): Promise<User> => {
    return new Promise((resolve, reject) => {
        try {
        resolve({name:'venki', age:12});
        }catch(ex) {
            reject(ex);
        }
    })
}