import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Home from "./components/Home";
import RecipeScore from "./components/RecipeScore";
import IngredientsGroup from "./components/IngredientsGroup";
import SuggestBetterRecipes from "./components/SuggestBetterRecipes";
import BatchDisplay0 from "./components/BatchDisplay0";
import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="a" component={RecipeScore}/>
      <Route path="b" component={IngredientsGroup}/>
      <Route path="b0" component={BatchDisplay0}/>
      <Route path="c" component={SuggestBetterRecipes}/>
    </Route>
  </Router>
);

// export
export { router };
