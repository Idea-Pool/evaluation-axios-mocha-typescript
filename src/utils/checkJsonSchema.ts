import { AxiosResponse } from 'axios'
import { expect, use } from 'chai'
import chaiJsonSchema from 'chai-json-schema'

use(chaiJsonSchema);

export function checkJSONSchema(response: AxiosResponse, schema: unknown): void {
  return expect(response.data).to.be.jsonSchema(schema);
}
