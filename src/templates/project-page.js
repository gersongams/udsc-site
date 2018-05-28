import React from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faUser from "@fortawesome/fontawesome-free-solid/faUser";

export const ProjectPageTemplate = ({
                                        projects
                                    }) => (
    <div>
        <section className="subpage-header flex-centered">
            <div className="container flex-centered">
                <div className="content flex-centered">
                    <h1>Proyectos</h1>
                </div>
            </div>
        </section>
        <section className="projects-container flex-centered">
            <div className="container flex-centered">
                <div className="columns flex-centered">
                    {
                        projects.project.map(project => (
                                <div className="column is-12-mobile is-4-tablet is-4-desktop" key={project.image}>
                                    <div className="projectCard">
                                        <div className="title">
                                            <h3>{project.title}</h3>
                                            <div className="author">
                                                <span><FontAwesomeIcon icon={faUser}/>{project.author}</span>
                                            </div>
                                        </div>
                                        <div className="project-img">
                                            <img src={project.image} alt=""/>
                                        </div>
                                        <div className="project-content">
                                            <p>
                                                {project.description}
                                            </p>
                                            <a className="btn flex-centered" href={project.link}>
                                                <span>ver projecto</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </section>
    </div>
);

ProjectPageTemplate.propTypes = {
    projects: PropTypes.shape({
        project: PropTypes.array
    })
};

const ProjectPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <ProjectPageTemplate
            projects={frontmatter.projects}
        />
    );
};

ProjectPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object
        })
    })
};

export default ProjectPage;

export const projectPageQuery = graphql`
  query ProjectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        projects {
          project {
            image
            title
            description
            author
            link
          }
        }       
      }
    }
  }
`;
