import React, { ErrorInfo } from 'react';
import dayjs from 'dayjs';

type ErrorBoundaryState = { hasError: boolean };
type ErrorBoundaryProps = { fallback: JSX.Element; children: JSX.Element };

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // there should be some kind of a logger - for instance, Cloudwatch from AWS
    console.log({ timestamp: dayjs().unix(), error, errorInfo });
  }

  render() {
    const { hasError } = this.state;
    const { fallback, children } = this.props;

    return hasError ? fallback : children;
  }
}

export default ErrorBoundary;
