import{a as e,F as u,r as c,j as m}from"./app-8ad4302f.js";import{L as h}from"./LessonSelectorList-fe08c3cb.js";import{j as x,k as g,m as f,e as b,l as y}from"./helper-5cdff9d5.js";import{L as N}from"./Loader-f2cca895.js";import"./Heading3-34c076d0.js";import"./LessonDownloadButton-1760e2a8.js";import"./Download-7902bb4a.js";import"./ChevronRight-12ba1752.js";import"./Paragraph-89c3cd24.js";function p({onPress:t,addClass:i,isActive:s,setActive:a={},idx:n,children:o}){return e(u,{children:e("button",{role:"button",onClick:()=>(t(),typeof a=="function"?a(n):null),className:`${s?"bg-blue-500 text-gray-50":"bg-stone-200 hover:bg-stone-300 text-gray-600"} rounded-md p-2 ${i}`,children:o})})}function k(){const[t,i]=c.useState(x()),[s,a]=c.useState(g()),[n,o]=c.useState(!1),d=function(){o(!0),setTimeout(()=>{o(!1)},250)};return e("section",{className:"w-full",children:m("div",{className:"grid grid-rows-2 gap-5 px-2 pt-10 bg-white rounded-lg md:px-8 h-92 md:grid-rows-none md:grid-cols-2 md:pb-10 lg:px-20 lg:mx-24 lg:my-2 drop-shadow-lg",children:[m("div",{className:"flex flex-col",children:[e("h1",{className:"text-2xl italic font-thin text-blue-800 uppercase",children:"Individual month's lessons"}),e("h2",{className:"text-blue-800 uppercase",children:"Select Month"}),e("div",{role:"list",className:"grid grid-cols-3 grid-rows-4 gap-2 px-5 py-4 md:px-10 justify-items-stretch",children:f.map((r,l)=>e(p,{onPress:d,isActive:t===l,setActive:i,idx:l,addClass:"w-full py-8",children:r},r))}),e("h2",{className:"text-blue-800 uppercase",children:"Select Series"}),e("div",{role:"list",className:"grid grid-cols-3 gap-2 px-5 py-4 md:px-16",children:b.map((r,l)=>e(p,{onPress:d,isActive:s===l,setActive:a,idx:l,addClass:"w-full py-1",children:r.name},r.code))})]}),e("div",{className:"flex flex-col my-auto",children:t===-1||s===-1?e("div",{className:"p-20 my-auto text-3xl text-left text-gray-600",children:e("p",{children:"Select a month and series to see the available download links here."})}):n?e("div",{className:"flex items-center justify-center p-20 my-auto text-3xl text-left text-gray-600 space-around",children:e(N,{})}):e(h,{selectedMonth:t,selectedSeriesAlphabet:y(s)})})]})})}export{k as default};
