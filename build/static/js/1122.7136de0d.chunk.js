"use strict";(self.webpackChunkBoston_Living=self.webpackChunkBoston_Living||[]).push([[1122,8579,5546,389,7459,7798,3487,3469,9335,5706,7049],{38087:function(e,t,a){a(72791);t.Z=a.p+"static/media/approvedTick.f587f8d9b65aae60669ec38dd63990d7.svg"},85098:function(e,t,a){a(72791);t.Z=a.p+"static/media/clearSearchLine.854134f170f81a295373806ff8b8adf7.svg"},95186:function(e,t,a){a(72791);t.Z=a.p+"static/media/greenline.93a1e59524d3d817ba352e302de1aeeb.svg"},45761:function(e,t,a){a(72791);t.Z=a.p+"static/media/leftArrowDisabled.7967fba4db7fefa3eeb1b25ce2f0ecef.svg"},78323:function(e,t,a){a(72791);t.Z=a.p+"static/media/leftArrowEnabled.8143f176ec75efe1f1beed984918c9bf.svg"},33610:function(e,t,a){a(72791);t.Z=a.p+"static/media/redInfo.04b12532f03eca1f0e6d43bae9a83577.svg"},45982:function(e,t,a){a(72791);t.Z=a.p+"static/media/redline.12481e75ede2f1b9a3346db160f3d305.svg"},31902:function(e,t,a){a(72791);t.Z=a.p+"static/media/rightArrowDisabled.0605aabb624178746e81212a9fe877eb.svg"},72398:function(e,t,a){a(72791);t.Z=a.p+"static/media/rightArrowEnabled.b18cfc25dd75ad10753e720deed4e71d.svg"},47937:function(e,t,a){a.r(t);var n=a(1413),r=a(74165),o=a(15861),s=a(29439),i=a(72791),l=a(75546),c=a(65355),d=a(42495),u=a(61134),p=a(4017),f=(a(98055),a(25706)),v=a(1485),y=a(73305),h=a(78018),m=a(94092),x=a(78687),g=a(59220),b=a(67367),S=a(48573),w=a.n(S),j=a(26351),C=a(80184);t.default=function(e){var t,a,S,P,N=e.handleNextTab,D=e.showPreview,Z=e.activeTab,_=e.isPreviewScreen,E=e.childSaveDraftRef,A=(0,u.cI)({mode:"onChange",defaultValues:{shortStayDay:30,shortStay:!1,longStay:!1,isDraft:!1}}),T=A.register,k=A.handleSubmit,I=A.getValues,R=A.setValue,B=A.reset,O=A.control,G=A.resetField,L=A.watch,M=A.formState,F=M.errors,V=M.isDirty,U=A.trigger,Y=A.clearErrors,J=(0,i.useRef)(),q=(0,x.I0)(),Q=(0,x.v9)((function(e){return e.basic.propertyId})),X=(0,i.useState)(!1),K=(0,s.Z)(X,2),H=(K[0],K[1],(0,i.useState)(!1)),z=(0,s.Z)(H,2),W=(z[0],z[1]),$=(0,i.useState)(!1),ee=(0,s.Z)($,2),te=ee[0],ae=ee[1],ne=(0,i.useState)(!1),re=(0,s.Z)(ne,2),oe=re[0];re[1];(0,i.useEffect)((function(){q((0,b.setTabDirty)(V))}),[V]),(0,i.useEffect)((function(){Q&&le(Q)}),[Q]);var se=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,j.getTabStatusDetails)(Q);case 3:if(null===(a=e.sent)||void 0===a||null===(t=a.data)||void 0===t||!t.length){e.next=6;break}return e.abrupt("return",["Room Packages","Service Amenities"].every((function(e){var t;return(null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.findIndex((function(t){return t.tabName===e&&"COMPLETED"==(null===t||void 0===t?void 0:t.tabStatus)})))>=0})));case 6:return e.abrupt("return",!0);case 9:e.prev=9,e.t0=e.catch(0),console.log("e :>> ",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),ie=function(){},le=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var a,o,s,i,l,c,d,u,p,f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.getStayTypeDetails)(t);case 3:200===(a=e.sent).status?(d=null===(o=a.data)||void 0===o?void 0:o.data,u=d&&d.stayTypes&&(null===d||void 0===d||null===(s=d.stayTypes)||void 0===s?void 0:s.find((function(e){return"SHORT_STAY"==e.name})))||{},p=d&&d.stayTypes&&(null===d||void 0===d||null===(i=d.stayTypes)||void 0===i?void 0:i.find((function(e){return"LONG_STAY"==e.name})))||{},B((function(e){return(0,n.Z)((0,n.Z)({},e),{},{shortStay:(null===u||void 0===u?void 0:u.isEnabled)||!1,shortStayDay:(null===u||void 0===u?void 0:u.stayDuration)||30,longStay:(null===p||void 0===p?void 0:p.isEnabled)||!1,longStayDay:0})})),null===J||void 0===J||null===(l=J.current)||void 0===l||null===(c=l.getdefineTypeDetailsData)||void 0===c||c.call(l)):(0,g.Toast)({type:"error",message:null===a||void 0===a||null===(f=a.data)||void 0===f?void 0:f.message}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("e :>> ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(!0);case 2:k(de,(function(e){}))(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),de=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var a,n,o,s,i,l,c,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ae(!0),e.prev=1,o={propertyId:Q,stayTypes:[{name:"SHORT_STAY",stayDuration:t.shortStayDay,stayDurationUnit:"DAY",isEnabled:null===t||void 0===t?void 0:t.shortStay}]},null!==t&&void 0!==t&&t.longStay&&(null===o||void 0===o||o.stayTypes.push({name:"LONG_STAY",stayDuration:0,stayDurationUnit:"DAY",isEnabled:null===t||void 0===t?void 0:t.longStay})),s=null===t||void 0===t?void 0:t.rooms.find((function(e){return e._id&&""!==e._id})),i={propertyId:Q,isDraft:I("isDraft"),types:[],deletedArray:null===t||void 0===t?void 0:t.deletedArray},l=null!==t&&void 0!==t&&t.rooms&&(null===t||void 0===t||null===(a=t.rooms)||void 0===a?void 0:a.length)>0?null===t||void 0===t||null===(n=t.rooms)||void 0===n?void 0:n.map((function(e){return{_id:e._id,roomType:null===e||void 0===e?void 0:e.roomType,roomCategories:[{category:"Retail",shortStay:"Corporate"!=e.chargeType&&!1!==e.shortStay&&(null===e||void 0===e?void 0:e.shortStayRetail),longStay:"Corporate"!=e.chargeType&&!1!==e.longStay&&e.longStayRetail},{category:"Corporate",shortStay:"Retail"!=e.chargeType&&!1!==e.shortStay&&(null===e||void 0===e?void 0:e.shortStayCorporate),longStay:"Retail"!=e.chargeType&&!1!==e.longStay&&e.longStayCorporate}]}})):[],i.types=l,c=!s,e.next=11,(0,h.addPropertyUpdateStayType)(o);case 11:if(200!=e.sent.status){e.next=35;break}return e.next=15,(0,h.addPropertyCreateRoomType)(i,c);case 15:if(d=e.sent,q((0,b.setTabDirty)(!1)),q((0,b.setTabStatus)()),ae(!1),200!=d.status){e.next=33;break}if(ae(!1),I("isDraft")){e.next=32;break}if(!_){e.next=29;break}return e.next=25,se();case 25:e.sent?N(Z,!1,_):N(),e.next=30;break;case 29:N();case 30:e.next=33;break;case 32:Q&&le(Q);case 33:e.next=36;break;case 35:ae(!1);case 36:e.next=41;break;case 38:e.prev=38,e.t0=e.catch(1),ae(!1);case 41:case"end":return e.stop()}}),e,null,[[1,38]])})));return function(t){return e.apply(this,arguments)}}(),ue=function(e,t){var a=I(),r=I("rooms")||[];r.forEach((function(a){a[t]=e,a.roomTypeItem&&a.roomTypeItem.forEach((function(a){a[t]=e}))})),B((0,n.Z)((0,n.Z)({},a),{},{rooms:r}))};return(0,C.jsx)("div",{className:l.default.stayDetailForm,children:D?(0,C.jsxs)(C.Fragment,{children:[" ",(0,C.jsxs)("div",{className:"".concat(l.default.contentPart," px-3"),children:[(0,C.jsx)("div",{className:l.default.stayType,children:(0,C.jsxs)("div",{className:"d-flex py-2",children:[!0===Boolean(I("shortStay"))&&(0,C.jsxs)("div",{className:"row",children:[(0,C.jsx)("div",{className:"col-12 preview-label",children:"Short Stay "}),(0,C.jsx)("div",{className:"col-12 preview-value1",children:"less than / equal to ".concat(I("shortStayDay")," ").concat(Number(I("shortStayDay"))>1?"days":"day")})]}),!0===Boolean(I("longStay"))&&(0,C.jsxs)("div",{className:"row",children:[" ",(0,C.jsx)("div",{className:"col-12 preview-label",children:"Long Stay"})," ",(0,C.jsx)("div",{className:" preview-value1",children:"On monthly basis"})]})]})}),(0,C.jsx)("div",{children:(0,C.jsx)(v.default,{ref:J,control:O,clearErrors:Y,resetField:G,useFieldArray:u.Dq,errors:F,register:T,roomList:null!==(t=I("rooms"))&&void 0!==t?t:[],getValues:I,deletedArray:null!==(a=I("deletedArray"))&&void 0!==a?a:[],reset:B,shortStayFlag:I("shortStay"),longStayFlag:I("longStay"),setValue:R,propertyId:Q,watch:L,stayTypeApiCalled:!!oe,trigger:U,handleScroll:ie,showPreview:D})})]}),(0,C.jsx)("hr",{}),(0,C.jsxs)("div",{className:"d-flex justify-content-end ".concat(l.default.btn," py-2 px-2"),children:[(0,C.jsx)("div",{className:l.default.btnwidth,children:(0,C.jsx)(p.default,{className:"draftBtn",label:"Edit Details ",id:"editBtn",onClick:function(e){N(Z,!0)}})}),(0,C.jsx)("div",{className:l.default.btnwidth,children:(0,C.jsx)(p.default,{className:"submitBtn",label:"Submit",id:"submitBtn",onClick:w()((function(e){N()}),800)})})]})]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("div",{className:"".concat(l.default.contentPart," px-3"),children:(0,C.jsxs)("div",{className:"new-section py-2",children:[(0,C.jsx)("div",{className:l.default.basicTitle,children:(0,C.jsx)("h3",{children:"Define Stay Type"})}),(0,C.jsxs)("div",{className:l.default.stayType,children:[(0,C.jsxs)("div",{className:"d-flex py-2",children:[(0,C.jsxs)("div",{className:"".concat(l.default.stayStyles,"  B4-Medium col-md-1"),children:["Stay Type"," "]}),(0,C.jsxs)("div",{className:"".concat(l.default.stayStyles," d-flex B4-Medium col-md-1"),children:[" ","Stay Duration",(0,C.jsx)("span",{className:"text-danger",children:"*"})]})]}),(0,C.jsxs)("div",{className:"d-flex py-1",children:[(0,C.jsxs)("div",{className:"B3-Semi-bold pt-2 fs-15 col-md-1",children:["Short Stay:"," "]}),(0,C.jsxs)("div",{className:"B3-Medium col-md-3 gap-2",children:[(0,C.jsx)(y.default,{className:"login_input",type:"number",onKeyDown:m.numberInput,value:L("shortStayDay"),name:"shortStayDay",defaultValue:L("shortStayDay"),placeholder:"Enter short stay days",errors:F,prefixText:"less than / equal to",suffixText:"days",register:T("shortStayDay",{required:!0,pattern:/^[0-9\b]+$/,min:1,max:45}),width:"30%",disabled:1!=I("shortStay")||0!=I("longStay")}),(0,C.jsxs)("div",{className:"px-1",children:[" ",(0,C.jsx)(c.default,{error:F.shortStayDay,messages:{required:"Short stay days are required",min:"Short stay should be a minimum 1 day",max:"Short stay should be a maximum 45 days"}})]})]}),(0,C.jsx)("div",{className:"B3-Medium pt-3 col-md-12 gap-1",children:(0,C.jsx)(d.default,{name:"shortStay",control:O,defaultValue:!1,rules:{required:!1===I("longStay")},messages:{required:"Atleast one stay type should be enabled"},render:function(e){var t=e.field,a=t.onChange,r=t.value;return(0,C.jsx)(f.default,{name:"shortStay",value:r,onChange:function(e){a(e),R("shortStay",e),R("shortStayDay",30),function(){var e=I();B((0,n.Z)((0,n.Z)({},e),{},{shortStayDay:"30"}))}(),ue(e,"shortStay"),ue(e,"shortStayRetail"),ue(e,"shortStayCorporate")}})}})})]}),(0,C.jsxs)("div",{className:"d-flex py-4",children:[(0,C.jsx)("div",{className:"B3-Semi-bold col-md-1",children:"Long Stay: "}),(0,C.jsx)("div",{className:"B3-Medium col-md-3",children:" On monthly basis "}),(0,C.jsx)("div",{className:"col",children:(0,C.jsx)("div",{className:"d-flex",children:(0,C.jsx)(d.default,{name:"longStay",control:O,defaultValue:I("longStay")||!1,rules:{required:0==I("shortStay")},render:function(e){var t=e.field,a=t.onChange,n=t.value;return(0,C.jsx)(f.default,{name:"longStay",value:n,onChange:function(e){a(e),R("longStay",e),R("shortStayDay",30),ue(e,"longStay"),ue(e,"longStayRetail"),ue(e,"longStayCorporate")}})}})})})]})]}),(0,C.jsx)("div",{children:(0,C.jsx)(v.default,{ref:J,control:O,clearErrors:Y,resetField:G,useFieldArray:u.Dq,errors:F,register:T,roomList:null!==(S=I("rooms"))&&void 0!==S?S:[],getValues:I,deletedArray:null!==(P=I("deletedArray"))&&void 0!==P?P:[],reset:B,shortStayFlag:I("shortStay"),longStayFlag:I("longStay"),setValue:R,propertyId:Q,watch:L,stayTypeApiCalled:!!oe,trigger:U,handleScroll:ie,showPreview:D})})]})}),(0,C.jsx)("hr",{}),(0,C.jsxs)("div",{className:"d-flex justify-content-end mx-3",children:[" ",(0,C.jsx)(c.default,{icon:!0,error:(null===F||void 0===F?void 0:F.shortStay)&&(null===F||void 0===F?void 0:F.longStay),messages:{required:"Atleast one stay type should be enabled"}})]}),(0,C.jsxs)("div",{className:"d-flex justify-content-end ".concat(l.default.btn," py-2 px-2"),children:[(0,C.jsx)("div",{className:l.default.btnwidth,children:(0,C.jsx)(p.default,{innerref:E,className:"draftBtn",label:_?"Cancel":"Save as Draft",onClick:w()((function(e){e.preventDefault(),_?N(Z,!1,_):(R("isDraft",!0),setTimeout((function(){ce(e)}),500))}),800),disabled:te})}),(0,C.jsx)("div",{className:l.default.btnwidth,children:(0,C.jsx)(p.default,{type:"submit",className:"submitBtn",label:_?"Save Changes":"Save & Proceed",id:"submitBtn",onClick:w()((function(e){e.preventDefault(),R("isDraft",!1),k(de)(e)}),800),disabled:te})})]})]})})}},76065:function(e,t,a){a.r(t);var n=a(74165),r=a(15861),o=a(29439),s=a(64712),i=a(10389),l=a(72791),c=a(47798),d=a(1393),u=a(47937),p=a(93225),f=a(85869),v=a(76751),y=a(17076),h=a(86733),m=a(33469),x=a(64880),g=a(58300),b=a(78687),S=a(7704),w=a(4017),j=a(67367),C=a(13400),P=a(80022),N=a(48573),D=a.n(N),Z=a(97695),_=a(78323),E=a(72398),A=a(45761),T=a(31902),k=a(38087),I=a(33610),R=(a(85098),a(45982),a(95186),a(80184)),B={0:s.default,1:u.default,2:p.default,3:f.default,4:v.default,5:y.default,6:h.default};t.default=function(){var e,t=(0,x.TH)(),a=(0,b.I0)(),s=(0,b.v9)((function(e){return e.basic.propertyId})),u=(0,b.v9)((function(e){return e.basic.propertyName})),p=(0,b.v9)((function(e){return e.basic.propertyStatus})),f=(0,b.v9)((function(e){return e.basic.TotalDraft})),v=(0,b.v9)((function(e){return e.basic.showPendingProperty})),y=new URLSearchParams(t.search),h=y.get("tab")||0,N=null!==(e=y.get("isPreview"))&&void 0!==e?e:null,O=(0,b.v9)((function(e){return e.basic.tabDirty})),G=(0,l.useState)(+h||0),L=(0,o.Z)(G,2),M=L[0],F=L[1],V=(0,l.useState)(!1),U=(0,o.Z)(V,2),Y=U[0],J=U[1],q=(0,l.useState)(!0),Q=(0,o.Z)(q,2),X=Q[0],K=Q[1],H=(0,l.useState)(!1),z=(0,o.Z)(H,2),W=z[0],$=z[1],ee=(0,l.useState)(!1),te=(0,o.Z)(ee,2),ae=te[0],ne=te[1],re=(0,l.useState)(""),oe=(0,o.Z)(re,2),se=oe[0],ie=oe[1],le=(0,l.useState)(!1),ce=(0,o.Z)(le,2),de=ce[0],ue=ce[1],pe=(0,l.useState)([]),fe=(0,o.Z)(pe,2),ve=fe[0],ye=fe[1],he=(0,l.useState)({}),me=(0,o.Z)(he,2),xe=me[0],ge=me[1],be=(0,l.useState)(Number),Se=(0,o.Z)(be,2),we=Se[0],je=Se[1],Ce=(0,l.useState)(1),Pe=(0,o.Z)(Ce,2),Ne=Pe[0],De=Pe[1],Ze=(0,l.useState)(!0),_e=(0,o.Z)(Ze,2),Ee=_e[0],Ae=(_e[1],B[M]),Te=(0,l.useRef)(null);console.log(O,"gettheOutsideDirty"),(0,l.useEffect)((function(){ve.length>0&&ge(ve[Ne-1])}),[Ne,ve]),(0,l.useEffect)((function(){J(!0)}),[M]);var ke=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t,a,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,Z.getPropertyNotificationDetails)(s);case 3:t=e.sent,console.log(null===t||void 0===t?void 0:t.data),200==t.status&&(ye(null===t||void 0===t?void 0:t.data),(null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.length)>1&&(ue(!0),je(null===t||void 0===t||null===(r=t.data)||void 0===r?void 0:r.length))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0,"eee");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){J(X)}),[X]),(0,l.useEffect)((function(){ke()}),[]),(0,l.useEffect)((function(){"undefined"!==typeof window&&$(window.location.pathname.includes("/inventory/add-property/preview"))}),[typeof window]),(0,l.useEffect)((function(){h>=0&&h!=M&&F(+h)}),[h]);var Ie=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===Te||void 0===Te||!Te.current){e.next=4;break}return e.next=3,null===Te||void 0===Te||null===(t=Te.current)||void 0===t?void 0:t.click();case 3:ne(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;if(console.log(O,"gettheDirty"),console.log(N,"isPreviewScreen"),console.log(n,"isPreview"),null!==e){if(O&&!r&&(N&&void 0===n||null==N&&void 0==n))return void(e!==M&&(ne(!0),ie(e)));if(O&&!r)return ne(!0),void ie(e);if(M<6||null!=e&&e<=6){var o="?tab=".concat(null!==e&&void 0!==e?e:M+1);(t||N)&&(o+="&isPreview=true"),g.history.push({pathname:W&&!t||n?"/inventory/add-property/preview":"/inventory/add-property",search:o}),a((0,j.setTabDirty)(!1))}if(6===e&&!0===t){var s="?tab=".concat(e);(t||N)&&(s+="&isPreview=true"),g.history.push({pathname:W&&!t||n?"/inventory/add-property/preview":"/inventory/add-property",search:s}),a((0,j.setTabDirty)(!1))}}else{if(M<6||null!=e&&e<=6){var i="?tab=".concat(null!==e&&void 0!==e?e:M+1);(t||N)&&(i+="&isPreview=true"),g.history.push({pathname:W&&!t||n?"/inventory/add-property/preview":"/inventory/add-property",search:i}),a((0,j.setTabDirty)(!1))}if(6===e&&!0===t){var l="?tab=".concat(e);(t||N)&&(l+="&isPreview=true"),g.history.push({pathname:W&&!t||n?"/inventory/add-property/preview":"/inventory/add-property",search:l}),a((0,j.setTabDirty)(!1))}}},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;if(M<6||null!=e&&e<=6){var r="?tab=".concat(null!==e&&void 0!==e?e:M+1);(t||N)&&(r+="&isPreview=true"),g.history.push({pathname:W&&!t||n?"/inventory/add-property/preview":"/inventory/add-property",search:r}),a((0,j.setTabDirty)(!1))}if(6===e&&!0===t){var o="?tab=".concat(e);(t||N)&&(o+="&isPreview=true"),g.history.push({pathname:W&&!t||n?"/inventory/add-property/preview":"/inventory/add-property",search:o}),a((0,j.setTabDirty)(!1))}},Oe=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a((0,j.setTabDirty)(!1));case 2:return e.next=4,ne(!1);case 4:N?Be(se,!1,!0):Be(se);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(p,"setpropstatus"),console.log(u,"setpropname"),console.log(f,"settotaldraft"),console.log(W,"setshowpreview"),console.log(v,"PendingProperty"),(0,R.jsxs)("div",{style:{overflow:"auto"},children:["REJECTED"==p&&ve.length>0&&(0,R.jsxs)("div",{className:"REJECTED"==(null===xe||void 0===xe?void 0:xe.approvalStatus)?i.default.RejectedNotification:i.default.ApprovedNotification,children:[de&&(0,R.jsxs)("div",{className:i.default.switchBtn,children:[(0,R.jsx)("img",{src:1===Ne?A.Z:_.Z,onClick:function(){return 1!==Ne?De(Ne-1):null}}),(0,R.jsxs)("span",{className:i.default.switchvalue,children:[Ne,"/",we]}),(0,R.jsx)("img",{src:we===Ne?T.Z:E.Z,onClick:function(){return we!==Ne?De(Ne+1):null}})]}),(0,R.jsx)("div",{className:"w-100 ms-4 d-flex justify-content-between my-3",children:(0,R.jsxs)("div",{children:[(0,R.jsx)("img",{src:"REJECTED"==(null===xe||void 0===xe?void 0:xe.approvalStatus)?I.Z:k.Z}),(0,R.jsxs)("span",{className:"REJECTED"==(null===xe||void 0===xe?void 0:xe.approvalStatus)?i.default.rejectedheader:i.default.approvedheader,children:[null===xe||void 0===xe?void 0:xe.notificationText,Ee&&(0,R.jsxs)("p",{className:i.default.viewReason,children:[" ",null===xe||void 0===xe?void 0:xe.message]})]})]})})]}),(0,R.jsx)("div",{className:"cursor-pointer",children:(0,R.jsx)(c.default,{pageName:!f&&"APPROVED"!==p&&"REJECTED"!==p&&""!==u||"APPROVED"==p||"REJECTED"==p&&""!==u||!v&&W?u:W&&Boolean(f)&&"PENDING"==p?"Property Preview":"Add Property",Status:"APPROVED"===p||"REJECTED"===p||"PENDING"===p&&!f,approved:"APPROVED"===p,pending:"PENDING"===p,statusValue:p})}),(0,R.jsx)("span",{className:"".concat(i.default.breadcrumbs),children:"Property List / "}),(0,R.jsx)("span",{className:"".concat(i.default.labelColor),children:!f&&"APPROVED"!==p&&"REJECTED"!==p&&""!==u||"APPROVED"==p||"REJECTED"==p&&""!==u||!v&&W?u:W&&f&&"PENDING"==p?"Property Preview":"Add Property"}),(0,R.jsxs)("div",{className:i.default.card,children:[(0,R.jsx)(d.default,{loaderspin:X,setloaderspin:K,activeTab:M,setActiveTab:F,handleActiveTab:function(e){return Re(e)},showPreview:W,tabDirty:O,isPreviewScreen:N}),Y?(0,R.jsx)(m.default,{}):(0,R.jsx)(Ae,{handleNextTab:Re,showPreview:W,activeTab:M,isPreviewScreen:N,childSaveDraftRef:Te})]}),(0,R.jsx)(S.default,{visible:ae,handleClose:function(){return ne(!1)},children:(0,R.jsxs)("div",{className:"px-2",children:[(0,R.jsx)("div",{className:"d-flex justify-content-end",children:(0,R.jsx)(C.Z,{"aria-label":"close",sx:{position:"absolute",right:8,top:8,borderRadius:"16px",color:function(e){return e.palette.grey[500]}},style:{borderRadius:0},onClick:function(){return ne(!1)},children:(0,R.jsx)(P.Z,{style:{color:"#090909"}})})}),(0,R.jsx)("div",{style:{color:"#1E2528"},className:"py-2",children:"You are trying to navigate to a different page in the middle of adding property."}),N?(0,R.jsx)("div",{style:{color:"#1E2528"},className:"pt-3",children:"Your unsaved changes would be lost!"}):(0,R.jsx)("div",{className:"pt-3",children:"Please choose one option from below."}),(0,R.jsxs)("div",{className:"d-flex w-100 col-12 justify-content-center my-2 mt-5",children:[(0,R.jsx)("div",{className:"col-6 px-2 ",children:(0,R.jsx)(w.default,{className:"cancelBtn w-100 ",label:N?"Continue":"Don't save",onClick:(0,r.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Oe());case 1:case"end":return e.stop()}}),e)})))})}),(0,R.jsx)("div",{className:"col-6 px-2",children:(0,R.jsx)(w.default,{onClick:D()((function(){N?ne(!1):Ie()}),800),className:"submitBtn w-100 ",label:N?"Cancel":"Save as draft"})})]})]})})]})}},7704:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});a(72791);var n=a(47630),r=a(5289),o=a(39157),s=a(57459),i=a(80184),l=(0,n.ZP)(r.Z)((function(e){e.theme;return{"& .MuiDialogContent-root":{padding:"40px"},"& .MuiDialogActions-root":{padding:"21px"}}}));function c(e){var t=e.handleClose,a=e.visible,n=void 0!==a&&a,r=e.children;return(0,i.jsx)(l,{onClose:t,"aria-labelledby":"add-new-property",open:n,maxWidth:"sm",fullWidth:!0,classes:{paper:s.default.contentContainer},children:(0,i.jsx)(o.Z,{dividers:!0,classes:{root:s.default.contentContainer},children:r})})}},47798:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n,r,o=a(72791),s=a(63487),i=["title","titleId"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function d(e,t){var a=e.title,s=e.titleId,d=c(e,i);return o.createElement("svg",l({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},d),a?o.createElement("title",{id:s},a):null,n||(n=o.createElement("path",{d:"M19 12H5",stroke:"#1E2528",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),r||(r=o.createElement("path",{d:"M12 19L5 12L12 5",stroke:"#1E2528",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var u=o.forwardRef(d),p=(a.p,a(58300)),f=a(80184),v=function(e){var t=e.pageName,a=(e.handleBack,e.Status),n=void 0!==a&&a,r=e.statusValue,o=e.approved,i=void 0!==o&&o,l=e.pending,c=void 0!==l&&l;return(0,f.jsxs)("div",{className:"d-flex justify-content-start align-items-center  ".concat(s.default.goback),children:[(0,f.jsx)(u,{onClick:function(){return p.history.push("/inventory")},className:"cursor-pointer",width:30,height:30}),(0,f.jsx)("span",{className:s.default.pageName,children:t}),n&&(0,f.jsx)("div",{className:i?s.default.ApprovedPropertyStatus:c?s.default.PendingPropertyStatus:s.default.RejectedPropertyStatus,children:(0,f.jsx)("span",{className:i?s.default.ApprovedProperty:c?s.default.PendingProperty:s.default.RejectedProperty,children:"REJECTED"==r?"Rejected":"PENDING"==r?"Pending":"Approved"})})]})}},33469:function(e,t,a){a.r(t);a(72791),a(78579),a(69335);var n=a(80184);t.default=function(){return(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"loader-wrapper",children:(0,n.jsxs)("div",{className:"loader spin",children:[(0,n.jsx)("div",{className:"spin__blocker"}),(0,n.jsx)("div",{className:"spin__bottom-left"}),(0,n.jsx)("div",{className:"spin__bottom-right"}),(0,n.jsx)("div",{className:"spin__top-left"})]})})})}},25706:function(e,t,a){a.r(t);var n=a(1413),r=a(7049),o=(a(72791),a(80184));t.default=function(e){var t=e.value,a=e.onChange,s=e.register,i=e.styles,l=void 0===i?{}:i;return(0,o.jsx)("div",(0,n.Z)((0,n.Z)({className:"".concat(r.default.Switch," ").concat(t?r.default.active:""),onClick:function(){return a(!t)},style:l},s),{},{children:(0,o.jsx)("div",{className:"".concat(r.default.Thumb," ").concat(t?r.default.active:"")})}))}},97695:function(e,t,a){a.r(t),a.d(t,{deActivatePropertyList:function(){return d},deletePropertyList:function(){return c},getPropertyListDetails:function(){return l},getPropertyNotificationDetails:function(){return u},readPropertyNotificationDetails:function(){return p}});var n=a(74165),r=a(15861),o=a(31243),s=a(73395),i=a(93151),l=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t,a,r,l,c,d,u,p,f){var v;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Z)({method:"get",url:s.endpoints.propertyList.GET_PROPERTY_LIST,params:{approvalStatus:t,type:a,primaryPOC:r,secondaryPOC:l,area:c,city:d,page:u,name:p,limit:f},headers:{}}).catch(i.default);case 2:return v=e.sent,e.abrupt("return",v);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n,r,o,s,i,l,c){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Z)({method:"delete",url:s.endpoints.propertyList.DELETE_PROPERTY_LIST,params:{id:t},headers:{}}).catch(i.default);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Z)({method:"patch",url:s.endpoints.propertyList.DEACTIVATE_PROPERTY,headers:{},data:t});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Z)({method:"get",url:s.endpoints.propertyList.NOTIFICATION_LIST,params:{propertyId:t},headers:{}}).catch(i.default);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.Z)({method:"post",url:s.endpoints.propertyList.READ_NOTIFICATION,headers:{},data:t}).catch(i.default);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},88551:function(e,t,a){var n=a(76189),r=a(80184);t.Z=(0,n.Z)((0,r.jsx)("path",{d:"M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutlineOutlined")},69335:function(e,t,a){a.r(t),t.default={}},75546:function(e,t,a){a.r(t),t.default={stayDetailForm:"StayDetailCreationForm_stayDetailForm__7HeXR",btn:"StayDetailCreationForm_btn__yypP0",btnWidth:"StayDetailCreationForm_btnWidth__ZZcpE",contentPart:"StayDetailCreationForm_contentPart__s8p1p",stayStyles:"StayDetailCreationForm_stayStyles__qddlL",defineRoom:"StayDetailCreationForm_defineRoom__OClJi",deleteIconOutline:"StayDetailCreationForm_deleteIconOutline__s5fJ7",bsPlusCircleOutline:"StayDetailCreationForm_bsPlusCircleOutline__PS-l5",bsPlusCircleColor:"StayDetailCreationForm_bsPlusCircleColor__uab2l",tableWrap:"StayDetailCreationForm_tableWrap__RfLbI",table:"StayDetailCreationForm_table__mW1p+"}},10389:function(e,t,a){a.r(t),t.default={card:"Inventory_card__gLnIu",labelColor:"Inventory_labelColor__4x1pC",breadcrumbs:"Inventory_breadcrumbs__EXBPg",RejectedNotification:"Inventory_RejectedNotification__HrHmt",ApprovedNotification:"Inventory_ApprovedNotification__q6K1C",rejectedheader:"Inventory_rejectedheader__5270D",viewReason:"Inventory_viewReason__DUZfW",approvedheader:"Inventory_approvedheader__LMjI9",switchBtn:"Inventory_switchBtn__89iuh",switchvalue:"Inventory_switchvalue__E5FUh",ViewResonbtn:"Inventory_ViewResonbtn__4cHJV"}},57459:function(e,t,a){a.r(t),t.default={dialogcontent:"commonModal_dialogcontent__42LUD",contentContainer:"commonModal_contentContainer__SkwNx",dialogcontentDesc:"commonModal_dialogcontentDesc__RwWZN",buttongroup:"commonModal_buttongroup__PFAOx",cancelBtn:"commonModal_cancelBtn__e4JEE",deleteBtn:"commonModal_deleteBtn__feXGL",reasonContent:"commonModal_reasonContent__h2W6M",reasonDescription:"commonModal_reasonDescription__D88OA",reasonlabel:"commonModal_reasonlabel__mAsjO",closeIcon:"commonModal_closeIcon__dI7Hm"}},63487:function(e,t,a){a.r(t),t.default={goback:"GoBack_goback__Z+3xr",pageName:"GoBack_pageName__VExOW",ApprovedPropertyStatus:"GoBack_ApprovedPropertyStatus__kUgfT",RejectedPropertyStatus:"GoBack_RejectedPropertyStatus__0NpkU",PendingPropertyStatus:"GoBack_PendingPropertyStatus__gOxJ5",ApprovedProperty:"GoBack_ApprovedProperty__qA0QA",RejectedProperty:"GoBack_RejectedProperty__4D9v4",PendingProperty:"GoBack_PendingProperty__jxPoU"}},7049:function(e,t,a){a.r(t),t.default={Switch:"Toggle_Switch__rFDje",Thumb:"Toggle_Thumb__Txx0M",active:"Toggle_active__xGvf0"}},78579:function(e){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=1122.7136de0d.chunk.js.map