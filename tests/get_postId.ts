import fakeApiService from 'services/fakeApiService'
import { message } from '../src/utils/messages'
import { checkJSONSchema } from 'utils/checkJsonSchema'
import { generateAlphanumericString } from 'utils/randomstrings'
import { expect } from 'chai'
import * as getPostByIdSchema from '/jsonSchemas/getPostId.json'

let id: number | string

describe('GET /posts/id', async () => {

  it(`Test with valid id`, async () => {
    id = 1
    const response = await fakeApiService.getPostById(id)
    expect(response.status).to.be.equal(200, message.status)
    expect(response.data).to.not.be.empty
    checkJSONSchema(response, getPostByIdSchema)
  })

  it(`Test with float id`, async () => {
    id = 1.1111
    const response = await fakeApiService.getPostById(id)
    expect(response.status).to.be.equal(404, message.status)
    expect(response.data).to.be.empty
  })

  it(`Test with float id`, async () => {
    id = -1
    const response = await fakeApiService.getPostById(id)
    expect(response.status).to.be.equal(404, message.status)
    expect(response.data).to.be.empty
  })

  it(`Test with null instead id`, async () => {
    id = null
    const response = await fakeApiService.getPostById(id)
    expect(response.status).to.be.equal(404, message.status)
    expect(response.data).to.be.empty
  })

  it(`Test with undefined instead id`, async () => {
    id = undefined
    const response = await fakeApiService.getPostById(id)
    expect(response.status).to.be.equal(404, message.status)
    expect(response.data).to.be.empty
  })

  it(`Test with random alphabetic string instead id`, async () => {
    id = generateAlphanumericString(2)
    const response = await fakeApiService.getPostById(id)
    expect(response.status).to.be.equal(404, message.status)
    expect(response.data).to.be.empty
  })
})
