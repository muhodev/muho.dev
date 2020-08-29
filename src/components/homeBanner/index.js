import React from 'react'
import BannerIcon from './bannerIcon'

function HomeBanner(props) {
    return (
        <div className="home-banner">
            <div className="section__container home-banner__container">
                <div className="home-banner__text">

                    <p className="mb-1">
                        Atölye
                    </p>
                    <div className="mb-3 title-10 f-weight-medium f-family-serif">
                        Yazılım, Tasarım, Teknoloji İçerikleri
                    </div>
                    <p className="c-text-secondary">
                        Öğrendiğim bilgileri hikaye üreticiliği süzgecinden geçirerek burada paylaşıyorum.
                    </p>
                </div>
                <div className="home-banner__illustration">
                    <BannerIcon />
                </div>
            </div>
        </div>
    )
}

export default HomeBanner