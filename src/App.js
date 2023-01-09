import React from 'react'
import { AuthProvider } from './contexts/auth'
import RoutesApp from './routes'
import GlobalStyles from './styles/global'

const App = () => {
    return (
        <AuthProvider>
            <RoutesApp />
            <GlobalStyles />
        </AuthProvider>
    )
}

export default App  