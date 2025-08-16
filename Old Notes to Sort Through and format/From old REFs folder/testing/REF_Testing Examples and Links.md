# React Testing Library Resources

## Concepts
- Unit Tets: small, isolated parts of your code like getUserOrThrow or UserCreationForm
- Integration Tests: whatever requires external actors like auth, APIs that you don’t own.
- End to end Tests: very expensive and flaky, make sure your system is working well and other systems that it relies on are too. Like your whole sign up flow

## Resources

[ARIA Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

[React Testing Library Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet/)

[User interaction docummentation](https://testing-library.com/docs/user-event/intro)

[useEffect – How to test React Effect Hooks](https://cultivate.software/useeffect/#not-wrapped-in-act)

## Queries

[About Queries](https://testing-library.com/docs/queries/about)

| Type of Query         | 0 Matches     | 1 Match        | >1 Matches   | Retry (Async/Await) |
| --------------------- | ------------- | -------------- | ------------ | ------------------- |
| **Single Element**    |               |                |              |                     |
| `getBy...`            | Throw error   | Return element | Throw error  | No                  |
| `queryBy...`          | Return `null` | Return element | Throw error  | No                  |
| `findBy...`           | Throw error   | Return element | Throw error  | Yes                 |
| **Multiple Elements** |               |                |              |                     |
| `getAllBy...`         | Throw error   | Return array   | Return array | No                  |
| `queryAllBy...`       | Return `[]`   | Return array   | Return array | No                  |
| `findAllBy...`        | Throw error   | Return array   | Return array | Yes                 |

## User events

``` js
import userEvent from '@testing-library/user-event'

// inlining
test('trigger some awesome feature when clicking the button', async () => {
  const user = userEvent.setup()
  // Import `render` and `screen` from the framework library of your choice.
  // See https://testing-library.com/docs/dom-testing-library/install#wrappers
  render(<MyComponent />)

  await user.click(screen.getByRole('button', {name: /click me!/i}))

  // ...assertions...
})
```

## Debugging

`screen.logTestingPlaygroundURL()`

`screen.debug()`

`logRoles(container)`

## How do I deal with a not wrapped in act(..) warning?
Not by using act(..)!
You have three options:
### `await findBy*(..)`
Use await findBy*(..) if you expect something DOM-related after some asynchronous code was triggered.
``` js
expect(await screen.findByRole('button', { name: /login/i }))
  .toBeInTheDocument()
```


### `await waitFor(..)`
Use await waitFor(..) if you’re expecting something that is not DOM-related after some asynchronous code was triggered.
``` js
await waitFor(
  () => expect(fetch).toHaveBeenCalledWith('/students')
)
```


### `await waitForElementToBeRemoved(..)`
Use await waitForElementToBeRemoved(..) if you expect a DOM element to disappear after some asynchronous code is triggered.

Asynchronous processes usually are started during the initial render phase of a component or after simulating user interaction.
``` js
await waitForElementToBeRemoved(
  screen.getByRole('button', { name: /logout/ })
)
```


## Jest Dom matchers

- [`toBeDisabled`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tobedisabled)
- [`toBeEnabled`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tobeenabled)
- [`toBeEmptyDOMElement`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tobeemptydomelement)
- [`toBeInTheDocument`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tobeinthedocument)
- [`toBeInvalid`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tobeinvalid)
- [`toBeRequired`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#toberequired)
- [`toBeValid`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tobevalid)
- [`toBeVisible`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tobevisible)
- [`toContainElement`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tocontainelement)
- [`toContainHTML`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tocontainhtml)
- [`toHaveAccessibleDescription`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohaveaccessibledescription)
- [`toHaveAccessibleErrorMessage`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohaveaccessibleerrormessage)
- [`toHaveAccessibleName`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohaveaccessiblename)
- [`toHaveAttribute`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohaveattribute)
- [`toHaveClass`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohaveclass)
- [`toHaveFocus`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohavefocus)
- [`toHaveFormValues`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohaveformvalues)
- [`toHaveStyle`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohavestyle)
- [`toHaveTextContent`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohavetextcontent)
- [`toHaveValue`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohavevalue)
- [`toHaveDisplayValue`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohavedisplayvalue)
- [`toBeChecked`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tobechecked)
- [`toBePartiallyChecked`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tobepartiallychecked)
- [`toHaveRole`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohaverole)
- [`toHaveErrorMessage`](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohaveerrormessage)
