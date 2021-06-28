import React from "react";
import ShowError from "../../ShowError";
import ErrorBoundaryProvider from "./ErrorBoundaryProvider";

export const ErrorBoundaryHoc = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <ErrorBoundaryProvider>
          <Component />
        </ErrorBoundaryProvider>
      );
    }
  };
};
