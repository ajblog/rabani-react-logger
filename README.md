# Rabani React Logger

This project is a simple tool for your react project to handle exceptions by using HOC concept and React error boundaries.
You can create a customized component to be shown when an exception is thrown.
You can send the error's information to your elastic search server.

## Modules

Here are some modules you can use.

### `ErrorBoundaryHoc`

You can use this HOC to wrap any component you want.
It will handle any exceptions that happens at runtime in the wrapped component.
Here is an example:

```jsx
import { ErrorBoundaryHoc } from "rabani-react-logger";

const MyComponent = () => {
  //ANYTHING U WANNA DO
  return <div>This is a simple wrapperd component</div>;
};

export default ErrorBoundaryHoc(MyComponent);
```

#### `ErrorBoundaryHoc Optional Arguments`

The second arguments you can pass to ErrorBoundaryHoc is the Custom Component you want to be rendered when the exception is thrown.
For example here I create a ShowError.js file as follows:

```jsx
import React from "react";

export default function ShowError() {
  return (
    <div>
      HERE I CAN SHOW ANYTHING I WANT TO USER AFTER EXCEPTION WAS THROWN.
    </div>
  );
}
```

Now when wrapping MyComponent you can pass ShowError to ErrorBoundaryHoc like this:

```jsx
export default ErrorBoundaryHoc(App, ShowError);
```
