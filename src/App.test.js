import React from 'react';
import { render, screen,fireEvent, } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './component/Search';
import App from './App';

test('renders App component', async() => {
  const onChange = jest.fn()
  render(
    <Search>
        Search : 
      </Search>
  )
  //render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  screen.debug();
  expect(screen.getByText("Search :")).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  expect(screen.queryByText("Search :")).toBeInTheDocument();
  // fireEvent.change(screen.getByRole('textbox'), {
  //   target: { value: 'JavaScript' },
  // });
  // userEvent.type(screen.getByRole("textbox"),"Java");
 

  screen.debug();
  userEvent.type(screen.getByRole('textbox'), 'JavaScript');
  expect(screen.getByRole('textbox')).toHaveValue('JavaScript');
  expect(onChange).toHaveBeenCalledTimes(1);
});
