import React from "react";
import ErrorBoundaryProvider from "./ErrorBoundaryProvider";

export const ErrorBoundaryHoc = (Component, ErrorComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <ErrorBoundaryProvider errorComponent={ErrorComponent}>
          <Component />
        </ErrorBoundaryProvider>
      );
    }
  };
};
