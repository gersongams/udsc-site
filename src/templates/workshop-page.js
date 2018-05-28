import React from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faCalendarAlt from "@fortawesome/fontawesome-free-solid/faCalendarAlt";
import faMapMarker from "@fortawesome/fontawesome-free-solid/faMapMarker";

export const WorkshopPageTemplate = ({workshops}) => (
    <div>
        {/* HEADER */}
        <section className="subpage-header flex-centered">
            <div className="container flex-centered">
                <div className="content flex-centered">
                    <h1>Workshops</h1>
                </div>
            </div>
        </section>
        <section className="workshop-container flex-centered">
            <div className="container flex-centered">
                {workshops
                    .workshop
                    .map(workshop => (
                        <div className="workshopCard" key={workshop.image}>
                            <div className="columns">
                                <div className="workshop-img column is-12-mobile is-4-tablet is-4-desktop">
                                    <img src={workshop.image} alt=""/>
                                </div>
                                <div className="workshop-card column is-12-mobile is-8-tablet is-8-desktop">
                                    <h3>{workshop.title}</h3>
                                    <p>
                                        {workshop.description}
                                    </p>
                                    <div className="info">
                                        <span><FontAwesomeIcon icon={faCalendarAlt}/> {workshop.when}</span>
                                        <span><FontAwesomeIcon icon={faMapMarker}/> {workshop.place}
                                        </span>
                                    </div>
                                    <a className="btn" href={workshop.registerLink}>
                                        <span>registrate</span>
                                    </a>
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

WorkshopPageTemplate.propTypes = {
    workshops: PropTypes.shape({workshop: PropTypes.array})
};

const WorkshopPage = ({data}) => {
    const {frontmatter} = data.markdownRemark;

    return (<WorkshopPageTemplate workshops={frontmatter.workshops}/>);
};

WorkshopPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({frontmatter: PropTypes.object})
    })
};

export default WorkshopPage;

export const workshopPageQuery = graphql `
  query WorkshopPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        workshops {
          workshop {
            image
            title
            description
            when
            place
            registerLink
          }
        }       
      }
    }
  }
`;
