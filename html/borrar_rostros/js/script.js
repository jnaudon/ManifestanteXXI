/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-borderradius-opacity-rgba-canvas-draganddrop-webworkers-addtest-testprop-testallprops-hasevent-prefixes-domprefixes-file_api
 */
;window.Modernizr=function(a,b,c){function B(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+n.join(c+" ")+c).split(" ");return A(d,b)}function A(a,b){for(var d in a)if(j[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function z(a,b){return!!~(""+a).indexOf(b)}function y(a,b){return typeof a===b}function x(a,b){return w(m.join(a+";")+(b||""))}function w(a){j.cssText=a}var d="2.0.6",e={},f=b.documentElement,g=b.head||b.getElementsByTagName("head")[0],h="modernizr",i=b.createElement(h),j=i.style,k,l=Object.prototype.toString,m=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),n="Webkit Moz O ms Khtml".split(" "),o={},p={},q={},r=[],s=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=y(e[d],"function"),y(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),t,u={}.hasOwnProperty,v;!y(u,c)&&!y(u.call,c)?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],c)},o.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},o.draganddrop=function(){return s("dragstart")&&s("drop")},o.rgba=function(){w("background-color:rgba(150,255,150,.5)");return z(j.backgroundColor,"rgba")},o.borderradius=function(){return B("borderRadius")},o.opacity=function(){x("opacity:.55");return/^0.55$/.test(j.opacity)},o.webworkers=function(){return!!a.Worker};for(var C in o)v(o,C)&&(t=C.toLowerCase(),e[t]=o[C](),r.push((e[t]?"":"no-")+t));e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return;b=typeof b=="boolean"?b:!!b(),f.className+=" "+(b?"":"no-")+a,e[a]=b}return e},w(""),i=k=null,e._version=d,e._prefixes=m,e._domPrefixes=n,e.hasEvent=s,e.testProp=function(a){return A([a])},e.testAllProps=B;return e}(this,this.document),Modernizr.addTest("file",function(){return!!(window.File&&window.FileList&&window.FileReader)});

agent = (function( ua ) {
	ua = ua.toLowerCase();

	rwebkit = /(webkit)[ \/]([\w.]+)/;
	ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/;
	rmsie = /(msie) ([\w.]+)/;
	rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/;

	var match = rwebkit.exec( ua ) ||
				ropera.exec( ua ) ||
				rmsie.exec( ua ) ||
				ua.indexOf("compatible") < 0 && rmozilla.exec( ua ) ||
				[];

	return { browser: match[1] || "", version: match[2] || "0" };
})(navigator.userAgent);

var async = true;


function getImageDim(image) {
	var result = {};
	document.body.appendChild(image);
	result['width'] = image.offsetWidth;
	result['height'] = image.offsetHeight;
	document.body.removeChild(image);
	return result;
}

function detectNewImage(src, async) {

	var elapsed_time = (new Date()).getTime();
	var image = new Image();
	var canvas = document.getElementById("output");
	var ctx = canvas.getContext("2d");
	image.onload = function () {
		/* load image, and draw it to canvas */
		var dim = getImageDim(image);
		var boundingWidth = document.getElementById("content").offsetWidth - 4;
		var boundingHeight = window.innerHeight - (document.getElementById("header").offsetHeight + document.getElementById("footer").offsetHeight + document.getElementById("urlbox").offsetHeight + document.getElementById("stats").offsetHeight) - 120;
		var viewport = document.getElementById("viewport");
		var newWidth = dim.width, newHeight = dim.height, scale = 1;
		if (dim.width * boundingHeight > boundingWidth * dim.height) {
			newWidth = boundingWidth;
			newHeight = boundingWidth * dim.height / dim.width;
			scale = newWidth / dim.width;
		} else {
			newHeight = boundingHeight;
			newWidth = boundingHeight * dim.width / dim.height;
			scale = newHeight / dim.height;
		}
		viewport.style.width = newWidth.toString() + "px";
		viewport.style.height = newHeight.toString() + "px";
		canvas.width = newWidth;
		canvas.style.width = newWidth.toString() + "px";
		canvas.height = newHeight;
		canvas.style.height = newHeight.toString() + "px";
		ctx.drawImage(image, 0, 0, newWidth, newHeight);
		elapsed_time = (new Date()).getTime();
		function post(comp) {
			ctx.lineWidth = 2;
			ctx.strokeStyle = 'rgba(230,87,0,0.8)';
			/* draw detected area */
			for (var i = 0; i < comp.length; i++) {
				ctx.beginPath();
				ctx.arc((comp[i].x + comp[i].width * 0.5) * scale, (comp[i].y + comp[i].height * 0.5) * scale,
						(comp[i].width + comp[i].height) * 0.25 * scale * 1.2, 0, Math.PI * 2);
				ctx.stroke();
				ctx.fill();
			}
		}
		/* call main detect_objects function */
		var comp = ccv.detect_objects({ "canvas" : ccv.grayscale(ccv.pre(image)),
										"cascade" : cascade,
										"interval" : 5,
										"min_neighbors" : 1 });
		post(comp);
	};
	image.src = src;
}

