// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30664__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30664 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30665__i = 0, G__30665__a = new Array(arguments.length -  0);
while (G__30665__i < G__30665__a.length) {G__30665__a[G__30665__i] = arguments[G__30665__i + 0]; ++G__30665__i;}
  args = new cljs.core.IndexedSeq(G__30665__a,0);
} 
return G__30664__delegate.call(this,args);};
G__30664.cljs$lang$maxFixedArity = 0;
G__30664.cljs$lang$applyTo = (function (arglist__30666){
var args = cljs.core.seq(arglist__30666);
return G__30664__delegate(args);
});
G__30664.cljs$core$IFn$_invoke$arity$variadic = G__30664__delegate;
return G__30664;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30667){
var map__30669 = p__30667;
var map__30669__$1 = ((cljs.core.seq_QMARK_.call(null,map__30669))?cljs.core.apply.call(null,cljs.core.hash_map,map__30669):map__30669);
var message = cljs.core.get.call(null,map__30669__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30669__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__20567__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20567__auto__)){
return or__20567__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__20555__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__20555__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__20555__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23577__auto___30798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto___30798,ch){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto___30798,ch){
return (function (state_30772){
var state_val_30773 = (state_30772[(1)]);
if((state_val_30773 === (7))){
var inst_30768 = (state_30772[(2)]);
var state_30772__$1 = state_30772;
var statearr_30774_30799 = state_30772__$1;
(statearr_30774_30799[(2)] = inst_30768);

(statearr_30774_30799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (1))){
var state_30772__$1 = state_30772;
var statearr_30775_30800 = state_30772__$1;
(statearr_30775_30800[(2)] = null);

(statearr_30775_30800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (4))){
var inst_30736 = (state_30772[(7)]);
var inst_30736__$1 = (state_30772[(2)]);
var state_30772__$1 = (function (){var statearr_30776 = state_30772;
(statearr_30776[(7)] = inst_30736__$1);

return statearr_30776;
})();
if(cljs.core.truth_(inst_30736__$1)){
var statearr_30777_30801 = state_30772__$1;
(statearr_30777_30801[(1)] = (5));

} else {
var statearr_30778_30802 = state_30772__$1;
(statearr_30778_30802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (13))){
var state_30772__$1 = state_30772;
var statearr_30779_30803 = state_30772__$1;
(statearr_30779_30803[(2)] = null);

(statearr_30779_30803[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (6))){
var state_30772__$1 = state_30772;
var statearr_30780_30804 = state_30772__$1;
(statearr_30780_30804[(2)] = null);

(statearr_30780_30804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (3))){
var inst_30770 = (state_30772[(2)]);
var state_30772__$1 = state_30772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30772__$1,inst_30770);
} else {
if((state_val_30773 === (12))){
var inst_30743 = (state_30772[(8)]);
var inst_30756 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30743);
var inst_30757 = cljs.core.first.call(null,inst_30756);
var inst_30758 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30757);
var inst_30759 = console.warn("Figwheel: Not loading code with warnings - ",inst_30758);
var state_30772__$1 = state_30772;
var statearr_30781_30805 = state_30772__$1;
(statearr_30781_30805[(2)] = inst_30759);

(statearr_30781_30805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (2))){
var state_30772__$1 = state_30772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30772__$1,(4),ch);
} else {
if((state_val_30773 === (11))){
var inst_30752 = (state_30772[(2)]);
var state_30772__$1 = state_30772;
var statearr_30782_30806 = state_30772__$1;
(statearr_30782_30806[(2)] = inst_30752);

(statearr_30782_30806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (9))){
var inst_30742 = (state_30772[(9)]);
var inst_30754 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30742,opts);
var state_30772__$1 = state_30772;
if(cljs.core.truth_(inst_30754)){
var statearr_30783_30807 = state_30772__$1;
(statearr_30783_30807[(1)] = (12));

} else {
var statearr_30784_30808 = state_30772__$1;
(statearr_30784_30808[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (5))){
var inst_30742 = (state_30772[(9)]);
var inst_30736 = (state_30772[(7)]);
var inst_30738 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30739 = (new cljs.core.PersistentArrayMap(null,2,inst_30738,null));
var inst_30740 = (new cljs.core.PersistentHashSet(null,inst_30739,null));
var inst_30741 = figwheel.client.focus_msgs.call(null,inst_30740,inst_30736);
var inst_30742__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30741);
var inst_30743 = cljs.core.first.call(null,inst_30741);
var inst_30744 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30742__$1,opts);
var state_30772__$1 = (function (){var statearr_30785 = state_30772;
(statearr_30785[(9)] = inst_30742__$1);

(statearr_30785[(8)] = inst_30743);

return statearr_30785;
})();
if(cljs.core.truth_(inst_30744)){
var statearr_30786_30809 = state_30772__$1;
(statearr_30786_30809[(1)] = (8));

} else {
var statearr_30787_30810 = state_30772__$1;
(statearr_30787_30810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (14))){
var inst_30762 = (state_30772[(2)]);
var state_30772__$1 = state_30772;
var statearr_30788_30811 = state_30772__$1;
(statearr_30788_30811[(2)] = inst_30762);

(statearr_30788_30811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (10))){
var inst_30764 = (state_30772[(2)]);
var state_30772__$1 = (function (){var statearr_30789 = state_30772;
(statearr_30789[(10)] = inst_30764);

return statearr_30789;
})();
var statearr_30790_30812 = state_30772__$1;
(statearr_30790_30812[(2)] = null);

(statearr_30790_30812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30773 === (8))){
var inst_30743 = (state_30772[(8)]);
var inst_30746 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30747 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30743);
var inst_30748 = cljs.core.async.timeout.call(null,(1000));
var inst_30749 = [inst_30747,inst_30748];
var inst_30750 = (new cljs.core.PersistentVector(null,2,(5),inst_30746,inst_30749,null));
var state_30772__$1 = state_30772;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30772__$1,(11),inst_30750);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23577__auto___30798,ch))
;
return ((function (switch__23515__auto__,c__23577__auto___30798,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23516__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23516__auto____0 = (function (){
var statearr_30794 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30794[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23516__auto__);

(statearr_30794[(1)] = (1));

return statearr_30794;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23516__auto____1 = (function (state_30772){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_30772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e30795){if((e30795 instanceof Object)){
var ex__23519__auto__ = e30795;
var statearr_30796_30813 = state_30772;
(statearr_30796_30813[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30814 = state_30772;
state_30772 = G__30814;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23516__auto__ = function(state_30772){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23516__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23516__auto____1.call(this,state_30772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23516__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23516__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto___30798,ch))
})();
var state__23579__auto__ = (function (){var statearr_30797 = f__23578__auto__.call(null);
(statearr_30797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto___30798);

return statearr_30797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto___30798,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30815_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30815_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_30822 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30822){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_30820 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30821 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30820,_STAR_print_newline_STAR_30821,base_path_30822){
return (function() { 
var G__30823__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30823 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30824__i = 0, G__30824__a = new Array(arguments.length -  0);
while (G__30824__i < G__30824__a.length) {G__30824__a[G__30824__i] = arguments[G__30824__i + 0]; ++G__30824__i;}
  args = new cljs.core.IndexedSeq(G__30824__a,0);
} 
return G__30823__delegate.call(this,args);};
G__30823.cljs$lang$maxFixedArity = 0;
G__30823.cljs$lang$applyTo = (function (arglist__30825){
var args = cljs.core.seq(arglist__30825);
return G__30823__delegate(args);
});
G__30823.cljs$core$IFn$_invoke$arity$variadic = G__30823__delegate;
return G__30823;
})()
;})(_STAR_print_fn_STAR_30820,_STAR_print_newline_STAR_30821,base_path_30822))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30821;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30820;
}}catch (e30819){if((e30819 instanceof Error)){
var e = e30819;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30822], null));
} else {
var e = e30819;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30822))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30826){
var map__30831 = p__30826;
var map__30831__$1 = ((cljs.core.seq_QMARK_.call(null,map__30831))?cljs.core.apply.call(null,cljs.core.hash_map,map__30831):map__30831);
var opts = map__30831__$1;
var build_id = cljs.core.get.call(null,map__30831__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30831,map__30831__$1,opts,build_id){
return (function (p__30832){
var vec__30833 = p__30832;
var map__30834 = cljs.core.nth.call(null,vec__30833,(0),null);
var map__30834__$1 = ((cljs.core.seq_QMARK_.call(null,map__30834))?cljs.core.apply.call(null,cljs.core.hash_map,map__30834):map__30834);
var msg = map__30834__$1;
var msg_name = cljs.core.get.call(null,map__30834__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30833,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__30833,map__30834,map__30834__$1,msg,msg_name,_,map__30831,map__30831__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30833,map__30834,map__30834__$1,msg,msg_name,_,map__30831,map__30831__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30831,map__30831__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30838){
var vec__30839 = p__30838;
var map__30840 = cljs.core.nth.call(null,vec__30839,(0),null);
var map__30840__$1 = ((cljs.core.seq_QMARK_.call(null,map__30840))?cljs.core.apply.call(null,cljs.core.hash_map,map__30840):map__30840);
var msg = map__30840__$1;
var msg_name = cljs.core.get.call(null,map__30840__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30839,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30841){
var map__30849 = p__30841;
var map__30849__$1 = ((cljs.core.seq_QMARK_.call(null,map__30849))?cljs.core.apply.call(null,cljs.core.hash_map,map__30849):map__30849);
var on_compile_warning = cljs.core.get.call(null,map__30849__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30849__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30849,map__30849__$1,on_compile_warning,on_compile_fail){
return (function (p__30850){
var vec__30851 = p__30850;
var map__30852 = cljs.core.nth.call(null,vec__30851,(0),null);
var map__30852__$1 = ((cljs.core.seq_QMARK_.call(null,map__30852))?cljs.core.apply.call(null,cljs.core.hash_map,map__30852):map__30852);
var msg = map__30852__$1;
var msg_name = cljs.core.get.call(null,map__30852__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30851,(1));
var pred__30853 = cljs.core._EQ_;
var expr__30854 = msg_name;
if(cljs.core.truth_(pred__30853.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30854))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30853.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30854))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30849,map__30849__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto__,msg_hist,msg_names,msg){
return (function (state_31055){
var state_val_31056 = (state_31055[(1)]);
if((state_val_31056 === (7))){
var inst_30989 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
var statearr_31057_31098 = state_31055__$1;
(statearr_31057_31098[(2)] = inst_30989);

(statearr_31057_31098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (20))){
var inst_31017 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31055__$1 = state_31055;
if(cljs.core.truth_(inst_31017)){
var statearr_31058_31099 = state_31055__$1;
(statearr_31058_31099[(1)] = (22));

} else {
var statearr_31059_31100 = state_31055__$1;
(statearr_31059_31100[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (27))){
var inst_31029 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31030 = figwheel.client.heads_up.display_warning.call(null,inst_31029);
var state_31055__$1 = state_31055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31055__$1,(30),inst_31030);
} else {
if((state_val_31056 === (1))){
var inst_30977 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31055__$1 = state_31055;
if(cljs.core.truth_(inst_30977)){
var statearr_31060_31101 = state_31055__$1;
(statearr_31060_31101[(1)] = (2));

} else {
var statearr_31061_31102 = state_31055__$1;
(statearr_31061_31102[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (24))){
var inst_31045 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
var statearr_31062_31103 = state_31055__$1;
(statearr_31062_31103[(2)] = inst_31045);

(statearr_31062_31103[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (4))){
var inst_31053 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31055__$1,inst_31053);
} else {
if((state_val_31056 === (15))){
var inst_31005 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31006 = figwheel.client.format_messages.call(null,inst_31005);
var inst_31007 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31008 = figwheel.client.heads_up.display_error.call(null,inst_31006,inst_31007);
var state_31055__$1 = state_31055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31055__$1,(18),inst_31008);
} else {
if((state_val_31056 === (21))){
var inst_31047 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
var statearr_31063_31104 = state_31055__$1;
(statearr_31063_31104[(2)] = inst_31047);

(statearr_31063_31104[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (31))){
var inst_31036 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31055__$1 = state_31055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31055__$1,(34),inst_31036);
} else {
if((state_val_31056 === (32))){
var state_31055__$1 = state_31055;
var statearr_31064_31105 = state_31055__$1;
(statearr_31064_31105[(2)] = null);

(statearr_31064_31105[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (33))){
var inst_31041 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
var statearr_31065_31106 = state_31055__$1;
(statearr_31065_31106[(2)] = inst_31041);

(statearr_31065_31106[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (13))){
var inst_30995 = (state_31055[(2)]);
var inst_30996 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30997 = figwheel.client.format_messages.call(null,inst_30996);
var inst_30998 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30999 = figwheel.client.heads_up.display_error.call(null,inst_30997,inst_30998);
var state_31055__$1 = (function (){var statearr_31066 = state_31055;
(statearr_31066[(7)] = inst_30995);

return statearr_31066;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31055__$1,(14),inst_30999);
} else {
if((state_val_31056 === (22))){
var inst_31019 = figwheel.client.heads_up.clear.call(null);
var state_31055__$1 = state_31055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31055__$1,(25),inst_31019);
} else {
if((state_val_31056 === (29))){
var inst_31043 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
var statearr_31067_31107 = state_31055__$1;
(statearr_31067_31107[(2)] = inst_31043);

(statearr_31067_31107[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (6))){
var inst_30985 = figwheel.client.heads_up.clear.call(null);
var state_31055__$1 = state_31055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31055__$1,(9),inst_30985);
} else {
if((state_val_31056 === (28))){
var inst_31034 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31055__$1 = state_31055;
if(cljs.core.truth_(inst_31034)){
var statearr_31068_31108 = state_31055__$1;
(statearr_31068_31108[(1)] = (31));

} else {
var statearr_31069_31109 = state_31055__$1;
(statearr_31069_31109[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (25))){
var inst_31021 = (state_31055[(2)]);
var inst_31022 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31023 = figwheel.client.heads_up.display_warning.call(null,inst_31022);
var state_31055__$1 = (function (){var statearr_31070 = state_31055;
(statearr_31070[(8)] = inst_31021);

return statearr_31070;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31055__$1,(26),inst_31023);
} else {
if((state_val_31056 === (34))){
var inst_31038 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
var statearr_31071_31110 = state_31055__$1;
(statearr_31071_31110[(2)] = inst_31038);

(statearr_31071_31110[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (17))){
var inst_31049 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
var statearr_31072_31111 = state_31055__$1;
(statearr_31072_31111[(2)] = inst_31049);

(statearr_31072_31111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (3))){
var inst_30991 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31055__$1 = state_31055;
if(cljs.core.truth_(inst_30991)){
var statearr_31073_31112 = state_31055__$1;
(statearr_31073_31112[(1)] = (10));

} else {
var statearr_31074_31113 = state_31055__$1;
(statearr_31074_31113[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (12))){
var inst_31051 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
var statearr_31075_31114 = state_31055__$1;
(statearr_31075_31114[(2)] = inst_31051);

(statearr_31075_31114[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (2))){
var inst_30979 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31055__$1 = state_31055;
if(cljs.core.truth_(inst_30979)){
var statearr_31076_31115 = state_31055__$1;
(statearr_31076_31115[(1)] = (5));

} else {
var statearr_31077_31116 = state_31055__$1;
(statearr_31077_31116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (23))){
var inst_31027 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31055__$1 = state_31055;
if(cljs.core.truth_(inst_31027)){
var statearr_31078_31117 = state_31055__$1;
(statearr_31078_31117[(1)] = (27));

} else {
var statearr_31079_31118 = state_31055__$1;
(statearr_31079_31118[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (19))){
var inst_31014 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31015 = figwheel.client.heads_up.append_message.call(null,inst_31014);
var state_31055__$1 = state_31055;
var statearr_31080_31119 = state_31055__$1;
(statearr_31080_31119[(2)] = inst_31015);

(statearr_31080_31119[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (11))){
var inst_31003 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31055__$1 = state_31055;
if(cljs.core.truth_(inst_31003)){
var statearr_31081_31120 = state_31055__$1;
(statearr_31081_31120[(1)] = (15));

} else {
var statearr_31082_31121 = state_31055__$1;
(statearr_31082_31121[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (9))){
var inst_30987 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
var statearr_31083_31122 = state_31055__$1;
(statearr_31083_31122[(2)] = inst_30987);

(statearr_31083_31122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (5))){
var inst_30981 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31055__$1 = state_31055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31055__$1,(8),inst_30981);
} else {
if((state_val_31056 === (14))){
var inst_31001 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
var statearr_31084_31123 = state_31055__$1;
(statearr_31084_31123[(2)] = inst_31001);

(statearr_31084_31123[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (26))){
var inst_31025 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
var statearr_31085_31124 = state_31055__$1;
(statearr_31085_31124[(2)] = inst_31025);

(statearr_31085_31124[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (16))){
var inst_31012 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31055__$1 = state_31055;
if(cljs.core.truth_(inst_31012)){
var statearr_31086_31125 = state_31055__$1;
(statearr_31086_31125[(1)] = (19));

} else {
var statearr_31087_31126 = state_31055__$1;
(statearr_31087_31126[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (30))){
var inst_31032 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
var statearr_31088_31127 = state_31055__$1;
(statearr_31088_31127[(2)] = inst_31032);

(statearr_31088_31127[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (10))){
var inst_30993 = figwheel.client.heads_up.clear.call(null);
var state_31055__$1 = state_31055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31055__$1,(13),inst_30993);
} else {
if((state_val_31056 === (18))){
var inst_31010 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
var statearr_31089_31128 = state_31055__$1;
(statearr_31089_31128[(2)] = inst_31010);

(statearr_31089_31128[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31056 === (8))){
var inst_30983 = (state_31055[(2)]);
var state_31055__$1 = state_31055;
var statearr_31090_31129 = state_31055__$1;
(statearr_31090_31129[(2)] = inst_30983);

(statearr_31090_31129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23577__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23515__auto__,c__23577__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23516__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23516__auto____0 = (function (){
var statearr_31094 = [null,null,null,null,null,null,null,null,null];
(statearr_31094[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23516__auto__);

(statearr_31094[(1)] = (1));

return statearr_31094;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23516__auto____1 = (function (state_31055){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_31055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e31095){if((e31095 instanceof Object)){
var ex__23519__auto__ = e31095;
var statearr_31096_31130 = state_31055;
(statearr_31096_31130[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31131 = state_31055;
state_31055 = G__31131;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23516__auto__ = function(state_31055){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23516__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23516__auto____1.call(this,state_31055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23516__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23516__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto__,msg_hist,msg_names,msg))
})();
var state__23579__auto__ = (function (){var statearr_31097 = f__23578__auto__.call(null);
(statearr_31097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto__);

return statearr_31097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto__,msg_hist,msg_names,msg))
);

return c__23577__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23577__auto___31194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto___31194,ch){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto___31194,ch){
return (function (state_31177){
var state_val_31178 = (state_31177[(1)]);
if((state_val_31178 === (1))){
var state_31177__$1 = state_31177;
var statearr_31179_31195 = state_31177__$1;
(statearr_31179_31195[(2)] = null);

(statearr_31179_31195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (2))){
var state_31177__$1 = state_31177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31177__$1,(4),ch);
} else {
if((state_val_31178 === (3))){
var inst_31175 = (state_31177[(2)]);
var state_31177__$1 = state_31177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31177__$1,inst_31175);
} else {
if((state_val_31178 === (4))){
var inst_31165 = (state_31177[(7)]);
var inst_31165__$1 = (state_31177[(2)]);
var state_31177__$1 = (function (){var statearr_31180 = state_31177;
(statearr_31180[(7)] = inst_31165__$1);

return statearr_31180;
})();
if(cljs.core.truth_(inst_31165__$1)){
var statearr_31181_31196 = state_31177__$1;
(statearr_31181_31196[(1)] = (5));

} else {
var statearr_31182_31197 = state_31177__$1;
(statearr_31182_31197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (5))){
var inst_31165 = (state_31177[(7)]);
var inst_31167 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31165);
var state_31177__$1 = state_31177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31177__$1,(8),inst_31167);
} else {
if((state_val_31178 === (6))){
var state_31177__$1 = state_31177;
var statearr_31183_31198 = state_31177__$1;
(statearr_31183_31198[(2)] = null);

(statearr_31183_31198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (7))){
var inst_31173 = (state_31177[(2)]);
var state_31177__$1 = state_31177;
var statearr_31184_31199 = state_31177__$1;
(statearr_31184_31199[(2)] = inst_31173);

(statearr_31184_31199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (8))){
var inst_31169 = (state_31177[(2)]);
var state_31177__$1 = (function (){var statearr_31185 = state_31177;
(statearr_31185[(8)] = inst_31169);

return statearr_31185;
})();
var statearr_31186_31200 = state_31177__$1;
(statearr_31186_31200[(2)] = null);

(statearr_31186_31200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__23577__auto___31194,ch))
;
return ((function (switch__23515__auto__,c__23577__auto___31194,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23516__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23516__auto____0 = (function (){
var statearr_31190 = [null,null,null,null,null,null,null,null,null];
(statearr_31190[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23516__auto__);

(statearr_31190[(1)] = (1));

return statearr_31190;
});
var figwheel$client$heads_up_plugin_$_state_machine__23516__auto____1 = (function (state_31177){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_31177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e31191){if((e31191 instanceof Object)){
var ex__23519__auto__ = e31191;
var statearr_31192_31201 = state_31177;
(statearr_31192_31201[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31202 = state_31177;
state_31177 = G__31202;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23516__auto__ = function(state_31177){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23516__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23516__auto____1.call(this,state_31177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23516__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23516__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto___31194,ch))
})();
var state__23579__auto__ = (function (){var statearr_31193 = f__23578__auto__.call(null);
(statearr_31193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto___31194);

return statearr_31193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto___31194,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto__){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto__){
return (function (state_31223){
var state_val_31224 = (state_31223[(1)]);
if((state_val_31224 === (1))){
var inst_31218 = cljs.core.async.timeout.call(null,(3000));
var state_31223__$1 = state_31223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31223__$1,(2),inst_31218);
} else {
if((state_val_31224 === (2))){
var inst_31220 = (state_31223[(2)]);
var inst_31221 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31223__$1 = (function (){var statearr_31225 = state_31223;
(statearr_31225[(7)] = inst_31220);

return statearr_31225;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31223__$1,inst_31221);
} else {
return null;
}
}
});})(c__23577__auto__))
;
return ((function (switch__23515__auto__,c__23577__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23516__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23516__auto____0 = (function (){
var statearr_31229 = [null,null,null,null,null,null,null,null];
(statearr_31229[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23516__auto__);

(statearr_31229[(1)] = (1));

return statearr_31229;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23516__auto____1 = (function (state_31223){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_31223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e31230){if((e31230 instanceof Object)){
var ex__23519__auto__ = e31230;
var statearr_31231_31233 = state_31223;
(statearr_31231_31233[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31234 = state_31223;
state_31223 = G__31234;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23516__auto__ = function(state_31223){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23516__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23516__auto____1.call(this,state_31223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23516__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23516__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto__))
})();
var state__23579__auto__ = (function (){var statearr_31232 = f__23578__auto__.call(null);
(statearr_31232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto__);

return statearr_31232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto__))
);

return c__23577__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31235){
var map__31241 = p__31235;
var map__31241__$1 = ((cljs.core.seq_QMARK_.call(null,map__31241))?cljs.core.apply.call(null,cljs.core.hash_map,map__31241):map__31241);
var ed = map__31241__$1;
var formatted_exception = cljs.core.get.call(null,map__31241__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31241__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31241__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31242_31246 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31243_31247 = null;
var count__31244_31248 = (0);
var i__31245_31249 = (0);
while(true){
if((i__31245_31249 < count__31244_31248)){
var msg_31250 = cljs.core._nth.call(null,chunk__31243_31247,i__31245_31249);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31250);

var G__31251 = seq__31242_31246;
var G__31252 = chunk__31243_31247;
var G__31253 = count__31244_31248;
var G__31254 = (i__31245_31249 + (1));
seq__31242_31246 = G__31251;
chunk__31243_31247 = G__31252;
count__31244_31248 = G__31253;
i__31245_31249 = G__31254;
continue;
} else {
var temp__4425__auto___31255 = cljs.core.seq.call(null,seq__31242_31246);
if(temp__4425__auto___31255){
var seq__31242_31256__$1 = temp__4425__auto___31255;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31242_31256__$1)){
var c__21352__auto___31257 = cljs.core.chunk_first.call(null,seq__31242_31256__$1);
var G__31258 = cljs.core.chunk_rest.call(null,seq__31242_31256__$1);
var G__31259 = c__21352__auto___31257;
var G__31260 = cljs.core.count.call(null,c__21352__auto___31257);
var G__31261 = (0);
seq__31242_31246 = G__31258;
chunk__31243_31247 = G__31259;
count__31244_31248 = G__31260;
i__31245_31249 = G__31261;
continue;
} else {
var msg_31262 = cljs.core.first.call(null,seq__31242_31256__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31262);

var G__31263 = cljs.core.next.call(null,seq__31242_31256__$1);
var G__31264 = null;
var G__31265 = (0);
var G__31266 = (0);
seq__31242_31246 = G__31263;
chunk__31243_31247 = G__31264;
count__31244_31248 = G__31265;
i__31245_31249 = G__31266;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31267){
var map__31269 = p__31267;
var map__31269__$1 = ((cljs.core.seq_QMARK_.call(null,map__31269))?cljs.core.apply.call(null,cljs.core.hash_map,map__31269):map__31269);
var w = map__31269__$1;
var message = cljs.core.get.call(null,map__31269__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__20555__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__20555__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__20555__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31276 = cljs.core.seq.call(null,plugins);
var chunk__31277 = null;
var count__31278 = (0);
var i__31279 = (0);
while(true){
if((i__31279 < count__31278)){
var vec__31280 = cljs.core._nth.call(null,chunk__31277,i__31279);
var k = cljs.core.nth.call(null,vec__31280,(0),null);
var plugin = cljs.core.nth.call(null,vec__31280,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31282 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31276,chunk__31277,count__31278,i__31279,pl_31282,vec__31280,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31282.call(null,msg_hist);
});})(seq__31276,chunk__31277,count__31278,i__31279,pl_31282,vec__31280,k,plugin))
);
} else {
}

var G__31283 = seq__31276;
var G__31284 = chunk__31277;
var G__31285 = count__31278;
var G__31286 = (i__31279 + (1));
seq__31276 = G__31283;
chunk__31277 = G__31284;
count__31278 = G__31285;
i__31279 = G__31286;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31276);
if(temp__4425__auto__){
var seq__31276__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31276__$1)){
var c__21352__auto__ = cljs.core.chunk_first.call(null,seq__31276__$1);
var G__31287 = cljs.core.chunk_rest.call(null,seq__31276__$1);
var G__31288 = c__21352__auto__;
var G__31289 = cljs.core.count.call(null,c__21352__auto__);
var G__31290 = (0);
seq__31276 = G__31287;
chunk__31277 = G__31288;
count__31278 = G__31289;
i__31279 = G__31290;
continue;
} else {
var vec__31281 = cljs.core.first.call(null,seq__31276__$1);
var k = cljs.core.nth.call(null,vec__31281,(0),null);
var plugin = cljs.core.nth.call(null,vec__31281,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31291 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31276,chunk__31277,count__31278,i__31279,pl_31291,vec__31281,k,plugin,seq__31276__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31291.call(null,msg_hist);
});})(seq__31276,chunk__31277,count__31278,i__31279,pl_31291,vec__31281,k,plugin,seq__31276__$1,temp__4425__auto__))
);
} else {
}

var G__31292 = cljs.core.next.call(null,seq__31276__$1);
var G__31293 = null;
var G__31294 = (0);
var G__31295 = (0);
seq__31276 = G__31292;
chunk__31277 = G__31293;
count__31278 = G__31294;
i__31279 = G__31295;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__31297 = arguments.length;
switch (G__31297) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__21607__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21607__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31300){
var map__31301 = p__31300;
var map__31301__$1 = ((cljs.core.seq_QMARK_.call(null,map__31301))?cljs.core.apply.call(null,cljs.core.hash_map,map__31301):map__31301);
var opts = map__31301__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31299){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31299));
});

//# sourceMappingURL=client.js.map