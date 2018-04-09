webpackJsonp([2],{"2Z/x":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("4YfN"),i=s.n(n),a=s("W4j8"),l=s.n(a),r=s("zg1k"),o=s.n(r),u=s("cMp6"),c=s.n(u),h=s("KatZ"),d=s("TVG1"),v={name:"web-socket",components:i()({VAlert:l.a,VAvatar:o.a,VBtnToggle:c.a},h),data:function(){return{ws:null,wsUrl:"",loading:!1,locWsUrl:"",alertStat:!1,alertMsg:"",alertType:"info",logHeartbeat:!1,message:"",messages:[{type:1,msg:"send example",date:"2018-03-23 12:45:34"},{type:2,msg:"receive example",date:"2018-03-23 12:45:44"}],urlHistories:[],defaultUrls:["wss://echo.websocket.org/"],reqData:[],resData:[]}},created:function(){var t=(window.location.protocol.indexOf("s:")>1?"wss://":"ws://")+window.location.host;this.wsUrl="wss://echo.websocket.org/",this.locWsUrl=t,this.defaultUrls.push(t)},mounted:function(){},computed:{wsUrlIsEmpty:function(){return""===this.wsUrl},isConnected:function(){return null!==this.ws}},methods:{connect:function(){if(this.ws)this.alert("websocket server has been connected!");else{var t=this,e=void 0;t.alert(),this.ws=new WebSocket(this.wsUrl),this.ws.onerror=function(e){console.log("connect failed!"),t.alert("connect to server failed! Server url is "+t.wsUrl)},this.ws.onopen=function(s){console.log("connected",s),t.alert("successfully connected to the server"),e=setTimeout(function(){t.sendMessage("@heartbeat",!1)},2e4)},this.ws.onmessage=function(e){console.log("received",e),t.saveMessage(e.data,2,1)},this.ws.onclose=function(){console.log("disconnected"),clearTimeout(e),t.ws=null,t.alert("The connection to the server has been disconnected")}}},disconnect:function(){this.ws&&this.ws.close()},send:function(){this.sendMessage(d.b.trim(this.message)),this.message=""},sendMessage:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.alert(),t?this.ws?(this.ws.send(t),e&&this.saveMessage(t)):this.alert("please connect to websocket server before send message!","error"):this.alert("Message to send cannot be empty!","error")},saveMessage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.messages.push({type:e,isHeart:s,msg:t,date:d.b.formatDate.format(new Date,"yyyy-MM-dd hh:mm:ss")})},clearMessages:function(){this.messages=[]},alert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";if(!t)return this.alertMsg="",void(this.alertStat=!1);this.alertMsg=d.b.ucFirst(t),this.alertStat=!0,this.alertType=e}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-subheader",[s("h2",[t._v(t._s(this.$route.name))])]),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-alert",{attrs:{type:t.alertType,dismissible:"",outline:""},model:{value:t.alertStat,callback:function(e){t.alertStat=e},expression:"alertStat"}},[t._v("\n      "+t._s(t.alertMsg)+"\n    ")])],1),t._v(" "),s("v-flex",{attrs:{"d-flex":"",xs12:"",md4:""}},[s("v-card",{attrs:{color:"lime lighten-5"}},[s("v-card-title",[s("v-icon",[t._v("cast")]),t._v("  Operation")],1),t._v(" "),s("v-divider"),t._v(" "),s("v-card-text",[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"wsUrl",label:"eg "+t.locWsUrl,"single-line":"",required:"",hint:"websocket server url. eg wss://echo.websocket.org/","persistent-hint":""},model:{value:t.wsUrl,callback:function(e){t.wsUrl=e},expression:"wsUrl"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{outline:"",disabled:t.wsUrlIsEmpty,color:"info"},on:{click:t.connect}},[t._v("\n              Connect\n            ")]),t._v(" "),s("v-btn",{attrs:{disabled:!t.isConnected,color:"warning",outline:""},on:{click:t.disconnect}},[t._v("\n              Disconnect\n            ")])],1)],1),t._v(" "),s("v-text-field",{attrs:{name:"message",label:"Your Message",textarea:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{color:"green",large:"",dark:""},on:{click:t.send}},[s("v-icon",[t._v("send")]),t._v("   Send\n        ")],1)],1)],1)],1),t._v(" "),s("v-flex",{attrs:{"d-flex":"",xs12:"",md8:""}},[s("v-card",{attrs:{color:"grey lighten-5"}},[s("v-card-title",[s("v-icon",[t._v("sms")]),t._v("  Messages")],1),t._v(" "),s("v-divider"),t._v(" "),s("v-card-text",{staticClass:"msg-box"},t._l(t.messages,function(e,n){return s("v-layout",{key:n,attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[1===e.type?s("v-avatar",{staticClass:"teal",attrs:{size:"25px"}},[s("span",{staticClass:"white--text headline"},[t._v("C")])]):s("v-avatar",{staticClass:"blue",attrs:{size:"25px"}},[s("span",{staticClass:"white--text headline"},[t._v("S")])]),t._v(" "),s("span",{staticClass:"blue--text"},[t._v(" "+t._s(e.date))]),t._v(" "),s("div",[s("pre",{staticClass:"px-2 py-2 my-1 ml-4 msg-detail"},[t._v(t._s(e.msg))])])],1)],1)})),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{type:"error",icon:""},on:{click:t.clearMessages}},[s("v-icon",[t._v("delete")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var p=s("Z0/y")(v,f,!1,function(t){s("dd+u")},"data-v-6a78d18a",null);e.default=p.exports},"9Z/9":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),s("Wg5x");var n=l(s("arhX")),i=l(s("jdFS")),a=s("VdVE");function l(t){return t&&t.__esModule?t:{default:t}}e.default={name:"v-btn-toggle",model:{prop:"inputValue",event:"change"},mixins:[n.default,i.default],props:{inputValue:{required:!1},mandatory:Boolean,multiple:Boolean},computed:{classes:function(){return{"btn-toggle":!0,"btn-toggle--selected":this.hasValue,"theme--light":this.light,"theme--dark":this.dark}},hasValue:function(){return this.multiple&&this.inputValue.length||!this.multiple&&null!==this.inputValue&&void 0!==this.inputValue}},watch:{inputValue:{handler:function(){this.update()},deep:!0}},methods:{isSelected:function(t){var e=this.getValue(t);return this.multiple?this.inputValue.includes(e):this.inputValue===e},updateValue:function(t){var e=this.getValue(t);if(!this.multiple){if(this.mandatory&&this.inputValue===e)return;return this.$emit("change",this.inputValue===e?null:e)}var s=this.inputValue.slice(),n=s.indexOf(e);if(n>-1){if(this.mandatory&&1===s.length)return;s.length>=1&&s.splice(n,1)}else s.push(e);this.$emit("change",s)},updateAllValues:function(){if(this.multiple){for(var t=[],e=0;e<this.buttons.length;++e){var s=this.getValue(e);-1!==this.inputValue.indexOf(s)&&t.push(s)}this.$emit("change",t)}}},created:function(){this.multiple&&!Array.isArray(this.inputValue)&&(0,a.consoleWarn)("Model must be bound to an array if the multiple property is true.",this)},render:function(t){return t("div",{class:this.classes},this.$slots.default)}}},Wg5x:function(t,e){},arhX:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("6Kpo"),i=s("VdVE");e.default={name:"button-group",mixins:[(0,n.provide)("buttonGroup")],data:function(){return{buttons:[],listeners:[],isDestroying:!1}},watch:{buttons:"update"},methods:{getValue:function(t){return null!=this.buttons[t].value?this.buttons[t].value:null!=this.buttons[t].$el.value&&""!==this.buttons[t].$el.value?this.buttons[t].$el.value:t},update:function(){for(var t=[],e=0;e<this.buttons.length;e++){var s=this.buttons[e].$el,n=this.buttons[e];s.removeAttribute("data-only-child"),this.isSelected(e)?(!n.to&&(n.isActive=!0),t.push(e)):!n.to&&(n.isActive=!1)}1===t.length&&this.buttons[t[0]].$el.setAttribute("data-only-child",!0),this.ensureMandatoryInvariant(t.length>0)},register:function(t){var e=this.buttons.length;this.buttons.push(t),this.listeners.push(this.updateValue.bind(this,e)),t.$on("click",this.listeners[e])},unregister:function(t){if(this.isDestroying){var e=this.buttons.indexOf(t);-1!==e&&t.$off("click",this.listeners[e])}else this.redoRegistrations(t)},redoRegistrations:function(t){for(var e=0,s=[],n=0;n<this.buttons.length;++n){var i=this.buttons[n];i!==t&&(s.push(i),e+=Boolean(this.isSelected(n))),i.$off("click",this.listeners[n])}this.buttons=[],this.listeners=[];for(var a=0;a<s.length;++a)this.register(s[a]);this.ensureMandatoryInvariant(e>0),this.updateAllValues&&this.updateAllValues()},ensureMandatoryInvariant:function(t){this.mandatory&&!t&&(this.listeners.length?this.listeners[0]():(0,i.consoleWarn)("There must be at least one v-btn child if the mandatory property is true.",this))}},mounted:function(){this.update()},beforeDestroy:function(){this.isDestroying=!0}}},cMp6:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,i=s("9Z/9"),a=(n=i)&&n.__esModule?n:{default:n};a.default.install=function(t){t.component(a.default.name,a.default)},e.default=a.default},"dd+u":function(t,e){}});
//# sourceMappingURL=2.ab4859f603828daef1f8.js.map