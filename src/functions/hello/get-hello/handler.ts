import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { helloData } from 'src/dao/get-hello-dao';


const gethello: ValidatedEventAPIGatewayProxyEvent<any> = async () => {
  try {
  const getresponse  =  await helloData();
  return formatJSONResponse(getresponse);
  } catch (err) {
    console.log('error at getHello function' + err);
    return err;
  }
}

export const main = middyfy(gethello);
