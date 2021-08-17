### Contributing guidelines

In general, we follow the "fork-and-pull" Git workflow:

1.  **Fork and clone** the repo on GitHub.
2.  **Configure and install** the dependencies `npm install`.
3.  **Create** a new branch: `git checkout -b branch-name`.
4.  **Commit** all your changes to your branch. Please write a good commit message see commit messages below.
5.  **Push** your work back up to your fork.
6.  **Submit a Pull Request** so that I can review your changes. Please add documentation and some details to the PR.

Keep your changes as focused as possible. If there are multiple changes you would like to make that are not dependent upon each other, consider submitting them as separate pull requests. Work in Progress pull requests are also welcome to get feedback early on, or if there is something blocked you.

## Resources

- [Using Pull Requests](https://help.github.com/articles/about-pull-requests/)

## Commit Message Guidelines

#### Commit Message Examples

Here is a template commit message:

```shell
git commit -m "prefix: message"
```

> **Note:** A `space` is required after the prefix.
> A prefix can be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing or correcting existing tests

For example, a commit message that make changes to redux handler would look like

```shell
git commit -m "fix: Message What handlers you are working on"
```

For commits that introduce a new feature (a feature release), prefix commit messages with
`feat:`:

```shell
git commit -m "feat: add my new feature"
```
