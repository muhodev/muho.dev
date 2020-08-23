import React from "react"
import PropTypes from "prop-types"
import "../../style/index.scss"
import { Header } from ".."


const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <footer>
                <div className="section__container">
                    © {new Date().getFullYear()}, Built with
                {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </div>
            </footer>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
