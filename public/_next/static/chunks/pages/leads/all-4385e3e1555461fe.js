(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[989],{37645:function(e,t,n){"use strict";var r=n(87462),a=n(63366),o=n(67294),i=n(86010),l=n(27192),s=n(15861),u=n(11496),c=n(71657),d=n(4472),f=n(34182),m=n(85893);const h=["className","id"],p=(0,u.ZP)(s.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),x=o.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiDialogTitle"}),{className:s,id:u}=n,x=(0,a.Z)(n,h),y=n,v=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},d.a,t)})(y),{titleId:b=u}=o.useContext(f.Z);return(0,m.jsx)(p,(0,r.Z)({component:"h2",className:(0,i.Z)(v.root,s),ownerState:y,ref:t,variant:"h6",id:b},x))}));t.Z=x},46160:function(e,t,n){"use strict";var r;t.Z=void 0;var a=(0,((r=n(65129))&&r.__esModule?r:{default:r}).default)("M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z","DotsVertical");t.Z=a},801:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/leads/all",function(){return n(12629)}])},12629:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(50135),o=n(93946),i=n(38333),l=n(18972),s=n(15861),u=n(86886),c=n(66242),d=n(78445),f=n(44267),m=n(44872),h=n(24156),p=n(67294),x=n(10667),y=n(9473),v=n(99610),b=n(79635),Z=n(18424),j=n(68045),C=n(46160),g=n(3690),w=n(32912),_=n(45225),A=n(9198),N=n.n(A);n(95828);function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){L(e,t,n[t])}))}return e}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(s){l=!0,a=s}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var k=(0,p.forwardRef)((function(e,t){var n=null!==e.start?(0,w.Z)(e.start,"yyyy/MM/dd"):"",o=null!==e.end?" - ".concat((0,w.Z)(e.end,"yyyy/MM/dd")):null,i="".concat(n).concat(null!==o?o:"");null===e.start&&e.dates.length&&e.setDates&&e.setDates([]);var l=P({},e);return delete l.setDates,(0,r.jsx)(a.Z,P({fullWidth:!0,inputRef:t},l,{label:e.label||"",value:i}))})),M=function(e){var t=e.id,n=(0,p.useState)(null),a=n[0],s=n[1],u=(0,y.I0)(),c=(0,y.v9)((function(e){return e.users})),d=(0,Z.a)().token,f=(0,p.useState)(!1),m=f[0],h=f[1],x=Boolean(a),b=c.allUsers.map((function(e){return{value:e.id,label:e.name}})),w=function(){s(null)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{size:"small",onClick:function(e){s(e.currentTarget)},children:(0,r.jsx)(C.Z,{})}),(0,r.jsx)(i.Z,{keepMounted:!0,anchorEl:a,open:x,onClose:w,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{style:{minWidth:"8rem"}},children:(0,r.jsxs)(l.Z,{onClick:function(){w(),h(!0)},children:[(0,r.jsx)(g.Z,{fontSize:"small",sx:{mr:2}}),"Assign"]})}),(0,r.jsx)(j.Z,{dialogTitle:"Assign Lead",isOpen:m,setIsOpen:h,onSubmit:function(e){var n=Object.values(e.input[0])[0];u((0,v.sB)({token:d,lead_id:t,assign_to:n}))},submitButtonText:"Assign",inputs:[{inputId:"associate",inputLabel:"Associate",inputType:"select",inputLabelId:"select-associate-label",gridProps:{md:6},menuItems:b}]})]})},D=[{flex:.1,field:"name",headerName:"Name",renderCell:function(e){var t=e.row;return(0,r.jsx)(s.Z,{variant:"body2",children:t.name})}},{flex:.1,field:"contact_no",headerName:"Contact No",renderCell:function(e){var t=e.row;return(0,r.jsx)(s.Z,{variant:"body2",children:t.contact_no})}},{flex:.1,field:"email",headerName:"Email",renderCell:function(e){var t=e.row;return(0,r.jsx)(s.Z,{variant:"body2",children:t.email})}},{flex:.1,field:"company",headerName:"Company",renderCell:function(e){var t=e.row;return(0,r.jsx)(s.Z,{variant:"body2",children:t.company})}},{flex:.1,field:"course_name",headerName:"Course",renderCell:function(e){var t=e.row;return(0,r.jsx)(s.Z,{variant:"body2",children:t.course_name})}},{flex:.1,field:"next_update",headerName:"Next Update",renderCell:function(e){var t=e.row;return(0,r.jsx)(s.Z,{variant:"body2",children:t.next_update})}},{flex:.1,field:"type",headerName:"Probability",renderCell:function(e){var t=e.row;return(0,r.jsx)(s.Z,{variant:"body2",children:t.type.toUpperCase()})}},{flex:.1,field:"assigned_to",headerName:"Assigned To",renderCell:function(e){var t=e.row;return(0,r.jsx)(s.Z,{variant:"body2",children:t.assigned_to_name})}},{flex:.1,minWidth:90,sortable:!1,field:"actions",headerName:"Actions",renderCell:function(e){var t=e.row;return(0,r.jsx)(M,{id:t.id})}}];t.default=function(){var e=(0,p.useState)([]),t=e[0],n=e[1],a=(0,p.useState)(10),o=a[0],i=a[1],l=(0,p.useState)(""),s=l[0],j=l[1],C=(0,p.useState)(null),g=C[0],A=C[1],S=(0,p.useState)(null),L=S[0],P=S[1],M=(0,p.useState)([]),E=M[0],T=M[1],I=(0,y.I0)(),R=(0,y.v9)((function(e){return e.leads})),z=(0,Z.a)().token;return(0,p.useEffect)((function(){I((0,b.Qc)({token:z}))}),[I,z]),(0,p.useEffect)((function(){var e=R.allLeads.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())||e.contact_no.toLowerCase().includes(s.toLowerCase())||e.email.toLowerCase().includes(s.toLowerCase())||e.company.toLowerCase().includes(s.toLowerCase())||e.course_name.toLowerCase().includes(s.toLowerCase())||e.assigned_to_name.toLowerCase().includes(s.toLowerCase())||e.type.toLowerCase().includes(s.toLowerCase())}));n(e)}),[s,R.allLeads]),(0,r.jsxs)(u.ZP,{container:!0,spacing:6,children:[(0,r.jsx)(u.ZP,{item:!0,xs:12,children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(d.Z,{title:"Filters"}),(0,r.jsx)(f.Z,{children:(0,r.jsxs)(u.ZP,{container:!0,spacing:6,children:[(0,r.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,r.jsx)(_.Z,{children:(0,r.jsx)(N(),{isClearable:!0,selectsRange:!0,monthsShown:2,endDate:g,selected:L,startDate:L,shouldCloseOnSelect:!1,id:"date-range-picker-months",onChange:function(e){var t=O(e,2),n=t[0],r=t[1];null!==n&&null!==r&&T(e),P(n),A(r)},customInput:(0,r.jsx)(k,{dates:E,setDates:T,label:"Date Range",end:g,start:L})})})}),(0,r.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,r.jsx)(m.Z,{sx:{mb:2},onClick:function(){if(L&&g){var e=(0,w.Z)(L,"yyyy-MM-dd"),t=(0,w.Z)(g,"yyyy-MM-dd");I((0,v.hF)({token:z,start_date:e,end_date:t}))}},variant:"contained",children:"Fetch Data"})})]})})]})}),(0,r.jsx)(u.ZP,{item:!0,xs:12}),(0,r.jsx)(u.ZP,{item:!0,xs:12,children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(x.Z,{exportFileName:"Active Leads",exportData:t.map((function(e){return{Name:e.name,"Contact No":e.contact_no,Email:e.email,Company:e.company,Course:e.course_name,Type:e.type.toUpperCase()}})),handleFilter:function(e){j(e)},searchBoxText:"Search Leads",value:s}),(0,r.jsx)(h._,{autoHeight:!0,pagination:!0,rows:t,columns:D,disableSelectionOnClick:!0,pageSize:Number(o),rowsPerPageOptions:[10,25,50],onPageSizeChange:function(e){return i(e)}})]})})]})}}},function(e){e.O(0,[806,912,661,283,285,915,963,695,774,888,179],(function(){return t=801,e(e.s=t);var t}));var t=e.O();_N_E=t}]);