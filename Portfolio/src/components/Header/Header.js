import React from "react";
import { Breadcrumbs, Link, AppBar } from '@material-ui/core'
import useStyles from "./styles";
import { withRouter } from 'react-router-dom';

function Header(props) {

    const styles = useStyles();
    const { history } = props;

    function handleContactClick() {
        history.push('/contact')
    }

    return (
        <div style={{
            height: '100px',
            paddingTop: '50px'         
        }}>

            <Breadcrumbs>
                <Link>HOME</Link>
                <Link>ABOUT</Link>
                <Link onClick={handleContactClick}>CONTACT</Link>
            </Breadcrumbs>
        </div>
    )
}

export default withRouter(Header);