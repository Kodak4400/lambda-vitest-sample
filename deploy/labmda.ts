import { Stack, StackProps, RemovalPolicy } from 'aws-cdk-lib'
import { aws_lambda_nodejs as lambda_nodejs } from 'aws-cdk-lib'
import { aws_lambda as lambda } from 'aws-cdk-lib'
import { aws_logs as logs } from 'aws-cdk-lib'
import { aws_iam as iam } from 'aws-cdk-lib'

import { Construct } from 'constructs'

export class LambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    // Lambda
    const lambdaRole = new iam.Role(this, 'lambdaRole', {
      assumedBy: new iam.CompositePrincipal(
        new iam.ServicePrincipal('lambda.amazon.com')
      ),
      managedPolicies: [iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole')],
      path: '/lambda'
    })

    const lambdaFunction = new lambda_nodejs.NodejsFunction(this, 'lambadaFunction', {
      runtime: lambda.Runtime.NODEJS_14_X,
      entry: 'src/lambda/index.ts',
      role: lambdaRole,
      awsSdkConnectionReuse: false,
      environment: {}
    })

    new logs.LogGroup(this, 'lambdaFunctionLogGroup', {
      logGroupName: '/aws/lambda/' + lambdaFunction.functionName,
      retention: logs.RetentionDays.ONE_DAY,
      removalPolicy: RemovalPolicy.DESTROY,
    })
  }
}