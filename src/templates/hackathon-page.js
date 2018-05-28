import React from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTropy from "@fortawesome/fontawesome-free-solid/faTrophy";
import faGraduationCap from "@fortawesome/fontawesome-free-solid/faGraduationCap";
import faCalendarAlt from "@fortawesome/fontawesome-free-solid/faCalendarAlt";
import faMapMarker from "@fortawesome/fontawesome-free-solid/faMapMarker";
import Prizes from "../components/Prizes";
import Rules from "../components/Rules";
import Speakers from "../components/Speakers";
import Sponsors from "../components/Sponsors";

export const HackathonPageTemplate = ({
                                          title,
                                          subtitle,
                                          hackathondate,
                                          registerLink,
                                          abouthackathon,
                                          infohackathon,
                                          challenge,
                                          firstplace,
                                          secondplace,
                                          thirdplace,
                                          rules,
                                          speakers,
                                          sponsors
                                      }) => (
    <div>
        {/* HEADER */}
        <section className="hackathon-header flex-centered">
            <div className="container flex-centered">
                <div className="content flex-centered">
                    <h1>{title}</h1>
                    <h1>{subtitle}</h1>
                    <h4>{hackathondate}</h4>
                    <a className="btn btn-mirror" href={registerLink}>
                        <span>registrate</span>
                    </a>
                </div>
            </div>
        </section>
        {/* END HEADER */}
        {/* ABOUT HACKATHON */}
        <section className="about-hackathon flex-centered">
            <div className="container flex-centered">
                <div className="columns">
                    <div className="about column is-12-mobile is-6-tablet is-6-desktop">
                        <h2>{abouthackathon.title}</h2>
                        <p>
                            {abouthackathon.description}
                        </p>
                    </div>
                    <div className="img column is-12-mobile is-6-tablet is-6-desktop">
                    </div>
                </div>
            </div>
        </section>
        {/* END ABOUT HACKATHON */}
        {/* INFO HACKATHON */}
        <section className="info-hackathon flex-centered">
            <div className="container flex-centered">
                <div className="columns">
                    <div className="column is-12-mobile is-4-tablet is-4-desktop">
                        <FontAwesomeIcon icon={faGraduationCap}/>
                        <div className="content">
                            <h4>¿A quíén va dirigido?</h4>
                            <p>
                                {infohackathon.who}
                            </p>
                        </div>
                    </div>
                    <div className="column is-12-mobile is-4-tablet is-4-desktop">
                        <FontAwesomeIcon icon={faCalendarAlt}/>
                        <div className="content">
                            <h4>¿Cuándo?</h4>
                            <p>
                                {infohackathon.when}
                            </p>
                        </div>
                    </div>
                    <div className="column is-12-mobile is-4-tablet is-4-desktop">
                        <FontAwesomeIcon icon={faMapMarker}/>
                        <div className="content">
                            <h4>¿Donde?</h4>
                            <p>
                                {infohackathon.where}
                            </p>
                            <a className="btn btn-mirror" href={infohackathon.linkWhere}>
                                <span>ver lugar</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* END INFO HACKATHON */}
        {/* RETO HACKATHON */}
        <section className="reto-hackathon flex-centered">
            <div className="container flex-centered">
                <div className="columns">
                    <div className="img column is-12-mobile is-6-tablet is-6-desktop">
                    </div>
                    <div className="about column is-12-mobile is-6-tablet is-6-desktop">
                        <h2>{challenge.title} </h2>
                        <p>
                            {challenge.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        {/* END RETO HACKATHON */}
        {/* INFO HACKATHON */}
        <section className="prize-hackathon flex-centered">
            <div className="container flex-centered">
                <h2>Premios</h2>
                <div className="columns flex-centered">
                    <div className="column is-6-mobile is-4-tablet is-4-desktop">
                        <FontAwesomeIcon icon={faTropy}/>
                        <div className="content">
                            <h3>1° Puesto</h3>
                            <Prizes data={firstplace} />
                        </div>
                    </div>
                    <div className="column is-6-mobile is-4-tablet is-4-desktop">
                        <FontAwesomeIcon icon={faTropy}/>
                        <div className="content">
                            <h3>2° Puesto</h3>
                            <Prizes data={secondplace} />
                        </div>
                    </div>
                    <div className="column is-6-mobile is-4-tablet is-4-desktop">
                        <FontAwesomeIcon icon={faTropy}/>
                        <div className="content">
                            <h3>3° Puesto</h3>
                            <Prizes data={thirdplace} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* END INFO HACKATHON */}
        {/* REGLAS HACKATHON */}
        <section className="rules-hackathon flex-centered">
            <div className="container flex-centered">
                <h2>Reglas</h2>
                <div className="columns">
                    <div className="column is-12-mobile is-12-tablet is-12-desktop">
                        <Rules data={rules} />
                    </div>
                </div>
            </div>
        </section>
        {/* END REGLAS HACKATHON */}
        {/* EXPOSITORES SECTION */}
        <section className="expositores flex-centered">
            <div className="container flex-centered">
                <div className="content">
                    <h2>Speakers</h2>
                </div>
                <Speakers data={speakers}/>
            </div>
        </section>
        {/* END EXPOSITORES */}
        {/* SPONSORS SECTION */}
        <section className="sponsors flex-centered">
            <div className="container flex-centered">
                <h2>Sponsors</h2>
                <Sponsors data={sponsors}/>
            </div>
        </section>
        {/* END SPONSORS */}
    </div>
);

HackathonPageTemplate.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    hackathondate: PropTypes.string,
    registerLink: PropTypes.string,
    abouthackathon: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string
    }),
    infohackathon: PropTypes.shape({
        who: PropTypes.string,
        when: PropTypes.string,
        where: PropTypes.string,
        linkWhere: PropTypes.string
    }),
    challenge: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string
    }),
    firstplace: PropTypes.array,
    secondplace: PropTypes.array,
    thirdplace: PropTypes.array,
    rules: PropTypes.array,
    speakers: PropTypes.array,
    sponsors: PropTypes.array
};

const HackathonPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <HackathonPageTemplate
            title={frontmatter.title}
            subtitle={frontmatter.subtitle}
            hackathondate={frontmatter.hackathondate}
            registerLink={frontmatter.registerLink}
            abouthackathon={frontmatter.abouthackathon}
            infohackathon={frontmatter.infohackathon}
            challenge={frontmatter.challenge}
            firstplace={frontmatter.firstplace}
            secondplace={frontmatter.secondplace}
            thirdplace={frontmatter.thirdplace}
            rules={frontmatter.rules}
            speakers={frontmatter.speakers}
            sponsors={frontmatter.sponsors}
        />
    );
};

HackathonPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object
        })
    })
};

export default HackathonPage;

export const hackathonPageQuery = graphql`
  query HackathonPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        hackathondate
        registerLink
        abouthackathon {
          title
          description
        }
        infohackathon {
          who
          when
          where
          linkWhere
        }
        challenge {
          title
          description
        }
        firstplace {
          price
        }
        secondplace {
          price
        }
        thirdplace {
          price
        }
        rules {
          rule
        }
        speakers {
          image
          name
          description
        }
        sponsors {
          image
        }
      }
    }
  }
`;
