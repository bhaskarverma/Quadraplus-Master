(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[845],{46160:function(e,n,t){"use strict";var r;n.Z=void 0;var i=(0,((r=t(65129))&&r.__esModule?r:{default:r}).default)("M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z","DotsVertical");n.Z=i},98166:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/batches/type",function(){return t(94630)}])},94630:function(e,n,t){"use strict";t.r(n);var r=t(85893),i=t(93946),a=t(38333),l=t(18972),o=t(15861),u=t(86886),c=t(66242),s=t(24156),d=t(67294),p=t(10667),f=t(9473),m=t(18424),b=t(46160),h=t(3690),v=(t(95828),t(59232)),x=t(32945),y=function(e){var n=e.id,t=(0,d.useState)(null),o=t[0],u=t[1],c=Boolean(o),s=(0,f.I0)(),p=(0,m.a)().token,x=function(){u(null)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{size:"small",onClick:function(e){u(e.currentTarget)},children:(0,r.jsx)(b.Z,{})}),(0,r.jsx)(a.Z,{keepMounted:!0,anchorEl:o,open:c,onClose:x,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{style:{minWidth:"8rem"}},children:(0,r.jsxs)(l.Z,{onClick:function(){x(),s((0,v.W1)({token:p,batch_id:n})),s((0,v.p8)({token:p}))},children:[(0,r.jsx)(h.Z,{fontSize:"small",sx:{mr:2}}),"Delete"]})})]})},j=[{flex:.2,field:"name",headerName:"Name",renderCell:function(e){var n=e.row;return(0,r.jsx)(o.Z,{variant:"body2",children:n.name})}},{flex:.5,field:"days",headerName:"Days",renderCell:function(e){var n=e.row;return(0,r.jsx)(o.Z,{variant:"body2",children:n.days})}},{flex:.15,field:"start_time",headerName:"Start Time",renderCell:function(e){var n=e.row;return(0,r.jsx)(o.Z,{variant:"body2",children:n.start_time})}},{flex:.15,field:"end_time",headerName:"End Time",renderCell:function(e){var n=e.row;return(0,r.jsx)(o.Z,{variant:"body2",children:n.end_time})}},{flex:.05,minWidth:90,sortable:!1,field:"actions",headerName:"Actions",renderCell:function(e){var n=e.row;return(0,r.jsx)(y,{id:n.id})}}];n.default=function(){var e=(0,d.useState)([]),n=e[0],t=e[1],i=(0,d.useState)(10),a=i[0],l=i[1],o=(0,d.useState)(""),b=o[0],h=o[1],y=(0,d.useState)(!1),g=y[0],Z=y[1],I=(0,f.I0)(),T=(0,f.v9)((function(e){return e.batches})),w=(0,m.a)().token;return(0,d.useEffect)((function(){I((0,v.p8)({token:w}))}),[I,w]),(0,d.useEffect)((function(){var e=T.batchTypes.filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())||e.days.toLowerCase().includes(b.toLowerCase())||e.start_time.toLowerCase().includes(b.toLowerCase())||e.end_time.toLowerCase().includes(b.toLowerCase())}));t(e)}),[b,T.batchTypes]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(u.ZP,{container:!0,spacing:6,children:[(0,r.jsx)(u.ZP,{item:!0,xs:12}),(0,r.jsx)(u.ZP,{item:!0,xs:12,children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(p.Z,{exportFileName:"All Batches",exportData:n.map((function(e){return{Name:e.name,Days:e.days,"Start Time":e.start_time,"End Time":e.end_time}})),handleFilter:function(e){h(e)},searchBoxText:"Search Batches",actionButtonDrawerToggle:function(){return Z(!0)},actionButtonText:"Add Batch Type",actionButtonType:"drawer",value:b}),(0,r.jsx)(s._,{autoHeight:!0,pagination:!0,rows:n,columns:j,disableSelectionOnClick:!0,pageSize:Number(a),rowsPerPageOptions:[10,25,50],onPageSizeChange:function(e){return l(e)}})]})})]}),(0,r.jsx)(x.Z,{submitButtonText:"Create",onSubmit:function(e){var n=e.input[0].batchName,t=e.input[1].batchDays,r=e.input[2].batchStartTime,i=e.input[3].batchEndTime;if("string"===typeof r){var a=r.split(":"),l=a[0],o=a[1].split(" ")[0];r="PM"===a[1].split(" ")[1]?"".concat(parseInt(l)+12,":").concat(o):"".concat(l,":").concat(o)}else{var u=r.getHours(),c=r.getMinutes();r="".concat(u,":").concat(c)}if("string"===typeof i){var s=i.split(":"),d=s[0],p=s[1].split(" ")[0];i="PM"===s[1].split(" ")[1]?"".concat(parseInt(d)+12,":").concat(p):"".concat(d,":").concat(p)}else{var f=i.getHours(),m=i.getMinutes();i="".concat(f,":").concat(m)}I((0,v.yZ)({token:w,name:n,days:t,start:r,end:i})),console.log(n,t,r,i)},drawerTitle:"Add Batch Type",isOpen:g,setIsOpen:Z,inputs:[{inputId:"batchName",inputLabel:"Batch Name",inputLabelId:"batchNameLabel",inputType:"text",gridProps:{mb:6}},{inputId:"batchDays",inputLabel:"Batch Days",inputLabelId:"batchDaysLabel",inputType:"select-multiple",menuItems:[{value:"Monday",label:"Monday"},{value:"Tuesday",label:"Tuesday"},{value:"Wednesday",label:"Wednesday"},{value:"Thursday",label:"Thursday"},{value:"Friday",label:"Friday"},{value:"Saturday",label:"Saturday"},{value:"Sunday",label:"Sunday"}],gridProps:{mb:6}},{inputId:"batchStartTime",inputLabel:"Batch Start Time",inputLabelId:"batchStartTimeLabel",inputType:"time",gridProps:{mb:6}},{inputId:"batchEndTime",inputLabel:"Batch End Time",inputLabelId:"batchEndTimeLabel",inputType:"time",gridProps:{mb:6}}]})]})}},10667:function(e,n,t){"use strict";var r=t(85893),i=t(87357),a=t(44872),l=t(50135),o=t(83461),u=t(95534),c=t(41664),s=t.n(c),d=t(18424);n.Z=function(e){var n,t,c=e.handleFilter,p=e.value,f=e.actionButtonText,m=e.searchBoxText,b=e.actionButtonType,h=(0,d.a)(),v=null===h||void 0===h||null===(n=h.user)||void 0===n?void 0:n.type;return(0,r.jsxs)(i.Z,{sx:{p:5,pb:3,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[e.exportFileName&&e.exportData&&"admin"==v&&(0,r.jsx)(o.CSVLink,{style:{textDecoration:"none"},data:e.exportData,filename:e.exportFileName,children:(0,r.jsx)(a.Z,{sx:{mr:4,mb:2},color:"secondary",variant:"outlined",onClick:function(){},startIcon:(0,r.jsx)(u.Z,{fontSize:"small"}),children:"Export"})}),(0,r.jsxs)(i.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center"},children:[(0,r.jsx)(l.Z,{size:"small",value:p,sx:{mr:4,mb:2},placeholder:m,onChange:function(e){return c(e.target.value)}}),"link"===b?(0,r.jsx)(s(),{href:null!==(t=e.actionButtonLinkPath)&&void 0!==t?t:"#",children:(0,r.jsx)(a.Z,{sx:{mb:2},variant:"contained",children:f})}):"","drawer"===b?(0,r.jsx)(a.Z,{sx:{mb:2},onClick:e.actionButtonDrawerToggle,variant:"contained",children:f}):"","function"===b?(0,r.jsx)(a.Z,{sx:{mb:2},onClick:e.actionButtonFunction,variant:"contained",children:f}):""]})]})}},40883:function(e,n,t){"use strict";var r=t(85893),i=t(86886),a=t(50135),l=t(56815),o=(t(67294),t(42283)),u=t(46747),c=t(8591),s=t(45459),d=t(50720),p=t(89669);function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){f(e,n,t[n])}))}return e}n.Z=function(e){var n;return(0,r.jsxs)(i.ZP,m({item:!0},e.gridProps,{children:[(0,r.jsx)(o.Qr,{name:e.name,control:e.control,defaultValue:e.defaultValue,rules:null!==(n=e.rules)&&void 0!==n?n:{required:!0},render:function(n){var t=n.field,i=t.value,l=t.onChange;return(0,r.jsx)(d._,{dateAdapter:p.Z,children:e.type&&"time"===e.type?(0,r.jsx)(s.j,{label:e.label,value:i,onChange:l,renderInput:function(e){return(0,r.jsx)(a.Z,m({sx:{width:"100%"},onChange:l,value:i},e))}}):e.time?(0,r.jsx)(c.x,{label:e.label,value:i,onChange:l,renderInput:function(e){return(0,r.jsx)(a.Z,m({sx:{width:"100%"},onChange:l,value:i},e))}}):(0,r.jsx)(u.M,{label:e.label,value:i,onChange:l,renderInput:function(e){return(0,r.jsx)(a.Z,m({sx:{width:"100%"},onChange:l,value:i},e))}})})}}),e.error&&(0,r.jsx)(l.Z,{sx:{mx:3.5,color:"error.main"},id:e.description,children:"This field is required"})]}))}},32945:function(e,n,t){"use strict";var r=t(85893),i=t(77533),a=t(11496),l=t(15861),o=t(87357),u=t(42283),c=t(42734),s=t(48621),d=t(39673),p=t(40883),f=t(44872),m=(0,a.ZP)(o.Z)((function(e){var n=e.theme;return{display:"flex",alignItems:"center",padding:n.spacing(3,4),justifyContent:"space-between",backgroundColor:n.palette.background.default}}));n.Z=function(e){var n,t,a,b,h,v,x=function(){var n={input:[]};return e.inputs.forEach((function(e){var t,r={};"select-multiple"===e.inputType?r[e.inputId]=[]:r[e.inputId]=null!==(t=e.defaultValue)&&void 0!==t?t:"";n.input.push(r)})),n}(),y=(0,u.cI)({defaultValues:x,mode:"onChange"}),j=y.reset,g=y.control,Z=y.handleSubmit,I=y.formState.errors,T=function(){e.setIsOpen(!1),j()},w=function(n){var t;return null===(t=e.inputs.find((function(e){return e.inputId===n})))||void 0===t?void 0:t.menuItems};return(0,r.jsxs)(i.ZP,{open:e.isOpen,anchor:"right",variant:"temporary",onClose:T,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,r.jsxs)(m,{children:[(0,r.jsx)(l.Z,{variant:"h6",children:e.drawerTitle}),(0,r.jsx)(c.Z,{fontSize:"small",onClick:T,sx:{cursor:"pointer"}})]}),(0,r.jsx)(o.Z,{sx:{p:5},children:(0,r.jsxs)("form",{onSubmit:Z((function(n){e.setIsOpen(!1),j(),e.onSubmit(n)})),children:[e.inputs.map((function(e,i){var a,l;return"select"===e.inputType?(0,r.jsx)(d.Z,{defaultValue:e.defaultValue,name:"input.".concat(i,".").concat(e.inputId),label:e.inputLabel,labelId:e.inputLabelId,inputId:e.inputId,menuItems:null!==(n=w(e.inputId))&&void 0!==n?n:[],control:g,description:"".concat(e.inputId,"-description"),error:null===I||void 0===I||null===(a=I.input)||void 0===a||null===(l=a[i])||void 0===l?void 0:l[e.inputId],gridProps:null!==(t=e.gridProps)&&void 0!==t?t:{}},i):null})),e.inputs.map((function(e,n){var t,i;return"select-multiple"===e.inputType?(0,r.jsx)(d.Z,{multiple:!0,defaultValue:e.defaultValue,name:"input.".concat(n,".").concat(e.inputId),label:e.inputLabel,labelId:e.inputLabelId,inputId:e.inputId,menuItems:null!==(a=w(e.inputId))&&void 0!==a?a:[],control:g,description:"".concat(e.inputId,"-description"),error:null===I||void 0===I||null===(t=I.input)||void 0===t||null===(i=t[n])||void 0===i?void 0:i[e.inputId],gridProps:null!==(b=e.gridProps)&&void 0!==b?b:{}},n):null})),e.inputs.map((function(e,n){var t,i;return"text"===e.inputType||"textarea"==e.inputType||"number"==e.inputType||"email"==e.inputType?(0,r.jsx)(s.Z,{defaultValue:e.defaultValue,name:"input.".concat(n,".").concat(e.inputId),label:e.inputLabel,control:g,description:"".concat(e.inputId,"-description"),error:null===I||void 0===I||null===(t=I.input)||void 0===t||null===(i=t[n])||void 0===i?void 0:i[e.inputId],type:e.inputType,gridProps:null!==(h=e.gridProps)&&void 0!==h?h:{},rows:"textarea"===e.inputType?6:1,multiline:"textarea"===e.inputType,rules:e.rules},n):null})),e.inputs.map((function(e,n){var t,i;return"date"===e.inputType||"datetime"===e.inputType||"time"===e.inputType?(0,r.jsx)(p.Z,{defaultValue:e.defaultValue,name:"input.".concat(n,".").concat(e.inputId),label:e.inputLabel,control:g,type:e.inputType,description:"".concat(e.inputId,"-description"),error:null===I||void 0===I||null===(t=I.input)||void 0===t||null===(i=t[n])||void 0===i?void 0:i[e.inputId],gridProps:null!==(v=e.gridProps)&&void 0!==v?v:{},time:"datetime"===e.inputType},n):null})),(0,r.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(f.Z,{size:"large",type:"submit",variant:"contained",sx:{mr:3},children:e.submitButtonText}),(0,r.jsx)(f.Z,{size:"large",variant:"outlined",color:"secondary",onClick:T,children:"Cancel"})]})]})})]})}},39673:function(e,n,t){"use strict";var r=t(85893),i=t(18972),a=t(86886),l=t(94054),o=t(33841),u=t(18360),c=t(56815),s=t(42283);t(67294);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n.Z=function(e){var n,t,p,f=null===(n=e.menuItems)||void 0===n?void 0:n.map((function(e){return(0,r.jsx)(i.Z,{value:e.value,children:e.label},e.value)}));return(0,r.jsx)(a.ZP,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){d(e,n,t[n])}))}return e}({item:!0},e.gridProps,{children:(0,r.jsxs)(l.Z,{fullWidth:!0,children:[(0,r.jsx)(s.Qr,{name:e.name,control:e.control,defaultValue:e.defaultValue,rules:null!==(t=e.rules)&&void 0!==t?t:{required:!0},render:function(n){var t=n.field,i=t.value,a=t.onChange;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{id:e.labelId,children:e.label}),(0,r.jsx)(u.Z,{fullWidth:!0,value:i,id:e.inputId,label:e.label,onChange:a,error:Boolean(e.error),labelId:e.labelId,"aria-describedby":e.description,inputProps:{placeholder:"Select ".concat(e.label)},multiple:null!==(p=e.multiple)&&void 0!==p&&p,children:f})]})}}),e.error&&(0,r.jsx)(c.Z,{sx:{color:"error.main"},id:e.description,children:"This field is required"})]})}))}},48621:function(e,n,t){"use strict";var r=t(85893),i=t(86886),a=t(94054),l=t(50135),o=t(56815),u=(t(67294),t(42283));function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n.Z=function(e){var n,t,s,d;return(0,r.jsx)(i.ZP,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){c(e,n,t[n])}))}return e}({item:!0,xs:12},e.gridProps,{children:(0,r.jsxs)(a.Z,{fullWidth:!0,children:[(0,r.jsx)(u.Qr,{name:e.name,control:e.control,defaultValue:e.defaultValue,rules:null!==(n=e.rules)&&void 0!==n?n:{required:!0},render:function(n){var i=n.field,a=i.value,o=i.onChange;return(0,r.jsx)(l.Z,{value:a,label:e.label,type:null!==(t=e.type)&&void 0!==t?t:"string",onChange:o,placeholder:e.label,error:Boolean(e.error),"aria-describedby":e.description,rows:null!==(s=e.rows)&&void 0!==s?s:1,multiline:null!==(d=e.multiline)&&void 0!==d&&d})}}),e.error&&(0,r.jsx)(o.Z,{sx:{color:"error.main"},id:e.description,children:"This field is required"})]})}))}},95828:function(){}},function(e){e.O(0,[806,912,661,283,285,915,774,888,179],(function(){return n=98166,e(e.s=n);var n}));var n=e.O();_N_E=n}]);