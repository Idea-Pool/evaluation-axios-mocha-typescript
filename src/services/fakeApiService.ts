import { endpoints } from './endpoints'
import { HTTPService } from './http'
import { AxiosResponse } from 'axios'
import { ErrorResponse } from './interfaces'

const url = 'http://fakeapi.jsonparseronline.com'

class fakeApiService extends HTTPService {
  constructor() {
    super({
      baseURL: url,
      });
  }

  async getAllPosts(
  ): Promise<AxiosResponse> {
    const response: AxiosResponse = await super.get(url + endpoints.allPosts)
    return response
  }

  async getPostById(
    id: number | string
    ): Promise<AxiosResponse> {
      const response: AxiosResponse = await super.get(url + endpoints.postById(id))
      return response
  }
    
  async postComments(
    body: any,
    ): Promise<AxiosResponse<ErrorResponse>> {
      const response: AxiosResponse<ErrorResponse> = await this.post(endpoints.comments, body, {
      })
      return response
  }
}

export default new fakeApiService()
