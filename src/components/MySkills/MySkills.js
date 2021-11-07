import React, { useEffect } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';

import Typography from '../common/Typography';
import Section from "../common/Section";
import ContactMe from "../common/ContactMe";

const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "ReactJS",
    "Redux",
    "Webpack",
    "Jest",
]

function MySkills() {

    const styles = {
        innerListOverride: () => ({
            root: () => ({
                listStylePosition: 'inside',
                listStyleType: 'disc',
                marginLeft: 20
            }),
        }),
        listItemOverride: () => ({
            root: () => ({
                display: 'list-item',
                fontFamily: ['Overpass', 'sans-serif'].join(','),
                listStylePosition: 'outside',
            })
        })
    };

    const createdListStyles = makeStyles(styles.innerListOverride);
    const createdStyles = makeStyles(styles.listItemOverride);
    
    const listStyles = createdListStyles();
    const listItemStyles = createdStyles(); 

    useEffect(() => {
        document.title = "My Skills";
    }, []);

    return (
        <>
            <Section>                
                <Typography variant="h1">MY SKILLS</Typography>
            </Section>
            <Section>
                <List classes={listStyles}>
                    {skills.map((skill, index) => 
                        <ListItem key={index} classes={listItemStyles}>
                            <ListItemText primary={skill} />
                        </ListItem>
                    )}
                </List>
            </Section>
            <Section>
            </Section>
            <ContactMe />
        </>
    )
}

export default MySkills;