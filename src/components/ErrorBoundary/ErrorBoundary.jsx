import { Component } from 'react';
// Styles
import { StyledErrorBoundary, ErrorIcon } from './ErrorBoundary.styled';
import { Flex } from '../../styles/Utils.styled';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <StyledErrorBoundary>
          <Flex gapSm center>
            <img src="../logo.svg" alt="GoSurf Logo" />
            <h1>GoSurf</h1>
          </Flex>
          <p>
            <ErrorIcon />
            Sorry, something went wrong on our end. Please refresh the page or try again later.
          </p>
        </StyledErrorBoundary>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
