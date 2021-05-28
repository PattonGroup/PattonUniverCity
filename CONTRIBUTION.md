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
