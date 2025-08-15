import { render, screen, logRoles, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

test('Sample test', async () => {
  // set up a user
  const user = userEvent.setup();

  // render the component
  render(<App />);

  // find the button
  const button = screen.getByRole('button', { name: /click me/i });

  // click the button
  await user.click(button);

  // find the message
  const message = await screen.findByRole(/you clicked me/i);

  // make sure the message is displayed
  expect(message).toBeInTheDocument();
});

///////////////////////////
// ** Using mock functions
///////////////////////////
test('mock function', async () => {
  const mock = v.fn();
  render(<App expectedPropFunction={mock} />);

  // test logic
});

///////////////////////////
// ** debugging
///////////////////////////

test('debugging sample test', async () => {
  // render the component desctructuring the container to use on logRoles
  const { container } = render(<App />);

  // Log all roles to the terminal
  logRoles(container);

  // creates a link in the terminal to a log of the current state of the DOM
  screen.logTestingPlaygroundURL();

  // debuggin the current state of the DOM
  screen.debug();
});

///////////////////////////
// ** Creating a custom render function that can be called inside each test instead of calling render() on each of them
///////////////////////////

const renderComponent = function () {
  const users = [
    { name: 'Theo', email: 'theo@theo.com' },
    { name: 'Maxine', email: 'maxine@softy.com' },
  ];
  const { container } = render(<UserList users={users} />);

  return {
    container,
    users,
  };
};
test('renders a list of users', () => {
  // Here we use the custom render function instead of the render()
  const { users } = renderComponent();
  // test logic
});

///////////////////////////
// ** To use custom handlers for the msw server (for testing errors for example)
///////////////////////////

// First we need to import the server and the necessary functions from msw
import { http, HttpResponse } from 'msw';
import { server } from '../../../mocks/server';

// Then we create the handlers for the routes we want to test
export const handlers = [
  http.get('http://localhost:3030/scoops', () => {
    return new HttpResponse(null, { status: 500 });
  }),
  http.get('http://localhost:3030/toppings', () => {
    return new HttpResponse(null, { status: 500 });
  }),
];

test('handle error alert for scoopings and toppings routes', async () => {
  // finally we reset the handlers of the server to use the custom ones on this test only
  server.resetHandlers(handlers);

  // test logic
});

///////////////////////////
// ** Unmounting the component after each test
///////////////////////////

test('unmounting the component', async () => {
  // for unmounting the component after each test
  // we need to destructure the render function to get the unmount method
  const { unmount } = render(<App />);

  // test logic

  unmount();
});

///////////////////////////
// ** Getting out of jail
///////////////////////////

test('getting out jail when trying to find a component inside  react-testlibrary', async () => {
  // render the component desctructuring the container to use on logRoles
  const { container } = render(<App />);

  // finding elements within a test id
  // html:
  // <tbody data-testid="users">{renderedUsers}</tbody>
  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  // Another option is using a normal querySelector on the container like
  const rows = container.querySelectorAll('tbody tr');
});

///////////////////////////
// ** RTL Notebook tool on the terminal
// npx rtl-book serve roles.notes.js
///////////////////////////

///////////////////////////
// ** Finding elements inside other elements
///////////////////////////
test('finding elements inside other elements', () => {
  render(<App />);
  const form = screen.getByRole('form');
  // by using the within function we can find elements inside the form
  const buttons = within(form).getAllByRole('button');

  expect(buttons).toHaveLength(2);
});

///////////////////////////
// ** Creating custom matchers
///////////////////////////

const toContainRole = function (container, role, quantity = 1) {
  const elements = within(container).queryAllByRole(role);

  if (elements.length === quantity) {
    return {
      pass: true,
      message: () => `${container} included ${quantity} ${role}(s)`,
    };
  }

  return {
    pass: false,
    message: () =>
      `Expected to find ${quantity} ${role} element(s) within ${container}. Found ${elements.length} ${role} element(s) instead`,
  };
};

// This is how we extend the expect object to use include our custom matchers
expect.extend({
  toContainRole,
});

test('custom matchers', () => {
  render(<App />);

  const form = screen.getByRole('form');

  expect(form).toContainRole('button', 2);
});

///////////////////////////
// ** Using Jest Mock to not render a particular file or replace it with something else
///////////////////////////

// In this case, if we are rendering a component that contains a file that we don't want to render that component, we can use jest.mock to replace the file with a mocked component

jest.mock('../path/to/File', () => {
  // Here we can return a mocked component
  return <div>MockedComponent</div>;
});
