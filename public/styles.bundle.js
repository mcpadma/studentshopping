webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\nhtml,body{\n\tbackground:#fff;\n\tfont-size: 100%;\n\tfont-family: 'Roboto-Regular';\n}\nbody a{\n\ttransition: 0.5s all;\n\t-webkit-transition: 0.5s all;\n\t-o-transition: 0.5s all;\n\t-moz-transition: 0.5s all;\n\t-ms-transition: 0.5s all;\n}\nul{\n\tpadding: 0;\n\tmargin: 0;\n}\nh1,h2,h3,h4,h5,h6,label,p{\n\tmargin:0;\t\n}\n/*----*/\n.header-top{\n\tborder-bottom: 1px solid #eee;\n\tpadding: 15px 0;\n}\n.header-left{\n\tmargin-top: 4px;\n}\n.header-left ul li{\n\tdisplay: inline-block;\t\n}\n.header-left ul li a{\n\ttext-decoration: none;\n\tcolor:#fff;\n\tfont-size: 1.1em;\n\tmargin: 0 2em 0 0;\n}\n.header-left ul li a:hover{\n\tcolor:  #EF5F21; \n}\n.head-top {\n  padding: 1em 0 0;\n}\n.number {\n  margin-top: 1%;\n}\n.number span {\n  color: #000;\n  font-size: 1em;\n}\n/* start menu */\n.h_menu4 {\n  margin: 7px 0 0px;\n}\n.h_nav h4{\n\tborder-bottom:1px solid rgb(236, 236, 236);\n\tfont-size: 1.3em;\n\tcolor:#000;\n\tline-height: 1.8em;\n\tmargin-bottom: 4%;\n\t  text-align: left;\n}\n.h_nav h4.top{\n\tmargin-top:1%;\n}\n.h_nav ul li{\n\tdisplay: block;\n}\n.h_nav ul li a{\n\t  display: block;\n  font-size: 1em;\n  color: #B0B0B0;\n  text-transform: capitalize;\n  line-height: 2em;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  text-align: left;\n}\n.h_nav ul li a:hover{\n\tcolor:#52d0c4;\n\ttext-decoration:underline;\n}\n/*--banner--*/\n/*--header--*/\nselect.in-drop,select.in-drop1 {\n\tborder: none;\n\toutline: 0;\n\tfont-size: 0.9em;\n\tcolor: #000;\n\tbackground: none;\n\twidth: 81%;\n}\n.world ul li {\n\tdisplay: inline-block;\n    margin: 0 2% 0 0;\n}\nselect.in-drop1{\n\twidth:100%;\n}\n.logo{\n\ttext-align:center;\n}\np.log{\n\tfloat:left;\n\tfont-size: 1em;\n\twidth: 50%;\n\tmargin-top: 4%;\n}\np.log a{\n\tcolor:#52d0c4;\n\ttext-decoration:none;\n\tmargin: 0 5%;\n\tdisplay: inline-block;\n}\np.log a:hover{\n\tcolor:#000;\n}\n.search {\n  text-align: right;\n    margin-top: 1%;\n}\ni.glyphicon.glyphicon-search {\n  color: #000;\n  font-size: 1em;\n}\n.world {\n  margin-top: 2%;\n}\ni.glyphicon.glyphicon-phone {\n  margin: 0 4% 0 0;\n}\n/*--cart--*/\n.itemContainer{\n\twidth:100%;\n\tfloat:left;\n}\n.itemContainer div{\n\tfloat:left;\n\tmargin: 5px 20px 5px 20px ;\n}\n.itemContainer a{\n\ttext-decoration:none;\n}\n.cartHeaders{\n\twidth:100%;\n\tfloat:left;\n}\n.cartHeaders div{\n\tfloat:left;\n\tmargin: 5px 20px 5px 20px ;\n}\n.item_add {\n  color: #000;\n  border:none;\n}\na.item_add {\n text-decoration: none;\n}\n.grid_1 img{\n\tmargin-bottom:1em;\n}\n.box_1 h3{\n  color: #000;\n  font-size: 1em;\n}\n.box_1 h3 img{\n\tmargin-left: 5px;\n}\n.box_1 p a{\n  color: #B5B3B3;\n  font-size: 0.77em;\n}\n.total {\n  display: inline-block;\n}\n.cart.box_1{\n\tfloat: right;\n\tmargin-top: 2px;\n}\n/*--- slider-css --*/\n.slider {\n\tposition: relative;\n}\n.rslides {\n  position: relative;\n  list-style: none;\n  overflow: hidden;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  }\n.rslides li {\n  -webkit-backface-visibility: hidden;\n  position: absolute;\n  display: none;\n  width: 100%;\n  left: 0;\n  top: 0;\n  }\n.rslides li:first-child {\n  position: relative;\n  display: block;\n  float: left;\n  }\n.rslides img {\n  display: block;\n  height: auto;\n  float: left;\n  width: 100%;\n  border: 0;\n  }\n.callbacks_tabs a:after {\n\tcontent: \"\\F111\";\n\tfont-size: 0;\n\tfont-family: FontAwesome;\n\tvisibility: visible;\n\tdisplay: block;\n\theight: 12px;\n\twidth: 12px;\n\tdisplay: inline-block;\n\tbackground: #fff;\n\tborder-radius:50px;\n}\n.callbacks_here a:after{\n\tbackground:#000;\n}\n.callbacks_tabs a{\n\tvisibility:hidden;\n}\n.callbacks_tabs li{\n\tdisplay:inline-block;\n}\nul.callbacks_tabs.callbacks1_tabs {\n\tposition: absolute;\n\tbottom: 14px;\n\tz-index: 999;\n\tleft: 45%;\n}\n.banner{\n\tborder-bottom:1px solid #bcbcbc;\n\tpadding: 1em 0;\n}\n.banner-mat{\n\tpadding:0;\n}\n/*--content--*/\n.content-top h1{\n\tcolor:#000;\n\tfont-size: 3em;\n\tfont-family: 'OleoScript-Regular';\n\ttext-align: center;\n\tmargin: 0 0 1em;\n}\n.col-md1 img{\n\tmargin: 0 auto;\n}\n.col-md1 h3 {\n  \tfont-size: 1.2em;\n  \tline-height: 1.1em;\n  \tfont-family: 'OleoScript-Regular';\n  \ttext-align: center;\n  \tmargin: 0 0 0.7em;\n  \tcolor: #000;\n}\n.col-md1 h3 a{\n  \tcolor: #000;\n\ttext-decoration: none;\n}\n.price h5{\n\tfloat: left;\n\tcolor:#000;\n\tfont-size: 1.5em;\n\tmargin-top: 3px;\n}\n.price a {\n    color: #FFF;\n  font-size: 0.9em;\n  display: block;\n  float: right;\n  background-color: #52D0C4;\n  padding: 0.3em 0.6em;\n  border-radius: 3px;\n  text-decoration: none;\n}\n.content-top {\n  padding: 4em 0;\n}\n.content-top1 {\n  padding: 2em 0;\n}\n.col-md1 {\n  border: 1px solid #CACACA;\n  padding: 1em;\n  border-bottom:5px solid #52D0C4;\n}\n.col-md1:hover {\n  border: 1px solid #000;\n  border-bottom: 5px solid #000;\n  transition: 0.5s all;\n  -webkit-transition: 0.5s all;\n  -o-transition: 0.5s all;\n  -moz-transition: 0.5s all;\n  -ms-transition: 0.5s all;\n}\n.col-md1:hover .price a {\n  background-color: #000;\n  transition: 0.5s all;\n  -webkit-transition: 0.5s all;\n  -o-transition: 0.5s all;\n  -moz-transition: 0.5s all;\n  -ms-transition: 0.5s all;\n}\n/*--footer--*/\n.top-footer iframe{\n\twidth: 100%;\n\tmin-height:300px;\n\tborder: none;\n}\n.top-footer1 h2 {\n  font-size: 2em;\n  color: #52d0c4;\n    font-family: 'OleoScript-Regular';\n      margin: 0 0 0.5em;\n}\n.top-footer1 input[type=\"text\"] {\n  width: 65%;\n  padding: 0.6em;\n  outline: none;\n  color: #BDBDBD;\n  font-size: 1em;\n  background: none;\n  border: 1px solid #BDBDBD;\n}\n.top-footer1 input[type=\"submit\"] {\n  font-size: 0.9em;\n  color: #fff;\n  background-color:#000;\n  border: none;\n  padding: 0.8em 0em;\n  width: 30%;\n  vertical-align: top;\n  outline: none;\n}\n.top-footer1 input[type=\"submit\"]:hover {\n  background-color:#52d0c4;\n}\n.footer {\n  border-top: 1px solid #BDBDBD;\n}\n.footer-top {\n  padding: 3em 0 ;\n}\n.top-footer1 {\n  margin: 6em 0 0;\n}\n.footer-bottom-cate h6{\n\tfont-size: 1.1em;\n\tcolor: #000;\n\tmargin: 0 0 0.5em;\n\t  font-family: 'OleoScript-Regular';\n}\n.footer-bottom-cate ul{\n\tpadding: 0;\n\tmargin: 0;\n}\n.footer-bottom-cate ul li{\n\tlist-style: none;\n\tpadding: 0.2em 0;\n}\n.footer-bottom-cate ul li a {\n\ttext-decoration:none;\n\tfont-size: 0.8em;\n\tcolor: #B2B2B2;\n}\n.footer-bottom-cate ul li a:hover{\n\tcolor:#52D0C4;\n\tpadding-left: 5px;\n}\n.cate-bottom ul li  {\n\tfont-size:1em;\n\tcolor: #000;\n}\n.cate-bottom ul li.phone {\n\tcolor:#52D0C4;\n\tpadding: 1em 0 0em;\n}\np.footer-class {\n  font-size: 1em;\n  color:  #B2B2B2;\n  margin: 2em 0 0;\n  text-align:center;\n}\np.footer-class a{\n  text-decoration:none;\n  color: #52D0C4;\n}\np.footer-class a:hover{\n  color:  #B2B2B2;\n}\n.footer-bottom {\n\tpadding: 4em 0;\n\tborder-top: 1px solid #BDBDBD;\n}\n/*--//footer--*/\n/*-- contact --*/\n.contact {\n  padding: 4em 0;\n}\n.contact h1{\n\tfont-size: 3em;\n\tcolor: #000;\n  \tfont-family: 'OleoScript-Regular';\n\tmargin: 0 0px 1em;\n\ttext-align: center;\n}\n.contact-bottom  span,.contact-bottom-top span{\n\tfont-size:1.2em;\n\tcolor:#fff;\n\tdisplay:block;\n\tpadding:0 0 0.5em;\n}\n.contact-bottom  input[type=\"text\"]{\n\twidth:100%;\n\tpadding:0.7em;\t\n\tborder:1px solid #bbb;\n\t-webkit-appearance:none;\n\toutline:none;\n\tcolor:#fff;\n\toutline-color:#52D0C4;\n\t  background: none;\n}\n.contact-bottom-top textarea{\n\twidth:100%;\n\tpadding:1em;\t\n\tborder:1px solid #bbb;\n\t-webkit-appearance:none;\n\toutline:none;\n\tcolor:#bbb;\n\tmin-height:220px;\n\tresize:none;\n\toutline-color:#52D0C4;\n\t background: none;\n}\n.contact-bottom-top {\n\t  margin: 1em 15px 0;\n}\n.contact-form input[type=\"submit\"]{\n\tbackground: #52D0C4;\n\tcolor: #fff;\n\tborder: none;\n\toutline: none;\n\tmargin:1em 15px 0;\n\tpadding: 0.3em 1em;\n\tfont-size: 1.2em;\n\tdisplay: inline-block;\n\ttransition: 0.5s all;\n\t-webkit-transition: 0.5s all;\n\t-moz-transition: 0.5s all;\n\t-o-transition: 0.5s all;\n\t-ms-transition: 0.5s all;\n}\n.contact-form input[type=\"submit\"]:hover{\n\tbackground: #000;\n}\n.address-grid i{\n\tcolor:#52D0C4;\n\tfont-size:4em;\n\tfloat: left;\n\tmargin: 0 9% 0 0;\n  display: inline-block;\n}\n.address1{\n\tfloat: left;\n\t  margin-top: 0.5em;\n}\n.address1 p{\n\tfont-size:1.8em;\n\tcolor: #b2b2b2;\n\tline-height: 1.7em;\t\n\t\n}\n.address1 p a{\n\ttext-decoration:none;\n\tcolor: #b2b2b2;\n}\n.address1 p a:hover{\n\tcolor: #52D0C4;\n}\n.address-more h2{\n\tcolor:#000;\n\tfont-size:2em;\n\tmargin: 0 15px 0.7em;\n\t  font-family: 'OleoScript-Regular';\t\n}\n.address {\n  padding: 3em 0 0;\n}\n.contact span {\n\tcolor: #b2b2b2;\n\tfont-size:0.9em;\n\tpadding-bottom: 0.2em;\n\tdisplay: block;\n}\n/*--//contact--*/\n/*--login--*/\n.account h1 {\n\tcolor:#000;\n\tfont-size: 3em;\n\tmargin:0 0 1em;\n\tfont-family: 'OleoScript-Regular';\n\ttext-align: center;\n}\n.login-left h4{\n\tcolor:#000;\n\tfont-size: 1.3em;\n\tfont-family: 'OleoScript-Regular';\n}\n.login-left p {\n\tcolor: #b2b2b2;\n\tdisplay: block;\n\tfont-size: 0.9em;\n\tmargin: 1em 0 1.5em 0;\n\tline-height: 1.8em;\n\twidth: 95%;\n}\n.acount-btn {\n\tbackground:#52d0c4;\n\tcolor: #FFF;\n\tfont-size: 0.9em;\n\tpadding: 0.4em 1em;\n\ttransition: 0.5s all;\n\t-webkit-transition: 0.5s all;\n\t-moz-transition: 0.5s all;\n\t-o-transition: 0.5s all;\n\tdisplay: inline-block;\n\ttext-transform: uppercase;\n}\n.acount-btn:hover, .login-right input[type=\"submit\"]:hover{\n\tbackground:#000;\n\ttext-decoration:none;\n\tcolor:#fff;\n}\n.login-right form {\n\tpadding: 1em 0;\n}\n.login-right span {\n\tcolor: #b2b2b2;\n\tfont-size:0.9em;\n\tpadding-bottom: 0.4em;\n\tdisplay: block;\n}\n.word-in{\n\tmargin: 0.5em 0 0;\n}\n.login-right input[type=\"text\"] {\n\tborder: 1px solid #bbb;\n\toutline-color:#52d0c4;\n\twidth: 96%;\n\tfont-size:0.9em;\n\tpadding:10px;\n\t  margin: 0.5em 0;\n}\n.login-right input[type=\"submit\"] {\n\tbackground:#52d0c4;\n\tcolor: #FFF;\n\tfont-size: 0.9em;\n\tpadding: 0.4em 1em;\n\ttransition: 0.5s all;\n\t-webkit-transition: 0.5s all;\n\t-moz-transition: 0.5s all;\n\t-o-transition: 0.5s all;\n\tdisplay: inline-block;\n\ttext-transform: uppercase;\n\tborder:none;\n\toutline:none;\n}\na.forgot {\n\tfont-size: 0.8125em;\n\t  color: #000000;\n}\n.account {\n  padding: 4em 0;\n}\n/*--register--*/\n.register h1 {\n\tcolor:#000;\n\tfont-size:3em;\n\tmargin:0 0 1em;\n\t  font-family: 'OleoScript-Regular';\n\t  text-align: center;\n}\n.register-top-grid span, .register-bottom-grid span {\n\tcolor:#b2b2b2;\n\tfont-size: 0.9em;\n\tpadding-bottom: 0.2em;\n\tdisplay: block;\n}\n.register-top-grid input[type=\"text\"], .register-bottom-grid input[type=\"text\"] {\n\tborder: 1px solid #EEE;\n\toutline-color:#52D0C4;\n\twidth: 100%;\n\tfont-size: 1em;\n\tpadding: 0.5em;\n\tmargin: 0.5em 0;\n}\n.checkbox {\n\tmargin-bottom: 4px;\n\tpadding-left: 27px;\n\tfont-size: 1.2em;\n\tline-height: 27px;\n\tcursor: pointer;\n}\n.checkbox {\n\tposition: relative;\n\tfont-size: 0.9em;\n\tcolor:#000;\n}\n.checkbox:last-child {\n\tmargin-bottom: 0;\n}\n.news-letter {\n\tcolor: #000;\n\tfont-size: 1em;\n\tmargin-bottom: 1em;\n\tdisplay: block;\n\ttext-transform: uppercase;\n\ttransition: 0.5s all;\n\t-webkit-transition: 0.5s all;\n\t-moz-transition: 0.5s all;\n\t-o-transition: 0.5s all;\n\tclear: both;\n}\n.checkbox i {\n\tposition: absolute;\n\tbottom: 5px;\n\tleft: 0;\n\tdisplay: block;\n\twidth:20px;\n\theight:20px;\n\toutline: none;\n\tborder: 2px solid #E1DFDF;\n}\n.checkbox input + i:after {\n\tcontent: '';\n\t/* background: url(\"../images/tick1.png\") no-repeat 1px 2px; */\n\ttop: -1px;\n\tleft: -1px;\n\twidth: 15px;\n\theight: 15px;\n\tfont: normal 12px/16px FontAwesome;\n\ttext-align: center;\n}\n.checkbox input + i:after {\n\tposition: absolute;\n\topacity: 0;\n\ttransition: opacity 0.1s;\n\t-o-transition: opacity 0.1s;\n\t-ms-transition: opacity 0.1s;\n\t-moz-transition: opacity 0.1s;\n\t-webkit-transition: opacity 0.1s;\n}\n.checkbox input {\n\tposition: absolute;\n\tleft: -9999px;\n}\n.checkbox input:checked + i:after {\n\topacity: 1;\n}\n.news-letter:hover {\n\tcolor:#00BFF0;\n}\n.register-but{\n\tmargin-top:1em;\n}\n.register-but form input[type=\"submit\"] {\n\tbackground:#52D0C4;\n\tcolor: #FFF;\n\tfont-size:1em;\n\tpadding: 0.4em 1em;\n\ttransition: 0.5s all;\n\t-webkit-transition: 0.5s all;\n\t-moz-transition: 0.5s all;\n\t-o-transition: 0.5s all;\n\tdisplay: inline-block;\n\tborder:none;\n\toutline:none;\n}\n.register-but input[type=\"submit\"]:hover {\n\tbackground:#000;\n}\n.mation{\n\tpadding: 1em 0;\n}\n.register {\n\tpadding: 4em 0;\n}\n/*--product--*/\n.products h1{\n\tcolor:#000;\n\tfont-size: 3em;\n\tfont-family: 'OleoScript-Regular';\n\ttext-align: center;\n\tmargin: 0 0 1em;\n}\n.products {\n  padding: 4em 0;\n}\n/*--menu-drop--*/\nh3.cate {\n\tcolor: #52D0C4;\n\tfont-size: 1.5em;\n\t  font-family: 'OleoScript-Regular';\n}\nul.kid-menu{\n\tdisplay: block !important;\n}\n.menu-drop {\n\twidth: auto;\n\theight: auto;\n\tpadding: 0;\n\tlist-style: none;\n\tmargin: 0.5em 0;\t\n}\n.menu-drop > li > a {\n\twidth: 100%;\n  margin: 0.3em 0;\n\tdisplay:inline-block;\n\tposition: relative;\n\tcolor: #B2B2B2;\n\tfont-size: 0.9em;\n\ttext-decoration:none;\n\t\n}\n.menu-drop > li > a:hover{\n\tcolor:#52D0C4;\n}\n.menu-drop ul li a {\t\n\twidth: 100%;\n\tdisplay: inline-block;\n\tposition: relative;\n\tfont-size:0.9em;\n\tmargin:0.3em 0;\n\tcolor: #52D0C4;\n\ttext-decoration:none;\n\ttext-indent: 1.2em;\n}\n.menu-drop ul li a:hover{\n\tcolor:#000;\n}\nul.kid-menu li,ul.cute li{\n\tlist-style: none;\t\n}\n/*--//menu-drop--*/\n/*----*/\n.fashion-grid{\n\tfloat:left;\n\t  width: 24%;\n}\n.fashion-grid1{\n\tfloat: right;\n\t  width: 68%;\n}\nh6.best2 {\n  font-size: 0.9em;\n  line-height: 1.5em;\n}\nh6.best2 a{\n \tcolor:#B2B2B2;\n \ttext-decoration: none;\n}\nh6.best2 a:hover{\n\tcolor:#52D0C4;\n}\nspan.price-in1 {\n  font-size: 1.3em;\n  padding: 0.3em 0 0;\n  display: block;\n  color:#52D0C4;\n}\n.product-go {\n  padding: 1em 0;\n}\n/*--tag--*/\n.tag {\n  padding: 2em 0;\n}\n.tags {\n  padding: 1.5em 0 0;\n}\n.tags ul li {\n\tdisplay: inline-block;\n\tfloat:left;\n\twidth: 22.8%;\n  \tmargin: 0.5em 2% 0 0;\n \t text-align: center;\n}\n.tags li a {\n\tfont-size: 0.9em;\n\tdisplay:block;\n\tpadding: 0.3em 0.4em;\n\ttext-decoration: none;\n\tcolor: #B2B2B2;\n\tborder: 1px solid #B2B2B2;\n}\n.tags li a:hover {\n\tcolor: #fff;\n\tbackground:#52D0C4;\n\tborder: 1px solid #52D0C4;\n}\n.tags ul li:nth-child(4),.tags ul li:nth-child(8),.tags ul li:nth-child(12){\n\tmargin:0.5em 0 0;\n}\n/*--typo-single--*/\n.thumb-image { width: 305px; }\n.thumb-image > img { width: 100%; }\n/*--single--*/\n.single-para h1{\n\tfont-size:1.5em;\n\tcolor:#52D0C4;\n\tline-height:1.5em;\n\t  font-family: 'OleoScript-Regular';\n}\nlabel.add-to{\n\tdisplay:block;\n\tfont-size: 2em;\n\tcolor: #000;\n}\n.single-para p{\n\tfont-size:0.9em;\n\tcolor:#B2B2B2;\n\tline-height:1.8em;\n}\na.cart{\n  padding: 0.3em 0.7em;\n  color: #FFF;\n  background: #52D0C4;\n  margin: 1.5em 0 0;\n  font-size: 1em;\n  display:inline-block;\n  line-height: 1.6em;\n  text-align: center;\n  text-decoration:none;\n}\na.cart:hover{\n\tbackground: #000;\n}\n/*----*/\n.star-on {\n  padding: 1em 0;\n}\n.star-on ul {\n  float:left;\n}\n.star-on ul li{\n\tdisplay: inline-block;\n}\n.star-on ul li i{\n\tcolor:#000;\n}\n.review{\n\tfloat:left;\n\t  padding: 0 1em;\n}\n.star-on a{\n\ttext-decoration:none;\n\tfont-size:1em;\n\tcolor:#52D0C4;\n}\n.star-on a:hover{\n\tcolor:#000;\n}\n.single-bottom h4{\n\tcolor:#000;\n\tfont-size:1.5em;\n\tpadding:0.5em;\n\tborder-bottom:1px solid #fa7455\t;\n}\n.single {\n  padding: 4em 0;\n}\n.available h6{\n\tcolor:#52D0C4;\n\tfont-size:1.4em;\n\tpadding: 0 0 1em;\n}\n.available ul li{\n\tdisplay:inline-block;\n\tpadding:0 0.5em 0 0;\n\tcolor:#4c4c4c;\n\tfont-size:0.9em;\n}\n.available ul li select {\n  outline: none;\n  padding: 3px;\n}\n.available {\n  padding: 2em 0 1em;\n}\n/*--checkout--*/\n.check-out{\n\tpadding:4em 0em;\n}\ntable{\n\twidth:100%;\n\t  margin: 0em 0 2em;\n}\nth{\n\tcolor: #52D0C4;\n  \tfont-size: 1.2em;\n \tfont-family: 'OleoScript-Regular';\n    font-weight: 400;\t\n}\nth, td {\n    padding: 10px;\n}\ntd{\n\tcolor:#b2b2b2;\n  font-size: 1em;\n}\na.at-in {\n  float: left;\n    width: 20%;\n}\n.sed {\n    float: right;\n\twidth: 74%;\n}\n.sed h5{\n     color: #52D0C4;\n  \tfont-size: 1.1em;\n  \tfont-family: 'OleoScript-Regular';\n}\n.sed p{\n    color:#b2b2b2;\n\tfont-size:0.8em;\n\tline-height:1.8em;\n\tpadding:1em 0 0;\n}\n.check input[type=\"text\"]{\n    width: 76%;\n  padding: 0.3em;\n  margin: 1em 0;\n  background: #fff;\n  outline: none;\n  text-align: center;\n   border: 1px solid #000;\n}\n.check{\n\twidth:6%;\n}\n.ring-in{\n\twidth:45%;\n}\n.check-out h1 {\n    font-size: 3em;\n  color: #000;\n  font-family: 'OleoScript-Regular';\n  margin: 0 0px 1em;\n  text-align: center;\n}\na.to-buy{\n\tpadding: 0.3em 0.7em;\n  color: #FFF;\n  background: #52D0C4;\n  margin: 0.5em 0 0;\n  font-size: 1em;\n  display: inline-block;\n  line-height: 1.6em;\n  text-align: center;\n  text-decoration: none;\n}\na.to-buy:hover{\n  background: #000;\n}\n/*--//checkout--*/\n/*--typo--*/\nh1.typo1 {\n    font-size: 3em;\n  color: #000;\n  font-family: 'OleoScript-Regular';\n  margin: 0 0px 1em;\n  text-align: center;\n}\n.page-header h3{\n\tfont-size: 2.5em;\n\tcolor:#000;\n}\n.table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: none;\n}\n.grid1 {\n  margin: 1.5em 0 0;\n}\nul.nav.nav-pills {\n  margin: 1.5em 0 0;\n}\n.grid2{\n\tmargin: 1em 0 0;\n}\n.page {\n  padding: 4em 0;\n}\n/*--//typo--*/\n/*--responsive--*/\n@media(max-width:1366px){\n\t\n}\n@media(max-width:1280px){\n\t\n}\n@media(max-width:1024px){\n.content-top h1 {\n  font-size: 2.5em;\n  margin: 0 0 0.3em;\n}\t\n.content-top {\n  padding: 3em 0;\n}\n.top-footer1 input[type=\"submit\"] {\n  width: 33%;\n}\n.banner-mat img {\n  height: 256px;\n  width: 100%;\n}\n.footer-bottom {\n  padding: 3em 0;\n}\n/*--products--*/\n.products {\n  padding: 3em 0;\n}\n.products h1 {\n  font-size: 2.5em;\n}\n.tags li a {\n  font-size: 0.77em;\n}\n/*--single--*/\n.thumb-image {\n  width: 242px;\n}\n/*--contact--*/\n.contact {\n  padding: 3em 0;\n}\n.contact h1 {\n  font-size: 2.5em;\n    margin: 0 0px 0.8em;\n}\n/*--account--*/\n.account h1,.register h1 {\n  font-size: 2.5em;\n}\n.account,.register {\n  padding: 3em 0;\n}\n/*--checkout--*/\n.check-out {\n  padding: 3em 0em;\n}\n.check-out h1 {\n  font-size: 2.5em;\n}\n/*--typo--*/\n.page {\n  padding: 3em 0;\n}\nh1.typo1 {\n  font-size: 2.5em;\n}\n}\n@media(max-width:768px){\n.col-md2 {\n  width: 50%;\n  float: left;\n  margin-bottom: 2em;\n}\t\np.log {\n    width: 55%;\n  font-size: 0.85em;\n}\n.number span {\n  color: #000;\n  font-size: 0.82em;\n  margin-top: 1.5em;\n  display: block;\n}\n.search {\n  margin-top: 3%;\n}\n.banner-mat img {\n  height: 186px;\n}\n.content-top1 {\n  padding: 0em 0;\n}\n.content-top h1 {\n  margin: 0 0 1em;\n}\n.content-top {\n  padding: 3em 0 1em;\n}\n.top-footer1 {\n  margin: 2em 0 0;\n}\n.top-footer1 input[type=\"text\"] {\n  width: 40%;\n}\n.top-footer1 input[type=\"submit\"] {\n  width: 16%;\n}\n.world ,.logo,.header-left{\n  width: 33.33%;\n  float: left;\n}\n.number ,.search{\n  width: 16.66%;\n  float: left;\n}\n.h_menu4 {\n  float: left;\n  width: 66.66%;\n}\n.logo img{\n\twidth: 100%;\n}\n.banner-mat {\n  width: 25%;\n  float: left;\n}\n.matter-banner {\n  width: 50%;\n  float: left;\n}\n.footer-bottom-cate {\n  float: left;\n  width: 25%;\n}\n.number {\n  margin-top: 0%;\n    padding: 0;\n}\n/*--products--*/\n.col-md3 {\n  float: left;\n  width: 33.33%;\n  margin: 0 0 2em;\n}\n.fashion-grid1 {\n  width: 85%;\n}\n.fashion-grid {\n  width: 9%;\n}\n.tags li a {\n  font-size: 0.9em;\n}\n/*--single--*/\n.grid {\n  width: 50%;\n  float: left;\n}\n.thumb-image {\n  width: 305px;\n}\n.single-top-in {\n  width: 50%;\n  float: left;\n}\n.single {\n  padding: 3em 0;\n}\n/*--contact--*/\n.in-contact {\n  margin: 1em 0 0;\n}\n.contact h1 {\n  margin: 0 0px 0.3em;\n}\n.address-grid i {\n  font-size: 3em;\n  margin: 0 5% 0 0;\n}\n.address1 p {\n  font-size: 1.4em;\n  line-height: 1.7em;\n}\n.address-grid {\n  margin: 0 0 1em;\n}\n/*--account--*/\n.account h1 ,.register h1{\n  margin: 0;\n}\n/*--checkout--*/\n.sed p {\n  padding: 0.5em 0 0;\n}\n.check-out {\n  padding: 3em 0em;\n}\n/*--typo--*/\nh1.grid2 {\n  font-size: 2.3em;\n}\n}\n@media (max-width: 736px){\np.log {\n  width: 60%;\n}\n.number span {\n  font-size: 0.75em;\n}\n}\n@media (max-width: 667px){\np.log {\n  font-size: 0.77em;\n}\n}\n@media(max-width:640px){\n.world {\n  width: 26%;\n  padding: 0;\n}\t\nselect.in-drop, select.in-drop1 {\n  font-size: 0.8em;\n}\n.box_1 h3 {\n  font-size: 0.85em;\n}\n.header-left {\n  width: 33%;\n  padding: 0;\n}\n\n.logo {\n  width: 41%;\n}\n.logo img{\n  width: 80%;\n  margin: 0 auto;\n}\n.number {\n  padding: 0;\n  width: 20%;\n}\n.h_menu4 {\n  width: 63%;\n}\n.search {\n  padding: 0;\n}\n.banner-mat img {\n  height: 152px;\n}\n.content-top h1 {\n  font-size: 2em;\n}\n.cate-bottom ul li {\n  font-size: 0.9em;\n}\n/*--product--*/\n.col-md1 {\n  padding: 0.5em;\n}\n.price h5 {\n  font-size: 1.1em;\n}\n.price a {\n  padding: 0.3em 0.5em;\n}\n/*--single--*/\n.single-top-in {\n  width: 100%;\n  float: left;\n    margin: 0 0 2em;\n}\n.grid {\n  width: 53%;\n}\n.thumb-image {\n  width: 257px;\n}\n/*--contact--*/\n.contact {\n  padding: 2em 0;\n}\n/*--account--*/\n.account,.register {\n  padding: 2em 0;\n}\n/*--checkout--*/\nth, td {\n  padding: 10px 4px;\n}\n/*--typo--*/\nbutton.btn.btn-lg {\n  font-size: 1.1em;\n}\nh1.grid2 {\n  font-size: 2em;\n}\nh2.grid2 {\n  font-size: 1.9em;\n}\nh3.typo1 {\n  font-size: 2.5em;\n}\n.page {\n  margin: 2em 0;\n}\n}\n@media (max-width: 600px){\nselect.in-drop, select.in-drop1 {\n  font-size: 0.7em;\n}\n}\n@media (max-width:568px){\n.world {\n  width: 28%;\n  padding: 0;\n}\n.logo {\n  width: 39%;\n}\n}\n@media(max-width:480px){\n.matter-banner,.banner-mat {\n  width: 100%;\n  padding: 0;\n}\n.banner-mat img {\n  display: none;\n}\t\n.world {\n  display: none;\n}\n.logo {\n  width: 100%;\n  padding: 0;\n    text-align: center;\n}\n.header-left {\n  width: 100%;\n}\n.logo img {\n  width: 29%;\n}\n.search {\n  width: 11%;\n}\n.h_menu4 {\n  width: 67%;\n}\n.number {\n  width: 22%;\n}\n.content-top {\n  padding: 2em 0 1em;\n}\n.price h5 {\n  font-size: 1em;\n  margin-top: 6px;\n}\n.footer-top {\n  padding: 2em 0;\n}\n.top-footer iframe {\n  min-height: 150px;\n}\n.top-footer1 {\n  margin: 1em 0 0;\n}\n.top-footer1 h2 {\n  font-size: 1.5em;\n}\n.top-footer1 input[type=\"text\"] {\n  width: 46%;\n}\n.top-footer1 input[type=\"submit\"] {\n  width: 23%;\n}\n.footer-bottom-cate {\n  width: 50%;\n    margin: 0 0 1em;\n}\n.footer-bottom {\n  padding: 2em 0 0em;\n}\n/*--products--*/\n.products {\n  padding: 2em 0;\n}\n.products h1 {\n  font-size: 2em;\n  margin: 0 0 0.5em;\n}\n.col-md3 {\n  padding: 0 3px;\n  margin: 0 0 1em;\n}\n.price a {\n  font-size: 0.8em;\n}\n.col-md-9 {\n  padding: 0;\n}\n.fashion-grid {\n  width: 20%;\n}\n.fashion-grid1 {\n  width: 76%;\n}\n.product-bottom{\n\tpadding: 0;\n}\n.product-go {\n  padding: 0.5em 0;\n}\n.tag {\n  padding: 1em 0;\n}\n.tags {\n  padding: 1em 0 0;\n}\n.grid {\n  width: 67%;\n}\n/*--contact--*/\n.contact h1 {\n  font-size: 2em;\n}\n.address-more h2 {\n  font-size: 1.7em;\n}\n.address-grid i {\n  font-size: 2.5em;\n}\n.address1 p {\n  font-size: 1.2em;\n}\n.address {\n  padding: 2em 0 0;\n}\n/*--account--*/\n.account h1, .register h1 {\n  font-size: 2em;\n}\n/*--checkout--*/\n.check-out h1 {\n  font-size: 2em;\n  margin: 0 0 0.4em;\n}\n.check-out {\n  padding: 2em 0em;\n}\n.sed {\n  float: right;\n  width: 0;\n  display: none;\n}\na.at-in {\n  float: left;\n  width: 76%;\n}\n.ring-in {\n  width: 20%;\n}\nth, td {\n  padding: 7px 0px;\n}\nth {\n  font-size: 1em;\n}\ntd {\n  font-size: 0.8em;\n}\na.to-buy {\n  margin: 0;\n  font-size: 0.8em;\n}\n.single {\n  padding: 2em 0;\n}\n/*--typo--*/\n.page-header h3 {\n  font-size: 2em; \n}\nbutton.btn.btn-lg {\n  font-size: 1em;\n  padding: 7px;\n}\nbutton.btn.btn-1 {\n  font-size: 0.9em;\n  padding: 8px;\n}\nbutton.btn.btn-sm {\n  font-size: 0.8em;\n  padding: 9px;\n}\nh1#h1-bootstrap-heading {\n  font-size: 2.2em;\n}\nh2#h2-bootstrap-heading {\n  font-size: 2em;\n}\nh1.grid2 {\n  font-size: 1.45em;\n}\nh2.grid2 {\n  font-size: 1.35em;\n}\nh3.grid2 {\n  font-size: 1.3em;\n}\nh4.grid2 {\n  font-size: 1.2em;\n}\nh3.typo1 {\n  font-size: 2em;\n}\n.page {\n  margin: 2em 0;\n}\nh1.typo1 {\n  font-size: 2em;\n  margin: 0 0 0.8em;\n}\n}\n@media (max-width:414px){\n.h_menu4 {\n  width: 60%;\n}\n.number {\n  width: 29%;\n}\n}\n@media(max-width:320px){\n.logo {\n  width: 100%;\t\n}\n.header-left {\n  width: 100%;\n}\n.logo img {\n  width: 46%;\n}\n.logo {\n  width: 100%;\n  text-align: center;\n}\n.header-left {\n  width: 100%;\n}\n.box_1 h3 {\n  font-size: 0.8em;\n}\np.log {\n  \tmargin-top: 7%;\n    font-size: 0.9em;\n}\n.header-left {\n  margin-top: 1%;\n}\n.number {\n  width: 32%;\n}\n.number span {\n  font-size: 0.8em;\n}\n.search {\n  width: 6%;\n}\n.h_menu4 {\n  width: 62%;\n}\n.number {\n  margin-top: 0%;\n}\n.search {\n  margin-top: 6%;\n}\n.head-top {\n  padding: 0.4em 0 0;\n}\n.content-top h1 {\n  font-size: 1.5em;\n    margin: 0 0 0.7em;\n}\n.content-top {\n  padding: 1.5em 0 0.5em;\n}\n.col-md2 {\n  padding: 0 5px;\n    margin-bottom: 1em;\n}\n.col-md1 h3 {\n  font-size: 1.1em;\n}\n.price a {\n  font-size: 0.7em;\n  display: inline-block;\n  float: none;\n  padding: 0.3em 0.6em;\n}\n.col-md1 {\n  padding: 0.3em;\n}\n.price h5 {\n  font-size: 1em;\n  margin: 0.4em 0;\n    float: none;\n}\n.price {\n  text-align: center;\n}\n.footer-top {\n  padding: 1.5em 0;\n}\n.top-footer {\n  padding: 0;\n}\n.top-footer1 {\n  padding: 0;\n}\n.top-footer1 h2 {\n  font-size: 1.3em;\n}\n.top-footer1 input[type=\"text\"] {\n  width: 65%;\n  padding: 0.4em;\n}\n.top-footer1 input[type=\"submit\"] {\n  font-size: 0.85em;\n  padding: 0.6em 0em;\n  width: 33%;\n}\n.footer-bottom-cate {\n  padding: 0;\n}\np.footer-class {\n  font-size: 0.9em;\n  margin: 0em 0 1em;\nline-height: 1.5em;\n}\nul.callbacks_tabs.callbacks1_tabs {\n  left: 40%;\n}\n.callbacks_tabs a:after {\n  height: 10px;\n  width: 10px;\n}\n/*--product--*/\n.products h1 {\n  font-size: 1.8em;\n}\n.products {\n  padding: 1.5em 0;\n}\nh3.cate {\n  font-size: 1.2em;\n}\n.contact h1 {\n  font-size: 1.7em;\n    margin: 0;\n}\n.in-contact {\n  padding: 0;\n    margin: 0.5em 0 0;\n}\n.contact-bottom input[type=\"text\"] {\n  padding: 0.5em;\n}\n.contact-bottom-top {\n  margin: 0.5em 0 0;\n}\n.contact-bottom-top textarea {\n  min-height: 120px;\n}\n.contact-form input[type=\"submit\"] {\n  margin: 0.5em 0px 0;\n  padding: 0.3em 0.5em;\n  font-size: 1em;\n}\n.address {\n  padding: 1em 0 0;\n}\n.address-more h2 {\n  font-size: 1.5em;\n  margin: 0 0 0.5em;\n}\n.address-grid {\n  padding: 0;\n}\n.address-grid i {\n  font-size: 2em;\n}\n.address1 p {\n  font-size: 1em;\n}\n.address1 {\n  margin-top: 0;\n}\n.contact {\n  padding: 1.5em 0 0.5em;\n}\n.product-bottom {\n  padding: 0;\n}\n.single {\n  padding: 1.5em 0 0.5em;\n}\n/*--account--*/\n.account, .register {\n  padding: 1.5em 0;\n}\n.account h1, .register h1 {\n  font-size: 1.7em;\n}\n.login-right ,.login-left,.register-top-grid,.register-bottom-grid{\n  padding: 0;\n}\n.login-left p {\n  width: 100%;\n}\n.login-right span {\n  padding-bottom: 0em;\n}\n.register-but {\n  margin-top: 0em;\n}\n.mation {\n  padding: 0 0 0.5em;\n}\ntd {\n  font-size: 0.75em;\n}\ntable {\n  margin: 0em 0 1em;\n}\n.check-out h1 {\n  font-size: 1.7em;\n  margin: 0 0 0.4em;\n}\n.check-out {\n  padding: 1.5em 0em;\n}\n/*--single--*/\n.thumb-image {\n  width: 260px;\n}\n.grid {\n  width: 100%;\n}\n.single-top-in {\n  padding: 0;\n    margin: 0 0 1em;\n}\n.single-para h1 {\n  font-size: 1.2em;\n}\n.star-on a {\n  font-size: 0.8em;\n}\n.available {\n  padding: 1em 0 1em;\n}\nlabel.add-to {\n  font-size: 1.5em;\n}\na.cart {\n  padding: 0.2em 0.5em;\n  margin: 0.5em 0 0;\n}\n.h_nav h4 {\n  font-size: 1.1em;\n}\n/*--typo--*/\nh1#h1-bootstrap-heading {\n  font-size: 1.5em;\n}\nh2#h2-bootstrap-heading {\n  font-size: 1.4em;\n}\nh3#h3-bootstrap-heading {\n  font-size: 1.3em;\n}\nbutton.btn.btn-lg {\n  font-size: 0.9em;\n  margin: 0 0 0.5em 0px;\n  padding: 9px;\n}\n.grid1 {\n  margin: 0.7em 0 0;\n}\nbutton.btn.btn-1 {\n  font-size: 0.8em;\n  margin: 0 0 0.5em;\n}\nbutton.btn.btn-sm {\n  font-size: 0.7em;\n  padding: 5px;\n  margin: 0 0 0.5em;\n}\nbutton.btn.btn-xs {\n  font-size: 0.7em;\n}\nul.nav.nav-pills a{\n\tpadding: 0.5em;\n  font-size: 0.9em;\n}\nspan.label {\n  margin: 0 0 0.5em;\n  display: inline-block;\n}\n.page {\n  padding: 0em;\n   margin: 1.7em 0;\n}\n.page-header {\n  margin: 16px 0 9px;\n}\n.grid2 {\n  margin: 0.4em 0 0;\n}\nh3.typo1 {\n  font-size: 1.7em;\n}\n.page-header h3 {\n  font-size: 1.8em;\n} \nh1.typo1 {\n  font-size: 1.7em;\n  margin: 0 0 0.5em;\n}\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map