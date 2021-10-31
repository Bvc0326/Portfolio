import React from "react";

function Section(props) {
    const { children } = props;

    return (
        <section style={{
            margin: '20px 0 20px 0',
        }}>
            {children}
        </section>
    )
}

export default Section