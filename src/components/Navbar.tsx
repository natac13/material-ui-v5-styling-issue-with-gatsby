import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'
import Dialog from '@material-ui/core/Dialog'
import Menu from '@material-ui/icons/Menu'
import Close from '@material-ui/icons/Close'
import * as React from 'react'
import { Button, Link, IconButton } from 'gatsby-material-ui-components'
import { StaticImage } from 'gatsby-plugin-image'

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const handleClose = React.useCallback(() => {
    setOpen(false)
  }, [])
  const handleOpen = React.useCallback(() => {
    setOpen(true)
  }, [])

  return (
    <AppBar sx={{ backgroundColor: 'transparent' }}>
      <Toolbar
        css={{
          display: 'flex',
        }}
      >
        <Box
          sx={{
            flex: '1',
            py: 1,
          }}
        >
          <Link href="/">Certground</Link>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            color: 'text.primary',
            gap: (theme) => theme.spacing(5),
          }}
        >
          <Hidden smDown>
            <Button
              variant="text"
              href="https://certground.com/docs/getting-started"
              color="inherit"
            >
              Documentation
            </Button>
          </Hidden>
          <Hidden smUp>
            <IconButton onClick={handleOpen} color="primary" sx={{ p: 2 }}>
              <Menu color="primary" />
            </IconButton>
            <Dialog open={open} onClose={handleClose} fullScreen>
              <Box
                sx={{
                  width: '100%',
                  display: 'grid',
                  gridTemplateRows: 'min-content',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexFlow: 'column',
                  gap: (theme) => theme.spacing(4),
                }}
              >
                <IconButton
                  onClick={handleClose}
                  sx={{
                    position: 'absolute',
                    top: (theme) => theme.spacing(3),
                    right: (theme) => theme.spacing(3),
                  }}
                >
                  <Close />
                </IconButton>
                <Button
                  href="https://certground.com/docs/getting-started"
                  color="inherit"
                  variant="outlined"
                >
                  Docs
                </Button>
              </Box>
            </Dialog>
          </Hidden>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
