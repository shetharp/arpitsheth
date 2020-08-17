# arpitsheth web

![GitHub last commit](https://img.shields.io/github/last-commit/shetharp/arpitsheth?logo=github&style=for-the-badge)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/shetharp/arpitsheth/gh-pages?label=Last%20Deployed&logo=github&style=for-the-badge)

My personal website & portfolio.

### [👨‍🚀 View Website →](https://arpitsheth.com/)

**[🖋 View Colophon →](https://arpitsheth.com/colophon)**

_Steal the look with [gatsby-theme-polaroid](https://github.com/shetharp/gatsby-theme-polaroid)._

---

# Set Up

<details>
  <summary>
    <strong>Prerequisites</strong>
  </summary>

  - Ensure you have 
  [Node](https://nodejs.org/en/download/), 
  [Yarn](https://yarnpkg.com/), and 
  [Gatsby CLI](https://www.gatsbyjs.com/docs/quick-start/)
  installed on your machine before proceeding.

  - Clone this repo locally and `cd` into it
</details>

1. Install dependencies
    ```shell
    yarn
    ```

2. Run Gatsby development server
    ```shell
    gatsby develop
    ```
    _You can also use `yarn develop`, which is defined in the `scripts` section of the `package.json` file._

3. Start making changes! You can see your changes get hot-reloaded in your browser.
    - [Add content](https://github.com/shetharp/gatsby-theme-polaroid/wiki/Add-Content) with gatsby-theme-polaroid
    - [Customizing and Shadowing](https://github.com/shetharp/gatsby-theme-polaroid/wiki/Customizing-and-Shadowing) with gatsby-theme-polaroid
    - Occassionally, you might make a change (such as deleting a file or adding a file to shadow) 
      which requires you to clear your cache or restart your development server. 
      You can do this by stoping your development server (`CTRL + C`),
      running `gatsby clean`, followed by `gatsby develop`.


# Deploy and Publish

<details>
  <summary>
    <strong>Deployment details</strong>
  </summary>

  This website is deployed using GitHub Pages.
  The domain provider for `arpitsheth.com` is configured to point to GitHub's domain name servers.
  The domain `arpitsheth.com` is added to the `CNAME` file in the root directory of the repo,
  which lets GitHub's DNS know to serve this website for that domain.
  
  There is currently no CI/CD process for automatic deployments. 
  You must follow the steps below to deploy and publish your changes.
</details>

1. Once you are done making changes, it's a good idea to test them with a production build.
    ```shell
    gatsby build
    ```
2. Then, serve your build to view the production optimized website locally.
    ```shell
    gatsby serve
    ```
3. Make sure all of your changes are commited and merged into the **`master`** branch. The deployment step deploys only the latest commit from **`master`**.

4. If everything looks good, deploy!
    ```shell
    yarn deploy
    ```

5. Navigate to https://arpitsheth.com to view your deployment! _(It might take a moment)._


# Built with gatsby-theme-polaroid

### [📖 Read Wiki Documentation →](https://github.com/shetharp/gatsby-theme-polaroid/wiki)
