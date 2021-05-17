import { connectToDb, sequelizeConnection } from "src/helpers/dbConnectionHelper";
import { User } from "src/interfaces/user";


export const helloData  = async (): Promise<any> => {
    try {
    connectToDb();
    return sequelizeConnection.query("SELECT * FROM emp_data", { type: sequelizeConnection.QueryTypes.SELECT});
    } catch (ex) {
        console.log('exception at gethello dao' + ex);
    }
 
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