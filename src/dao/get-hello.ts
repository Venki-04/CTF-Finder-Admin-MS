import { sequelizeConnection } from "src/helpers/dbConnectionHelper";


export const helloData  = async (): Promise<any> => {


 
    await sequelizeConnection.authenticate();
    console.log('Connection has been established successfully.');
    sequelizeConnection.query("SELECT * FROM emp_data", { type: sequelizeConnection.QueryTypes.SELECT})

    // return new Promise((resolve: any, reject: any) => {
    //     try {
       
    //         resolve({
    //             "name": "test",
    //             "value": "any"
    //           });
    //     } catch (ex) {
    //         reject("error");
    //     }
    // });



  
}