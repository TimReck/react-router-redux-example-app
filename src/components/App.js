import React from "react";
import { Wrapper } from "../ui/Wrapper";

import { Route } from "react-router";

import { Kunden } from "./kunden/Kunden";
import { Taetigkeiten } from "./taetigkeiten/Taetigkeiten";
import { Tickets } from "./tickets/Tickets";

export const App = props => (
  <Wrapper>
    <Route exact path="/" component={Kunden} />
    <Route path="/tickets" component={Tickets} />
    <Route path="/taetigkeiten" component={Taetigkeiten} />
  </Wrapper>
);
