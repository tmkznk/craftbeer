import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import logo from '../images/logo.svg'

class Menu extends React.Component {
    state = {
        isMenuOpen: false,
    }

    toggleMenu = () => {
        this.setState(prevState => ({
            isMenuOpen: !prevState.isMenuOpen,
        }));
    }

    render(){
        return(
            <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="container">
                        <div className="navbar-brand">
                            <Link to="/" className="navbar-item">
                                <img src={logo} alt="logo" />
                            </Link>
                            
                            <a role="button" className={this.state.isMenuOpen ? 'navbar-burger burger is-active' : 'navbar-burger burger'} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={this.toggleMenu}>
                                <span aria-hidden="true" />
                                <span aria-hidden="true" />
                                <span aria-hidden="true" />
                            </a>
                        </div>

                        <div id="navbarBasicExample" className={this.state.isMenuOpen ? 'navbar-menu is-active' : 'navbar-menu' }>
                            <div className="navbar-start">
                                <Link to="/" className="navbar-item">
                                    Home
                                </Link>

                                <Link to="/about" className="navbar-item">
                                    About
                                </Link>
                            </div>
                        </div>

                    </div>
                </nav>
        );
    }
}
export default Menu
