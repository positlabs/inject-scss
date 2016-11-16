# inject-scss
Node util for generating s*ss variables from js objects

[![npm version](https://badge.fury.io/js/inject-scss.svg)](https://badge.fury.io/js/inject-scss)

`npm install --save inject-scss`

```javascript
	
	var scssInjector = require('inject-scss')
	var path = require('path')
	var fs = require('fs')

	var outputPath = path.join(__dirname, 'public/styles/_inject.scss')
	var vars = {CDN: '/path/to/cdn/'}

	// defaults to scss
	scssInjector(outputPath, vars)

	// ...but support sass, too
	var outputPath = path.join(__dirname, 'public/styles/_inject.sass')
	scssInjector(outputPath, vars, 'sass')

	// Then, in your scss file...
	@import './_inject.scss'
```

