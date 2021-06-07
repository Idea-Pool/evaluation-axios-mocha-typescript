import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { globalAgent } from 'https'
import _ from 'lodash'

export class HTTPService {
  protected defaultConfig: AxiosRequestConfig;

  public constructor(protected readonly axiosConfig?: AxiosRequestConfig) {
    globalAgent.options.rejectUnauthorized = false;
      this.defaultConfig = {
        headers: {
          'Content-Type': 'application/json',
          },
          ...axiosConfig,
      };
  }

  protected async post<R>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
    const axiosPostConfig: AxiosRequestConfig = _.merge({}, this.defaultConfig, config);
      try {
        const instance = axios.create();
        const response = await instance.post<R>(url, data, axiosPostConfig);
        return response;
      } catch (error) {
        if (error.response) {
          return error.response;
        } else {
          return error;
        }
      } 
  }

  protected async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    const axiosGetConfig: AxiosRequestConfig = _.merge({}, this.defaultConfig, config);
      try {
        const instance = axios.create();
        const response = await instance.get<T>(url, axiosGetConfig);
        return response;
      } catch (error) {
        if (error.response) {
          return error.response;
        } else {
          return error;
        }
      } 
  }
}
