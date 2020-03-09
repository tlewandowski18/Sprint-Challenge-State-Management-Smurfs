import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchSmurfs } from  "../actions"

import "./App.css";

import SmurfList from "./SmurfList"
import SmurfForm from "./SmurfForm"

const App = (props) => {

  useEffect(() => {
    props.fetchSmurfs()
  }, [])

  return (
    <div className="App">
      <h1>Check Out My Smurf List!</h1>
      <SmurfForm />
      <SmurfList />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {fetchSmurfs})(App);
