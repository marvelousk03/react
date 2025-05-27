import React, { Component } from 'react';
import GitHub from './GitHub';
import GitHubUser from './GitHubUser';
import Dessert from './Dessert';
import Contact from './Contact';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'; // ✅ add Link
import { Nav, Navbar } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand> {/* ✅ Link */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {/* ✅ Use Link instead of href */}
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/github">GitHub</Nav.Link>
                <Nav.Link as={Link} to="/dessert">Table</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route path="/github/user/:login/:id" component={GitHubUser} />
            <Route path="/github" component={GitHub} />
            <Route exact path="/" component={Home} />
            <Route exact path="/dessert" component={Dessert} />
            <Route exact path="/contact" component={Contact} /> {/* ✅ Contact route */}
            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

class Home extends Component {
  render() {
    return <div>Home</div>;
  }
}

class NotFound extends Component {
  render() {
    return <div>Not Found</div>;
  }
}

export default App;
