---
tags:
  - html
  - forms
  - accessibility
  - password-managers
---
# Making [[forms]] accessible to Password Managers
- Add the `autocomplete="on"` to the form element itself.
- Add the `autocomplete` attributes to each relevant form element, example: `autocomplete="email"`
- Use `autocomplete="new-password"` and `id="new-password"` for the password input in a sign-up form, and for the new password in a reset-password form.
- Use `autocomplete="current-password"`and `id="current-password"`for a sign-in password input.
```html
<form id="get-freebie" name="email-signup" method="POST" autocomplete="on">
	<label>
		<span>Email</span>
		<Input
		id="email"
		name="email"
		type="email"
		placeholder="Email address"
		aria-label="Email address"
		autocomplete="email"
		/>
	</label>

	<label>
		<span>Name</span>
		<Input
		id="name"
		name="name"
		type="text"
		placeholder="Enter your name"
		autocomplete="name"
		/>
	</label>

	<Button id="submit" type="submit">Submit</Button>
</form>
```

When building multi-step login flows, you can add a hidden username field on the password page.

The [Chrome Wiki](https://www.chromium.org/developers/design-documents/form-styles-that-chromium-understands/) recommends that when you collect the email first, and redirect the user after to a password page, to include the username field again (prefilled), and hidden with CSS.

```html
<input
    type="email"
    autocomplete="username"
    name="username"
    required
    value="spam@evertpot.com"
    style="display:none"
/>

<input
    type="password"
    autocomplete="password"
    name="password"
    required
/>
```