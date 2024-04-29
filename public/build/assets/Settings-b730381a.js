import{a as e,j as i,W as f}from"./app-8ad4302f.js";import{I as m}from"./InputLabel2-0f1d1759.js";import{R as s}from"./RadioInput-74d9eadd.js";import{E as h}from"./EventWrapper-c5f36102.js";import{W as g}from"./WrapperLayout-9c24c2d1.js";import{P as _}from"./PrimaryButton-b23a8877.js";import{H as d}from"./Heading2Nospace-684fac3d.js";import"./Heading1-dc635c5b.js";import"./logo-icon-e7f81caf.js";import"./Paragraph-89c3cd24.js";import"./BasicButton-7e07839f.js";import"./helper-5cdff9d5.js";function u({title:c,name:t,value:r="",handleChange:o}){return e("div",{className:"flex justify-center border border-gray-200 w-3/4 p-5 rounded-md mb-2",children:i("fieldset",{className:"inline-flex justify-between items-center gap-10 w-full",children:[e("legend",{className:"float-left font-bold",children:c}),i("div",{className:"inline-flex",children:[i(m,{className:"mr-2",forInput:"true"+t,children:[e(s,{name:t,id:"true"+t,value:"1",handleChange:o,checked:r==="1"}),"Show"]}),i(m,{className:"mr-2",forInput:"false"+t,children:[e(s,{name:t,id:"false"+t,value:"0",handleChange:o,checked:r==="0"}),"Hide"]})]})]})})}function D({eventSettings:c}){const t=c,{data:r,setData:o,post:p}=f(t),n=a=>{switch(a.target.name){case"shed_upcoming_card":case"camp_upcoming_card":const l=c[a.target.name];l.value=a.target.value,o(a.target.name,l);break}};return e(g,{children:e(h,{title:"Event Settings",children:i("form",{onSubmit:a=>{a.preventDefault(),p(route("events.settings.store"))},children:[i("div",{className:"grid grid-cols-[auto_1fr] gap-2 text-left items-center",children:[e(d,{children:"The SHED"}),e(u,{value:r.shed_upcoming_card.value,title:"Show SHED Upcoming Card",name:r.shed_upcoming_card.key,handleChange:n}),e(d,{children:"Summer Camp"}),e(u,{value:r.camp_upcoming_card.value,title:"Show Camp Upcoming Card",name:r.camp_upcoming_card.key,handleChange:n})]}),e("div",{className:"flex justify-end",children:e(_,{children:"Submit"})})]})})})}export{D as default};
