// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__21607__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21607__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__31428_31436 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__31429_31437 = null;
var count__31430_31438 = (0);
var i__31431_31439 = (0);
while(true){
if((i__31431_31439 < count__31430_31438)){
var k_31440 = cljs.core._nth.call(null,chunk__31429_31437,i__31431_31439);
e.setAttribute(cljs.core.name.call(null,k_31440),cljs.core.get.call(null,attrs,k_31440));

var G__31441 = seq__31428_31436;
var G__31442 = chunk__31429_31437;
var G__31443 = count__31430_31438;
var G__31444 = (i__31431_31439 + (1));
seq__31428_31436 = G__31441;
chunk__31429_31437 = G__31442;
count__31430_31438 = G__31443;
i__31431_31439 = G__31444;
continue;
} else {
var temp__4425__auto___31445 = cljs.core.seq.call(null,seq__31428_31436);
if(temp__4425__auto___31445){
var seq__31428_31446__$1 = temp__4425__auto___31445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31428_31446__$1)){
var c__21352__auto___31447 = cljs.core.chunk_first.call(null,seq__31428_31446__$1);
var G__31448 = cljs.core.chunk_rest.call(null,seq__31428_31446__$1);
var G__31449 = c__21352__auto___31447;
var G__31450 = cljs.core.count.call(null,c__21352__auto___31447);
var G__31451 = (0);
seq__31428_31436 = G__31448;
chunk__31429_31437 = G__31449;
count__31430_31438 = G__31450;
i__31431_31439 = G__31451;
continue;
} else {
var k_31452 = cljs.core.first.call(null,seq__31428_31446__$1);
e.setAttribute(cljs.core.name.call(null,k_31452),cljs.core.get.call(null,attrs,k_31452));

var G__31453 = cljs.core.next.call(null,seq__31428_31446__$1);
var G__31454 = null;
var G__31455 = (0);
var G__31456 = (0);
seq__31428_31436 = G__31453;
chunk__31429_31437 = G__31454;
count__31430_31438 = G__31455;
i__31431_31439 = G__31456;
continue;
}
} else {
}
}
break;
}

