import React from "react"
import PropTypes from "prop-types"
import "../../style/index.scss"
import { Header } from ".."


const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <footer className="layout__footer">
                <div className="section__container">
                    <div>
                        © {new Date().getFullYear()} Built with
                    {` `}
                        <a href="https://www.gatsbyjs.org" target="blank">Gatsby </a>
                    </div>
                    <div>
                        <a href="https://github.com/muhodev" target="blank">Github</a>
                        <span> • </span>
                        <a href="https://twitter.com/muhodev" target="blank">Twitter</a>
                        <span> • </span>
                        <a href="https://instagram.com/muhodev" target="blank">Instagram</a>

                    </div>
                </div>
            </footer>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
