import React from 'react';
import { render } from "@testing-library/react";
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("ensure heading has loaded", () => {
  const { findByText } = render(<App />);

 findByText(/players/i);
});

test("find the first player name to ensure api has loaded", () => {
  const { findByText } = render(<App />);

 findByText(/alex morgan/i);
});

test("find the last player name to ensure api has finished loading", () => {
  const { findByText } = render(<App />);

 findByText(/tierna davidson/i);
});

