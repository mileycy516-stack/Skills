# State Management Patterns

## 1. URL State (The "Truth")
Always try this first. If it's in the URL, it's shareable and persistent.
*   **Tools**: `useSearchParams` (Next.js), `nuqs` (Type-safe search params).
*   **Use for**: Pagination `?page=2`, Filters `?category=shoes`, Search `?q=nike`.

## 2. Server State (The "Cache")
Data that lives on the server. Don't put this in Redux/Zustand manually.
*   **Tools**: React Query (TanStack Query), SWR.
*   **Pattern**: `const { data, isLoading } = useQuery(...)`.

## 3. Client Global State (The "Session")
Data that is truly global and client-only.
*   **Tools**: Zustand (Recommended), Jotai (Atomic).
*   **Use for**: Sidebar open/close, User preferences (if not in DB), Multi-step form wizard data.

## 4. Form State
*   **Tools**: React Hook Form, Formik.
*   **Note**: Use uncontrolled inputs (`ref`) for performance instead of re-rendering on every keystroke (`useState`).
