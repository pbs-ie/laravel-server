import{a as e,F as b,j as i}from"./app-8ad4302f.js";import{H as m}from"./Heading3-34c076d0.js";import{d as u,m as h,i as f}from"./helper-5cdff9d5.js";import{L as x}from"./LessonDownloadButton-1760e2a8.js";import{C as p}from"./ChevronRight-12ba1752.js";function d({title:a,pillText:r,pillClass:n="bg-pbsblue",downloadLink:t="",imageLink:s}){const l=()=>t&&t!==""&&t!=="#",o=()=>l()?"hover:bg-blue-600 bg-stone-200 font-bold text-slate-700 hover:text-slate-50":"bg-stone-200 text-gray-500";return e(b,{children:r&&i("a",{className:`${l()?"cursor-pointer":"cursor-not-allowed"} block`,href:t,onClick:c=>l()?null:c.preventDefault(),children:[i("div",{className:`flex flex-row items-center h-fit w-full ${o()} rounded-md`,children:[e("div",{className:`basis-1/3 ${n} text-white font-bold text-center rounded p-2 py-3`,children:r}),e("div",{className:"px-4 text-center basis-2/3",children:a.trim()}),l()&&e("div",{className:"px-3 ml-auto shrink",children:e(p,{})})]}),s&&s!==""&&e("img",{className:"float-right object-cover object-left w-2/3 h-auto mt-px rounded-lg aspect-video ",src:"/assembly/image/"+s,alt:s+" assembly image thumbnail"})]})})}const g=f;function $({selectedMonth:a,selectedSeriesAlphabet:r,assemblyTitle:n="",assemblyLink:t="",assemblySeries:s="",assemblyImageLink:l=""}){return i("div",{className:"flex flex-col justify-center px-2 md:px-0",children:[i("div",{className:"mb-10",children:[e(m,{children:"Bible Time Lessons"}),e("div",{className:"space-y-2",children:g.map((o,c)=>e(x,{downloadLink:u(r,o.tagCode,a),title:`${r}${a+1} - ${h[a]}`,infoSubText:o.tagSubText,infoText:o.tagName,infoClass:o.tagColor},c))})]}),n&&n!==""?i("div",{className:"mb-2",children:[e(m,{children:"School Assembly Video"}),e(d,{title:`${s} ${n}`,pillText:"Latest Video",pillClass:"bg-blue-500",downloadLink:t,imageLink:l})]}):i("div",{className:"mb-2",children:[e(m,{children:"School Assembly Video"}),e(d,{title:"Go to Assembly Videos",pillText:"Online Presentation",pillClass:"bg-blue-500",downloadLink:route("assembly.index")})]})]})}export{$ as L};
