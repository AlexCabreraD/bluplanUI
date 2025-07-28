# Responsive Design Test Checklist

## Mobile-First Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (sm to lg)
- **Desktop**: > 1024px (lg+)

## Test Cases

### Mobile (< 640px)

- [ ] Accordion titles are readable (text-3xl)
- [ ] Touch targets are minimum 48px height
- [ ] Icon size is appropriate (24px)
- [ ] Padding provides comfortable touch spacing
- [ ] Text wraps properly without horizontal scroll
- [ ] FAQ sections have visual separation with borders

### Tablet (640px - 1024px)

- [ ] Accordion titles scale appropriately (text-4xl)
- [ ] Icons transition to desktop size (32px)
- [ ] Content spacing increases for better readability
- [ ] Touch interactions still work well

### Desktop (> 1024px)

- [ ] Full typography scale (text-5xl titles)
- [ ] Hover states work properly
- [ ] Focus states are visible with keyboard navigation
- [ ] Content max-width prevents overly long lines

## Accessibility Tests

- [ ] All interactive elements have minimum 44px touch targets
- [ ] Focus indicators are visible and clear
- [ ] Content scales properly with browser zoom (up to 200%)
- [ ] Text maintains readable contrast at all sizes
- [ ] Screen reader navigation works properly

## Performance Tests

- [ ] Smooth animations on all device sizes
- [ ] Touch interactions feel responsive
- [ ] No layout shift during accordion transitions
- [ ] Page loads quickly on mobile networks

## Cross-Browser Tests

- [ ] Safari (iOS)
- [ ] Chrome (Android)
- [ ] Chrome (Desktop)
- [ ] Firefox (Desktop)
- [ ] Safari (macOS)

## Device-Specific Features

- [ ] Touch manipulation works properly
- [ ] Scroll behavior is smooth
- [ ] No unwanted zoom on input focus (iOS)
- [ ] Active states provide clear feedback
