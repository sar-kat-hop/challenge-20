import "./styles/index.css";
import {
  ApolloClient,
  ApolloProvider,
  ApolloLink,
  // HttpLink
} from "@apollo/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import { Navbar, Header, Footer, About, Project } from "./components";

//pages
