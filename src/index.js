import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Components
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

ReactDOM.render(
	<React.StrictMode>
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</React.StrictMode>,
	document.getElementById('root')
);
