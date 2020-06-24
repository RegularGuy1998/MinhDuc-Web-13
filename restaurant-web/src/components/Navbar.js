import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
    render() {
        return (
            <div className="pcoded-navbar menu-light ">
                <div className="navbar-wrapper  ">
                    <div className="navbar-content scroll-div " >

                        <div className="">
                            <div className="main-menu-header">
                                <img className="img-radius" src="assets/images/user/avatar-2.jpg" alt="User-Profile-Image"></img>
                                    <div className="user-details">
                                        <div id="more-details">UX Designer <i className="fa fa-caret-down"></i></div>
                                    </div>
					</div>
                                <div className="collapse" id="nav-user-link">
                                    <ul className="list-unstyled">
                                        <li className="list-group-item"><a href="user-profile.html"><i className="feather icon-user m-r-5"></i>View Profile</a></li>
                                        <li className="list-group-item"><a href="#!"><i className="feather icon-settings m-r-5"></i>Settings</a></li>
                                        <li className="list-group-item"><a href="auth-normal-sign-in.html"><i className="feather icon-log-out m-r-5"></i>Logout</a></li>
                                    </ul>
                                </div>
                            </div>

                            <ul className="nav pcoded-inner-navbar ">
                                <li className="nav-item pcoded-menu-caption">
                                    <label>Navigation</label>
                                </li>
                                <li className="nav-item">
                                    <a href="index.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Dashboard</span></a>
                                </li>
                                <li className="nav-item pcoded-hasmenu">
                                    <a href="#!" className="nav-link "><span className="pcoded-micon"><i className="feather icon-layout"></i></span><span className="pcoded-mtext">Page layouts</span></a>
                                    <ul className="pcoded-submenu">
                                        <li><a href="layout-vertical.html" target="_blank">Vertical</a></li>
                                        <li><a href="layout-horizontal.html" target="_blank">Horizontal</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item pcoded-menu-caption">
                                    <label>UI Element</label>
                                </li>
                                <li className="nav-item pcoded-hasmenu">
                                    <a href="#!" className="nav-link "><span className="pcoded-micon"><i className="feather icon-box"></i></span><span className="pcoded-mtext">Basic</span></a>
                                    <ul className="pcoded-submenu">
                                        <li><a href="bc_alert.html">Alert</a></li>
                                        <li><a href="bc_button.html">Button</a></li>
                                        <li><a href="bc_badges.html">Badges</a></li>
                                        <li><a href="bc_breadcrumb-pagination.html">Breadcrumb & paggination</a></li>
                                        <li><a href="bc_card.html">Cards</a></li>
                                        <li><a href="bc_collapse.html">Collapse</a></li>
                                        <li><a href="bc_carousel.html">Carousel</a></li>
                                        <li><a href="bc_grid.html">Grid system</a></li>
                                        <li><a href="bc_progress.html">Progress</a></li>
                                        <li><a href="bc_modal.html">Modal</a></li>
                                        <li><a href="bc_spinner.html">Spinner</a></li>
                                        <li><a href="bc_tabs.html">Tabs & pills</a></li>
                                        <li><a href="bc_typography.html">Typography</a></li>
                                        <li><a href="bc_tooltip-popover.html">Tooltip & popovers</a></li>
                                        <li><a href="bc_toasts.html">Toasts</a></li>
                                        <li><a href="bc_extra.html">Other</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item pcoded-menu-caption">
                                    <label>Forms &amp; table</label>
                                </li>
                                <li className="nav-item">
                                    <a href="form_elements.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-file-text"></i></span><span className="pcoded-mtext">Forms</span></a>
                                </li>
                                <li className="nav-item">
                                    <a href="tbl_bootstrap.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-align-justify"></i></span><span className="pcoded-mtext">Bootstrap table</span></a>
                                </li>
                                <li className="nav-item pcoded-menu-caption">
                                    <label>Chart & Maps</label>
                                </li>
                                <li className="nav-item">
                                    <a href="chart-apex.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-pie-chart"></i></span><span className="pcoded-mtext">Chart</span></a>
                                </li>
                                <li className="nav-item">
                                    <a href="map-google.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-map"></i></span><span className="pcoded-mtext">Maps</span></a>
                                </li>
                                <li className="nav-item pcoded-menu-caption">
                                    <label>Pages</label>
                                </li>
                                <li className="nav-item pcoded-hasmenu">
                                    <a href="#!" className="nav-link "><span className="pcoded-micon"><i className="feather icon-lock"></i></span><span className="pcoded-mtext">Authentication</span></a>
                                    <ul className="pcoded-submenu">
                                        <li><a href="auth-signup.html" target="_blank">Sign up</a></li>
                                        <li><a href="auth-signin.html" target="_blank">Sign in</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><a href="sample-page.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-sidebar"></i></span><span className="pcoded-mtext">Sample page</span></a></li>

                            </ul>

                            <div className="card text-center">
                                <div className="card-block">
                                    <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                    <i className="feather icon-sunset f-40"></i>
                                    <h6 className="mt-3">Download Pro</h6>
                                    <p>Getting more features with pro version</p>
                                    <a href="https://1.envato.market/qG0m5" target="_blank" className="btn btn-primary btn-sm text-white m-0">Upgrade Now</a>
                                </div>
                            </div>

                        </div>
                    </div>
	</div>
        );
    }
}

Navbar.propTypes = {

                };

export default Navbar;