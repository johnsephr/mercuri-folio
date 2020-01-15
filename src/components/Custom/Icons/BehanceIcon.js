import React, { Fragment } from 'react'

// MUI
import { Typography, SvgIcon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// Styles
const useStyles = makeStyles(theme => ({
    // styles go here
    root: {
        fill: '#72c89e'
    }
}))

const BehanceIcon = props => {
    const classes = useStyles(props)
    return (
        <Fragment>
            <svg enableBackground="new 0 0 56.693 56.693" height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px" space="preserve" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path className={classes.root} d="M38.031,27.257c-3.174,0-3.615,3.168-3.615,3.168h6.748C41.164,30.425,41.207,27.257,38.031,27.257z" />
                    <path className={classes.root} d="M22.721,30.425h-5.982v5.492h5.296c0.09,0,0.225,0.002,0.383,0c0.852-0.02,2.467-0.268,2.467-2.67   C24.885,30.396,22.721,30.425,22.721,30.425z" />
                    <path className={classes.root} d="M28.348,5.101c-13.6,0-24.625,11.023-24.625,24.623c0,13.6,11.025,24.625,24.625,24.625   c13.598,0,24.623-11.025,24.623-24.625C52.971,16.125,41.945,5.101,28.348,5.101z M33.531,20.231h8.477v2.53h-8.477V20.231z    M29.246,33.503c0,6.271-6.525,6.064-6.525,6.064h-5.982h-0.175h-4.535V19.021h4.535h0.175h5.982c3.248,0,5.812,1.794,5.812,5.47   c0,3.676-3.135,3.91-3.135,3.91C29.531,28.401,29.246,33.503,29.246,33.503z M45.104,33.167H34.457   c0,3.816,3.615,3.576,3.615,3.576c3.414,0,3.295-2.211,3.295-2.211h3.617c0,5.867-7.033,5.465-7.033,5.465   c-8.436,0-7.893-7.855-7.893-7.855s-0.008-7.893,7.893-7.893C46.268,24.249,45.104,33.167,45.104,33.167z" />
                    <path className={classes.root} d="M24.174,24.81c0-2.137-1.453-2.137-1.453-2.137h-0.77h-5.212v4.584h5.611C23.318,27.257,24.174,26.946,24.174,24.81z" />
                </g>
            </svg>
        </Fragment>
    )
}

export default BehanceIcon