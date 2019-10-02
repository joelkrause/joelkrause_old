import React, { Component } from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import heroSVG from '../images/herobg.svg'
import SEO from "../components/seo"

class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost

        return (
            <Layout>
                <SEO title={{ __html: post.title }} />
                <div className="page__hero single__post">
                    <img src={heroSVG} />
                    <div className="wrapper">
                        <h1 className="page__title" dangerouslySetInnerHTML={{ __html: post.title }} />
                        <p className="post__date" dangerouslySetInnerHTML={{ __html: post.date }}/>
                    </div>
                </div>

                <div className="wrapper">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </Layout>
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            date(formatString: "MMMM DD, YYYY")
            content
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`