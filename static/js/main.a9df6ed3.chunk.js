(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{226:function(e,t,a){e.exports=a(460)},231:function(e,t,a){},232:function(e,t,a){},460:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(12),c=a.n(r),i=(a(231),a(232),a(18)),s=a(19),o=a(21),d=a(20),m=a(22),u=a(462),h=a(8),p=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light",style:{backgroundColor:"#e3f2fd"}},l.a.createElement(u.a,{className:"navbar-brand",to:""},"Burn it"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(u.a,{className:"nav-link",to:"/today"},"Today")),l.a.createElement("li",{className:"nav-item active"},l.a.createElement(u.a,{className:"nav-link",to:"/addexercise"},"Exercises")),l.a.createElement("li",{className:"nav-item active"},l.a.createElement(u.a,{className:"nav-link",to:"/addweight"},"Weights")),l.a.createElement("li",{className:"nav-item active"},l.a.createElement(u.a,{className:"nav-link",to:"/planner"},"Plans")),l.a.createElement("li",{className:"nav-item active"},l.a.createElement(u.a,{className:"nav-link",to:"/profile"},"Profile")))))}}]),t}(n.Component),E=(n.Component,a(6)),b=a.n(E),g=a(11),y=a(190),f=function(){var e=Object(g.a)(b.a.mark(function e(t,a,n){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:a,mode:"cors",headers:{"Content-Type":"application/json;charset=utf-8"},body:n,cache:"no-cache"});case 2:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(g.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json;charset=utf-8"},cache:"no-cache"}).then(function(e){return e.json()}).catch(function(e){return e});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(g.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json;charset=utf-8"},cache:"no-cache"});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),k=function(e){if("yyyy-mm-dd"===e){var t=new Date;return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}},N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={calorie:10,workout:"running",time:"minutes",duration:0,todayTotal:0,records:[],dailyGoal:300,show:"collapse",newDailyGoal:0},a.date=k("yyyy-mm-dd"),a.fetchCalorie=function(){var e=Object(g.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://trackapi.nutritionix.com/v2/natural/exercise",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json","x-app-key":"d1f7ab9e52b72ffdcace031cd9fb3e75","x-app-id":"04ca317f"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify({query:t,gender:"female",weight_kg:50,height_cm:160,age:33})}).then(function(e){return e.json()}).then(function(e){a.setState({calorie:Math.round(e.exercises[0].nf_calories)})});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleSelectTime=function(e){if(a.setState({time:e.target.name}),a.state.duration>0){var t=a.state.duration;"hours"===e.target.name&&(t*=60);var n=a.state.workout+" "+t+" minutes";a.fetchCalorie(n)}},a.handleTimeChange=function(){var e=Object(g.a)(b.a.mark(function e(t){var n,l;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({duration:t.target.value}),n=t.target.value,"hours"===a.state.time&&(n=60*t.target.value),l=a.state.workout+" "+n+" minutes",a.fetchCalorie(l);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleSubmit=Object(g.a)(b.a.mark(function e(){var t,n,l,r,c;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,n=a.state.workout,l=a.state.calorie,r=a.state.duration,"hours"===a.state.time&&(r*=60),c=JSON.stringify({time:t.toLocaleString(),calorieBurned:l,workout:n,date:a.date,duration:r}),e.next=8,f(h.apiEndPoint+"/calorie/","POST",c);case 8:return e.t0=a,e.next=11,w(h.apiEndPoint+"/calories/"+a.date+"/total");case 11:return e.t1=e.sent,e.next=14,w(h.apiEndPoint+"/calories/"+a.date);case 14:e.t2=e.sent,e.t3={todayTotal:e.t1,records:e.t2},e.t0.setState.call(e.t0,e.t3);case 17:case"end":return e.stop()}},e)})),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(b.a.mark(function e(){var t=this;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,w(h.apiEndPoint+"/calories/"+this.date+"/total");case 3:return e.t1=e.sent,e.t2={todayTotal:e.t1},e.t0.setState.call(e.t0,e.t2),w(h.apiEndPoint+"/profiles/Weiwei").then(function(e){return t.setState({dailyGoal:e.dailyGoal})}),e.t3=this,e.next=10,w(h.apiEndPoint+"/calories/"+this.date);case 10:e.t4=e.sent,e.t5={records:e.t4},e.t3.setState.call(e.t3,e.t5);case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleSelectExercise",value:function(e){if(this.setState({workout:e}),this.state.duration>0){var t=this.state.duration;"hours"===this.state.time&&(t*=60);var a=e+" "+t+" minutes";this.fetchCalorie(a)}}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"card  mb-3  mt-5",id:"centered",style:{borderColor:"#9cd1f8",width:"40%"}},l.a.createElement("div",{className:"card-header bg-transparent",style:{borderColor:"#9cd1f8"}},l.a.createElement("h5",null,"Add new exercise")),l.a.createElement("div",{className:"card-body "},l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("span",null,"Exercise"),l.a.createElement(y.SelectList,{data:["running","walking","hiit","cardio","yoga","elliptial","weight"],defaultValue:"running",onChange:function(t){return e.handleSelectExercise(t)}}))),l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{type:"number",className:"form-control",placeholder:"Time","aria-label":"Time","aria-describedby":"button-addon4",onChange:this.handleTimeChange}),l.a.createElement("div",{className:"btn-group btn-group-toggle","data-toggle":"button"},l.a.createElement("label",{className:"minutes"===this.state.time?"btn btn-outline-secondary active":"btn btn-outline-secondary"},l.a.createElement("input",{type:"radio",name:"minutes",checked:"minutes"===this.state.time,onChange:this.handleSelectTime}),"minutes"),l.a.createElement("label",{className:"hours"===this.state.time?"btn btn-outline-secondary active":"btn btn-outline-secondary"},l.a.createElement("input",{type:"radio",name:"hours",checked:"hours"===this.state.time,onChange:this.handleSelectTime}),"hours"))),l.a.createElement("div",{className:"mt-2"},this.state.duration>0&&l.a.createElement("span",null,"I did ",this.state.duration," ",this.state.time," ",this.state.workout,". ",l.a.createElement("br",null),"Total calories estimated: ",Math.round(this.state.calorie)," ","Calories."))),l.a.createElement("div",{className:"card-footer bg-transparent",style:{borderColor:"#9cd1f8"}},l.a.createElement("div",{style:{display:"inline-block"}},l.a.createElement("button",{type:"button",className:"btn btn-sm ml-2",style:{backgroundColor:"#9cd1f8",color:"white"},onClick:this.handleSubmit},"Submit")))),l.a.createElement("div",{name:"show records",id:"centered",style:{borderColor:"#9cd1f8",width:"40%"}},l.a.createElement("table",{className:"table  table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Time"),l.a.createElement("th",{scope:"col"},"Workout"),l.a.createElement("th",{scope:"col"},"Duration/minutes"),l.a.createElement("th",{scope:"col"},"Calories"),l.a.createElement("th",{scope:"col"},"Delete"))),l.a.createElement("tbody",null,this.state.records.map(function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.time),l.a.createElement("td",null,t.workout),l.a.createElement("td",null,t.duration),l.a.createElement("td",null,t.calorieBurned),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary",name:t.id,onClick:e.handleDelete},l.a.createElement("i",{className:"fa fa-trash-o","aria-hidden":"true"}))))})))))}}]),t}(n.Component),C=a(33),S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={height:160,heightincm:160,weight:55,age:33,unit:"kg",show:"collapse",newWeight:0,showAlert:"alert alert-success alert-dismissible fade",showInfo:"",weights:[]},a.handleSelectMeter=function(e){a.setState({unit:e.target.name}),"kg"===e.target.name?a.setState({weight:Math.round(.45359237*a.state.weight),height:Math.round(30.48*a.state.height*10)/10}):a.setState({weight:Math.round(2.20462262185*a.state.weight),height:Math.round(.0328084*a.state.height*100)/100})},a.handleEdit=function(){a.setState({show:"collapse"===a.state.show?"collapse show":"collapse"})},a.handleCancel=function(){a.setState({show:"collapse"})},a.handleNewWeightInput=function(e){a.setState({newWeight:e.target.value})},a.handleAddWeight=Object(g.a)(b.a.mark(function e(){var t,n,l,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.state.newWeight>0)){e.next=13;break}return t=a.state.newWeight,n=new Date,console.log(n),"lb"===a.state.unit&&(t=Math.round(.45359237*a.state.newWeight)),l=JSON.stringify({name:"Weiwei",weight:t,time:n.toLocaleString()}),e.next=8,f(h.apiEndPoint+"/profiles/Weiwei","POST",l);case 8:w(h.apiEndPoint+"/profiles/weiwei/weights").then(function(e){a.setState({weights:e,showAlert:"alert alert-success alert-dismissible fade show"}),console.log(e)}),r=JSON.stringify({name:"Weiwei",weight:t,height:160,age:33,dailyGoal:500}),f(h.apiEndPoint+"/profiles","POST",r),a.state.newWeight>a.state.weight?a.setState({showInfo:"Succeed! Your new weight is "+a.state.newWeight+" "+a.state.unit+". You gained "+(a.state.newWeight-a.state.weight)+" "+a.state.unit}):a.setState({showInfo:"Succeed! Your new weight is "+a.state.newWeight+" "+a.state.unit+". You lost "+(a.state.weight-a.state.newWeight)+" "+a.state.unit}),a.setState({weight:a.state.newWeight});case 13:case"end":return e.stop()}},e)})),a.handleDelete=function(){var e=Object(g.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(h.apiEndPoint+"/profiles/Weiwei/"+t.currentTarget.name);case 2:w(h.apiEndPoint+"/profiles/weiwei/weights").then(function(e){return e}).then(function(e){return a.setState({weights:e})});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(b.a.mark(function e(){var t=this;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:w(h.apiEndPoint+"/profiles/Weiwei").then(function(e){return t.setState({weight:e.weight})}),w(h.apiEndPoint+"/profiles/Weiwei").then(function(e){return t.setState({height:e.height,heightincm:e.height})}),w(h.apiEndPoint+"/profiles/Weiwei").then(function(e){return t.setState({age:e.age})}),w(h.apiEndPoint+"/profiles/weiwei/weights").then(function(e){return t.setState({weights:e})});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:this.state.showAlert,role:"alert"},this.state.showInfo,l.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:function(){return e.setState({showAlert:"alert alert-success alert-dismissible fade"})}},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))," "),l.a.createElement("div",{className:"card  mb-3  ",id:"centered",style:{borderColor:"#9cd1f8",width:"40%"}},l.a.createElement("div",{className:"card-header bg-transparent",style:{borderColor:"#9cd1f8"}},l.a.createElement("div",{style:{display:"inline-block"}},l.a.createElement("h5",null,"Weiwei's Personal Profile")),l.a.createElement("div",{className:"btn-group btn-group-toggle btn-sm","data-toggle":"button",style:{display:"inline-block"}},l.a.createElement("label",{className:"kg"===this.state.unit?"btn btn-sm btn-outline-secondary active":"btn btn-sm btn-outline-secondary"},l.a.createElement("input",{type:"radio",name:"kg",checked:"kg"===this.state.unit,onChange:this.handleSelectMeter}),"cm/kg"),l.a.createElement("label",{className:"lb"===this.state.unit?"btn btn-sm btn-outline-secondary active":"btn btn-sm btn-outline-secondary"},l.a.createElement("input",{type:"radio",name:"lb",checked:"lb"===this.state.unit,onChange:this.handleSelectMeter}),"ft/lb"))),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3 ml-5"},"Weight"),l.a.createElement("div",{className:"col-7"},this.state.weight,"kg"===this.state.unit?" kg":" lb",l.a.createElement("i",{className:"fa fa-pencil-square-o ml-2","aria-hidden":"true",style:{cursor:"pointer"},onClick:this.handleEdit}),l.a.createElement("div",{className:this.state.show,id:"collapseExample"},l.a.createElement("div",{className:"card card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-9"},l.a.createElement("input",{type:"number",min:"0",placeholder:"Enter new weight here",step:"2.5",className:"mb-2",onChange:this.handleNewWeightInput})),l.a.createElement("div",{className:"col-3"},"kg"===this.state.unit?" kg":" lb")),l.a.createElement("div",{className:"row "},l.a.createElement("button",{className:"btn btn-sm ml-3 btn-outline-secondary",onClick:this.handleAddWeight},"Add new weight"),l.a.createElement("button",{onClick:this.handleCancel,className:"btn btn-sm ml-3 btn-outline-secondary"},"Close")))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3 ml-5"},"Height"),l.a.createElement("div",{className:"col-7"},this.state.height,"kg"===this.state.unit?"cm":"ft")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3 ml-5"},"Age"),l.a.createElement("div",{className:"col-7"},this.state.age))),l.a.createElement("div",{className:"card-footer bg-transparent",style:{borderColor:"#9cd1f8"}},l.a.createElement("div",{style:{display:"inline-block"}}),l.a.createElement("div",{style:{display:"inline-block"}},l.a.createElement("button",{type:"button",className:"btn btn-sm ml-2",style:{backgroundColor:"#9cd1f8",color:"white"}},"Edit")))),l.a.createElement("div",null,l.a.createElement("div",{name:"show records",id:"left"},l.a.createElement("table",{className:"table  table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Time"),l.a.createElement("th",{scope:"col"},"Weight"),l.a.createElement("th",{scope:"col"},"BMI"),l.a.createElement("th",{scope:"col"},"Delete"))),l.a.createElement("tbody",null,this.state.weights.map(function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.time),l.a.createElement("td",null,t.weight," Kg"),l.a.createElement("td",null,Math.round(1e5*t.weight/e.state.heightincm/e.state.heightincm)/10),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary",name:t.id,onClick:e.handleDelete},l.a.createElement("i",{className:"fa fa-trash-o","aria-hidden":"true"}))))})))),l.a.createElement("div",{id:"right"},l.a.createElement(C.e,{width:500,height:300,data:this.state.weights},l.a.createElement(C.g,{dataKey:"time"},l.a.createElement(C.b,{value:"Date",offset:0,position:"insideBottom"})),l.a.createElement(C.h,{dataKey:"weight",label:{value:"weight",angle:-90,position:"insideLeft"}}),l.a.createElement(C.a,{stroke:"#eee",strokeDasharray:"5 5"}),l.a.createElement(C.c,{verticalAlign:"top",height:36}),l.a.createElement(C.d,{name:"weight records",type:"monotone",dataKey:"weight",stroke:"#82ca9d"}),l.a.createElement(C.f,null)))))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={todayTotal:0,records:[],dailyGoal:300,show:"collapse",newDailyGoal:0},a.date=k("yyyy-mm-dd"),a.handleCancel=function(){a.setState({show:"collapse"})},a.handleEdit=function(){a.setState({show:"collapse"===a.state.show?"collapse show":"collapse"})},a.handleChangeDailyGoal=function(e){a.setState({newDailyGoal:e.target.value})},a.handleSave=Object(g.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.newDailyGoal,e.next=3,f(h.apiEndPoint+"/profiles/Weiwei/"+t,"POST",{});case 3:a.setState({dailyGoal:a.state.newDailyGoal});case 4:case"end":return e.stop()}},e)})),a.handleDelete=function(){var e=Object(g.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(h.apiEndPoint+"/profiles/Weiwei/calories/"+t.currentTarget.name);case 2:return e.t0=a,e.next=5,w(h.apiEndPoint+"/calories/"+a.date);case 5:return e.t1=e.sent,e.next=8,w(h.apiEndPoint+"/calories/"+a.date+"/total");case 8:e.t2=e.sent,e.t3={records:e.t1,todayTotal:e.t2},e.t0.setState.call(e.t0,e.t3);case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(b.a.mark(function e(){var t=this;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,w(h.apiEndPoint+"/calories/"+this.date+"/total");case 3:return e.t1=e.sent,e.t2={todayTotal:e.t1},e.t0.setState.call(e.t0,e.t2),w(h.apiEndPoint+"/profiles/Weiwei").then(function(e){return t.setState({dailyGoal:e.dailyGoal})}),e.t3=this,e.next=10,w(h.apiEndPoint+"/calories/"+this.date);case 10:e.t4=e.sent,e.t5={records:e.t4},e.t3.setState.call(e.t3,e.t5);case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"centered",className:"card  mb-3 mt-5",style:{borderColor:"#9cd1f8",width:"40%"}},l.a.createElement("div",{className:"card-header bg-transparent",style:{borderColor:"#9cd1f8"}},l.a.createElement("div",{style:{display:"inline-block"}},l.a.createElement("h5",null,"Weiwei's Personal Profile")),l.a.createElement("div",{className:"btn-group btn-group-toggle btn-sm","data-toggle":"button",style:{display:"inline-block"}},l.a.createElement("label",{className:"kg"===this.state.unit?"btn btn-sm btn-outline-secondary active":"btn btn-sm btn-outline-secondary"},l.a.createElement("input",{type:"radio",name:"kg",checked:"kg"===this.state.unit,onChange:this.handleSelectMeter}),"cm/kg"),l.a.createElement("label",{className:"lb"===this.state.unit?"btn btn-sm btn-outline-secondary active":"btn btn-sm btn-outline-secondary"},l.a.createElement("input",{type:"radio",name:"lb",checked:"lb"===this.state.unit,onChange:this.handleSelectMeter}),"ft/lb"))),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3 ml-5"},"Weight"),l.a.createElement("div",{className:"col-7"},this.state.weight,"kg"===this.state.unit?" kg":" lb",l.a.createElement("i",{className:"fa fa-pencil-square-o ml-2","aria-hidden":"true",style:{cursor:"pointer"},onClick:this.handleEdit}),l.a.createElement("div",{className:this.state.show,id:"collapseExample"},l.a.createElement("div",{className:"card card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-9"},l.a.createElement("input",{type:"number",min:"0",placeholder:"Enter new weight here",step:"2.5",className:"mb-2",onChange:this.handleNewWeightInput})),l.a.createElement("div",{className:"col-3"},"kg"===this.state.unit?" kg":" lb")),l.a.createElement("div",{className:"row "},l.a.createElement("button",{className:"btn btn-sm ml-3 btn-outline-secondary",onClick:this.handleAddWeight},"Add new weight"),l.a.createElement("button",{onClick:this.handleCancel,className:"btn btn-sm ml-3 btn-outline-secondary"},"Close")))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3 ml-5"},"Height"),l.a.createElement("div",{className:"col-7"},this.state.height,"kg"===this.state.unit?"cm":"ft")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3 ml-5"},"Age"),l.a.createElement("div",{className:"col-7"},this.state.age))),l.a.createElement("div",{className:"card-footer bg-transparent",style:{borderColor:"#9cd1f8"}},l.a.createElement("div",{style:{display:"inline-block"}}),l.a.createElement("div",{style:{display:"inline-block"}},l.a.createElement("button",{type:"button",className:"btn btn-sm ml-2",style:{backgroundColor:"#9cd1f8",color:"white"}},"Edit")))),l.a.createElement("div",{id:"centered",className:"card  mb-3  mt-5",style:{borderColor:"#9cd1f8",width:"40%"}},l.a.createElement("div",{className:"card-header bg-transparent",style:{borderColor:"#9cd1f8"}},l.a.createElement("h5",null,"Today's Workout"),this.date),l.a.createElement("div",{className:"card-body "},l.a.createElement("span",null,this.state.todayTotal," Caloreis Burned"),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar progress-bar-striped bg-success",role:"progressbar",style:{width:this.state.todayTotal/this.state.dailyGoal>=1?"100%":Math.round(this.state.todayTotal/this.state.dailyGoal*100)+"%"},"aria-valuenow":this.state.todayTotal,"aria-valuemin":"0","aria-valuemax":this.state.dailyGoal},this.state.todayTotal/this.state.dailyGoal>=1?"100%":Math.round(this.state.todayTotal/this.state.dailyGoal*100)+" %"))),l.a.createElement("div",{className:"card-footer bg-transparent",style:{borderColor:"#9cd1f8"}},l.a.createElement("div",{style:{display:"inline-block"}},"Your goal to burn daliy is ",this.state.dailyGoal," Calories",l.a.createElement("i",{className:"fa fa-pencil-square-o ml-2","aria-hidden":"true",style:{cursor:"pointer"},onClick:this.handleEdit}),l.a.createElement("div",{className:this.state.show,id:"collapseExample"},l.a.createElement("div",{className:"card card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8"},l.a.createElement("input",{type:"number",min:"0",placeholder:"Enter your daily goal",step:"2.5",className:"mb-2",onChange:this.handleChangeDailyGoal})),l.a.createElement("div",{className:"col-4"},"Calories ")),l.a.createElement("div",{className:"row "},l.a.createElement("button",{className:"btn btn-sm ml-3 btn-outline-secondary",onClick:this.handleSave},"Save"),l.a.createElement("button",{onClick:this.handleCancel,className:"btn btn-sm ml-3 btn-outline-secondary"},"Close"))))))),l.a.createElement("div",{id:"centered",name:"show records",className:"mb-3  mt-5",style:{borderColor:"#9cd1f8",width:"40%"}},l.a.createElement("table",{className:"table  table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Time"),l.a.createElement("th",{scope:"col"},"Workout"),l.a.createElement("th",{scope:"col"},"Duration/minutes"),l.a.createElement("th",{scope:"col"},"Calories"),l.a.createElement("th",{scope:"col"},"Delete"))),l.a.createElement("tbody",null,this.state.records.map(function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.time),l.a.createElement("td",null,t.workout),l.a.createElement("td",null,t.duration),l.a.createElement("td",null,t.calorieBurned),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary",name:t.id,onClick:e.handleDelete},l.a.createElement("i",{className:"fa fa-trash-o","aria-hidden":"true"}))))})))))}}]),t}(n.Component),O=a(464),T=a(465),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).handleClick=function(e){console.log(e)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{name:"weekly planner",id:"centered",style:{width:"60%"}},l.a.createElement("table",{className:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{style:{width:"15%"},scope:"col"},"Days"),l.a.createElement("th",{scope:"col"},"Plans"))),l.a.createElement("tbody",null,l.a.createElement("tr",{id:"sunday",style:{cursor:"pointer"},"data-toggle":"tooltip","data-placement":"top",title:"Click to edit plans for Sunday",onClick:function(){return e.handleClick("Sunday")}},l.a.createElement("th",{scope:"row"},"Sunday"),l.a.createElement("td",null)),l.a.createElement("tr",{style:{cursor:"pointer"},"data-toggle":"tooltip","data-placement":"top",title:"Click to edit plans for Monday",onClick:function(){return e.handleClick("Monday")}},l.a.createElement("th",{scope:"row"},"Monday"),l.a.createElement("td",null)),l.a.createElement("tr",{style:{cursor:"pointer"},"data-toggle":"tooltip","data-placement":"top",title:"Click to edit plans for Tuesday",onClick:function(){return e.handleClick("Tuesday")}},l.a.createElement("th",{scope:"row"},"Tuesday"),l.a.createElement("td",null)),l.a.createElement("tr",{style:{cursor:"pointer"},"data-toggle":"tooltip","data-placement":"top",title:"Click to edit plans for Wednesday",onClick:function(){return e.handleClick("Wednesday")}},l.a.createElement("th",{scope:"row"},"Wednesday"),l.a.createElement("td",null)),l.a.createElement("tr",{style:{cursor:"pointer"},"data-toggle":"tooltip","data-placement":"top",title:"Click to edit plans for Thursday",onClick:function(){return e.handleClick("Thursday")}},l.a.createElement("th",{scope:"row"},"Thursday"),l.a.createElement("td",null)),l.a.createElement("tr",{style:{cursor:"pointer"},"data-toggle":"tooltip","data-placement":"top",title:"Click to edit plans for Friday",onClick:function(){return e.handleClick("Friday")}},l.a.createElement("th",{scope:"row"},"Friday"),l.a.createElement("td",null)),l.a.createElement("tr",{style:{cursor:"pointer"},"data-toggle":"tooltip","data-placement":"top",title:"Click to edit plans for Saturday",onClick:function(){return e.handleClick("Saturday")}},l.a.createElement("th",{scope:"row"},"Saturday"),l.a.createElement("td",null)))))}}]),t}(n.Component);var W=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null),l.a.createElement("div",null,l.a.createElement(O.a,null,l.a.createElement(T.a,{path:"/today",component:x}),l.a.createElement(T.a,{path:"/addexercise",component:N}),l.a.createElement(T.a,{path:"/addweight",component:S}),l.a.createElement(T.a,{path:"/profile",component:S}),l.a.createElement(T.a,{path:"/planner",component:j}),l.a.createElement(T.a,{path:"/",component:x}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(457),a(458),a(459);var P=a(463);c.a.render(l.a.createElement(P.a,null,l.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e){e.exports={apiLocalEndPoint:"http://localhost:8080",root:"/burn",apiEndPoint:"https://rocky-earth-14230.herokuapp.com"}}},[[226,1,2]]]);
//# sourceMappingURL=main.a9df6ed3.chunk.js.map