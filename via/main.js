import Inferno from "inferno";
import Component from "inferno-component";
import createElement from 'inferno-create-element';
import h from "inferno-hyperscript";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
          h("div", {class: "container"}, "Hello, world")
      );
  }
}

Inferno.render(
  createElement(App, {}),
  document.getElementById("app")
)

