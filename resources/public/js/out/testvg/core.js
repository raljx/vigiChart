// Compiled by ClojureScript 0.0-3308 {}
goog.provide('testvg.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('testvg.api');
goog.require('goog.History');
goog.require('goog.events');
testvg.core.home_page = (function testvg$core$home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to testvg"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Appel de l'API Vigiglobe (api.vigiglobe.com)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"L'appel est instanci\u00E9 dans le fichier api.cljs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/chart"], null),"go to chart page"], null)], null)], null);
});
if(typeof testvg.core.state !== 'undefined'){
} else {
testvg.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null,new cljs.core.Keyword(null,"max-range","max-range",623016397),(3600000)], null));
}
if(typeof testvg.core.counter !== 'undefined'){
} else {
testvg.core.counter = reagent.core.atom.call(null,(0));
}
testvg.core.chart_page = (function testvg$core$chart_page(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Appel a l'API VigiGlobe"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Press F5 to load"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to homepage"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#container","div#container",-1257349488),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"310px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"800px",new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#container-messages","div#container-messages",-1887524494),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"310px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"800px",new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#container-authors","div#container-authors",-1840841803),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"310px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"800px",new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto"], null)], null)], null)], null);
});
testvg.core.get_highcharts = (function testvg$core$get_highcharts(){
return (Highcharts["charts"][cljs.core.deref.call(null,testvg.core.counter)]);
});
testvg.core.update_range = (function testvg$core$update_range(range){
return (testvg.core.get_highcharts.call(null)["xAxis"][(0)]).update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"minRange","minRange",1571162972),range,new cljs.core.Keyword(null,"range","range",1639692286),range], null)));
});
testvg.core.add_point_all = (function testvg$core$add_point_all(data){
var date = Date.parse(cljs.core.first.call(null,data));
var value = cljs.core.second.call(null,data);
var start = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,testvg.core.state));
if(cljs.core.truth_(start)){
testvg.core.update_range.call(null,(function (){var x__20886__auto__ = (date - start);
var y__20887__auto__ = new cljs.core.Keyword(null,"max-range","max-range",623016397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,testvg.core.state));
return ((x__20886__auto__ < y__20887__auto__) ? x__20886__auto__ : y__20887__auto__);
})());
} else {
cljs.core.swap_BANG_.call(null,testvg.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),date);
}

return (testvg.core.get_highcharts.call(null)["series"][(0)]).addPoint(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,value], null)));
});
testvg.core.add_point_messages = (function testvg$core$add_point_messages(data){
var date = Date.parse(cljs.core.first.call(null,data));
var value = cljs.core.second.call(null,data);
var start = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,testvg.core.state));
if(cljs.core.truth_(start)){
testvg.core.update_range.call(null,(function (){var x__20886__auto__ = (date - start);
var y__20887__auto__ = new cljs.core.Keyword(null,"max-range","max-range",623016397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,testvg.core.state));
return ((x__20886__auto__ < y__20887__auto__) ? x__20886__auto__ : y__20887__auto__);
})());
} else {
cljs.core.swap_BANG_.call(null,testvg.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),date);
}

return (testvg.core.get_highcharts.call(null)["series"][(1)]).addPoint(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,value], null)));
});
testvg.core.add_point_authors = (function testvg$core$add_point_authors(data){
var date = Date.parse(cljs.core.first.call(null,data));
var value = cljs.core.second.call(null,data);
var start = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,testvg.core.state));
if(cljs.core.truth_(start)){
testvg.core.update_range.call(null,(function (){var x__20886__auto__ = (date - start);
var y__20887__auto__ = new cljs.core.Keyword(null,"max-range","max-range",623016397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,testvg.core.state));
return ((x__20886__auto__ < y__20887__auto__) ? x__20886__auto__ : y__20887__auto__);
})());
} else {
cljs.core.swap_BANG_.call(null,testvg.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),date);
}

