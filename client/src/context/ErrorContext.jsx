
import React, { useEffect } from 'react'

import { ErrorBoundary } from 'react-error-boundary'
const Error = React.createContext();


const ErrorContext = ({ children }) => {


    function ErrorHandler({ error }) {
        return (
            <div role="alert">
                <p>An error occurred:</p>
                <pre>{error.message}</pre>
            </div>
        )
    }


    return (
        <Error.Provider value={{ ErrorHandler }}>
            <ErrorBoundary FallbackComponent={ErrorHandler}>
                {children}
            </ErrorBoundary>
        </Error.Provider>
    )
}

export default ErrorContext