webpackJsonp([12],{EzkW:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Dd8w"),r=a.n(n),s=a("BOXn"),o=a.n(s),l=a("LmeB"),i=a.n(l),c=a("f/u0"),d=a("ZXMi"),u={name:"RpcRoutes",components:r()({VAlert:o.a},c,{VDataTable:i.a}),data:function(){return{search:"",rawData:[],pageOpts:[10,25,{text:"All",value:-1}],headers:[{text:"Uri Path",align:"left",sortable:!1,value:"path"},{text:"Method",align:"left",value:"method"},{text:"Route Handler",align:"left",value:"handler"}],routes:[]}},created:function(){this.fetchList()},mounted:function(){},computed:{},methods:{fetchList:function(){var e=this;Object(d.d)().then(function(t){var a=t.data;console.log(a),e.rawData=a,e.routes=a})}}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-subheader",[a("h2",[e._v(e._s(this.$route.name))])]),e._v(" "),a("v-card",[a("v-card-title",[a("v-spacer"),e._v(" "),a("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.routes,search:e.search,"rows-per-page-items":e.pageOpts},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",[e._v(e._s(t.item.original))]),e._v(" "),a("td",[e._v(e._s(t.item.methods))]),e._v(" "),a("td",[a("code",[e._v(e._s(t.item.handler))])])]}}])},[a("template",{slot:"no-data"},[a("v-alert",{attrs:{value:!0,color:"info",icon:"info"}},[e._v("\n          Sorry, nothing to display here :(\n        ")])],1),e._v(" "),a("v-alert",{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[e._v('\n        Your search for "'+e._s(e.search)+'" found no results.\n      ')])],2)],1)],1)},staticRenderFns:[]};var h=a("VU/8")(u,v,!1,function(e){a("d23m")},"data-v-3c88255a",null);t.default=h.exports},d23m:function(e,t){}});
//# sourceMappingURL=12.7fd68a369e53f3b46a73.js.map