import{F as j}from"./FormService-67bc9531.js";import{_ as k,s as n,o as O,f as y,l as a,k as t,b as u,t as g}from"./app-7e0eada9.js";import"./Pagination-a0f8d3e7.js";import"./VCol-881ced2b.js";import"./VDivider-99007ce3.js";import"./ucfirst-206f84d9.js";import"./VCardTitle-612be7de.js";import"./Checkbox-e2b7c125.js";import"./admin-table-component-d7c08093.js";import"./CustomLink-d2b02c25.js";import"./formServiceModule-db70c938.js";import"./snackbar-alerts-6b28df32.js";import"./VTextarea-6e3da498.js";const U={mixins:[j]},h={class:"pt-4 font-weight-bold panel-title-header first-color"},w={class:"pa-5"},z={class:"mt-3"},F=u("p",{class:"mb-1"},"Opis",-1),S={class:"pa-5"};function $(e,o,B,N,P,T){const m=n("v-card-title"),d=n("v-divider"),r=n("text-field"),s=n("vue-editor"),i=n("v-col"),p=n("FilePicker"),c=n("v-row"),b=n("form-footer"),V=n("v-form"),f=n("v-card"),_=n("v-container"),v=n("v-main");return O(),y(v,null,{default:a(()=>[t(_,null,{default:a(()=>[t(f,null,{default:a(()=>[t(m,{class:"justify-content-center"},{default:a(()=>[u("h2",h," Fotowoltaika opisy "+g(e.formTitle),1)]),_:1}),t(d,{class:"mt-0"}),t(V,{ref:"form",modelValue:e.valid,"onUpdate:modelValue":o[10]||(o[10]=l=>e.valid=l)},{default:a(()=>[t(c,null,{default:a(()=>[t(i,{cols:"12",md:"8"},{default:a(()=>[u("div",w,[t(r,{modelValue:e.currentObject.title,"onUpdate:modelValue":o[0]||(o[0]=l=>e.currentObject.title=l),rules:e.rules.titleRules,label:"Tytuł *"},null,8,["modelValue","rules"]),t(r,{modelValue:e.currentObject.button_name,"onUpdate:modelValue":o[1]||(o[1]=l=>e.currentObject.button_name=l),label:"Napis na przycisku"},null,8,["modelValue"]),t(r,{modelValue:e.currentObject.link,"onUpdate:modelValue":o[2]||(o[2]=l=>e.currentObject.link=l),label:"Link przycisku"},null,8,["modelValue"]),u("div",z,[F,t(s,{modelValue:e.currentObject.description,"onUpdate:modelValue":o[3]||(o[3]=l=>e.currentObject.description=l)},null,8,["modelValue"])])])]),_:1}),t(i,{cols:"12",md:"4"},{default:a(()=>[u("div",S,[t(p,{modelValue:e.currentObject.photo,"onUpdate:modelValue":o[4]||(o[4]=l=>e.currentObject.photo=l),"images-only":""},null,8,["modelValue"]),t(r,{modelValue:e.currentObject.photo_alt,"onUpdate:modelValue":o[5]||(o[5]=l=>e.currentObject.photo_alt=l),label:"Tekst alternatywny zdjęcia"},null,8,["modelValue"]),t(r,{modelValue:e.currentObject.photo_background_position,"onUpdate:modelValue":o[6]||(o[6]=l=>e.currentObject.photo_background_position=l),label:"Pozycja zdjęcia"},null,8,["modelValue"]),t(r,{type:"number",modelValue:e.currentObject.height,"onUpdate:modelValue":o[7]||(o[7]=l=>e.currentObject.height=l),label:"Wysokość (mobile) w pikselach"},null,8,["modelValue"]),t(r,{type:"number",modelValue:e.currentObject.height_md,"onUpdate:modelValue":o[8]||(o[8]=l=>e.currentObject.height_md=l),label:"Wysokość (tablet) w pikselach"},null,8,["modelValue"]),t(r,{type:"number",modelValue:e.currentObject.height_lg,"onUpdate:modelValue":o[9]||(o[9]=l=>e.currentObject.height_lg=l),label:"Wysokość (desktop) w pikselach"},null,8,["modelValue"])])]),_:1})]),_:1}),t(d,{class:"mb-0"}),t(b)]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}const K=k(U,[["render",$]]);export{K as default};