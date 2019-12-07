import React from 'react';

class ConfirmCom extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
    componentDidCatch() {
      this.props.incomplete();
    }
    componentDidMount() {
      this.props.complete();
    }

    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
      return <div>{this.props.context}</div>;
    }
  }

  export default ConfirmCom