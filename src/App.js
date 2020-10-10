import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Blog from "./containers/Blog/Blog";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Burhan's Blog</h1>
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
