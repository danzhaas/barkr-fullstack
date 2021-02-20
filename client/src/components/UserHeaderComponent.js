import React, { Component } from 'react';
import { Nav, Navbar, Collapse, NavItem, NavbarToggler, NavbarBrand, DropdownItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { DogChooserModal } from './ChooseDogModalComponent';
import { Consumer } from "./configContext";


class MeetHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            navCollapsed: true
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
    };

    toggleNavbar() {
        this.setState({ navCollapsed: !this.state.navCollapsed })
    };

    toggleModal() {
        this.setState({ modal: !this.state.modal })
    };

    render() {

        return (
            <Consumer>
                {context => {
                    return (
                        <div className="container sticky-top bg-warning border-bottom-0">
                            <div className="row bg-warning">
                                <Navbar className="col-12 p-0" expand="md">
                                <DogChooserModal modal={this.state.modal} toggleModal={this.toggleModal} chooseDog={context.chooseDog} dogs={context.dogs} />
                                    <NavbarBrand id="navbarBrand" className="py-0" >
                                        <NavLink className="d-flex flex-row align-items-center px-2 py-0 btn btn-warning hover-black" to="/landing">
                                            <i id="paw" className="fa fa-paw fa-2x fa-md-3x"></i>
                                            <h1 className="display-md-4 ">Barkr</h1>
                                        </NavLink>
                                    </NavbarBrand>
                                    <NavbarToggler className="text-danger px-2" onClick={this.toggleNavbar}>
                                        <i className="fa fa-bars fa-2x fa-md-3x"></i>
                                    </NavbarToggler>
                                    <Collapse isOpen={!this.state.navCollapsed} navbar>
                                        <Nav className="mr-auto" navbar>
                                            <NavItem>
                                                <NavLink className="nav-link d-flex flex-row  btn btn-warning" to={`/user/${context.userId}`} >
                                                    <i className="nav-icon fa fa-home fa-2x"></i>
                                                    <h5>My Homepage</h5>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className="nav-link d-flex flex-row btn btn-warning" to={`/user/${context.userId}/:dogId`} >
                                                    <i className="fa fa-dog fa-2x "></i>
                                                    <h5>My Dogs</h5>
                                                </NavLink>
                                            </NavItem>
                                            {/* <NavItem>
                                                <NavLink className="nav-link d-flex flex-row btn btn-warning" to={`/user/${context.userId}/:dogId`} >
                                                    <i className="nav-icon fa fa-tree fa-2x align-self-center"></i>
                                                    <h5>Followed Dogs</h5>
                                                </NavLink>
                                            </NavItem> */}
                                            <NavItem>
                                                <NavLink className="nav-link d-flex flex-row btn btn-warning" to={`/user/${context.userId}/settings`} >
                                                    <i class="nav-icon fas fa-user-cog fa-2x"></i>
                                                    <h5>My Settings</h5>
                                                </NavLink>
                                            </NavItem>
                                            <DropdownItem divider className="d-block d-md-none" />
                                            <NavItem >
                                                <Button className="nav-link d-flex flex-row p-md-2 bg-warning border-0 hover-black" onClick={this.toggleModal} >
                                                    <i className="fa fa-dog fa-2x "></i>
                                                    <h5>Browse Dogs</h5>
                                                </Button>
                                            </NavItem>
                                        </Nav>
                                    </Collapse>
                                </Navbar>
                            </div>
                            <div className="row border-0 bg-warning pt-1">
                                <div className="col-12">
                                    <h1 id="page-title" className="display-4 mb-0">{this.props.pageName}&nbsp;<span className="text-primary">{this.props.userName}</span></h1>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default MeetHeader;