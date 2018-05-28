import React from "react";
import Link from "gatsby-link";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faCalendarAlt from "@fortawesome/fontawesome-free-solid/faCalendarAlt";

export default class BlogPageTemplate extends React.Component {
    render() {
        const { data } = this.props;
        const { edges: posts } = data.allMarkdownRemark;

        return (
            <div>
                {/* HEADER */}
                <section className="subpage-header flex-centered">
                    <div className="container flex-centered">
                        <div className="content flex-centered">
                            <h1>Blog UDSC</h1>
                        </div>
                    </div>
                </section>
                <section className="blog-container flex-centered">
                    <div className="container flex-centered">
                        {
                            posts.filter(post => post.node.frontmatter.templateKey === "blog-post")
                                .map(({ node: post }) => (
                                    <div className="blogCard" key={post.id}>
                                        <div className="columns">
                                            <div className="workshop-img column is-12-mobile is-4-tablet is-4-desktop">
                                                <img
                                                    src="https://udemy-images.udemy.com/course/750x422/507888_17b7_2.jpg"
                                                    alt=""/>
                                            </div>
                                            <div className="workshop-card column is-12-mobile is-8-tablet is-8-desktop">
                                                <Link to={post.fields.slug}>
                                                    <h3>{post.frontmatter.title}</h3>
                                                </Link>
                                                <div className="info">
                                                    <span><FontAwesomeIcon
                                                        icon={faCalendarAlt}/> {post.frontmatter.date}</span>
                                                </div>
                                                <p>
                                                    {post.excerpt}
                                                </p>
                                                <Link className="btn" to={post.fields.slug}>
                                                    Seguir leyendo →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        }

                    </div>
                </section>
                {/* END HEADER */}
            </div>
        );
    }
}

export const blogPageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;