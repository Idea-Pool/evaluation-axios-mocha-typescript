import fakeApiService from 'services/fakeApiService'
import { message } from '../src/utils/messages'
import { checkJSONSchema } from '../src/utils/checkJsonSchema'
import { postComments } from '../src/services/interfaces'
import { expect } from 'chai'
import * as postCommentsSchema from '../src/jsonSchemas/postComments.json'
import { generateAlphabeticString } from '../src/utils/randomstrings'
import _ from 'lodash'

let body: postComments
let invalidData: postComments

describe(`POST /comments`, async () => {

  body = {
    userId: 1,
    body: generateAlphabeticString(10),
    postId: 1
  }

  it(`Test with valid body`, async () => {
    const response = await fakeApiService.postComments(body)
    expect(response.status).to.be.equal(200, message.status)
    expect(response.data).to.not.be.empty
    checkJSONSchema(response, postCommentsSchema)
  })

  it(`Test with empty object instead body`, async () => {
    const response = await fakeApiService.postComments({})
    expect(response.status).to.be.equal(200, message.status)
    expect(response.data.message).to.be.equal(message.allFields)
    expect(response.data.success).to.be.equal(false)
  })

  it(`Test with empty string instead body`, async () => {
    const response = await fakeApiService.postComments('')
    expect(response.status).to.be.equal(200, message.status)
    expect(response.data.message).to.be.equal(message.allFields)
    expect(response.data.success).to.be.equal(false)
  })

  it(`Test with null instead body`, async () => {
    const response = await fakeApiService.postComments(null)
    expect(response.status).to.be.equal(200, message.status)
    expect(response.data.message).to.be.equal(message.allFields)
    expect(response.data.success).to.be.equal(false)
  })

  it(`Test with undefined instead body`, async () => {
    const response = await fakeApiService.postComments(undefined)
    expect(response.status).to.be.equal(200, message.status)
    expect(response.data.message).to.be.equal(message.allFields)
    expect(response.data.success).to.be.equal(false)
  })

  it(`Test with null instead userId`, async () => {
    invalidData = _.cloneDeep(body)
    invalidData.userId = null
    const response = await fakeApiService.postComments(invalidData)
    expect(response.status).to.be.equal(200, message.status)
    expect(response.data.message).to.be.equal(message.allFields)
    expect(response.data.success).to.be.equal(false)
  })

  it(`Test with undefined instead userId`, async () => {
    invalidData = _.cloneDeep(body)
    invalidData.userId = undefined
    const response = await fakeApiService.postComments(invalidData)
    expect(response.status).to.be.equal(200, message.status)
    expect(response.data.message).to.be.equal(message.allFields)
    expect(response.data.success).to.be.equal(false)
  })

  it(`Test with float number instead userId`, async () => {
    invalidData = _.cloneDeep(body)
    invalidData.userId = 1.111
    const response = await fakeApiService.postComments(invalidData)
    expect(response.status).to.be.equal(200, message.status)
    expect(response.data).to.not.be.empty
  })

  it(`Test with null instead postId`, async () => {
    invalidData = _.cloneDeep(body)
    invalidData.postId = null
    const response = await fakeApiService.postComments(invalidData)
    expect(response.status).to.be.equal(200, message.status)
    expect(response.data.message).to.be.equal(message.allFields)
    expect(response.data.success).to.be.equal(false)
  })

  it(`Test with undefined instead postId`, async () => {
    invalidData = _.cloneDeep(body)
    invalidData.postId = undefined
    const response = await fakeApiService.postComments(invalidData)
    expect(response.status).to.be.equal(200, message.status)
    expect(response.data.message).to.be.equal(message.allFields)
    expect(response.data.success).to.be.equal(false)
  })

  it(`Test with float number instead postId`, async () => {
    invalidData = _.cloneDeep(body)
    invalidData.postId = 1.111
    const response = await fakeApiService.postComments(invalidData)
    expect(response.status).to.be.equal(200, message.status)
    expect(response.data).to.not.be.empty
  })

  it(`Test with float number instead postId`, async () => {
    invalidData = _.cloneDeep(body)
    invalidData.postId = -1
    const response = await fakeApiService.postComments(invalidData)
    expect(response.status).to.be.equal(200, message.status)
    expect(response.data).to.not.be.empty
  })

  it(`Test with null instead body`, async () => {
    invalidData = _.cloneDeep(body)
    invalidData.body = null
    const response = await fakeApiService.postComments(invalidData)
    expect(response.status).to.be.equal(200, message.status)
    expect(response.data.message).to.be.equal(message.allFields)
    expect(response.data.success).to.be.equal(false)
  })

  it(`Test with undefined instead body`, async () => {
    invalidData = _.cloneDeep(body)
    invalidData.body = undefined
    const response = await fakeApiService.postComments(invalidData)
    expect(response.status).to.be.equal(200, message.status)
    expect(response.data.message).to.be.equal(message.allFields)
    expect(response.data.success).to.be.equal(false)
  })

  it(`Test with empty string instead body`, async () => {
    invalidData = _.cloneDeep(body)
    invalidData.body = ''
    const response = await fakeApiService.postComments(invalidData)
    expect(response.status).to.be.equal(200, message.status)
    expect(response.data).to.not.be.empty
  })
})
