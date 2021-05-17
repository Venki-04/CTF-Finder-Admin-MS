// import schema from './schema';
import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.gethello`,
  events: [
    {
      http: {
        method: 'get',
        path: 'gethello'
        
      }
    }
  ]
}
