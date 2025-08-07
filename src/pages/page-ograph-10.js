import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import * as styles from '../components/blog.module.css';

const blog = ({ data: {
    allMarkdownRemark: { nodes },
  },
}) => {
    const posts = nodes
   
   
    return (
        <Layout>
            <div className={styles.blog_cont}>
                <h2>Contenu</h2>
                <div className={styles.blog_grid}>
                    {posts.map((post) => (
                        <Link
                            to={`../blog/${post.frontmatter.slug}`}
                            className={styles.blog_card}
                            key={post.id}
                        >
                            <h3>{post.frontmatter.title}</h3>
                            <p>{post.frontmatter.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
};
export default blog;

export const query = graphql`
query BlogList {
    allMarkdownRemark (filter: { frontmatter: { domaine : {eq: "opt_graphique"},  categorie: { eq: "cat10" } } }){
        nodes {
            frontmatter {
                title
                slug
                description
                domaine
                categorie
            }
            id
        }
    }
}
`;