return (testvg.core.get_highcharts.call(null)["series"][(2)]).addPoint(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,value], null)));
});
testvg.core.get_stat = (function testvg$core$get_stat(){
window.setInterval((function (){
var c__23577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto__){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto__){
return (function (state_32142){
var state_val_32143 = (state_32142[(1)]);
if((state_val_32143 === (1))){
var inst_32136 = cljs.core.PersistentVector.EMPTY;
var inst_32137 = testvg.api.get_statistics_authors.call(null,inst_32136);
var state_32142__$1 = state_32142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32142__$1,(2),inst_32137);
} else {
if((state_val_32143 === (2))){
var inst_32139 = (state_32142[(2)]);
var inst_32140 = testvg.core.add_point_authors.call(null,inst_32139);
var state_32142__$1 = state_32142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32142__$1,inst_32140);
} else {
return null;
}
}
});})(c__23577__auto__))
;
return ((function (switch__23515__auto__,c__23577__auto__){
return (function() {
var testvg$core$get_stat_$_state_machine__23516__auto__ = null;
var testvg$core$get_stat_$_state_machine__23516__auto____0 = (function (){
var statearr_32147 = [null,null,null,null,null,null,null];
(statearr_32147[(0)] = testvg$core$get_stat_$_state_machine__23516__auto__);

(statearr_32147[(1)] = (1));

return statearr_32147;
});
var testvg$core$get_stat_$_state_machine__23516__auto____1 = (function (state_32142){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_32142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e32148){if((e32148 instanceof Object)){
var ex__23519__auto__ = e32148;
var statearr_32149_32181 = state_32142;
(statearr_32149_32181[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32182 = state_32142;
state_32142 = G__32182;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
testvg$core$get_stat_$_state_machine__23516__auto__ = function(state_32142){
switch(arguments.length){
case 0:
return testvg$core$get_stat_$_state_machine__23516__auto____0.call(this);
case 1:
return testvg$core$get_stat_$_state_machine__23516__auto____1.call(this,state_32142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
testvg$core$get_stat_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = testvg$core$get_stat_$_state_machine__23516__auto____0;
testvg$core$get_stat_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = testvg$core$get_stat_$_state_machine__23516__auto____1;
return testvg$core$get_stat_$_state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto__))
})();
var state__23579__auto__ = (function (){var statearr_32150 = f__23578__auto__.call(null);
(statearr_32150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto__);

return statearr_32150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto__))
);

return c__23577__auto__;
}),(3000));

window.setInterval((function (){
var c__23577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto__){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto__){
return (function (state_32157){
var state_val_32158 = (state_32157[(1)]);
if((state_val_32158 === (1))){
var inst_32151 = cljs.core.PersistentVector.EMPTY;
var inst_32152 = testvg.api.get_statistics_messages.call(null,inst_32151);
var state_32157__$1 = state_32157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32157__$1,(2),inst_32152);
} else {
if((state_val_32158 === (2))){
var inst_32154 = (state_32157[(2)]);
var inst_32155 = testvg.core.add_point_messages.call(null,inst_32154);
var state_32157__$1 = state_32157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32157__$1,inst_32155);
} else {
return null;
}
}
});})(c__23577__auto__))
;
return ((function (switch__23515__auto__,c__23577__auto__){
return (function() {
var testvg$core$get_stat_$_state_machine__23516__auto__ = null;
var testvg$core$get_stat_$_state_machine__23516__auto____0 = (function (){
var statearr_32162 = [null,null,null,null,null,null,null];
(statearr_32162[(0)] = testvg$core$get_stat_$_state_machine__23516__auto__);

(statearr_32162[(1)] = (1));

return statearr_32162;
});
var testvg$core$get_stat_$_state_machine__23516__auto____1 = (function (state_32157){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_32157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e32163){if((e32163 instanceof Object)){
var ex__23519__auto__ = e32163;
var statearr_32164_32183 = state_32157;
(statearr_32164_32183[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32184 = state_32157;
state_32157 = G__32184;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
testvg$core$get_stat_$_state_machine__23516__auto__ = function(state_32157){
switch(arguments.length){
case 0:
return testvg$core$get_stat_$_state_machine__23516__auto____0.call(this);
case 1:
return testvg$core$get_stat_$_state_machine__23516__auto____1.call(this,state_32157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
testvg$core$get_stat_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = testvg$core$get_stat_$_state_machine__23516__auto____0;
testvg$core$get_stat_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = testvg$core$get_stat_$_state_machine__23516__auto____1;
return testvg$core$get_stat_$_state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto__))
})();
var state__23579__auto__ = (function (){var statearr_32165 = f__23578__auto__.call(null);
(statearr_32165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto__);

return statearr_32165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto__))
);

return c__23577__auto__;
}),(3000));

return window.setInterval((function (){
var c__23577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto__){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto__){
return (function (state_32172){
var state_val_32173 = (state_32172[(1)]);
if((state_val_32173 === (1))){
var inst_32166 = cljs.core.PersistentVector.EMPTY;
var inst_32167 = testvg.core.get_statistics_all.call(null,inst_32166);
var state_32172__$1 = state_32172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32172__$1,(2),inst_32167);
} else {
if((state_val_32173 === (2))){
var inst_32169 = (state_32172[(2)]);
var inst_32170 = testvg.core.add_point_all.call(null,inst_32169);
var state_32172__$1 = state_32172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32172__$1,inst_32170);
} else {
return null;
}
}
});})(c__23577__auto__))
;
return ((function (switch__23515__auto__,c__23577__auto__){
return (function() {
var testvg$core$get_stat_$_state_machine__23516__auto__ = null;
var testvg$core$get_stat_$_state_machine__23516__auto____0 = (function (){
var statearr_32177 = [null,null,null,null,null,null,null];
(statearr_32177[(0)] = testvg$core$get_stat_$_state_machine__23516__auto__);

(statearr_32177[(1)] = (1));

return statearr_32177;
});
var testvg$core$get_stat_$_state_machine__23516__auto____1 = (function (state_32172){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_32172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e32178){if((e32178 instanceof Object)){
var ex__23519__auto__ = e32178;
var statearr_32179_32185 = state_32172;
(statearr_32179_32185[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32186 = state_32172;
state_32172 = G__32186;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
testvg$core$get_stat_$_state_machine__23516__auto__ = function(state_32172){
switch(arguments.length){
case 0:
return testvg$core$get_stat_$_state_machine__23516__auto____0.call(this);
case 1:
return testvg$core$get_stat_$_state_machine__23516__auto____1.call(this,state_32172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
testvg$core$get_stat_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = testvg$core$get_stat_$_state_machine__23516__auto____0;
testvg$core$get_stat_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = testvg$core$get_stat_$_state_machine__23516__auto____1;
return testvg$core$get_stat_$_state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto__))
})();
var state__23579__auto__ = (function (){var statearr_32180 = f__23578__auto__.call(null);
(statearr_32180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto__);

return statearr_32180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto__))
);

return c__23577__auto__;
}),(3000));
});
testvg.core.chart_config = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"spline",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"load","load",-1318641184),testvg.core.get_stat.call(null)], null)], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"API Vigiglobe / Statistics Volume"], null),new cljs.core.Keyword(null,"xAxis","xAxis",1266196059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"datetime",new cljs.core.Keyword(null,"tickPixelInterval","tickPixelInterval",-634217993),(100)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1793336722),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plotLines","plotLines",-1340154240),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(1),new cljs.core.Keyword(null,"width","width",-384071477),(4),new cljs.core.Keyword(null,"color","color",1011675173),"#00FF00"], null)], null)], null),new cljs.core.Keyword(null,"plotOptions","plotOptions",-1622538002),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dataLabels","dataLabels",63731124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null)], null)], null),new cljs.core.Keyword(null,"credits","credits",785860820),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null),new cljs.core.Keyword(null,"series","series",600710694),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Volume global"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Par messages"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Par auteurs"], null)], null)], null);
testvg.core.chart_did_mount = (function testvg$core$chart_did_mount(){
return $((function (){
return $("#container").highcharts(cljs.core.clj__GT_js.call(null,testvg.core.chart_config));
}));
});
testvg.core.chart_component = (function testvg$core$chart_component(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),testvg.core.chart_page,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),testvg.core.chart_did_mount], null));
});
testvg.core.current_page = (function testvg$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__26007__auto___32189 = (function (params__26008__auto__){
if(cljs.core.map_QMARK_.call(null,params__26008__auto__)){
var map__32187 = params__26008__auto__;
var map__32187__$1 = ((cljs.core.seq_QMARK_.call(null,map__32187))?cljs.core.apply.call(null,cljs.core.hash_map,map__32187):map__32187);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return testvg.core.home_page;},new cljs.core.Symbol("testvg.core","home-page","testvg.core/home-page",-1487661229,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testvg.core","testvg.core",-749217855,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/testvg/core.cljs",16,1,18,18,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testvg.core.home_page)?testvg.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26008__auto__)){
var vec__32188 = params__26008__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return testvg.core.home_page;},new cljs.core.Symbol("testvg.core","home-page","testvg.core/home-page",-1487661229,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testvg.core","testvg.core",-749217855,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/testvg/core.cljs",16,1,18,18,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testvg.core.home_page)?testvg.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__26007__auto___32189);

