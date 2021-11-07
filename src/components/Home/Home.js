import React, { useEffect } from "react";
import { Grid } from '@material-ui/core';
import Section from "../common/Section";
import Typography from '../common/Typography';
import ContactMe from "../common/ContactMe";
import Testimonals from '../Testimonals/Testimonals';

function Home() {

    useEffect(() => {
        document.title = "Home"
    }, []);

    return (
        <>
            <Section>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h1">
                            Hello, 
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h1">
                            I'm Vinay Bandi.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h1">
                            Front End Devloper
                        </Typography>
                    </Grid>
                </Grid>
            </Section>
            <ContactMe />
            <Section>
                <Testimonals />
            </Section>
        </>
    )
}

export default Home;