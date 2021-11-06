import React from "react";
import { Tabs, makeStyles } from '@material-ui/core'
import styles from "./styles";
import { withRouter } from 'react-router-dom';
import Tab from '../common/Tab'

const useTabsStyles = makeStyles(styles.generalStyles);

function Header(props) {
    const tabsStyles = useTabsStyles();
    const { history } = props;

    const keys = window.location.pathname.split('/');
    const secondKey = keys[2];
    let currentTab;

    switch(secondKey) {
        case '': 
            currentTab = 0;
            break;
        case 'About': 
            currentTab = 1;
            break;
        case 'MySkills': 
            currentTab = 2;
            break;
        case 'Contact': 
            currentTab = 3;
            break;
        default: 
            currentTab = 0;
    }


    function handleTabChange(e, value) {
        if (value === 0) {
            history.push('/Portfolio/')
        } else if ( value === 1) {
            history.push('/Portfolio/About')
        } else if (value === 2) {
            history.push('/Portfolio/MySkills')
        } else if (value === 3) {
            history.push('/Portfolio/Contact')
        }

    }

    return (
        <div style={{
            height: '60px',
            margin: '20px 0'        
        }}>

            <Tabs 
                onChange={handleTabChange} 
                value={currentTab} 
                className={tabsStyles.root} 
                textColor="primary"   
                variant="scrollable"
                scrollButtons="auto"
                
            >
                <Tab label="Home" />
                <Tab label="About" />
                <Tab label="My Skills" />
                <Tab label="Contact" />
            </Tabs>
        </div>
    )
}

export default withRouter(Header);