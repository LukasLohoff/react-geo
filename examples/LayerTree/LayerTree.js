webpackJsonp([1],{28:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=o(29),n=function(e){var t,o=e||{};t=void 0!==o.attributions?o.attributions:[n.ATTRIBUTION];var r=void 0!==o.crossOrigin?o.crossOrigin:"anonymous",a=void 0!==o.url?o.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";i.a.call(this,{attributions:t,cacheSize:o.cacheSize,crossOrigin:r,opaque:void 0===o.opaque||o.opaque,maxZoom:void 0!==o.maxZoom?o.maxZoom:19,reprojectionErrorThreshold:o.reprojectionErrorThreshold,tileLoadFunction:o.tileLoadFunction,url:a,wrapX:o.wrapX})};r.a.inherits(n,i.a),n.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',t.default=n},29:function(e,t,o){"use strict";var r=o(0),i=o(42),n=o(36),a=function(e){var t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",r=void 0!==t.tileGrid?t.tileGrid:n.a.createXYZ({extent:n.a.extentFromProjection(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});i.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,logo:t.logo,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};r.a.inherits(a,i.a),t.a=a},800:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=o(1),n=r(i),a=o(8),l=o(27),s=r(l),u=o(41),c=r(u),d=o(132),p=r(d),m=o(34),h=r(m),f=o(801),v=r(f),E=o(28),T=r(E),y=o(20),O=r(y),g=o(19),S=new p.default({name:"Layergroup",layers:[new h.default({name:"Food insecurity layer",minResolution:200,maxResolution:2e3,source:new v.default({url:"https://api.tiles.mapbox.com/v3/mapbox.20110804-hoa-foodinsecurity-3month.json?secure",crossOrigin:"anonymous"})}),new h.default({name:"World borders layer",minResolution:2e3,maxResolution:2e4,source:new v.default({url:"https://api.tiles.mapbox.com/v3/mapbox.world-borders-light.json?secure",crossOrigin:"anonymous"})})]}),w=new s.default({layers:[new h.default({name:"OSM",source:new T.default}),S],view:new c.default({center:O.default.fromLonLat([37.4057,8.81566]),zoom:6})});(0,a.render)(n.default.createElement("div",null,n.default.createElement("div",{id:"map",style:{height:"400px"}}),n.default.createElement("span",null,"Please note that the layers have resolution restrictions, please zoom in and out to see how the trees react to this."),n.default.createElement("div",{className:"example-block"},n.default.createElement("span",null,"Autoconfigured with topmost LayerGroup of passed map:"),n.default.createElement(g.LayerTree,{map:w})),n.default.createElement("div",{className:"example-block"},n.default.createElement("span",null,"A LayerTree configured with concrete layerGroup:"),n.default.createElement(g.LayerTree,{layerGroup:S,map:w})),n.default.createElement("div",{className:"example-block"},n.default.createElement("span",null,"A LayerTree with a filterFunction (The OSM layer is filtered out):"),n.default.createElement(g.LayerTree,{map:w,filterFunction:function(e){return"OSM"!=e.get("name")}}))),document.getElementById("exampleContainer"),function(){w.setTarget("map")})},801:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),i=o(278),n=o(23),a=o(7),l=o(802),s=o(20),u=o(56),c=o(42),d=o(36),p=function(e){if(this.tileJSON_=null,c.a.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,projection:s.default.get("EPSG:3857"),reprojectionErrorThreshold:e.reprojectionErrorThreshold,state:u.a.LOADING,tileLoadFunction:e.tileLoadFunction,wrapX:void 0===e.wrapX||e.wrapX,transition:e.transition}),e.url)if(e.jsonp)l.a.jsonp(e.url,this.handleTileJSONResponse.bind(this),this.handleTileJSONError.bind(this));else{var t=new XMLHttpRequest;t.addEventListener("load",this.onXHRLoad_.bind(this)),t.addEventListener("error",this.onXHRError_.bind(this)),t.open("GET",e.url),t.send()}else e.tileJSON?this.handleTileJSONResponse(e.tileJSON):n.a.assert(!1,51)};r.a.inherits(p,c.a),p.prototype.onXHRLoad_=function(e){var t=e.target;if(!t.status||t.status>=200&&t.status<300){var o;try{o=JSON.parse(t.responseText)}catch(e){return void this.handleTileJSONError()}this.handleTileJSONResponse(o)}else this.handleTileJSONError()},p.prototype.onXHRError_=function(e){this.handleTileJSONError()},p.prototype.getTileJSON=function(){return this.tileJSON_},p.prototype.handleTileJSONResponse=function(e){var t,o=s.default.get("EPSG:4326"),r=this.getProjection();if(void 0!==e.bounds){var n=s.default.getTransformFromProjections(o,r);t=a.default.applyTransform(e.bounds,n)}var l=e.minzoom||0,c=e.maxzoom||22,p=d.a.createXYZ({extent:d.a.extentFromProjection(r),maxZoom:c,minZoom:l});if(this.tileGrid=p,this.tileUrlFunction=i.a.createFromTemplates(e.tiles,p),void 0!==e.attribution&&!this.getAttributions2()){var m=void 0!==t?t:o.getExtent();this.setAttributions(function(t){return a.default.intersects(m,t.extent)?[e.attribution]:null})}this.tileJSON_=e,this.setState(u.a.READY)},p.prototype.handleTileJSONError=function(){this.setState(u.a.ERROR)},t.default=p},802:function(e,t,o){"use strict";var r=o(0),i={};i.jsonp=function(e,t,o,i){function n(){delete window[l],a.parentNode.removeChild(a)}var a=document.createElement("script"),l="olc_"+r.a.getUid(t);a.async=!0,a.src=e+(-1==e.indexOf("?")?"?":"&")+(i||"callback")+"="+l;var s=setTimeout(function(){n(),o&&o()},1e4);window[l]=function(e){clearTimeout(s),n(),t(e)},document.getElementsByTagName("head")[0].appendChild(a)},t.a=i}},[800]);