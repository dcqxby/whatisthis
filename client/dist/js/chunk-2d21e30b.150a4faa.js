(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e30b"],{d504:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),n("el-button",{attrs:{type:"primary",round:""},on:{click:e.submit}},[e._v("主要按钮")]),e.isShowHref?n("el-link",{attrs:{href:e.href}},[e._v("分享链接")]):e._e()],1)])},r=[],i=n("bc3a"),o=n.n(i),c={name:"Index",data:function(){return{text:"",href:"",isShowHref:!1}},methods:{submit:function(){var e=this;o()({url:"api/create_article",method:"POST",data:{text:this.text,date:Date.now()}}).then((function(t){console.log(t),e.href=t.data.href,e.isShowHref=!0}))}}},l=c,s=n("2877"),u=Object(s["a"])(l,a,r,!1,null,"31cfba92",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d21e30b.150a4faa.js.map