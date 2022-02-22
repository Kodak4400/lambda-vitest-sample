import { App } from 'aws-cdk-lib'
import { LambdaStack } from './labmda'

const app = new App()

new LambdaStack(app, 'Create-LambdaStack', { env: { region: 'ap-northeast-1' } })
