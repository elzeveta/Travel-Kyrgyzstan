import React from "react";
import "./Visa.css";

class Visa extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [
        "Australia",
        "Austria",
        "Bahrain",
        "Belgium",
        "Bosnia and Herzegovina",
        "Brunei",
        "Canada",
        "Croatia",
        "Czech Republic",
        "Denmark",
        "Estonia",
        "Finland",
        "France",
        "Germany",
        "Great Britain",
        "Greece",
        "Hungary",
        "Iceland",
        "Ireland",
        "Italy",
        "Kuwait",
        "Latvia",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Malta",
        "Monaco",
        "the Netherlands",
        "New Zealand",
        "Norway",
        "Poland",
        "Portugal",
        "Qatar",
        "Saudi Arabia",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "South Korea",
        "Spain",
        "Switzerland",
        "Sweden",
        "UAE",
        "USA",
        "Vatican",
      ],
      inputVal: "",
      result: [],
    };
    this.state.result = this.state.countries;
  }
  getInput = (e) => {
    const inputValue = e.target.value;
    this.setState({ inputVal: inputValue }, () => {
      this.autocomplete();
    });
  };
  autocomplete = () => {
    const { inputVal, countries } = this.state;
    const match = countries.reduce((acc, state) => {
      if (state.toLowerCase().includes(inputVal.toLowerCase())) {
        acc.push(state);
      }
      return acc;
    }, []);
    this.setState({ result: match });
  };

  selectLocation = (item) => {
    const newResult = this.state.result.filter((locName) => locName !== item);
    this.setState({ inputVal: item, result: newResult });
  };
  render() {
    const { inputVal, result } = this.state;
    const content = result.map((item) => {
      return (
        <li
          className="list-item"
          onClick={() => {
            this.selectLocation(item);
          }}
        >
          {item}
        </li>
      );
    });
    return (
      <div className="visa">
      <p>
        Visa free regime in the Kyrgyz Republic applies to the citizens of the
        following countries: Armenia, Azerbaijan, Belarus, Georgia, Kazakhstan,
        Moldova, Russia, Tajikistan, Vietnam, Cuba, Malaysia (up to 30 days),
        Mongolia (up to 90 days), Turkey (up to 30 days), Ukraine (up to 90
        days), Uzbekistan (up to 60 days) and Japan.
      </p>
      <p>
        According to the Law of the Kyrgyz Republic "About introduction of a
        visa-free regime for citizens of some states within 60 days", the
        citizens of the following countries are exempt from the visa requirement
        for up to 60 days:
      </p>
        <label htmlFor="search">Search Location</label>
        <input onChange={this.getInput} value={inputVal} />
        <ul className="list">{content}</ul>
      </div>
    );
  }
}

export default Visa;

 
