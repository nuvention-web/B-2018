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
      <Route path="A" component={RecipeScore}/>
      <Route path="B" component={IngredientsGroup}/>
      <Route path="C" component={SuggestBetterRecipes}/>
    </Route>
  </Router>
);

// export
export { router };
