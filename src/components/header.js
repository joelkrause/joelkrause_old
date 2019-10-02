import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import TweenMax from "gsap/TweenMax";
import TransitionLink from "gatsby-plugin-transition-link"

const Header = ({ siteTitle }) => (
  <header className="site__header">
    <div className="site__header-logo">
      <Link to="/">Joel Krause.</Link>
    </div>
    <nav className="site__header-nav">
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
