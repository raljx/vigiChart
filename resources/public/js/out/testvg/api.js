// Compiled by ClojureScript 0.0-3308 {}
goog.provide('testvg.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
testvg.api.base_url = "http://api.vigiglobe.com";
testvg.api.project_id = "vgteam-TV_Shows";
testvg.api.statistics_all = [cljs.core.str(testvg.api.base_url),cljs.core.str("/api/statistics/v1/volume?project_id="),cljs.core.str(testvg.api.project_id)].join('');
testvg.api.statistics_authors = [cljs.core.str(testvg.api.base_url),cljs.core.str("/api/statistics/v1/volume?count=authors&project_id="),cljs.core.str(testvg.api.project_id)].join('');
testvg.api.statistics_messages = [cljs.core.str(testvg.api.base_url),cljs.core.str("/api/statistics/v1/volume?count=messages&project_id="),cljs.core.str(testvg.api.project_id)].join('');
testvg.api.api_result = (function testvg$api$api_result(url,extract_data_fn){
var ch = cljs.core.async.chan.call(null);
goog.net.XhrIo.send(url,((function (ch){
return (function (event){
var res_text = event.target.getResponseText();
var res = extract_data_fn.call(null,cljs.core.js__GT_clj.call(null,JSON.parse(res_text),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var c__23577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto__,res_text,res,ch){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto__,res_text,res,ch){
return (function (state_31057){
var state_val_31058 = (state_31057[(1)]);
if((state_val_31058 === (1))){
var state_31057__$1 = state_31057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31057__$1,(2),ch,res);
} else {
if((state_val_31058 === (2))){
var inst_31054 = (state_31057[(2)]);
var inst_31055 = cljs.core.async.close_BANG_.call(null,ch);
var state_31057__$1 = (function (){var statearr_31059 = state_31057;
(statearr_31059[(7)] = inst_31054);

return statearr_31059;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31057__$1,inst_31055);
} else {
return null;
}
}
});})(c__23577__auto__,res_text,res,ch))
;
return ((function (switch__23515__auto__,c__23577__auto__,res_text,res,ch){
return (function() {
var testvg$api$api_result_$_state_machine__23516__auto__ = null;
var testvg$api$api_result_$_state_machine__23516__auto____0 = (function (){
var statearr_31063 = [null,null,null,null,null,null,null,null];
(statearr_31063[(0)] = testvg$api$api_result_$_state_machine__23516__auto__);

(statearr_31063[(1)] = (1));

return statearr_31063;
});
var testvg$api$api_result_$_state_machine__23516__auto____1 = (function (state_31057){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_31057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e31064){if((e31064 instanceof Object)){
var ex__23519__auto__ = e31064;
var statearr_31065_31067 = state_31057;
(statearr_31065_31067[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31068 = state_31057;
state_31057 = G__31068;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
testvg$api$api_result_$_state_machine__23516__auto__ = function(state_31057){
switch(arguments.length){
case 0:
return testvg$api$api_result_$_state_machine__23516__auto____0.call(this);
case 1:
return testvg$api$api_result_$_state_machine__23516__auto____1.call(this,state_31057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
testvg$api$api_result_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = testvg$api$api_result_$_state_machine__23516__auto____0;
testvg$api$api_result_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = testvg$api$api_result_$_state_machine__23516__auto____1;
return testvg$api$api_result_$_state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto__,res_text,res,ch))
})();
var state__23579__auto__ = (function (){var statearr_31066 = f__23578__auto__.call(null);
(statearr_31066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto__);

return statearr_31066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto__,res_text,res,ch))
);

return c__23577__auto__;
});})(ch))
);

return ch;
});
testvg.api.get_statistics_authors = (function testvg$api$get_statistics_authors(){
return testvg.api.api_result.call(null,testvg.api.statistics_authors,(function (response){
var data = cljs.core.first.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(response));
console.log("authors",new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(response));

return data;
}));
});
testvg.api.get_statistics_messages = (function testvg$api$get_statistics_messages(){
return testvg.api.api_result.call(null,testvg.api.statistics_messages,(function (response){
var data = cljs.core.first.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(response));
console.log("messages",new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(response));

return data;
}));
});

//# sourceMappingURL=api.js.map