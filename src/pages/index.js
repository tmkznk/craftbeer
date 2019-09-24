import React from "react"
import "./mystyles.scss"
import Layout from "../components/layout"
import BeersList from "../components/beersList"


const IndexPage = () => (
    <Layout>
        <BeersList />
    </Layout>
)

export default IndexPage
