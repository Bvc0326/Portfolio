import React from "react";
import { Button } from '@material-ui/core';
import Section from "../common/Section";
import { withRouter } from "react-router";

function ContactMe(props) {

    const { history } = props;

    function handleContactClick() {
        history.push('/Portfolio/Contact');
    }

    return (
        <Section>
            <Button
                color="primary"
                variant="contained"
                onClick={handleContactClick}
            >
                Contact me!
            </Button>
        </Section>
    )
}

export default withRouter(ContactMe);