import React from 'react';
import { render, screen,fireEvent, waitFor, getByTestId} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './component/Search';
import App from './App';
import { ExpansionPanelActions } from '@material-ui/core';

test('renders App component', async() => {

  // const setSearch = jest.fn((value) =>{})
  render(
    <App />
  )
  
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  // screen.debug();
  // expect(screen.getByText("Search :")).toBeInTheDocument();
  // expect(screen.getByRole('textbox')).toBeInTheDocument();
  // expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  // expect(screen.queryByText("Search :")).toBeInTheDocument();
  // fireEvent.change(screen.getByRole('textbox'), {
  //   target: { value: 'JavaScript' },
  // });
  // userEvent.type(screen.getByRole("textbox"),"JavaScript");
  screen.debug();

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  
  const node = await(waitFor(()=>expect(screen.getByTestId("list")).toBeInTheDocument()));
  // userEvent.type(screen.getByRole('textbox'), 'JavaScript');

  // expect(onChange).toHaveBeenCalledTimes(10);


  screen.debug();
  //expect(screen.getByRole('textbox').value).toBe('JavaScript');
  //userEvent.type(screen.getByRole('textbox'), 'JavaScript');
  // expect(setSearch).toHaveBeenCalledTimes(1);
  //screen.debug();
  //expect(screen.getByRole('textbox')).toHaveValue('JavaScript');

});
