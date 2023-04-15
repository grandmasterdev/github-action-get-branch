import * as cut from "./index";
import { setOutput } from "@actions/core";
import { mocked } from "jest-mock";

jest.mock("@actions/core");
jest.mock("@actions/github", () => {
  return {
    context: {
      ref: "refs/heads/master",
    },
  };
});

describe("run tests", () => {
  const mockedSetOutput = mocked(setOutput);
  const mockedConsole = mocked(console);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should set output to github action", () => {
    (mockedConsole.log as jest.Mocked<typeof console.log>) = jest.fn();

    cut.run();

    expect(mockedConsole.log).toHaveBeenCalledTimes(3);
    expect(mockedConsole.log).toHaveBeenNthCalledWith(
      3,
      "branch name: ",
      "master"
    );
    expect(mockedSetOutput).toHaveBeenCalled();
    expect(mockedSetOutput).toHaveBeenCalledWith("branch-name", "master");
  });
});
