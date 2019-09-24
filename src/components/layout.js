/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Menu from "./menu"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <Menu />
            <Header siteTitle={data.site.siteMetadata.title} />

            <section className="section">
                <div className="container">
                    {children}
                </div>
            </section>

            <footer className="footer">
                <div className="content has-text-centered">
                    <p>© {new Date().getFullYear()}{` `} Craftbeer by tmkznk. <br/>Powered by graphCMS, gatsby.js and bulma.</p>
                </div>
            </footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
