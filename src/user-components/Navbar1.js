import React,{Component} from "react";
import { Link, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
import Leaderboard from "./leaderboard";
import Dashboard from "./Dashboard";
import Personaldetails from "./personaldetails";
import Changepassword from "./changepassword";
import Calender from "./Calender";
import Axios from "axios";

class Navbar1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login:"",
      fName:"",
      lName:"",
      isNavOpen: false,
    };
        this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

 /* componentDidMount(){
        Axios.get("http://localhost:80/login-backend/UserNavbar.php?id="+this.state.login)
        .then(res => {
          console.log(res.data);
          this.setState({
            fName: res.data[0]['first_name'],
            lName: res.data[0]['last_name']
          })
        })
  }*/

  render() {
    return (
      <div className="Navbar1 container-fluid">
        <Router>
          <Navbar dark color="dark" expand="lg" className="container-fluid">
            <div className="container-fluid">
              <NavbarToggler onClick={this.toggleNav} />
              <NavbarBrand className="mr-auto" href="/">
                <img src="assets/images/gitamlogo.png" height="50" width="50" />
                GITAM Bengaluru
              </NavbarBrand>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <span className="tab1"></span>
                <Nav navbar>
                  <NavItem>
                    <NavLink
                      align="left"
                      className="nav-link active"
                      tag={Link}
                      to="/Dashboard"
                      style={{ color: "lightgreen" }}
                    >
                      <span class="fa fa-home fa-lg"></span>&nbsp;Dashboard
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      align="left"
                      className="nav-link "
                      tag={Link}
                      to="/Personaldetails"
                      style={{ color: "lightgreen" }}
                    >
                      <span class="fa fa-info fa-lg"></span>&nbsp;Personal
                      Details
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      align="left"
                      className="nav-link"
                      tag={Link}
                      to="/Calender"
                      style={{ color: "lightgreen" }}
                    >
                      <span class="fa fa-calendar"></span>&nbsp;Calender
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      align="left"
                      className="nav-link "
                      tag={Link}
                      to={"/leaderboard"}
                      style={{ color: "lightgreen" }}
                    >
                      <span class="fa fa-trophy"></span>&nbsp;Leader Board
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      align="left"
                      className="nav-link "
                      tag={Link}
                      to="/changepassword"
                      style={{ color: "lightgreen" }}
                    >
                      <span class="fa fa-key"></span>&nbsp;Change Password
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      align="left"
                      className="nav-link"
                      tag={Link}
                      to="/logout"
                      style={{ color: "lightgreen" }}
                    >
                      <span class="fa fa-sign-out"></span>&nbsp;Logout
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
            <span className="col-xs-6 welcome">
              Welcome<br></br> Name
            </span>
            <div className="col-xs-6">
              <img
                src="assets/images/gitamlogo.png"
                height="50"
                width="50"
              ></img>
            </div>
          </Navbar>
          <Switch>
            <Route exact path="/Dashboard"><div className="container-fluid"><Dashboard login={this.props.value}/></div></Route>
            <Route exact path="/Personaldetails"><div className="container-fluid"><Personaldetails login={this.props.value}/></div></Route>
            <Route exact path="/Leaderboard"><div className="container-fluid"><Leaderboard login={this.props.value}/></div></Route>
            <Route exact path="/Calender" component={Calender} />
            <Route exact path="/Changepassword"><div className="container-fluid"><Changepassword login={this.props.value}/></div></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Navbar1;
