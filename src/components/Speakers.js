import React from "react";
import PropTypes from "prop-types";

const Speakers = ({ data }) => (
    <div className="columns flex-centered">
        {
            data.map(speaker => (
                <div key={speaker.name} className="column is-6-mobile is-4-tablet is-4-desktop is-3-widescreen">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-square">
                                <img
                                    src={speaker.image}
                                    alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content has-text-centered">
                                    <p className="title is-4">{speaker.name}</p>
                                </div>
                            </div>
                            <div className="content">
                                {speaker.description}
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
);

Speakers.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            description: PropTypes.string
        })
    )
};

export default Speakers;
