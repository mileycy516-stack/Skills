# Caching Patterns

## 1. Cache-Aside (Lazy Loading)
Application is responsible for reading/writing cache.
*   **Read**: Check cache. If miss, read DB, write cache, return.
*   **Write**: Write DB, invalidate/update cache.
*   *Pros*: Resilient to cache failure. *Cons*: Stale data potential.

## 2. Read-Through / Write-Through
App treats cache as the main data store. Cache talks to DB.
*   *Pros*: Simplifies app logic. *Cons*: Complex infrastructure (Redis Gears etc).

## 3. Stale-While-Revalidate (SWR)
Return stale data immediately, fetch fresh data in background.
*   **HTTP**: `Cache-Control: max-age=60, stale-while-revalidate=300`.
*   **React**: Vercel `useSWR` / React Query. Excellent User Experience.

## 4. Edge Caching (CDN)
Cache static assets and API responses physically close to user.
*   **Note**: Use `Vary: Accept-Encoding` headers.
