import{_ as t,o as l,c as a,t as o,n as d}from"./index.51eb2e40.js";const n={props:{text:{type:String,default:"Button"},rounded:{type:Boolean,default:!0},roundedLg:{type:Boolean},roundedFull:{type:Boolean},xs:{type:Boolean,default:!1},sm:{type:Boolean,default:!1},base:{type:Boolean,default:!0},lg:{type:Boolean,default:!1},xl:{type:Boolean,default:!1},icon:{type:String,default:""},disabled:Boolean,primary:{type:Boolean,default:!0},secondary:{type:Boolean,default:!1}}},i=["disabled"];function u(y,s,e,c,r,f){return l(),a("button",{type:"button",class:d(["font-medium text-center text-white",{"px-3 py-2 text-xs":e.xs,"px-3 py-2 text-sm":e.sm,"px-5 py-2.5 text-sm":e.base,"px-5 py-3 text-base":e.lg,"px-6 py-4 text-lg":e.xl,rounded:e.rounded,"rounded-lg":e.roundedLg,"rounded-full":e.roundedFull,"bg-violet-1 hover:bg-opacity-80":e.primary&&!e.disabled,"bg-violet-3 hover:bg-opacity-80":!e.primary&&!e.disabled,"outline outline-violet-1 bg-violet-7 hover:bg-violet-3":e.secondary&&!e.disabled,"bg-violet-1 opacity-25":e.primary&&e.disabled,"outline outline-violet-1 opacity-50":e.secondary&&e.disabled}]),disabled:e.disabled},o(e.text),11,i)}const b=t(n,[["render",u]]);export{b as B};