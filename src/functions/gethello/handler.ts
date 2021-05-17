import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

// import schema from './schema';

const gethello : any= async (event: any) => {

  return formatJSONResponse({
    message: `Hello venki, welcome to the exciting Serverless world!`,
    event,
  });
}

export const main = middyfy(gethello);
