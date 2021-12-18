import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { Box, InputBase, Typography, Toolbar, AppBar, Input } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'
import SearchIcon from '@material-ui/icons/Search'
//import styles
import styles from './styles'

function Header() {
    const classes = styles();
    return (
        <div>
            <AppBar position='static'>
                <Toolbar className={classes.toolbar}>
                    <Typography variant='h5' className={classes.title}>
                        Travel Advisor
                    </Typography>
                    <Box display="flex">
                        <Typography variant='h6' className={classes.title}>
                            Explore
                        </Typography>
                        {/* <Autocomplete> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder='Search..' classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                        </div>
                        {/* </Autocomplete> */}
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
