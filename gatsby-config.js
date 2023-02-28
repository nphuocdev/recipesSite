/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    //siteUrl: `https://www.yourdomain.tld`,
    description: "Nice and clean recipes site",
    author:"@mynameisphuoc",
    person:{name:"phuoc",age:23},
    simpleData:["item 1","item 2"],
    complexData:[
      {name:"phuoc", age: 23},
      {name:"thu",age: 22}
    ],

  },
  flags: {
    DEV_SSR: true
  },
   plugins: [
    // "gatsby-plugin-google-gtag",
 `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      // The unique name for each instance
      name: `images`,
      // Path to the directory
      path: `${__dirname}/src/assets/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      // The unique name for each instance
      name: `examples`,
      // Path to the directory
      path: `${__dirname}/src/examples`,
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `ntz7etvruti4`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken:process.env.CONTENTFUL_API_KEY
    },
  },
  {
    resolve: `gatsby-plugin-webfonts`,
    options: {
      fonts: {
        google: [
          {
            family: "Roboto",
            variants: [ "400"],
          },
          {
            family: "Open Sans Condensed",
            variants: ["400", "500","600","700"],
          },
        ],
      },
    },
  },
  `gatsby-plugin-react-helmet`,
  ],
};  