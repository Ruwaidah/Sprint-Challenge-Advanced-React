import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render} from '@testing-library/react'



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});

test('woman soccer player', () => {
  const { getByText } = render(<h1>World Women Cup</h1>)
  getByText(/World Women Cup/)
})





