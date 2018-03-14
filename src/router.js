import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

import RecipeScoreForm from "./components/RecipeScoring/RecipeScoreForm";
import RecipeScore from "./components/RecipeScoring/RecipeScore";

import IngredientsGroup from "./components/BatchRecipes/IngredientsGroup";
import BatchDisplay0 from "./components/BatchRecipes/BatchDisplay0";

import TrustRecipeQuality from "./components/TrustRecipeQuality/TrustRecipeQuality";

import MVPForm from "./components/MVP/MVPForm";
import MVPDisplay from "./components/MVP/MVPDisplay";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="a" component={RecipeScoreForm}/>
      <Route path="a0" component={RecipeScore}/>
      <Route path="b" component={IngredientsGroup}/>
      <Route path="b0" component={BatchDisplay0}/>
      <Route path="c" component={TrustRecipeQuality}/>
      <Route path="d" component={MVPForm}/>
      <Route path="d0" component={MVPDisplay}/>
    </Route>
  </Router>
);

// export
export { router };
