import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/main";
import Product from "./pages/product";

//cria uma função router
const Routes = () => (  
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/cards/:id" component={Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;