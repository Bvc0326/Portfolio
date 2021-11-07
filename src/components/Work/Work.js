import React, { useEffect } from "react";
import { Accordion,AccordionSummary, AccordionDetails } from "@material-ui/core";
import { ExpandMore } from '@material-ui/icons'

import Typography from '../common/Typography';
import Section from "../common/Section";
import ContactMe from "../common/ContactMe";
import ClientDetails from "./ClientDetails";
import clients from "./clients";

function Work() {

    useEffect(() => {
        document.title = "Work"
    }, []);

    return (
        <>
            <Section>                
                <Typography variant="h1">CLIENTS</Typography>
            </Section>
            <Section>
                {
                    clients.map((client, index) => {
                        return (
                            <Accordion key={index}>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                >
                                    <Typography variant="h4">{client.companyName}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ClientDetails client={client}/>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            </Section>
            <ContactMe />
        </>
    )
}

export default Work;