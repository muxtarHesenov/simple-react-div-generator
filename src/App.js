import React from "react";
import Form from "./Form"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generatorStyle: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(styles) {
    this.setState({
      generatorStyle: styles,
    })
  }

  render() {
    const {generatorStyle } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit} />
        <div style={generatorStyle}></div>
      </>
    );
  }
}


export default App;
