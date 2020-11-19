import React, { Component } from "react";
import "./App.css";
import { language, gener, format } from "./CategoryJson";
import {
  nowShowing,
  comingSoon,
  exclusive,
  theaterList,
} from "./MovieListJSON";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: nowShowing,
    };
  }

  linkHandler = (opt) => {
    this.setState({
      data: opt,
    });
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <ul className="link-container">
          <li id="nowShowing" onClick={() => this.linkHandler(nowShowing)}>
            Now Showing
          </li>
          <li id="comingSoon" onClick={() => this.linkHandler(comingSoon)}>
            Coming Soon
          </li>
          <li id="exclusive" onClick={() => this.linkHandler(exclusive)}>
            Exclusive
          </li>
        </ul>
        <div className="container">
          <div className="category">
            <span id="language">Select Language</span>
            <br />
            {language.map((lang) => {
              return (
                <>
                  <input type="checkbox" id={lang.id} />
                  <label htmlFor={lang.id}>{lang.value}</label>
                </>
              );
            })}

            <br />
            <span id="gener">Select Gener</span>
            <br />
            {gener.map((gen) => {
              return (
                <>
                  <input type="checkbox" id={gen.id} />
                  <label htmlFor={gen.id}>{gen.value}</label>
                </>
              );
            })}
            <br />
            <span id="format">Select Format</span>
            <br />
            {format.map((format) => {
              return (
                <>
                  <input type="checkbox" id={format.id} />
                  <label htmlFor={format.id}>{format.value}</label>
                </>
              );
            })}
          </div>
          <div className="image">
            {data.map((now, index) => {
              return (
                <>
                  <img src={now.src} alt={index + 1} />
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
