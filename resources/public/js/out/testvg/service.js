// Compiled by ClojureScript 0.0-3308 {}
goog.provide('testvg.service');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
testvg.service.base_url = "http://api.vigiglobe.com";
testvg.service.project_id = "vgteam-TV_Shows";
testvg.service.statistics_all = [cljs.core.str(testvg.service.base_url),cljs.core.str("/api/statistics/v1/volume?project_id="),cljs.core.str(testvg.service.project_id)].join('');
testvg.service.statistics_authors = [cljs.core.str(testvg.service.base_url),cljs.core.str("/api/statistics/v1/volume?count=authors&project_id="),cljs.core.str(testvg.service.project_id)].join('');
testvg.service.statistics_messages = [cljs.core.str(testvg.service.base_url),cljs.core.str("/api/statistics/v1/volume?count=messages&project_id="),cljs.core.str(testvg.service.project_id)].join('');
testvg.service.api_result = (function testvg$service$api_result(url,extract_data_fn){
var ch = cljs.core.async.chan.call(null);
goog.net.XhrIo.send(url,((function (ch){
return (function (event){
var res_text = event.target.getResponseText();
var res = extract_data_fn.call(null,cljs.core.js__GT_clj.call(null,JSON.parse(res_text),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var c__23577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto__,res_text,res,ch){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto__,res_text,res,ch){
return (function (state_29231){
var state_val_29232 = (state_29231[(1)]);
if((state_val_29232 === (1))){
var state_29231__$1 = state_29231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29231__$1,(2),ch,res);
} else {
if((state_val_29232 === (2))){
var inst_29228 = (state_29231[(2)]);
var inst_29229 = cljs.core.async.close_BANG_.call(null,ch);
var state_29231__$1 = (function (){var statearr_29233 = state_29231;
(statearr_29233[(7)] = inst_29228);

return statearr_29233;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29231__$1,inst_29229);
} else {
return null;
}
}
});})(c__23577__auto__,res_text,res,ch))
;
return ((function (switch__23515__auto__,c__23577__auto__,res_text,res,ch){
return (function() {
var testvg$service$api_result_$_state_machine__23516__auto__ = null;
var testvg$service$api_result_$_state_machine__23516__auto____0 = (function (){
var statearr_29237 = [null,null,null,null,null,null,null,null];
(statearr_29237[(0)] = testvg$service$api_result_$_state_machine__23516__auto__);

(statearr_29237[(1)] = (1));

return statearr_29237;
});
var testvg$service$api_result_$_state_machine__23516__auto____1 = (function (state_29231){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_29231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e29238){if((e29238 instanceof Object)){
var ex__23519__auto__ = e29238;
var statearr_29239_29241 = state_29231;
(statearr_29239_29241[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29242 = state_29231;
state_29231 = G__29242;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
testvg$service$api_result_$_state_machine__23516__auto__ = function(state_29231){
switch(arguments.length){
case 0:
return testvg$service$api_result_$_state_machine__23516__auto____0.call(this);
case 1:
return testvg$service$api_result_$_state_machine__23516__auto____1.call(this,state_29231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
testvg$service$api_result_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = testvg$service$api_result_$_state_machine__23516__auto____0;
testvg$service$api_result_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = testvg$service$api_result_$_state_machine__23516__auto____1;
return testvg$service$api_result_$_state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto__,res_text,res,ch))
})();
var state__23579__auto__ = (function (){var statearr_29240 = f__23578__auto__.call(null);
(statearr_29240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto__);

return statearr_29240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto__,res_text,res,ch))
);

return c__23577__auto__;
});})(ch))
);

return ch;
});
testvg.service.get_statistics_volume = (function testvg$service$get_statistics_volume(){
return testvg.service.api_result.call(null,testvg.service.statistics_all,(function (response){
var data = cljs.core.first.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(response));
console.log("global",new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(response));

return data;
}));
});
testvg.service.get_statistics_authors = (function testvg$service$get_statistics_authors(){
return testvg.service.api_result.call(null,testvg.service.statistics_authors,(function (response){
var data = cljs.core.first.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(response));
console.log("authors",new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(response));

return data;
}));
});
testvg.service.get_statistics_messages = (function testvg$service$get_statistics_messages(){
return testvg.service.api_result.call(null,testvg.service.statistics_messages,(function (response){
var data = cljs.core.first.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(response));
console.log("messages",new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(response));

return data;
}));
});

//# sourceMappingURL=service.js.map