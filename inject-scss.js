var fs = require('fs')

/*

	Convert js vars into scss vars!

	usage: 

	var path = path.join(__dirname, 'public/styles/_inject.scss')
	var vars = {CDN: '/path/to/cdn/'}

	// defaults to scss
	scssInjector(path, vars)

	// ...but support sass, too
	var path = path.join(__dirname, 'public/styles/_inject.sass')
	scssInjector(path, vars, 'sass')

	// Then, in your scss file...
	@import './_inject.scss'

*/

module.exports = function(outputPath, vars, type){

	var semicolon = type === 'sass' ? '' : ';'

	var cssString = Object.keys(vars).map(key => {
		return `$${key}: "${vars[key]}"${semicolon}` 
	}).join('\n')

	fs.writeFileSync(outputPath, cssString, 'utf8')
}