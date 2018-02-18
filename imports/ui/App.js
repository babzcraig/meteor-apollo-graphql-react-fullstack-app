import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const App = ({ data: { myName } }) => <h1>{myName}</h1>;

const myNameQuery = gql`
  {
    myName
  }
`;

export default graphql(myNameQuery)(App);
