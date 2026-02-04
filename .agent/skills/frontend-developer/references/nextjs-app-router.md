# Next.js App Router Patterns

## 1. Fetching in Server Components
No `useEffect`. No `loading` state to manage manually.
```tsx
// app/page.tsx
async function getData() {
  const res = await fetch('https://api.example.com/data', { cache: 'no-store' });
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <main>{data.title}</main>;
}
```

## 2. Server Actions (Mutations)
No API route needed.
```tsx
// app/actions.ts
'use server';

export async function createTodo(formData: FormData) {
  const title = formData.get('title');
  await db.todo.create({ data: { title } });
  revalidatePath('/todos'); // Refresh the UI
}

// app/form.tsx
'use client';
import { createTodo } from './actions';

export function AddTodo() {
  return <form action={createTodo}><input name="title"/></form>;
}
```

## 3. Parallel Routes & Intercepting Routes
*   **Parallel**: `@modal/page.tsx` allow rendering a modal alongside the page in the same URL context.
*   **Intercepting**: `(..)photo/[id]` allows opening a photo in a modal when clicked from feed, but full page on refresh.
