const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const beerTemplate = path.resolve(`src/templates/beerTemplate.js`)

    const beerQuery = await graphql(`{
        tmkznk {
            beers: beersConnection(first: 100) {
                edges {
                    node {
                        status
                        updatedAt
                        createdAt
                        id
                        name
                        slug
                        style
                        description
                        brewery {
                            id
                            name
                        }
                        vol
                        image{
                            url
                        }
                    }
                }
            }
        }
    }`);

    beerQuery.data.tmkznk.beers.edges.forEach(beer => {
        createPage({
            path: `${beer.node.slug}`,
            component: beerTemplate,
            context: {
                data: beer.node
            },
        });
    });
  

}