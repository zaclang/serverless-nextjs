const { stage = 'dev' } = require('minimist')(process.argv.slice(2));
const appName = `zaclang-serverless-next-${stage}`;

module.exports[appName] = {
  component: "@sls-next/serverless-component@1.16.0-alpha.1",
  inputs: {
    // runtime: "nodejs12.x",
    // logLambdaExecutionTimes: true,
    domain: ["app", "zaclang.com"], //[subdomain, domain],
    bucketName: appName,
    verbose: true
  }
};
