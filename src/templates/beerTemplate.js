import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"


const BeerTemplate = ({pageContext: { data }}) => (
    <Layout>
        <div className="content">
            <div className="columns">
                <div className="column is-6 top">
                    <img src={data.image.url} alt={data.name} />
                </div>
                <div className="column is-6 bottom"><h1>{data.name}</h1>
                    <p>{data.description}</p>
            
                    <h2 className="subtitle">Parameters:</h2>
                    <ul>
                        <li>Style: {data.style}</li>
                        <li>Alcohol By Volume: {data.vol}%</li>
                        <li>Brewed by: {data.brewery.name}</li>
                    </ul>

                    <Link className="button is-primary" to="/">wstecz</Link>
                </div>
            </div>
        </div>
    </Layout>
)

export default BeerTemplate
