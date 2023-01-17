import React, { Component, ErrorInfo, ReactNode }  from 'react';

import {ErrorContainer,ErrorTitle} from './styles'

interface ErrorProps {
  children: ReactNode;
}

interface ErrorState {
  hasError: boolean;
  error?: null | string;
}

class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(): ErrorState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error: error.toString() });
    console.error(errorInfo.componentStack);
  }

  public render() {
    if (this.state.hasError) {
      return (
      <ErrorContainer>
        <ErrorTitle>{this.state.error}</ErrorTitle>
      </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
