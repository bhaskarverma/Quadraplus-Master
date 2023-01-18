(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[315],{87616:function(e,l,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/leads/new",function(){return r(26039)}])},26039:function(e,l,r){"use strict";r.r(l);var i=r(85893),a=r(75084),n=r(67074),s=r(29630),o=r(61953),t=r(74231),d=r(47533),c=r(87536),u=r(9473),m=r(99610),p=r(52909),b=r(48621),x=r(39673),h=r(67294),Z=r(79072),v=r(18424);let j=(0,n.ZP)(o.Z)(e=>{let{theme:l}=e;return{display:"flex",alignItems:"center",padding:l.spacing(3,4),justifyContent:"space-between",backgroundColor:l.palette.background.default}}),f=t.Ry().shape({name:t.Z_().required("Name is required"),contact_no:t.Z_(),email:t.Z_(),company:t.Z_(),course_id:t.Rx().required("Course is required"),type:t.Z_().required("Probability is required"),source:t.Z_().required("Source is required")}),y={name:"",contact_no:"",email:"",company:"",course_id:"",type:"",source:""},P=()=>{let e=(0,u.v9)(e=>e.courses),[l,r]=(0,h.useState)([]),n=(0,v.a)(),t=n.token;(0,h.useEffect)(()=>{e.allCourses.length>0&&r(e.allCourses.map(e=>({value:e.id,label:e.name})))},[e.allCourses]);let P=(0,u.I0)(),{reset:g,control:_,handleSubmit:C,formState:{errors:I}}=(0,c.cI)({defaultValues:y,mode:"onChange",resolver:(0,d.X)(f)});(0,h.useEffect)(()=>{P((0,p.gS)({token:t}))},[P,t]);let q=e=>{P((0,m._k)({lead:e,token:t})),g()},k=()=>{g()};return(0,i.jsxs)(Z.ZP,{container:!0,spacing:3,children:[(0,i.jsx)(Z.ZP,{item:!0,xs:12,children:(0,i.jsx)(j,{children:(0,i.jsx)(s.Z,{variant:"h6",children:"New Lead"})})}),(0,i.jsx)(o.Z,{sx:{p:5},children:(0,i.jsx)("form",{onSubmit:C(q),children:(0,i.jsxs)(Z.ZP,{container:!0,spacing:3,children:[(0,i.jsx)(Z.ZP,{item:!0,xs:6,children:(0,i.jsx)(b.Z,{label:"Name",name:"name",control:_,error:I.name,description:"lead-name-description",gridProps:{mb:6}})}),(0,i.jsx)(Z.ZP,{item:!0,xs:6,children:(0,i.jsx)(b.Z,{label:"Contact No",name:"contact_no",control:_,error:I.contact_no,description:"lead-contact-no-description",gridProps:{mb:6}})}),(0,i.jsx)(Z.ZP,{item:!0,xs:6,children:(0,i.jsx)(b.Z,{label:"Email",name:"email",type:"email",control:_,error:I.email,description:"lead-email-description",gridProps:{mb:6}})}),(0,i.jsx)(Z.ZP,{item:!0,xs:6,children:(0,i.jsx)(b.Z,{label:"Company",name:"company",control:_,error:I.company,description:"lead-company-description",gridProps:{mb:6}})}),(0,i.jsx)(Z.ZP,{item:!0,xs:6,children:(0,i.jsx)(x.Z,{label:"Course",name:"course_id",control:_,error:I.course_id,description:"lead-course-description",inputId:"lead-course-select",labelId:"lead-course-select-label",menuItems:l,gridProps:{mb:6}})}),(0,i.jsx)(Z.ZP,{item:!0,xs:6,children:(0,i.jsx)(x.Z,{label:"Probability",name:"type",control:_,error:I.type,description:"lead-type-description",inputId:"lead-type-select",labelId:"lead-type-select-label",menuItems:[{value:"high",label:"HIGH"},{value:"medium",label:"MEDIUM"},{value:"low",label:"LOW"}],gridProps:{mb:6}})}),(0,i.jsx)(Z.ZP,{item:!0,xs:6,children:(0,i.jsx)(x.Z,{label:"Source",name:"source",control:_,error:I.source,description:"lead-source-description",inputId:"lead-source-select",labelId:"lead-source-select-label",menuItems:[{value:"WhatsApp",label:"WhatsApp"},{value:"Email",label:"Email"},{value:"Landline Call",label:"Landline Call"},{value:"Mobile Call",label:"Mobile Call"},{value:"Referral",label:"Referral"},{value:"Live Chat",label:"Live Chat"},{value:"Website - Enquiry Form",label:"Website - Enquiry Form"},{value:"Website - Contact Us",label:"Website - Contact Us"},{value:"Facebook",label:"Facebook"},{value:"Walk-In",label:"Walk-In"}],gridProps:{mb:6}})}),(0,i.jsx)(Z.ZP,{item:!0,xs:12,children:(0,i.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(a.Z,{size:"large",type:"submit",variant:"contained",sx:{mr:3},children:"Submit"}),(0,i.jsx)(a.Z,{size:"large",variant:"outlined",color:"secondary",onClick:k,children:"Cancel"})]})})]})})})]})};l.default=P},39673:function(e,l,r){"use strict";var i=r(85893),a=r(31538),n=r(79072),s=r(55343),o=r(58316),t=r(53442),d=r(32631),c=r(87536);r(67294),l.Z=function(e){var l,r,u;let m=null===(l=e.menuItems)||void 0===l?void 0:l.map(e=>(0,i.jsx)(a.Z,{value:e.value,children:e.label},e.value));return(0,i.jsx)(n.ZP,{item:!0,...e.gridProps,children:(0,i.jsxs)(s.Z,{fullWidth:!0,children:[(0,i.jsx)(c.Qr,{name:e.name,control:e.control,defaultValue:e.defaultValue,rules:null!==(r=e.rules)&&void 0!==r?r:{required:!0},render(l){let{field:{value:r,onChange:a}}=l;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{id:e.labelId,children:e.label}),(0,i.jsx)(t.Z,{fullWidth:!0,value:r,id:e.inputId,label:e.label,onChange:a,error:Boolean(e.error),labelId:e.labelId,"aria-describedby":e.description,inputProps:{placeholder:"Select ".concat(e.label)},multiple:null!==(u=e.multiple)&&void 0!==u&&u,children:m})]})}}),e.error&&(0,i.jsx)(d.Z,{sx:{color:"error.main"},id:e.description,children:"This field is required"})]})})}},48621:function(e,l,r){"use strict";var i=r(85893),a=r(79072),n=r(55343),s=r(67836),o=r(32631);r(67294);var t=r(87536);let d=e=>{var l,r,d,c;return(0,i.jsx)(a.ZP,{item:!0,xs:12,...e.gridProps,children:(0,i.jsxs)(n.Z,{fullWidth:!0,children:[(0,i.jsx)(t.Qr,{name:e.name,control:e.control,defaultValue:e.defaultValue,rules:null!==(l=e.rules)&&void 0!==l?l:{required:!0},render(l){let{field:{value:a,onChange:n}}=l;return(0,i.jsx)(s.Z,{value:a,label:e.label,type:null!==(r=e.type)&&void 0!==r?r:"string",onChange:n,placeholder:e.label,error:Boolean(e.error),"aria-describedby":e.description,rows:null!==(d=e.rows)&&void 0!==d?d:1,multiline:null!==(c=e.multiline)&&void 0!==c&&c})}}),e.error&&(0,i.jsx)(o.Z,{sx:{color:"error.main"},id:e.description,children:"This field is required"})]})})};l.Z=d}},function(e){e.O(0,[536,491,774,888,179],function(){return e(e.s=87616)}),_N_E=e.O()}]);