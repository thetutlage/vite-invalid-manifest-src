# Vite invalid manifest src

I have a very basic Vite setup that generates a manifest file (for backend integration) and the `key name + src` of a CSS entry is incorrect.

## Current manifest output

```json
{
  "resources/js/app.css": {
    "file": "assets/app-1ae955d9.css",
    "src": "resources/js/app.css"
  },
  "resources/js/app.js": {
    "css": [
      "assets/app-1ae955d9.css"
    ],
    "file": "assets/app-89312351.js",
    "isEntry": true,
    "src": "resources/js/app.js"
  }
}
```

I expect the `resources/js/app.css` should be `resources/app/app.css`, because that is where the file is on disk.

```diff
{
-  "resources/js/app.css": {
+  "resources/css/app.css": {
    "file": "assets/app-1ae955d9.css",
-    "src": "resources/js/app.css"
+    "src": "resources/css/app.css"
  },
  "resources/js/app.js": {
    "css": [
      "assets/app-1ae955d9.css"
    ],
    "file": "assets/app-89312351.js",
    "isEntry": true,
    "src": "resources/js/app.js"
  }
}
```

The CSS file is imported by `resources/js/app.js` file.

## Setup

- Clone repo
- Install deps
- Run `npm run build`