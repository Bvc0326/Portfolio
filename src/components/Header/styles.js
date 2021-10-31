import { makeStyles, createStyles } from '@material-ui/styles';

const styles = () => createStyles({
    root: {
        background: '#1b242f',
        borderBottom: `1px solid #d9d9d9`,
        boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.14)',
        boxSizing: 'border-box',
        height: 50,
        flex: 1,
        fontFamily: ['Overpass', 'sans-serif'].join(','),
    }
})
    

export default makeStyles(styles)