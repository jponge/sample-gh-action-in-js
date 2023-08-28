const core = require('@actions/core');
const github = require('@actions/github');

function yolo() {
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);

    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
}

try {
    yolo();
} catch (error) {
    core.setFailed(error.message);
}