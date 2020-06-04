import React, { Component } from "react";
import Modal from "../../Components/UI/Modal/Modal";
import Aux from "../Auxilary";

// Wrap around components that use axios and requests to provide
// global error handling
const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    // Using constructor instead of component did mount
    // because component did mount doesn't get called
    // until ComponentDidMount for the WrappedComponent is called
    constructor(props) {
      super(props);

      this.state = {
        error: null
      };
      // If sending a request, reset error state to null
      // If interceptor catches an error, set error state to true
      // and display the error modal with the message
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    

    componentWillUnmount () {
      // Clean up interceptors when they aren't needed anymore
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
      console.log("Will unmount", this.reqInterceptor, this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};
export default withErrorHandler;
