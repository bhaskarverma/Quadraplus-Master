(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[792],{69839:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/summary",function(){return a(86809)}])},86809:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return D}});var o=a(85893),s=a(79072),l=a(67294),n=a(61953),i=a(49837),r=a(44731),d=a(29630),c=a(59742),h=a(91359),u=a(41638),x=a(23213);let m=t=>{let{data:e}=t;return(0,o.jsxs)(i.Z,{children:[(0,o.jsx)(c.Z,{title:"Meeting Schedule"}),(0,o.jsx)(h.Z,{children:e.map((t,a)=>(0,o.jsxs)(n.Z,{sx:{display:"flex",alignItems:"center",...a!==e.length-1?{mb:6}:{}},children:[(0,o.jsx)(r.Z,{src:"/images/avatars/1.png",sx:{mr:3,width:38,height:38}}),(0,o.jsxs)(n.Z,{sx:{width:"100%",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,o.jsxs)(n.Z,{sx:{mr:2,display:"flex",mb:.4,flexDirection:"column"},children:[(0,o.jsx)(d.Z,{sx:{fontWeight:500,lineHeight:1.71,letterSpacing:"0.22px",fontSize:"0.875rem !important"},children:t.title}),(0,o.jsxs)(n.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,o.jsx)(u.Z,{sx:{mr:1,fontSize:"0.875rem",color:"text.secondary",verticalAlign:"middle"}}),(0,o.jsx)(d.Z,{variant:"caption",children:t.date})]})]}),(0,o.jsx)(x.Z,{skin:"light",size:"small",label:t.type,color:t.color,sx:{height:20,mt:.4,fontSize:"0.75rem",fontWeight:600}})]})]},t.title))})]})};var p=a(55376),_=a(62097);let f=t=>{let e=(0,_.Z)(),a="#fff",s="#9e69fd",l="#ff9800",n=e.palette.text.primary,r=e.palette.action.focus,d=e.palette.action.focus,u={labels:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],datasets:[{fill:!1,tension:.5,pointRadius:1,label:"This Month",pointHoverRadius:5,pointStyle:"circle",borderColor:s,backgroundColor:s,pointHoverBorderWidth:5,pointHoverBorderColor:a,pointBorderColor:"transparent",pointHoverBackgroundColor:s,data:t.thisMonthData},{fill:!1,tension:.5,label:"Last Month",pointRadius:1,pointHoverRadius:5,pointStyle:"circle",borderColor:l,backgroundColor:l,pointHoverBorderWidth:5,pointHoverBorderColor:a,pointBorderColor:"transparent",pointHoverBackgroundColor:l,data:t.lastMonthData}]};return(0,o.jsxs)(i.Z,{children:[(0,o.jsx)(c.Z,{title:"Sales Comparison",titleTypographyProps:{variant:"h6"},subheader:"From Last Month",subheaderTypographyProps:{variant:"caption"}}),(0,o.jsx)(h.Z,{children:(0,o.jsx)(p.x1,{data:u,options:{responsive:!0,backgroundColor:!1,maintainAspectRatio:!1,scales:{x:{ticks:{color:n},grid:{borderColor:r,color:d}},y:{scaleLabel:{display:!0},ticks:{stepSize:100,color:n},grid:{borderColor:r,color:d}}},plugins:{legend:{align:"end",position:"top",labels:{padding:25,boxWidth:10,color:n,usePointStyle:!0}}}},height:400})})]})};var g=a(82753),j=a(98005);let v=t=>{let{data:e,totalAmount:a,amountChangePercent:s,amountChangeDirection:l,totalAmountLastMonth:u,title:x,isNormalValue:m}=t;return(0,o.jsxs)(i.Z,{children:[(0,o.jsx)(c.Z,{title:x,titleTypographyProps:{sx:{lineHeight:"1.6 !important",letterSpacing:"0.15px !important"}}}),(0,o.jsxs)(h.Z,{sx:{pt:t=>"".concat(t.spacing(2.25)," !important")},children:[(0,o.jsxs)(n.Z,{sx:{mb:1.5,display:"flex",alignItems:"center"},children:[(0,o.jsxs)(d.Z,{variant:"h4",sx:{fontWeight:600,fontSize:"2.125rem !important"},children:[m?"Total":"AED"," ",a]}),"up"==l?(0,o.jsxs)(n.Z,{sx:{display:"flex",alignItems:"center",color:"success.main"},children:[(0,o.jsx)(g.Z,{sx:{fontSize:"1.875rem",verticalAlign:"middle"}}),(0,o.jsx)(d.Z,{variant:"body2",sx:{fontWeight:600,color:"success.main"},children:s})]}):null,"down"==l?(0,o.jsxs)(n.Z,{sx:{display:"flex",alignItems:"center",color:"error.main"},children:[(0,o.jsx)(j.Z,{sx:{fontSize:"1.875rem",verticalAlign:"middle"}}),(0,o.jsx)(d.Z,{variant:"body2",sx:{fontWeight:600,color:"error.main"},children:s})]}):null]}),(0,o.jsxs)(d.Z,{component:"p",variant:"caption",sx:{mb:10},children:["Compared to ",m?"Total":"AED"," ",u," ","last month"]}),e.map((t,a)=>(0,o.jsxs)(n.Z,{sx:{display:"flex",alignItems:"center",...a!==e.length-1?{mb:6}:{}},children:[(0,o.jsx)(r.Z,{variant:"rounded",sx:{mr:3,width:40,height:40,backgroundColor:t=>"rgba(".concat(t.palette.customColors.main,", 0.04)")},children:(0,o.jsx)("img",{src:"/images/avatars/1.png",alt:t.associate,height:40})}),(0,o.jsxs)(n.Z,{sx:{width:"100%",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,o.jsx)(n.Z,{sx:{mr:2,display:"flex",flexDirection:"column"},children:(0,o.jsx)(d.Z,{variant:"body1",sx:{mb:.5,fontWeight:600,color:"text.primary"},children:t.associate})}),(0,o.jsx)(n.Z,{sx:{minWidth:85,display:"flex",flexDirection:"column"},children:(0,o.jsx)(d.Z,{variant:"body1",sx:{mb:2,fontWeight:600,color:"text.primary"},children:"".concat(m?"":"AED"," ").concat(m?t.value:t.amount)})})]})]},t.associate))]})]})},Z=t=>{let{data:e}=t;return(0,o.jsxs)(i.Z,{children:[(0,o.jsx)(c.Z,{title:"Transactions This Month",titleTypographyProps:{sx:{lineHeight:"2rem !important",letterSpacing:"0.15px !important"}}}),(0,o.jsx)(h.Z,{children:e.map((t,a)=>(0,o.jsx)(n.Z,{sx:{display:"flex",alignItems:"center",...a!==e.length-1?{mb:6}:{}},children:(0,o.jsxs)(n.Z,{sx:{width:"100%",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,o.jsx)(n.Z,{sx:{mr:2,display:"flex",flexDirection:"column"},children:(0,o.jsx)(d.Z,{sx:{mb:.25,fontWeight:600,fontSize:"0.875rem"},children:t.transaction_type})}),(0,o.jsx)(n.Z,{sx:{display:"flex",alignItems:"center"},children:(0,o.jsx)(d.Z,{sx:{mr:1,fontWeight:600},children:"AED ".concat(t.amount)})})]})},a))})]})};a(29217);var b=a(18424),y=a(96927);let S=t=>new Intl.NumberFormat("en-IN",{style:"decimal"}).format(t),C=t=>{let e=(0,_.Z)(),{totalSales:a,salesData:s}=t,l=e.palette.divider,n=e.palette.text.disabled;return(0,o.jsxs)(i.Z,{children:[(0,o.jsx)(c.Z,{title:"Total Sales: AED ".concat(S(a)),sx:{flexDirection:["column","row"],alignItems:["flex-start","center"],"& .MuiCardHeader-action":{mb:0},"& .MuiCardHeader-content":{mb:[2,0]}}}),(0,o.jsx)(h.Z,{children:(0,o.jsx)(p.$Q,{data:{labels:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],datasets:[{maxBarThickness:15,backgroundColor:"#ffcf5c",borderColor:"transparent",borderRadius:{topRight:15,topLeft:15},data:s}]},height:300,options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:500},scales:{x:{grid:{borderColor:l,drawBorder:!1,color:l},ticks:{color:n}},y:{min:0,max:5*Math.ceil(Math.max(...s)/5),grid:{borderColor:l,drawBorder:!1,color:l},ticks:{stepSize:1,color:n}}},plugins:{legend:{display:!1}}}})})]})};var w=a(62026),A=a(53442),k=a(31538);let M=t=>{let e=(0,_.Z)(),{totalLeadsData:a,associates:s,courses:n}=t,[r,d]=(0,l.useState)(0),[u,x]=(0,l.useState)([]),[m,f]=(0,l.useState)(-1),[g,j]=(0,l.useState)(-1),v=e.palette.divider,Z=e.palette.text.disabled,b="#ffcf5c",y=()=>{let t=0,e=Array(31).fill(0);if(-1==m&&-1==g){for(let o in a)for(let s in a[o])t+=a[o][s].count;for(let l=0;l<31;l++)for(let n in a)for(let i in a[n])l in a[n][i].leadCount&&(e[l]+=a[n][i].leadCount[l])}if(-1==m&&-1!=g){for(let r in a)g in a[r]&&(t+=a[r][g].count);for(let c=0;c<31;c++)for(let h in a)g in a[h]&&c in a[h][g].leadCount&&(e[c]+=a[h][g].leadCount[c])}if(-1!=m&&-1==g){if(m in a)for(let u in a[m])t+=a[m][u].count;for(let p=0;p<31;p++)if(m in a)for(let _ in a[m])p in a[m][_].leadCount&&(e[p]+=a[m][_].leadCount[p])}if(-1!=m&&-1!=g){m in a&&g in a[m]&&(t+=a[m][g].count);for(let f=0;f<31;f++)m in a&&g in a[m]&&f in a[m][g].leadCount&&(e[f]+=a[m][g].leadCount[f])}d(t),x(e)};return(0,l.useEffect)(()=>{y()},[a,m,g]),(0,o.jsxs)(i.Z,{children:[(0,o.jsx)(c.Z,{title:"Total Sales: AED ".concat(S(r)),sx:{flexDirection:["column","row"],alignItems:["flex-start","center"],"& .MuiCardHeader-action":{mb:0},"& .MuiCardHeader-content":{mb:[2,0]}}}),(0,o.jsx)(w.Z,{children:(0,o.jsx)("div",{style:{width:"100%"},children:(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"end"},children:[(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,o.jsx)("div",{style:{width:"10px",height:"10px",backgroundColor:b,marginRight:"5px"}}),(0,o.jsxs)(A.Z,{fullWidth:!0,value:m,id:"associate-select-id",label:"Associates",onChange(t){f(t.target.value)},labelId:"associate-select-id-label",inputProps:{placeholder:"Select Associate"},children:[(0,o.jsx)(k.Z,{value:"-1",children:"All Associates"}),(0,o.jsx)(k.Z,{value:"0",children:"No Associates"}),s.map(t=>(0,o.jsx)(k.Z,{value:t.id,children:t.name}))]})]}),(0,o.jsx)("div",{style:{width:"10px",height:"10px",marginRight:"5px"}}),(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,o.jsx)("div",{style:{width:"10px",height:"10px",backgroundColor:b,marginRight:"5px"}}),(0,o.jsxs)(A.Z,{fullWidth:!0,value:g,id:"course-select-id",label:"Courses",onChange(t){j(t.target.value)},labelId:"course-select-id-label",inputProps:{placeholder:"Select Course"},children:[(0,o.jsx)(k.Z,{value:"-1",children:"All Courses"}),(0,o.jsx)(k.Z,{value:"0",children:"No Courses"}),n.map(t=>(0,o.jsx)(k.Z,{value:t.id,children:t.name}))]})]}),(0,o.jsx)("div",{style:{width:"10px",height:"10px",marginRight:"5px"}})]})})}),(0,o.jsx)(h.Z,{children:(0,o.jsx)(p.$Q,{data:{labels:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],datasets:[{maxBarThickness:15,backgroundColor:b,borderColor:"transparent",borderRadius:{topRight:15,topLeft:15},data:u}]},height:300,options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:500},scales:{x:{grid:{borderColor:v,drawBorder:!1,color:v},ticks:{color:Z}},y:{min:0,max:6*Math.ceil(Math.max(...u)/5),grid:{borderColor:v,drawBorder:!1,color:v},ticks:{stepSize:1,color:Z}}},plugins:{legend:{display:!1}}}})})]})},P=async(t,e,a)=>{let{data:o}=await (0,y.Z)(t).get(e);a(o)};var D=function(){let t=(0,b.a)(),e=t.token,[a,n]=(0,l.useState)([]),[i,r]=(0,l.useState)([]),[d,c]=(0,l.useState)(0),[h,u]=(0,l.useState)({}),[x,p]=(0,l.useState)([]),[_,g]=(0,l.useState)([]),[j,y]=(0,l.useState)([]),[S,w]=(0,l.useState)(0),[A,k]=(0,l.useState)(0),[D,I]=(0,l.useState)("up"),[W,R]=(0,l.useState)("0%"),[H,T]=(0,l.useState)([]),[B,L]=(0,l.useState)([]),[E,z]=(0,l.useState)([]),[N,q]=(0,l.useState)(0),[O,F]=(0,l.useState)(0),[Q,X]=(0,l.useState)(0),[$,V]=(0,l.useState)(0),[G,J]=(0,l.useState)(0),[K,U]=(0,l.useState)("up"),[Y,tt]=(0,l.useState)("up"),[te,ta]=(0,l.useState)("0%"),[to,ts]=(0,l.useState)("0%"),[tl,tn]=(0,l.useState)([]),[ti,tr]=(0,l.useState)([]),td=t=>{n(t.sales_data),c(t.total_sales)},tc=t=>{u(t)},th=t=>{p(t.users)},tu=t=>{g(t.courses)},tx=t=>{r(t.sales_data)},tm=t=>{y(t.sales_overview_data),w(t.total_quoted_amount_this_month),k(t.total_quoted_amount_last_month),I(t.total_quoted_amount_this_month>t.total_quoted_amount_last_month?"up":"down"),R(0==t.total_quoted_amount_last_month?"100%":"".concat(Math.abs((t.total_quoted_amount_this_month-t.total_quoted_amount_last_month)/t.total_quoted_amount_last_month*100).toFixed(2),"%"))},tp=t=>{T(t.collection_overview_data),F(t.total_collected_amount_this_month),V(t.total_collected_amount_last_month),U(t.total_collected_amount_this_month>t.total_collected_amount_last_month?"up":"down"),ta(0==t.total_collected_amount_this_month?"0%":0==t.total_collected_amount_last_month?"100%":"".concat(Math.abs((t.total_collected_amount_this_month-t.total_collected_amount_last_month)/t.total_collected_amount_last_month*100).toFixed(2),"%"))},t_=t=>{L(t.referral_overview_data),X(t.total_referral_amount_this_month),J(t.total_referral_amount_last_month),tt(t.total_referral_amount_this_month>t.total_referral_amount_last_month?"up":"down"),ts(0==t.total_referral_amount_this_month?"0%":0==t.total_referral_amount_last_month?"100%":"".concat(Math.abs((t.total_referral_amount_this_month-t.total_referral_amount_last_month)/t.total_referral_amount_last_month*100).toFixed(2),"%"))},tf=t=>{tn(t)},tg=t=>{tr(t)},tj=t=>{z(t.data),q(t.total_leads)};return(0,l.useEffect)(()=>{P(e,"/dashboard/total-sales",td),P(e,"/dashboard/total-leads",tc),P(e,"/auth/list-associates",th),P(e,"/course/list",tu),P(e,"/dashboard/total-sales-last-month",tx),P(e,"/dashboard/sales-overview",tm),P(e,"/dashboard/registration-overview",tj),P(e,"/dashboard/collection-overview",tp),P(e,"/dashboard/referral-overview",t_),P(e,"/dashboard/meeting-schedule",tf),P(e,"/dashboard/transaction-details",tg)},[e]),(0,o.jsxs)(s.ZP,{container:!0,spacing:6,children:[(0,o.jsx)(s.ZP,{item:!0,xs:12,children:(0,o.jsx)(C,{totalSales:d,salesData:a})}),(0,o.jsx)(s.ZP,{item:!0,xs:12,children:(0,o.jsx)(M,{totalLeadsData:h,associates:x,courses:_})}),(0,o.jsx)(s.ZP,{item:!0,xs:3,children:(0,o.jsx)(v,{title:"Sales Overview",data:j,amountChangeDirection:D,amountChangePercent:W,totalAmount:S.toLocaleString(),totalAmountLastMonth:A})}),(0,o.jsx)(s.ZP,{item:!0,xs:3,children:(0,o.jsx)(v,{title:"Collection Overview",data:H,amountChangeDirection:K,amountChangePercent:te,totalAmount:O.toLocaleString(),totalAmountLastMonth:$})}),(0,o.jsx)(s.ZP,{item:!0,xs:3,children:(0,o.jsx)(v,{title:"Referral Overview",data:B,amountChangeDirection:Y,amountChangePercent:to,totalAmount:Q.toLocaleString(),totalAmountLastMonth:G})}),(0,o.jsx)(s.ZP,{item:!0,xs:3,children:(0,o.jsx)(v,{title:"Registrations Overview",data:E,amountChangeDirection:"up",amountChangePercent:"0%",totalAmount:N.toLocaleString(),totalAmountLastMonth:0,isNormalValue:!0})}),(0,o.jsx)(s.ZP,{item:!0,xs:6,children:(0,o.jsx)(m,{data:tl})}),(0,o.jsx)(s.ZP,{item:!0,xs:6,children:(0,o.jsx)(Z,{data:ti})}),(0,o.jsx)(s.ZP,{item:!0,xs:12,children:(0,o.jsx)(f,{lastMonthData:i,thisMonthData:a})})]})}}},function(t){t.O(0,[757,722,774,888,179],function(){return t(t.s=69839)}),_N_E=t.O()}]);