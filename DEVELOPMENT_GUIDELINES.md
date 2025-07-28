# Development Guidelines

## Code Quality Standards

### React Components

- **Performance**: Use `useCallback` and `useMemo` for expensive operations
- **Accessibility**: Always include proper ARIA attributes and semantic HTML
- **Separation of Concerns**: Extract complex logic into custom hooks or utility functions
- **Component Size**: Keep components under 150 lines; extract subcomponents if needed

### TypeScript

- **Interfaces**: Always define proper TypeScript interfaces for props and data structures
- **Exports**: Export interfaces that might be reused across components
- **Type Safety**: Avoid `any` type; use proper type annotations

### Data Management

- **Separation**: Keep data separate from components in dedicated `data/` files
- **Constants**: Use named constants instead of magic numbers/strings
- **Organization**: Group related data together and export with descriptive names

### File Organization

```
src/
├── components/     # Reusable UI components
├── data/          # Static data and constants
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── types/         # TypeScript type definitions
└── app/           # Next.js app router pages
```

### Component Structure

```tsx
// 1. Imports (external first, then internal)
import { useState, useCallback } from "react";
import { ExternalLib } from "external-lib";

import { InternalComponent } from "../components/InternalComponent";
import { utilityFunction } from "../utils/utilities";

// 2. Types and interfaces
interface ComponentProps {
  title: string;
  items: Item[];
}

// 3. Constants
const DEFAULT_LIMIT = 10;

// 4. Sub-components (if any)
const SubComponent = ({ item }: { item: Item }) => <div>{item.name}</div>;

// 5. Main component
export default function Component({ title, items }: ComponentProps) {
  // State
  const [isExpanded, setIsExpanded] = useState(false);

  // Memoized callbacks
  const handleToggle = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  // Early returns
  if (!items?.length) return null;

  // Render
  return (
    <div>
      <h2>{title}</h2>
      {items.map(item => (
        <SubComponent key={item.id} item={item} />
      ))}
    </div>
  );
}
```

### CSS/Styling

- **Tailwind**: Use Tailwind classes consistently
- **Responsive**: Always consider mobile-first responsive design
- **Accessibility**: Ensure proper color contrast and focus states
- **Semantic Classes**: Prefer semantic class names over utility-only approaches for complex components

### Performance Guidelines

- **Keys**: Never use array index as React key for dynamic lists
- **Memoization**: Use `useCallback` for event handlers, `useMemo` for expensive calculations
- **Code Splitting**: Consider lazy loading for large components
- **Bundle Size**: Keep bundle size in mind when adding dependencies

### Accessibility Requirements

- **ARIA**: Include proper ARIA attributes (`aria-expanded`, `aria-controls`, etc.)
- **Semantic HTML**: Use proper semantic elements (`button`, `nav`, `main`, etc.)
- **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
- **Screen Readers**: Test with screen reader considerations

## Pre-commit Checklist

Before committing code, ensure:

- [ ] ESLint passes with no errors
- [ ] TypeScript compiles without errors
- [ ] Components follow accessibility guidelines
- [ ] Data is properly separated from components
- [ ] Performance optimizations are in place
- [ ] Code is properly documented with comments where needed

## Code Review Guidelines

When reviewing code, check for:

- [ ] Adherence to component structure guidelines
- [ ] Proper TypeScript usage
- [ ] Accessibility compliance
- [ ] Performance considerations
- [ ] Code reusability and maintainability
- [ ] Consistent naming conventions

## Testing Standards

- Write tests for complex business logic
- Test accessibility features
- Test component behavior, not implementation details
- Aim for meaningful test coverage, not just high percentages

## Documentation

- Document complex algorithms or business logic
- Keep README files up to date
- Document any architectural decisions
- Include examples in component documentation
