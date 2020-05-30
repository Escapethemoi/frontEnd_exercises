import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { fireEvent } from '@testing-library/dom'


test('add todo', () => {
  const { container, getByText, getByPlaceholderText } = render(<App />);
  const desc = getByPlaceholderText('Description');
  fireEvent.change(desc, { target: { value: 'Go to coffee' } })

  const date = getByPlaceholderText('Date');
  fireEvent.change(date, { target: { value: '29.11.2019' } })

  const button = getByText('Add');
  fireEvent.click(button);

  expect(container).toHaveTextContent('Go to coffee');

  const button2 = getByText('Clear all');
  fireEvent.click(button2);

  expect(container).toBeEmpty();
})
