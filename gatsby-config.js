module.exports = {
    siteMetadata: {
        title: `Craftbeer by tmkznk`,
        description: `Make every day a little more joyful`,
        author: `@tmkznk`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#00d1b2`,
                theme_color: `#00d1b2`,
                display: `minimal-ui`,
                icon: `src/images/craftbeer-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: "gatsby-source-graphql",
            options: {
                typeName: "TMKZNK",
                fieldName: "tmkznk",
                url: "https://api-euwest.graphcms.com/v1/ck0sbl17q0fzw01ebh70w23ao/master",
            },
        },
        `gatsby-plugin-sass`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
    pathPrefix: `/craftbeer`,
}
