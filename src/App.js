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
  ///////////////////////State/////////////////
  constructor(props) {
    super(props);

    this.state = {
      data: nowShowing,
      isChecked: true,
    };
  }
  /////////////////////////Handlers//////////////
  linkHandler = (opt) => {
    this.setState({
      data: opt,
    });
  };
  checkHandler = (type, value) => {
    const { data, isChecked } = this.state;
    const checkFilter = data.filter((checkData) => checkData[type] === value);

    this.setState({
      isChecked: !this.state.isChecked,
      data: checkFilter,
    });

    console.log(checkFilter);
    console.log(isChecked);
  };
  /////////////////////////////////////////////
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
                  <input
                    type="checkbox"
                    id={lang.id}
                    onChange={() => this.checkHandler("language", lang.value)}
                  />
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
                  <input
                    type="checkbox"
                    id={gen.id}
                    onChange={() => this.checkHandler("gener", gen.value)}
                  />
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
                  <input
                    type="checkbox"
                    id={format.id}
                    onChange={() => this.checkHandler("format", format.value)}
                  />
                  <label htmlFor={format.id}>{format.value}</label>
                </>
              );
            })}
          </div>
          <div className="image">
            {data.map((img, index) => {
              return (
                <>
                  <img
                    key={img.id}
                    id={img.id}
                    src={img.src.default}
                    alt={index + 1}
                  />
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
