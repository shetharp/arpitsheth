module.exports = {
  // pathPrefix: "/arpitsheth",

  // TODO - Update site metadata to reflect your site's info
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Arpit Sheth`,
    // Default title of the page
    siteTitleAlt: `Arpit Sheth`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Arpit Sheth`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://arpitsheth.com/`,
    // Used for SEO
    siteDescription: `🎈 I am a startup-savvy engineer building technology for a more creative future.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.png`,
    // Twitter Handle
    author: `@shetharp`,
  },
  plugins: [
    {
      resolve: `@shetharp/gatsby-theme-polaroid`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-34029885-1", // TODO - Configure Google Analytics for your site
      },
    },
    `gatsby-plugin-sitemap`,
    {
      // TODO - Update manifest options for your site
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Arpit Sheth`,
        short_name: `arpitsheth`,
        description: `🎈 I am a startup-savvy engineer building technology for a more creative future.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#333333`,
        display: `standalone`,
        icons: [
          {
            src: `/favicon-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      // TODO - Update webfonts for your site.
      // Alternatively, you can install Google Fonts as npm packages with the Typefaces Project
      // Learn more: https://github.com/KyleAMathews/typefaces
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["DM+Mono:ital,wght@0,300;0,500;1,300;1,500"],
        },
      },
    },
  ],
};
