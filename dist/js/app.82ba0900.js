(function(t){function e(e){for(var a,s,r=e[0],l=e[1],c=e[2],u=0,p=[];u<r.length;u++)s=r[u],i[s]&&p.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function s(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"dfadc014"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=i[t]=[e,a]});e.push(n[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=s(t),o=function(e){l.onerror=l.onload=null,clearTimeout(c);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");s.type=a,s.request=o,n[1](s)}i[t]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},2472:function(t,e,n){"use strict";var a=n("c24d"),i=n.n(a);i.a},"400f":function(t,e,n){t.exports=n.p+"img/pokeball-loading.5d23b0e7.gif"},"55a8":function(t,e,n){"use strict";var a=n("e842"),i=n.n(a);i.a},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),i=n.n(a);i.a},"5e27":function(t,e,n){},c24d:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar",attrs:{id:"nav",role:"navigation","aria-label":"main navigation"}},[t._m(0),n("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[n("div",{staticClass:"navbar-start"},[n("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("\n            Pokèdex\n          ")]),n("router-link",{staticClass:"navbar-item",attrs:{to:"/berries"}},[t._v("\n            Pokèberries\n          ")]),n("a",{staticClass:"navbar-item",attrs:{href:"https://github.com/Fieel/vue-pokedex"}},[t._v("\n            Source code\n          ")])],1)])]),n("router-view")],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-brand"},[a("div",{staticClass:"navbar-item"},[a("img",{attrs:{src:n("cf05"),width:"28",height:"28"}})]),a("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])])}],s=(n("5c0b"),n("2877")),r={},l=Object(s["a"])(r,i,o,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,u=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns",staticStyle:{height:"93vh",margin:"0"}},[n("div",{staticClass:"column",staticStyle:{"border-right":"1px solid rgba(10,10,10,.1)"}},[n("PokemonCard")],1),n("div",{staticClass:"column"},[n("PokemonList")],1)])},p=[],m=n("d225"),f=n("308d"),v=n("6bb5"),b=n("4e2b"),h=n("9ab4"),A=n("60a3"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.pokemonData&&t.pokemonAdditionalInfo?a("div",{staticClass:"card is-shadowless"},[a("div",{staticClass:"title is-inline-block"},[a("br"),a("p",{staticClass:"is-6 is-inline-block pokedex-number has-text-grey-light"},[t._v("#"+t._s(t.pokemonAdditionalInfo.id))]),a("p",{staticClass:"is-4 is-inline-block"},[t._v("\n        "+t._s(t.pokemonData.name)+"\n      ")])]),a("br"),t._l(t.pokemonData.types,function(e){return a("p",{key:e.slot,staticClass:"is-inline-block type"},[t._v("\n      "+t._s(e.type.name)+" \n    ")])}),a("div",{staticClass:"card-image"},[a("div",{staticClass:"level has-text-centered"},[a("div",{staticClass:"level-item"},[a("figure",{staticClass:"image is-96x96"},[a("img",{attrs:{src:t.pokemonData.sprites.front_default,alt:"Front sprite"}})]),a("figure",{staticClass:"image is-96x96"},[a("img",{attrs:{src:t.pokemonData.sprites.back_default,alt:"Back sprite"}})])])])]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},[a("p",[t._v(t._s(t.pokemonAdditionalInfo.flavor_text_entries[1].flavor_text))]),a("p",{staticClass:"subtitle has-text-weight-bold has-text-left"},[t._v("Info")]),a("div",{staticClass:"columns is-mobile is-multiline"},[a("div",{staticClass:"column is-half-mobile"},[a("p",{staticClass:"has-text-weight-semibold"},[t._v("Weight")]),t._v("\n          "+t._s(t.pokemonData.weight/10)+" kg\n        ")]),a("div",{staticClass:"column is-half-mobile"},[a("p",{staticClass:"has-text-weight-semibold"},[t._v("Height")]),t._v("\n          "+t._s(t.pokemonData.height/10)+" m\n        ")]),a("div",{staticClass:"column is-half-mobile"},[a("p",{staticClass:"has-text-weight-semibold"},[t._v("Type")]),t._v("\n          "+t._s(t.pokemonAdditionalInfo.genera[2].genus)+"\n        ")]),a("div",{staticClass:"column is-half-mobile"},[a("p",{staticClass:"has-text-weight-semibold"},[t._v("Generation")]),t._v("\n          "+t._s(t.pokemonAdditionalInfo.generation.name.substring(t.pokemonAdditionalInfo.generation.name.lastIndexOf("-")+1).toUpperCase())+"\n        ")])]),a("p",{staticClass:"subtitle has-text-weight-bold has-text-left"},[t._v("Stats")]),a("div",{staticClass:"columns is-mobile is-multiline"},t._l(t.pokemonData.stats,function(e){return a("div",{key:e.stat.name,staticClass:"column is-half-mobile"},[a("p",{staticClass:"has-text-weight-semibold"},[t._v(t._s(e.stat.name))]),t._v("\n          "+t._s(e.base_stat)+"\n        ")])}),0)]),a("p",{staticClass:"subtitle has-text-weight-bold has-text-left"},[t._v("Evolutions")]),a("div",{staticClass:"columns is-mobile is-multiline"},t._l(t.pokemonEvolutionsData,function(e){return a("div",{key:e.species_name,staticClass:"column is-one-third-mobile"},[a("a",{on:{click:function(n){t.changePokemon(e.species_name)}}},[a("img",{attrs:{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+e.species_id+".png"}}),a("p",[t._v(t._s(e.species_name))])])])}),0)])],2):a("div",{staticClass:"loading-wrapper"},[a("img",{attrs:{src:n("400f")}})])},g=[],x=n("b0b4"),C=n("4bb5"),O=function(t){function e(){var t;return Object(m["a"])(this,e),t=Object(f["a"])(this,Object(v["a"])(e).apply(this,arguments)),t.changePokemon=function(e){t.$store.dispatch("loadPokemon",e)},t}return Object(b["a"])(e,t),Object(x["a"])(e,[{key:"created",value:function(){this.$store.dispatch("loadPokemon",1)}}]),e}(A["b"]);h["a"]([Object(C["a"])("pokemonData")],O.prototype,"pokemonData",void 0),h["a"]([Object(C["a"])("pokemonAdditionalInfo")],O.prototype,"pokemonAdditionalInfo",void 0),h["a"]([Object(C["a"])("pokemonEvolutionsData")],O.prototype,"pokemonEvolutionsData",void 0),O=h["a"]([A["a"]],O);var w=O,j=w,_=(n("2472"),Object(s["a"])(j,k,g,!1,null,"08228dd1",null));_.options.__file="PokemonCard.vue";var y=_.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.pokemonList?n("div",{staticClass:"PokemonList"},[n("table",{staticClass:"table"},[t._m(0),n("tbody",t._l(t.pokemonList,function(e,a){return n("tr",{key:e.name,staticClass:"table-row",class:{"is-selected":null!==t.pokemonData&&e.name==t.pokemonData.name},on:{click:function(n){t.changePokemon(e.name)}}},[n("td",[t._v(t._s(a+1))]),n("td",[t._v(t._s(e.name))])])}),0)])]):t._e()},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("PokèDex #")]),n("th",[t._v("Name")])])])}],I=function(t){function e(){var t;return Object(m["a"])(this,e),t=Object(f["a"])(this,Object(v["a"])(e).apply(this,arguments)),t.changePokemon=function(e){t.$store.dispatch("loadPokemon",e)},t}return Object(b["a"])(e,t),Object(x["a"])(e,[{key:"created",value:function(){this.$store.dispatch("loadList")}}]),e}(A["b"]);h["a"]([Object(C["a"])("pokemonList")],I.prototype,"pokemonList",void 0),h["a"]([Object(C["a"])("pokemonData")],I.prototype,"pokemonData",void 0),I=h["a"]([A["a"]],I);var P=I,E=P,G=(n("55a8"),Object(s["a"])(E,M,R,!1,null,"56784d44",null));G.options.__file="PokemonList.vue";var Y=G.exports,D=function(t){function e(){return Object(m["a"])(this,e),Object(f["a"])(this,Object(v["a"])(e).apply(this,arguments))}return Object(b["a"])(e,t),e}(A["b"]);D=h["a"]([Object(A["a"])({components:{PokemonCard:y,PokemonList:Y}})],D);var L=D,F=L,z=Object(s["a"])(F,d,p,!1,null,null,null);z.options.__file="Home.vue";var Z=z.exports;a["default"].use(u["a"]);var U=new u["a"]({routes:[{path:"/",name:"home",component:Z},{path:"/berries",name:"berries",component:function(){return n.e("about").then(n.bind(null,"abfb"))}}]}),B=n("2f62"),S=n("bc3a"),X=n.n(S),K=function(){function t(){var e=this;Object(m["a"])(this,t),this.baseURL="https://pokeapi.co/api/v2/",this.endpoints={pokemon:"pokemon/",pokemonSpecies:"pokemon-species/",evolutions:"evolution-chain/"},this.getList=function(){return X.a.get(e.baseURL+e.endpoints.pokemon+"?limit=802").then(function(t){return t.data.results})}}return Object(x["a"])(t,[{key:"getSingle",value:function(t){return X.a.get(this.baseURL+this.endpoints.pokemon+t).then(function(t){return t.data})}},{key:"getAdditionalInfo",value:function(t){return X.a.get(this.baseURL+this.endpoints.pokemonSpecies+t).then(function(t){return t.data})}},{key:"getEvolutions",value:function(t){return X.a.get(this.baseURL+this.endpoints.evolutions+t).then(function(t){return t.data})}}]),t}(),T=(n("7f7f"),function(){function t(){Object(m["a"])(this,t)}return Object(x["a"])(t,[{key:"buildChain",value:function(t){var e=[];do{var n=t["evolution_details"][0];e.push({species_name:t.species.name,species_id:this.extractIdFromUrl(t.species.url),min_level:n?n.min_level:1,trigger_name:n?n.trigger.name:null,item:n?n.item:null}),t=t["evolves_to"][0]}while(t&&t.hasOwnProperty("evolves_to"));return e}},{key:"extractIdFromUrl",value:function(t){var e=t;e=e.slice(0,-1);var n=e.lastIndexOf("/"),a=e.substring(n+1);return a}}]),t}()),W=new K;a["default"].use(B["a"]);var N=new B["a"].Store({state:{pokemonData:null,pokemonAdditionalInfo:null,pokemonEvolutionsData:null,pokemonList:[]},mutations:{loadingStatusUpdate:function(t){t.pokemonData=null,t.pokemonAdditionalInfo=null,t.pokemonEvolutionsData=null},updatePokemon:function(t,e){t.pokemonData=e},updatePokemonInfo:function(t,e){t.pokemonAdditionalInfo=e},updatePokemonEvolutions:function(t,e){t.pokemonEvolutionsData=e},updateList:function(t,e){t.pokemonList=e}},actions:{loadPokemon:function(t,e){t.commit("loadingStatusUpdate"),W.getSingle(e).then(function(e){t.commit("updatePokemon",e)}),W.getAdditionalInfo(e).then(function(e){t.commit("updatePokemonInfo",e),t.dispatch("loadEvolutions",e.evolution_chain.url)})},loadList:function(t){W.getList().then(function(e){t.commit("updateList",e)})},loadEvolutions:function(t,e){var n=new T,a=n.extractIdFromUrl(e);W.getEvolutions(a).then(function(e){var a=n.buildChain(e.chain);t.commit("updatePokemonEvolutions",a)})}}});n("eb46");a["default"].config.productionTip=!1,new a["default"]({router:U,store:N,render:function(t){return t(c)}}).$mount("#app")},cf05:function(t,e){t.exports="data:image/png;base64,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"},e842:function(t,e,n){}});
//# sourceMappingURL=app.82ba0900.js.map