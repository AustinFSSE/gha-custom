const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

async function run() {
  // Your code to deploy to S3 goes here
  const bucketName = core.getInput('bucket-name');
  const region = core.getInput('region');
  const distFolder = core.getInput('dist-folder');

  core.notice(`Deploying to S3 bucket: ${bucketName}, region: ${region}, from folder: ${distFolder}`);
}

run();