(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[845],{46160:function(e,t,n){"use strict";t.Z=void 0;var l,i=(0,((l=n(65129))&&l.__esModule?l:{default:l}).default)("M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z","DotsVertical");t.Z=i},98166:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/batches/type",function(){return n(94630)}])},94630:function(e,t,n){"use strict";n.r(t);var l=n(85893),i=n(80562),a=n(73812),r=n(31538),u=n(29630),o=n(79072),s=n(49837),d=n(62443),c=n(67294),p=n(10667),m=n(9473),h=n(18424),x=n(46160),b=n(3690);n(95828);var v=n(59232),f=n(32945);let y=e=>{let{id:t}=e,[n,u]=(0,c.useState)(null),o=Boolean(n),s=(0,m.I0)(),d=(0,h.a)(),p=d.token,f=e=>{u(e.currentTarget)},y=()=>{u(null)},j=()=>{y(),s((0,v.W1)({token:p,batch_id:t})),s((0,v.p8)({token:p}))};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Z,{size:"small",onClick:f,children:(0,l.jsx)(x.Z,{})}),(0,l.jsx)(a.Z,{keepMounted:!0,anchorEl:n,open:o,onClose:y,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{style:{minWidth:"8rem"}},children:(0,l.jsxs)(r.Z,{onClick:j,children:[(0,l.jsx)(b.Z,{fontSize:"small",sx:{mr:2}}),"Delete"]})})]})},j=[{flex:.2,field:"name",headerName:"Name",renderCell(e){let{row:t}=e;return(0,l.jsx)(u.Z,{variant:"body2",children:t.name})}},{flex:.5,field:"days",headerName:"Days",renderCell(e){let{row:t}=e;return(0,l.jsx)(u.Z,{variant:"body2",children:t.days})}},{flex:.15,field:"start_time",headerName:"Start Time",renderCell(e){let{row:t}=e;return(0,l.jsx)(u.Z,{variant:"body2",children:t.start_time})}},{flex:.15,field:"end_time",headerName:"End Time",renderCell(e){let{row:t}=e;return(0,l.jsx)(u.Z,{variant:"body2",children:t.end_time})}},{flex:.05,minWidth:90,sortable:!1,field:"actions",headerName:"Actions",renderCell(e){let{row:t}=e;return(0,l.jsx)(y,{id:t.id})}}];t.default=function(){let[e,t]=(0,c.useState)([]),[n,i]=(0,c.useState)(10),[a,r]=(0,c.useState)(""),[u,x]=(0,c.useState)(!1),b=(0,m.I0)(),y=(0,m.v9)(e=>e.batches),g=(0,h.a)(),Z=g.token,I=e=>{r(e)};(0,c.useEffect)(()=>{b((0,v.p8)({token:Z}))},[b,Z]),(0,c.useEffect)(()=>{let e=y.batchTypes.filter(e=>e.name.toLowerCase().includes(a.toLowerCase())||e.days.toLowerCase().includes(a.toLowerCase())||e.start_time.toLowerCase().includes(a.toLowerCase())||e.end_time.toLowerCase().includes(a.toLowerCase()));t(e)},[a,y.batchTypes]);let T=e=>{let t=e.input[0].batchName,n=e.input[1].batchDays,l=e.input[2].batchStartTime,i=e.input[3].batchEndTime;if("string"==typeof l){let a=l.split(":"),r=a[0],u=a[1].split(" ")[0];l="PM"===a[1].split(" ")[1]?"".concat(parseInt(r)+12,":").concat(u):"".concat(r,":").concat(u)}else{let o=l.getHours(),s=l.getMinutes(),d="".concat(o,":").concat(s);l=d}if("string"==typeof i){let c=i.split(":"),p=c[0],m=c[1].split(" ")[0];i="PM"===c[1].split(" ")[1]?"".concat(parseInt(p)+12,":").concat(m):"".concat(p,":").concat(m)}else{let h=i.getHours(),x=i.getMinutes(),f="".concat(h,":").concat(x);i=f}b((0,v.yZ)({token:Z,name:t,days:n,start:l,end:i})),console.log(t,n,l,i)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o.ZP,{container:!0,spacing:6,children:[(0,l.jsx)(o.ZP,{item:!0,xs:12}),(0,l.jsx)(o.ZP,{item:!0,xs:12,children:(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(p.Z,{exportFileName:"All Batches",exportData:(()=>{let t=e.map(e=>({Name:e.name,Days:e.days,"Start Time":e.start_time,"End Time":e.end_time}));return t})(),handleFilter:I,searchBoxText:"Search Batches",actionButtonDrawerToggle:()=>x(!0),actionButtonText:"Add Batch Type",actionButtonType:"drawer",value:a}),(0,l.jsx)(d._,{autoHeight:!0,pagination:!0,rows:e,columns:j,disableSelectionOnClick:!0,pageSize:Number(n),rowsPerPageOptions:[10,25,50],onPageSizeChange:e=>i(e)})]})})]}),(0,l.jsx)(f.Z,{submitButtonText:"Create",onSubmit:T,drawerTitle:"Add Batch Type",isOpen:u,setIsOpen:x,inputs:[{inputId:"batchName",inputLabel:"Batch Name",inputLabelId:"batchNameLabel",inputType:"text",gridProps:{mb:6}},{inputId:"batchDays",inputLabel:"Batch Days",inputLabelId:"batchDaysLabel",inputType:"select-multiple",menuItems:[{value:"Monday",label:"Monday"},{value:"Tuesday",label:"Tuesday"},{value:"Wednesday",label:"Wednesday"},{value:"Thursday",label:"Thursday"},{value:"Friday",label:"Friday"},{value:"Saturday",label:"Saturday"},{value:"Sunday",label:"Sunday"}],gridProps:{mb:6}},{inputId:"batchStartTime",inputLabel:"Batch Start Time",inputLabelId:"batchStartTimeLabel",inputType:"time",gridProps:{mb:6}},{inputId:"batchEndTime",inputLabel:"Batch End Time",inputLabelId:"batchEndTimeLabel",inputType:"time",gridProps:{mb:6}}]})]})}},10667:function(e,t,n){"use strict";var l=n(85893),i=n(61953),a=n(75084),r=n(67836),u=n(83461),o=n(95534),s=n(41664),d=n.n(s),c=n(18424);let p=e=>{var t,n;let{handleFilter:s,value:p,actionButtonText:m,searchBoxText:h,actionButtonType:x}=e,b=()=>{},v=(0,c.a)(),f=null==v?void 0:null===(t=v.user)||void 0===t?void 0:t.type;return(0,l.jsxs)(i.Z,{sx:{p:5,pb:3,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[e.exportFileName&&e.exportData&&"admin"==f&&(0,l.jsx)(u.CSVLink,{style:{textDecoration:"none"},data:e.exportData,filename:e.exportFileName,children:(0,l.jsx)(a.Z,{sx:{mr:4,mb:2},color:"secondary",variant:"outlined",onClick:b,startIcon:(0,l.jsx)(o.Z,{fontSize:"small"}),children:"Export"})}),(0,l.jsxs)(i.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center"},children:[(0,l.jsx)(r.Z,{size:"small",value:p,sx:{mr:4,mb:2},placeholder:h,onChange:e=>s(e.target.value)}),"link"===x?(0,l.jsx)(d(),{href:null!==(n=e.actionButtonLinkPath)&&void 0!==n?n:"#",children:(0,l.jsx)(a.Z,{sx:{mb:2},variant:"contained",children:m})}):"","drawer"===x?(0,l.jsx)(a.Z,{sx:{mb:2},onClick:e.actionButtonDrawerToggle,variant:"contained",children:m}):"","function"===x?(0,l.jsx)(a.Z,{sx:{mb:2},onClick:e.actionButtonFunction,variant:"contained",children:m}):""]})]})};t.Z=p},40883:function(e,t,n){"use strict";var l=n(85893),i=n(79072),a=n(67836),r=n(32631);n(67294);var u=n(87536),o=n(40328),s=n(79987),d=n(45459),c=n(52359),p=n(63719);t.Z=function(e){var t;return(0,l.jsxs)(i.ZP,{item:!0,...e.gridProps,children:[(0,l.jsx)(u.Qr,{name:e.name,control:e.control,defaultValue:e.defaultValue,rules:null!==(t=e.rules)&&void 0!==t?t:{required:!0},render(t){let{field:{value:n,onChange:i}}=t;return(0,l.jsx)(c._,{dateAdapter:p.H,children:e.type&&"time"===e.type?(0,l.jsx)(d.j,{label:e.label,value:n,onChange:i,renderInput:e=>(0,l.jsx)(a.Z,{sx:{width:"100%"},onChange:i,value:n,...e})}):e.time?(0,l.jsx)(s.x,{label:e.label,value:n,onChange:i,renderInput:e=>(0,l.jsx)(a.Z,{sx:{width:"100%"},onChange:i,value:n,...e})}):(0,l.jsx)(o.M,{label:e.label,value:n,onChange:i,renderInput:e=>(0,l.jsx)(a.Z,{sx:{width:"100%"},onChange:i,value:n,...e})})})}}),e.error&&(0,l.jsx)(r.Z,{sx:{mx:3.5,color:"error.main"},id:e.description,children:"This field is required"})]})}},32945:function(e,t,n){"use strict";var l=n(85893),i=n(64631),a=n(67074),r=n(29630),u=n(61953),o=n(87536),s=n(42734),d=n(48621),c=n(39673),p=n(40883),m=n(75084),h=n(67294);let x=(0,a.ZP)(u.Z)(e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",padding:t.spacing(3,4),justifyContent:"space-between",backgroundColor:t.palette.background.default}}),b=e=>{var t,n,a,b,v,f;let y=(()=>{let t={input:[]};return e.inputs.forEach(e=>{let n={};if("select-multiple"===e.inputType)n[e.inputId]=[];else{var l;n[e.inputId]=null!==(l=e.defaultValue)&&void 0!==l?l:""}t.input.push(n)}),t})(),{reset:j,control:g,watch:Z,handleSubmit:I,formState:{errors:T}}=(0,o.cI)({defaultValues:y,mode:"onChange"}),C=t=>{e.setIsOpen(!1),j(),e.onSubmit(t)},P=()=>{e.setIsOpen(!1),j()},w=t=>{var n;return null===(n=e.inputs.find(e=>e.inputId===t))||void 0===n?void 0:n.menuItems},L=Z();return(0,h.useEffect)(()=>{e.inputs.forEach(e=>{e.onChange&&e.onChange(L.input)})},[L]),(0,l.jsxs)(i.ZP,{open:e.isOpen,anchor:"right",variant:"temporary",onClose:P,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,l.jsxs)(x,{children:[(0,l.jsx)(r.Z,{variant:"h6",children:e.drawerTitle}),(0,l.jsx)(s.Z,{fontSize:"small",onClick:P,sx:{cursor:"pointer"}})]}),(0,l.jsx)(u.Z,{sx:{p:5},children:(0,l.jsxs)("form",{onSubmit:I(C),children:[e.inputs.map((e,i)=>{var a,r;return"select"===e.inputType?(0,l.jsx)(c.Z,{defaultValue:e.defaultValue,name:"input.".concat(i,".").concat(e.inputId),label:e.inputLabel,labelId:e.inputLabelId,inputId:e.inputId,menuItems:null!==(t=w(e.inputId))&&void 0!==t?t:[],control:g,description:"".concat(e.inputId,"-description"),error:null==T?void 0:null===(a=T.input)||void 0===a?void 0:null===(r=a[i])||void 0===r?void 0:r[e.inputId],gridProps:null!==(n=e.gridProps)&&void 0!==n?n:{}},i):null}),e.inputs.map((e,t)=>{var n,i;return"select-multiple"===e.inputType?(0,l.jsx)(c.Z,{multiple:!0,defaultValue:e.defaultValue,name:"input.".concat(t,".").concat(e.inputId),label:e.inputLabel,labelId:e.inputLabelId,inputId:e.inputId,menuItems:null!==(a=w(e.inputId))&&void 0!==a?a:[],control:g,description:"".concat(e.inputId,"-description"),error:null==T?void 0:null===(n=T.input)||void 0===n?void 0:null===(i=n[t])||void 0===i?void 0:i[e.inputId],gridProps:null!==(b=e.gridProps)&&void 0!==b?b:{}},t):null}),e.inputs.map((e,t)=>{var n,i;return"text"===e.inputType||"textarea"==e.inputType||"number"==e.inputType||"email"==e.inputType?(0,l.jsx)(d.Z,{defaultValue:e.defaultValue,name:"input.".concat(t,".").concat(e.inputId),label:e.inputLabel,control:g,description:"".concat(e.inputId,"-description"),error:null==T?void 0:null===(n=T.input)||void 0===n?void 0:null===(i=n[t])||void 0===i?void 0:i[e.inputId],type:e.inputType,gridProps:null!==(v=e.gridProps)&&void 0!==v?v:{},rows:"textarea"===e.inputType?6:1,multiline:"textarea"===e.inputType,rules:e.rules},t):null}),e.inputs.map((e,t)=>{var n,i;return"date"===e.inputType||"datetime"===e.inputType||"time"===e.inputType?(0,l.jsx)(p.Z,{defaultValue:e.defaultValue,name:"input.".concat(t,".").concat(e.inputId),label:e.inputLabel,control:g,type:e.inputType,description:"".concat(e.inputId,"-description"),error:null==T?void 0:null===(n=T.input)||void 0===n?void 0:null===(i=n[t])||void 0===i?void 0:i[e.inputId],gridProps:null!==(f=e.gridProps)&&void 0!==f?f:{},time:"datetime"===e.inputType},t):null}),(0,l.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,l.jsx)(m.Z,{size:"large",type:"submit",variant:"contained",sx:{mr:3},children:e.submitButtonText}),(0,l.jsx)(m.Z,{size:"large",variant:"outlined",color:"secondary",onClick:P,children:"Cancel"})]})]})})]})};t.Z=b},39673:function(e,t,n){"use strict";var l=n(85893),i=n(31538),a=n(79072),r=n(55343),u=n(58316),o=n(53442),s=n(32631),d=n(87536);n(67294),t.Z=function(e){var t,n,c;let p=null===(t=e.menuItems)||void 0===t?void 0:t.map(e=>(0,l.jsx)(i.Z,{value:e.value,children:e.label},e.value));return(0,l.jsx)(a.ZP,{item:!0,...e.gridProps,children:(0,l.jsxs)(r.Z,{fullWidth:!0,children:[(0,l.jsx)(d.Qr,{name:e.name,control:e.control,defaultValue:e.defaultValue,rules:null!==(n=e.rules)&&void 0!==n?n:{required:!0},render(t){let{field:{value:n,onChange:i}}=t;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.Z,{id:e.labelId,children:e.label}),(0,l.jsx)(o.Z,{fullWidth:!0,value:n,id:e.inputId,label:e.label,onChange:i,error:Boolean(e.error),labelId:e.labelId,"aria-describedby":e.description,inputProps:{placeholder:"Select ".concat(e.label)},multiple:null!==(c=e.multiple)&&void 0!==c&&c,children:p})]})}}),e.error&&(0,l.jsx)(s.Z,{sx:{color:"error.main"},id:e.description,children:"This field is required"})]})})}},48621:function(e,t,n){"use strict";var l=n(85893),i=n(79072),a=n(55343),r=n(67836),u=n(32631);n(67294);var o=n(87536);let s=e=>{var t,n,s,d;return(0,l.jsx)(i.ZP,{item:!0,xs:12,...e.gridProps,children:(0,l.jsxs)(a.Z,{fullWidth:!0,children:[(0,l.jsx)(o.Qr,{name:e.name,control:e.control,defaultValue:e.defaultValue,rules:null!==(t=e.rules)&&void 0!==t?t:{required:!0},render(t){let{field:{value:i,onChange:a}}=t;return(0,l.jsx)(r.Z,{value:i,label:e.label,type:null!==(n=e.type)&&void 0!==n?n:"string",onChange:a,placeholder:e.label,error:Boolean(e.error),"aria-describedby":e.description,rows:null!==(s=e.rows)&&void 0!==s?s:1,multiline:null!==(d=e.multiline)&&void 0!==d&&d})}}),e.error&&(0,l.jsx)(u.Z,{sx:{color:"error.main"},id:e.description,children:"This field is required"})]})})};t.Z=s},95828:function(){}},function(e){e.O(0,[891,842,661,536,215,292,774,888,179],function(){return e(e.s=98166)}),_N_E=e.O()}]);