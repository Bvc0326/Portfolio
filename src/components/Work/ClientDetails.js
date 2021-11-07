import React from "react";
import { Grid} from "@material-ui/core";

function ClientDetails(props) {

    const { client } = props;

    return (
        <Grid container spacing={2} key={client.companyName}>
            <Grid item md={4} lg={4} sm={12} xs={12}>
                <Grid container direction="column">
                    <Grid item>
                        <strong>Company:</strong> 
                    </Grid>
                    <Grid item>
                        {client.companyName}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={4} lg={4} sm={12} xs={12}>
                <Grid container direction="column">
                    <Grid item>
                        <strong>Location:</strong> 
                    </Grid>
                    <Grid item>
                        {client.address}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={4} lg={4} sm={12} xs={12}>
                <Grid container direction="column">
                    <Grid item>
                        <strong>Duration:</strong> 
                    </Grid>
                    <Grid item>
                        {client.duration}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ClientDetails;
