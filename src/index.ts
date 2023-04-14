import { context } from "@actions/github";

export const run = () => {
  console.log('context ref: ', context.ref)
};


run();