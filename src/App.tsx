import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Money from './views/Money';
import Statistics from './views/Statistics';
// import Tags from './views/Tags';
// import {Tag} from './views/Tag'
import NoMatch from './views/NoMatch';
import styled from "styled-components";
import {Chart} from "./views/Chart";

const Wrapper = styled.div`
  color: #333;
  background-color: #fafafa;
`;

function App() {
  return (
    <Wrapper>

    <Router>
      <Switch>
        <Route exact path="/chart">
          <Chart/>
        </Route>
        {/*<Route exact path="/tags/:id">*/}
        {/*  <Tag/>*/}
        {/*</Route>*/}
        <Route exact path="/money">
          <Money/>
        </Route>
        <Route exact path="/statistics">
          <Statistics/>
        </Route>
        <Redirect exact from="/" to="/money"/>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
    </Wrapper>

  );
}


export default App;
