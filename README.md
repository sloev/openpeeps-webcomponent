# \<openpeeps-webcomponent>

<a href="https://www.buymeacoffee.com/sloev" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-pink.png" alt="Buy Me A Coffee" height="51px" width="217px"></a>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i openpeeps-webcomponent
```

## Usage
```html
<script type="module">
  import 'openpeeps-webcomponent/openpeeps-webcomponent.js';
</script>

<openpeeps-webcomponent></openpeeps-webcomponent>
```

## Linting with ESLint, Prettier, and Types
To scan the project for linting errors, run
```bash
npm run lint
```

You can lint with ESLint and Prettier individually as well
```bash
npm run lint:eslint
```
```bash
npm run lint:prettier
```

To automatically fix many linting errors, run
```bash
npm run format
```

You can format using ESLint and Prettier individually as well
```bash
npm run format:eslint
```
```bash
npm run format:prettier
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `es-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`


https://github.com/CeamKrier/react-peeps/blob/master/src/peeps/face/Angry.tsx
