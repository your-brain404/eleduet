import{_ as t,x as s}from"./app-7e0eada9.js";import{g as a}from"./get-module-42171752.js";const i={props:["reloadFlag"],watch:{reloadFlag(){this.reloadFlag&&this.getData()}},data(){return{serviceCategories:[]}},methods:{getData(){this.$store.commit("loading",!0),s.get("/api/service_categories/get_all").then(e=>{this.$store.commit("loading",!1),this.serviceCategories=e.data,this.$emit("blockDataEmit",this.serviceCategories),this.$store.commit("ServiceCategories/serviceCategories",e.data)}).catch(e=>{this.$store.commit("loading",!1),console.log(e)})}},created(){this.$store.hasModule("ServiceCategories")||this.$store.registerModule("ServiceCategories",a("serviceCategories")),this.getData()}};function o(e,r,c,g,l,d){return null}const n=t(i,[["render",o]]);export{n as default};