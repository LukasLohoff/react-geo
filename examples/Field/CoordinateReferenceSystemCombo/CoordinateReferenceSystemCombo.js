webpackJsonp([6],{28:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),a=o(29),i=function(e){var t,o=e||{};t=void 0!==o.attributions?o.attributions:[i.ATTRIBUTION];var r=void 0!==o.crossOrigin?o.crossOrigin:"anonymous",n=void 0!==o.url?o.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";a.a.call(this,{attributions:t,cacheSize:o.cacheSize,crossOrigin:r,opaque:void 0===o.opaque||o.opaque,maxZoom:void 0!==o.maxZoom?o.maxZoom:19,reprojectionErrorThreshold:o.reprojectionErrorThreshold,tileLoadFunction:o.tileLoadFunction,url:n,wrapX:o.wrapX})};r.a.inherits(i,a.a),i.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',t.default=i},29:function(e,t,o){"use strict";var r=o(0),a=o(42),i=o(36),n=function(e){var t=e||{},o=void 0!==t.projection?t.projection:"EPSG:3857",r=void 0!==t.tileGrid?t.tileGrid:i.a.createXYZ({extent:i.a.extentFromProjection(o),maxZoom:t.maxZoom,minZoom:t.minZoom,tileSize:t.tileSize});a.a.call(this,{attributions:t.attributions,cacheSize:t.cacheSize,crossOrigin:t.crossOrigin,logo:t.logo,opaque:t.opaque,projection:o,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileGrid:r,tileLoadFunction:t.tileLoadFunction,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:void 0===t.wrapX||t.wrapX,transition:t.transition})};r.a.inherits(n,a.a),t.a=n},793:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=o(1),i=r(a),n=o(8),l=o(19),u=o(311),c=r(u),d=o(27),s=r(d),f=o(41),m=r(f),p=o(34),h=r(p),v=o(28),E=r(v),g=o(20),w=r(g),S=o(7),b=r(S),x=new m.default({center:w.default.fromLonLat([37.4057,8.81566]),zoom:4}),y=new s.default({layers:[new h.default({name:"OSM",source:new E.default})],view:x});w.default.setProj4(c.default);var T=function(e){var t=e.code,o=e.value,r=e.proj4def,a=e.bbox;if(null===t||null===o||null===r||null===a)return void y.setView(x);var i="EPSG:"+t;c.default.defs(i,r);var n=w.default.get(i),l=w.default.getTransform("EPSG:4326",n),u=b.default.applyTransform([a[1],a[2],a[3],a[0]],l);n.setExtent(u);var d=new m.default({projection:n});y.setView(d),d.fit(u)},j=[{code:"25832",value:"ETRS89 / UTM zone 32N"},{code:"31466",value:"DHDN / 3-degree Gauss-Kruger zone 2"},{code:"31467",value:"DHDN / 3-degree Gauss-Kruger zone 3"},{code:"4326",value:"WGS 84"}];(0,n.render)(i.default.createElement("div",null,i.default.createElement("div",{id:"map",style:{width:"400px",height:"400px",right:"0px",position:"absolute"}}),i.default.createElement("div",{className:"example-block"},i.default.createElement("span",null,"A ",i.default.createElement("code",null,"CoordinateReferenceSystemCombo")," with predefined definitions of four CRS:"),i.default.createElement("br",null),i.default.createElement(l.CoordinateReferenceSystemCombo,{predefinedCrsDefinitions:j,style:{width:200}})),i.default.createElement("div",{className:"example-block"},i.default.createElement("span",null,"A ",i.default.createElement("code",null,"CoordinateReferenceSystemCombo")," with autocomplete mode where CRS are fetched from ",i.default.createElement("a",{href:"http://epsg.io/"},"epsg.io/"),". If a CRS is selected (prop ",i.default.createElement("code",null,"onSelect"),"), the projection is used to perform client-side raster reprojection of OSM layer in map."),i.default.createElement("br",null),i.default.createElement(l.CoordinateReferenceSystemCombo,{onSelect:T,style:{width:200}}))),document.getElementById("exampleContainer"),function(){y.setTarget("map")})}},[793]);