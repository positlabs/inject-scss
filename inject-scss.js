var fs = require('fs')

module.exports = function(outputPath, vars, type){

	var semicolon = type === 'sass' ? '' : ';'

	var cssString = Object.keys(vars).map(key => {
		return `$${key}: "${vars[key]}"${semicolon}` 
	}).join('\n')

	fs.writeFileSync(outputPath, cssString, 'utf8')
}