import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Home from "./components/Home";
import RecipeScore from "./components/RecipeScore";
import IngredientsGroup from "./components/IngredientsGroup";
import SuggestBetterRecipes from "./components/SuggestBetterRecipes";
import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="1" component={RecipeScore}/>
      <Route path="2" component={IngredientsGroup}/>
      <Route path="3" component={SuggestBetterRecipes}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
