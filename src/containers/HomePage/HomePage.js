import React, { Fragment } from 'react'

// Components
import ProjectsContainer from '../ProjectsContainer/ProjectsContainer'
import Footer from '../../components/Utility/Footer/Footer'

// MUI
// import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {
        width: '100vw',
        maxWidth: '1300px',
        margin: '0 auto',
        padding: '0 10%'
    }
}))

const HomePage = props => {
    const classes = useStyles(props)
    return (
        <div className={classes.root}>
            <ProjectsContainer />
            <Footer />
        </div>
    )
}

export default HomePage