import{x as i}from"./app-7e0eada9.js";const s={namespaced:!0,state:{opinions:window.global.cms.homePage.opinions},getters:{opinions:o=>o.opinions},mutations:{opinions:(o,n)=>o.opinions=n},actions:{async opinions({commit:o}){await i.get("/api/opinions/get_all").then(n=>{o("opinions",n.data)}).catch(n=>{console.log(n),o("toast","Przepraszamy, nie udało się załadować danych...")})}}};export{s as default};