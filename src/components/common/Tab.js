import { Tab as MuiTab } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {
    tabOverride: () => ({
        root: {
            fontFamily: ['Overpass', 'sans-serif'].join(','),
        },
        selected: {
            backgroundColor: '#f2f6ff',
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
        },
    })
}

export default withStyles(styles.tabOverride)(MuiTab)
