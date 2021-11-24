module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "UTSC MSA",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "kvLCdcZ65Yo3l6770GWlK7ftrU5XEKaNCmMvTHcbSJQ",
        spaceId: "loneps9tkusn",
      },
    },
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-image",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
};
