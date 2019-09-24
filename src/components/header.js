// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
    <section className="hero is-primary">
        <div className="hero-body">
            <div className="container">
                <h1 className="title">{siteTitle}</h1>
                <h2 className="subtitle">polish craft breweries</h2>
            </div>
        </div>
    </section>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
