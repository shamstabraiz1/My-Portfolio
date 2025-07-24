# Design Document

## Overview

This design implements a dark navy blue background across all pages of the portfolio website except the contact page. The solution leverages Tailwind CSS classes and maintains the existing single-page application structure while ensuring the contact section retains its current light gray background (`bg-gray-50`).

The design focuses on minimal code changes while achieving maximum visual impact and maintaining accessibility standards.

## Architecture

### Current Structure Analysis
- **Application Type**: Single Page Application (SPA) using React
- **Styling Framework**: Tailwind CSS with custom color palette
- **Layout Structure**: All sections are rendered within a single `App.tsx` component
- **Current Background**: White background (`bg-white`) on the main container
- **Contact Section**: Currently has `bg-gray-50` which should be preserved

### Design Approach
The implementation will use a layered approach:
1. **Global Background**: Apply dark navy blue to the main application container
2. **Section-Specific Override**: Maintain the contact section's existing background
3. **Color Consistency**: Use Tailwind's color system with a custom navy blue shade

## Components and Interfaces

### Color Palette Extension
```javascript
// Tailwind config extension
colors: {
  navy: {
    900: '#1e293b', // Dark navy blue for background
    800: '#334155', // Slightly lighter for potential variations
  }
}
```

### Component Modifications

#### App.tsx
- **Current**: `<div className="min-h-screen bg-white">`
- **Updated**: `<div className="min-h-screen bg-navy-900">`

#### Contact.tsx
- **Current**: `<section id="contact" className="py-20 bg-gray-50">`
- **Remains**: No changes needed - existing `bg-gray-50` will override the parent background

#### Text Color Adjustments
Components that currently use dark text on white background will need color adjustments:
- Header navigation links
- Section headings and body text
- Hero section content
- About, Skills, and Projects sections

### CSS Class Strategy

#### Primary Background Classes
- `bg-navy-900`: Main dark navy background
- `text-white`: Primary text color for dark background
- `text-gray-100`: Secondary text color for better hierarchy

#### Text Contrast Classes
- Headings: `text-white` or `text-gray-100`
- Body text: `text-gray-300` for good readability
- Links: `text-blue-400` for visibility on dark background

## Data Models

### Theme Configuration
```typescript
interface ThemeConfig {
  background: {
    primary: string;    // 'bg-navy-900'
    contact: string;    // 'bg-gray-50' (preserved)
  };
  text: {
    primary: string;    // 'text-white'
    secondary: string;  // 'text-gray-300'
    accent: string;     // 'text-blue-400'
  };
}
```

## Error Handling

### Accessibility Considerations
- **Contrast Ratios**: Ensure all text meets WCAG AA standards (4.5:1 minimum)
- **Color Blindness**: Navy blue background works well with various color vision deficiencies
- **Focus States**: Maintain visible focus indicators on interactive elements

### Fallback Strategies
- **CSS Custom Properties**: Define navy color as CSS variable for consistency
- **Browser Compatibility**: Navy blue (`#1e293b`) has universal browser support
- **Progressive Enhancement**: Base styles work without JavaScript

### Potential Issues
1. **Text Readability**: Some existing text colors may not have sufficient contrast
2. **Image Visibility**: Profile images or project screenshots may need border/shadow adjustments
3. **Form Elements**: Input fields in non-contact sections may need styling updates

## Testing Strategy

### Visual Testing
1. **Cross-Browser Testing**: Chrome, Firefox, Safari, Edge
2. **Device Testing**: Desktop, tablet, mobile viewports
3. **Accessibility Testing**: Screen reader compatibility, keyboard navigation

### Automated Testing
```typescript
// Example test cases
describe('Dark Navy Background', () => {
  test('applies navy background to main container', () => {
    // Test main app container has bg-navy-900 class
  });
  
  test('preserves contact section background', () => {
    // Test contact section maintains bg-gray-50
  });
  
  test('ensures text contrast meets accessibility standards', () => {
    // Test color contrast ratios
  });
});
```

### Manual Testing Checklist
- [ ] All sections except contact have dark navy background
- [ ] Contact section maintains light gray background
- [ ] All text is readable with proper contrast
- [ ] Navigation and interactive elements are clearly visible
- [ ] Responsive design works across all screen sizes
- [ ] No visual glitches during page scrolling
- [ ] Images and icons are properly visible

## Implementation Considerations

### Performance Impact
- **Minimal**: Only CSS class changes, no additional assets
- **Bundle Size**: No increase in JavaScript bundle size
- **Rendering**: No impact on component rendering performance

### Maintenance
- **Centralized Colors**: Use Tailwind config for color definitions
- **Component Isolation**: Contact section styling remains independent
- **Future Updates**: Easy to modify navy shade by updating Tailwind config

### Browser Support
- **Modern Browsers**: Full support for CSS custom properties and Tailwind classes
- **Legacy Support**: Navy blue color has universal support
- **Graceful Degradation**: Falls back to standard colors if CSS fails to load