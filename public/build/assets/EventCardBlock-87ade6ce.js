import{a as e,F as i,j as c}from"./app-8ad4302f.js";import{B as m}from"./ButtonLink-f44abe41.js";import{B as o}from"./ButtonAnchor-6843e245.js";import{E as d}from"./ExternalLink-f489b3be.js";function h({className:r="",children:a}){return e(i,{children:e("div",{className:`leading-tight uppercase text-blue-600 text-2xl font-bold mb-2 mt-0 ${r}`,children:a})})}function g({Icon:r,title:a,description:l,buttonText:t,buttonLink:s="",isExternal:n=!1}){return c(i,{children:[r&&e("p",{className:"flex justify-center w-auto mb-4",children:e(r,{className:"h-[90px] w-[90px] p-2 text-slate-800"})}),e(h,{children:a}),e("div",{className:"mb-4 text-base text-gray-700 whitespace-normal",children:l}),t&&s!==""&&(n?e(o,{Icon:d,href:s,isExternalLink:!0,children:t}):e(m,{href:s,children:t}))]})}export{g as E};
