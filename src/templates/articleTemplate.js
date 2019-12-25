import React from "react"
import { graphql } from "gatsby"

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <div className="article-container">
            <div className="article">
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.date}</h2>
                <img src={frontmatter.image}></img>
                <div
                    className="article-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>
    )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        image
      }
    }
  }
`