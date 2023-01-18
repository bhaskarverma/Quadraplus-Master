(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{36557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/associates",function(){return t(63119)}])},4090:function(e,n,t){"use strict";t.d(n,{f:function(){return l}});let l=e=>e.charAt(0).toUpperCase()+e.slice(1)},63119:function(e,n,t){"use strict";t.r(n);var l=t(85893),i=t(29630),r=t(79072),a=t(49837),u=t(62443),s=t(67294),o=t(10667),d=t(9473),p=t(79635),c=t(18424),m=t(32945),x=t(4090);let v=[{flex:.1,field:"name",headerName:"Name",renderCell(e){let{row:n}=e;return(0,l.jsx)(i.Z,{variant:"body2",children:n.name})}},{flex:.1,field:"username",headerName:"Username",renderCell(e){let{row:n}=e;return(0,l.jsx)(i.Z,{variant:"body2",children:n.username})}},{flex:.1,field:"email",headerName:"Email",renderCell(e){let{row:n}=e;return(0,l.jsx)(i.Z,{variant:"body2",children:n.email})}},{flex:.1,field:"course",headerName:"Course",renderCell(e){let{row:n}=e;return(0,l.jsx)(i.Z,{variant:"body2",children:n.course})}},{flex:.1,field:"type",headerName:"Type",renderCell(e){let{row:n}=e;return(0,l.jsx)(i.Z,{variant:"body2",children:(0,x.f)(n.type)})}}];n.default=function(){let[e,n]=(0,s.useState)([]),[t,i]=(0,s.useState)(!1),[x,h]=(0,s.useState)(10),[b,f]=(0,s.useState)(""),j=(0,d.I0)(),g=(0,d.v9)(e=>e.users),I=(0,c.a)(),Z=I.token,y=e=>{f(e)};(0,s.useEffect)(()=>{j((0,p.Qc)({token:Z}))},[j,Z]);let C=e=>{let n=Object.values(e.input[0])[0],t=Object.values(e.input[1])[0],l=Object.values(e.input[2])[0],i=Object.values(e.input[3])[0];j((0,p.r4)({token:Z,name:n,email:t,type:i,username:l}))},T=()=>{i(!0)};return(0,s.useEffect)(()=>{let e=g.allUsers.filter(e=>e.name.toLowerCase().includes(b.toLowerCase())||e.username.toLowerCase().includes(b.toLowerCase())||e.type.toLowerCase().includes(b.toLowerCase()));n(e)},[b,g.allUsers]),(0,l.jsxs)(r.ZP,{container:!0,spacing:6,children:[(0,l.jsx)(r.ZP,{item:!0,xs:12}),(0,l.jsx)(r.ZP,{item:!0,xs:12,children:(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(o.Z,{exportFileName:"Associates",exportData:(()=>{let n=e.map(e=>({Name:e.name,Username:e.username,Email:e.email,type:e.type,"Course Assigned":e.course}));return n})(),handleFilter:y,searchBoxText:"Search Associates",value:b,actionButtonDrawerToggle:T,actionButtonType:"drawer",actionButtonText:"Add New Associates"}),(0,l.jsx)(u._,{autoHeight:!0,pagination:!0,rows:e,columns:v,disableSelectionOnClick:!0,pageSize:Number(x),rowsPerPageOptions:[10,25,50],onPageSizeChange:e=>h(e)})]})}),(0,l.jsx)(m.Z,{drawerTitle:"New Associate",isOpen:t,setIsOpen:i,submitButtonText:"Add",onSubmit:C,inputs:[{inputId:"name",inputLabel:"Name",inputLabelId:"name-label",inputType:"text",gridProps:{mb:6}},{inputId:"email",inputLabel:"Email",inputLabelId:"email-label",inputType:"email",gridProps:{mb:6},rules:{required:!1}},{inputId:"username",inputLabel:"Username",inputLabelId:"username-label",inputType:"text",gridProps:{mb:6}},{inputId:"type",inputLabel:"Type",inputLabelId:"type-select-label",inputType:"select",gridProps:{mb:6},menuItems:[{label:"Admin",value:"admin"},{label:"Associate",value:"associate"},{label:"Trainer",value:"trainer"},{label:"Manager",value:"manager"}]}]})]})}},10667:function(e,n,t){"use strict";var l=t(85893),i=t(61953),r=t(75084),a=t(67836),u=t(83461),s=t(95534),o=t(41664),d=t.n(o),p=t(18424);let c=e=>{var n,t;let{handleFilter:o,value:c,actionButtonText:m,searchBoxText:x,actionButtonType:v}=e,h=()=>{},b=(0,p.a)(),f=null==b?void 0:null===(n=b.user)||void 0===n?void 0:n.type;return(0,l.jsxs)(i.Z,{sx:{p:5,pb:3,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[e.exportFileName&&e.exportData&&"admin"==f&&(0,l.jsx)(u.CSVLink,{style:{textDecoration:"none"},data:e.exportData,filename:e.exportFileName,children:(0,l.jsx)(r.Z,{sx:{mr:4,mb:2},color:"secondary",variant:"outlined",onClick:h,startIcon:(0,l.jsx)(s.Z,{fontSize:"small"}),children:"Export"})}),(0,l.jsxs)(i.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center"},children:[(0,l.jsx)(a.Z,{size:"small",value:c,sx:{mr:4,mb:2},placeholder:x,onChange:e=>o(e.target.value)}),"link"===v?(0,l.jsx)(d(),{href:null!==(t=e.actionButtonLinkPath)&&void 0!==t?t:"#",children:(0,l.jsx)(r.Z,{sx:{mb:2},variant:"contained",children:m})}):"","drawer"===v?(0,l.jsx)(r.Z,{sx:{mb:2},onClick:e.actionButtonDrawerToggle,variant:"contained",children:m}):"","function"===v?(0,l.jsx)(r.Z,{sx:{mb:2},onClick:e.actionButtonFunction,variant:"contained",children:m}):""]})]})};n.Z=c},40883:function(e,n,t){"use strict";var l=t(85893),i=t(79072),r=t(67836),a=t(32631);t(67294);var u=t(87536),s=t(68269),o=t(79987),d=t(45459),p=t(5344),c=t(66448);n.Z=function(e){var n;return(0,l.jsxs)(i.ZP,{item:!0,...e.gridProps,children:[(0,l.jsx)(u.Qr,{name:e.name,control:e.control,defaultValue:e.defaultValue,rules:null!==(n=e.rules)&&void 0!==n?n:{required:!0},render(n){let{field:{value:t,onChange:i}}=n;return(0,l.jsx)(p.Z,{dateAdapter:c.Z,children:e.type&&"time"===e.type?(0,l.jsx)(d.j,{label:e.label,value:t,onChange:i,renderInput:e=>(0,l.jsx)(r.Z,{sx:{width:"100%"},onChange:i,value:t,...e})}):e.time?(0,l.jsx)(o.x,{label:e.label,value:t,onChange:i,renderInput:e=>(0,l.jsx)(r.Z,{sx:{width:"100%"},onChange:i,value:t,...e})}):(0,l.jsx)(s.Z,{label:e.label,value:t,onChange:i,renderInput:e=>(0,l.jsx)(r.Z,{sx:{width:"100%"},onChange:i,value:t,...e})})})}}),e.error&&(0,l.jsx)(a.Z,{sx:{mx:3.5,color:"error.main"},id:e.description,children:"This field is required"})]})}},32945:function(e,n,t){"use strict";var l=t(85893),i=t(64631),r=t(67074),a=t(29630),u=t(61953),s=t(87536),o=t(42734),d=t(48621),p=t(39673),c=t(40883),m=t(75084),x=t(67294);let v=(0,r.ZP)(u.Z)(e=>{let{theme:n}=e;return{display:"flex",alignItems:"center",padding:n.spacing(3,4),justifyContent:"space-between",backgroundColor:n.palette.background.default}}),h=e=>{var n,t,r,h,b,f;let j=(()=>{let n={input:[]};return e.inputs.forEach(e=>{let t={};if("select-multiple"===e.inputType)t[e.inputId]=[];else{var l;t[e.inputId]=null!==(l=e.defaultValue)&&void 0!==l?l:""}n.input.push(t)}),n})(),{reset:g,control:I,watch:Z,handleSubmit:y,formState:{errors:C}}=(0,s.cI)({defaultValues:j,mode:"onChange"}),T=n=>{e.setIsOpen(!1),g(),e.onSubmit(n)},w=()=>{e.setIsOpen(!1),g()},P=n=>{var t;return null===(t=e.inputs.find(e=>e.inputId===n))||void 0===t?void 0:t.menuItems},L=Z();return(0,x.useEffect)(()=>{e.inputs.forEach(e=>{e.onChange&&e.onChange(L.input)})},[L]),(0,l.jsxs)(i.ZP,{open:e.isOpen,anchor:"right",variant:"temporary",onClose:w,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,l.jsxs)(v,{children:[(0,l.jsx)(a.Z,{variant:"h6",children:e.drawerTitle}),(0,l.jsx)(o.Z,{fontSize:"small",onClick:w,sx:{cursor:"pointer"}})]}),(0,l.jsx)(u.Z,{sx:{p:5},children:(0,l.jsxs)("form",{onSubmit:y(T),children:[e.inputs.map((e,i)=>{var r,a;return"select"===e.inputType?(0,l.jsx)(p.Z,{defaultValue:e.defaultValue,name:"input.".concat(i,".").concat(e.inputId),label:e.inputLabel,labelId:e.inputLabelId,inputId:e.inputId,menuItems:null!==(n=P(e.inputId))&&void 0!==n?n:[],control:I,description:"".concat(e.inputId,"-description"),error:null==C?void 0:null===(r=C.input)||void 0===r?void 0:null===(a=r[i])||void 0===a?void 0:a[e.inputId],gridProps:null!==(t=e.gridProps)&&void 0!==t?t:{}},i):null}),e.inputs.map((e,n)=>{var t,i;return"select-multiple"===e.inputType?(0,l.jsx)(p.Z,{multiple:!0,defaultValue:e.defaultValue,name:"input.".concat(n,".").concat(e.inputId),label:e.inputLabel,labelId:e.inputLabelId,inputId:e.inputId,menuItems:null!==(r=P(e.inputId))&&void 0!==r?r:[],control:I,description:"".concat(e.inputId,"-description"),error:null==C?void 0:null===(t=C.input)||void 0===t?void 0:null===(i=t[n])||void 0===i?void 0:i[e.inputId],gridProps:null!==(h=e.gridProps)&&void 0!==h?h:{}},n):null}),e.inputs.map((e,n)=>{var t,i;return"text"===e.inputType||"textarea"==e.inputType||"number"==e.inputType||"email"==e.inputType?(0,l.jsx)(d.Z,{defaultValue:e.defaultValue,name:"input.".concat(n,".").concat(e.inputId),label:e.inputLabel,control:I,description:"".concat(e.inputId,"-description"),error:null==C?void 0:null===(t=C.input)||void 0===t?void 0:null===(i=t[n])||void 0===i?void 0:i[e.inputId],type:e.inputType,gridProps:null!==(b=e.gridProps)&&void 0!==b?b:{},rows:"textarea"===e.inputType?6:1,multiline:"textarea"===e.inputType,rules:e.rules},n):null}),e.inputs.map((e,n)=>{var t,i;return"date"===e.inputType||"datetime"===e.inputType||"time"===e.inputType?(0,l.jsx)(c.Z,{defaultValue:e.defaultValue,name:"input.".concat(n,".").concat(e.inputId),label:e.inputLabel,control:I,type:e.inputType,description:"".concat(e.inputId,"-description"),error:null==C?void 0:null===(t=C.input)||void 0===t?void 0:null===(i=t[n])||void 0===i?void 0:i[e.inputId],gridProps:null!==(f=e.gridProps)&&void 0!==f?f:{},time:"datetime"===e.inputType},n):null}),(0,l.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,l.jsx)(m.Z,{size:"large",type:"submit",variant:"contained",sx:{mr:3},children:e.submitButtonText}),(0,l.jsx)(m.Z,{size:"large",variant:"outlined",color:"secondary",onClick:w,children:"Cancel"})]})]})})]})};n.Z=h},39673:function(e,n,t){"use strict";var l=t(85893),i=t(31538),r=t(79072),a=t(55343),u=t(58316),s=t(53442),o=t(32631),d=t(87536);t(67294),n.Z=function(e){var n,t,p;let c=null===(n=e.menuItems)||void 0===n?void 0:n.map(e=>(0,l.jsx)(i.Z,{value:e.value,children:e.label},e.value));return(0,l.jsx)(r.ZP,{item:!0,...e.gridProps,children:(0,l.jsxs)(a.Z,{fullWidth:!0,children:[(0,l.jsx)(d.Qr,{name:e.name,control:e.control,defaultValue:e.defaultValue,rules:null!==(t=e.rules)&&void 0!==t?t:{required:!0},render(n){let{field:{value:t,onChange:i}}=n;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.Z,{id:e.labelId,children:e.label}),(0,l.jsx)(s.Z,{fullWidth:!0,value:t,id:e.inputId,label:e.label,onChange:i,error:Boolean(e.error),labelId:e.labelId,"aria-describedby":e.description,inputProps:{placeholder:"Select ".concat(e.label)},multiple:null!==(p=e.multiple)&&void 0!==p&&p,children:c})]})}}),e.error&&(0,l.jsx)(o.Z,{sx:{color:"error.main"},id:e.description,children:"This field is required"})]})})}},48621:function(e,n,t){"use strict";var l=t(85893),i=t(79072),r=t(55343),a=t(67836),u=t(32631);t(67294);var s=t(87536);let o=e=>{var n,t,o,d;return(0,l.jsx)(i.ZP,{item:!0,xs:12,...e.gridProps,children:(0,l.jsxs)(r.Z,{fullWidth:!0,children:[(0,l.jsx)(s.Qr,{name:e.name,control:e.control,defaultValue:e.defaultValue,rules:null!==(n=e.rules)&&void 0!==n?n:{required:!0},render(n){let{field:{value:i,onChange:r}}=n;return(0,l.jsx)(a.Z,{value:i,label:e.label,type:null!==(t=e.type)&&void 0!==t?t:"string",onChange:r,placeholder:e.label,error:Boolean(e.error),"aria-describedby":e.description,rows:null!==(o=e.rows)&&void 0!==o?o:1,multiline:null!==(d=e.multiline)&&void 0!==d&&d})}}),e.error&&(0,l.jsx)(u.Z,{sx:{color:"error.main"},id:e.description,children:"This field is required"})]})})};n.Z=o}},function(e){e.O(0,[891,536,215,686,774,888,179],function(){return e(e.s=36557)}),_N_E=e.O()}]);