var action__26007__auto___32192 = (function (params__26008__auto__){
if(cljs.core.map_QMARK_.call(null,params__26008__auto__)){
var map__32190 = params__26008__auto__;
var map__32190__$1 = ((cljs.core.seq_QMARK_.call(null,map__32190))?cljs.core.apply.call(null,cljs.core.hash_map,map__32190):map__32190);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return testvg.core.chart_page;},new cljs.core.Symbol("testvg.core","chart-page","testvg.core/chart-page",-1935430722,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testvg.core","testvg.core",-749217855,null),new cljs.core.Symbol(null,"chart-page","chart-page",1655036992,null),"src/cljs/testvg/core.cljs",17,1,32,32,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testvg.core.chart_page)?testvg.core.chart_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__26008__auto__)){
var vec__32191 = params__26008__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return testvg.core.chart_page;},new cljs.core.Symbol("testvg.core","chart-page","testvg.core/chart-page",-1935430722,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"testvg.core","testvg.core",-749217855,null),new cljs.core.Symbol(null,"chart-page","chart-page",1655036992,null),"src/cljs/testvg/core.cljs",17,1,32,32,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(testvg.core.chart_page)?testvg.core.chart_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/chart",action__26007__auto___32192);

testvg.core.hook_browser_navigation_BANG_ = (function testvg$core$hook_browser_navigation_BANG_(){
var G__32194 = (new goog.History());
goog.events.listen(G__32194,goog.history.EventType.NAVIGATE,((function (G__32194){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__32194))
);

G__32194.setEnabled(true);

return G__32194;
});
testvg.core.mount_root = (function testvg$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testvg.core.current_page], null),document.getElementById("app"));
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testvg.core.chart_component], null),document.getElementById("app"));
testvg.core.init_BANG_ = (function testvg$core$init_BANG_(){
testvg.core.hook_browser_navigation_BANG_.call(null);

return testvg.core.mount_root.call(null);
});
testvg.core.on_js_reload = (function testvg$core$on_js_reload(){
cljs.core.swap_BANG_.call(null,testvg.core.counter,cljs.core.inc);

return console.log(cljs.core.deref.call(null,testvg.core.counter));
});

//# sourceMappingURL=core.js.map