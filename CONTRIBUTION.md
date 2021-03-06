# Contributing to Savitar

Thank you so much for taking an interest in contributing. There are multiple ways to contribute to this project.

#### Table Of Contents

[Code of Conduct](#code-of-conduct)

[Styleguides](#styleguides)
  * [Git Commit Messages](#git-commit-messages)
  * [JavaScript Styleguide](#javascript-styleguide)
  * [HTML Styleguide](#html-styleguide)

[How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Your First Code Contribution](#your-first-code-contribution)
  * [Pull Requests](#pull-requests)
  

[Attribution](#attribution)

## Code of Conduct

All developers contributing to this project abide by the [Code of Conduct](CODE_OF_CONDUCT.md) defined for this project. Violations should be reported at  [diwanji.parth@gmail.com](mailto:diwanji.parth@gmail.com).
Please follow these steps to have your contribution considered by the maintainers:




### HTML Styleguide

All HTML must adhere to [HTML Standard Style](https://google.github.io/styleguide/htmlcssguide.html).

* Use HTTPS for embedded resources where possible.
* Indent by 2 spaces at a time.
    * Don’t use tabs or mix tabs and spaces for indentation.
* Use only lowercase.
* Remove trailing white spaces.
* Make sure your editor uses UTF-8 as character encoding, without a byte order mark.
* HTML5 (HTML syntax) is preferred for all HTML documents: <!DOCTYPE html>.
* Use valid HTML where possible.
* Provide alternative contents for multimedia.
* Separate structure from presentation from behavior.
* Do not use entity references.
* Use a new line for every block, list, or table element, and indent every such child element.

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* When only changing documentation, include `[ci skip]` in the commit title

### JavaScript Styleguide

All JavaScript must adhere to [JavaScript Standard Style](https://standardjs.com/).

* Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
* Since this is a chrome extension, imports/exports and require is not recommended and cannot be used directly.
* If it is necessary to import/export modules, then please use inline `export`s with expressions whenever possible
  ```js
  // Use this:
  export default class ClassName {

  }

  // Instead of:
  class ClassName {

  }
  export default ClassName
  ```
* Place requires in the following order:
    * Built in Node Modules (such as `path`)
    * Built in Atom and Electron Modules (such as `atom`, `remote`)
    * Local Modules (using relative paths)
* Place class properties in the following order:
    * Class methods and properties (methods starting with `static`)
    * Instance methods and properties
* [Avoid platform-dependent code](https://flight-manual.atom.io/hacking-atom/sections/cross-platform-compatibility/)
* All files must end in a new line


## How Can I Contribute?

Each contribution counts for our project. So make sure to classify which is yours.

### Obvious Fixes

The Obvious Fixes comprise of: 

* Spelling / grammar fixes and Typo correction
* Formatting changes
* Comment and code clean up
* Bug fixes that change default return values or error codes stored in constants
* Adding logging messages or debugging output
* Updating documentation

One can go ahead and follow the [3-step process](#required-3-steps-for-contributing)

### Reporting Bugs

This section guides you through submitting a bug report for this repository. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

Before creating bug reports, please perform a cursory search to see if the problem has already been reported. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](#atom-and-packages) your bug is related to, create an issue on that repository and provide the following information by filling in [the template](https://github.com/atom/.github/blob/master/.github/ISSUE_TEMPLATE/bug_report.md).

Explain the problem and include additional details to help a developer reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. Alongwith it, provide the details regarding the name and version of OS, Python version, configuration of the environment, if used any.
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **If the problem is related to performance or memory**, include details of the errors encountered with your report.
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.


### Suggesting Enhancements and new features

This section guides you through submitting an enhancement suggestion for this project:


#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue on that repository with an enhancement or feature tag and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.

### Your First Code Contribution

#### First Time Contributors

We appreciate your contribution! If you are interested in improving Savitar, there are several ways to get started:

* Work on documentation issues.
* Ask via email or on the issue tracker about good beginner issues.

#### Required 3 Steps for contributing:
* Commit changes to a new git branch.
* Create a Pull-Request for the changes. Make sure to follow the [Pull Request Template](#pull-requests).
* Request a Code-Review from the project maintainers.


### Pull Requests

The process described here has several goals:

- Maintain code quality by following some basic [PEP 8 standards](https://www.python.org/dev/peps/pep-0008/)
- Fix problems that are important to users
- Enable a sustainable system for this project's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow the [styleguides](#styleguides)
2. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

Please include the following while creating a Pull Request:

* Link to the issue it addresses, if issues exist.
* A short description of what the Pull Request fixes or does (in case of a feature)



## Attribution

These Contributing guidelines are adapted from the [Atom's][homepage] contributing guidelines.

[homepage]: https://github.com/atom/atom/blob/master/CONTRIBUTING.md
