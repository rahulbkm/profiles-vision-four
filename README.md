# Dynamics 365 Channels Admin Interface

This project recreates the Dynamics 365 Channels admin interface based on the provided screenshot and Figma design.

## Quick Start (Standalone HTML)

The easiest way to view the interface is to open the standalone HTML file:

1. Open `index-standalone.html` in your web browser
2. No build process or dependencies required!

## React + TypeScript Version

For a more maintainable, component-based implementation:

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open your browser to the URL shown in the terminal (typically `http://localhost:5173`).

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Features

- **Accurate Design Recreation**: Matches the Dynamics 365 design system with Microsoft Fluent UI styling
- **Responsive Layout**: Fixed header and sidebar with scrollable main content
- **Interactive Elements**:
  - Collapsible sections for organizing channels
  - Hover states on all interactive elements
  - Active state for current navigation item
  - Functional search input
- **Complete Navigation**: All sidebar sections and items from the screenshot
- **Channel Management**: Lists all channel types with descriptions and manage buttons

## File Structure

### Standalone Version
- `index-standalone.html` - Complete single-file implementation

### React Version
- `src/App.tsx` - Main application component
- `src/components/Header.tsx` - Top navigation bar
- `src/components/Sidebar.tsx` - Left navigation sidebar
- `src/components/MainContent.tsx` - Main content area with collapsible sections
- `src/components/*.css` - Component-specific styles
- `src/index.css` - Global styles

## Design Details

- **Colors**:
  - Header: `#1b3a57` (Dark blue)
  - Sidebar: `#f3f2f1` (Light gray)
  - Background: `#faf9f8` (Off-white)
  - Primary accent: `#0078d4` (Microsoft blue)
  - Text: `#323130` (Dark gray)

- **Typography**: Segoe UI font family (Microsoft standard)

- **Layout**:
  - Header height: 48px
  - Sidebar width: 160px
  - Main content: Responsive with proper padding

## Browser Support

Works in all modern browsers:
- Chrome/Edge
- Firefox
- Safari
