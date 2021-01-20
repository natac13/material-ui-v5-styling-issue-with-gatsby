import * as React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Menu from '../components/Menu'
import Layout from '../components/Layout'

export default function Index() {
  return (
    <Layout>
      <Container maxWidth="sm">
        <Box
          sx={{
            position: 'absolute',
            top: '10rem',
            left: '10rem',
            zIndex: 999999,
          }}
        >
          <Menu />
        </Box>
      </Container>
    </Layout>
  )
}
