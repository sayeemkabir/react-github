import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layouts/Header";
import Users from "./components/Users";
import Newtest from "./components/Newtest";
import Search from "./components/Search";
import About from "./Layouts/About";
import Contact from "./Layouts/Contact";
import FAQ from "./Layouts/FAQ";
class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await fetch(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_SECRET_ID}}`
    );
    const data = await res.json();
    this.setState({ users: data, loading: false });
  }

  //search users function
  SearchUsers = async (text) => {
    this.setState({ loading: true });

    const getUser = await fetch(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_SECRET_ID}`
    );

    const userJson = await getUser.json();

    this.setState({ users: userJson.items, loading: false });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Search SearchUsers={this.SearchUsers} />;
                  <Users
                    users={this.state.users}
                    loading={this.state.loading}
                  />
                </>
              }
            />

            <Route exact path="/About" element={<About />} />

            <Route exact path="/Contact" element={<Contact />} />

            <Route exact path="/FAQ" element={<FAQ />} />
            <Route path="/user/:login" element={<Newtest {...this.props} />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
