// import React, { Component } from "react"
// import PropTypes from "prop-types"
// import Layout from "../components/layout"
// import heroSVG from '../images/herobg.svg'
// import SEO from "../components/seo"
// import { Link } from "gatsby"

// class PostsTemplate extends Component {
//     render() {
//         const data = this.props.data

//         return(
//             <Layout>
//                 <SEO title="Posts"/>
//                 <div className="page__hero">
//       <img src={heroSVG} />
//       <div className="wrapper">
//       <h1>Posts</h1>
//       </div>
//       </div>
//                 <div className="wrapper">
//                     {data.allWordpressPost.edges.map(({node}) => (
//                     <div key={node.slug} className="post__card">
//                         <Link to={'posts/' + node.slug}>
//                         <div className="post__card-title">{node.title}</div>
//                         <div className="post__card-date">{node.date}</div>
//                         </Link>
//                     </div>
//                     ))}
//                 </div>
//             </Layout>
//         )
//     }
// }

// PostsTemplate.propTypes = {
//     data: PropTypes.object.isRequired,
//     edges: PropTypes.array,
// }

// export default PostsTemplate

// export const postsQuery = graphql`
//     query postsQuery{
//         allWordpressPost{
//             edges{
//                 node{
//                     id
//                     title
//                     excerpt
//                     slug
//                     date(formatString: "MMMM DD, YYYY")
//                 }
//             }
//         }
//     }
// `

import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PostsPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ul style={{ listStyle: "none" }}>
      {data.allWordpressPost.edges.map(post => (
        <li style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}>
          <Link to={`/post/${post.node.slug}`} style={{ display: "flex", color: "black", textDecoration: "none" }} >
            <div style={{ width: "75%" }}>
              <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} style={{ marginBottom: 0 }} />
              <p style={{ margin: 0, color: "grey" }}>
                Written by {post.node.author.name} on {post.node.date}
              </p>
              <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)
export default PostsPage

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
          author {
            name
          }
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`