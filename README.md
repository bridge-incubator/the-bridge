# The Bridge

---

## Development

https://github.com/bridge-incubator/the-bridge

### Local Setup

1. Install dependencies:

```bash
$ yarn install
$ bundle install
```

2. Start the development server:

```bash
$ yarn dev
$ Open http://localhost:4000/
```

The development server will:

- Watch for changes in your SCSS files
- Automatically rebuild CSS when changes are detected
- Run Jekyll in development mode with live reload

### CSS Processing

This project uses Tailwind CSS with a custom build process. Here's how it works:

1. **Source Files**:

   - `assets/css/main.scss`: Contains custom styles and font declarations
   - `assets/css/tailwind.scss`: Contains Tailwind directives
   - `tailwind.config.js`: Contains Tailwind configuration and customizations

2. **Build Process**:

   - `yarn watch:css`: Watches for changes and rebuilds CSS during development
   - `yarn build:css`: Creates a minified CSS file for production

3. **Custom Fonts**:

   - Font files are stored in `assets/fonts/`
   - Font declarations are in `assets/css/main.scss`
   - Font configuration is in `tailwind.config.js`

4. **Available Scripts**:
   ```bash
   yarn dev          # Start development server with live reload
   yarn watch:css    # Watch and rebuild CSS during development
   yarn build:css    # Build minified CSS for production
   yarn build        # Build the entire site for production
   ```

### Deployment

Push your changes to the `main` branch and they will be deployed to GitHub pages automatically. It usually takes 1-2 minutes for the changes to be reflected.

### Project Structure

```
├── assets/
│   ├── css/
│   │   ├── main.scss      # Custom styles and font declarations
│   │   ├── main.css       # Compiled CSS (generated)
│   │   └── tailwind.scss  # Tailwind directives
│   └── fonts/            # Custom font files
├── _layouts/            # Jekyll layouts
├── _includes/          # Jekyll includes
├── _pages/            # Jekyll pages
├── tailwind.config.js # Tailwind configuration
└── postcss.config.js  # PostCSS configuration
```

### CSS Customization

1. **Adding Custom Styles**:

   - Add your styles to `assets/css/main.scss`
   - Use Tailwind's `@apply` directive to compose utility classes
   - Custom styles will be processed and included in the final CSS

2. **Modifying Tailwind**:

   - Edit `tailwind.config.js` to customize:
     - Colors
     - Font families
     - Spacing
     - Breakpoints
     - And more

3. **Adding New Fonts**:
   - Place font files in `assets/fonts/`
   - Add `@font-face` declarations in `main.scss`
   - Update `tailwind.config.js` to use the new font
