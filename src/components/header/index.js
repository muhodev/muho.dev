import React from "react"
import { Link } from "gatsby"

const Header = () => (
    <header className="header">
        <div className="section__container header__container">
            <div className="header__items">
                <div className="header__item logo">
                    <Link
                        to="/"
                    >
                        muho.dev
                    </Link>
                </div>
            </div>
            <div className="header__items">
                <div className="header__item">
                    <Link
                        to="/"
                    >
                        Ana sayfa
                    </Link>
                </div>
                <div className="header__item">
                    <Link
                        to="/about"
                    >
                        Hakkımda
                    </Link>
                </div>
                <div className="header__item">
                    <Link
                        to="/projects"
                    >
                        Projeler
                    </Link>
                </div>
            </div>
        </div>
    </header>
)

export default Header
