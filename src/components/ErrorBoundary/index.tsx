import React, { Component } from 'react'

import { ErrorContainer, ErrorTitle } from './styles'
import { ErrorProps, ErrorState } from './types'

export class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
    }
  }

  public static getDerivedStateFromError(): ErrorState {
    return { hasError: true }
  }

  public componentDidCatch(error: Error) {
    this.setState({ error: error.toString() })
  }

  public render() {
    const { hasError, error } = this.state
    const { children } = this.props
    if (hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>{error}</ErrorTitle>
        </ErrorContainer>
      )
    }

    return children
  }
}
