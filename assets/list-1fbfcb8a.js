import{a5 as n}from"./index-b2b215f4.js";const s=parseInt("1500"),d=parseInt("300"),h=n("list",{state:()=>({items:[],id:1,timeleft:s,break:!1,finishedItems:[],currentItem:""}),actions:{addItem(i){this.items.push({id:this.id++,name:i,edit:!1,model:i})},findIndexById(i){return this.items.findIndex(t=>t.id===i)},editItem(i){const t=this.findIndexById(i);t<0||(this.items[t].edit=!0)},delItem(i){const t=this.findIndexById(i);t<0||this.items.splice(t,1)},cancelEditItem(i){const t=this.findIndexById(i);t<0||(this.items[t].model=this.items[t].name,this.items[t].edit=!1)},confirmEditItem(i){const t=this.findIndexById(i);t<0||(this.items[t].name=this.items[t].model,this.items[t].edit=!1)},setCurrentItem(){this.currentItem=this.break?"休息一下":this.items.shift().name},countdown(){this.timeleft--},setFinishedItem(){this.break||this.finishedItems.push({name:this.currentItem,id:this.id++}),this.currentItem="",this.items.length>0&&(this.break=!this.break),this.timeleft=this.break?d:s},delFinishedItem(i){const t=this.finishedItems.findIndex(e=>e.id===i);t<0||this.finishedItems.splice(t,1)},completeItem(i){const t=this.items.findIndex(e=>e.id===i);if(t!==-1){const e=this.items.splice(t,1)[0];this.finishedItems.push(e)}}},persist:{key:"pomodoro-list"}});export{h as u};