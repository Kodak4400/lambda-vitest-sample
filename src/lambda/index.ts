import { APIGatewayProxyHandlerV2 } from 'aws-lambda'

interface ApiResponse {
  isBase64Encoded: boolean
  statusCode: number
  body: string
  headers: {
    'content-type': string
  }
}

export const handler: APIGatewayProxyHandlerV2<Promise<ApiResponse>> = async event => {
  console.log(event)
  return {
    isBase64Encoded: false,
    statusCode: 200,
    body: JSON.stringify('test'),
    headers: {
      'content-type': 'application/json',
    },
  }
}
