import React from "react";
import sad from "../img/sad.png"

const NotFoundPage = () => (
  <div className="error">
    <h1>La página a la que quieres acceder no existe.</h1>
      <figure className="image is-square">
          <img src={sad}
               alt="sad python"/>
      </figure>
  </div>
);

export default NotFoundPage;