function handleLocalFile(file) {
	if (file.type.match(/image.*/)) {
		var reader = new FileReader();
		reader.onload = function (e) {
			detectNewImage(e.target.result, async);
		};
		reader.readAsDataURL(file);
	}
}

document.getElementById("viewport").addEventListener("dragover", function (e) {
	e.stopPropagation();
	e.preventDefault();
	document.getElementById("view-hint").style.zIndex = 
		document.getElementById("view-horz").style.zIndex = 
			document.getElementById("view-vtic").style.zIndex = "1000";
}, false);

if (agent.browser == "mozilla") {
	document.getElementById("file-selector").style.display = "none";
	document.getElementById("file-selector").addEventListener("click", function (e) {
		e.stopPropagation();
		e.preventDefault();
	}, false);
	document.getElementById("viewport").addEventListener("click", function (e) {
		e.stopPropagation();
		e.preventDefault();
		document.getElementById("file-selector").click();
	}, false);
}

document.getElementById("viewport").addEventListener("mouseover", function (e) {
	document.getElementById("view-hint").style.zIndex = 
		document.getElementById("view-horz").style.zIndex = 
			document.getElementById("view-vtic").style.zIndex = "1000";
});

document.getElementById("viewport").addEventListener("mouseout", function (e) {
	document.getElementById("view-hint").style.zIndex = 
		document.getElementById("view-horz").style.zIndex = 
			document.getElementById("view-vtic").style.zIndex = "0";
});

document.getElementById("file-selector").addEventListener("change", function (e) {
	var files = this.files;
	if (files.length)
		handleLocalFile(files[0]);
});

document.getElementById("viewport").addEventListener("drop", function (e) {
	e.stopPropagation();
	e.preventDefault();

	var files = e.dataTransfer.files;

	if (files.length)
		handleLocalFile(files[0]);

	document.getElementById("view-hint").style.zIndex = 
		document.getElementById("view-horz").style.zIndex = 
			document.getElementById("view-vtic").style.zIndex = "0";
}, false);

document.getElementById("url-image").addEventListener("focus", function (e) {
	document.getElementById("url-hint").style.visibility = "hidden";
});

document.getElementById("url-image").addEventListener("blur", function (e) {
	if (document.getElementById("url-image").value.length <= 0)
		document.getElementById("url-hint").style.visibility = "visible";
});

document.getElementById("url-detect").addEventListener("click", function(e) {
	var url = document.getElementById("url-image").value;
	if (url.length > 0) {
		window.location.hash = "#" + encodeURIComponent(url);
		detectNewImage("loader.php?src=" + encodeURIComponent((url.substr(0, 7).toLowerCase() == "http://") ? url : "http://" + url), async);
	}
});

var url = window.location.hash.substr(1);
if (url.length > 7) {
	document.getElementById("url-image").value = decodeURIComponent(url);
	document.getElementById("url-hint").style.visibility = "hidden";
}
