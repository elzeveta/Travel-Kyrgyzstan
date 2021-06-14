import React from 'react';
import "./Slides.css";

class Slides extends React.Component {
    constructor() {
      super();
        this.state = {
            slides: [
                {
                  image: "url(./images/peak-pobedy.jpg)",
                  name: "Pobeda (Victory Peak)"
                },
                {
                  image: "url(./images/peak-lenina.jpg)",
                  name: "Peak Lenin"
                },
                {
                  image: "url(./images/peak-tandykul.jpg)",
                  name: "Tandikul"
                },
                {
                  image: "url(./images/peak-semenova.jpg)",
                  name: "Semyeno"
                },
                {
                  image: "url(./images/peak-karakolskiy.jpg)",
                  name: "Karakol"
                },
                {
                  image: "url(./images/peak-fergana.jpeg)",
                  name: "Ferghana"
                },
                {
                  image: "url(./images/peak-kirgizskiy.jpg)",
                  name: "Kyrgyz"
                },
                {
                  image: "url(./images/peak-at-bashi.jpg)",
                  name: "At Bashi"
                },
                {
                  image: "url(./images/peak-chok-tal.jpg)",
                  name: "Chok Tal"
                },
                {
                  image: "url(./images/peak-chatkal.jpg)",
                  name: "Chatkal(Aflatun)"
                },
                {
                  image: "url(./images/peak-naryn-too.jpg)",
                  name: "Naryn Too(Baibiche)"
                },
                {
                  image: "url(./images/peak-manas.jpg)",
                  name: "Manas"
                },
                {
                  image: "url(./images/peak-djumgal-too.jpg)",
                  name: "Min Teke"
                },
              ] ,
              active: 0  
        }
    this.state.max = this.state.slides.length;
  }
  setSlide = () => {
    const x = this.state.active * -900;
    return { transform: `translateX(${x}px)` };
  };

  prevOne = () => {
    if (this.state.active > 0) {
      this.setState({ active: this.state.active - 1 });
    } else {
      this.setState({ active: this.state.max - 1 });
    }
  };

  nextOne = () => {
    if (this.state.active < this.state.max - 1) {
      this.setState({ active: this.state.active + 1 });
    } else {
      this.setState({ active: 0 });
    }
  };
  renderSliders = () => {
    return this.state.slides.map((el, i) => {
      return (
        <div className="item" key={i} style={{ backgroundImage: el.image, backgroundSize: "100% 100%"}}>
          <div className="name">{el.name}</div>
        </div>
      );
    });
  };
  render() {
    return (
      <>
        <div className="slider">

          <div className="wrap" style={this.setSlide()}>
            {this.renderSliders()}
          </div>
          <div className="btn btn_next" onClick={this.nextOne}>
            NEXT
          </div>
          <div className="btn btn_prev" onClick={this.prevOne}>
            PREV
          </div>
        </div>
      </>
    );
  }
}

export default Slides;

