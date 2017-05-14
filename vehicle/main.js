import Inferno from "inferno";
import Component from "inferno-component";
import createElement from 'inferno-create-element';
import h from "inferno-hyperscript";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }
  render() {
      return (
          h("div", {class: "container"}, [
	      h("div", "Clicked count: " + this.state.counter),
              h("button", {class: "button", onclick: Inferno.linkEvent(this, function(instance, event) { instance.setState({counter: instance.state.counter + 1}); })}, "Click"),
	  ])
      );
  }
}

Inferno.render(
  createElement(App, {}),
  document.getElementById("app")
)

