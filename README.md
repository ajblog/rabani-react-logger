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
import { ErrorBoundaryHoc } from "./lib/index";

const MyComponent = () => {
  //ANYTHING U WANNA DO
  return <div>This is a simple wrapperd component</div>;
};

export default ErrorBoundaryHoc(MyComponent);
```
