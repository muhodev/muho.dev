import React from "react"
import PropTypes from "prop-types"
import "../../style/index.scss"
import { Header } from ".."
import { OutboundLink } from "gatsby-plugin-google-analytics"


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
                        <OutboundLink href="https://www.gatsbyjs.org" target="_new">
                            Gatsby
                        </OutboundLink>
                    </div>
                    <div>
                        <OutboundLink href="https://github.com/muhodev" target="_new">
                            Github
                        </OutboundLink>
                        <span> • </span>
                        <OutboundLink href="https://twitter.com/muhodev" target="_new">
                            Twitter
                        </OutboundLink>
                        <span> • </span>
                        <OutboundLink href="https://instagram.com/muhodev" target="_new">
                            Instagram
                        </OutboundLink>
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
