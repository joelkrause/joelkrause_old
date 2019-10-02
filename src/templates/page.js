import React, { Component } from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import heroSVG from '../images/herobg.svg'
import SEO from "../components/seo"


class PageTemplate extends Component {
    render() {
        const siteMetadata = this.props.data.site.siteMetadata
        const currentPage = this.props.data.wordpressPage

        console.log(currentPage)

        return (
            <Layout>
                <SEO title={{ __html: currentPage.title }} />
                <h1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
                <div dangerouslySetInnerHTML={{__html: currentPage.content}}/>

                <p dangerouslySetInnerHTML={{__html: currentPage.date}} />
                <p dangerouslySetInnerHTML={{__html: currentPage.slug}} />
            </Layout>
        )
    }
}

export default PageTemplate

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
            slug
            id
            date(formatString: "MMMM DD, YYYY")
        }
        site {
            id
            siteMetadata {
                title
            }
        }
    }
`