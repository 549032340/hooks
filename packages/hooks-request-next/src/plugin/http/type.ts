import { BaseHttpRequest, LambdaParam, LambdaHTTPMethod } from '../../core/type'
export interface HttpRequest extends BaseHttpRequest {
  baseURL: string
}

export interface HttpLambdaParam extends HttpRequest {
  url?: string
  method?: LambdaHTTPMethod
  data?: {
    args?: any[]
  }
}
