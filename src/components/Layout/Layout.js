import React, { useState } from 'react'
import Hamburger from "../Hamburger/Hamburger";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { GlobalStyles, Primary } from './Layout.styles';

const Layout = ({ children }) => {

  const [menuOpen, setMenuOpen] = useState(false)
  const handleOverlayMenu = () => setMenuOpen(prev => !prev)
  return (
    <>
      <GlobalStyles />
      <Hamburger handleOverlayMenu={handleOverlayMenu} />
      <Header />
      <Primary>
        {children}
      </Primary>
      <Footer />
    </>
  )
}

export default Layout