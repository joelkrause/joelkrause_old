import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import heroSVG from '../images/herobg.svg'
import SEO from "../components/seo"

const PostsPage = () => (
  <Layout>
    <SEO title="Posts" />
    <div className="page__hero">
    <img src={heroSVG} />
      <div className="wrapper">
        <h1>Posts</h1>
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default PostsPage