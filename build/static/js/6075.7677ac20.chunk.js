"use strict";(self.webpackChunkBoston_Living=self.webpackChunkBoston_Living||[]).push([[6075,8055],{98055:function(e,n,t){t.r(n),t.d(n,{addQuery:function(){return c},appendQuery:function(){return u},convertStringToObject:function(){return h},dateFormat:function(){return _},displayImg:function(){return f},generateQuery:function(){return a},generateSequence:function(){return y},generateURLQuery:function(){return i},getSNo:function(){return l},getUrlParameter:function(){return d},replaceQuery:function(){return g},scrollTop:function(){return s},sleep:function(){return v}});var o=t(1413),r=t(58300),c=function(e,n){if(!e)return"";["page","limit","search","token","sortOut","status"].map((function(t){e.hasOwnProperty(t)&&"object"!=typeof e[t]?n.query.hasOwnProperty(t)&&(n.addQuery={key:t,payload:e[t]}):e[t]&&Object.keys(e[t]).map((function(o){n.query.hasOwnProperty(o)&&(n.addQuery={key:o,payload:e[t][o]})}))}))},a=function(e){var n="";return e.hasOwnProperty("url_id")&&(n="/".concat(e.url_id)),n+Object.keys(e).reduce((function(n,t,o,r){return""==e[t]||null==e[t]||"url_id"==t||null!==e[t]&&""==e[t].toString().trim()?n:n+"".concat(0!=o?"&":"?").concat(t,"=").concat(e[t])}),"")},l=function(e,n){e.totalPages;var t=e.page,o=void 0===t?1:t,r=e.chunk;return parseInt((o-1)*r)+n+1},u=function(e){r.history.push({search:i(r.history.location.search,e)})},i=function(e,n){return n.reduce((function(e,n){var t=n.label,o=n.value;return m(o)?p(e,t,o):b(e,t)}),e)},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"content-page",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"getElementById",t=document[n](e);"getElementById"!==n&&(t=t[0]),t&&t.scrollTo&&t.scrollTo({top:0,behavior:"smooth"})},d=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))},f=function(e){return"object"===typeof e?URL.createObjectURL(e):e},m=function(e){return""!==e&&null!==e&&void 0!==e},p=function(e,n,t){var o=new RegExp("([?&])"+n+"=.*?(&|$)","i"),r=-1!==e.indexOf("?")?"&":"?";return e.match(o)?e.replace(o,"$1"+n+"="+t+"$2"):e+r+n+"="+t},b=function(e,n){var t=e.split("?");if(t.length>=2){for(var o=encodeURIComponent(n)+"=",r=t[1].split(/[&;]/g),c=r.length;c-- >0;)-1!==r[c].lastIndexOf(o,0)&&r.splice(c,1);return t[0]+(r.length>0?"?"+r.join("&"):"")}return e},g=function(e){r.history.replace({search:i(r.history.location.search,e)})},h=function(e){try{if(e){var n=e.substring(1),t=JSON.parse('{"'+decodeURI(n).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}');return(0,o.Z)({filter:"",search:"",page:1,field:"",orderBy:""},t)}return{search:"",page:1,field:"",orderBy:"",filter:""}}catch(r){console.log(r,"d4sds4d")}},_=function(e,n){var t=new Date(e),o=t.getDate(),r=o<10?"0"+o:o,c=t.getMonth()+1,a=c<10?"0"+c:c,l=t.getFullYear();return"dd-mm-yyyy"===n?r+"-"+a+"-"+l:"yyyy-mm-dd"===n?l+"-"+a+"-"+r:"yyyy/mm/dd"===n?l+"/"+a+"/"+r:l+"-"+a+"-"+r},v=function(e){return new Promise((function(n){return setTimeout(n,e)}))},y=function(e){var n,t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2?arguments[2]:void 0,c=[];if(!o)return{endValue:t,inBetweenSequence:[]};var a=function e(n){if(!n)return"A";var t=n.slice(-1),o=n.slice(0,-1);return console.log(o),console.log(t),"Z"===t.toUpperCase()?e(o)+"A":String(o+String.fromCharCode(t.charCodeAt(0)+1)).toUpperCase()};switch(e.toUpperCase()){case"ALPHANUMERIC":var l=parseInt(null===(n=o.match(/\d+$/))||void 0===n?void 0:n[0],10);t=l+r;for(var u=l;u<=t;u++)c.push(String(o.replace(/\d+$/,u)).toUpperCase());t=String(o.replace(/\d+$/,t)).toUpperCase();break;case"ALPHABETIC":for(var i=o.toUpperCase(),s=0;s<=r;s++)c.push(i),console.log(r),t=i,i=a(i);console.log(i),console.log("ALPHABETIC",t,o,r);break;case"NUMERIC":t=+o+ +r,console.log("NUMERIC",t,o,r);for(var d=+o;d<=t;d++)c.push(d.toString());break;default:t=o}return{endValue:t,inBetweenSequence:c}}},81888:function(e,n,t){t.r(n);t(72791);var o=t(21802),r=t(80184);n.default=function(e){var n=e.field,t=(e.fieldName,e.register,e.watch,e.control,e.isLast),c=e.showBedColumn,a=e.isSelected,l=e.isFullRoom,u=e.unitSequence,i=e.isCommonfield;return(0,r.jsxs)("tr",{style:{position:"relative"},children:[(0,r.jsx)("td",{style:{width:"146.5px",height:"45px",verticalAlign:"baseline"},className:"".concat(c?"":"".concat(o.default.bg_color_accent," border-0")," ").concat(t?"border-bottom-0":""," ").concat(a?o.default.bg_color_purple:""),children:c&&(0,r.jsx)("input",{className:"".concat(o.default.tableInput," ").concat(a?o.default.bg_color_purple:""),value:n.bedNumber,type:"text",readOnly:!0})}),!i&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("td",{style:{height:"50px",verticalAlign:"baseline"},className:"".concat(o.default.bg_color_accent," ").concat(t?"border-bottom-0":""," ").concat(a?o.default.bg_color_purple:""),children:(0,r.jsx)("input",{className:"".concat(o.default.tableInput," ").concat(o.default.bg_color_accent," ").concat(a?o.default.bg_color_purple:""),value:n.unitSequence,readOnly:!0})}),l&&(0,r.jsx)("div",{className:o.default.unit_sequence,style:{left:c?146.5:0},children:u})]})]})}},61383:function(e,n,t){t.r(n);var o=t(66948),r=t(98055),c=t(72791),a=t(21802),l=t(80184);n.default=function(e){e.field;var n=e.register,t=e.fieldName,u=e.watch,i=e.setValue,s=e.isSelected,d=e.sequence,f=(e.fields,u("".concat(t,".numberOfBeds"))),m=u("bedNumberType"),p=u("sequenceFormat");return(0,c.useEffect)((function(){if(console.log("HIT in NumberOfBedsCell",f),"N/A"!=f&&f>0){console.log("HIT in NumberOfBedsCell IFFFF",f);var e=function(){if(p&&m){var e,n=(0,r.generateSequence)(m,p,+f-1);if(null!==n&&void 0!==n&&null!==(e=n.inBetweenSequence)&&void 0!==e&&e.length)return null===n||void 0===n?void 0:n.inBetweenSequence}return[]}(),n=Array.from({length:f},(function(n,t){return{bedNumber:e[t],unitSequence:"".concat(d,"-").concat(e[t])}}));i("".concat(t,".beds"),n)}else console.log("HIT in NumberOfBedsCell ELSE",f),i("".concat(t,".beds"),[{bedNumber:"N/A"!=f?"":"-",unitSequence:""}])}),[f]),(0,l.jsx)("td",{style:{width:"146.5px",verticalAlign:"baseline"},className:"border-bottom-0 ".concat(s?a.default.bg_color_purple:""),children:(0,l.jsx)(o.default,{type:"SHARING"!==u("".concat(t,".occupancy"))?"text":"number",style:{border:"none",outline:"none",padding:"14px 21px"},name:"".concat(t,".numberOfBeds"),className:s?a.default.bg_color_purple:"",placeholder:"Enter number",readOnly:"SHARING"!==u("".concat(t,".occupancy")),register:n("".concat(t,".numberOfBeds"),{pattern:/^(?!\s*$).+/,validate:function(e,n){return!!n.isDraft||!!e}})})})}},92149:function(e,n,t){t.r(n);t(72791);var o=t(61383),r=t(81888),c=t(61134),a=t(80184);n.default=function(e){var n=e.field,t=e.register,l=e.fieldName,u=e.watch,i=e.setValue,s=e.control,d=e.isLast,f=e.showBedColumn,m=e.isSelected,p=e.sequence,b=e.isCommonfield,g=(0,c.Dq)({control:s,name:"".concat(l,".beds")}).fields,h=u("".concat(l,".unitSequence")),_=u("".concat(l,".occupancy"));return(0,a.jsxs)("tr",{children:[(0,a.jsx)(o.default,{register:t,field:n,fieldName:l,setValue:i,watch:u,isLast:d,isSelected:m,sequence:p,fields:g}),(0,a.jsx)("td",{colSpan:b?1:2,className:d?"border-bottom-0":"",children:g.map((function(e,n){return(0,a.jsx)(r.default,{register:t,fieldName:"".concat(l,".beds.").concat(n),field:e,watch:u,isLast:g.length-1===n,showBedColumn:f,isSelected:m,isFullRoom:"FULL_ROOM"===_,unitSequence:h,isCommonfield:b})}))})]})}},8125:function(e,n,t){t.r(n);var o=t(1413),r=t(45987),c=t(42495),a=t(77644),l=t(72791),u=t(80184),i=["field"];n.default=function(e){e.field;var n=e.control,t=e.fieldName,s=e.setValue,d=e.watch,f=e.sequence,m=e.isCommonfield,p=d("".concat(t,".occupancy")),b=d("".concat(t,".numberOfBeds")),g=d("".concat(t,".beds"));return(0,l.useEffect)((function(){"FULL_ROOM"===p&&(s("".concat(t,".numberOfBeds"),"N/A"),s("".concat(t,".beds"),[{bedNumber:"-",unitSequence:""}]),s("".concat(t,".unitSequence"),"".concat(f,"-0"))),""===p&&(s("".concat(t,".numberOfBeds"),""),s("".concat(t,".beds"),[{bedNumber:"",unitSequence:""}]),s("".concat(t,".unitSequence"),"")),"SHARING"===p&&("N/A"===b?s("".concat(t,".numberOfBeds"),""):b>0&&g.length!=b&&s("".concat(t,".beds"),[{bedNumber:"",unitSequence:""}]),s("".concat(t,".unitSequence"),""))}),[p]),(0,u.jsx)(c.default,{name:"".concat(t,".occupancy"),control:n,rules:{required:!0},messages:{required:"Occupancy is required"},render:function(e){var n=e.field,c=n.onChange,l=(n.value,(0,r.Z)(e,i));return(0,u.jsx)(a.default,(0,o.Z)((0,o.Z)({},l),{},{placeholder:"Select",customStyle1:!0,menuPosition:m?"absolute":"fixed",options:[{label:"Full Room",value:"FULL_ROOM"},{label:"Sharing",value:"SHARING"}],value:d("".concat(t,".occupancy")),name:"".concat(t,".occupancy"),isMulti:!1,handleChange:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.value;n.name;c(t)}}))}})}},4703:function(e,n,t){t.r(n);t(72791);var o=t(21802),r=t(80184);n.default=function(e){var n=e.field,t=e.isSelected;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("input",{className:"".concat(t?o.default.bg_color_purple:""," ").concat(o.default.tableInput),value:n.roomNumber,type:"text",readOnly:!0})})}},25829:function(e,n,t){t.r(n);t(72791);var o=t(8125),r=t(4703),c=t(92149),a=t(21802),l=t(80184);n.default=function(e){var n=e.field,t=e.fieldName,u=e.register,i=e.watch,s=e.control,d=e.index,f=e.setValue,m=e.isLast,p=e.showBedColumn,b=e.isSelected,g=e.sequence,h=e.isCommonfield;return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{style:{width:"146.5px",verticalAlign:"baseline"},className:"".concat(b?a.default.bg_color_purple:""," ").concat(m?"border-bottom-0":""),children:(0,l.jsx)(r.default,{field:n,fieldName:"".concat(t,".").concat(d),register:u,watch:i,isSelected:b})}),(0,l.jsx)("td",{style:{width:"147px",verticalAlign:"baseline"},className:"".concat(b?a.default.bg_color_purple:""," ").concat(m?"border-bottom-0":""),children:(0,l.jsx)(o.default,{control:s,field:n,fieldName:"".concat(t,".").concat(d),register:u,setValue:f,watch:i,isSelected:b,sequence:"".concat(g,"-").concat(n.roomNumber),isCommonfield:h})}),(0,l.jsx)("td",{colSpan:h?2:3,className:"".concat(b?a.default.bg_color_purple:""," ").concat(m?"border-bottom-0":""),children:(0,l.jsx)(c.default,{register:u,field:n,fieldName:"".concat(t,".").concat(d),setValue:f,watch:i,control:s,isLast:m,showBedColumn:p,isSelected:b,sequence:"".concat(g,"-").concat(n.roomNumber),isCommonfield:h})})]})}},6075:function(e,n,t){t.r(n);var o=t(93433),r=t(66948),c=t(98055),a=t(72791),l=t(61134),u=t(15945),i=t(21802),s=t(25829),d=t(80184);n.default=function(e){var n=e.key,t=e.fieldName,f=e.register,m=e.watch,p=e.setValue,b=e.control,g=e.setSelectedFlats,h=void 0===g?function(){}:g,_=e.showExtendedColumns,v=e.showBedColumn,y=e.selectedFlats,x=void 0===y?[]:y,N=e.isCommonfield,S=m("".concat(t,".numberOfRooms")),j=m("".concat(t,".rooms")),w=m("roomNumberType"),C=m("roomFormat"),q=m("".concat(t,".flatName")),R=(0,l.Dq)({control:b,name:"".concat(t,".rooms")}),O=R.fields,B=R.append,T=R.remove,A=function(){if(C&&w){var e,n=(0,c.generateSequence)(w,C,S);if(null!==n&&void 0!==n&&null!==(e=n.inBetweenSequence)&&void 0!==e&&e.length)return null===n||void 0===n?void 0:n.inBetweenSequence}return[]};return(0,a.useEffect)((function(){if(S>0)if((null===j||void 0===j?void 0:j.length)>0&&S>0){if((null===j||void 0===j?void 0:j.length)!=S){var e=S-(null===j||void 0===j?void 0:j.length);if(e>0){var n=A(),o=Array.from({length:e},(function(e,t){return{roomNumber:n[t+(null===j||void 0===j?void 0:j.length)],occupancy:"",numberOfBeds:"",beds:[{bedNumber:"",unitSequence:""}],unitSequence:""}}));B(o)}if(e<0)for(var r=Math.abs(e);r>=0;r--)T(+S+r)}}else{var c=A(),a=Array.from({length:S},(function(e,n){return{roomNumber:c[n],occupancy:"",numberOfBeds:"",beds:[{bedNumber:"",unitSequence:""}],unitSequence:""}}));p("".concat(t,".rooms"),a)}else p("".concat(t,".rooms"),[])}),[S]),console.log(t),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{style:{padding:"0px 21px",verticalAlign:"baseline"},className:x.includes(q)?i.default.bg_color_purple:"",children:(0,d.jsx)("div",{className:"d-flex align-items-center",children:N?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:"d-flex align-items-center",children:(0,d.jsx)(r.default,{className:"".concat(i.default.font," px-2 d-flex"),readOnly:!0,value:C})})}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"d-flex ",children:(0,d.jsx)(u.default,{onChange:function(e){q&&(e.target.checked?h((function(e){return[].concat((0,o.Z)(e),[null!==q&&void 0!==q&&q]).filter(Boolean)})):h((function(e){return e.filter((function(e){return e!==q}))})))}})}),(0,d.jsx)("div",{className:"d-flex align-items-center",children:(0,d.jsx)(r.default,{className:"".concat(i.default.font," px-4 d-flex ").concat(x.includes(q)?i.default.bg_color_purple:""),name:"".concat(t,".flatName"),readOnly:!0,register:f("".concat(t,".flatName"))})})]})})}),(0,d.jsx)("td",{style:{verticalAlign:"baseline"},className:"".concat(x.includes(q)?i.default.bg_color_purple:""),children:(0,d.jsx)(r.default,{type:"number",style:{border:"none",outline:"none"},name:"".concat(t,".numberOfRooms"),placeholder:"Enter number",className:"".concat(x.includes(q)?i.default.bg_color_purple:""),register:f("".concat(t,".numberOfRooms"),{pattern:/^(?!\s*$).+/,validate:function(e,n){return!!n.isDraft||!!e}})})}),S>0?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("td",{colSpan:N?4:5,children:O.map((function(e,n){var o;return(0,d.jsx)(s.default,{field:e,fieldName:"".concat(t,".rooms"),register:f,watch:m,control:b,index:n,setValue:p,isLast:S-1===n,showBedColumn:v,isSelected:null===x||void 0===x||null===(o=x.includes)||void 0===o?void 0:o.call(x,q),sequence:q,isCommonfield:N})}))})}):(0,d.jsxs)(d.Fragment,{children:[_&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("td",{className:i.default.bg_color_gray}),(0,d.jsx)("td",{className:i.default.bg_color_gray}),(0,d.jsx)("td",{className:i.default.bg_color_gray}),v&&(0,d.jsx)("td",{className:i.default.bg_color_gray})]}),!N&&(0,d.jsx)("td",{className:i.default.bg_color_accent})]})]},n)}},42495:function(e,n,t){t.r(n);var o=t(1413),r=t(45987),c=(t(72791),t(61134)),a=t(65355),l=t(80184),u=["control","name","render","showError","error","messages"];n.default=function(e){var n=e.control,t=e.name,i=e.render,s=e.showError,d=void 0===s||s,f=e.error,m=e.messages,p=(0,r.Z)(e,u);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.Qr,(0,o.Z)((0,o.Z)({},p),{},{name:t,render:i,control:n})),d&&(0,l.jsx)(a.default,{error:f,messages:m,position:p.position})]})}},21802:function(e,n,t){t.r(n),n.default={table:"RoomsTable_table__hwplm",tableContainer:"RoomsTable_tableContainer__dn02e",container:"RoomsTable_container__38wln",dropdownArrow:"RoomsTable_dropdownArrow__3A7CN",dropdownTable:"RoomsTable_dropdownTable__WZ1Ym",color:"RoomsTable_color__I87c4",inputfield:"RoomsTable_inputfield__WT69s",inputBorder:"RoomsTable_inputBorder__LWjPu",font:"RoomsTable_font__-083r",margin:"RoomsTable_margin__6ukBg",input:"RoomsTable_input__cxapF",tableInput:"RoomsTable_tableInput__KCie4",unit_sequence:"RoomsTable_unit_sequence__dHCVz",bg_color_purple:"RoomsTable_bg_color_purple__mM5Xy",bg_color_accent:"RoomsTable_bg_color_accent__rddY9",bg_color_gray:"RoomsTable_bg_color_gray__WNBCo",renderPaymentSelect:"RoomsTable_renderPaymentSelect__g+iBz"}}}]);
//# sourceMappingURL=6075.7677ac20.chunk.js.map