import React from "react";
import PropTypes from "prop-types";
import { ProjectPageTemplate } from "../../templates/project-page";

const ProjectPagePreview = ({ entry, getAsset }) => {
    const entryBlurbs = entry.getIn(["data", "projects", "project"]);
    const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

    return (
        <ProjectPageTemplate
            projects={{ blurbs }}
        />
    );
};

ProjectPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    }),
    getAsset: PropTypes.func
};

export default ProjectPagePreview;
