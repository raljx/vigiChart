// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__31737_SHARP_,p2__31738_SHARP_){
var and__20555__auto__ = p1__31737_SHARP_;
if(cljs.core.truth_(and__20555__auto__)){
return p2__31738_SHARP_;
} else {
return and__20555__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__20567__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__20567__auto__){
return or__20567__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__20567__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__20567__auto__){
return or__20567__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__20567__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__20567__auto__)){
return or__20567__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__21462__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21463__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21464__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21465__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21466__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21466__auto__,method_table__21462__auto__,prefer_table__21463__auto__,method_cache__21464__auto__,cached_hierarchy__21465__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__31739){
var map__31740 = p__31739;
var map__31740__$1 = ((cljs.core.seq_QMARK_.call(null,map__31740))?cljs.core.apply.call(null,cljs.core.hash_map,map__31740):map__31740);
var file = cljs.core.get.call(null,map__31740__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__31741){
var map__31742 = p__31741;
var map__31742__$1 = ((cljs.core.seq_QMARK_.call(null,map__31742))?cljs.core.apply.call(null,cljs.core.hash_map,map__31742):map__31742);
var namespace = cljs.core.get.call(null,map__31742__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__21462__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21463__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21464__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21465__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21466__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21466__auto__,method_table__21462__auto__,prefer_table__21463__auto__,method_cache__21464__auto__,cached_hierarchy__21465__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e31743){if((e31743 instanceof Error)){
var e = e31743;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31743;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__31745 = arguments.length;
switch (G__31745) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31747,callback){
var map__31749 = p__31747;
var map__31749__$1 = ((cljs.core.seq_QMARK_.call(null,map__31749))?cljs.core.apply.call(null,cljs.core.hash_map,map__31749):map__31749);
var file_msg = map__31749__$1;
var request_url = cljs.core.get.call(null,map__31749__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31749,map__31749__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31749,map__31749__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31750){
var map__31752 = p__31750;
var map__31752__$1 = ((cljs.core.seq_QMARK_.call(null,map__31752))?cljs.core.apply.call(null,cljs.core.hash_map,map__31752):map__31752);
var file_msg = map__31752__$1;
var namespace = cljs.core.get.call(null,map__31752__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__31752__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__20567__auto__ = meta_data;
if(cljs.core.truth_(or__20567__auto__)){
return or__20567__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__20555__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__20555__auto__){
var or__20567__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__20567__auto__)){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__20567__auto____$1)){
return or__20567__auto____$1;
} else {
var and__20555__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__20555__auto____$1){
var or__20567__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__20567__auto____$2){
return or__20567__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__20555__auto____$1;
}
}
}
} else {
return and__20555__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31753,callback){
var map__31755 = p__31753;
var map__31755__$1 = ((cljs.core.seq_QMARK_.call(null,map__31755))?cljs.core.apply.call(null,cljs.core.hash_map,map__31755):map__31755);
var file_msg = map__31755__$1;
var request_url = cljs.core.get.call(null,map__31755__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31755__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23577__auto___31842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto___31842,out){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto___31842,out){
return (function (state_31824){
var state_val_31825 = (state_31824[(1)]);
if((state_val_31825 === (1))){
var inst_31802 = cljs.core.nth.call(null,files,(0),null);
var inst_31803 = cljs.core.nthnext.call(null,files,(1));
var inst_31804 = files;
var state_31824__$1 = (function (){var statearr_31826 = state_31824;
(statearr_31826[(7)] = inst_31802);

(statearr_31826[(8)] = inst_31803);

(statearr_31826[(9)] = inst_31804);

return statearr_31826;
})();
var statearr_31827_31843 = state_31824__$1;
(statearr_31827_31843[(2)] = null);

(statearr_31827_31843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31825 === (2))){
var inst_31807 = (state_31824[(10)]);
var inst_31804 = (state_31824[(9)]);
var inst_31807__$1 = cljs.core.nth.call(null,inst_31804,(0),null);
var inst_31808 = cljs.core.nthnext.call(null,inst_31804,(1));
var inst_31809 = (inst_31807__$1 == null);
var inst_31810 = cljs.core.not.call(null,inst_31809);
var state_31824__$1 = (function (){var statearr_31828 = state_31824;
(statearr_31828[(10)] = inst_31807__$1);

(statearr_31828[(11)] = inst_31808);

return statearr_31828;
})();
if(inst_31810){
var statearr_31829_31844 = state_31824__$1;
(statearr_31829_31844[(1)] = (4));

} else {
var statearr_31830_31845 = state_31824__$1;
(statearr_31830_31845[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31825 === (3))){
var inst_31822 = (state_31824[(2)]);
var state_31824__$1 = state_31824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31824__$1,inst_31822);
} else {
if((state_val_31825 === (4))){
var inst_31807 = (state_31824[(10)]);
var inst_31812 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31807);
var state_31824__$1 = state_31824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31824__$1,(7),inst_31812);
} else {
if((state_val_31825 === (5))){
var inst_31818 = cljs.core.async.close_BANG_.call(null,out);
var state_31824__$1 = state_31824;
var statearr_31831_31846 = state_31824__$1;
(statearr_31831_31846[(2)] = inst_31818);

(statearr_31831_31846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31825 === (6))){
var inst_31820 = (state_31824[(2)]);
var state_31824__$1 = state_31824;
var statearr_31832_31847 = state_31824__$1;
(statearr_31832_31847[(2)] = inst_31820);

(statearr_31832_31847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31825 === (7))){
var inst_31808 = (state_31824[(11)]);
var inst_31814 = (state_31824[(2)]);
var inst_31815 = cljs.core.async.put_BANG_.call(null,out,inst_31814);
var inst_31804 = inst_31808;
var state_31824__$1 = (function (){var statearr_31833 = state_31824;
(statearr_31833[(12)] = inst_31815);

(statearr_31833[(9)] = inst_31804);

return statearr_31833;
})();
var statearr_31834_31848 = state_31824__$1;
(statearr_31834_31848[(2)] = null);

(statearr_31834_31848[(1)] = (2));


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
});})(c__23577__auto___31842,out))
;
return ((function (switch__23515__auto__,c__23577__auto___31842,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23516__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23516__auto____0 = (function (){
var statearr_31838 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31838[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23516__auto__);

(statearr_31838[(1)] = (1));

return statearr_31838;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23516__auto____1 = (function (state_31824){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_31824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e31839){if((e31839 instanceof Object)){
var ex__23519__auto__ = e31839;
var statearr_31840_31849 = state_31824;
(statearr_31840_31849[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31850 = state_31824;
state_31824 = G__31850;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23516__auto__ = function(state_31824){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23516__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23516__auto____1.call(this,state_31824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23516__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23516__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto___31842,out))
})();
var state__23579__auto__ = (function (){var statearr_31841 = f__23578__auto__.call(null);
(statearr_31841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto___31842);

return statearr_31841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto___31842,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__31851,p__31852){
var map__31855 = p__31851;
var map__31855__$1 = ((cljs.core.seq_QMARK_.call(null,map__31855))?cljs.core.apply.call(null,cljs.core.hash_map,map__31855):map__31855);
var opts = map__31855__$1;
var url_rewriter = cljs.core.get.call(null,map__31855__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__31856 = p__31852;
var map__31856__$1 = ((cljs.core.seq_QMARK_.call(null,map__31856))?cljs.core.apply.call(null,cljs.core.hash_map,map__31856):map__31856);
var file_msg = map__31856__$1;
var file = cljs.core.get.call(null,map__31856__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31857){
var map__31860 = p__31857;
var map__31860__$1 = ((cljs.core.seq_QMARK_.call(null,map__31860))?cljs.core.apply.call(null,cljs.core.hash_map,map__31860):map__31860);
var eval_body__$1 = cljs.core.get.call(null,map__31860__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31860__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__20555__auto__ = eval_body__$1;
if(cljs.core.truth_(and__20555__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__20555__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e31861){var e = e31861;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31866,p__31867){
var map__32069 = p__31866;
var map__32069__$1 = ((cljs.core.seq_QMARK_.call(null,map__32069))?cljs.core.apply.call(null,cljs.core.hash_map,map__32069):map__32069);
var opts = map__32069__$1;
var before_jsload = cljs.core.get.call(null,map__32069__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32069__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__32069__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__32070 = p__31867;
var map__32070__$1 = ((cljs.core.seq_QMARK_.call(null,map__32070))?cljs.core.apply.call(null,cljs.core.hash_map,map__32070):map__32070);
var msg = map__32070__$1;
var files = cljs.core.get.call(null,map__32070__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__23577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto__,map__32069,map__32069__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32070,map__32070__$1,msg,files){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto__,map__32069,map__32069__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32070,map__32070__$1,msg,files){
return (function (state_32195){
var state_val_32196 = (state_32195[(1)]);
if((state_val_32196 === (7))){
var inst_32082 = (state_32195[(7)]);
var inst_32084 = (state_32195[(8)]);
var inst_32085 = (state_32195[(9)]);
var inst_32083 = (state_32195[(10)]);
var inst_32090 = cljs.core._nth.call(null,inst_32083,inst_32085);
var inst_32091 = figwheel.client.file_reloading.eval_body.call(null,inst_32090);
var inst_32092 = (inst_32085 + (1));
var tmp32197 = inst_32082;
var tmp32198 = inst_32084;
var tmp32199 = inst_32083;
var inst_32082__$1 = tmp32197;
var inst_32083__$1 = tmp32199;
var inst_32084__$1 = tmp32198;
var inst_32085__$1 = inst_32092;
var state_32195__$1 = (function (){var statearr_32200 = state_32195;
(statearr_32200[(7)] = inst_32082__$1);

(statearr_32200[(8)] = inst_32084__$1);

(statearr_32200[(11)] = inst_32091);

(statearr_32200[(9)] = inst_32085__$1);

(statearr_32200[(10)] = inst_32083__$1);

return statearr_32200;
})();
var statearr_32201_32270 = state_32195__$1;
(statearr_32201_32270[(2)] = null);

(statearr_32201_32270[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (20))){
var inst_32134 = (state_32195[(12)]);
var inst_32131 = (state_32195[(13)]);
var inst_32127 = (state_32195[(14)]);
var inst_32132 = (state_32195[(15)]);
var inst_32128 = (state_32195[(16)]);
var inst_32137 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32139 = (function (){var all_files = inst_32127;
var files_SINGLEQUOTE_ = inst_32128;
var res_SINGLEQUOTE_ = inst_32131;
var res = inst_32132;
var files_not_loaded = inst_32134;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_32134,inst_32131,inst_32127,inst_32132,inst_32128,inst_32137,state_val_32196,c__23577__auto__,map__32069,map__32069__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32070,map__32070__$1,msg,files){
return (function (p__32138){
var map__32202 = p__32138;
var map__32202__$1 = ((cljs.core.seq_QMARK_.call(null,map__32202))?cljs.core.apply.call(null,cljs.core.hash_map,map__32202):map__32202);
var namespace = cljs.core.get.call(null,map__32202__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32202__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_32134,inst_32131,inst_32127,inst_32132,inst_32128,inst_32137,state_val_32196,c__23577__auto__,map__32069,map__32069__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32070,map__32070__$1,msg,files))
})();
var inst_32140 = cljs.core.map.call(null,inst_32139,inst_32132);
var inst_32141 = cljs.core.pr_str.call(null,inst_32140);
var inst_32142 = figwheel.client.utils.log.call(null,inst_32141);
var inst_32143 = (function (){var all_files = inst_32127;
var files_SINGLEQUOTE_ = inst_32128;
var res_SINGLEQUOTE_ = inst_32131;
var res = inst_32132;
var files_not_loaded = inst_32134;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_32134,inst_32131,inst_32127,inst_32132,inst_32128,inst_32137,inst_32139,inst_32140,inst_32141,inst_32142,state_val_32196,c__23577__auto__,map__32069,map__32069__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32070,map__32070__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_32134,inst_32131,inst_32127,inst_32132,inst_32128,inst_32137,inst_32139,inst_32140,inst_32141,inst_32142,state_val_32196,c__23577__auto__,map__32069,map__32069__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32070,map__32070__$1,msg,files))
})();
var inst_32144 = setTimeout(inst_32143,(10));
var state_32195__$1 = (function (){var statearr_32203 = state_32195;
(statearr_32203[(17)] = inst_32142);

(statearr_32203[(18)] = inst_32137);

return statearr_32203;
})();
var statearr_32204_32271 = state_32195__$1;
(statearr_32204_32271[(2)] = inst_32144);

(statearr_32204_32271[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (27))){
var inst_32154 = (state_32195[(19)]);
var state_32195__$1 = state_32195;
var statearr_32205_32272 = state_32195__$1;
(statearr_32205_32272[(2)] = inst_32154);

(statearr_32205_32272[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (1))){
var inst_32074 = (state_32195[(20)]);
var inst_32071 = before_jsload.call(null,files);
var inst_32072 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32073 = (function (){return ((function (inst_32074,inst_32071,inst_32072,state_val_32196,c__23577__auto__,map__32069,map__32069__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32070,map__32070__$1,msg,files){
return (function (p1__31862_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31862_SHARP_);
});
;})(inst_32074,inst_32071,inst_32072,state_val_32196,c__23577__auto__,map__32069,map__32069__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32070,map__32070__$1,msg,files))
})();
var inst_32074__$1 = cljs.core.filter.call(null,inst_32073,files);
var inst_32075 = cljs.core.not_empty.call(null,inst_32074__$1);
var state_32195__$1 = (function (){var statearr_32206 = state_32195;
(statearr_32206[(20)] = inst_32074__$1);

(statearr_32206[(21)] = inst_32072);

(statearr_32206[(22)] = inst_32071);

return statearr_32206;
})();
if(cljs.core.truth_(inst_32075)){
var statearr_32207_32273 = state_32195__$1;
(statearr_32207_32273[(1)] = (2));

} else {
var statearr_32208_32274 = state_32195__$1;
(statearr_32208_32274[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (24))){
var state_32195__$1 = state_32195;
var statearr_32209_32275 = state_32195__$1;
(statearr_32209_32275[(2)] = null);

(statearr_32209_32275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (4))){
var inst_32119 = (state_32195[(2)]);
var inst_32120 = (function (){return ((function (inst_32119,state_val_32196,c__23577__auto__,map__32069,map__32069__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32070,map__32070__$1,msg,files){
return (function (p1__31863_SHARP_){
var and__20555__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31863_SHARP_);
if(cljs.core.truth_(and__20555__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31863_SHARP_));
} else {
return and__20555__auto__;
}
});
;})(inst_32119,state_val_32196,c__23577__auto__,map__32069,map__32069__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32070,map__32070__$1,msg,files))
})();
var inst_32121 = cljs.core.filter.call(null,inst_32120,files);
var state_32195__$1 = (function (){var statearr_32210 = state_32195;
(statearr_32210[(23)] = inst_32121);

(statearr_32210[(24)] = inst_32119);

return statearr_32210;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_32211_32276 = state_32195__$1;
(statearr_32211_32276[(1)] = (16));

} else {
var statearr_32212_32277 = state_32195__$1;
(statearr_32212_32277[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (15))){
var inst_32109 = (state_32195[(2)]);
var state_32195__$1 = state_32195;
var statearr_32213_32278 = state_32195__$1;
(statearr_32213_32278[(2)] = inst_32109);

(statearr_32213_32278[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (21))){
var state_32195__$1 = state_32195;
var statearr_32214_32279 = state_32195__$1;
(statearr_32214_32279[(2)] = null);

(statearr_32214_32279[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (31))){
var inst_32162 = (state_32195[(25)]);
var inst_32172 = (state_32195[(2)]);
var inst_32173 = cljs.core.not_empty.call(null,inst_32162);
var state_32195__$1 = (function (){var statearr_32215 = state_32195;
(statearr_32215[(26)] = inst_32172);

return statearr_32215;
})();
if(cljs.core.truth_(inst_32173)){
var statearr_32216_32280 = state_32195__$1;
(statearr_32216_32280[(1)] = (32));

} else {
var statearr_32217_32281 = state_32195__$1;
(statearr_32217_32281[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (32))){
var inst_32162 = (state_32195[(25)]);
var inst_32175 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32162);
var inst_32176 = cljs.core.pr_str.call(null,inst_32175);
var inst_32177 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_32176)].join('');
var inst_32178 = figwheel.client.utils.log.call(null,inst_32177);
var state_32195__$1 = state_32195;
var statearr_32218_32282 = state_32195__$1;
(statearr_32218_32282[(2)] = inst_32178);

(statearr_32218_32282[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (33))){
var state_32195__$1 = state_32195;
var statearr_32219_32283 = state_32195__$1;
(statearr_32219_32283[(2)] = null);

(statearr_32219_32283[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (13))){
var inst_32095 = (state_32195[(27)]);
var inst_32099 = cljs.core.chunk_first.call(null,inst_32095);
var inst_32100 = cljs.core.chunk_rest.call(null,inst_32095);
var inst_32101 = cljs.core.count.call(null,inst_32099);
var inst_32082 = inst_32100;
var inst_32083 = inst_32099;
var inst_32084 = inst_32101;
var inst_32085 = (0);
var state_32195__$1 = (function (){var statearr_32220 = state_32195;
(statearr_32220[(7)] = inst_32082);

(statearr_32220[(8)] = inst_32084);

(statearr_32220[(9)] = inst_32085);

(statearr_32220[(10)] = inst_32083);

return statearr_32220;
})();
var statearr_32221_32284 = state_32195__$1;
(statearr_32221_32284[(2)] = null);

(statearr_32221_32284[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (22))){
var inst_32134 = (state_32195[(12)]);
var inst_32147 = (state_32195[(2)]);
var inst_32148 = cljs.core.not_empty.call(null,inst_32134);
var state_32195__$1 = (function (){var statearr_32222 = state_32195;
(statearr_32222[(28)] = inst_32147);

return statearr_32222;
})();
if(cljs.core.truth_(inst_32148)){
var statearr_32223_32285 = state_32195__$1;
(statearr_32223_32285[(1)] = (23));

} else {
var statearr_32224_32286 = state_32195__$1;
(statearr_32224_32286[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (36))){
var state_32195__$1 = state_32195;
var statearr_32225_32287 = state_32195__$1;
(statearr_32225_32287[(2)] = null);

(statearr_32225_32287[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (29))){
var inst_32161 = (state_32195[(29)]);
var inst_32166 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32161);
var inst_32167 = cljs.core.pr_str.call(null,inst_32166);
var inst_32168 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_32167)].join('');
var inst_32169 = figwheel.client.utils.log.call(null,inst_32168);
var state_32195__$1 = state_32195;
var statearr_32226_32288 = state_32195__$1;
(statearr_32226_32288[(2)] = inst_32169);

(statearr_32226_32288[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (6))){
var inst_32116 = (state_32195[(2)]);
var state_32195__$1 = state_32195;
var statearr_32227_32289 = state_32195__$1;
(statearr_32227_32289[(2)] = inst_32116);

(statearr_32227_32289[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (28))){
var inst_32161 = (state_32195[(29)]);
var inst_32160 = (state_32195[(2)]);
var inst_32161__$1 = cljs.core.get.call(null,inst_32160,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32162 = cljs.core.get.call(null,inst_32160,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_32163 = cljs.core.get.call(null,inst_32160,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32164 = cljs.core.not_empty.call(null,inst_32161__$1);
var state_32195__$1 = (function (){var statearr_32228 = state_32195;
(statearr_32228[(29)] = inst_32161__$1);

(statearr_32228[(25)] = inst_32162);

(statearr_32228[(30)] = inst_32163);

return statearr_32228;
})();
if(cljs.core.truth_(inst_32164)){
var statearr_32229_32290 = state_32195__$1;
(statearr_32229_32290[(1)] = (29));

} else {
var statearr_32230_32291 = state_32195__$1;
(statearr_32230_32291[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (25))){
var inst_32193 = (state_32195[(2)]);
var state_32195__$1 = state_32195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32195__$1,inst_32193);
} else {
if((state_val_32196 === (34))){
var inst_32163 = (state_32195[(30)]);
var inst_32181 = (state_32195[(2)]);
var inst_32182 = cljs.core.not_empty.call(null,inst_32163);
var state_32195__$1 = (function (){var statearr_32231 = state_32195;
(statearr_32231[(31)] = inst_32181);

return statearr_32231;
})();
if(cljs.core.truth_(inst_32182)){
var statearr_32232_32292 = state_32195__$1;
(statearr_32232_32292[(1)] = (35));

} else {
var statearr_32233_32293 = state_32195__$1;
(statearr_32233_32293[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (17))){
var inst_32121 = (state_32195[(23)]);
var state_32195__$1 = state_32195;
var statearr_32234_32294 = state_32195__$1;
(statearr_32234_32294[(2)] = inst_32121);

(statearr_32234_32294[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (3))){
var state_32195__$1 = state_32195;
var statearr_32235_32295 = state_32195__$1;
(statearr_32235_32295[(2)] = null);

(statearr_32235_32295[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (12))){
var inst_32112 = (state_32195[(2)]);
var state_32195__$1 = state_32195;
var statearr_32236_32296 = state_32195__$1;
(statearr_32236_32296[(2)] = inst_32112);

(statearr_32236_32296[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (2))){
var inst_32074 = (state_32195[(20)]);
var inst_32081 = cljs.core.seq.call(null,inst_32074);
var inst_32082 = inst_32081;
var inst_32083 = null;
var inst_32084 = (0);
var inst_32085 = (0);
var state_32195__$1 = (function (){var statearr_32237 = state_32195;
(statearr_32237[(7)] = inst_32082);

(statearr_32237[(8)] = inst_32084);

(statearr_32237[(9)] = inst_32085);

(statearr_32237[(10)] = inst_32083);

return statearr_32237;
})();
var statearr_32238_32297 = state_32195__$1;
(statearr_32238_32297[(2)] = null);

(statearr_32238_32297[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (23))){
var inst_32134 = (state_32195[(12)]);
var inst_32131 = (state_32195[(13)]);
var inst_32127 = (state_32195[(14)]);
var inst_32132 = (state_32195[(15)]);
var inst_32154 = (state_32195[(19)]);
var inst_32128 = (state_32195[(16)]);
var inst_32150 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32153 = (function (){var all_files = inst_32127;
var files_SINGLEQUOTE_ = inst_32128;
var res_SINGLEQUOTE_ = inst_32131;
var res = inst_32132;
var files_not_loaded = inst_32134;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_32134,inst_32131,inst_32127,inst_32132,inst_32154,inst_32128,inst_32150,state_val_32196,c__23577__auto__,map__32069,map__32069__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32070,map__32070__$1,msg,files){
return (function (p__32152){
var map__32239 = p__32152;
var map__32239__$1 = ((cljs.core.seq_QMARK_.call(null,map__32239))?cljs.core.apply.call(null,cljs.core.hash_map,map__32239):map__32239);
var meta_data = cljs.core.get.call(null,map__32239__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_32134,inst_32131,inst_32127,inst_32132,inst_32154,inst_32128,inst_32150,state_val_32196,c__23577__auto__,map__32069,map__32069__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32070,map__32070__$1,msg,files))
})();
var inst_32154__$1 = cljs.core.group_by.call(null,inst_32153,inst_32134);
var inst_32155 = cljs.core.seq_QMARK_.call(null,inst_32154__$1);
var state_32195__$1 = (function (){var statearr_32240 = state_32195;
(statearr_32240[(19)] = inst_32154__$1);

(statearr_32240[(32)] = inst_32150);

return statearr_32240;
})();
if(inst_32155){
var statearr_32241_32298 = state_32195__$1;
(statearr_32241_32298[(1)] = (26));

} else {
var statearr_32242_32299 = state_32195__$1;
(statearr_32242_32299[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (35))){
var inst_32163 = (state_32195[(30)]);
var inst_32184 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32163);
var inst_32185 = cljs.core.pr_str.call(null,inst_32184);
var inst_32186 = [cljs.core.str("not required: "),cljs.core.str(inst_32185)].join('');
var inst_32187 = figwheel.client.utils.log.call(null,inst_32186);
var state_32195__$1 = state_32195;
var statearr_32243_32300 = state_32195__$1;
(statearr_32243_32300[(2)] = inst_32187);

(statearr_32243_32300[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (19))){
var inst_32131 = (state_32195[(13)]);
var inst_32127 = (state_32195[(14)]);
var inst_32132 = (state_32195[(15)]);
var inst_32128 = (state_32195[(16)]);
var inst_32131__$1 = (state_32195[(2)]);
var inst_32132__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32131__$1);
var inst_32133 = (function (){var all_files = inst_32127;
var files_SINGLEQUOTE_ = inst_32128;
var res_SINGLEQUOTE_ = inst_32131__$1;
var res = inst_32132__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_32131,inst_32127,inst_32132,inst_32128,inst_32131__$1,inst_32132__$1,state_val_32196,c__23577__auto__,map__32069,map__32069__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32070,map__32070__$1,msg,files){
return (function (p1__31865_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31865_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_32131,inst_32127,inst_32132,inst_32128,inst_32131__$1,inst_32132__$1,state_val_32196,c__23577__auto__,map__32069,map__32069__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32070,map__32070__$1,msg,files))
})();
var inst_32134 = cljs.core.filter.call(null,inst_32133,inst_32131__$1);
var inst_32135 = cljs.core.not_empty.call(null,inst_32132__$1);
var state_32195__$1 = (function (){var statearr_32244 = state_32195;
(statearr_32244[(12)] = inst_32134);

(statearr_32244[(13)] = inst_32131__$1);

(statearr_32244[(15)] = inst_32132__$1);

return statearr_32244;
})();
if(cljs.core.truth_(inst_32135)){
var statearr_32245_32301 = state_32195__$1;
(statearr_32245_32301[(1)] = (20));

} else {
var statearr_32246_32302 = state_32195__$1;
(statearr_32246_32302[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (11))){
var state_32195__$1 = state_32195;
var statearr_32247_32303 = state_32195__$1;
(statearr_32247_32303[(2)] = null);

(statearr_32247_32303[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (9))){
var inst_32114 = (state_32195[(2)]);
var state_32195__$1 = state_32195;
var statearr_32248_32304 = state_32195__$1;
(statearr_32248_32304[(2)] = inst_32114);

(statearr_32248_32304[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (5))){
var inst_32084 = (state_32195[(8)]);
var inst_32085 = (state_32195[(9)]);
var inst_32087 = (inst_32085 < inst_32084);
var inst_32088 = inst_32087;
var state_32195__$1 = state_32195;
if(cljs.core.truth_(inst_32088)){
var statearr_32249_32305 = state_32195__$1;
(statearr_32249_32305[(1)] = (7));

} else {
var statearr_32250_32306 = state_32195__$1;
(statearr_32250_32306[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (14))){
var inst_32095 = (state_32195[(27)]);
var inst_32104 = cljs.core.first.call(null,inst_32095);
var inst_32105 = figwheel.client.file_reloading.eval_body.call(null,inst_32104);
var inst_32106 = cljs.core.next.call(null,inst_32095);
var inst_32082 = inst_32106;
var inst_32083 = null;
var inst_32084 = (0);
var inst_32085 = (0);
var state_32195__$1 = (function (){var statearr_32251 = state_32195;
(statearr_32251[(7)] = inst_32082);

(statearr_32251[(8)] = inst_32084);

(statearr_32251[(33)] = inst_32105);

(statearr_32251[(9)] = inst_32085);

(statearr_32251[(10)] = inst_32083);

return statearr_32251;
})();
var statearr_32252_32307 = state_32195__$1;
(statearr_32252_32307[(2)] = null);

(statearr_32252_32307[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (26))){
var inst_32154 = (state_32195[(19)]);
var inst_32157 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32154);
var state_32195__$1 = state_32195;
var statearr_32253_32308 = state_32195__$1;
(statearr_32253_32308[(2)] = inst_32157);

(statearr_32253_32308[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (16))){
var inst_32121 = (state_32195[(23)]);
var inst_32123 = (function (){var all_files = inst_32121;
return ((function (all_files,inst_32121,state_val_32196,c__23577__auto__,map__32069,map__32069__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32070,map__32070__$1,msg,files){
return (function (p1__31864_SHARP_){
return cljs.core.update_in.call(null,p1__31864_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_32121,state_val_32196,c__23577__auto__,map__32069,map__32069__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32070,map__32070__$1,msg,files))
})();
var inst_32124 = cljs.core.map.call(null,inst_32123,inst_32121);
var state_32195__$1 = state_32195;
var statearr_32254_32309 = state_32195__$1;
(statearr_32254_32309[(2)] = inst_32124);

(statearr_32254_32309[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (30))){
var state_32195__$1 = state_32195;
var statearr_32255_32310 = state_32195__$1;
(statearr_32255_32310[(2)] = null);

(statearr_32255_32310[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (10))){
var inst_32095 = (state_32195[(27)]);
var inst_32097 = cljs.core.chunked_seq_QMARK_.call(null,inst_32095);
var state_32195__$1 = state_32195;
if(inst_32097){
var statearr_32256_32311 = state_32195__$1;
(statearr_32256_32311[(1)] = (13));

} else {
var statearr_32257_32312 = state_32195__$1;
(statearr_32257_32312[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (18))){
var inst_32127 = (state_32195[(14)]);
var inst_32128 = (state_32195[(16)]);
var inst_32127__$1 = (state_32195[(2)]);
var inst_32128__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_32127__$1);
var inst_32129 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32128__$1);
var state_32195__$1 = (function (){var statearr_32258 = state_32195;
(statearr_32258[(14)] = inst_32127__$1);

(statearr_32258[(16)] = inst_32128__$1);

return statearr_32258;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32195__$1,(19),inst_32129);
} else {
if((state_val_32196 === (37))){
var inst_32190 = (state_32195[(2)]);
var state_32195__$1 = state_32195;
var statearr_32259_32313 = state_32195__$1;
(statearr_32259_32313[(2)] = inst_32190);

(statearr_32259_32313[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32196 === (8))){
var inst_32082 = (state_32195[(7)]);
var inst_32095 = (state_32195[(27)]);
var inst_32095__$1 = cljs.core.seq.call(null,inst_32082);
var state_32195__$1 = (function (){var statearr_32260 = state_32195;
(statearr_32260[(27)] = inst_32095__$1);

return statearr_32260;
})();
if(inst_32095__$1){
var statearr_32261_32314 = state_32195__$1;
(statearr_32261_32314[(1)] = (10));

} else {
var statearr_32262_32315 = state_32195__$1;
(statearr_32262_32315[(1)] = (11));

}

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
}
}
}
});})(c__23577__auto__,map__32069,map__32069__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32070,map__32070__$1,msg,files))
;
return ((function (switch__23515__auto__,c__23577__auto__,map__32069,map__32069__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32070,map__32070__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23516__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23516__auto____0 = (function (){
var statearr_32266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32266[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23516__auto__);

(statearr_32266[(1)] = (1));

return statearr_32266;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23516__auto____1 = (function (state_32195){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_32195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e32267){if((e32267 instanceof Object)){
var ex__23519__auto__ = e32267;
var statearr_32268_32316 = state_32195;
(statearr_32268_32316[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32317 = state_32195;
state_32195 = G__32317;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23516__auto__ = function(state_32195){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23516__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23516__auto____1.call(this,state_32195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23516__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23516__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto__,map__32069,map__32069__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32070,map__32070__$1,msg,files))
})();
var state__23579__auto__ = (function (){var statearr_32269 = f__23578__auto__.call(null);
(statearr_32269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto__);

return statearr_32269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto__,map__32069,map__32069__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__32070,map__32070__$1,msg,files))
);

return c__23577__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32320,link){
var map__32322 = p__32320;
var map__32322__$1 = ((cljs.core.seq_QMARK_.call(null,map__32322))?cljs.core.apply.call(null,cljs.core.hash_map,map__32322):map__32322);
var file = cljs.core.get.call(null,map__32322__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__32322,map__32322__$1,file){
return (function (p1__32318_SHARP_,p2__32319_SHARP_){
if(cljs.core._EQ_.call(null,p1__32318_SHARP_,p2__32319_SHARP_)){
return p1__32318_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__32322,map__32322__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32326){
var map__32327 = p__32326;
var map__32327__$1 = ((cljs.core.seq_QMARK_.call(null,map__32327))?cljs.core.apply.call(null,cljs.core.hash_map,map__32327):map__32327);
var match_length = cljs.core.get.call(null,map__32327__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32327__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32323_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32323_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__32329 = arguments.length;
switch (G__32329) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__32331){
var map__32333 = p__32331;
var map__32333__$1 = ((cljs.core.seq_QMARK_.call(null,map__32333))?cljs.core.apply.call(null,cljs.core.hash_map,map__32333):map__32333);
var f_data = map__32333__$1;
var file = cljs.core.get.call(null,map__32333__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__32333__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__20567__auto__ = request_url;
if(cljs.core.truth_(or__20567__auto__)){
return or__20567__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32334,files_msg){
var map__32356 = p__32334;
var map__32356__$1 = ((cljs.core.seq_QMARK_.call(null,map__32356))?cljs.core.apply.call(null,cljs.core.hash_map,map__32356):map__32356);
var opts = map__32356__$1;
var on_cssload = cljs.core.get.call(null,map__32356__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__32357_32377 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__32358_32378 = null;
var count__32359_32379 = (0);
var i__32360_32380 = (0);
while(true){
if((i__32360_32380 < count__32359_32379)){
var f_32381 = cljs.core._nth.call(null,chunk__32358_32378,i__32360_32380);
figwheel.client.file_reloading.reload_css_file.call(null,f_32381);

var G__32382 = seq__32357_32377;
var G__32383 = chunk__32358_32378;
var G__32384 = count__32359_32379;
var G__32385 = (i__32360_32380 + (1));
seq__32357_32377 = G__32382;
chunk__32358_32378 = G__32383;
count__32359_32379 = G__32384;
i__32360_32380 = G__32385;
continue;
} else {
var temp__4425__auto___32386 = cljs.core.seq.call(null,seq__32357_32377);
if(temp__4425__auto___32386){
var seq__32357_32387__$1 = temp__4425__auto___32386;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32357_32387__$1)){
var c__21352__auto___32388 = cljs.core.chunk_first.call(null,seq__32357_32387__$1);
var G__32389 = cljs.core.chunk_rest.call(null,seq__32357_32387__$1);
var G__32390 = c__21352__auto___32388;
var G__32391 = cljs.core.count.call(null,c__21352__auto___32388);
var G__32392 = (0);
seq__32357_32377 = G__32389;
chunk__32358_32378 = G__32390;
count__32359_32379 = G__32391;
i__32360_32380 = G__32392;
continue;
} else {
var f_32393 = cljs.core.first.call(null,seq__32357_32387__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_32393);

var G__32394 = cljs.core.next.call(null,seq__32357_32387__$1);
var G__32395 = null;
var G__32396 = (0);
var G__32397 = (0);
seq__32357_32377 = G__32394;
chunk__32358_32378 = G__32395;
count__32359_32379 = G__32396;
i__32360_32380 = G__32397;
continue;
}
} else {
}
}
break;
}

var c__23577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto__,map__32356,map__32356__$1,opts,on_cssload){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto__,map__32356,map__32356__$1,opts,on_cssload){
return (function (state_32367){
var state_val_32368 = (state_32367[(1)]);
if((state_val_32368 === (1))){
var inst_32361 = cljs.core.async.timeout.call(null,(100));
var state_32367__$1 = state_32367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32367__$1,(2),inst_32361);
} else {
if((state_val_32368 === (2))){
var inst_32363 = (state_32367[(2)]);
var inst_32364 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_32365 = on_cssload.call(null,inst_32364);
var state_32367__$1 = (function (){var statearr_32369 = state_32367;
(statearr_32369[(7)] = inst_32363);

return statearr_32369;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32367__$1,inst_32365);
} else {
return null;
}
}
});})(c__23577__auto__,map__32356,map__32356__$1,opts,on_cssload))
;
return ((function (switch__23515__auto__,c__23577__auto__,map__32356,map__32356__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23516__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23516__auto____0 = (function (){
var statearr_32373 = [null,null,null,null,null,null,null,null];
(statearr_32373[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__23516__auto__);

(statearr_32373[(1)] = (1));

return statearr_32373;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23516__auto____1 = (function (state_32367){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_32367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e32374){if((e32374 instanceof Object)){
var ex__23519__auto__ = e32374;
var statearr_32375_32398 = state_32367;
(statearr_32375_32398[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32399 = state_32367;
state_32367 = G__32399;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__23516__auto__ = function(state_32367){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23516__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23516__auto____1.call(this,state_32367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__23516__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__23516__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto__,map__32356,map__32356__$1,opts,on_cssload))
})();
var state__23579__auto__ = (function (){var statearr_32376 = f__23578__auto__.call(null);
(statearr_32376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto__);

return statearr_32376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto__,map__32356,map__32356__$1,opts,on_cssload))
);

return c__23577__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map