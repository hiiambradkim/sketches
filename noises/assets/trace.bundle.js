/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/***/ (function(module, exports) {

eval("module.exports = function(module) {\r\n\tif(!module.webpackPolyfill) {\r\n\t\tmodule.deprecate = function() {};\r\n\t\tmodule.paths = [];\r\n\t\t// module.parent = undefined by default\r\n\t\tif(!module.children) module.children = [];\r\n\t\tObject.defineProperty(module, \"loaded\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.l;\r\n\t\t\t}\r\n\t\t});\r\n\t\tObject.defineProperty(module, \"id\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.i;\r\n\t\t\t}\r\n\t\t});\r\n\t\tmodule.webpackPolyfill = 1;\r\n\t}\r\n\treturn module;\r\n};\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanM/YzNjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 2:
/* no static exports found */
/* all exports used */
/*!***************************************************************!*\
  !*** ./~/perspective-transform/dist/perspective-transform.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;\n// If the user is not including numeric.js already, add shim so this library works. Removes dependency on numeric.js\n\n(function(root) {\n\tif(root.numeric) {\n\t\treturn;\n\t}\n\n\telse{\n\t\tvar numeric = {};\n\n\t\tnumeric.dim = function dim(x) {\n    \t\tvar y,z;\n    \t\tif(typeof x === \"object\") {\n        \t\ty = x[0];\n        \t\tif(typeof y === \"object\") {\n            \t\tz = y[0];\n            \t\tif(typeof z === \"object\") {\n                \t\treturn numeric._dim(x);\n            \t\t}\n            \t\treturn [x.length,y.length];\n        \t\t}\n        \t\treturn [x.length];\n    \t\t}\n    \t\treturn [];\n\t\t};\n\n\t\tnumeric._foreach2 = (function _foreach2(x,s,k,f) {\n    \t\tif(k === s.length-1) { return f(x); }\n    \t\tvar i,n=s[k], ret = Array(n);\n    \t\tfor(i=n-1;i>=0;i--) { ret[i] = _foreach2(x[i],s,k+1,f); }\n    \t\treturn ret;\n\t\t});\n\n\t\tnumeric.cloneV = function (x) {\n\t\t\tvar _n = x.length;\n\t\t\tvar i, ret = Array(_n);\n\n\t\t\tfor(i=_n-1;i!==-1;--i) {\n\t\t\t\tret[i] = (x[i]);\n\t\t\t}\n\t\t\treturn ret;\n\t\t};\n\n\t\tnumeric.clone = function (x) {\n\t\t\tif(typeof x !== \"object\") return (x);\n\t\t\tvar V = numeric.cloneV;\n\t\t\tvar s = numeric.dim(x);\n\t\t\treturn numeric._foreach2(x,s,0,V);\n\t\t};\n\n\t\tnumeric.diag = function diag(d) {\n    \t\tvar i,i1,j,n = d.length, A = Array(n), Ai;\n    \t\tfor(i=n-1;i>=0;i--) {\n        \t\tAi = Array(n);\n        \t\ti1 = i+2;\n        \t\tfor(j=n-1;j>=i1;j-=2) {\n            \t\tAi[j] = 0;\n            \t\tAi[j-1] = 0;\n        \t\t}\n        \t\tif(j>i) { Ai[j] = 0; }\n        \t\tAi[i] = d[i];\n        \t\tfor(j=i-1;j>=1;j-=2) {\n            \t\tAi[j] = 0;\n            \t\tAi[j-1] = 0;\n        \t\t}\n        \t\tif(j===0) { Ai[0] = 0; }\n        \t\tA[i] = Ai;\n    \t\t}\n    \t\treturn A;\n\t\t};\n\n\t\tnumeric.rep = function rep(s,v,k) {\n    \t\tif(typeof k === \"undefined\") { k=0; }\n    \t\tvar n = s[k], ret = Array(n), i;\n    \t\tif(k === s.length-1) {\n        \t\tfor(i=n-2;i>=0;i-=2) { ret[i+1] = v; ret[i] = v; }\n        \t\tif(i===-1) { ret[0] = v; }\n        \t\treturn ret;\n    \t\t}\n    \t\tfor(i=n-1;i>=0;i--) { ret[i] = numeric.rep(s,v,k+1); }\n    \t\treturn ret;\n\t\t};\n\n\t\tnumeric.identity = function(n) { return numeric.diag(numeric.rep([n],1)); };\n\n\t\tnumeric.inv = function inv(a) {\n    \t\tvar s = numeric.dim(a), abs = Math.abs, m = s[0], n = s[1];\n    \t\tvar A = numeric.clone(a), Ai, Aj;\n    \t\tvar I = numeric.identity(m), Ii, Ij;\n    \t\tvar i,j,k,x;\n    \t\tfor(j=0;j<n;++j) {\n        \t\tvar i0 = -1;\n        \t\tvar v0 = -1;\n        \t\tfor(i=j;i!==m;++i) { k = abs(A[i][j]); if(k>v0) { i0 = i; v0 = k; } }\n        \t\tAj = A[i0]; A[i0] = A[j]; A[j] = Aj;\n        \t\tIj = I[i0]; I[i0] = I[j]; I[j] = Ij;\n        \t\tx = Aj[j];\n        \t\tfor(k=j;k!==n;++k)    Aj[k] /= x; \n        \t\tfor(k=n-1;k!==-1;--k) Ij[k] /= x;\n        \t\tfor(i=m-1;i!==-1;--i) {\n            \t\tif(i!==j) {\n                \t\tAi = A[i];\n                \t\tIi = I[i];\n                \t\tx = Ai[j];\n                \t\tfor(k=j+1;k!==n;++k)  Ai[k] -= Aj[k]*x;\n                \t\tfor(k=n-1;k>0;--k) { Ii[k] -= Ij[k]*x; --k; Ii[k] -= Ij[k]*x; }\n                \t\tif(k===0) Ii[0] -= Ij[0]*x;\n            \t\t}\n        \t\t}\n    \t\t}\n    \t\treturn I;\n\t\t};\n\n\t\tnumeric.dotMMsmall = function dotMMsmall(x,y) {\n    \t\tvar i,j,k,p,q,r,ret,foo,bar,woo,i0;\n    \t\tp = x.length; q = y.length; r = y[0].length;\n    \t\tret = Array(p);\n    \t\tfor(i=p-1;i>=0;i--) {\n        \t\tfoo = Array(r);\n        \t\tbar = x[i];\n        \t\tfor(k=r-1;k>=0;k--) {\n            \t\twoo = bar[q-1]*y[q-1][k];\n            \t\tfor(j=q-2;j>=1;j-=2) {\n                \t\ti0 = j-1;\n                \t\twoo += bar[j]*y[j][k] + bar[i0]*y[i0][k];\n            \t\t}\n            \t\tif(j===0) { woo += bar[0]*y[0][k]; }\n            \t\tfoo[k] = woo;\n        \t\t}\n        \t\tret[i] = foo;\n    \t\t}\n    \t\treturn ret;\n\t\t};\n\n\t\tnumeric.dotMV = function dotMV(x,y) {\n    \t\tvar p = x.length, i;\n    \t\tvar ret = Array(p), dotVV = numeric.dotVV;\n    \t\tfor(i=p-1;i>=0;i--) { ret[i] = dotVV(x[i],y); }\n    \t\treturn ret;\n\t\t};\n\n\t\tnumeric.dotVV = function dotVV(x,y) {\n    \t\tvar i,n=x.length,i1,ret = x[n-1]*y[n-1];\n    \t\tfor(i=n-2;i>=1;i-=2) {\n        \t\ti1 = i-1;\n        \t\tret += x[i]*y[i] + x[i1]*y[i1];\n    \t\t}\n    \t\tif(i===0) { ret += x[0]*y[0]; }\n    \t\treturn ret;\n\t\t};\n\n\t\tnumeric.transpose = function transpose(x) {\n    \t\tvar i,j,m = x.length,n = x[0].length, ret=Array(n),A0,A1,Bj;\n    \t\tfor(j=0;j<n;j++) ret[j] = Array(m);\n    \t\tfor(i=m-1;i>=1;i-=2) {\n        \t\tA1 = x[i];\n        \t\tA0 = x[i-1];\n        \t\tfor(j=n-1;j>=1;--j) {\n            \t\tBj = ret[j]; Bj[i] = A1[j]; Bj[i-1] = A0[j];\n            \t\t--j;\n            \t\tBj = ret[j]; Bj[i] = A1[j]; Bj[i-1] = A0[j];\n        \t\t}\n        \t\tif(j===0) {\n            \t\tBj = ret[0]; Bj[i] = A1[0]; Bj[i-1] = A0[0];\n        \t\t}\n    \t\t}\n    \t\tif(i===0) {\n        \t\tA0 = x[0];\n        \t\tfor(j=n-1;j>=1;--j) {\n            \t\tret[j][0] = A0[j];\n            \t\t--j;\n            \t\tret[j][0] = A0[j];\n        \t\t}\n        \t\tif(j===0) { ret[0][0] = A0[0]; }\n    \t\t}\n    \t\treturn ret;\n\t\t};\n\n        this.numeric = numeric;\n\t\troot.numeric = numeric;\n\t}\n\n}(this));\n\n\n(function(global, factory) {\n\tif(typeof exports === 'object' && typeof module !== undefined){\n\t\tmodule.exports = factory();\n\t}\n\telse if(true){\n\t\t!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t}\n\telse{\n\t\tglobal.PerspT = factory();\n\t}\n}(this, function() {\n\t'use strict';\n\n    function round(num){\n        return Math.round(num*10000000000)/10000000000;\n    }\n\n\tfunction getNormalizationCoefficients(srcPts, dstPts, isInverse){\n\t\tif(isInverse){\n\t\t\tvar tmp = dstPts;\n\t\t\tdstPts = srcPts;\n\t\t\tsrcPts = tmp;\n\t\t}\n\t\tvar r1 = [srcPts[0], srcPts[1], 1, 0, 0, 0, -1*dstPts[0]*srcPts[0], -1*dstPts[0]*srcPts[1]];\n\t\tvar r2 = [0, 0, 0, srcPts[0], srcPts[1], 1, -1*dstPts[1]*srcPts[0], -1*dstPts[1]*srcPts[1]];\n\t\tvar r3 = [srcPts[2], srcPts[3], 1, 0, 0, 0, -1*dstPts[2]*srcPts[2], -1*dstPts[2]*srcPts[3]];\n\t\tvar r4 = [0, 0, 0, srcPts[2], srcPts[3], 1, -1*dstPts[3]*srcPts[2], -1*dstPts[3]*srcPts[3]];\n\t\tvar r5 = [srcPts[4], srcPts[5], 1, 0, 0, 0, -1*dstPts[4]*srcPts[4], -1*dstPts[4]*srcPts[5]];\n\t\tvar r6 = [0, 0, 0, srcPts[4], srcPts[5], 1, -1*dstPts[5]*srcPts[4], -1*dstPts[5]*srcPts[5]];\n\t\tvar r7 = [srcPts[6], srcPts[7], 1, 0, 0, 0, -1*dstPts[6]*srcPts[6], -1*dstPts[6]*srcPts[7]];\n\t\tvar r8 = [0, 0, 0, srcPts[6], srcPts[7], 1, -1*dstPts[7]*srcPts[6], -1*dstPts[7]*srcPts[7]];\n\n\t\tvar matA = [r1, r2, r3, r4, r5, r6, r7, r8];\n\t\tvar matB = dstPts;\n        var matC;\n\t\n\t\ttry{\n\t    \tmatC = numeric.inv(numeric.dotMMsmall(numeric.transpose(matA), matA));\n\t\t}catch(e){\n\t    \tconsole.log(e);\n\t    \treturn [1,0,0,0,1,0,0,0];\n\t\t}\n\n\t\tvar matD = numeric.dotMMsmall(matC, numeric.transpose(matA));\n\t\tvar matX = numeric.dotMV(matD, matB);\n        for(var i = 0; i < matX.length; i++) {\n            matX[i] = round(matX[i]);\n        }\n        matX[8] = 1;\n\n\t\treturn matX;\n\t}\n\n\tfunction PerspT(srcPts, dstPts){\n\t\tif( (typeof window !== 'undefined' && window === this) || this === undefined) {\n\t\t\treturn new PerspT(srcPts, dstPts);\n\t\t}\n\n\t\tthis.srcPts = srcPts;\n\t\tthis.dstPts = dstPts;\n\t\tthis.coeffs = getNormalizationCoefficients(this.srcPts, this.dstPts, false);\n\t\tthis.coeffsInv = getNormalizationCoefficients(this.srcPts, this.dstPts, true);\n\n\t\treturn this;\n\t}\n\n\tPerspT.prototype = {\n\t\ttransform: function(x,y) {\n\t\t\tvar coordinates = [];\n\t\t\tcoordinates[0] = (this.coeffs[0]*x + this.coeffs[1]*y + this.coeffs[2]) / (this.coeffs[6]*x + this.coeffs[7]*y + 1);\n\t\t\tcoordinates[1] = (this.coeffs[3]*x + this.coeffs[4]*y + this.coeffs[5]) / (this.coeffs[6]*x + this.coeffs[7]*y + 1);\n\t\t\treturn coordinates;\n\t\t},\n\n\t\ttransformInverse: function(x,y) {\n\t\t\tvar coordinates = [];\n\t\t\tcoordinates[0] = (this.coeffsInv[0]*x + this.coeffsInv[1]*y + this.coeffsInv[2]) / (this.coeffsInv[6]*x + this.coeffsInv[7]*y + 1);\n\t\t\tcoordinates[1] = (this.coeffsInv[3]*x + this.coeffsInv[4]*y + this.coeffsInv[5]) / (this.coeffsInv[6]*x + this.coeffsInv[7]*y + 1);\n\t\t\treturn coordinates;\n\t\t}\n\t};\n\n\treturn PerspT;\n\n}));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL34vcGVyc3BlY3RpdmUtdHJhbnNmb3JtL2Rpc3QvcGVyc3BlY3RpdmUtdHJhbnNmb3JtLmpzPzhlMzgiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBJZiB0aGUgdXNlciBpcyBub3QgaW5jbHVkaW5nIG51bWVyaWMuanMgYWxyZWFkeSwgYWRkIHNoaW0gc28gdGhpcyBsaWJyYXJ5IHdvcmtzLiBSZW1vdmVzIGRlcGVuZGVuY3kgb24gbnVtZXJpYy5qc1xuXG4oZnVuY3Rpb24ocm9vdCkge1xuXHRpZihyb290Lm51bWVyaWMpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRlbHNle1xuXHRcdHZhciBudW1lcmljID0ge307XG5cblx0XHRudW1lcmljLmRpbSA9IGZ1bmN0aW9uIGRpbSh4KSB7XG4gICAgXHRcdHZhciB5LHo7XG4gICAgXHRcdGlmKHR5cGVvZiB4ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIFx0XHR5ID0geFswXTtcbiAgICAgICAgXHRcdGlmKHR5cGVvZiB5ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBcdFx0eiA9IHlbMF07XG4gICAgICAgICAgICBcdFx0aWYodHlwZW9mIHogPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICBcdFx0cmV0dXJuIG51bWVyaWMuX2RpbSh4KTtcbiAgICAgICAgICAgIFx0XHR9XG4gICAgICAgICAgICBcdFx0cmV0dXJuIFt4Lmxlbmd0aCx5Lmxlbmd0aF07XG4gICAgICAgIFx0XHR9XG4gICAgICAgIFx0XHRyZXR1cm4gW3gubGVuZ3RoXTtcbiAgICBcdFx0fVxuICAgIFx0XHRyZXR1cm4gW107XG5cdFx0fTtcblxuXHRcdG51bWVyaWMuX2ZvcmVhY2gyID0gKGZ1bmN0aW9uIF9mb3JlYWNoMih4LHMsayxmKSB7XG4gICAgXHRcdGlmKGsgPT09IHMubGVuZ3RoLTEpIHsgcmV0dXJuIGYoeCk7IH1cbiAgICBcdFx0dmFyIGksbj1zW2tdLCByZXQgPSBBcnJheShuKTtcbiAgICBcdFx0Zm9yKGk9bi0xO2k+PTA7aS0tKSB7IHJldFtpXSA9IF9mb3JlYWNoMih4W2ldLHMsaysxLGYpOyB9XG4gICAgXHRcdHJldHVybiByZXQ7XG5cdFx0fSk7XG5cblx0XHRudW1lcmljLmNsb25lViA9IGZ1bmN0aW9uICh4KSB7XG5cdFx0XHR2YXIgX24gPSB4Lmxlbmd0aDtcblx0XHRcdHZhciBpLCByZXQgPSBBcnJheShfbik7XG5cblx0XHRcdGZvcihpPV9uLTE7aSE9PS0xOy0taSkge1xuXHRcdFx0XHRyZXRbaV0gPSAoeFtpXSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH07XG5cblx0XHRudW1lcmljLmNsb25lID0gZnVuY3Rpb24gKHgpIHtcblx0XHRcdGlmKHR5cGVvZiB4ICE9PSBcIm9iamVjdFwiKSByZXR1cm4gKHgpO1xuXHRcdFx0dmFyIFYgPSBudW1lcmljLmNsb25lVjtcblx0XHRcdHZhciBzID0gbnVtZXJpYy5kaW0oeCk7XG5cdFx0XHRyZXR1cm4gbnVtZXJpYy5fZm9yZWFjaDIoeCxzLDAsVik7XG5cdFx0fTtcblxuXHRcdG51bWVyaWMuZGlhZyA9IGZ1bmN0aW9uIGRpYWcoZCkge1xuICAgIFx0XHR2YXIgaSxpMSxqLG4gPSBkLmxlbmd0aCwgQSA9IEFycmF5KG4pLCBBaTtcbiAgICBcdFx0Zm9yKGk9bi0xO2k+PTA7aS0tKSB7XG4gICAgICAgIFx0XHRBaSA9IEFycmF5KG4pO1xuICAgICAgICBcdFx0aTEgPSBpKzI7XG4gICAgICAgIFx0XHRmb3Ioaj1uLTE7aj49aTE7ai09Mikge1xuICAgICAgICAgICAgXHRcdEFpW2pdID0gMDtcbiAgICAgICAgICAgIFx0XHRBaVtqLTFdID0gMDtcbiAgICAgICAgXHRcdH1cbiAgICAgICAgXHRcdGlmKGo+aSkgeyBBaVtqXSA9IDA7IH1cbiAgICAgICAgXHRcdEFpW2ldID0gZFtpXTtcbiAgICAgICAgXHRcdGZvcihqPWktMTtqPj0xO2otPTIpIHtcbiAgICAgICAgICAgIFx0XHRBaVtqXSA9IDA7XG4gICAgICAgICAgICBcdFx0QWlbai0xXSA9IDA7XG4gICAgICAgIFx0XHR9XG4gICAgICAgIFx0XHRpZihqPT09MCkgeyBBaVswXSA9IDA7IH1cbiAgICAgICAgXHRcdEFbaV0gPSBBaTtcbiAgICBcdFx0fVxuICAgIFx0XHRyZXR1cm4gQTtcblx0XHR9O1xuXG5cdFx0bnVtZXJpYy5yZXAgPSBmdW5jdGlvbiByZXAocyx2LGspIHtcbiAgICBcdFx0aWYodHlwZW9mIGsgPT09IFwidW5kZWZpbmVkXCIpIHsgaz0wOyB9XG4gICAgXHRcdHZhciBuID0gc1trXSwgcmV0ID0gQXJyYXkobiksIGk7XG4gICAgXHRcdGlmKGsgPT09IHMubGVuZ3RoLTEpIHtcbiAgICAgICAgXHRcdGZvcihpPW4tMjtpPj0wO2ktPTIpIHsgcmV0W2krMV0gPSB2OyByZXRbaV0gPSB2OyB9XG4gICAgICAgIFx0XHRpZihpPT09LTEpIHsgcmV0WzBdID0gdjsgfVxuICAgICAgICBcdFx0cmV0dXJuIHJldDtcbiAgICBcdFx0fVxuICAgIFx0XHRmb3IoaT1uLTE7aT49MDtpLS0pIHsgcmV0W2ldID0gbnVtZXJpYy5yZXAocyx2LGsrMSk7IH1cbiAgICBcdFx0cmV0dXJuIHJldDtcblx0XHR9O1xuXG5cdFx0bnVtZXJpYy5pZGVudGl0eSA9IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIG51bWVyaWMuZGlhZyhudW1lcmljLnJlcChbbl0sMSkpOyB9O1xuXG5cdFx0bnVtZXJpYy5pbnYgPSBmdW5jdGlvbiBpbnYoYSkge1xuICAgIFx0XHR2YXIgcyA9IG51bWVyaWMuZGltKGEpLCBhYnMgPSBNYXRoLmFicywgbSA9IHNbMF0sIG4gPSBzWzFdO1xuICAgIFx0XHR2YXIgQSA9IG51bWVyaWMuY2xvbmUoYSksIEFpLCBBajtcbiAgICBcdFx0dmFyIEkgPSBudW1lcmljLmlkZW50aXR5KG0pLCBJaSwgSWo7XG4gICAgXHRcdHZhciBpLGosayx4O1xuICAgIFx0XHRmb3Ioaj0wO2o8bjsrK2opIHtcbiAgICAgICAgXHRcdHZhciBpMCA9IC0xO1xuICAgICAgICBcdFx0dmFyIHYwID0gLTE7XG4gICAgICAgIFx0XHRmb3IoaT1qO2khPT1tOysraSkgeyBrID0gYWJzKEFbaV1bal0pOyBpZihrPnYwKSB7IGkwID0gaTsgdjAgPSBrOyB9IH1cbiAgICAgICAgXHRcdEFqID0gQVtpMF07IEFbaTBdID0gQVtqXTsgQVtqXSA9IEFqO1xuICAgICAgICBcdFx0SWogPSBJW2kwXTsgSVtpMF0gPSBJW2pdOyBJW2pdID0gSWo7XG4gICAgICAgIFx0XHR4ID0gQWpbal07XG4gICAgICAgIFx0XHRmb3Ioaz1qO2shPT1uOysraykgICAgQWpba10gLz0geDsgXG4gICAgICAgIFx0XHRmb3Ioaz1uLTE7ayE9PS0xOy0taykgSWpba10gLz0geDtcbiAgICAgICAgXHRcdGZvcihpPW0tMTtpIT09LTE7LS1pKSB7XG4gICAgICAgICAgICBcdFx0aWYoaSE9PWopIHtcbiAgICAgICAgICAgICAgICBcdFx0QWkgPSBBW2ldO1xuICAgICAgICAgICAgICAgIFx0XHRJaSA9IElbaV07XG4gICAgICAgICAgICAgICAgXHRcdHggPSBBaVtqXTtcbiAgICAgICAgICAgICAgICBcdFx0Zm9yKGs9aisxO2shPT1uOysraykgIEFpW2tdIC09IEFqW2tdKng7XG4gICAgICAgICAgICAgICAgXHRcdGZvcihrPW4tMTtrPjA7LS1rKSB7IElpW2tdIC09IElqW2tdKng7IC0tazsgSWlba10gLT0gSWpba10qeDsgfVxuICAgICAgICAgICAgICAgIFx0XHRpZihrPT09MCkgSWlbMF0gLT0gSWpbMF0qeDtcbiAgICAgICAgICAgIFx0XHR9XG4gICAgICAgIFx0XHR9XG4gICAgXHRcdH1cbiAgICBcdFx0cmV0dXJuIEk7XG5cdFx0fTtcblxuXHRcdG51bWVyaWMuZG90TU1zbWFsbCA9IGZ1bmN0aW9uIGRvdE1Nc21hbGwoeCx5KSB7XG4gICAgXHRcdHZhciBpLGosayxwLHEscixyZXQsZm9vLGJhcix3b28saTA7XG4gICAgXHRcdHAgPSB4Lmxlbmd0aDsgcSA9IHkubGVuZ3RoOyByID0geVswXS5sZW5ndGg7XG4gICAgXHRcdHJldCA9IEFycmF5KHApO1xuICAgIFx0XHRmb3IoaT1wLTE7aT49MDtpLS0pIHtcbiAgICAgICAgXHRcdGZvbyA9IEFycmF5KHIpO1xuICAgICAgICBcdFx0YmFyID0geFtpXTtcbiAgICAgICAgXHRcdGZvcihrPXItMTtrPj0wO2stLSkge1xuICAgICAgICAgICAgXHRcdHdvbyA9IGJhcltxLTFdKnlbcS0xXVtrXTtcbiAgICAgICAgICAgIFx0XHRmb3Ioaj1xLTI7aj49MTtqLT0yKSB7XG4gICAgICAgICAgICAgICAgXHRcdGkwID0gai0xO1xuICAgICAgICAgICAgICAgIFx0XHR3b28gKz0gYmFyW2pdKnlbal1ba10gKyBiYXJbaTBdKnlbaTBdW2tdO1xuICAgICAgICAgICAgXHRcdH1cbiAgICAgICAgICAgIFx0XHRpZihqPT09MCkgeyB3b28gKz0gYmFyWzBdKnlbMF1ba107IH1cbiAgICAgICAgICAgIFx0XHRmb29ba10gPSB3b287XG4gICAgICAgIFx0XHR9XG4gICAgICAgIFx0XHRyZXRbaV0gPSBmb287XG4gICAgXHRcdH1cbiAgICBcdFx0cmV0dXJuIHJldDtcblx0XHR9O1xuXG5cdFx0bnVtZXJpYy5kb3RNViA9IGZ1bmN0aW9uIGRvdE1WKHgseSkge1xuICAgIFx0XHR2YXIgcCA9IHgubGVuZ3RoLCBpO1xuICAgIFx0XHR2YXIgcmV0ID0gQXJyYXkocCksIGRvdFZWID0gbnVtZXJpYy5kb3RWVjtcbiAgICBcdFx0Zm9yKGk9cC0xO2k+PTA7aS0tKSB7IHJldFtpXSA9IGRvdFZWKHhbaV0seSk7IH1cbiAgICBcdFx0cmV0dXJuIHJldDtcblx0XHR9O1xuXG5cdFx0bnVtZXJpYy5kb3RWViA9IGZ1bmN0aW9uIGRvdFZWKHgseSkge1xuICAgIFx0XHR2YXIgaSxuPXgubGVuZ3RoLGkxLHJldCA9IHhbbi0xXSp5W24tMV07XG4gICAgXHRcdGZvcihpPW4tMjtpPj0xO2ktPTIpIHtcbiAgICAgICAgXHRcdGkxID0gaS0xO1xuICAgICAgICBcdFx0cmV0ICs9IHhbaV0qeVtpXSArIHhbaTFdKnlbaTFdO1xuICAgIFx0XHR9XG4gICAgXHRcdGlmKGk9PT0wKSB7IHJldCArPSB4WzBdKnlbMF07IH1cbiAgICBcdFx0cmV0dXJuIHJldDtcblx0XHR9O1xuXG5cdFx0bnVtZXJpYy50cmFuc3Bvc2UgPSBmdW5jdGlvbiB0cmFuc3Bvc2UoeCkge1xuICAgIFx0XHR2YXIgaSxqLG0gPSB4Lmxlbmd0aCxuID0geFswXS5sZW5ndGgsIHJldD1BcnJheShuKSxBMCxBMSxCajtcbiAgICBcdFx0Zm9yKGo9MDtqPG47aisrKSByZXRbal0gPSBBcnJheShtKTtcbiAgICBcdFx0Zm9yKGk9bS0xO2k+PTE7aS09Mikge1xuICAgICAgICBcdFx0QTEgPSB4W2ldO1xuICAgICAgICBcdFx0QTAgPSB4W2ktMV07XG4gICAgICAgIFx0XHRmb3Ioaj1uLTE7aj49MTstLWopIHtcbiAgICAgICAgICAgIFx0XHRCaiA9IHJldFtqXTsgQmpbaV0gPSBBMVtqXTsgQmpbaS0xXSA9IEEwW2pdO1xuICAgICAgICAgICAgXHRcdC0tajtcbiAgICAgICAgICAgIFx0XHRCaiA9IHJldFtqXTsgQmpbaV0gPSBBMVtqXTsgQmpbaS0xXSA9IEEwW2pdO1xuICAgICAgICBcdFx0fVxuICAgICAgICBcdFx0aWYoaj09PTApIHtcbiAgICAgICAgICAgIFx0XHRCaiA9IHJldFswXTsgQmpbaV0gPSBBMVswXTsgQmpbaS0xXSA9IEEwWzBdO1xuICAgICAgICBcdFx0fVxuICAgIFx0XHR9XG4gICAgXHRcdGlmKGk9PT0wKSB7XG4gICAgICAgIFx0XHRBMCA9IHhbMF07XG4gICAgICAgIFx0XHRmb3Ioaj1uLTE7aj49MTstLWopIHtcbiAgICAgICAgICAgIFx0XHRyZXRbal1bMF0gPSBBMFtqXTtcbiAgICAgICAgICAgIFx0XHQtLWo7XG4gICAgICAgICAgICBcdFx0cmV0W2pdWzBdID0gQTBbal07XG4gICAgICAgIFx0XHR9XG4gICAgICAgIFx0XHRpZihqPT09MCkgeyByZXRbMF1bMF0gPSBBMFswXTsgfVxuICAgIFx0XHR9XG4gICAgXHRcdHJldHVybiByZXQ7XG5cdFx0fTtcblxuICAgICAgICB0aGlzLm51bWVyaWMgPSBudW1lcmljO1xuXHRcdHJvb3QubnVtZXJpYyA9IG51bWVyaWM7XG5cdH1cblxufSh0aGlzKSk7XG5cblxuKGZ1bmN0aW9uKGdsb2JhbCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gdW5kZWZpbmVkKXtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fVxuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCl7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHR9XG5cdGVsc2V7XG5cdFx0Z2xvYmFsLlBlcnNwVCA9IGZhY3RvcnkoKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG4gICAgZnVuY3Rpb24gcm91bmQobnVtKXtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobnVtKjEwMDAwMDAwMDAwKS8xMDAwMDAwMDAwMDtcbiAgICB9XG5cblx0ZnVuY3Rpb24gZ2V0Tm9ybWFsaXphdGlvbkNvZWZmaWNpZW50cyhzcmNQdHMsIGRzdFB0cywgaXNJbnZlcnNlKXtcblx0XHRpZihpc0ludmVyc2Upe1xuXHRcdFx0dmFyIHRtcCA9IGRzdFB0cztcblx0XHRcdGRzdFB0cyA9IHNyY1B0cztcblx0XHRcdHNyY1B0cyA9IHRtcDtcblx0XHR9XG5cdFx0dmFyIHIxID0gW3NyY1B0c1swXSwgc3JjUHRzWzFdLCAxLCAwLCAwLCAwLCAtMSpkc3RQdHNbMF0qc3JjUHRzWzBdLCAtMSpkc3RQdHNbMF0qc3JjUHRzWzFdXTtcblx0XHR2YXIgcjIgPSBbMCwgMCwgMCwgc3JjUHRzWzBdLCBzcmNQdHNbMV0sIDEsIC0xKmRzdFB0c1sxXSpzcmNQdHNbMF0sIC0xKmRzdFB0c1sxXSpzcmNQdHNbMV1dO1xuXHRcdHZhciByMyA9IFtzcmNQdHNbMl0sIHNyY1B0c1szXSwgMSwgMCwgMCwgMCwgLTEqZHN0UHRzWzJdKnNyY1B0c1syXSwgLTEqZHN0UHRzWzJdKnNyY1B0c1szXV07XG5cdFx0dmFyIHI0ID0gWzAsIDAsIDAsIHNyY1B0c1syXSwgc3JjUHRzWzNdLCAxLCAtMSpkc3RQdHNbM10qc3JjUHRzWzJdLCAtMSpkc3RQdHNbM10qc3JjUHRzWzNdXTtcblx0XHR2YXIgcjUgPSBbc3JjUHRzWzRdLCBzcmNQdHNbNV0sIDEsIDAsIDAsIDAsIC0xKmRzdFB0c1s0XSpzcmNQdHNbNF0sIC0xKmRzdFB0c1s0XSpzcmNQdHNbNV1dO1xuXHRcdHZhciByNiA9IFswLCAwLCAwLCBzcmNQdHNbNF0sIHNyY1B0c1s1XSwgMSwgLTEqZHN0UHRzWzVdKnNyY1B0c1s0XSwgLTEqZHN0UHRzWzVdKnNyY1B0c1s1XV07XG5cdFx0dmFyIHI3ID0gW3NyY1B0c1s2XSwgc3JjUHRzWzddLCAxLCAwLCAwLCAwLCAtMSpkc3RQdHNbNl0qc3JjUHRzWzZdLCAtMSpkc3RQdHNbNl0qc3JjUHRzWzddXTtcblx0XHR2YXIgcjggPSBbMCwgMCwgMCwgc3JjUHRzWzZdLCBzcmNQdHNbN10sIDEsIC0xKmRzdFB0c1s3XSpzcmNQdHNbNl0sIC0xKmRzdFB0c1s3XSpzcmNQdHNbN11dO1xuXG5cdFx0dmFyIG1hdEEgPSBbcjEsIHIyLCByMywgcjQsIHI1LCByNiwgcjcsIHI4XTtcblx0XHR2YXIgbWF0QiA9IGRzdFB0cztcbiAgICAgICAgdmFyIG1hdEM7XG5cdFxuXHRcdHRyeXtcblx0ICAgIFx0bWF0QyA9IG51bWVyaWMuaW52KG51bWVyaWMuZG90TU1zbWFsbChudW1lcmljLnRyYW5zcG9zZShtYXRBKSwgbWF0QSkpO1xuXHRcdH1jYXRjaChlKXtcblx0ICAgIFx0Y29uc29sZS5sb2coZSk7XG5cdCAgICBcdHJldHVybiBbMSwwLDAsMCwxLDAsMCwwXTtcblx0XHR9XG5cblx0XHR2YXIgbWF0RCA9IG51bWVyaWMuZG90TU1zbWFsbChtYXRDLCBudW1lcmljLnRyYW5zcG9zZShtYXRBKSk7XG5cdFx0dmFyIG1hdFggPSBudW1lcmljLmRvdE1WKG1hdEQsIG1hdEIpO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbWF0WC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbWF0WFtpXSA9IHJvdW5kKG1hdFhbaV0pO1xuICAgICAgICB9XG4gICAgICAgIG1hdFhbOF0gPSAxO1xuXG5cdFx0cmV0dXJuIG1hdFg7XG5cdH1cblxuXHRmdW5jdGlvbiBQZXJzcFQoc3JjUHRzLCBkc3RQdHMpe1xuXHRcdGlmKCAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93ID09PSB0aGlzKSB8fCB0aGlzID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBuZXcgUGVyc3BUKHNyY1B0cywgZHN0UHRzKTtcblx0XHR9XG5cblx0XHR0aGlzLnNyY1B0cyA9IHNyY1B0cztcblx0XHR0aGlzLmRzdFB0cyA9IGRzdFB0cztcblx0XHR0aGlzLmNvZWZmcyA9IGdldE5vcm1hbGl6YXRpb25Db2VmZmljaWVudHModGhpcy5zcmNQdHMsIHRoaXMuZHN0UHRzLCBmYWxzZSk7XG5cdFx0dGhpcy5jb2VmZnNJbnYgPSBnZXROb3JtYWxpemF0aW9uQ29lZmZpY2llbnRzKHRoaXMuc3JjUHRzLCB0aGlzLmRzdFB0cywgdHJ1ZSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdFBlcnNwVC5wcm90b3R5cGUgPSB7XG5cdFx0dHJhbnNmb3JtOiBmdW5jdGlvbih4LHkpIHtcblx0XHRcdHZhciBjb29yZGluYXRlcyA9IFtdO1xuXHRcdFx0Y29vcmRpbmF0ZXNbMF0gPSAodGhpcy5jb2VmZnNbMF0qeCArIHRoaXMuY29lZmZzWzFdKnkgKyB0aGlzLmNvZWZmc1syXSkgLyAodGhpcy5jb2VmZnNbNl0qeCArIHRoaXMuY29lZmZzWzddKnkgKyAxKTtcblx0XHRcdGNvb3JkaW5hdGVzWzFdID0gKHRoaXMuY29lZmZzWzNdKnggKyB0aGlzLmNvZWZmc1s0XSp5ICsgdGhpcy5jb2VmZnNbNV0pIC8gKHRoaXMuY29lZmZzWzZdKnggKyB0aGlzLmNvZWZmc1s3XSp5ICsgMSk7XG5cdFx0XHRyZXR1cm4gY29vcmRpbmF0ZXM7XG5cdFx0fSxcblxuXHRcdHRyYW5zZm9ybUludmVyc2U6IGZ1bmN0aW9uKHgseSkge1xuXHRcdFx0dmFyIGNvb3JkaW5hdGVzID0gW107XG5cdFx0XHRjb29yZGluYXRlc1swXSA9ICh0aGlzLmNvZWZmc0ludlswXSp4ICsgdGhpcy5jb2VmZnNJbnZbMV0qeSArIHRoaXMuY29lZmZzSW52WzJdKSAvICh0aGlzLmNvZWZmc0ludls2XSp4ICsgdGhpcy5jb2VmZnNJbnZbN10qeSArIDEpO1xuXHRcdFx0Y29vcmRpbmF0ZXNbMV0gPSAodGhpcy5jb2VmZnNJbnZbM10qeCArIHRoaXMuY29lZmZzSW52WzRdKnkgKyB0aGlzLmNvZWZmc0ludls1XSkgLyAodGhpcy5jb2VmZnNJbnZbNl0qeCArIHRoaXMuY29lZmZzSW52WzddKnkgKyAxKTtcblx0XHRcdHJldHVybiBjb29yZGluYXRlcztcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIFBlcnNwVDtcblxufSkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wZXJzcGVjdGl2ZS10cmFuc2Zvcm0vZGlzdC9wZXJzcGVjdGl2ZS10cmFuc2Zvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 9:
/* no static exports found */
/* all exports used */
/*!*************************************!*\
  !*** ./trace-perspective/sketch.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {const perspective = __webpack_require__(/*! perspective-transform */ 2);\n\nlet sketch = function(p) {\n  let THE_SEED;\n  let border = 200;\n  let number_of_particles = 3000;\n  let number_of_particle_sets = 8;\n  let particle_sets = [];\n  let tick = 0;\n\n  let palette;\n\n  let nzoom = 10;\n  let pTransform;\n\n  p.setup = function() {\n    var canvas = p.createCanvas(1200, 1200);\n  canvas.parent('#container');\n  THE_SEED = p.floor(p.random(9999999));\n    p.randomSeed(THE_SEED);\n\n    p.noFill();\n    p.background('#fff');\n    p.stroke(20, 10);\n    p.strokeWeight(0.7);\n    //p.pixelDensity(5);\n    p.smooth();\n\n    //var srcCorners = [-1, -1, 1, -1, 1, 1, -1, 1];\n    //var dstCorners = [-0.8, -0.5, 0.8, -0.5, 1, 0.5, -1, 0.5];\n\n    var srcCorners = [0, 0, p.width, 0, p.width, p.height, 0, p.height];\n    var dstCorners = [200, 300, p.width - 200, 300, p.width + 200, p.height - 300, -200, p.height - 300];\n    pTransform = perspective(srcCorners, dstCorners);\n\n    for (var j = 0; j < number_of_particle_sets; j++) {\n      let ps = [];\n      for (var i = 0; i < number_of_particles; i++) {\n        ps.push(\n          new Particle(p.randomGaussian(p.width / 2, 140), p.randomGaussian(p.height / 2, 140), p.random(p.TWO_PI))\n        );\n      }\n      particle_sets.push(ps);\n    }\n  };\n\n  p.draw = function() {\n    particle_sets.forEach(function(particles, index) {\n      particles.forEach(function(particle) {\n        particle.update(index);\n        particle.display(index);\n      });\n    });\n  };\n\n  p.keyPressed = function() {\n    if (p.keyCode === 80) p.saveCanvas('sketch_' + THE_SEED, 'jpeg');\n  };\n\n  class Particle {\n    constructor(x, y, phi) {\n      this.pos = p.createVector(x, y);\n      this.angle = phi;\n      this.val = 0;\n    }\n\n    update(index) {\n      this.pos.x += p.cos(this.angle);\n      this.pos.y += p.sin(this.angle);\n\n      let nx = 1.8 * p.map(this.pos.x, 0, p.width, -1, 1);\n      let ny = 1.8 * p.map(this.pos.y, 0, p.height, -1, 1);\n\n      let np = pTransform.transformInverse(nx, ny);\n\n      let n = p.createVector(nx, ny);\n\n      this.altitude = p.noise(n.x + 423.2, n.y - 231.1) + 0.05 * p.noise(n.x * 15 + 113.3, n.y * 15 + 221.1);\n      let nval = (this.altitude + 0.045 * (index - number_of_particle_sets / 2)) % 1;\n\n      this.angle += 3 * p.map(nval, 0, 1, -1, 1);\n      this.val = nval;\n    }\n\n    display(index) {\n      if (this.val > 0.479 && this.val < 0.521) {\n        //const pnt = pTransform.transform(this.pos.x, this.pos.y);\n\n        let np = pTransform.transform(this.pos.x, this.pos.y + 150 - this.altitude * 350);\n        p.point(np[0], np[1]);\n      }\n    }\n  }\n};\nnew p5(sketch);\n;\nvar hot = module.hot;\nif (hot) {\n  hot.accept(err => console.log('error', err));\n\n  var keep = (bindings, evalstr) =>\n    hot.dispose(function (data) {\n      data.bindings = bindings;\n      data.evalstr = evalstr;\n    });\n\n  if (!hot.data) {\n    var bindings = {}, exports = module.exports;\n    [].forEach(function (name) {\n      var f = eval(name);\n      var proxied = new Proxy(f, {\n        apply: function (f, self, args) {\n          return (bindings[name] || f).apply(self, args);\n        }\n      });\n      eval(name + \" = proxied;\");\n      if (exports[name]) exports[name] = proxied;\n    });\n    keep(bindings, str => eval(str));\n  }\n  else {\n    var data = hot.data, bindings = data.bindings;\n    [].forEach(function (name) {\n      bindings[name] = data.evalstr(\n        '(' +\n        eval(name).toString()\n                  .replace(/^function \\w+\\(/,\n                           'function (') +\n        ')');\n    });\n    keep(bindings, data.evalstr);\n  }\n}\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../~/webpack/buildin/module.js */ 0)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3RyYWNlLXBlcnNwZWN0aXZlL3NrZXRjaC5qcz80ODhlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBlcnNwZWN0aXZlID0gcmVxdWlyZSgncGVyc3BlY3RpdmUtdHJhbnNmb3JtJyk7XG5cbmxldCBza2V0Y2ggPSBmdW5jdGlvbihwKSB7XG4gIGxldCBUSEVfU0VFRDtcbiAgbGV0IGJvcmRlciA9IDIwMDtcbiAgbGV0IG51bWJlcl9vZl9wYXJ0aWNsZXMgPSAzMDAwO1xuICBsZXQgbnVtYmVyX29mX3BhcnRpY2xlX3NldHMgPSA4O1xuICBsZXQgcGFydGljbGVfc2V0cyA9IFtdO1xuICBsZXQgdGljayA9IDA7XG5cbiAgbGV0IHBhbGV0dGU7XG5cbiAgbGV0IG56b29tID0gMTA7XG4gIGxldCBwVHJhbnNmb3JtO1xuXG4gIHAuc2V0dXAgPSBmdW5jdGlvbigpIHtcbiAgICBwLmNyZWF0ZUNhbnZhcygxMjAwLCAxMjAwKTtcbiAgICBUSEVfU0VFRCA9IHAuZmxvb3IocC5yYW5kb20oOTk5OTk5OSkpO1xuICAgIHAucmFuZG9tU2VlZChUSEVfU0VFRCk7XG5cbiAgICBwLm5vRmlsbCgpO1xuICAgIHAuYmFja2dyb3VuZCgnI2U3ZTdkYicpO1xuICAgIHAuc3Ryb2tlKDIwLCAxMCk7XG4gICAgcC5zdHJva2VXZWlnaHQoMC43KTtcbiAgICAvL3AucGl4ZWxEZW5zaXR5KDUpO1xuICAgIHAuc21vb3RoKCk7XG5cbiAgICAvL3ZhciBzcmNDb3JuZXJzID0gWy0xLCAtMSwgMSwgLTEsIDEsIDEsIC0xLCAxXTtcbiAgICAvL3ZhciBkc3RDb3JuZXJzID0gWy0wLjgsIC0wLjUsIDAuOCwgLTAuNSwgMSwgMC41LCAtMSwgMC41XTtcblxuICAgIHZhciBzcmNDb3JuZXJzID0gWzAsIDAsIHAud2lkdGgsIDAsIHAud2lkdGgsIHAuaGVpZ2h0LCAwLCBwLmhlaWdodF07XG4gICAgdmFyIGRzdENvcm5lcnMgPSBbMjAwLCAzMDAsIHAud2lkdGggLSAyMDAsIDMwMCwgcC53aWR0aCArIDIwMCwgcC5oZWlnaHQgLSAzMDAsIC0yMDAsIHAuaGVpZ2h0IC0gMzAwXTtcbiAgICBwVHJhbnNmb3JtID0gcGVyc3BlY3RpdmUoc3JjQ29ybmVycywgZHN0Q29ybmVycyk7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IG51bWJlcl9vZl9wYXJ0aWNsZV9zZXRzOyBqKyspIHtcbiAgICAgIGxldCBwcyA9IFtdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJfb2ZfcGFydGljbGVzOyBpKyspIHtcbiAgICAgICAgcHMucHVzaChcbiAgICAgICAgICBuZXcgUGFydGljbGUocC5yYW5kb21HYXVzc2lhbihwLndpZHRoIC8gMiwgMTQwKSwgcC5yYW5kb21HYXVzc2lhbihwLmhlaWdodCAvIDIsIDE0MCksIHAucmFuZG9tKHAuVFdPX1BJKSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHBhcnRpY2xlX3NldHMucHVzaChwcyk7XG4gICAgfVxuICB9O1xuXG4gIHAuZHJhdyA9IGZ1bmN0aW9uKCkge1xuICAgIHBhcnRpY2xlX3NldHMuZm9yRWFjaChmdW5jdGlvbihwYXJ0aWNsZXMsIGluZGV4KSB7XG4gICAgICBwYXJ0aWNsZXMuZm9yRWFjaChmdW5jdGlvbihwYXJ0aWNsZSkge1xuICAgICAgICBwYXJ0aWNsZS51cGRhdGUoaW5kZXgpO1xuICAgICAgICBwYXJ0aWNsZS5kaXNwbGF5KGluZGV4KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHAua2V5UHJlc3NlZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChwLmtleUNvZGUgPT09IDgwKSBwLnNhdmVDYW52YXMoJ3NrZXRjaF8nICsgVEhFX1NFRUQsICdqcGVnJyk7XG4gIH07XG5cbiAgY2xhc3MgUGFydGljbGUge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIHBoaSkge1xuICAgICAgdGhpcy5wb3MgPSBwLmNyZWF0ZVZlY3Rvcih4LCB5KTtcbiAgICAgIHRoaXMuYW5nbGUgPSBwaGk7XG4gICAgICB0aGlzLnZhbCA9IDA7XG4gICAgfVxuXG4gICAgdXBkYXRlKGluZGV4KSB7XG4gICAgICB0aGlzLnBvcy54ICs9IHAuY29zKHRoaXMuYW5nbGUpO1xuICAgICAgdGhpcy5wb3MueSArPSBwLnNpbih0aGlzLmFuZ2xlKTtcblxuICAgICAgbGV0IG54ID0gMS44ICogcC5tYXAodGhpcy5wb3MueCwgMCwgcC53aWR0aCwgLTEsIDEpO1xuICAgICAgbGV0IG55ID0gMS44ICogcC5tYXAodGhpcy5wb3MueSwgMCwgcC5oZWlnaHQsIC0xLCAxKTtcblxuICAgICAgbGV0IG5wID0gcFRyYW5zZm9ybS50cmFuc2Zvcm1JbnZlcnNlKG54LCBueSk7XG5cbiAgICAgIGxldCBuID0gcC5jcmVhdGVWZWN0b3IobngsIG55KTtcblxuICAgICAgdGhpcy5hbHRpdHVkZSA9IHAubm9pc2Uobi54ICsgNDIzLjIsIG4ueSAtIDIzMS4xKSArIDAuMDUgKiBwLm5vaXNlKG4ueCAqIDE1ICsgMTEzLjMsIG4ueSAqIDE1ICsgMjIxLjEpO1xuICAgICAgbGV0IG52YWwgPSAodGhpcy5hbHRpdHVkZSArIDAuMDQ1ICogKGluZGV4IC0gbnVtYmVyX29mX3BhcnRpY2xlX3NldHMgLyAyKSkgJSAxO1xuXG4gICAgICB0aGlzLmFuZ2xlICs9IDMgKiBwLm1hcChudmFsLCAwLCAxLCAtMSwgMSk7XG4gICAgICB0aGlzLnZhbCA9IG52YWw7XG4gICAgfVxuXG4gICAgZGlzcGxheShpbmRleCkge1xuICAgICAgaWYgKHRoaXMudmFsID4gMC40NzkgJiYgdGhpcy52YWwgPCAwLjUyMSkge1xuICAgICAgICAvL2NvbnN0IHBudCA9IHBUcmFuc2Zvcm0udHJhbnNmb3JtKHRoaXMucG9zLngsIHRoaXMucG9zLnkpO1xuXG4gICAgICAgIGxldCBucCA9IHBUcmFuc2Zvcm0udHJhbnNmb3JtKHRoaXMucG9zLngsIHRoaXMucG9zLnkgKyAxNTAgLSB0aGlzLmFsdGl0dWRlICogMzUwKTtcbiAgICAgICAgcC5wb2ludChucFswXSwgbnBbMV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbm5ldyBwNShza2V0Y2gpO1xuO1xudmFyIGhvdCA9IG1vZHVsZS5ob3Q7XG5pZiAoaG90KSB7XG4gIGhvdC5hY2NlcHQoZXJyID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVycikpO1xuXG4gIHZhciBrZWVwID0gKGJpbmRpbmdzLCBldmFsc3RyKSA9PlxuICAgIGhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBkYXRhLmJpbmRpbmdzID0gYmluZGluZ3M7XG4gICAgICBkYXRhLmV2YWxzdHIgPSBldmFsc3RyO1xuICAgIH0pO1xuXG4gIGlmICghaG90LmRhdGEpIHtcbiAgICB2YXIgYmluZGluZ3MgPSB7fSwgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuICAgIFtdLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciBmID0gZXZhbChuYW1lKTtcbiAgICAgIHZhciBwcm94aWVkID0gbmV3IFByb3h5KGYsIHtcbiAgICAgICAgYXBwbHk6IGZ1bmN0aW9uIChmLCBzZWxmLCBhcmdzKSB7XG4gICAgICAgICAgcmV0dXJuIChiaW5kaW5nc1tuYW1lXSB8fCBmKS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBldmFsKG5hbWUgKyBcIiA9IHByb3hpZWQ7XCIpO1xuICAgICAgaWYgKGV4cG9ydHNbbmFtZV0pIGV4cG9ydHNbbmFtZV0gPSBwcm94aWVkO1xuICAgIH0pO1xuICAgIGtlZXAoYmluZGluZ3MsIHN0ciA9PiBldmFsKHN0cikpO1xuICB9XG4gIGVsc2Uge1xuICAgIHZhciBkYXRhID0gaG90LmRhdGEsIGJpbmRpbmdzID0gZGF0YS5iaW5kaW5ncztcbiAgICBbXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBiaW5kaW5nc1tuYW1lXSA9IGRhdGEuZXZhbHN0cihcbiAgICAgICAgJygnICtcbiAgICAgICAgZXZhbChuYW1lKS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXmZ1bmN0aW9uIFxcdytcXCgvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Z1bmN0aW9uICgnKSArXG4gICAgICAgICcpJyk7XG4gICAgfSk7XG4gICAga2VlcChiaW5kaW5ncywgZGF0YS5ldmFsc3RyKTtcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdHJhY2UtcGVyc3BlY3RpdmUvc2tldGNoLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

/******/ });