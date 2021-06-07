import fakeApiService from 'services/fakeApiService'
import { message } from '../src/utils/messages'
import { checkJSONSchema } from 'utils/checkJsonSchema'
import { expect } from 'chai'
import * as getPostsSchema from '../src/jsonSchemas/getPosts.json' 

describe(`GET /posts`, async () => {

  it(`Positive test`, async () => {
    const response = await fakeApiService.getAllPosts()
    expect(response.status).to.be.equal(200, message.status)
    expect(response.data).to.not.be.empty
    expect(response.data).to.be.an('array')
    checkJSONSchema(response, getPostsSchema)
  })
})
