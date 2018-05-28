import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import "./all.sass";
import Footer from "../components/Footer";

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet>
            <html lang="es"/>
            <meta charSet="utf-8"/>
            <meta http-equiv="x-ua-compatible"
                  content="ie=edge"/>
            <meta name="viewport"
                  content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <title>UDSC</title>

            <link rel="canonical"
                  href="http://mysite.com/example"/>
            <meta property="og:title"
                  content="UDSC - UNI Data Science Community"/>
            <meta name="description"
                  content="Comunidad de Data Science de la UNI"/>
            <meta property="og:type"
                  content="article"/>
            <meta name="keywords"
                  content="UNI, Data Science, Machine Learning, Vision Computacional, Big Data, Ciencia de Datos, NLP, Hackathon, Datathon, "/>


        </Helmet>
        <Navbar/>
        <div>{children()}</div>
        <Footer/>
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
