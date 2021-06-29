import React from "react";
import RabaniLogProvider from "./RabaniLogProvider";

export const ErrorBoundaryHoc = (Component, ErrorComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <RabaniLogProvider errorComponent={ErrorComponent}>
          <Component />
        </RabaniLogProvider>
      );
    }
  };
};
