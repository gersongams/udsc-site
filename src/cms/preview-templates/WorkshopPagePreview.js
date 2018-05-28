import React from "react";
import PropTypes from "prop-types";
import { WorkshopPageTemplate } from "../../templates/workshop-page";

const WorkshopPagePreview = ({ entry, getAsset }) => {
    const entryBlurbs = entry.getIn(["data", "workshops", "workshop"]);
    const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

    return (
        <WorkshopPageTemplate
            workshops={{ blurbs }}
        />
    );
};

WorkshopPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    }),
    getAsset: PropTypes.func
};

export default WorkshopPagePreview;
