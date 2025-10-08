# Foodtopia Game Setup

This directory is where you should place your Godot web export files.

## Exporting from Godot

1. In your Godot project, go to **Project → Export**
2. Add a new export template for **HTML5**
3. Configure the export settings:

   - **Export Path**: Set to wherever you want to build (e.g., `build/`)
   - **Name**: `foodtopia`
   - **Head Include**: Leave empty unless you have custom code
   - **Custom HTML Shell**: Leave default unless customized
   - **Variant**: Release (for production) or Debug (for development)

4. Export the project - this will generate several files:
   - `foodtopia.html` (main HTML file)
   - `foodtopia.js` (JavaScript engine)
   - `foodtopia.wasm` (WebAssembly binary)
   - `foodtopia.pck` (Game data package)
   - `foodtopia.audio.worklet.js` (Audio processing, if needed)

## Installation

Copy the exported files to this directory (`public/godot/`):

```
public/godot/
├── foodtopia.js
├── foodtopia.wasm
├── foodtopia.pck
└── foodtopia.audio.worklet.js (if generated)
```

**Note**: Do NOT copy the `foodtopia.html` file as we're using our custom React component to load the game.

## File Structure

- `foodtopia.js` - The Godot JavaScript engine loader
- `foodtopia.wasm` - The compiled WebAssembly binary containing the game engine
- `foodtopia.pck` - The game data and assets package
- `foodtopia.audio.worklet.js` - Audio worklet for advanced audio processing (optional)

## Testing

After placing the files, you can access the game at `/foodtopia` on your website.

## Troubleshooting

### Common Issues:

1. **404 errors for game files**: Make sure all files are in the `public/godot/` directory
2. **CORS errors**: This shouldn't happen with files served from the same domain
3. **Loading issues**: Check the browser console for specific error messages
4. **Performance issues**: Consider enabling gzip compression for `.wasm` and `.pck` files

### Browser Compatibility:

- Chrome/Chromium 57+
- Firefox 52+
- Safari 11+
- Edge 16+

### Game Not Loading:

1. Check browser console for errors
2. Verify all required files are present
3. Make sure file names match exactly (case-sensitive)
4. Test the Godot export locally first using `godot --serve` or a local web server

## Customization

You can modify the game loading behavior in `src/pages/Foodtopia.tsx`:

- Adjust canvas size by changing the `width` and `height` styles
- Modify loading screen appearance
- Add custom error handling
- Change game controls documentation

## Performance Optimization

For better loading performance:

1. Enable gzip compression on your web server for `.wasm`, `.pck`, and `.js` files
2. Consider using a CDN for game assets
3. Implement lazy loading if the game is not immediately visible
4. Use Godot's streaming options for large games
