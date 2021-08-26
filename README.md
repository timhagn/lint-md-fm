# lint-md-fm
**GitHub Action linting markdown &amp; its frontmatter content.**

## Development

This repo has been created with `yarn`. 
To be able to test the action also install [`act`](https://github.com/nektos/act).

## Info

More info on creating JavaScript GitHub actions may be found on 
[GitHub](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action). 

---

## Currently: Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to 
the log.

## Inputs

## `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

## `time`

The time we greeted you.

## Example usage

```yaml
uses: actions/lint-md-fm@v0.0.1
with:
    who-to-greet: 'Mona the Octocat'
```

---

## TODO

Adapt this action to one we can use to check the 
[ecosystem projects](https://github.com/solana-labs/ecosystem) for:
- project files in a PR not correctly named `{project-name}.md` with `.md` ext
- missing or misnamed logo files
- logo files in the wrong format (not SVG / PNG / JPG)
- (only for bonus-points: image sizes)
- categories not in the `CATEGORY_MAPPING`

Find [`gray-matter`](https://www.npmjs.com/package/gray-matter) already 
installed to work with Markdown & Frontmatter.
