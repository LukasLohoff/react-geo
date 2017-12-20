webpackJsonp([0],{28:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),i=t(29),a=function(e){var n,t=e||{};n=void 0!==t.attributions?t.attributions:[a.ATTRIBUTION];var o=void 0!==t.crossOrigin?t.crossOrigin:"anonymous",r=void 0!==t.url?t.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png";i.a.call(this,{attributions:n,cacheSize:t.cacheSize,crossOrigin:o,opaque:void 0===t.opaque||t.opaque,maxZoom:void 0!==t.maxZoom?t.maxZoom:19,reprojectionErrorThreshold:t.reprojectionErrorThreshold,tileLoadFunction:t.tileLoadFunction,url:r,wrapX:t.wrapX})};o.a.inherits(a,i.a),a.ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',n.default=a},29:function(e,n,t){"use strict";var o=t(0),i=t(42),a=t(36),r=function(e){var n=e||{},t=void 0!==n.projection?n.projection:"EPSG:3857",o=void 0!==n.tileGrid?n.tileGrid:a.a.createXYZ({extent:a.a.extentFromProjection(t),maxZoom:n.maxZoom,minZoom:n.minZoom,tileSize:n.tileSize});i.a.call(this,{attributions:n.attributions,cacheSize:n.cacheSize,crossOrigin:n.crossOrigin,logo:n.logo,opaque:n.opaque,projection:t,reprojectionErrorThreshold:n.reprojectionErrorThreshold,tileGrid:o,tileLoadFunction:n.tileLoadFunction,tilePixelRatio:n.tilePixelRatio,tileUrlFunction:n.tileUrlFunction,url:n.url,urls:n.urls,wrapX:void 0===n.wrapX||n.wrapX,transition:n.transition})};o.a.inherits(r,i.a),n.a=r},323:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=t(324),a=o(i);t(380);var r=t(1),s=o(r),c=t(8),l=t(19),u=t(27),p=o(u),d=t(41),f=o(d),m=t(34),v=o(m),g=t(28),h=o(g),y=t(20),x=o(y),b=new f.default({center:x.default.fromLonLat([7.4057,53.81566]),zoom:4}),C=new p.default({layers:[new v.default({name:"OSM",source:new h.default})],view:b}),w=function(){l.CapabilitiesUtil.parseWmsCapabilities("https://ows.terrestris.de/osm/service?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities").then(l.CapabilitiesUtil.getLayersFromWmsCapabilties).then(function(e){E(e)}).catch(function(){return a.default.error("Could not parse capabilities document.")})},E=function(e){(0,c.render)(s.default.createElement("div",{style:{height:"500px"}},s.default.createElement("div",{id:"map",style:{width:"400px",height:"400px",right:"100px",position:"absolute"}}),s.default.createElement("div",{className:"example-block"},s.default.createElement(l.SimpleButton,{onClick:w},"Fetch capabilities of OWS terrestris"),s.default.createElement(l.AddWmsPanel,{key:"1",map:C,wmsLayers:e,draggable:!1,t:function(e){return e},width:500,height:400,x:0,y:100}))),document.getElementById("exampleContainer"),function(){C.setTarget("map")})};E([])},324:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){if(m)return void e(m);l.default.newInstance({prefixCls:g,transitionName:"move-up",style:{top:f},getContainer:h},function(n){if(m)return void e(m);m=n,e(n)})}function a(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,t=arguments[2],o=arguments[3],a={info:"info-circle",success:"check-circle",error:"cross-circle",warning:"exclamation-circle",loading:"loading"}[t];"function"==typeof n&&(o=n,n=d);var r=v++;return i(function(i){i.notice({key:r,duration:n,style:{},content:s.createElement("div",{className:g+"-custom-content "+g+"-"+t},s.createElement(p.default,{type:a}),s.createElement("span",null,e)),onClose:o})}),function(){m&&m.removeNotice(r)}}Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),s=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}(r),c=t(326),l=o(c),u=t(54),p=o(u),d=3,f=void 0,m=void 0,v=1,g="ant-message",h=void 0;n.default={info:function(e,n,t){return a(e,n,"info",t)},success:function(e,n,t){return a(e,n,"success",t)},error:function(e,n,t){return a(e,n,"error",t)},warn:function(e,n,t){return a(e,n,"warning",t)},warning:function(e,n,t){return a(e,n,"warning",t)},loading:function(e,n,t){return a(e,n,"loading",t)},config:function(e){void 0!==e.top&&(f=e.top,m=null),void 0!==e.duration&&(d=e.duration),void 0!==e.prefixCls&&(g=e.prefixCls),void 0!==e.getContainer&&(h=e.getContainer)},destroy:function(){m&&(m.destroy(),m=null)}},e.exports=n.default},326:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(327);n.default=o.a},327:function(e,n,t){"use strict";function o(){return"rcNotification_"+M+"_"+S++}var i=t(51),a=t.n(i),r=t(21),s=t.n(r),c=t(3),l=t.n(c),u=t(4),p=t.n(u),d=t(10),f=t.n(d),m=t(5),v=t.n(m),g=t(6),h=t.n(g),y=t(1),x=t.n(y),b=t(2),C=t.n(b),w=t(8),E=t.n(w),T=t(79),N=t(225),O=t(9),k=t.n(O),_=t(379),S=0,M=Date.now(),j=function(e){function n(){var e,t,i,a;p()(this,n);for(var r=arguments.length,s=Array(r),c=0;c<r;c++)s[c]=arguments[c];return t=i=v()(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(s))),i.state={notices:[]},i.add=function(e){var n=e.key=e.key||o();i.setState(function(t){var o=t.notices;if(!o.filter(function(e){return e.key===n}).length)return{notices:o.concat(e)}})},i.remove=function(e){i.setState(function(n){return{notices:n.notices.filter(function(n){return n.key!==e})}})},a=t,v()(i,a)}return h()(n,e),f()(n,[{key:"getTransitionName",value:function(){var e=this.props,n=e.transitionName;return!n&&e.animation&&(n=e.prefixCls+"-"+e.animation),n}},{key:"render",value:function(){var e,n=this,t=this.props,o=this.state.notices.map(function(e){var o=Object(N.a)(n.remove.bind(n,e.key),e.onClose);return x.a.createElement(_.a,l()({prefixCls:t.prefixCls},e,{onClose:o}),e.content)}),i=(e={},s()(e,t.prefixCls,1),s()(e,t.className,!!t.className),e);return x.a.createElement("div",{className:k()(i),style:t.style},x.a.createElement(T.default,{transitionName:this.getTransitionName()},o))}}]),n}(y.Component);j.propTypes={prefixCls:C.a.string,transitionName:C.a.string,animation:C.a.oneOfType([C.a.string,C.a.object]),style:C.a.object},j.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},j.newInstance=function(e,n){function t(e){c||(c=!0,n({notice:function(n){e.add(n)},removeNotice:function(n){e.remove(n)},component:e,destroy:function(){E.a.unmountComponentAtNode(s),i||document.body.removeChild(s)}}))}var o=e||{},i=o.getContainer,r=a()(o,["getContainer"]),s=void 0;i?s=i():(s=document.createElement("div"),document.body.appendChild(s));var c=!1;E.a.render(x.a.createElement(j,l()({},r,{ref:t})),s)},n.a=j},379:function(e,n,t){"use strict";var o=t(21),i=t.n(o),a=t(4),r=t.n(a),s=t(10),c=t.n(s),l=t(5),u=t.n(l),p=t(6),d=t.n(p),f=t(1),m=t.n(f),v=t(9),g=t.n(v),h=t(2),y=t.n(h),x=function(e){function n(){var e,t,o,i;r()(this,n);for(var a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];return t=o=u()(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(s))),o.close=function(){o.clearCloseTimer(),o.props.onClose()},o.startCloseTimer=function(){o.props.duration&&(o.closeTimer=setTimeout(function(){o.close()},1e3*o.props.duration))},o.clearCloseTimer=function(){o.closeTimer&&(clearTimeout(o.closeTimer),o.closeTimer=null)},i=t,u()(o,i)}return d()(n,e),c()(n,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls+"-notice",o=(e={},i()(e,""+t,1),i()(e,t+"-closable",n.closable),i()(e,n.className,!!n.className),e);return m.a.createElement("div",{className:g()(o),style:n.style,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer},m.a.createElement("div",{className:t+"-content"},n.children),n.closable?m.a.createElement("a",{tabIndex:"0",onClick:this.close,className:t+"-close"},m.a.createElement("span",{className:t+"-close-x"})):null)}}]),n}(f.Component);x.propTypes={duration:y.a.number,onClose:y.a.func,children:y.a.any},x.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}},n.a=x},380:function(e,n,t){"use strict";t(31),t(383)},383:function(e,n,t){var o=t(384);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0};i.transform=void 0;t(12)(o,i);o.locals&&(e.exports=o.locals)},384:function(e,n,t){n=e.exports=t(11)(void 0),n.push([e.i,'/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n.ant-message {\n  font-family: "Helvetica Neue For Number", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: fixed;\n  z-index: 1010;\n  width: 100%;\n  top: 16px;\n  left: 0;\n  pointer-events: none;\n}\n.ant-message-notice {\n  padding: 8px;\n  text-align: center;\n}\n.ant-message-notice:first-child {\n  margin-top: -8px;\n}\n.ant-message-notice-content {\n  padding: 10px 16px;\n  border-radius: 4px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  background: #fff;\n  display: inline-block;\n  pointer-events: all;\n}\n.ant-message-success .anticon {\n  color: #52c41a;\n}\n.ant-message-error .anticon {\n  color: #f5222d;\n}\n.ant-message-warning .anticon {\n  color: #faad14;\n}\n.ant-message-info .anticon,\n.ant-message-loading .anticon {\n  color: #1890ff;\n}\n.ant-message .anticon {\n  margin-right: 8px;\n  font-size: 16px;\n  top: 1px;\n  position: relative;\n}\n.ant-message-notice.move-up-leave.move-up-leave-active {\n  animation-name: MessageMoveOut;\n  overflow: hidden;\n  animation-duration: .3s;\n}\n@keyframes MessageMoveOut {\n  0% {\n    opacity: 1;\n    max-height: 150px;\n    padding: 8px;\n  }\n  100% {\n    opacity: 0;\n    max-height: 0;\n    padding: 0;\n  }\n}\n',""])}},[323]);