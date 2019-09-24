import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
// import Img from "gatsby-image";

const BeersList = () => {
    const data = useStaticQuery(graphql`
        query {
            tmkznk {
                beers {
                    id
                    slug
                    name
                    description
                    style
                    vol
                    __typename
                    brewery {
                        name
                        id
                    }
                    image {
                        fileName
                        handle
                        url
                        mimeType
                        size
                    }
                }
            }
            
        }
    `);

    // const imgQuery = useStaticQuery(graphql`
    //     query {
    //         file(relativePath: { eq: "gatsby-astronaut.png" }) {
    //             childImageSharp {
    //                 fixed(width: 125, height: 125) {
    //                     ...GatsbyImageSharpFixed
    //                 } 
    //             }
    //         }
    //     }
    // `);

    return(
        <div className="columns">
            {
                data.tmkznk.beers.map
                (beer =>(<div className="column" key={beer.id}>
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                {
                                    beer.image ? (
                                        <img src={beer.image.url} />
                                    ) : (
                                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                                    )
                                }
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <h1 className="title">{beer.name}</h1>
                                <h3 className="subtitle">{beer.brewery.name}</h3>
                                <p>Style: {beer.style}<br/>
                                ABV: {beer.vol}%</p>
                                <Link className="button is-primary" to={`/${beer.slug}`}>more...</Link>
                            </div>
                        </div>
                    </div>
                </div>)
                )
            }
        </div>
    )
}

export default BeersList
