"use strict";(self.webpackChunkBoston_Living=self.webpackChunkBoston_Living||[]).push([[760,8407,4017,8724],{44623:function(e,n,t){t(72791);n.Z=t.p+"static/media/addBtn.638e5424fde6ac61b0a4378b26888277.svg"},70760:function(e,n,t){t.r(n);t(72791);var a=t(19095),r=t(64554),s=t(4017),i=(t(78407),t(77500)),o=t(80184);n.default=function(e){var n=e.visible,t=e.modalLabel,l=e.handleClose,c=e.handleDelete;return(0,o.jsx)("div",{className:"col-8",children:(0,o.jsx)(a.Z,{open:n,onClose:l,"aria-labelledby":"modal-title","aria-describedby":"modal-description",children:(0,o.jsxs)(r.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:430,borderRadius:"16px",bgcolor:"background.paper",boxShadow:24,p:4},children:[(0,o.jsx)("p",{id:"modal-description",className:"fw-600 text-center mt-4",children:t}),(0,o.jsxs)("div",{className:"basicForm px-3 m-0",children:[(0,o.jsx)(i.Z,{className:"iconbtn",onClick:function(){}}),(0,o.jsx)("label",{children:"Fields from unit A1001 will be permanently erased."})]}),(0,o.jsxs)("div",{className:"d-flex w-100 col-12 justify-content-center my-4 ",children:[(0,o.jsx)("div",{className:"col-5 px-2 ",children:(0,o.jsx)(s.default,{className:"cancelBtn w-100 ",label:"Cancel",onClick:l})}),(0,o.jsx)("div",{className:"col-5 px-2  ",children:(0,o.jsx)(s.default,{onClick:c,className:"DeleteBtn w-100 ",label:"Delete"})})]})]})})})}},4017:function(e,n,t){t.r(n),t.d(n,{NormalButton:function(){return d}});var a=t(15671),r=t(43144),s=t(60136),i=t(21404),o=t(72791),l=(t(28724),t(44623)),c=t(80184),d=function(e){(0,s.Z)(t,e);var n=(0,i.Z)(t);function t(){return(0,a.Z)(this,t),n.apply(this,arguments)}return(0,r.Z)(t,[{key:"render",value:function(){var e=this.props,n=e.className,t=void 0===n?"":n,a=e.label,r=void 0===a?"":a,s=e.onClick,i=e.id,o=(e.draftBtn,e.orderBtn,e.primaryBtn,e.approveBtn,e.denyBtn,e.verifyBtn,e.verifiedBtn,e.undoBtn,e.rejectBtn,e.correctionBtn,e.printBtn,e.loginOutline,e.type),d=void 0===o?"submit":o,u=e.disabled,m=void 0!==u&&u,f=(e.cancelBtn,e.addBtn),v=void 0!==f&&f,p=e.isLoading,h=void 0!==p&&p,x=e.innerref,b=void 0===x?null:x;return(0,c.jsx)("div",{children:(0,c.jsxs)("button",{ref:b,id:i,type:d,className:"cursor-pointer ".concat(t),onClick:s,disabled:m||h,children:[v&&(0,c.jsx)("img",{src:l.Z,className:"me-2"}),h?(0,c.jsxs)("span",{className:"btn-loader  ",children:[" ",(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{className:"m-3",children:"Loading"})," "]})]}):(0,c.jsx)(c.Fragment,{children:r})]})})}}]),t}(o.Component);n.default=d},77500:function(e,n,t){var a=t(64836);n.Z=void 0;var r=a(t(45649)),s=t(80184),i=(0,r.default)((0,s.jsx)("path",{d:"M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutlineOutlined");n.Z=i},64554:function(e,n,t){t.d(n,{Z:function(){return b}});var a=t(87462),r=t(63366),s=t(72791),i=t(63733),o=t(22421),l=t(60104),c=t(78519),d=t(30418),u=t(80184),m=["className","component"];var f=t(55902),v=t(67107),p=t(988),h=(0,v.Z)(),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.themeId,t=e.defaultTheme,f=e.defaultClassName,v=void 0===f?"MuiBox-root":f,p=e.generateClassName,h=(0,o.ZP)("div",{shouldForwardProp:function(e){return"theme"!==e&&"sx"!==e&&"as"!==e}})(l.Z);return s.forwardRef((function(e,s){var o=(0,d.Z)(t),l=(0,c.Z)(e),f=l.className,x=l.component,b=void 0===x?"div":x,Z=(0,r.Z)(l,m);return(0,u.jsx)(h,(0,a.Z)({as:b,ref:s,className:(0,i.Z)(f,p?p(v):v),theme:n&&o[n]||o},Z))}))}({themeId:p.Z,defaultTheme:h,defaultClassName:"MuiBox-root",generateClassName:f.Z.generate}),b=x},78519:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(93433),r=t(87462),s=t(63366),i=t(82466),o=t(87416),l=["sx"],c=function(e){var n,t,a={systemProps:{},otherProps:{}},r=null!=(n=null==e||null==(t=e.theme)?void 0:t.unstable_sxConfig)?n:o.Z;return Object.keys(e).forEach((function(n){r[n]?a.systemProps[n]=e[n]:a.otherProps[n]=e[n]})),a};function d(e){var n,t=e.sx,o=(0,s.Z)(e,l),d=c(o),u=d.systemProps,m=d.otherProps;return n=Array.isArray(t)?[u].concat((0,a.Z)(t)):"function"===typeof t?function(){var e=t.apply(void 0,arguments);return(0,i.P)(e)?(0,r.Z)({},u,e):u}:(0,r.Z)({},u,t),(0,r.Z)({},m,{sx:n})}},78407:function(e,n,t){t.r(n),n.default={}},28724:function(e,n,t){t.r(n),n.default={}}}]);
//# sourceMappingURL=760.dbcd0583.chunk.js.map