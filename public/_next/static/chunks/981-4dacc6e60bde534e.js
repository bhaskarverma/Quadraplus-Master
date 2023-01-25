"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[981],{10667:function(e,n,l){var i=l(85893),r=l(61953),t=l(75084),a=l(67836),d=l(83461),o=l(95534),u=l(41664),s=l.n(u),c=l(18424);let p=e=>{var n,l;let{handleFilter:u,value:p,actionButtonText:x,searchBoxText:v,actionButtonType:h}=e,m=()=>{},j=(0,c.a)(),b=null==j?void 0:null===(n=j.user)||void 0===n?void 0:n.type;return(0,i.jsxs)(r.Z,{sx:{p:5,pb:3,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[e.exportFileName&&e.exportData&&"admin"==b&&(0,i.jsx)(d.CSVLink,{style:{textDecoration:"none"},data:e.exportData,filename:e.exportFileName,children:(0,i.jsx)(t.Z,{sx:{mr:4,mb:2},color:"secondary",variant:"outlined",onClick:m,startIcon:(0,i.jsx)(o.Z,{fontSize:"small"}),children:"Export"})}),(0,i.jsxs)(r.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center"},children:[(0,i.jsx)(a.Z,{size:"small",value:p,sx:{mr:4,mb:2},placeholder:v,onChange:e=>u(e.target.value)}),"link"===h?(0,i.jsx)(s(),{href:null!==(l=e.actionButtonLinkPath)&&void 0!==l?l:"#",children:(0,i.jsx)(t.Z,{sx:{mb:2},variant:"contained",children:x})}):"","drawer"===h?(0,i.jsx)(t.Z,{sx:{mb:2},onClick:e.actionButtonDrawerToggle,variant:"contained",children:x}):"","function"===h?(0,i.jsx)(t.Z,{sx:{mb:2},onClick:e.actionButtonFunction,variant:"contained",children:x}):""]})]})};n.Z=p},40883:function(e,n,l){var i=l(85893),r=l(79072),t=l(67836),a=l(32631);l(67294);var d=l(87536),o=l(40328),u=l(79987),s=l(45459),c=l(52359),p=l(63719);n.Z=function(e){var n;return(0,i.jsxs)(r.ZP,{item:!0,...e.gridProps,children:[(0,i.jsx)(d.Qr,{name:e.name,control:e.control,defaultValue:e.defaultValue,rules:null!==(n=e.rules)&&void 0!==n?n:{required:!0},render(n){let{field:{value:l,onChange:r}}=n;return(0,i.jsx)(c._,{dateAdapter:p.H,children:e.type&&"time"===e.type?(0,i.jsx)(s.j,{label:e.label,value:l,onChange:r,renderInput:e=>(0,i.jsx)(t.Z,{sx:{width:"100%"},onChange:r,value:l,...e})}):e.time?(0,i.jsx)(u.x,{label:e.label,value:l,onChange:r,renderInput:e=>(0,i.jsx)(t.Z,{sx:{width:"100%"},onChange:r,value:l,...e})}):(0,i.jsx)(o.M,{label:e.label,value:l,onChange:r,renderInput:e=>(0,i.jsx)(t.Z,{sx:{width:"100%"},onChange:r,value:l,...e})})})}}),e.error&&(0,i.jsx)(a.Z,{sx:{mx:3.5,color:"error.main"},id:e.description,children:"This field is required"})]})}},89829:function(e,n,l){var i=l(85893),r=l(67294),t=l(75084),a=l(29620),d=l(77745),o=l(95398),u=l(76779),s=l(44642);let c=e=>{let{dialogTitle:n,dialogText:l,disagreeText:c,agreeText:p,isOpen:x,setOpen:v,setOnAgree:h}=e,m=()=>v(!1);return(0,i.jsx)(r.Fragment,{children:(0,i.jsxs)(a.Z,{open:x,disableEscapeKeyDown:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",onClose(e,n){"backdropClick"!==n&&m()},children:[(0,i.jsx)(d.Z,{id:"alert-dialog-title",children:n}),(0,i.jsx)(o.Z,{children:(0,i.jsx)(s.Z,{id:"alert-dialog-description",children:l})}),(0,i.jsxs)(u.Z,{className:"dialog-actions-dense",children:[(0,i.jsx)(t.Z,{onClick:m,children:c}),(0,i.jsx)(t.Z,{onClick:h,children:p})]})]})})};n.Z=c},68045:function(e,n,l){var i=l(85893),r=l(67294),t=l(75084),a=l(29620),d=l(77745),o=l(95398),u=l(76779),s=l(79072),c=l(39673),p=l(87536),x=l(48621),v=l(40883);let h=e=>{var n,l,h,m,j;let b=(()=>{let n={input:[]};return e.inputs.forEach(e=>{let l={};"select"==e.inputType&&e.selectMultiple?l[e.inputId]=[]:l[e.inputId]="",n.input.push(l)}),n})(),{control:Z,handleSubmit:f,reset:I,formState:{errors:g}}=(0,p.cI)({defaultValues:b}),y=()=>{e.setIsOpen(!1),I()},C=n=>{e.setIsOpen(!1),I(),e.onSubmit(n)},T=()=>{};(0,r.useEffect)(()=>{e.setIsOpen(e.isOpen)},[e]);let k=n=>{var l;return null===(l=e.inputs.find(e=>e.inputId===n))||void 0===l?void 0:l.menuItems};return(0,i.jsx)("div",{children:(0,i.jsxs)(a.Z,{maxWidth:e.maxWidth,fullWidth:!0,open:e.isOpen,onClose:y,children:[(0,i.jsx)(d.Z,{children:e.dialogTitle}),(0,i.jsx)(o.Z,{children:(0,i.jsxs)(s.ZP,{container:!0,spacing:5,children:[e.inputs.map((e,r)=>{var t,a;return"select"===e.inputType?(0,i.jsx)(c.Z,{name:"input.".concat(r,".").concat(e.inputId),label:e.inputLabel,labelId:e.inputLabelId,inputId:e.inputId,menuItems:null!==(n=k(e.inputId))&&void 0!==n?n:[],control:Z,multiple:null!==(l=e.selectMultiple)&&void 0!==l&&l,description:"".concat(e.inputId,"-description"),error:null==g?void 0:null===(t=g.input)||void 0===t?void 0:null===(a=t[r])||void 0===a?void 0:a[e.inputId],gridProps:null!==(h=e.gridProps)&&void 0!==h?h:{}},r):null}),e.inputs.map((e,n)=>{var l,r;return"text"===e.inputType||"textarea"==e.inputType||"number"==e.inputType||"email"==e.inputType?(0,i.jsx)(x.Z,{name:"input.".concat(n,".").concat(e.inputId),label:e.inputLabel,control:Z,description:"".concat(e.inputId,"-description"),error:null==g?void 0:null===(l=g.input)||void 0===l?void 0:null===(r=l[n])||void 0===r?void 0:r[e.inputId],type:e.inputType,gridProps:null!==(m=e.gridProps)&&void 0!==m?m:{},rows:"textarea"===e.inputType?6:1,multiline:"textarea"===e.inputType},n):null}),e.inputs.map((e,n)=>{var l,r;return"date"===e.inputType||"datetime"===e.inputType?(0,i.jsx)(v.Z,{name:"input.".concat(n,".").concat(e.inputId),label:e.inputLabel,control:Z,description:"".concat(e.inputId,"-description"),error:null==g?void 0:null===(l=g.input)||void 0===l?void 0:null===(r=l[n])||void 0===r?void 0:r[e.inputId],gridProps:null!==(j=e.gridProps)&&void 0!==j?j:{},time:"datetime"===e.inputType},n):null})]})}),(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(t.Z,{onClick:y,variant:"outlined",children:"Cancel"}),(0,i.jsx)(t.Z,{onClick:f(C,T),variant:"outlined",children:e.submitButtonText})]})]})})};n.Z=h},39673:function(e,n,l){var i=l(85893),r=l(31538),t=l(79072),a=l(55343),d=l(58316),o=l(53442),u=l(32631),s=l(87536);l(67294),n.Z=function(e){var n,l,c;let p=null===(n=e.menuItems)||void 0===n?void 0:n.map(e=>(0,i.jsx)(r.Z,{value:e.value,children:e.label},e.value));return(0,i.jsx)(t.ZP,{item:!0,...e.gridProps,children:(0,i.jsxs)(a.Z,{fullWidth:!0,children:[(0,i.jsx)(s.Qr,{name:e.name,control:e.control,defaultValue:e.defaultValue,rules:null!==(l=e.rules)&&void 0!==l?l:{required:!0},render(n){let{field:{value:l,onChange:r}}=n;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.Z,{id:e.labelId,children:e.label}),(0,i.jsx)(o.Z,{fullWidth:!0,value:l,id:e.inputId,label:e.label,onChange:r,error:Boolean(e.error),labelId:e.labelId,"aria-describedby":e.description,inputProps:{placeholder:"Select ".concat(e.label)},multiple:null!==(c=e.multiple)&&void 0!==c&&c,children:p})]})}}),e.error&&(0,i.jsx)(u.Z,{sx:{color:"error.main"},id:e.description,children:"This field is required"})]})})}},48621:function(e,n,l){var i=l(85893),r=l(79072),t=l(55343),a=l(67836),d=l(32631);l(67294);var o=l(87536);let u=e=>{var n,l,u,s;return(0,i.jsx)(r.ZP,{item:!0,xs:12,...e.gridProps,children:(0,i.jsxs)(t.Z,{fullWidth:!0,children:[(0,i.jsx)(o.Qr,{name:e.name,control:e.control,defaultValue:e.defaultValue,rules:null!==(n=e.rules)&&void 0!==n?n:{required:!0},render(n){let{field:{value:r,onChange:t}}=n;return(0,i.jsx)(a.Z,{value:r,label:e.label,type:null!==(l=e.type)&&void 0!==l?l:"string",onChange:t,placeholder:e.label,error:Boolean(e.error),"aria-describedby":e.description,rows:null!==(u=e.rows)&&void 0!==u?u:1,multiline:null!==(s=e.multiline)&&void 0!==s&&s})}}),e.error&&(0,i.jsx)(d.Z,{sx:{color:"error.main"},id:e.description,children:"This field is required"})]})})};n.Z=u}}]);