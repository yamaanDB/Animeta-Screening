"use strict";(self.webpackChunkBoston_Living=self.webpackChunkBoston_Living||[]).push([[7370,7851,1620,8138,1250,7696],{43650:function(e,n,t){t.r(n);var o=t(29439),a=t(72791),i=t(7851),l=t(6075),r=t(80184);n.default=function(e){var n=e.tabelHeader,t=e.tabelHeader2,s=(e.tabelHeader3,e.tabelHeader4),d=e.tabelHeader5,c=e.tabelHeader6,u=e.tabelHeader7,m=e.showExtendedColumns,f=e.setShowExtendedColumns,h=e.setIsFormCompleted,b=void 0===h?function(){}:h,v=(e.handleCommonField,e.register),p=e.setValue,_=e.control,x=e.watch,C=(0,a.useState)(!1),g=(0,o.Z)(C,2),w=g[0],j=g[1];return(0,a.useEffect)((function(){var e;if(null!==(e=x("unitDetails"))&&void 0!==e&&e.length){var n=!1,t=!1,o=x("unitDetails").every((function(e){var o,a,i;if(""!=(null===e||void 0===e?void 0:e.numberOfRooms)&&(n=!0),null!==e&&void 0!==e&&null!==(o=e.rooms)&&void 0!==o&&o.some((function(e){return e.numberOfBeds>0}))&&(t=!0),null!==(a=e.rooms)&&void 0!==a&&a.length&&null!==(i=e.rooms)&&void 0!==i&&i.every((function(e){return"FULL_ROOM"===e.occupancy||"SHARING"===e.occupancy&&e.beds.length>0&&e.beds.every((function(e){return""!=e.bedNumber}))})))return!0}));f(n),j(t),b(o)}}),[JSON.stringify(x("unitDetails"))]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:i.default.tableContainer,children:(0,r.jsxs)("table",{className:i.default.table,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{className:"".concat(i.default.border),children:[(0,r.jsx)("th",{style:{width:"254px"},children:(0,r.jsx)("div",{className:"px-2 ",children:n})}),(0,r.jsx)("th",{className:"".concat(i.default.propertyName," "),children:(0,r.jsx)("div",{className:i.default.columnContainer,children:t})}),m&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("th",{style:{width:"147px"},children:s}),(0,r.jsx)("th",{style:{width:"147px"},children:d}),(0,r.jsx)("th",{style:{width:"147px"},children:c}),w&&(0,r.jsx)("th",{style:{width:"147px"},children:u})]})]})}),(0,r.jsx)("tbody",{children:x("unitDetails").map((function(e,n){return(0,r.jsx)(l.default,{fieldName:"unitDetails.".concat(n),register:v,watch:x,setValue:p,control:_,showExtendedColumns:m,showBedColumn:w,isCommonfield:!0},"flats-".concat(n))}))})]})})})}},88141:function(e,n,t){var o=t(64836);n.Z=void 0;var a=o(t(45649)),i=t(80184),l=(0,a.default)((0,i.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline");n.Z=l},88551:function(e,n,t){var o=t(76189),a=t(80184);n.Z=(0,o.Z)((0,a.jsx)("path",{d:"M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutlineOutlined")},97123:function(e,n,t){t.d(n,{Z:function(){return v}});var o=t(63366),a=t(87462),i=t(72791),l=t(63733),r=t(94419),s=t(47630),d=t(10551),c=t(75878),u=t(21217);function m(e){return(0,u.Z)("MuiDialogActions",e)}(0,c.Z)("MuiDialogActions",["root","spacing"]);var f=t(80184),h=["className","disableSpacing"],b=(0,s.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,!t.disableSpacing&&n.spacing]}})((function(e){var n=e.ownerState;return(0,a.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!n.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})})),v=i.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiDialogActions"}),i=t.className,s=t.disableSpacing,c=void 0!==s&&s,u=(0,o.Z)(t,h),v=(0,a.Z)({},t,{disableSpacing:c}),p=function(e){var n=e.classes,t={root:["root",!e.disableSpacing&&"spacing"]};return(0,r.Z)(t,m,n)}(v);return(0,f.jsx)(b,(0,a.Z)({className:(0,l.Z)(p.root,i),ownerState:v,ref:n},u))}))},18622:function(e,n,t){t.d(n,{ZP:function(){return r}});var o=t(8003),a=t(87462),i=t(72791),l=t(57245),r=(t(83361),t(54164),t(51672),(0,i.forwardRef)((function(e,n){var t=(0,o.u)(e);return i.createElement(l.S,(0,a.Z)({ref:n},t))})))},7851:function(e,n,t){t.r(n),n.default={table:"CommonFieldsTable_table__Sy9NH",tableContainer:"CommonFieldsTable_tableContainer__bmkFx",container:"CommonFieldsTable_container__OgTCv",dropdownArrow:"CommonFieldsTable_dropdownArrow__3YHRJ",dropdownTable:"CommonFieldsTable_dropdownTable__bF4si",color:"CommonFieldsTable_color__DHxMA",inputfield:"CommonFieldsTable_inputfield__bBAgk",inputBorder:"CommonFieldsTable_inputBorder__MOnk6",font:"CommonFieldsTable_font__2zGDc",margin:"CommonFieldsTable_margin__eu24+",input:"CommonFieldsTable_input__iW0Ef",renderPaymentSelect:"CommonFieldsTable_renderPaymentSelect__DbUYT"}}}]);
//# sourceMappingURL=7370.8b9ff80f.chunk.js.map