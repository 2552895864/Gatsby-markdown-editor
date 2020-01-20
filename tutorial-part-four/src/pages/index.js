import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import { rhythm } from "../utils/typography"
import { css } from '@emotion/core'


export default ({data}) => {
    console.log(data);
    return (
        <Layout>
            <h1
                css={css`
                    display: inline-block;
                    border-bottom: 1px solid
                `}
            >
                Amazing Pandas Eating Things
            </h1>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({node})=>(
                <div key={node.id}>
                    <h3 
                        css={css`
                            margin-bottom: ${rhythm(1/4)};
                        `}
                    >
                        {node.frontmatter.title + " "}
                        <span 
                            css={css`
                                color: #bbb;
                            `}
                        >
                            - {node.frontmatter.date}
                        </span>
                    </h3>
                    <p>{node.excerpt}</p>
                </div>
            ))}
        </Layout>
    )
}

export const query = graphql`
    query Index {
        allMarkdownRemark(sort: {fields: frontmatter___date}) {
        edges {
            node {
            frontmatter {
                title
                date
            }
            excerpt
            id
            }
        }
        totalCount
        }
    }   
`

