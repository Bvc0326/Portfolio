import React, { useEffect } from "react";
import Typography from '../common/Typography';
import Section from "../common/Section";
import ContactMe from "../common/ContactMe";

function MySkills() {

    useEffect(() => {
        document.title = "My Skills";
    }, []);

    return (
        <>
            <Section>                
                <Typography variant="h1">MY SKILLS</Typography>
            </Section>
            <Section>
            </Section>
            <ContactMe />
        </>
    )
}

export default MySkills;