var seq__31432_31457 = cljs.core.seq.call(null,children);
var chunk__31433_31458 = null;
var count__31434_31459 = (0);
var i__31435_31460 = (0);
while(true){
if((i__31435_31460 < count__31434_31459)){
var ch_31461 = cljs.core._nth.call(null,chunk__31433_31458,i__31435_31460);
e.appendChild(ch_31461);

var G__31462 = seq__31432_31457;
var G__31463 = chunk__31433_31458;
var G__31464 = count__31434_31459;
var G__31465 = (i__31435_31460 + (1));
seq__31432_31457 = G__31462;
chunk__31433_31458 = G__31463;
count__31434_31459 = G__31464;
i__31435_31460 = G__31465;
continue;
} else {
var temp__4425__auto___31466 = cljs.core.seq.call(null,seq__31432_31457);
if(temp__4425__auto___31466){
var seq__31432_31467__$1 = temp__4425__auto___31466;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31432_31467__$1)){
var c__21352__auto___31468 = cljs.core.chunk_first.call(null,seq__31432_31467__$1);
var G__31469 = cljs.core.chunk_rest.call(null,seq__31432_31467__$1);
var G__31470 = c__21352__auto___31468;
var G__31471 = cljs.core.count.call(null,c__21352__auto___31468);
var G__31472 = (0);
seq__31432_31457 = G__31469;
chunk__31433_31458 = G__31470;
count__31434_31459 = G__31471;
i__31435_31460 = G__31472;
continue;
} else {
var ch_31473 = cljs.core.first.call(null,seq__31432_31467__$1);
e.appendChild(ch_31473);

var G__31474 = cljs.core.next.call(null,seq__31432_31467__$1);
var G__31475 = null;
var G__31476 = (0);
var G__31477 = (0);
seq__31432_31457 = G__31474;
chunk__31433_31458 = G__31475;
count__31434_31459 = G__31476;
i__31435_31460 = G__31477;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq31425){
var G__31426 = cljs.core.first.call(null,seq31425);
var seq31425__$1 = cljs.core.next.call(null,seq31425);
var G__31427 = cljs.core.first.call(null,seq31425__$1);
var seq31425__$2 = cljs.core.next.call(null,seq31425__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__31426,G__31427,seq31425__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__21462__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21463__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21464__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21465__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21466__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__21462__auto__,prefer_table__21463__auto__,method_cache__21464__auto__,cached_hierarchy__21465__auto__,hierarchy__21466__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__21462__auto__,prefer_table__21463__auto__,method_cache__21464__auto__,cached_hierarchy__21465__auto__,hierarchy__21466__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21466__auto__,method_table__21462__auto__,prefer_table__21463__auto__,method_cache__21464__auto__,cached_hierarchy__21465__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_31478 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_31478.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_31478.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_31478.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_31478);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__31479,st_map){
var map__31483 = p__31479;
var map__31483__$1 = ((cljs.core.seq_QMARK_.call(null,map__31483))?cljs.core.apply.call(null,cljs.core.hash_map,map__31483):map__31483);
var container_el = cljs.core.get.call(null,map__31483__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__31483,map__31483__$1,container_el){
return (function (p__31484){
var vec__31485 = p__31484;
var k = cljs.core.nth.call(null,vec__31485,(0),null);
var v = cljs.core.nth.call(null,vec__31485,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__31483,map__31483__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__31486,dom_str){
var map__31488 = p__31486;
var map__31488__$1 = ((cljs.core.seq_QMARK_.call(null,map__31488))?cljs.core.apply.call(null,cljs.core.hash_map,map__31488):map__31488);
var c = map__31488__$1;
var content_area_el = cljs.core.get.call(null,map__31488__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__31489){
var map__31491 = p__31489;
var map__31491__$1 = ((cljs.core.seq_QMARK_.call(null,map__31491))?cljs.core.apply.call(null,cljs.core.hash_map,map__31491):map__31491);
var content_area_el = cljs.core.get.call(null,map__31491__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__23577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto__){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto__){
return (function (state_31533){
var state_val_31534 = (state_31533[(1)]);
if((state_val_31534 === (1))){
var inst_31518 = (state_31533[(7)]);
var inst_31518__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31519 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31520 = ["10px","10px","100%","68px","1.0"];
var inst_31521 = cljs.core.PersistentHashMap.fromArrays(inst_31519,inst_31520);
var inst_31522 = cljs.core.merge.call(null,inst_31521,style);
var inst_31523 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31518__$1,inst_31522);
var inst_31524 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31518__$1,msg);
var inst_31525 = cljs.core.async.timeout.call(null,(300));
var state_31533__$1 = (function (){var statearr_31535 = state_31533;
(statearr_31535[(8)] = inst_31523);

(statearr_31535[(9)] = inst_31524);

(statearr_31535[(7)] = inst_31518__$1);

return statearr_31535;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31533__$1,(2),inst_31525);
} else {
if((state_val_31534 === (2))){
var inst_31518 = (state_31533[(7)]);
var inst_31527 = (state_31533[(2)]);
var inst_31528 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_31529 = ["auto"];
var inst_31530 = cljs.core.PersistentHashMap.fromArrays(inst_31528,inst_31529);
var inst_31531 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31518,inst_31530);
var state_31533__$1 = (function (){var statearr_31536 = state_31533;
(statearr_31536[(10)] = inst_31527);

return statearr_31536;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31533__$1,inst_31531);
} else {
return null;
}
}
});})(c__23577__auto__))
;
return ((function (switch__23515__auto__,c__23577__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__23516__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__23516__auto____0 = (function (){
var statearr_31540 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31540[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__23516__auto__);

(statearr_31540[(1)] = (1));

return statearr_31540;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__23516__auto____1 = (function (state_31533){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_31533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e31541){if((e31541 instanceof Object)){
var ex__23519__auto__ = e31541;
var statearr_31542_31544 = state_31533;
(statearr_31542_31544[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31545 = state_31533;
state_31533 = G__31545;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__23516__auto__ = function(state_31533){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23516__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23516__auto____1.call(this,state_31533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__23516__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__23516__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto__))
})();
var state__23579__auto__ = (function (){var statearr_31543 = f__23578__auto__.call(null);
(statearr_31543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto__);

return statearr_31543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto__))
);

return c__23577__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__31547 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__31547,(0),null);
var ln = cljs.core.nth.call(null,vec__31547,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__31550 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__31550,(0),null);
var file_line = cljs.core.nth.call(null,vec__31550,(1),null);
var file_column = cljs.core.nth.call(null,vec__31550,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__31550,file_name,file_line,file_column){
return (function (p1__31548_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__31548_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__31550,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__20567__auto__ = file_line;
if(cljs.core.truth_(or__20567__auto__)){
return or__20567__auto__;
} else {
var and__20555__auto__ = cause;
if(cljs.core.truth_(and__20555__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__20555__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__31552 = figwheel.client.heads_up.ensure_container.call(null);
var map__31552__$1 = ((cljs.core.seq_QMARK_.call(null,map__31552))?cljs.core.apply.call(null,cljs.core.hash_map,map__31552):map__31552);
var content_area_el = cljs.core.get.call(null,map__31552__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__23577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto__){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto__){
return (function (state_31599){
var state_val_31600 = (state_31599[(1)]);
if((state_val_31600 === (1))){
var inst_31582 = (state_31599[(7)]);
var inst_31582__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31583 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31584 = ["0.0"];
var inst_31585 = cljs.core.PersistentHashMap.fromArrays(inst_31583,inst_31584);
var inst_31586 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31582__$1,inst_31585);
var inst_31587 = cljs.core.async.timeout.call(null,(300));
var state_31599__$1 = (function (){var statearr_31601 = state_31599;
(statearr_31601[(7)] = inst_31582__$1);

(statearr_31601[(8)] = inst_31586);

return statearr_31601;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31599__$1,(2),inst_31587);
} else {
if((state_val_31600 === (2))){
var inst_31582 = (state_31599[(7)]);
var inst_31589 = (state_31599[(2)]);
var inst_31590 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_31591 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_31592 = cljs.core.PersistentHashMap.fromArrays(inst_31590,inst_31591);
var inst_31593 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31582,inst_31592);
var inst_31594 = cljs.core.async.timeout.call(null,(200));
var state_31599__$1 = (function (){var statearr_31602 = state_31599;
(statearr_31602[(9)] = inst_31593);

(statearr_31602[(10)] = inst_31589);

return statearr_31602;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31599__$1,(3),inst_31594);
} else {
if((state_val_31600 === (3))){
var inst_31582 = (state_31599[(7)]);
var inst_31596 = (state_31599[(2)]);
var inst_31597 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31582,"");
var state_31599__$1 = (function (){var statearr_31603 = state_31599;
(statearr_31603[(11)] = inst_31596);

return statearr_31603;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31599__$1,inst_31597);
} else {
return null;
}
}
}
});})(c__23577__auto__))
;
return ((function (switch__23515__auto__,c__23577__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__23516__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__23516__auto____0 = (function (){
var statearr_31607 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31607[(0)] = figwheel$client$heads_up$clear_$_state_machine__23516__auto__);

(statearr_31607[(1)] = (1));

return statearr_31607;
});
var figwheel$client$heads_up$clear_$_state_machine__23516__auto____1 = (function (state_31599){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_31599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e31608){if((e31608 instanceof Object)){
var ex__23519__auto__ = e31608;
var statearr_31609_31611 = state_31599;
(statearr_31609_31611[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31612 = state_31599;
state_31599 = G__31612;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__23516__auto__ = function(state_31599){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__23516__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__23516__auto____1.call(this,state_31599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__23516__auto____0;
figwheel$client$heads_up$clear_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__23516__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto__))
})();
var state__23579__auto__ = (function (){var statearr_31610 = f__23578__auto__.call(null);
(statearr_31610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto__);

return statearr_31610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto__))
);

return c__23577__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__23577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto__){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto__){
return (function (state_31644){
var state_val_31645 = (state_31644[(1)]);
if((state_val_31645 === (1))){
var inst_31634 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_31644__$1 = state_31644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31644__$1,(2),inst_31634);
} else {
if((state_val_31645 === (2))){
var inst_31636 = (state_31644[(2)]);
var inst_31637 = cljs.core.async.timeout.call(null,(400));
var state_31644__$1 = (function (){var statearr_31646 = state_31644;
(statearr_31646[(7)] = inst_31636);

return statearr_31646;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31644__$1,(3),inst_31637);
} else {
if((state_val_31645 === (3))){
var inst_31639 = (state_31644[(2)]);
var inst_31640 = figwheel.client.heads_up.clear.call(null);
var state_31644__$1 = (function (){var statearr_31647 = state_31644;
(statearr_31647[(8)] = inst_31639);

return statearr_31647;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31644__$1,(4),inst_31640);
} else {
if((state_val_31645 === (4))){
var inst_31642 = (state_31644[(2)]);
var state_31644__$1 = state_31644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31644__$1,inst_31642);
} else {
return null;
}
}
}
}
});})(c__23577__auto__))
;
return ((function (switch__23515__auto__,c__23577__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__23516__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__23516__auto____0 = (function (){
var statearr_31651 = [null,null,null,null,null,null,null,null,null];
(statearr_31651[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__23516__auto__);

(statearr_31651[(1)] = (1));

return statearr_31651;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__23516__auto____1 = (function (state_31644){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_31644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e31652){if((e31652 instanceof Object)){
var ex__23519__auto__ = e31652;
var statearr_31653_31655 = state_31644;
(statearr_31653_31655[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31656 = state_31644;
state_31644 = G__31656;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__23516__auto__ = function(state_31644){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23516__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23516__auto____1.call(this,state_31644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__23516__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__23516__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto__))
})();
var state__23579__auto__ = (function (){var statearr_31654 = f__23578__auto__.call(null);
(statearr_31654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto__);

return statearr_31654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto__))
);

return c__23577__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map