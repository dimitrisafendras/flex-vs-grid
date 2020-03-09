import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Flex1, Flex2, Flex3, Grid1, Grid2, Grid3} from './components';
import './App.css'
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <div className='Home'>
    <h2>Grid is Container-Based, Flexbox is Content-Based</h2>
    <h3>In flexbox layout, the size of a cell (flex-item) is defined inside the flex-item itself, and in the grid layout, the size of a cell (grid-item) is defined inside the grid-container.</h3>
    Flex
    <Flex1/>
    Grid
    <Grid1/>
    <h2>Grid Has a “Gap” Property, Flexbox Doesn’t</h2>
    Flex
    <Flex2/>
    Grid
    <Grid2/>
    <h2>Flexbox is One Dimensional, Grid is Two Dimensional</h2>
    Flex
    <Flex3/>
    Grid
    <h3>using grid-template-rows property. The repeat() function creates 3 rows with auto height.
      Then, inside the grid-items (header, main, aside, and footer) we define how much area those grid-items will cover using the grid-area property.</h3>
    <Grid3/>
    <ul>
      <li>
        <a href={'https://css-tricks.com/snippets/css/complete-guide-grid/'}>css tricks grid</a>
      </li>
      <li>
        <a href={'https://css-tricks.com/snippets/css/a-guide-to-flexbox/'}>css tricks flexbox</a>
      </li>
      <li>
        <a href={'https://www.webdesignerdepot.com/2018/09/grid-vs-flexbox-which-should-you-choose/'}> grid vs flex</a>
      </li>
    </ul>
  </div>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}