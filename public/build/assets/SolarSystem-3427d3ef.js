import{F as j}from"./FormService-67bc9531.js";import{_ as k,s as t,o as y,f as O,l as r,k as o,b as s,t as h}from"./app-7e0eada9.js";import"./Pagination-a0f8d3e7.js";import"./VCol-881ced2b.js";import"./VDivider-99007ce3.js";import"./ucfirst-206f84d9.js";import"./VCardTitle-612be7de.js";import"./Checkbox-e2b7c125.js";import"./admin-table-component-d7c08093.js";import"./CustomLink-d2b02c25.js";import"./formServiceModule-db70c938.js";import"./snackbar-alerts-6b28df32.js";import"./VTextarea-6e3da498.js";const w={mixins:[j]},F={class:"pt-4 font-weight-bold panel-title-header first-color"},U={class:"pa-5"},S={class:"mt-3"},$=s("p",{class:"mb-1"},"Krótki opis",-1),g={class:"pa-5"};function B(e,l,T,C,N,P){const m=t("v-card-title"),a=t("v-divider"),i=t("text-field"),c=t("vue-editor"),d=t("v-col"),p=t("FilePicker"),u=t("v-row"),_=t("form-footer"),f=t("v-form"),v=t("v-card"),V=t("v-container"),b=t("v-main");return y(),O(b,null,{default:r(()=>[o(V,null,{default:r(()=>[o(v,null,{default:r(()=>[o(m,{class:"justify-content-center"},{default:r(()=>[s("h2",F," Fotowoltaika "+h(e.formTitle),1)]),_:1}),o(a,{class:"mt-0"}),o(f,{ref:"form",modelValue:e.valid,"onUpdate:modelValue":l[4]||(l[4]=n=>e.valid=n)},{default:r(()=>[o(u,null,{default:r(()=>[o(d,{cols:"12",md:"8"},{default:r(()=>[s("div",U,[o(i,{modelValue:e.currentObject.title,"onUpdate:modelValue":l[0]||(l[0]=n=>e.currentObject.title=n),rules:e.rules.titleRules,label:"Tytuł *"},null,8,["modelValue","rules"]),s("div",S,[$,o(c,{modelValue:e.currentObject.short_description,"onUpdate:modelValue":l[1]||(l[1]=n=>e.currentObject.short_description=n)},null,8,["modelValue"])])])]),_:1}),o(d,{cols:"12",md:"4"},{default:r(()=>[s("div",g,[o(p,{modelValue:e.currentObject.photo,"onUpdate:modelValue":l[2]||(l[2]=n=>e.currentObject.photo=n),"images-only":""},null,8,["modelValue"]),o(i,{color:"primary",modelValue:e.currentObject.photo_alt,"onUpdate:modelValue":l[3]||(l[3]=n=>e.currentObject.photo_alt=n),label:"Tekst alternatywny zdjęcia"},null,8,["modelValue"])])]),_:1})]),_:1}),o(a,{class:"mb-0"}),o(_)]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}const Q=k(w,[["render",B]]);export{Q as default};