import React from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faGithubSquare from "@fortawesome/fontawesome-free-brands/faGithub";
import faLinkedin from "@fortawesome/fontawesome-free-brands/faLinkedin";

export const MemberPageTemplate = ({
                                       members
                                   }) => (
    <div>
        <section className="subpage-header flex-centered">
            <div className="container flex-centered">
                <div className="content flex-centered">
                    <h1>Miembros</h1>
                </div>
            </div>
        </section>
        <section className="members-container flex-centered">
            <div className="container flex-centered">
                <div className="columns flex-centered">
                    {
                        members.member.map(member => (
                            <div className="column is-6-mobile is-4-tablet is-3-desktop">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-square">
                                            <img
                                                src={member.image}
                                                alt="Placeholder image"/>
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-content has-text-centered">
                                                <p className="title is-4">{member.name}</p>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <p>{member.charge}</p>
                                            <div>
                                              <a href={member.gitLink}>
                                                <FontAwesomeIcon icon={faGithubSquare}/>
                                              </a>
                                              <a href={member.linkedInLink}>
                                                <FontAwesomeIcon icon={faLinkedin}/>
                                              </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    </div>
);

MemberPageTemplate.propTypes = {
    members: PropTypes.shape({
        member: PropTypes.array
    })
};

const MemberPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <MemberPageTemplate
            members={frontmatter.members}
        />
    );
};

MemberPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object
        })
    })
};

export default MemberPage;

export const memberPageQuery = graphql`
  query MemberPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        members {
          member {
            image
            name
            charge
            linkedInLink
            gitLink
          }
        }       
      }
    }
  }
`;
