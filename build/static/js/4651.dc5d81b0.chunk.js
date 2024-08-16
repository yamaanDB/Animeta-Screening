"use strict";(self.webpackChunkBoston_Living=self.webpackChunkBoston_Living||[]).push([[4651,7826,5355,6948,7451],{91826:function(e,a,n){n(72791);a.Z=n.p+"static/media/dropdownArrow.1110f3c54e41b6820f381d3b1ac4477a.svg"},7900:function(e,a,n){n(72791);a.Z=n.p+"static/media/upArrow.4c6abf93e5f81056680a18aefc73d87e.svg"},94651:function(e,a,n){n.r(a);var t=n(93433),l=n(29439),i=n(72791),r=n(17826),o=n(91826),s=n(7900),c=n(66948),d=n(65355),u=n(80184);a.default=function(e){var a=e.initialData,n=(e.tabelHeader,e.tabelHeader2,e.tabelHeader3,e.errors),f=(e.control,e.register),m=e.onToggleBulkUpload,x=e.isManual,v=e.activeTab,p=(0,i.useState)(Array(a.length).fill(!1)),h=(0,l.Z)(p,2),g=h[0],j=h[1],N=(0,i.useState)([]),b=(0,l.Z)(N,2),y=b[0],w=b[1],_=(0,i.useState)(null),S=(0,l.Z)(_,2),C=S[0],F=S[1];return(0,i.useEffect)((function(){if(null!==a&&void 0!==a&&a.length){var e=(0,t.Z)(new Set(a.flatMap((function(e){return e.blockName===v?[e.floorName]:[]}))));if(null!==e&&void 0!==e&&e.length){var n=e.map((function(e){var n={floorName:e},t=a.filter((function(a){return a.floorName===e&&a.blockName===v}));return null!==t&&void 0!==t&&t.length&&(n.combinedSequence=t[0].flatSequence+" - "+t[t.length-1].flatSequence,n.flatCounts=t.length),n}));w(n)}}}),[a,v,x]),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:r.default.tableContainer,children:(0,u.jsxs)("table",{className:r.default.table,children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"Floor"}),(0,u.jsx)("th",{className:r.default.propertyName,children:(0,u.jsx)("div",{className:r.default.columnContainer,children:"Number of Flats"})}),x&&(0,u.jsx)("th",{children:"Flat Number"}),(0,u.jsx)("th",{children:"Flats Sequence"})]})}),(0,u.jsx)("tbody",{children:y.length&&y.map((function(e,l){return(0,u.jsxs)(i.Fragment,{children:[(0,u.jsxs)("tr",{children:[(0,u.jsxs)("td",{className:"px-4",children:[(0,u.jsx)("span",{className:r.default.dropdownArrow,onClick:function(){return function(e,a){var n=(0,t.Z)(g);n[e]=!n[e],j(n),m(),F(a===C?null:a)}(l,e.floorName)},children:C===e.floorName?(0,u.jsx)("img",{src:s.Z,alt:"Dropdown Arrow",style:{width:"10px",height:"10px"}}):(0,u.jsx)("img",{src:o.Z,alt:"Dropdown Arrow"})}),(0,u.jsx)("span",{children:e.floorName||0})]}),(0,u.jsx)("td",{className:"px-4",children:(0,u.jsxs)("span",{children:[null===e||void 0===e?void 0:e.flatCounts,x&&"  Flats"]})}),x&&(0,u.jsx)("td",{className:"px-4",children:(0,u.jsx)("span",{className:"d-inline-block",children:" "})}),(0,u.jsx)("td",{className:!x&&r.default.color,style:{background:x?"#FFF":"#F3F5E7"},children:(0,u.jsx)("span",{children:x?"":e.combinedSequence||""})})]}),C===e.floorName&&a.length>0&&(0,u.jsxs)(u.Fragment,{children:[!x&&(0,u.jsxs)("tr",{className:r.default.dropdownTable,children:[(0,u.jsx)("td",{className:"px-4",children:"Flat Count"}),(0,u.jsx)("td",{children:"Flat Number"}),(0,u.jsx)("td",{children:"Flat Sequence"})]}),a.map((function(e,a){var t,l,i,o;return(0,u.jsxs)("tr",{className:"".concat(r.default.dropdownTable," ").concat((null===e||void 0===e?void 0:e.floorName)===C&&(null===e||void 0===e?void 0:e.blockName)===v?"":"d-none"),children:[x&&(0,u.jsx)("td",{}),(0,u.jsx)("td",{className:"px-4",children:(0,u.jsx)(c.default,{type:"text",ratefiled:!0,name:"flatDetails.".concat(a,".flatcount"),readOnly:!0,register:f("flatDetails.".concat(a,".flatcount"))})}),(0,u.jsxs)("td",{children:[(0,u.jsx)(c.default,{type:"text",ratefiled:!0,name:"flatDetails.".concat(a,".flatnumber"),placeholder:"Flat Number",readOnly:!x,register:f("flatDetails.".concat(a,".flatnumber"),{required:!0,pattern:/^[0-9\b]+$/,validate:{max100:function(e){return!(parseInt(e)>100)||"Maximum value is 100"}}})}),(0,u.jsx)(d.default,{className:r.default.error,error:null===n||void 0===n||null===(t=n.flatDetails)||void 0===t||null===(l=t[a])||void 0===l?void 0:l.flatnumber,messages:{required:"Flat Number is required",pattern:"Flat Number is invalid",max100:"Maximum Flat Number is 100"}})]}),(0,u.jsxs)("td",{className:x&&r.default.color,children:[(0,u.jsx)(c.default,{type:"text",ratefiled:!0,placeholder:"Flat Sequence",name:"flatDetails.".concat(a,".flatSequence"),readOnly:!x,register:f("flatDetails.".concat(a,".flatSequence"),{required:!0,pattern:/^[0-9\b]+$/,validate:{max100:function(e){return!(parseInt(e)>100)||"Maximum value is 100"}}})}),(0,u.jsx)(d.default,{className:r.default.error,error:null===n||void 0===n||null===(i=n.flatDetails)||void 0===i||null===(o=i[a])||void 0===o?void 0:o.flatSequence,messages:{required:"Flat Sequence is required",pattern:"Flat Sequence is invalid",max100:"Maximum Flat Sequence is 100"}})]})]},a)}))]})]},l)}))})]})})})}},65355:function(e,a,n){n.r(a);var t=n(88551),l=(n(72791),n(80184));a.default=function(e){var a=e.error,n=(e.type,e.messages),i=e.icon,r=void 0!==i&&i,o=e.position,s=void 0===o?"":o,c=e.className,d=void 0===c?"":c;return a?(0,l.jsx)("span",{className:"text-danger d-flex align-items-center fs-12 fw-500 ".concat(d||""),style:{textTransform:"",position:s,marginTop:"absolute"===s?"4px":0},children:n[a.type]?(0,l.jsxs)(l.Fragment,{children:[r&&(0,l.jsx)(t.Z,{fontSize:"12px"})," ",n[a.type]]}):(0,l.jsxs)(l.Fragment,{children:[r&&(0,l.jsx)(t.Z,{})," Error in field"]})}):null}},66948:function(e,a,n){n.r(a),n.d(a,{default:function(){return f}});var t=n(1413),l=n(29439),i=n(72791),r=(n(57451),n(39126)),o=n(23853),s=n(78820);var c=n.p+"static/media/tickCircle.512623b0f3ec79af1078fc7f855c9d77.svg";var d=n.p+"static/media/outlineCircletick.9f3c98014e8b20cc9b5d5d83b35a1edf.svg",u=(n(58300),n(80184)),f=function(e){var a,n,f=e.className,m=e.placeholder,x=void 0===m?"":m,v=e.register,p=void 0===v?{}:v,h=e.value,g=void 0===h?"":h,j=e.type,N=void 0===j?"text":j,b=e.onChange,y=e.name,w=void 0===y?"":y,_=e.grayedBox,S=void 0!==_&&_,C=e.shadow,F=void 0!==C&&C,q=e.disabled,T=void 0!==q&&q,D=e.maxLength,k=e.SearchIcon,B=void 0!==k&&k,Z=e.confirm,O=void 0!==Z&&Z,U=e.isOtp,A=void 0!==U&&U,I=e.Message,M=void 0!==I&&I,P=e.Password,z=void 0!==P&&P,E=e.setPassword,L=e.showPassword,V=e.notesBox,G=void 0!==V&&V,H=e.sendOtp,K=e.isOtpVerify,W=e.isError,Y=void 0!==W&&W,$=e.showSuccessBorder,J=void 0!==$&&$,R=e.isPropertySubmitted,X=void 0!==R&&R,Q=e.inputClass,ee=void 0===Q?"":Q,ae=e.ratefiled,ne=void 0!==ae&&ae,te=e.amountfiled,le=void 0!==te&&te,ie=e.onKeyDown,re=e.title,oe=e.upperCaseLabel,se=void 0!==oe&&oe,ce=e.isDefaultValue,de=void 0===ce||ce,ue=e.isWhiteDisableBg,fe=void 0!==ue&&ue,me=e.readOnly,xe=void 0!==me&&me,ve=e.ref,pe=e.searchData,he=void 0===pe?[]:pe,ge=e.searchValue,je=void 0!==ge&&ge,Ne=e.showData,be=void 0!==Ne&&Ne,ye=e.SearchCompanyNameID,we=void 0===ye?function(){}:ye,_e=e.registerBlock,Se=void 0!==_e&&_e,Ce=e.style,Fe=void 0===Ce?{}:Ce,qe=(0,i.useState)(!1),Te=(0,l.Z)(qe,2),De=Te[0],ke=Te[1],Be=(0,i.useState)(""),Ze=(0,l.Z)(Be,2),Oe=Ze[0],Ue=Ze[1];return(0,i.useEffect)((function(){we(Oe)}),[Oe]),(0,u.jsx)(u.Fragment,{children:G?(0,u.jsx)("div",{children:(0,u.jsx)("textarea",{disabled:T,name:w,placeholder:x,className:"\n              ".concat(T?"inputBoxGrayed":G?"NotesinputBoxStyle":""," ").concat(f),value:se?String(g).toUpperCase():g,maxLength:D,onWheel:function(e){return e.currentTarget.blur()},onChange:function(e){var a={target:{name:e.target.name,value:e.target.value}};b&&b(a)},autoComplete:"off"})}):(0,u.jsxs)("div",{className:"input_head",children:[(0,u.jsx)("input",(0,t.Z)((0,t.Z)((0,t.Z)({ref:ve,disabled:T,title:re,name:w,placeholder:x&&(null===(a=String(x))||void 0===a?void 0:a.charAt(0).toUpperCase())+(null===(n=String(x))||void 0===n?void 0:n.slice(1)),readOnly:xe,onKeyDown:ie,className:" ".concat(f," ").concat(T?"inputBoxGrayed ".concat(fe?"whiteDisableBg":""):S?"inputBoxGrayed":F?"inputBoxIconStyle":G?"NotesinputBoxStyle":ne?"ratefiled":le?"amountfiled":"inputBoxStyle ".concat(Y&&"error"," ").concat(J&&"success","\n                        \n                        ").concat("website"===w?" inherit-text":"","  ")," ").concat(ee," ").concat(se?"uppercaseText":"")},p),de?{defaultValue:g}:{value:g}),{},{type:L?"password":N,maxLength:D,defaultValue:g,onFocus:function(){ke(!0)},onBlur:function(){setTimeout((function(){ke(!1)}),1e3)},onWheel:function(e){return e.currentTarget.blur()},onChange:function(e){var a,n={target:{name:e.target.name,value:e.target.value}};(b&&b(n),Se)||(null===p||void 0===p||null===(a=p.onChange)||void 0===a||a.call(p,n))},autoComplete:"off",style:Fe})),he.length&&De&&je?(0,u.jsxs)("div",{className:"dropDown-style",children:[console.log(we),be&&he.map((function(e){return console.log(null===e||void 0===e?void 0:e._id),(0,u.jsx)("div",{onClick:function(){return Ue(e)},className:"dropdown-List",children:(0,u.jsx)("span",{children:null!==e&&void 0!==e&&e.companyName?null===e||void 0===e?void 0:e.companyName:""})},e.id)}))]}):null,(0,u.jsx)("div",{children:X?(0,u.jsx)("div",{className:"property_submit",children:(0,u.jsx)("img",{className:"outline_circle_tick",src:d})}):B?(0,u.jsx)("i",{className:"search_icon",children:(0,u.jsx)(r.dVI,{color:"grey"})}):O?(0,u.jsx)("div",{className:"search_icon",children:(0,u.jsx)("span",{children:"Confirm"})}):A?(0,u.jsx)("div",{className:"search_icon",children:K?(0,u.jsx)("img",{src:c,alt:"tick"}):(0,u.jsx)("span",{onClick:H,children:"Send OTP"})}):M?(0,u.jsx)("i",{className:"message_icon",children:(0,u.jsx)(o.Imn,{})}):z?(0,u.jsxs)("i",{className:"password_icon",children:[" ",(0,u.jsx)("span",{onClick:function(){return E(!L)},children:L?(0,u.jsx)(s.I0d,{style:{fontSize:"20px"}}):(0,u.jsx)(s.Zju,{style:{fontSize:"20px"}})})]}):""})]})})}},88551:function(e,a,n){var t=n(76189),l=n(80184);a.Z=(0,t.Z)((0,l.jsx)("path",{d:"M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutlineOutlined")},57451:function(e,a,n){n.r(a),a.default={}},17826:function(e,a,n){n.r(a),a.default={table:"UnitNamingTable_table__9Y18E",tableContainer:"UnitNamingTable_tableContainer__OgfPY",container:"UnitNamingTable_container__If239",dropdownArrow:"UnitNamingTable_dropdownArrow__OhwJq",dropdownTable:"UnitNamingTable_dropdownTable__N3d9R",color:"UnitNamingTable_color__gc-PH",inputfield:"UnitNamingTable_inputfield__gxGqP",inputBorder:"UnitNamingTable_inputBorder__X+Kww"}}}]);
//# sourceMappingURL=4651.dc5d81b0.chunk.js.map