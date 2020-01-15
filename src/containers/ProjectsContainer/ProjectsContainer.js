import React, { Fragment } from 'react'
import { useMediaPredicate } from "react-media-hook"

// MUI
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Components
import Project from '../../components/Custom/Project/Project'
import ProjectMobile from '../../components/Custom/ProjectMobile/ProjectMobile'

// Data
import projects from '../../data/projects'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {}
}))

const ProjectsContainer = props => {
    const classes = useStyles(props)
    const biggerThan800 = useMediaPredicate("(min-width: 800px)")
    return (
        <div className={classes.root}>
            {biggerThan800 ? <div>
                {projects && projects.map((project, index, array) => {
                    return <Project key={index} project={project} index={index} />
                })}
            </div> : <div>
                    {projects && projects.map((project, index, array) => {
                        return <ProjectMobile key={index} project={project} index={index} />
                    })}
                </div>}
        </div>
    )
}

export default ProjectsContainer
