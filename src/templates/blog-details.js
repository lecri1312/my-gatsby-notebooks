import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Layout from '../components/layout';
import * as styles from '../components/blog-details.module.css';

const BlogDetails = ({ data }) => {
    const { html } = data.markdownRemark;
    const { title } = data.markdownRemark.frontmatter;
    return (
        <Layout>
            <div>
                <div className={styles.blog_content}>
                    
                    <h3>{title}</h3>
                    <div
                        className={styles.html}
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default BlogDetails;

export const query = graphql`
    query ProjectDetails($slug: String) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;