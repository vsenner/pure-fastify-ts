#!/usr/bin/env node

const {execSync} = require('child_process');

const runCommand = command => {
  try {
    execSync(`${command}`, {stdio: 'inherit'});
  } catch (e) {
    console.error(`Failed to execute ${command}`);
    return false;
  }
  return true;
};

const dirName = process.argv[2] || 'pure-fastify-ts';

const gitCheckoutCommand = `git clone --depth 1 https://github.com/vsenner/pure-fastify-ts ${dirName}`;

const installPackagesCommand = `cd ${dirName} && npm install`;

console.log(`Cloning repository with name ${dirName}`);

const isCloned = runCommand(gitCheckoutCommand);

if (!isCloned) process.exit(-1);

const isInstalled = runCommand(installPackagesCommand);

if (!isInstalled) process.exit(-1);

console.log("Finished! Follow the following command to start!\n");
console.log(`###### cd ${dirName} && npm run start ######`);


