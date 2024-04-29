import{q as N,W as C,r as v,a as e,j as a}from"./app-8ad4302f.js";import{B as I}from"./ButtonLink-f44abe41.js";import{P as w}from"./PrimaryButton-b23a8877.js";import{F}from"./FileInput-fade086c.js";import{I as s}from"./InputLabel-75ea13e0.js";import{I as o}from"./InputLabel2-0f1d1759.js";import{L as b,V as y,a as D}from"./VideoFilesEditComponent-05962e84.js";import{R as m}from"./RadioInput-74d9eadd.js";import{T as q}from"./TextAreaInput-ea0f08d7.js";import{T as d}from"./TextInput-91b918b0.js";import{T as L}from"./ToastBanner-12bc069a.js";import{C as T}from"./ContentWrapper-a6e648cb.js";import{W as j}from"./WrapperLayout-9c24c2d1.js";import"./helper-5cdff9d5.js";import"./Paragraph-89c3cd24.js";import"./BasicButton-7e07839f.js";import"./SecondaryButton-acbdc118.js";import"./SelectInput-871f02e3.js";import"./FileIcon-09f2b2b3.js";import"./Heading1-dc635c5b.js";import"./logo-icon-e7f81caf.js";function _(){const{errors:l}=N().props,{data:i,setData:n,post:c,reset:p,processing:u}=C({date:"",heading:"",description:"",imageFile:null,showDetails:"0",content:[{title:"",externalUrl:"",duration:"",id:0}],fileContent:[]}),r=t=>{switch(t.target.name){case"date":case"heading":case"description":case"showDetails":n(t.target.name,t.target.value)}},f=t=>{t.target.name==="imageFile"&&t.target.files&&n(t.target.name,t.target.files[0])},h=t=>{t.preventDefault(),c(route("events.step.past.store"))};v.useEffect(()=>{p()},[]);const g=t=>{n("content",[...t])},x=t=>{n("fileContent",[...t])};return e(j,{children:a(T,{title:"Create New STEP event",children:[l&&Object.keys(l).map(t=>e(L,{message:l[t]},t)),a("form",{method:"post",onSubmit:h,className:"flex flex-col items-start gap-4 px-10 py-5 border w-fit",children:[e("h2",{className:"p-0 mb-2 text-xl font-bold text-black",children:"Basic Information"}),a("div",{className:"flex flex-col gap-4 mb-4",children:[a("div",{className:"inline-flex gap-2",children:[e(s,{forInput:"date",value:"Date",required:!0}),e(d,{type:"text",name:"date",id:"date",value:i.date,className:"",handleChange:r,required:!0}),e("p",{className:"text-gray-600",children:'//Full month name and Year. E.g. "January 2023"'})]}),a("div",{className:"inline-flex gap-2",children:[e(s,{forInput:"heading",value:"Heading",required:!0}),e(d,{type:"text",name:"heading",id:"heading",value:i.heading,className:"",handleChange:r,required:!0})]}),a("div",{className:"inline-flex items-start gap-2",children:[e(s,{forInput:"description",value:"Description",required:!0}),e(q,{rows:3,name:"description",id:"description",value:i.description,className:"w-1/2",handleChange:r,required:!0})]}),e("div",{className:"inline-flex items-end gap-2",children:a("fieldset",{className:"inline-flex",children:[e(b,{required:!0,value:"Show Details"}),a(o,{className:"mr-2",forInput:"true",children:[e(m,{name:"showDetails",id:"true",value:"1",className:"",handleChange:r,checked:i.showDetails==="1"}),"Yes"]}),a(o,{forInput:"false",children:[e(m,{name:"showDetails",id:"false",value:"0",className:"",handleChange:r,checked:i.showDetails==="0"}),"No"]})]})}),a("div",{className:"inline-flex gap-2",children:[e(s,{forInput:"imageFile",value:"Thumbnail Image",required:!0}),e(F,{name:"imageFile",id:"imageFile",className:"",handleChange:f,required:!0,accept:"image/*"})]}),e("img",{className:"w-60",src:i.imageFile?URL.createObjectURL(i.imageFile):""})]}),e(y,{videoContent:i.content,setContent:g,mode:"create"}),"                    ",e(D,{fileContent:i.fileContent,setContent:x,mode:"create"}),a("div",{className:"inline-flex justify-center w-full gap-2 mt-5 md:justify-end",children:[e(I,{hierarchy:"secondary",href:route("events.step.past.admin"),children:"Cancel"}),e(w,{type:"submit",className:"w-60",processing:u,children:"Create"})]})]})]})})}export{_ as default};
