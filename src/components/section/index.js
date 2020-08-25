import React from 'react'

function Section(props) {
    return (
        <section>
            <div className="section__container">
                {props.children}
            </div>
        </section>
    )
}

export default Section