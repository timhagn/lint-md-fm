# lint-md-fm

**GitHub Action linting markdown &amp; its frontmatter content.**

## Development

This repo has been created with `yarn`.

To be able to test the action also install [`act`](https://github.com/nektos/act).

Further, to publish the action without `node_modules` coming in the way,
install [ncc](https://www.npmjs.com/package/@vercel/ncc).

To ease formatting, `prettier` is installed and may be called for testing with:

```shell
yarn format
```

and with

```shell
yarn format:fix
```

to automatically fix formatting.

## Info

More info on creating JavaScript GitHub actions may be found on
[GitHub](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action).

---

## Currently: Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to
the log.

## Inputs

| **Input Name**       | **Required** | **Description**                                                                                                |
|----------------------|--------------|----------------------------------------------------------------------------------------------------------------|
| changed-files        | true         | Which files to lint, get from [tj-actions/changed-files](https://github.com/marketplace/actions/changed-files) |
| directories          | true         | Multiple directories to search in.                                                                             |
| markdown-extensions  | true         | Multiple extensions of Markdown files to check for.                                                            |
| image-extensions     | true         | Multiple extensions of image files to check for.                                                               |
|----------------------|--------------|----------------------------------------------------------------------------------------------------------------|

## Outputs

## `changed`

Which files where changed.

## Example usage

```yaml
      - name: Lint Current PR
        id: lint
        uses: timhagn/lint-md-fm@v1.0.9
        with:
          changed-files: ${{ steps.changed_files.outputs.all_modified_files }}
          directories: |
            projects
            img
          markdown-extensions: |
            md
            mdx
          image-extensions: |
            png
            svg
            jpg
            jpeg
```

---

## TODO

Adapt this action to one we can use to check the
[ecosystem projects](https://github.com/solana-labs/ecosystem) for:

- [ ] project files in a PR not correctly named `{project-name}.md` with `.md` ext
- [ ] missing or misnamed logo files
- [ ] logo files in the wrong format (not SVG / PNG / JPG)
- [ ] (only for bonus-points: image sizes)
- [ ] categories not in the `CATEGORY_MAPPING`
- [ ] adapt this README file to the functionality of the final action

Find [`gray-matter`](https://www.npmjs.com/package/gray-matter) already
installed to work with Markdown & Frontmatter.
