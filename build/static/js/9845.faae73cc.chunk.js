"use strict";(self.webpackChunkBoston_Living=self.webpackChunkBoston_Living||[]).push([[9845,7065,5355,6948,7451,4092],{91826:function(e,n,o){o(72791);n.Z=o.p+"static/media/dropdownArrow.1110f3c54e41b6820f381d3b1ac4477a.svg"},59845:function(e,n,o){o.r(n);var r=o(93433),t=o(72791),i=o(67065),l=(o(91826),o(66948)),a=o(94092),s=o(65355),c=o(80184);n.default=function(e){e.initialData;var n=e.tabelHeader,o=e.tabelHeader2,d=e.tabelHeader3,u=e.tabelHeader4,h=e.errors,f=e.register,v=e.setduplicate,m=e.otherBlocksList,p=void 0===m?[]:m,x=e.handleFloorCount,g=void 0===x?function(){}:x,b=(e.onToggleBulkUpload,e.watch),j=function(e,n,o){var t=n.target.value;(0,r.Z)(p)[e].Type=t,g(n.target.name,t)};return console.log(p,"otherBlocksList"),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:i.default.tableContainer,children:(0,c.jsxs)("table",{className:i.default.table,children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:n}),(0,c.jsx)("th",{className:i.default.propertyName,children:(0,c.jsx)("div",{className:i.default.columnContainer,children:o})}),(0,c.jsx)("th",{children:d}),null!=u&&(0,c.jsx)("th",{children:u})]})}),(0,c.jsx)("tbody",{children:p.map((function(e,n){var o,r,d,m,p,x;return(0,c.jsx)(t.Fragment,{children:(0,c.jsxs)("tr",{children:[console.log(null===e||void 0===e?void 0:e.block),console.log(e),console.log(b("Block")),(0,c.jsx)("td",{children:(0,c.jsx)(l.default,{type:"text",ratefiled:!0,readOnly:!0,name:"floorsPerBlock.".concat(n,".block"),className:i.default.styleInputBox,placeholder:"Enter block",errors:h,register:f("floorsPerBlock.".concat(n,".block"),{required:""==(null===e||void 0===e?void 0:e.block)||null==(null===e||void 0===e?void 0:e.block)}),onChange:function(e){return j(n,e)}})}),(0,c.jsxs)("td",{children:[(0,c.jsx)(l.default,{type:"text",ratefiled:!0,className:i.default.styleInputBox,name:"floorsPerBlock.".concat(n,".blockName"),placeholder:"Enter block name",errors:h,value:null===e||void 0===e?void 0:e.blockName,onChange:function(e){return j(n,e)},register:f("floorsPerBlock.".concat(n,".blockName"),{required:""==(null===e||void 0===e?void 0:e.blockName)||null==(null===e||void 0===e?void 0:e.blockName),validate:{isduplicate:function(e,o){var r=o.floorsPerBlock;if(!e)return!0;var t=r.some((function(o,r){return r!==n&&o.blockName===e}));return v(t),!t}}})}),(0,c.jsx)("div",{className:i.default.error,children:(0,c.jsx)(s.default,{error:null===h||void 0===h||null===(o=h.floorsPerBlock)||void 0===o||null===(r=o[n])||void 0===r?void 0:r.blockName,messages:{required:"Enter Block Name is required",isduplicate:"Block Name should be unique"}})})]}),null!=u&&(0,c.jsxs)("td",{children:[(0,c.jsx)(l.default,{type:"text",ratefiled:!0,className:i.default.styleInputBox,name:"floorsPerBlock.".concat(n,".shortenedName"),placeholder:"Enter shortened name",errors:h,value:null===e||void 0===e?void 0:e.shortenedName,onChange:function(e){return j(n,e)},register:f("floorsPerBlock.".concat(n,".shortenedName"),{required:""==(null===e||void 0===e?void 0:e.shortenedName)||null==(null===e||void 0===e?void 0:e.shortenedName),validate:{isduplicate:function(e,o){var r=o.floorsPerBlock;return!e||!r.some((function(o,r){return r!==n&&o.shortenedName===e}))}}})}),(0,c.jsx)("div",{className:i.default.error,children:(0,c.jsx)(s.default,{error:null===h||void 0===h||null===(d=h.floorsPerBlock)||void 0===d||null===(m=d[n])||void 0===m?void 0:m.shortenedName,messages:{required:"Enter shortened Name is required",isduplicate:"Shortend Name should be unique"}})})]}),(0,c.jsxs)("td",{children:[(0,c.jsx)(l.default,{type:"number",ratefiled:!0,className:i.default.styleInputBox,name:"floorsPerBlock.".concat(n,".numberOfFloors"),placeholder:"Enter number of floors",errors:h,onKeyDown:a.numberInputMax,value:null===e||void 0===e?void 0:e.numberOfFloors,onChange:function(e){return j(n,e)},register:f("floorsPerBlock.".concat(n,".numberOfFloors"),{required:""==(null===e||void 0===e?void 0:e.numberOfFloors)||null==(null===e||void 0===e?void 0:e.numberOfFloors)})}),(0,c.jsx)("div",{className:i.default.error,children:(0,c.jsx)(s.default,{error:null===h||void 0===h||null===(p=h.floorsPerBlock)||void 0===p||null===(x=p[n])||void 0===x?void 0:x.numberOfFloors,messages:{required:"Enter number of floors is required"}})})]})]})},n)}))})]})})})}},65355:function(e,n,o){o.r(n);var r=o(88551),t=(o(72791),o(80184));n.default=function(e){var n=e.error,o=(e.type,e.messages),i=e.icon,l=void 0!==i&&i,a=e.position,s=void 0===a?"":a,c=e.className,d=void 0===c?"":c;return n?(0,t.jsx)("span",{className:"text-danger d-flex align-items-center fs-12 fw-500 ".concat(d||""),style:{textTransform:"",position:s,marginTop:"absolute"===s?"4px":0},children:o[n.type]?(0,t.jsxs)(t.Fragment,{children:[l&&(0,t.jsx)(r.Z,{fontSize:"12px"})," ",o[n.type]]}):(0,t.jsxs)(t.Fragment,{children:[l&&(0,t.jsx)(r.Z,{})," Error in field"]})}):null}},66948:function(e,n,o){o.r(n),o.d(n,{default:function(){return h}});var r=o(1413),t=o(29439),i=o(72791),l=(o(57451),o(39126)),a=o(23853),s=o(78820);var c=o.p+"static/media/tickCircle.512623b0f3ec79af1078fc7f855c9d77.svg";var d=o.p+"static/media/outlineCircletick.9f3c98014e8b20cc9b5d5d83b35a1edf.svg",u=(o(58300),o(80184)),h=function(e){var n,o,h=e.className,f=e.placeholder,v=void 0===f?"":f,m=e.register,p=void 0===m?{}:m,x=e.value,g=void 0===x?"":x,b=e.type,j=void 0===b?"text":b,w=e.onChange,N=e.name,y=void 0===N?"":N,k=e.grayedBox,B=void 0!==k&&k,_=e.shadow,C=void 0!==_&&_,S=e.disabled,T=void 0!==S&&S,P=e.maxLength,Z=e.SearchIcon,O=void 0!==Z&&Z,V=e.confirm,F=void 0!==V&&V,I=e.isOtp,q=void 0!==I&&I,D=e.Message,E=void 0!==D&&D,L=e.Password,z=void 0!==L&&L,A=e.setPassword,$=e.showPassword,H=e.notesBox,M=void 0!==H&&H,K=e.sendOtp,W=e.isOtpVerify,G=e.isError,U=void 0!==G&&G,Y=e.showSuccessBorder,J=void 0!==Y&&Y,Q=e.isPropertySubmitted,R=void 0!==Q&&Q,X=e.inputClass,ee=void 0===X?"":X,ne=e.ratefiled,oe=void 0!==ne&&ne,re=e.amountfiled,te=void 0!==re&&re,ie=e.onKeyDown,le=e.title,ae=e.upperCaseLabel,se=void 0!==ae&&ae,ce=e.isDefaultValue,de=void 0===ce||ce,ue=e.isWhiteDisableBg,he=void 0!==ue&&ue,fe=e.readOnly,ve=void 0!==fe&&fe,me=e.ref,pe=e.searchData,xe=void 0===pe?[]:pe,ge=e.searchValue,be=void 0!==ge&&ge,je=e.showData,we=void 0!==je&&je,Ne=e.SearchCompanyNameID,ye=void 0===Ne?function(){}:Ne,ke=e.registerBlock,Be=void 0!==ke&&ke,_e=e.style,Ce=void 0===_e?{}:_e,Se=(0,i.useState)(!1),Te=(0,t.Z)(Se,2),Pe=Te[0],Ze=Te[1],Oe=(0,i.useState)(""),Ve=(0,t.Z)(Oe,2),Fe=Ve[0],Ie=Ve[1];return(0,i.useEffect)((function(){ye(Fe)}),[Fe]),(0,u.jsx)(u.Fragment,{children:M?(0,u.jsx)("div",{children:(0,u.jsx)("textarea",{disabled:T,name:y,placeholder:v,className:"\n              ".concat(T?"inputBoxGrayed":M?"NotesinputBoxStyle":""," ").concat(h),value:se?String(g).toUpperCase():g,maxLength:P,onWheel:function(e){return e.currentTarget.blur()},onChange:function(e){var n={target:{name:e.target.name,value:e.target.value}};w&&w(n)},autoComplete:"off"})}):(0,u.jsxs)("div",{className:"input_head",children:[(0,u.jsx)("input",(0,r.Z)((0,r.Z)((0,r.Z)({ref:me,disabled:T,title:le,name:y,placeholder:v&&(null===(n=String(v))||void 0===n?void 0:n.charAt(0).toUpperCase())+(null===(o=String(v))||void 0===o?void 0:o.slice(1)),readOnly:ve,onKeyDown:ie,className:" ".concat(h," ").concat(T?"inputBoxGrayed ".concat(he?"whiteDisableBg":""):B?"inputBoxGrayed":C?"inputBoxIconStyle":M?"NotesinputBoxStyle":oe?"ratefiled":te?"amountfiled":"inputBoxStyle ".concat(U&&"error"," ").concat(J&&"success","\n                        \n                        ").concat("website"===y?" inherit-text":"","  ")," ").concat(ee," ").concat(se?"uppercaseText":"")},p),de?{defaultValue:g}:{value:g}),{},{type:$?"password":j,maxLength:P,defaultValue:g,onFocus:function(){Ze(!0)},onBlur:function(){setTimeout((function(){Ze(!1)}),1e3)},onWheel:function(e){return e.currentTarget.blur()},onChange:function(e){var n,o={target:{name:e.target.name,value:e.target.value}};(w&&w(o),Be)||(null===p||void 0===p||null===(n=p.onChange)||void 0===n||n.call(p,o))},autoComplete:"off",style:Ce})),xe.length&&Pe&&be?(0,u.jsxs)("div",{className:"dropDown-style",children:[console.log(ye),we&&xe.map((function(e){return console.log(null===e||void 0===e?void 0:e._id),(0,u.jsx)("div",{onClick:function(){return Ie(e)},className:"dropdown-List",children:(0,u.jsx)("span",{children:null!==e&&void 0!==e&&e.companyName?null===e||void 0===e?void 0:e.companyName:""})},e.id)}))]}):null,(0,u.jsx)("div",{children:R?(0,u.jsx)("div",{className:"property_submit",children:(0,u.jsx)("img",{className:"outline_circle_tick",src:d})}):O?(0,u.jsx)("i",{className:"search_icon",children:(0,u.jsx)(l.dVI,{color:"grey"})}):F?(0,u.jsx)("div",{className:"search_icon",children:(0,u.jsx)("span",{children:"Confirm"})}):q?(0,u.jsx)("div",{className:"search_icon",children:W?(0,u.jsx)("img",{src:c,alt:"tick"}):(0,u.jsx)("span",{onClick:K,children:"Send OTP"})}):E?(0,u.jsx)("i",{className:"message_icon",children:(0,u.jsx)(a.Imn,{})}):z?(0,u.jsxs)("i",{className:"password_icon",children:[" ",(0,u.jsx)("span",{onClick:function(){return A(!$)},children:$?(0,u.jsx)(s.I0d,{style:{fontSize:"20px"}}):(0,u.jsx)(s.Zju,{style:{fontSize:"20px"}})})]}):""})]})})}},94092:function(e,n,o){o.r(n),o.d(n,{experienceValidate:function(){return x},ignoreNegativeValue:function(){return h},maxLengthValidation:function(){return m},minLengthValidation:function(){return p},nameValidation:function(){return d},numberInput:function(){return g},numberInputMax:function(){return b},numberLetterValidation:function(){return v},onlyNumbers:function(){return f},passwordValidation:function(){return u},spaceValidation:function(){return s},validatePIN:function(){return c}});var r=o(72426),t=o.n(r),i=/^(?=[\s\S]*[a-z])(?=[\s\S]*[A-Z])(?=[\s\S]*\d)(?=[\s\S]*[@$!%*?&])[A-Za-z\d@$!%*?& ]{8,}$/,l=/^[a-zA-Z ]+$/,a=/^\d{6}$/,s=function(e){return!e||""!==e.toString().trim()},c=function(e){return a.test(e)},d=function(e){return!e||l.test(e)},u=function(e){return e&&i.test(e)},h=function(e){return e&&e>0},f=function(e){return!e||/^[0-9]+$/.test(e)},v=function(e){return!e||/^[0-9a-zA-Z]+$/.test(e)},m=function(e){return function(n){var o;return!n||(null===(o=String(n))||void 0===o?void 0:o.length)<=e}},p=function(e){return function(n){var o;return!n||(null===(o=String(n))||void 0===o?void 0:o.length)>=e}},x=function(e,n,o,r,i,l){if((null===e||void 0===e?void 0:e.length)>0){var a=null===e||void 0===e?void 0:e.map((function(e){return e&&t()(null===e||void 0===e?void 0:e.passingYear)})).filter(Boolean),s=t().min(a),c=t()().get("year")-t()(s).get("year");if(+n&&c<+n&&o&&r&&i)return o(r,{type:i,shouldFocus:l}),!1}return!0},g=function(e){107!==e.which&&187!==e.which&&38!==e.which&&40!==e.which&&45!==e.which&&69!==e.which&&189!==e.which&&173!==e.which&&110!==e.which&&109!==e.which&&190!==e.which&&46!==e.which||e.preventDefault()},b=function(e){107!==e.which&&187!==e.which&&38!==e.which&&40!==e.which&&45!==e.which&&69!==e.which&&189!==e.which&&173!==e.which&&110!==e.which&&109!==e.which&&190!==e.which&&46!==e.which||e.preventDefault();var n=e.target.value;if(n.length>=3){var o=n.slice(0,2);e.target.value=o}}},88551:function(e,n,o){var r=o(76189),t=o(80184);n.Z=(0,r.Z)((0,t.jsx)("path",{d:"M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutlineOutlined")},57451:function(e,n,o){o.r(n),n.default={}},67065:function(e,n,o){o.r(n),n.default={table:"CustomTable_table__Jeu4Z",text:"CustomTable_text__C77oo",tableContainer:"CustomTable_tableContainer__wqvfi",error:"CustomTable_error__9Ztb6",container:"CustomTable_container__SYcpy",dropdownArrow:"CustomTable_dropdownArrow__zR9E4",dropdownTable:"CustomTable_dropdownTable__Yg8K+",color:"CustomTable_color__-WLSB",inputfield:"CustomTable_inputfield__avXlE",inputBorder:"CustomTable_inputBorder__6bQHS"}}}]);
//# sourceMappingURL=9845.faae73cc.chunk.js.map