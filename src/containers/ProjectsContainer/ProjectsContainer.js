import React, { Fragment } from 'react'

// MUI
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Components
import Project from '../../components/Custom/Project/Project'

// Data
import projects from '../../data/projects'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {}
}))

const ProjectsContainer = props => {
    const classes = useStyles(props)
    return (
        <div className={classes.root}>
            {projects && projects.map((project, index, array) => {
                return <Project key={index} project={project} index={index} />
            })}
        </div>
    )
}

export default ProjectsContainer
