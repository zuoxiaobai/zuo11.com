(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216d15"],{c3a0:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{margin:"100px 30%"}},[n("div",[e._v("alreadyCheck: "+e._s(e.alreadyCheck))]),e.alreadyCheck?n("div",[e._v("已经点击了同意，可以查看内容")]):n("div",[e._v(" 首次进入，没有点同意，不能查看内容，用于协议确定。每次登录都需要重新提示 "),n("button",{on:{click:e.confirmHandle}},[e._v("同意")])])])},o=[];function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}var l=function(){function e(){r(this,e)}return i(e,null,[{key:"init",value:function(e){var t="TEST_tempEmit";window.addEventListener("storage",(function(n){if(console.log(n),n.key===t)console.log("接收到新tab页打开时触发的消息"),localStorage.setItem("sessionStorage",JSON.stringify(sessionStorage)),localStorage.removeItem("sessionStorage");else if("sessionStorage"===n.key&&(console.log("新tab页接收到老tab页，设置的localStorage，接收并删除",localStorage.getItem("sessionStorage")),null!==n.newValue)){var a=JSON.parse(n.newValue);for(var o in a)sessionStorage.setItem(o,a[o]);"function"===typeof e&&e()}})),sessionStorage.length||localStorage.setItem(t,Date.now())}}]),e}(),c=l,u={data:function(){return{alreadyCheck:!1}},created:function(){var e=this;this.alreadyCheck="true"===sessionStorage.getItem("TEST_alreadyCheck"),c.init((function(){e.alreadyCheck="true"===sessionStorage.getItem("TEST_alreadyCheck")}))},methods:{confirmHandle:function(){this.alreadyCheck=!0,sessionStorage.setItem("TEST_alreadyCheck","true")}}},f=u,d=n("2877"),g=Object(d["a"])(f,a,o,!1,null,null,null);t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d216d15.191ff5cb.js.map