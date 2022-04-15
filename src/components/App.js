import React from "react";
import { Router, Route } from "react-router-dom";
import StreamCreate from "./Streams/StreamCreate";
import StreamDelete from "./Streams/StreamDelete";
import StreamEdit from "./Streams/StreamEdit";
import StreamList from "./Streams/StreamList";
import StreamShow from "./Streams/StreamShow";
import Header from "./Header";
import history from '../History'

const App = () => {
  return (
    <div className="ui container">

      <Router history={history}>
        <Header></Header>

        <Route path="/" exact component={StreamList}></Route>
        <Route path="/streams/new" exact component={StreamCreate}></Route>
        <Route path="/streams/edit" exact component={StreamEdit}></Route>
        <Route path="/streams/delete" exact component={StreamDelete}></Route>
        <Route path="/streams/show" exact component={StreamShow}></Route>
      </Router>
    </div>
  );
};

export default App;
