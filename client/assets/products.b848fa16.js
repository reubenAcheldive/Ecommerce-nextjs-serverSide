import{b as d,j as e,u as m}from"./index.d02b4c1b.js";import{A as i}from"./AddProducts.f2d85942.js";const n=()=>d("div",{role:"status",className:"p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700",children:[e("div",{className:"flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-gray-700 gap-3",children:e("svg",{className:"w-12 h-12 text-gray-200 dark:text-gray-600",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 640 512",children:e("path",{d:"M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"})})}),e("div",{className:"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"}),e("div",{className:"h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"}),e("div",{className:"h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"}),e("div",{className:"h-2 bg-gray-200 rounded-full dark:bg-gray-700"}),e("div",{className:"flex items-center mt-4 space-x-3",children:d("div",{children:[e("div",{className:"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"}),e("div",{className:"w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})]})}),e("span",{className:"sr-only",children:"Loading..."})]}),g=({_id:r,categoryRef:l,description:a,imgUrl:s,name:t,price:o,quantity:c})=>d("div",{className:" w-40  h-80 group md:w-80  md:h-96 flex flex-col items-center rounded-md shadow-lg  relative",children:[d("div",{className:"py-2 flex flex-col items-center",children:[e("div",{className:"w-24 h-40 md:h-60 md:w-40   ",children:e("img",{src:s,className:"w-24 h-40 md:h-60 md:w-40 object-contain   z-0 opacity-90"})}),e("span",{className:"text-xl text-slate-700",children:t})," ",e("p",{className:"text-lg text-slate-700",children:a})]}),e("div",{className:"w-24 bg-transparent  absolute  top-[30%] flex items-center justify-center",children:e(i,{className:" text-4xl  lg:text-5xl flex flex-row gap-8 text-center  text-white  z-50 ",size:"small",productRefId:r,quantity:c||0})})]}),x=()=>{const{products:r,loading:l}=m(a=>a.cart);return e("div",{className:"m-4 flex   flex-row flex-wrap  gap-2    md:gap-4 md:items-center    ",children:r==null?void 0:r.map(a=>e("span",{className:"w-40   group md:w-80  md:h-96 ",children:l?e(n,{}):e(g,{...a})},a._id))})};export{x as default};
