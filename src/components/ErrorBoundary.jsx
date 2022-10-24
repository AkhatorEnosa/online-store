import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    errorMessage: '',
  };

  static getDerivedStateFromError(error) {
    return { errorMessage: error.toString() };
  }

  componentDidCatch(error, info) {
    this.logErrorToServices("this is an error", error.toString(), info.componentStack);
  }

  // A fake logging service.
  logErrorToServices = console.log;

  render() {
    if (this.state.errorMessage) {
      console.log(this.state.errorMessage);
      return <p>{this.state.errorMessage}</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
