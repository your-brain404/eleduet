import{_ as a,x as s}from"./app-7e0eada9.js";const e={props:["reloadFlag"],watch:{reloadFlag(){this.reloadFlag&&this.getData()}},data(){return{rows:[],table:"snackbar_alerts"}},methods:{getData(){this.$store.commit("loading",!0),s.get(`/api/${this.table}/get_all`).then(t=>{this.$store.commit("loading",!1),this.rows=t.data,this.$emit("blockDataEmit",this.rows)}).catch(t=>{this.$store.commit("loading",!1),console.log(t)})}},created(){this.getData()}};function o(t,r,i,l,c,n){return null}const d=a(e,[["render",o]]);export{d as default};