import{r as x,q,W as F,a as e,j as r}from"./app-8ad4302f.js";import{B as w}from"./ButtonLink-f44abe41.js";import{P as j}from"./PrimaryButton-b23a8877.js";import{S as b}from"./SecondaryButton-acbdc118.js";import{F as E}from"./FileInput-fade086c.js";import{I as o}from"./InputLabel-75ea13e0.js";import{T as i}from"./TextInput-91b918b0.js";import{T as U}from"./ToastBanner-12bc069a.js";import{C as L}from"./ContentWrapper-a6e648cb.js";import{W as R}from"./WrapperLayout-9c24c2d1.js";import"./helper-5cdff9d5.js";import"./Paragraph-89c3cd24.js";import"./BasicButton-7e07839f.js";import"./Heading1-dc635c5b.js";import"./logo-icon-e7f81caf.js";function K(){const c=[{videoTitle:"",externalUrl:"",duration:""}],y=(t,a)=>{if(a.type==="changeValue"&&"name"in a){let n=[...t];return n[a.idx][a.name]=a.value+"",n}else{if(a.type==="addValue")return[...t,...c];if(a.type==="removeValue"&&"idx"in a){if(t.length===1)return c;let n=[...t];return n.splice(a.idx,1),n}else return t}},[u,h]=x.useReducer(y,c),{errors:p}=q().props,{data:s,setData:f,post:N,reset:v,processing:T}=F({monthTitle:"",month:"",series:"",routename:"",imageFile:null,content:[{videoTitle:"",externalUrl:"",duration:""}]}),d=t=>{switch(t.target.name){case"monthTitle":case"month":case"series":case"routename":f(t.target.name,t.target.value)}},C=t=>{t.target.name==="imageFile"&&t.target.files&&f(t.target.name,t.target.files[0])},g=(t,a)=>{if(a.target instanceof HTMLInputElement)switch(a.target.name){case"videoTitle":case"externalUrl":case"duration":h({type:"changeValue",name:a.target.name,value:a.target.value,idx:t});break}},I=t=>{t.preventDefault(),N(route("assembly.store"))};return x.useEffect(()=>{v()},[]),x.useEffect(()=>{f("content",[...u])},[u]),e(R,{children:r(L,{title:"Create New Assembly",children:[p&&Object.keys(p).map(t=>e(U,{message:p[t]},t)),r("form",{method:"post",onSubmit:I,className:"flex flex-col items-start gap-4 px-10 py-5 border w-fit",children:[e("h2",{className:"p-0 mb-2 text-xl font-bold text-black",children:"Basic Information"}),r("div",{className:"flex flex-col gap-4 mb-4",children:[r("div",{className:"inline-flex gap-2",children:[e(o,{forInput:"monthTitle",value:"Title",required:!0}),e(i,{type:"text",name:"monthTitle",id:"monthTitle",value:s.monthTitle,className:"",handleChange:d,required:!0})]}),r("div",{className:"inline-flex gap-2",children:[e(o,{forInput:"month",value:"Month",required:!0}),e(i,{type:"text",name:"month",id:"month",value:s.month,className:"",handleChange:d,required:!0}),e("p",{className:"text-gray-600",children:'//Full month name. E.g. "January"'})]}),r("div",{className:"inline-flex items-end gap-2",children:[e(o,{forInput:"series",value:"series",required:!0}),e(i,{type:"text",name:"series",id:"series",value:s.series,className:"",handleChange:d,required:!0}),e("p",{className:"text-gray-600",children:'//format should be letter and number. E.g. "A1"'})]}),r("div",{className:"inline-flex items-end gap-2",children:[e(o,{forInput:"routename",value:"routename",required:!0}),e(i,{type:"text",name:"routename",id:"routename",value:s.routename,className:"",handleChange:d,required:!0}),e("p",{className:"text-gray-600",children:'//format should be letter and number with leading 0 for single digit. E.g. "a01 or a10"'})]}),r("div",{className:"inline-flex gap-2",children:[e(o,{forInput:"imageFile",value:"Thumbnail Image",required:!0}),e(E,{name:"imageFile",id:"imageFile",className:"",handleChange:C,required:!0,accept:"image/png"})]}),e("img",{className:"w-60",src:s.imageFile?URL.createObjectURL(s.imageFile):""})]}),e("h2",{className:"p-0 mb-2 text-xl font-bold text-black",children:"Video Information"}),r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"External URL"}),e("th",{children:"Title"}),e("th",{children:"Duration"}),e("th",{children:e(b,{onClick:()=>h({type:"addValue"}),className:"before:content-['+'] before:pr-1 before:text-lg bg-green-200",children:"Add Row"})})]})}),e("tbody",{children:u.map(({videoTitle:t,externalUrl:a,duration:n},l)=>r("tr",{children:[e("td",{children:e(i,{type:"text",name:"externalUrl",id:`externalUrl${l}`,value:a,className:"",handleChange:m=>g(l,m)})}),e("td",{children:e(i,{type:"text",name:"videoTitle",id:`videoTitle${l}`,value:t,className:"",handleChange:m=>g(l,m)})}),e("td",{children:e(i,{type:"text",name:"duration",id:`duration${l}`,value:n,className:"",handleChange:m=>g(l,m)})}),e("td",{children:e(b,{onClick:()=>h({type:"removeValue",idx:l}),className:"bg-red-200 before:content-['-'] before:pr-1 before:text-lg",children:"Remove Row"})})]},"contenttable"+l))})]}),r("div",{className:"inline-flex justify-center w-full gap-2 mt-5 md:justify-end",children:[e(w,{hierarchy:"secondary",href:route("assembly.admin"),children:"Cancel"}),e(j,{type:"submit",className:"w-60",processing:T,children:"Create"})]})]})]})})}export{K as default};
