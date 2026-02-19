import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-red-50 p-6">
                    <div className="max-w-xl bg-white p-8 rounded-xl shadow-xl border border-red-100">
                        <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong.</h1>
                        <p className="text-gray-600 mb-4">Please report this error to the developer.</p>
                        <details className="bg-gray-100 p-4 rounded text-sm font-mono overflow-auto max-h-64">
                            <summary className="cursor-pointer text-gray-700 font-semibold mb-2">Error Details</summary>
                            <div className="whitespace-pre-wrap text-red-500">
                                {this.state.error && this.state.error.toString()}
                                <br />
                                {this.state.errorInfo && this.state.errorInfo.componentStack}
                            </div>
                        </details>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
