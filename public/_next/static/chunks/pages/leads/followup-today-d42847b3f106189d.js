(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[406],{58951:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(63366),a=n(87462),o=n(67294),i=n(27192),l=n(11496),s=n(71657),u=n(15861),c=n(28979);function d(e){return(0,c.Z)("MuiDialogContentText",e)}(0,n(76087).Z)("MuiDialogContentText",["root"]);var p=n(85893);const f=["children"],m=(0,l.ZP)(u.Z,{shouldForwardProp:e=>(0,l.FO)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,t)=>t.root})({});var x=o.forwardRef((function(e,t){const n=(0,s.Z)({props:e,name:"MuiDialogContentText"}),o=(0,r.Z)(n,f),l=(e=>{const{classes:t}=e,n=(0,i.Z)({root:["root"]},d,t);return(0,a.Z)({},t,n)})(o);return(0,p.jsx)(m,(0,a.Z)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:o},n,{classes:l}))}))},37645:function(e,t,n){"use strict";var r=n(87462),a=n(63366),o=n(67294),i=n(86010),l=n(27192),s=n(15861),u=n(11496),c=n(71657),d=n(4472),p=n(34182),f=n(85893);const m=["className","id"],x=(0,u.ZP)(s.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),g=o.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiDialogTitle"}),{className:s,id:u}=n,g=(0,a.Z)(n,m),h=n,v=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},d.a,t)})(h),{titleId:b=u}=o.useContext(p.Z);return(0,f.jsx)(x,(0,r.Z)({component:"h2",className:(0,i.Z)(v.root,s),ownerState:h,ref:t,variant:"h6",id:b},g))}));t.Z=g},46160:function(e,t,n){"use strict";var r;t.Z=void 0;var a=(0,((r=n(65129))&&r.__esModule?r:{default:r}).default)("M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z","DotsVertical");t.Z=a},97475:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/leads/followup-today",function(){return n(7072)}])},15271:function(e,t,n){"use strict";n.d(t,{A4:function(){return a},Dm:function(){return o},Yd:function(){return u},_n:function(){return s}});var r=["January","February","March","April","May","June","July","August","September","October","November","December"],a=function(e){var t=e.split("-"),n=t[2],a=r[parseInt(t[1])-1],o=t[0];return"".concat(n," ").concat(a," ").concat(o)},o=function(e){var t=e.split("-"),n=t[2],a=r[parseInt(t[1])-1],o=t[0];return"".concat(n," ").concat(a," ").concat(o)},i=function(e){return new Date(e)},l=function(e){return"0"!==e.charAt(0)&&1===e.length?"0"+e:e},s=function(e){var t=i(e),n=l(t.getDate().toString()),r=l((t.getMonth()+1).toString()),a=t.getFullYear().toString();return"".concat(a,"-").concat(r,"-").concat(n)},u=function(e){var t=i(e);return t.getFullYear()+"-"+l((t.getMonth()+1).toString())+"-"+l(t.getDate().toString())+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}},7072:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(93946),o=n(38333),i=n(18972),l=n(15861),s=n(86886),u=n(66242),c=n(24156),d=n(67294),p=n(10667),f=n(9473),m=n(99610),x=n(18424),g=n(23213),h=n(46160),v=n(3690),b=n(68045),Z=n(15271),C=n(89829),w={GREEN:"success",ORANGE:"warning",RED:"error"},j=function(e){var t=e.id,n=(0,d.useState)(null),l=n[0],s=n[1],u=(0,f.I0)(),c=(0,x.a)().token,p=(0,d.useState)(!1),g=p[0],w=p[1],j=(0,d.useState)(!1),y=j[0],_=j[1],T=(0,d.useState)(!1),k=T[0],S=T[1],L=(0,d.useState)(!1),N=L[0],O=L[1],I=Boolean(l),A=function(){s(null)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{size:"small",onClick:function(e){s(e.currentTarget)},children:(0,r.jsx)(h.Z,{})}),(0,r.jsxs)(o.Z,{keepMounted:!0,anchorEl:l,open:I,onClose:A,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{style:{minWidth:"8rem"}},children:[(0,r.jsxs)(i.Z,{onClick:function(){A(),O(!0)},children:[(0,r.jsx)(v.Z,{fontSize:"small",sx:{mr:2}}),"Unassign Self"]}),(0,r.jsxs)(i.Z,{onClick:function(){A(),w(!0)},children:[(0,r.jsx)(v.Z,{fontSize:"small",sx:{mr:2}}),"Change Lead Type"]}),(0,r.jsxs)(i.Z,{onClick:function(){A(),_(!0)},children:[(0,r.jsx)(v.Z,{fontSize:"small",sx:{mr:2}}),"Follow Up"]}),(0,r.jsxs)(i.Z,{onClick:function(){A(),S(!0)},children:[(0,r.jsx)(v.Z,{fontSize:"small",sx:{mr:2}}),"Close"]})]}),(0,r.jsx)(b.Z,{dialogTitle:"Update Role",isOpen:g,setIsOpen:w,onSubmit:function(e){var n=Object.values(e.input[0])[0];u((0,m.XH)({token:c,lead_id:t,type:n}))},submitButtonText:"Update",inputs:[{inputId:"type",inputLabel:"Type",inputType:"select",inputLabelId:"type-label",gridProps:{md:6},menuItems:[{value:"high",label:"HIGH"},{value:"medium",label:"MEDIUM"},{value:"low",label:"LOW"}]}]}),(0,r.jsx)(b.Z,{dialogTitle:"Follow Up",isOpen:y,setIsOpen:_,onSubmit:function(e){var n=Object.values(e.input[0])[0],r=Object.values(e.input[1])[0],a=(0,Z._n)(r);u((0,m._m)({token:c,lead_id:t,remarks:n,follow_up_date:a}))},submitButtonText:"Follow Up",inputs:[{inputId:"remarks",inputLabel:"Remarks",inputType:"textarea",inputLabelId:"remarks-label",gridProps:{md:6}},{inputId:"followup_date",inputLabel:"Follow Up Date",inputType:"date",inputLabelId:"followup_date-label",gridProps:{md:6}}]}),(0,r.jsx)(b.Z,{dialogTitle:"Close Lead",isOpen:k,setIsOpen:S,onSubmit:function(e){var n=Object.values(e.input[0])[0],r=Object.values(e.input[1])[0];u((0,m.U6)({token:c,lead_id:t,status:n,closing_remark:r}))},submitButtonText:"Close Lead",inputs:[{inputId:"status",inputLabel:"Status",inputType:"select",inputLabelId:"status-select",gridProps:{md:6},menuItems:[{value:"Converted",label:"Converted"},{value:"Failed",label:"Failed"}]},{inputId:"remarks",inputLabel:"Remarks",inputType:"textarea",inputLabelId:"remarks-label",gridProps:{md:6}}]}),(0,r.jsx)(C.Z,{agreeText:"Unassign",dialogText:"Confirm Unassign Self From The Lead",dialogTitle:"Confirm Unassign Self",disagreeText:"Cancel",isOpen:N,setOnAgree:function(){u((0,m.ks)({token:c,lead_id:t}))},setOpen:O})]})},y=[{flex:.1,field:"name",headerName:"Name",renderCell:function(e){var t=e.row;return(0,r.jsx)(l.Z,{variant:"body2",children:t.name})}},{flex:.1,field:"contact_no",headerName:"Contact No",renderCell:function(e){var t=e.row;return(0,r.jsx)(l.Z,{variant:"body2",children:t.contact_no})}},{flex:.1,field:"email",headerName:"Email",renderCell:function(e){var t=e.row;return(0,r.jsx)(l.Z,{variant:"body2",children:t.email})}},{flex:.1,field:"company",headerName:"Company",renderCell:function(e){var t=e.row;return(0,r.jsx)(l.Z,{variant:"body2",children:t.company})}},{flex:.1,field:"course_name",headerName:"Course",renderCell:function(e){var t=e.row;return(0,r.jsx)(l.Z,{variant:"body2",children:t.course_name})}},{flex:.1,field:"next_update",headerName:"Next Update",renderCell:function(e){var t=e.row;return(0,r.jsx)(l.Z,{variant:"body2",children:(0,Z.Dm)(t.next_update)})}},{flex:.1,field:"type",headerName:"Probability",renderCell:function(e){var t=e.row;return(0,r.jsx)(g.Z,{skin:"light",size:"small",label:t.type.toUpperCase(),color:w[t.type.toUpperCase()],sx:{textTransform:"capitalize"}})}},{flex:.1,minWidth:90,sortable:!1,field:"actions",headerName:"Actions",renderCell:function(e){var t=e.row;return(0,r.jsx)(j,{id:t.id})}}];t.default=function(){var e=(0,d.useState)([]),t=e[0],n=e[1],a=(0,d.useState)(10),o=a[0],i=a[1],l=(0,d.useState)(""),g=l[0],h=l[1],v=(0,f.I0)(),b=(0,f.v9)((function(e){return e.leads})),Z=(0,x.a)().token;return(0,d.useEffect)((function(){v((0,m.dN)({token:Z}))}),[v,Z]),(0,d.useEffect)((function(){if(b.followupLeads){var e=b.followupLeads.filter((function(e){return e.name.toLowerCase().includes(g.toLowerCase())||e.contact_no.toLowerCase().includes(g.toLowerCase())||e.email.toLowerCase().includes(g.toLowerCase())||e.company.toLowerCase().includes(g.toLowerCase())||e.course_name.toLowerCase().includes(g.toLowerCase())}));n(e)}}),[g,b.followupLeads]),(0,r.jsxs)(s.ZP,{container:!0,spacing:6,children:[(0,r.jsx)(s.ZP,{item:!0,xs:12}),(0,r.jsx)(s.ZP,{item:!0,xs:12,children:(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(p.Z,{exportFileName:"Followup Leads for Today",exportData:t.map((function(e){return{Name:e.name,"Contact No":e.contact_no,Email:e.email,Company:e.company,Course:e.course_name,Type:e.type.toUpperCase()}})),handleFilter:function(e){h(e)},searchBoxText:"Search Leads",value:g}),(0,r.jsx)(c._,{autoHeight:!0,pagination:!0,rows:t,columns:y,disableSelectionOnClick:!0,pageSize:Number(o),rowsPerPageOptions:[10,25,50],onPageSizeChange:function(e){return i(e)}})]})})]})}},89829:function(e,t,n){"use strict";var r=n(85893),a=n(67294),o=n(44872),i=n(64666),l=n(37645),s=n(6514),u=n(31425),c=n(58951);t.Z=function(e){var t=e.dialogTitle,n=e.dialogText,d=e.disagreeText,p=e.agreeText,f=e.isOpen,m=e.setOpen,x=e.setOnAgree,g=function(){return m(!1)};return(0,r.jsx)(a.Fragment,{children:(0,r.jsxs)(i.Z,{open:f,disableEscapeKeyDown:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",onClose:function(e,t){"backdropClick"!==t&&g()},children:[(0,r.jsx)(l.Z,{id:"alert-dialog-title",children:t}),(0,r.jsx)(s.Z,{children:(0,r.jsx)(c.Z,{id:"alert-dialog-description",children:n})}),(0,r.jsxs)(u.Z,{className:"dialog-actions-dense",children:[(0,r.jsx)(o.Z,{onClick:g,children:d}),(0,r.jsx)(o.Z,{onClick:x,children:p})]})]})})}}},function(e){e.O(0,[806,912,283,285,915,695,774,888,179],(function(){return t=97475,e(e.s=t);var t}));var t=e.O();_N_E=t}]);