import { Component } from "react";

class Carousel extends Component {
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  state = { active: 0 };

  handleIndexClick(event) {
    // dataset means whatever is data-"something". Where data- = "dataset" and something = ".something"
    this.setState({ active: +event.target.dataset.index });
  }

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            // it should be a button due to accessibility reasons
            <img
              key={photo}
              src={photo}
              data-index={index}
              onClick={this.handleIndexClick.bind(this)} // we need to provide what element `this` refers to. Otherwise it will be out of context due to the way browsers work. Another possibility is to turn the regular function into arrow function.
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
