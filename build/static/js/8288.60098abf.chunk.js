"use strict";(self.webpackChunkBoston_Living=self.webpackChunkBoston_Living||[]).push([[8288,4092],{58288:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var a=n(93433),r=n(74165),i=n(4942),o=n(15861),l=n(1413),c=n(29439),d=n(45987),s=n(72791),u=n(77644),v=n(88141),m=n(61134),f=n(13400),p=n(66948),h=n(15945),_=n(64463),g=n(42495),x=n(9266),y=n(65355),b=n(58300),S=n(94092),w=n(76189),Z=n(80184),j=(0,w.Z)((0,Z.jsx)("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done"),N=["tabValue","handleDelete","tab","setCommonSelectAll","setSelectAll","errors","setValue","trigger","register","control","index","commonSelectAll","watch","frequencyList","retailLongStay","retailShortStay","corporateShortStay","corporateLongStay","setFrequencyList","saveDraft","restMethods","showPreview","selectAll"],L=["field"],I=["onChange"];var B=(0,s.forwardRef)((function(e,t){var n=e.tabValue,w=e.handleDelete,B=e.tab,A=e.setCommonSelectAll,q=e.setSelectAll,C=e.errors,F=e.setValue,T=e.trigger,E=e.register,V=e.control,k=e.index,R=(e.commonSelectAll,e.watch),D=e.frequencyList,M=void 0===D?[]:D,P=e.retailLongStay,z=e.retailShortStay,O=e.corporateShortStay,W=e.corporateLongStay,Y=(e.setFrequencyList,e.saveDraft),$=(e.restMethods,e.showPreview),J=e.selectAll,K=((0,d.Z)(e,N),(0,s.useState)(M)),Q=(0,c.Z)(K,2),U=Q[0],H=(Q[1],(0,m.Dq)({control:V,name:"form.".concat(k,".data")})),X=H.fields,G=H.remove,ee=H.append,te=H.insert;(0,s.useImperativeHandle)(t,(function(){return{handleRowDelete:ne}}),[k]);var ne=function(e){G(e)};(0,s.useEffect)((function(){le()}),[]),(0,s.useEffect)((function(){var e=document.getElementById("addNewService");return e&&e.addEventListener("click",ae),function(){e&&e.removeEventListener("click",ae)}}),[B,n]);var ae=function(){var e,t,a=R("form.".concat(k,".data")),r=null===a||void 0===a?void 0:a[a.length-1],i="SERVICE"===(null===r||void 0===r?void 0:r.itemType)?"services":"amenities",o=null===r||void 0===r?void 0:r.roomType.toLowerCase(),c=document.getElementById("addNewService");"ALL"===(null===c||void 0===c||null===(e=c.attributes)||void 0===e||null===(t=e.selectedFrequency)||void 0===t?void 0:t.value)&&i===n&&o===B&&ee((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)({groupNumber:9999*Math.random()|0,name:"",frequency:"",chargingType:"",rate:""},void 0!==(null===r||void 0===r?void 0:r.retailShortStay)?{retailShortStay:!1}:{}),void 0!==(null===r||void 0===r?void 0:r.retailLongStay)?{retailLongStay:!1}:{}),void 0!==(null===r||void 0===r?void 0:r.corporateShortStay)?{corporateShortStay:!1}:{}),void 0!==(null===r||void 0===r?void 0:r.corporateLongStay)?{corporateLongStay:!1}:{}),{},{itemType:null===r||void 0===r?void 0:r.itemType,propertyId:null===r||void 0===r?void 0:r.propertyId,frequencyId:"",roomType:null===r||void 0===r?void 0:r.roomType,roomTypeId:null===r||void 0===r?void 0:r.roomTypeId}))},re=(0,s.useMemo)((function(){return[{value:"PAID",label:"Paid"},{value:"COMPLIMENTARY",label:"Complimentary"}]}),[]),ie=R("form.".concat(k,".data")),oe=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,a){var o,c,d,s,u,v,m,f,p=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=(p.length>2&&void 0!==p[2]?p[2]:{}).groupNumber,c=void 0===o?0:o,e.next=3,T("form.".concat(k,".data.").concat(t,".").concat(a),{shouldFocus:!0});case 3:d=e.sent,s=R("form.".concat(k,".data.").concat(t)),"services"===n?"service":"amenities",d&&(te(t+1,(r=(0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)({groupNumber:c,name:null,frequency:"",chargingType:"",rate:""},void 0!==(null===s||void 0===s?void 0:s.retailShortStay)?{retailShortStay:!1}:{}),void 0!==(null===s||void 0===s?void 0:s.retailLongStay)?{retailLongStay:!1}:{}),void 0!==(null===s||void 0===s?void 0:s.corporateShortStay)?{corporateShortStay:!1}:{}),void 0!==(null===s||void 0===s?void 0:s.corporateLongStay)?{corporateLongStay:!1}:{}),{},{itemType:null===s||void 0===s?void 0:s.itemType,propertyId:null===s||void 0===s?void 0:s.propertyId,frequencyId:"",roomType:null===s||void 0===s?void 0:s.roomType,roomTypeId:null===s||void 0===s?void 0:s.roomTypeId}),JSON.parse(JSON.stringify(r)))),le()),(u=R("form").find((function(e){return(null===e||void 0===e?void 0:e.bsgp)===B&&(null===e||void 0===e?void 0:e.type)===n})))&&(m=["corporateLongStay","corporateShortStay","retailLongStay","retailShortStay"].filter((function(e){return u[e]})),f=(0,l.Z)({},J),null!==u&&void 0!==u&&null!==(v=u.data)&&void 0!==v&&v.length&&(m.forEach((function(e){var t,a;f[n][B][e]=null===u||void 0===u||null===(t=u.data)||void 0===t?void 0:t.every((function(t){return t[e]}));var r=document.getElementsByName(e);f[n][B][e]||null!==u&&void 0!==u&&null!==(a=u.data)&&void 0!==a&&a.every((function(t){return!t[e]}))?null!==r&&void 0!==r&&r[0]&&(r[0].indeterminate=!1):null!==r&&void 0!==r&&r[0]&&(r[0].indeterminate=!0)})),q((0,l.Z)({},f)),A((function(e){return(0,l.Z)((0,l.Z)({},e),{},(0,i.Z)({},n,(0,l.Z)((0,l.Z)({},e[n]),{},(0,i.Z)({},B,m.every((function(e){return f[n][B][e]}))))))}))));case 9:case"end":return e.stop()}var r}),e)})));return function(t,n){return e.apply(this,arguments)}}(),le=function(){},ce=function(e){var t,n,a,r,i=e.name,o=void 0===i?"":i,c=e.showIcons,s=void 0===c||c,m=e.nestedIndex,p=e.options,h=e.placeholder,_=e.item,y=e.groupNumber;return(0,Z.jsx)(g.default,{name:"form.".concat(k,".data.").concat(m,".").concat(o),control:V,error:null===(t=C.form)||void 0===t||null===(n=t[k])||void 0===n||null===(a=n.data)||void 0===a||null===(r=a[m])||void 0===r?void 0:r[o],rules:{required:!Y,validate:{isRepeated:function(e,t){var n=t.form;if("chargingType"===o){var a,r=null===n||void 0===n||null===(a=n[k])||void 0===a?void 0:a.data;if(null!==r&&void 0!==r&&r.length){var i=null===r||void 0===r?void 0:r.filter((function(t){return t.groupNumber===y&&t.chargingType==e}));if((null===i||void 0===i?void 0:i.length)>1)return(0,b.isRepeated)(i,"frequency")}}}}},messages:{required:"Required",isRepeated:"Not valid"},render:function(e){var t=e.field,n=t.onChange,a=t.ref,r=(t.value,(0,d.Z)(e,L));return(0,Z.jsxs)("div",{className:"d-flex  align-items-center",children:[(0,Z.jsx)(u.default,(0,l.Z)((0,l.Z)({},r),{},{selectRef:a,className:"".concat(x.default.reactselect," ").concat(!s&&x.default.noIcons),isAnimateArrow:!1,options:p,showValue:R("form.".concat(k,".data.").concat(m,".").concat(o)),name:"form.".concat(k,".data.").concat(m,".").concat(o),isSearchable:!1,placeholder:h||"Select",menuPosition:"fixed",handleChange:function(e,t){if(n(e.target.value),"frequency"===o&&(F("form.".concat(k,".data.").concat(m,".frequencyId"),t._id),le()),"chargingType"===o){var a="COMPLIMENTARY"===e.target.value?"NA":"";F("form.".concat(k,".data.").concat(m,".rate"),a)}},value:R("form.".concat(k,".data.").concat(m,".").concat(o))?R("form.".concat(k,".data.").concat(m,".").concat(o)):{value:"",label:""}})),s&&(0,Z.jsx)(f.Z,{className:"".concat(x.default.iconbtn),onClick:function(){return oe(m,o,_)},children:(0,Z.jsx)(v.Z,{className:x.default.circleAdd})})]})}})},de=function(e){var t,a,r,o,c,s=e.name,u=e.nestedIndex,v=e.item,m=e.index,f=e.showError,p=e.saveDraft,_=e.selectedStays,g=R("form.".concat(m,".data")),b=f;null!==_&&void 0!==_&&_.length&&(b=null===_||void 0===_||null===(t=_.every)||void 0===t?void 0:t.call(_,(function(e){var t;return!(null!==g&&void 0!==g&&null!==(t=g[u])&&void 0!==t&&t[e])}))),p&&(b=!1);var S=E("form.".concat(m,".data.").concat(u,".").concat(s),{required:b,validate:{isRepeated:function(){if(null!==g&&void 0!==g&&g.length){var e=null===g||void 0===g?void 0:g.filter((function(e){return(null===e||void 0===e?void 0:e.groupNumber)===(null===v||void 0===v?void 0:v.groupNumber)&&(null===v||void 0===v?void 0:v.frequency)===(null===e||void 0===e?void 0:e.frequency)&&1==(null===e||void 0===e?void 0:e[s])}));return!Boolean((null===e||void 0===e?void 0:e.length)>1)}}}}),w=S.onChange,j=(0,d.Z)(S,I);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(h.default,{name:"form.".concat(m,".data.").concat(u,".").concat(s),customClass:x.default.checkbox,onChange:function(e){if(function(e,t,a,r,o){var c=e.target.checked;t({type:"change",target:{name:a.name,value:c}});var d=document.getElementsByName(r);if(c){var s=ie.every((function(e,t){return e[r]}));s?(d&&d[0]&&(d[0].indeterminate=!1),q((function(e){return(0,l.Z)((0,l.Z)({},e),{},(0,i.Z)({},n,(0,l.Z)((0,l.Z)({},e[n]),{},(0,i.Z)({},B,(0,l.Z)((0,l.Z)({},e[n][B]),{},(0,i.Z)({},r,!0))))))}))):null!==d&&void 0!==d&&d[0]&&(d[0].indeterminate=!0);var u=null===o||void 0===o?void 0:o.every((function(e){return ie.every((function(t){return t[e]}))}));u&&A((function(e){return(0,l.Z)((0,l.Z)({},e),{},(0,i.Z)({},n,(0,l.Z)((0,l.Z)({},e[n]),{},(0,i.Z)({},B,!0))))}))}else{A((function(e){return(0,l.Z)((0,l.Z)({},e),{},(0,i.Z)({},n,(0,l.Z)((0,l.Z)({},e[n]),{},(0,i.Z)({},B,!1))))}));var v=ie.every((function(e,t){return!e[r]}));d&&d[0]&&(d[0].indeterminate=!v),q((function(e){return(0,l.Z)((0,l.Z)({},e),{},(0,i.Z)({},n,(0,l.Z)((0,l.Z)({},e[n]),{},(0,i.Z)({},B,(0,l.Z)((0,l.Z)({},e[n][B]),{},(0,i.Z)({},r,!1))))))}))}}(e,w,j,s,_),null!==_&&void 0!==_&&_.length){var t=R("form.".concat(m,".data"));if(_.map((function(e){setTimeout((function(){null===T||void 0===T||T("form.".concat(m,".data.").concat(u,".").concat(e))}),0)})),null!==t&&void 0!==t&&t.length){var a=function(e){var n;(null===(n=t[e])||void 0===n?void 0:n.groupNumber)===(null===v||void 0===v?void 0:v.groupNumber)&&_.map((function(t){setTimeout((function(){null===T||void 0===T||T("form.".concat(m,".data.").concat(e,".").concat(t))}),0)}))};for(var r in t)a(r)}}},register:j,isChecked:R("form.".concat(m,".data.").concat(u,".").concat(s))}),(0,Z.jsx)(y.default,{error:null===(a=C.form)||void 0===a||null===(r=a[m])||void 0===r||null===(o=r.data)||void 0===o||null===(c=o[u])||void 0===c?void 0:c[s],messages:{required:"Required",isRepeated:"Invalid"},position:"absolute",className:"".concat(x.default["mt--4"])})]})},se=[];return z&&se.push("retailShortStay"),P&&se.push("retailLongStay"),O&&se.push("corporateShortStay"),W&&se.push("corporateLongStay"),(0,Z.jsx)(Z.Fragment,{children:X&&X.length>0&&X.map((function(e,t){var r,i,o,l,c,d,s,u,v,m,h,g,b,N,L,I,A,q=R("form.".concat(k,".data.").concat(t));return(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{className:x.default.service,children:null!==e.name&&(0,Z.jsx)(Z.Fragment,{children:$?(0,Z.jsx)("div",{className:"d-flex align-items-center py-3 p-2 fs-13 fw-500",children:null===e||void 0===e?void 0:e.name}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(p.default,{placeholder:"Enter service",inputClass:x.default.input,errors:null===(r=C.form)||void 0===r||null===(i=r[k])||void 0===i||null===(o=i.data)||void 0===o||null===(l=o[t])||void 0===l?void 0:l.name,onChange:function(e){var t=e.target,n=t.name,a=t.value;F(n,a,{shouldValidate:!0})},register:E("form.".concat(k,".data.").concat(t,".name"),{required:!Y,validate:{dupService:function(e){var n=(0,a.Z)(ie).map((function(e){return e.name&&e.name.toLowerCase()})).filter((function(e,n){return n!==t}));return!e||!n.includes(e.toLowerCase())},spaceValidate:function(e){return!e.startsWith(" ")}}}),value:e.name}),(0,Z.jsx)(y.default,{error:null===(c=C.form)||void 0===c||null===(d=c[k])||void 0===d||null===(s=d.data)||void 0===s||null===(u=s[t])||void 0===u?void 0:u.name,messages:{required:"Required",dupService:"Value already exist",spaceValidate:"Remove Space"}})]})})}),(0,Z.jsx)("td",{style:{maxWidth:"200px"},children:$?(0,Z.jsx)("div",{className:"d-flex align-items-center py-3 p-2  fs-12 fw-500",children:null===e||void 0===e?void 0:e.frequency}):(0,Z.jsxs)(Z.Fragment,{children:[ce({nestedIndex:t,name:"frequency",options:U,placeholder:"Add new frequency",item:e,groupNumber:e.groupNumber})," "]})}),(0,Z.jsx)("td",{children:$?(0,Z.jsx)("div",{className:"d-flex align-items-center py-3 p-2  fs-12 fw-500",children:(A=(null===e||void 0===e?void 0:e.chargingType)||"",A?A.charAt(0).toUpperCase()+A.slice(1).toLowerCase():"")}):(0,Z.jsxs)(Z.Fragment,{children:[ce({nestedIndex:t,showIcons:!1,name:"chargingType",options:re,item:e,groupNumber:e.groupNumber})," "]})}),(0,Z.jsx)("td",{className:"NA"===q.rate?x.default.notapplicable:"",children:"NA"===q.rate?(0,Z.jsx)("div",{children:"NA"}):$?(0,Z.jsx)("div",{className:"d-flex align-items-center py-3 p-2  fs-12 fw-500",children:null===e||void 0===e?void 0:e.rate}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(p.default,{placeholder:"Enter rate",inputClass:x.default.input,errors:null===(v=C.form)||void 0===v||null===(m=v[k])||void 0===m||null===(h=m.data)||void 0===h||null===(g=h[t])||void 0===g?void 0:g.rate,register:E("form.".concat(k,".data.").concat(t,".rate"),{required:!Y,validate:{isZero:function(e){return Y||"0"!==e}}}),type:"number",onKeyDown:S.numberInput,onChange:function(e){var t=e.target,n=t.name,a=t.value;F(n,a,{shouldValidate:!0})}}),(0,Z.jsx)(y.default,{error:null===(b=C.form)||void 0===b||null===(N=b[k])||void 0===N||null===(L=N.data)||void 0===L||null===(I=L[t])||void 0===I?void 0:I.rate,messages:{required:"Required",isZero:"Invalid"}})]})}),z&&(0,Z.jsxs)(Z.Fragment,{children:[" ",$?(0,Z.jsx)("td",{className:"".concat(x.default.padding," align-middle"),children:(0,Z.jsx)("div",{className:"d-flex text-center align-items-center p-1 fs-12 fw-500 ps-5",children:Boolean(null===e||void 0===e?void 0:e.retailShortStay)?(0,Z.jsx)("span",{children:(0,Z.jsx)(j,{})}):(0,Z.jsx)("div",{className:"d-flex text-center align-items-center p-1 fs-12 fw-500 ps-5"})})}):(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)("td",{className:"".concat(x.default.padding," align-middle"),children:de({name:"retailShortStay",nestedIndex:t,item:e,index:k,showError:z,saveDraft:Y,selectedStays:se})})})]}),P&&(0,Z.jsx)(Z.Fragment,{children:$?(0,Z.jsx)("td",{className:"".concat(x.default.padding," align-middle"),children:(0,Z.jsx)("div",{className:"d-flex text-center align-items-center p-1 fs-12 fw-50 ps-5",children:Boolean(null===e||void 0===e?void 0:e.retailLongStay)?(0,Z.jsx)("span",{children:(0,Z.jsx)(j,{})}):(0,Z.jsx)("div",{className:"d-flex text-center align-items-center p-1 fs-12 fw-500 ps-5",children:" "})})}):(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)("td",{className:"".concat(x.default.padding," align-middle"),children:de({name:"retailLongStay",nestedIndex:t,item:e,index:k,showError:P,saveDraft:Y,selectedStays:se})})})}),O&&(0,Z.jsx)(Z.Fragment,{children:$?(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)("td",{className:"".concat(x.default.padding," align-middle"),children:(0,Z.jsx)("div",{className:"d-flex text-center align-items-center p-1 fs-12 fw-500 ps-5",children:Boolean(null===e||void 0===e?void 0:e.corporateShortStay)?(0,Z.jsx)("span",{children:(0,Z.jsx)(j,{})}):(0,Z.jsx)("div",{className:"d-flex text-center align-items-center p-1 fs-12 fw-500 ps-5",children:" "})})})}):(0,Z.jsx)("td",{className:"".concat(x.default.padding," align-middle"),children:de({name:"corporateShortStay",nestedIndex:t,item:e,index:k,showError:O,saveDraft:Y,selectedStays:se})})}),W&&(0,Z.jsxs)(Z.Fragment,{children:[" ",$?(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)("td",{className:"".concat(x.default.padding," align-middle"),children:(0,Z.jsx)("div",{className:"d-flex text-center align-items-center p-1 fs-12 fw-500 ps-5",children:Boolean(null===e||void 0===e?void 0:e.corporateLongStay)?(0,Z.jsx)(j,{}):(0,Z.jsx)("div",{className:"d-flex text-center align-items-center p-1 fs-12 fw-500 ps-5",children:" "})})})}):(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)("td",{className:"".concat(x.default.padding," align-middle"),children:de({name:"corporateLongStay",nestedIndex:t,item:e,index:k,showError:W,saveDraft:Y,selectedStays:se})})})]}),(0,Z.jsx)("td",{className:x.default.action,children:t>0&&!$&&(0,Z.jsx)(f.Z,{className:x.default.iconbtn,onClick:function(){w(n,B,t,e._id,k,q)},children:(0,Z.jsx)("img",{className:x.default.deleteicon,src:_.Z,alt:"delete icon"})})})]},e.id)}))})}));B.displayName="TableBody";var A=(0,s.memo)(B)},94092:function(e,t,n){n.r(t),n.d(t,{experienceValidate:function(){return _},ignoreNegativeValue:function(){return v},maxLengthValidation:function(){return p},minLengthValidation:function(){return h},nameValidation:function(){return s},numberInput:function(){return g},numberInputMax:function(){return x},numberLetterValidation:function(){return f},onlyNumbers:function(){return m},passwordValidation:function(){return u},spaceValidation:function(){return c},validatePIN:function(){return d}});var a=n(72426),r=n.n(a),i=/^(?=[\s\S]*[a-z])(?=[\s\S]*[A-Z])(?=[\s\S]*\d)(?=[\s\S]*[@$!%*?&])[A-Za-z\d@$!%*?& ]{8,}$/,o=/^[a-zA-Z ]+$/,l=/^\d{6}$/,c=function(e){return!e||""!==e.toString().trim()},d=function(e){return l.test(e)},s=function(e){return!e||o.test(e)},u=function(e){return e&&i.test(e)},v=function(e){return e&&e>0},m=function(e){return!e||/^[0-9]+$/.test(e)},f=function(e){return!e||/^[0-9a-zA-Z]+$/.test(e)},p=function(e){return function(t){var n;return!t||(null===(n=String(t))||void 0===n?void 0:n.length)<=e}},h=function(e){return function(t){var n;return!t||(null===(n=String(t))||void 0===n?void 0:n.length)>=e}},_=function(e,t,n,a,i,o){if((null===e||void 0===e?void 0:e.length)>0){var l=null===e||void 0===e?void 0:e.map((function(e){return e&&r()(null===e||void 0===e?void 0:e.passingYear)})).filter(Boolean),c=r().min(l),d=r()().get("year")-r()(c).get("year");if(+t&&d<+t&&n&&a&&i)return n(a,{type:i,shouldFocus:o}),!1}return!0},g=function(e){107!==e.which&&187!==e.which&&38!==e.which&&40!==e.which&&45!==e.which&&69!==e.which&&189!==e.which&&173!==e.which&&110!==e.which&&109!==e.which&&190!==e.which&&46!==e.which||e.preventDefault()},x=function(e){107!==e.which&&187!==e.which&&38!==e.which&&40!==e.which&&45!==e.which&&69!==e.which&&189!==e.which&&173!==e.which&&110!==e.which&&109!==e.which&&190!==e.which&&46!==e.which||e.preventDefault();var t=e.target.value;if(t.length>=3){var n=t.slice(0,2);e.target.value=n}}},9266:function(e,t,n){n.r(t),t.default={authLayout:"servicetable_authLayout__JFNEV","main-container":"servicetable_main-container__ZtMkj",vvip_icon_box:"servicetable_vvip_icon_box__OfC7i",main:"servicetable_main__Z6-4E",mainLayout:"servicetable_mainLayout__5hpZJ","scroll-x":"servicetable_scroll-x__1AF1W","ant-upload-list-none-container":"servicetable_ant-upload-list-none-container__6flz2",timerBox:"servicetable_timerBox__2QkZf",pointer:"servicetable_pointer__fhFD6",timeDisplayBox:"servicetable_timeDisplayBox__QmVBJ",seperateBox:"servicetable_seperateBox__Y875U",seperateBox_one:"servicetable_seperateBox_one__U4pfG",seperateBox_two:"servicetable_seperateBox_two__RV5Sb",seperateBox_three:"servicetable_seperateBox_three__fe2F7",active_box:"servicetable_active_box__Vdwe3",inActive_box:"servicetable_inActive_box__J4u53",smallOk_btn:"servicetable_smallOk_btn__R5ZeA","common-title":"servicetable_common-title__6i4Kc","common-subtitle":"servicetable_common-subtitle__jVq32","common-subtitle1":"servicetable_common-subtitle1__FvCFn","dropdown-menu":"servicetable_dropdown-menu__-7cTN","preview-value":"servicetable_preview-value__ATP2c","preview-value1":"servicetable_preview-value1__D5KCi","preview-value2":"servicetable_preview-value2__IM90S","preview-label":"servicetable_preview-label__Rp4kc","B4-Medium":"servicetable_B4-Medium__odAkF","B4-Semi-bold":"servicetable_B4-Semi-bold__YysXE",input:"servicetable_input__Hrt4W",service:"servicetable_service__WFEiU","B3-Medium":"servicetable_B3-Medium__PYTCF",tableWrap:"servicetable_tableWrap__KSrmc","B3-Semi-bold":"servicetable_B3-Semi-bold__-LMdB","B2-Semi-bold":"servicetable_B2-Semi-bold__woYQA","B1-regular":"servicetable_B1-regular__kIOx8",tooltip:"servicetable_tooltip__gq7f7","capitalize-text":"servicetable_capitalize-text__EhaVB","error-message":"servicetable_error-message__0khwl",table:"servicetable_table__NwPMo",iconbtn:"servicetable_iconbtn__CCIA0",circleAdd:"servicetable_circleAdd__EBPcz",deleteicon:"servicetable_deleteicon__RhwPI",wrapth:"servicetable_wrapth__aNi49",checkbox:"servicetable_checkbox__Tw2R9","mt--4":"servicetable_mt--4__nAhxV",notapplicable:"servicetable_notapplicable__QIz4k",reactselect:"servicetable_reactselect__cewFB",noIcons:"servicetable_noIcons__mlk1l",padding:"servicetable_padding__4XA0k",action:"servicetable_action__ZTILE"}}}]);
//# sourceMappingURL=8288.60098abf.chunk.js.map