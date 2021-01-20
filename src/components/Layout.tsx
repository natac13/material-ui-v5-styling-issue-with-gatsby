import * as React from 'react'
// import Footer from '../Footer'
import Navbar from './Navbar'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = (props: Props) => {
  const { children } = props

  return (
    <>
      {/* <Navbar /> */}
      <main
        css={(theme) => ({
          backgroundColor: theme.palette.secondary.light,
          minHeight: '100vh',
          position: 'relative',
        })}
      >
        {children}
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
