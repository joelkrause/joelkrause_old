import React, { Component } from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import heroSVG from '../images/herobg.svg'
import SEO from "../components/seo"
import { Link } from "gatsby"

class PostsTemplate extends Component {
    render() {
        const data = this.props.data

        return(
            <Layout>
                <SEO title="Posts"/>
                <div className="page__hero">
      <img src={heroSVG} />
      <div className="wrapper">
      <h1>Posts</h1>
      </div>
      </div>
                <div className="wrapper">
                    {data.allWordpressPost.edges.map(({node}) => (
                    <div key={node.slug} className="post__card">
                        <Link to={'posts/' + node.slug}>
                        <div className="post__card-title">{node.title}</div>
                        <div className="post__card-date">{node.date}</div>
                        </Link>
                    </div>
                    ))}
                </div>
            </Layout>
        )
    }
}

PostsTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default PostsTemplate

export const pageQuery = graphql`
    query postsQuery{
        allWordpressPost{
            edges{
                node{
                    id
                    title
                    excerpt
                    slug
                    date(formatString: "MMMM DD, YYYY")
                }
            }
        }
    }
`