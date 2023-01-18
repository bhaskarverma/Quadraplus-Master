(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[168],{78688:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/settings",function(){return n(3943)}])},3943:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return q}});var i=n(85893),r=n(67294),t=n(61953),a=n(49837),l=n(66568),d=n(55050),o=n(45670),c=n(67074),x=n(18661),h=n(99642),u=n(41036),w=n(79072),m=n(68346),j=n(19604),Z=n(53442),p=n(31538),g=n(67836),f=n(29630),P=n(58316),v=n(38391),b=n(80562),y=n(91359),C=n(55343),N=n(75084),k=n(42734),W=n(18424);let S=(0,c.ZP)("img")(e=>{let{theme:s}=e;return{width:120,height:120,marginRight:s.spacing(6.25),borderRadius:s.shape.borderRadius}}),_=(0,c.ZP)(N.Z)(e=>{let{theme:s}=e;return{[s.breakpoints.down("sm")]:{width:"100%",textAlign:"center"}}}),A=(0,c.ZP)(N.Z)(e=>{let{theme:s}=e;return{marginLeft:s.spacing(4.5),[s.breakpoints.down("sm")]:{width:"100%",marginLeft:0,textAlign:"center",marginTop:s.spacing(4)}}}),R=()=>{let[e,s]=(0,r.useState)(!1),[n,a]=(0,r.useState)("/images/avatars/1.png"),{user:l}=(0,W.a)(),d=e=>{let s=new FileReader,{files:n}=e.target;n&&0!==n.length&&(s.onload=()=>a(s.result),s.readAsDataURL(n[0]))};return(0,i.jsx)(y.Z,{children:(0,i.jsx)("form",{children:(0,i.jsxs)(w.ZP,{container:!0,spacing:7,children:[(0,i.jsx)(w.ZP,{item:!0,xs:12,sx:{mt:4.8,mb:3},children:(0,i.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(S,{src:n,alt:"Profile Pic"}),(0,i.jsxs)(t.Z,{children:[(0,i.jsxs)(_,{disabled:!0,component:"label",variant:"contained",htmlFor:"account-settings-upload-image",children:["Upload New Photo",(0,i.jsx)("input",{hidden:!0,type:"file",onChange:d,accept:"image/png, image/jpeg",id:"account-settings-upload-image"})]}),(0,i.jsx)(A,{disabled:!0,color:"error",variant:"outlined",onClick:()=>a("/images/avatars/1.png"),children:"Reset"}),(0,i.jsx)(f.Z,{variant:"body2",sx:{mt:5},children:"Allowed PNG or JPEG. Max size of 800K."})]})]})}),(0,i.jsx)(w.ZP,{item:!0,xs:12,sm:6,children:(0,i.jsx)(g.Z,{fullWidth:!0,label:"Username",disabled:!0,placeholder:null==l?void 0:l.username,value:null==l?void 0:l.username})}),(0,i.jsx)(w.ZP,{item:!0,xs:12,sm:6,children:(0,i.jsx)(g.Z,{fullWidth:!0,label:"Name",disabled:!0,placeholder:null==l?void 0:l.name,value:null==l?void 0:l.name})}),(0,i.jsx)(w.ZP,{item:!0,xs:12,sm:6,children:(0,i.jsx)(g.Z,{fullWidth:!0,disabled:!0,type:"email",label:"Email",placeholder:null==l?void 0:l.email,value:null==l?void 0:l.email})}),(0,i.jsx)(w.ZP,{item:!0,xs:12,sm:6,children:(0,i.jsxs)(C.Z,{fullWidth:!0,children:[(0,i.jsx)(P.Z,{children:"Role"}),(0,i.jsxs)(Z.Z,{disabled:!0,label:"Role",value:null==l?void 0:l.type,children:[(0,i.jsx)(p.Z,{value:"admin",children:"Admin"}),(0,i.jsx)(p.Z,{value:"associate",children:"Developer"})]})]})}),(0,i.jsx)(w.ZP,{item:!0,xs:12,sm:6,children:(0,i.jsxs)(C.Z,{fullWidth:!0,children:[(0,i.jsx)(P.Z,{children:"Status"}),(0,i.jsxs)(Z.Z,{disabled:!0,label:"Status",defaultValue:"active",children:[(0,i.jsx)(p.Z,{value:"active",children:"Active"}),(0,i.jsx)(p.Z,{value:"inactive",children:"Inactive"})]})]})}),(0,i.jsx)(w.ZP,{item:!0,xs:12,sm:6,children:(0,i.jsx)(g.Z,{disabled:!0,fullWidth:!0,label:"Company",placeholder:"QuadraPlus",value:"QuadraPlus"})}),e?(0,i.jsx)(w.ZP,{item:!0,xs:12,sx:{mb:3},children:(0,i.jsxs)(j.Z,{severity:"warning",sx:{"& a":{fontWeight:400}},action:(0,i.jsx)(b.Z,{size:"small",color:"inherit","aria-label":"close",onClick:()=>s(!1),children:(0,i.jsx)(k.Z,{fontSize:"inherit"})}),children:[(0,i.jsx)(v.Z,{children:"Your email is not confirmed. Please check your inbox."}),(0,i.jsx)(m.Z,{href:"/",onClick:e=>e.preventDefault(),children:"Resend Confirmation"})]})}):null,(0,i.jsxs)(w.ZP,{item:!0,xs:12,children:[(0,i.jsx)(N.Z,{disabled:!0,variant:"contained",sx:{mr:3.5},children:"Save Changes"}),(0,i.jsx)(N.Z,{disabled:!0,type:"reset",variant:"outlined",color:"secondary",children:"Reset"})]})]})})})};var D=n(44373),E=n(39063),I=n(9041),T=n(95898),z=n(74501),F=n(42218),L=n(86836),M=n(86501),U=n(96927);let G=()=>{let[e,s]=(0,r.useState)({newPassword:"",currentPassword:"",showNewPassword:!1,confirmNewPassword:"",showCurrentPassword:!1,showConfirmNewPassword:!1}),{token:n}=(0,W.a)(),a=()=>{s({...e,showCurrentPassword:!e.showCurrentPassword})},l=e=>{e.preventDefault()},d=()=>{s({...e,showNewPassword:!e.showNewPassword})},o=e=>{e.preventDefault()},c=()=>{s({...e,showConfirmNewPassword:!e.showConfirmNewPassword})},x=e=>{e.preventDefault()},h=async()=>{let{newPassword:s,currentPassword:i,confirmNewPassword:r}=e;if(s!==r){M.ZP.error("New password and confirm new password must match");return}(0,U.Z)(n).post("/auth/passwordChange",{currentPassword:i,newPassword:s})};return(0,i.jsxs)("form",{children:[(0,i.jsx)(y.Z,{sx:{pb:0},children:(0,i.jsxs)(w.ZP,{container:!0,spacing:5,children:[(0,i.jsx)(w.ZP,{item:!0,xs:12,sm:6,children:(0,i.jsxs)(w.ZP,{container:!0,spacing:5,children:[(0,i.jsx)(w.ZP,{item:!0,xs:12,sx:{mt:4.75},children:(0,i.jsxs)(C.Z,{fullWidth:!0,children:[(0,i.jsx)(P.Z,{htmlFor:"account-settings-current-password",children:"Current Password"}),(0,i.jsx)(E.Z,{label:"Current Password",value:e.currentPassword,id:"account-settings-current-password",type:e.showCurrentPassword?"text":"password",onChange(n){s({...e,currentPassword:n.target.value})},endAdornment:(0,i.jsx)(I.Z,{position:"end",children:(0,i.jsx)(b.Z,{edge:"end","aria-label":"toggle password visibility",onClick:a,onMouseDown:l,children:e.showCurrentPassword?(0,i.jsx)(T.Z,{}):(0,i.jsx)(F.Z,{})})})})]})}),(0,i.jsx)(w.ZP,{item:!0,xs:12,sx:{mt:6},children:(0,i.jsxs)(C.Z,{fullWidth:!0,children:[(0,i.jsx)(P.Z,{htmlFor:"account-settings-new-password",children:"New Password"}),(0,i.jsx)(E.Z,{label:"New Password",value:e.newPassword,id:"account-settings-new-password",onChange(n){s({...e,newPassword:n.target.value})},type:e.showNewPassword?"text":"password",endAdornment:(0,i.jsx)(I.Z,{position:"end",children:(0,i.jsx)(b.Z,{edge:"end",onClick:d,"aria-label":"toggle password visibility",onMouseDown:o,children:e.showNewPassword?(0,i.jsx)(T.Z,{}):(0,i.jsx)(F.Z,{})})})})]})}),(0,i.jsx)(w.ZP,{item:!0,xs:12,children:(0,i.jsxs)(C.Z,{fullWidth:!0,children:[(0,i.jsx)(P.Z,{htmlFor:"account-settings-confirm-new-password",children:"Confirm New Password"}),(0,i.jsx)(E.Z,{label:"Confirm New Password",value:e.confirmNewPassword,id:"account-settings-confirm-new-password",type:e.showConfirmNewPassword?"text":"password",onChange(n){s({...e,confirmNewPassword:n.target.value})},endAdornment:(0,i.jsx)(I.Z,{position:"end",children:(0,i.jsx)(b.Z,{edge:"end","aria-label":"toggle password visibility",onClick:c,onMouseDown:x,children:e.showConfirmNewPassword?(0,i.jsx)(T.Z,{}):(0,i.jsx)(F.Z,{})})})})]})})]})}),(0,i.jsx)(w.ZP,{item:!0,sm:6,xs:12,sx:{display:"flex",mt:[7.5,2.5],alignItems:"center",justifyContent:"center"},children:(0,i.jsx)("img",{width:183,alt:"avatar",height:256,src:"/images/pages/pose-m-1.png"})})]})}),(0,i.jsx)(D.Z,{sx:{mt:0,mb:1.75}}),(0,i.jsxs)(y.Z,{children:[(0,i.jsxs)(t.Z,{sx:{mb:5.75,display:"flex",alignItems:"center"},children:[(0,i.jsx)(z.Z,{sx:{mr:3}}),(0,i.jsx)(f.Z,{variant:"h6",children:"Two-factor authentication"})]}),(0,i.jsx)(t.Z,{sx:{mb:11,display:"flex",justifyContent:"center"},children:(0,i.jsxs)(t.Z,{sx:{maxWidth:368,display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column"},children:[(0,i.jsx)(L.Z,{skin:"light",variant:"rounded",sx:{mb:3.5,width:48,height:48},children:(0,i.jsx)(u.Z,{sx:{fontSize:"1.75rem"}})}),(0,i.jsx)(f.Z,{sx:{fontWeight:600,mb:3.5},children:"Two factor authentication is not enabled yet."}),(0,i.jsx)(f.Z,{variant:"body2",children:"Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. Learn more."})]})}),(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(N.Z,{onClick:h,variant:"contained",sx:{mr:3.5},children:"Save Changes"}),(0,i.jsx)(N.Z,{type:"reset",variant:"outlined",color:"secondary",onClick:()=>s({...e,currentPassword:"",newPassword:"",confirmNewPassword:""}),children:"Reset"})]})]})]})};n(95828);let O=(0,c.ZP)(x.Z)(e=>{let{theme:s}=e;return{[s.breakpoints.down("md")]:{minWidth:100},[s.breakpoints.down("sm")]:{minWidth:67}}}),Q=(0,c.ZP)("span")(e=>{let{theme:s}=e;return{lineHeight:1.71,fontSize:"0.875rem",marginLeft:s.spacing(2.4),[s.breakpoints.down("md")]:{display:"none"}}}),X=()=>{let[e,s]=(0,r.useState)("account"),n=(e,n)=>{s(n)};return(0,i.jsx)(a.Z,{children:(0,i.jsxs)(o.ZP,{value:e,children:[(0,i.jsxs)(l.Z,{onChange:n,"aria-label":"account-settings tabs",sx:{borderBottom:e=>"1px solid ".concat(e.palette.divider)},children:[(0,i.jsx)(O,{value:"account",label:(0,i.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(h.Z,{}),(0,i.jsx)(Q,{children:"Account"})]})}),(0,i.jsx)(O,{value:"security",label:(0,i.jsxs)(t.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(u.Z,{}),(0,i.jsx)(Q,{children:"Security"})]})})]}),(0,i.jsx)(d.Z,{sx:{p:0},value:"account",children:(0,i.jsx)(R,{})}),(0,i.jsx)(d.Z,{sx:{p:0},value:"security",children:(0,i.jsx)(G,{})})]})})};var q=X}},function(e){e.O(0,[661,215,927,774,888,179],function(){return e(e.s=78688)}),_N_E=e.O()}]);