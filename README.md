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

## Markdown Frontmatter & project files linter

This action checks all added files of a push / PR to the 
[solana-labs/ecosystem](https://github.com/solana-labs/ecosystem) repo.

## Inputs

| **Input Name**      | **Required** | **Default**                     | **Description**                                                                                                |
| ------------------- | ------------ | ------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| repoToken           | true         | -                               | The `GITHUB_TOKEN` to be bale to post comments on the PR.                                                      |
| debug               | false        | false                           | Show additional info.                                                                                          |
| changed-files       | true         | -                               | Which files to lint, get from [tj-actions/changed-files](https://github.com/marketplace/actions/changed-files) |
| directories         | false        | "projects", "img"               | Multiple directories to search in.                                                                             |
| markdown-extensions | true         | ".md", ".mdx"                   | Multiple extensions of Markdown files to check for.                                                            |
| image-extensions    | false        | ".svg", ".png", ".jpg", ".jpeg" | Multiple extensions of image files to check for.                                                               |
| fuzzy-search        | false        | true                            | Should the existing projects be checked for duplicates with nearest neighbor (fuzzy) search.                   |

## Outputs

## `changed`

Which files where changed.

## Example usage

```yaml
- name: Lint Current PR
  id: lint
  uses: timhagn/lint-md-fm@v1.0.12
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
    fuzzy-search: true
```

---

## TODO

Adapt this action to one we can use to check the
[ecosystem projects](https://github.com/solana-labs/ecosystem) for:

- [x] project files in a PR not correctly named `{project-name}.md` with `.md` ext
- [x] missing or misnamed logo files
- [x] logo files in the wrong format (not SVG / PNG / JPG)
- [x] (only for bonus-points: image sizes)
- [x] categories not in the `CATEGORY_MAPPING`
- [x] add strict / fuzzy matching for `slug` & `title` duplicate checking
- [x] cleaned up reporting / logging
- [x] adapt this README file to the functionality of the final action

Find [`gray-matter`](https://www.npmjs.com/package/gray-matter) already
installed to work with Markdown & Frontmatter.
