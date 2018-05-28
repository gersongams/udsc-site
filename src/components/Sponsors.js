import React from "react";
import PropTypes from "prop-types";

const Sponsors = ({ data }) => (
    <div className="columns flex-centered">
        {
            data.map(sponsor => (
                <div key={sponsor.image} className="column is-6-mobile is-3-tablet is-3-desktop">
                    <figure className="image is-2by1">
                        <img
                            src={sponsor.image}/>
                    </figure>
                </div>
            ))
        }
    </div>
);

Sponsors.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string,
        })
    )
};

export default Sponsors;
