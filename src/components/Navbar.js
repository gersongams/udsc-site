import React from "react";
import Link from "gatsby-link";
import NavLink from "gatsby-link";

const hamburgerToggler = () => {
    let toggle = document.querySelector(".navbar-burger");
    let menu = document.querySelector(".navbar-menu");
    toggle.classList.toggle("is-active");
    menu.classList.toggle("is-active");
};

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar is-fixed-top">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/"
                              className="navbar-item logo-link"
                              exact={true}>
                            <h3 className="logo">UDSC</h3>
                        </Link>
                        <div className="navbar-burger burger"
                             data-target="navbarTogglerBurger"
                             onClick={hamburgerToggler}>
                            <span/>
                            <span/>
                            <span/>
                        </div>
                    </div>
                    <div id="navbarTogglerBurger"
                         className="navbar-menu">
                        <div className="navbar-end">
                            <NavLink className="navbar-item"
                                     activeClassName="selected"
                                     to="/hackathon"
                                     exact={true}
                                     onClick={hamburgerToggler}>
                                Eventos
                            </NavLink>
                            <NavLink className="navbar-item"
                                     activeClassName="selected"
                                     to="/workshops"
                                     onClick={hamburgerToggler}
                                     exact={true}>
                                Workshops
                            </NavLink>
                            <NavLink className="navbar-item"
                                     activeClassName="selected"
                                     onClick={hamburgerToggler}
                                     to="/blog"
                                     exact={true}>
                                Blog
                            </NavLink>
                            <NavLink className="navbar-item"
                                     activeClassName="selected"
                                     onClick={hamburgerToggler}
                                     to="/projects"
                                     exact={true}>
                                Proyectos
                            </NavLink>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <div className="navbar-link">
                                    Más
                                </div>
                                <div className="navbar-dropdown is-boxed">
                                    <NavLink className="navbar-item"
                                             activeClassName="selected-subitem"
                                             onClick={hamburgerToggler}
                                             to="/gallery"
                                             exact={true}>
                                        Galería
                                    </NavLink>
                                    <NavLink className="navbar-item"
                                             activeClassName="selected-subitem"
                                             onClick={hamburgerToggler}
                                             to="/members"
                                             exact={true}>
                                        Miembros
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
