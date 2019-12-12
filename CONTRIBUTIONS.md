# Contributing to DevCEldoret

🎉 First off, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to DevC and its repositories, which are hosted in the [DevCEldoret](https://github.com/DevCEldoret) Organization on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[Code of Conduct](#code-of-conduct)

[How Can I Contribute?](#how-can-i-contribute)
* [Reporting Bugs](#Issues)
* [Suggesting Enhancements](#Enhancements)
* [Pull Requests](#pull-requests)
* [Workflow](#workflow)

[Styleguides](#styleguides)
  * [Git Commit Messages](#git-commit-messages)
  * [Tests Styleguide](#tests-styleguide)
  * [API Documentation Styleguide](#api-documentation-style-guide)


## Issues

Check if the issue has been addressed or is in progress and if not , only then do you create a new issue. Remember to give it the appropriate [label](https://github.com/DevCEldoret/devceldoret-backend/labels)

## Enhancements
Describe the enhancement in mind and what you would expect to have resulted from this process. Submit the enhancement with the `enhancement` tag.

## Pull requests
Reference the issue or enhancement being referenced in the pull request and submit the pull request to the `development` branch.

## Workflow
We use the git workflow on our projects. If you are unfamiliar with the workflow, here is an awesome primer by [Atlassian](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow). Basically, we have a `master` branch that serves for official release cycles, a `develop` branch that sums up features for the next release. Each `feature/chore/bug-fix` needs to be in its own branch originating from the  `develop` branch. When the develop branch has acquired enough features for a `release`, a temporary branch is created (intuitively named **release**) to mark the next release cycle. At this point, **No new** features will be allowed, just bug fixes or documentations. When we are confident enough and after extensive testing, the new branch is merged to the `master` with a version number, it is merged into the `develop` branch to get the fixes or modifications made on the `release` branch. After all that, the branch is deleted and we go on and start working on features for the next release (from the `develop` branch).

## API Documentation Style Guide
Hello, gang.
Kindly follow instructions on these links to set up the API Blueprint on your editors.
1. VS Code - https://github.com/honzababarik/vscode-api-blueprint-preview
2. Atom - https://atom.io/packages/api-blueprint-preview
3. Sublime Text - https://github.com/apiaryio/api-blueprint-sublime-plugin.
**Only** the VS Code and Atom extensions have been tested so far, and they work. If you encounter any issues setting up your Blueprint Preview, we here to help. On successful installation, you can use the **commands** for your particular extension and you should end up with something like the image below (for those on VS Code).

![devc-api](https://user-images.githubusercontent.com/33445976/70603307-4b2fe400-1c07-11ea-98de-7cc0af9346bb.png)

From here on, you can make modifications to the .apib file in the repo locally, (which is the API Blueprint file) and we recommend that you test your API with Dredd before submitting your Blueprint changes. More on Dredd [here](https://dredd.org/en/latest/).