# React Compound Component (Accordion)

```tsx
import { createContext, useContext, useState, type ReactNode } from "react";

interface AccordionContextValue {
  openItems: Set<string>;
  toggle: (id: string) => void;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("Must be used within Accordion");
  return context;
}

export function Accordion({ children, allowMultiple = false }: { children: ReactNode, allowMultiple?: boolean }) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggle }}>
      <div className="divide-y border rounded-md">{children}</div>
    </AccordionContext.Provider>
  );
}

// Subcomponent: Item
Accordion.Item = function AccordionItem({ id, children }: { id: string; children: ReactNode }) {
  return <div className="p-0">{children}</div>;
};

// Subcomponent: Trigger
Accordion.Trigger = function AccordionTrigger({ id, children }: { id: string; children: ReactNode }) {
  const { toggle } = useAccordion();
  return (
    <button onClick={() => toggle(id)} className="w-full text-left py-3 px-4 font-medium hover:bg-gray-50">
      {children}
    </button>
  );
};

// Subcomponent: Content
Accordion.Content = function AccordionContent({ id, children }: { id: string; children: ReactNode }) {
  const { openItems } = useAccordion();
  if (!openItems.has(id)) return null;
  return <div className="p-4 pt-0 text-gray-600">{children}</div>;
};

/* Usage:
<Accordion>
  <Accordion.Item id="item-1">
    <Accordion.Trigger id="item-1">Title 1</Accordion.Trigger>
    <Accordion.Content id="item-1">Content 1</Accordion.Content>
  </Accordion.Item>
</Accordion>
*/
```
