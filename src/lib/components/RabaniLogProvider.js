import React from "react";
import PropTypes from "prop-types";

export default class RabaniLogProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // HERE I WILL REGISTER THE LOG TO THE ELASTIC SERVER
    this.setState({ ...this.state, hasError: true });
    console.log(error.lineNumber, errorInfo);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      if (this.props.errorComponent) {
        return <>{this.props.errorComponent()}</>;
      } else {
        return <div>YOU HAVE AN ERROR!!!</div>;
      }
    }

    return this.props.children;
  }
}

RabaniLogProvider.propTypes = {
  errorComponent: PropTypes.node,
};
