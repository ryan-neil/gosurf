import PropTypes from 'prop-types';
import { Component } from 'react';
// components
import Logo from '../Logo';
// Styles
import { StyledErrorBoundary } from './ErrorBoundary.styled';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <StyledErrorBoundary>
          <Logo />
          <p className="error-message">
            Sorry, something went wrong on our end. Please refresh the page or try again later.
          </p>
        </StyledErrorBoundary>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default ErrorBoundary;
