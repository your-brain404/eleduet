import{_ as o,o as i,c as a,a as c,p as l}from"./app-7e0eada9.js";const _={props:{value:Boolean,fields:Array},computed:{valid(){return this.fields.every(e=>!e.error)}},watch:{valid(e){this.$emit("input",e)},fields:{deep:!0,handler:"validate"}},methods:{validate(){let e={};for(let t=0;t<this.fields.length;t++){e[t]=[];let s=this.fields[t];if(s.rules)for(let n=0;n<s.rules.length;n++){let r=s.rules[n](s.value);(r==null?void 0:r.constructor)===String&&e[t].push(r)}s.error=e[t].join(" ")}return this.valid}}};function d(e,t,s,n,r,g){return i(),a("form",{onSubmit:t[0]||(t[0]=l(()=>{},["prevent"]))},[c(e.$slots,"default")],32)}const C=o(_,[["render",d]]),u={},f={class:"custom-main"};function p(e,t){return i(),a("div",f,[c(e.$slots,"default")])}const B=o(u,[["render",p]]);const h={},$={class:"custom-container"};function m(e,t){return i(),a("div",$,[c(e.$slots,"default")])}const S=o(h,[["render",m]]);const v={},V={class:"v-card-title"};function y(e,t){return i(),a("div",V,[c(e.$slots,"default")])}const b=o(v,[["render",y]]);export{B as V,S as a,C as b,b as c};