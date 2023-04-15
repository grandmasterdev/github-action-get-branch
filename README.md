# github-action-get-branch

Get the active branch in the workflow.

## How to use it

The basic usage will be as follows:

```yaml
- uses: grandmasterdev/github-action-get-branch@latest
```

## Making use of the output

### 1. Within Workflow Steps

```yaml
steps:
  - id: get-branch
    uses: grandmasterdev/github-action-get-branch@latest

  - name: using output
    run: |
      echo ${{steps.get-branch.outputs.branch-name}}
```

### 2. Within Workflow Jobs

```yaml
jobs:
  job1:
    runs-on: ubuntu-latest

    outputs:
      branch-name: ${{steps.get-branch.outputs.branch-name}}

    steps:
      - id: get-branch
        uses: grandmasterdev/github-action-get-branch@latest

  job2:
    runs-on: ubuntu-latest

    steps:
      - name: using output
        run: |
          echo ${{job1.outputs.branch-name}}
```

