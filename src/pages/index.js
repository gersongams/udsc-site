import React from "react";
import Link from "gatsby-link";
import backgroundVideo from "../videos/background.mp4";
import groupimage from "../img/love-ds.jpg";
import machine from "../img/machine.jpg";
import datascience from "../img/data-science.jpg";
import bigdata from "../img/big-data.jpeg";
import datavisual from "../img/data-visual.jpeg";
import nlp from "../img/nlp.png";
import vision from "../img/vision-computing.jpeg";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faFacebookSquare from "@fortawesome/fontawesome-free-brands/faFacebookF";
import faGithubSquare from "@fortawesome/fontawesome-free-brands/faGithub";
import faYoutube from "@fortawesome/fontawesome-free-brands/faYoutube";
import faInstagram from "@fortawesome/fontawesome-free-brands/faInstagram";
import Map from "../components/Map";

export default class IndexPage extends React.Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  sendMessage = () => {
    console.log("message sended");
  };

  render() {
    return <div>
      {/* HEADER */}
      <section className="header flex-centered">
        <div className="container flex-centered">
          <div className="content flex-centered">
            <h1>UDSC</h1>
            <h3>UNI Data Science Comunity</h3>
          </div>
        </div>
        <video id="background-video" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4"/>
        </video>
      </section>
      {/* END HEADER */}
      {/* WHO ARE WE */}
      <section className="whoarewe flex-centered">
        <div className="container flex-centered">
          <div className="content flex-centered">
            <div className="img-container">
              <img src={groupimage} alt=""/>
            </div>
            <h3>¿Quienes somos?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae quibusdam, dolore, aliquid, ratione minus
              obcaecati ex et iure vero pariatur quas! Asperiores quam
              impedit quo modi ducimus quia, pariatur reprehenderit.
            </p>
          </div>
        </div>
      </section>
      {/* END WHO ARE WE */}
      {/* HACKATHON SECTION */}
      <section className="hackathon flex-centered">
        <div className="container flex-centered">
          <div className="content flex-centered">
            <h3>Hackathon UDSC</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae quibusdam, dolore, aliquid, ratione minus
              obcaecati ex et iure vero pariatur quas! Asperiores quam
              impedit quo modi ducimus quia, pariatur reprehenderit.
            </p>
            <Link to="/hackathon" className="btn btn-mirror" exact={true}>
              <span>registrate</span>
            </Link>
          </div>
        </div>
      </section>
      {/* END HACKATHON */}
      {/* CONFERENCIA SECTION */}
      <section className="conferencia flex-centered">
        <div className="container flex-centered">
          <div className="content flex-centered">
            <h3>Conferencia</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae quibusdam, dolore, aliquid, ratione minus
              obcaecati ex et iure vero pariatur quas! Asperiores quam
              impedit quo modi ducimus quia, pariatur reprehenderit.
            </p>
            <div className="buttons">
              <a className="btn btn-mirror">
                <span>become a speaker</span>
              </a>
              <a className="btn btn-mirror">
                <span>registrate</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* END CONFERENCIA */}
      {/* INTEREST SECTION */}
      <section className="interest flex-centered">
        <div className="container">
          <div className="content flex-centered">
            <h3>Temas de Interés</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae quibusdam, dolore, aliquid, ratione minus
              obcaecati ex et iure vero pariatur quas! Asperiores quam
              impedit quo modi ducimus quia, pariatur reprehenderit.
            </p>
          </div>
        </div>
      </section>
      <section className="temas flex-centered">
        <div className="temas-container">
          <div className="columns">
            <div className="column is-12-mobile is-6-tablet is-4-desktop">
              <img src={datascience} alt=""/>
              <div className="container">
                <h3>Data Science</h3>
              </div>
            </div>
            <div className="column is-12-mobile is-6-tablet is-4-desktop">
              <img src={vision} alt=""/>
              <div className="container">
                <h3>Vision Computacional</h3>
              </div>
            </div>
            <div className="column is-12-mobile is-6-tablet is-4-desktop">
              <img src={nlp} alt=""/>
              <div className="container">
                <h3>Procesamiento de Lenguaje Natural</h3>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-12-mobile is-6-tablet is-4-desktop">
              <img src={bigdata} alt=""/>
              <div className="container">
                <h3>Big Data</h3>
              </div>
            </div>
            <div className="column is-12-mobile is-6-tablet is-4-desktop">
              <img src={machine} alt=""/>
              <div className="container">
                <h3>Machine Learning</h3>
              </div>
            </div>
            <div className="column is-12-mobile is-6-tablet is-4-desktop">
              <img src={datavisual} alt=""/>
              <div className="container">
                <h3>Visualizacion de Datos</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END INTEREST */}
      {/* SOCIAL SECTION */}
      <section className="social-section flex-centered">
        <div className="container flex-centered">
          <div className="content">
            <h3>Nuestras Redes Sociales</h3>
            <div className="social-networks flex-centered">
              <a href="#">
                <div className="facebook">
                  <FontAwesomeIcon icon={faFacebookSquare}/>
                </div>
              </a>
              <a href="#">
                <div className="github">
                  <FontAwesomeIcon icon={faGithubSquare}/>
                </div>
              </a>
              <a href="#">
                <div className="youtube">
                  <FontAwesomeIcon icon={faYoutube}/>
                </div>
              </a>
              <a href="#">
                <div className="instagram">
                  <FontAwesomeIcon icon={faInstagram}/>
                </div>
              </a>
            </div>
            <p>
              Envie sus preguntas o comentarios por correo electronico a
            </p>
            <p>udsc@uni.edu.pe</p>
          </div>
        </div>
      </section>
      {/* END SOCIAL */}
      {/* CONTACT SECTION */}
      <section className="contactanos flex-centered">
        <div className="container">
          <div className="columns flex-centered">
            <div className="column is-12-mobile is-12-tablet is-6-desktop map-container">
              <Map
                isMarkerShown
              />
            </div>
            <div className="column form-container flex-centered is-12-mobile is-12-tablet is-6-desktop">
              <h2>Contáctanos</h2>
              <div className="contact-form">
                <div className="columns">
                  <div className="column is-12-mobile is-6-tablet is-6-desktop">
                    <div className="field">
                      <label className="label">Nombre</label>
                      <div className="control">
                        <input className="input"
                               type="text"
                               placeholder="Nombre"
                               name="firstName"
                               onChange={this.handleInputChange}
                               value={this.state.firstName}/>
                      </div>
                    </div>
                  </div>
                  <div className="column is-12-mobile is-6-tablet is-6-desktop">
                    <div className="field">
                      <label className="label">Apellido</label>
                      <div className="control">
                        <input className="input"
                               type="text"
                               placeholder="Apellidos"
                               name="lastName"
                               onChange={this.handleInputChange}
                               value={this.state.lastName}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <div className="field">
                      <label className="label">Email</label>
                      <div className="control">
                        <input className="input is-danger"
                               type="email"
                               placeholder="Email"
                               name="email"
                               onChange={this.handleInputChange}
                               value={this.state.email}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <div className="field">
                      <label className="label">Message</label>
                      <div className="control">
                        <textarea className="textarea"
                                  placeholder="Mensaje"
                                  name="message"
                                  onChange={this.handleInputChange}
                                  value={this.state.message}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="columns enviar">
                  <div className="column">
                    <div className="field is-grouped">
                      <div className="control">
                        <button className="button is-link" onClick={this.sendMessage}>Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END CONTACT */}
    </div>;
  }
}
