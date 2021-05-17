
export const helloData  = (): Promise<any> => {
   
    return new Promise((resolve: any, reject: any) => {
        try {
            resolve({
                "name": "test",
                "value": "any"
              });
        } catch (ex) {
            reject("error");
        }
    });

  
}