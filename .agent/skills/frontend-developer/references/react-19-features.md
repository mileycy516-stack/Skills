# React 19 Features

## 1. `useActionState` (formerly useFormState)
Handle form submission state gracefully.
```tsx
const [state, formAction, isPending] = useActionState(serverAction, initialState);

return (
  <form action={formAction}>
    <input name="email" />
    <button disabled={isPending}>Submit</button>
    {state?.error && <p>{state.error}</p>}
  </form>
);
```

## 2. `useOptimistic`
Show the result immediately, revert if it fails.
```tsx
const [optimisticMessages, addOptimisticMessage] = useOptimistic(messages, (state, newMessage) => [
  ...state,
  { text: newMessage, sending: true }
]);

const action = async (formData) => {
  addOptimisticMessage(formData.get("message"));
  await sendMessage(formData);
};
```

## 3. `use` API
Read context or promises conditionally.
```tsx
function Message({ messagePromise }) {
  const message = use(messagePromise); // Unwraps promise (like await)
  const theme = use(ThemeContext); // Reads context
  return <div style={{ color: theme.color }}>{message}</div>;
}
```
