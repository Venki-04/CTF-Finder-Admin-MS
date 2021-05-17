import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { helloData } from 'src/dao/get-hello-dao';


const gethello: ValidatedEventAPIGatewayProxyEvent<any> = async () => {
  const getresponse  =  await helloData();
  return formatJSONResponse(getresponse);
}

export const main = middyfy(gethello);
