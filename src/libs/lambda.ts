import middy from "@middy/core"
import middyJsonBodyParser from "@middy/http-json-body-parser"

export const middyfy = (handler) => {
  console.log('called at middyfy', handler);
  return middy(handler).use(middyJsonBodyParser())
}
