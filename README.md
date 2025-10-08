# Untether Group Website

Marketing site for Untether Group built with Vue 3, TypeScript, and Vite.

## Development

```bash
npm install
npm run dev
```

## Foodtopia HTML5 build

IMPORTANT: Compare the index.html generated from Godot with `public/foodtopia/index.html` because there are some changes to the template to make it run on the website.

The `/foodtopia` route embeds a Godot HTML5 export inside an iframe. To update the build:

1. Export your project from Godot using the **HTML5** preset.
2. Copy the generated `index.html`, `.wasm`, `.pck`, and any supporting files into `public/foodtopia/`, replacing the placeholder file that ships with the repo.
3. Start the dev server with `npm run dev` and open <http://localhost:5173/foodtopia> to play the latest build.

When you run `npm run build`, the Godot export is copied as-is into the production bundle.
