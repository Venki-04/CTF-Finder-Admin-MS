import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';



const gethello: ValidatedEventAPIGatewayProxyEvent<any> = async (event) => {

  return formatJSONResponse({
    "name": "test",
    "value": event
  });
}

export const main = middyfy(gethello);
