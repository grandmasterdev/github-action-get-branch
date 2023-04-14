import { context } from "@actions/github";
import { setOutput } from "@actions/core";

export const run = () => {
  const refParts = context.ref.split("/");
  const branchName = refParts[refParts.length - 1];
  
  console.log("context ref: ", context.ref);
  console.log("branch name: ", branchName );

  setOutput('branch-name', branchName)
};

run();
