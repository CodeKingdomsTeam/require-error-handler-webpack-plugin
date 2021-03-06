/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
	Modified by Richard Scarrott @richardscarrott
*/
var AsyncDependenciesBlock = require("webpack/lib/AsyncDependenciesBlock");
var AMDRequireErrorHandlerDependency = require("./AMDRequireErrorHandlerDependency");

function AMDRequireErrorHandlerDependenciesBlock(expr, arrayRange, successCallbackRange, errorCallbackRange, module, loc) {
	AsyncDependenciesBlock.call(this, null, module, loc);
	this.expr = expr;
	this.outerRange = expr.range;
	this.arrayRange = arrayRange;
	this.successCallbackRange = successCallbackRange;
	this.errorCallbackRange = errorCallbackRange;
	this.range = arrayRange && successCallbackRange ? [arrayRange[0], successCallbackRange[1]] :
		arrayRange ? arrayRange :
		successCallbackRange ? successCallbackRange :
		expr.range;
	var dep = new AMDRequireErrorHandlerDependency(this);
	dep.loc = loc;
	this.addDependency(dep);
}
module.exports = AMDRequireErrorHandlerDependenciesBlock;

AMDRequireErrorHandlerDependenciesBlock.prototype = Object.create(AsyncDependenciesBlock.prototype);
AMDRequireErrorHandlerDependenciesBlock.prototype.constructor = AMDRequireErrorHandlerDependenciesBlock;

