// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31671_31683 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31672_31684 = null;
var count__31673_31685 = (0);
var i__31674_31686 = (0);
while(true){
if((i__31674_31686 < count__31673_31685)){
var f_31687 = cljs.core._nth.call(null,chunk__31672_31684,i__31674_31686);
cljs.core.println.call(null,"  ",f_31687);

var G__31688 = seq__31671_31683;
var G__31689 = chunk__31672_31684;
var G__31690 = count__31673_31685;
var G__31691 = (i__31674_31686 + (1));
seq__31671_31683 = G__31688;
chunk__31672_31684 = G__31689;
count__31673_31685 = G__31690;
i__31674_31686 = G__31691;
continue;
} else {
var temp__4425__auto___31692 = cljs.core.seq.call(null,seq__31671_31683);
if(temp__4425__auto___31692){
var seq__31671_31693__$1 = temp__4425__auto___31692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31671_31693__$1)){
var c__21352__auto___31694 = cljs.core.chunk_first.call(null,seq__31671_31693__$1);
var G__31695 = cljs.core.chunk_rest.call(null,seq__31671_31693__$1);
var G__31696 = c__21352__auto___31694;
var G__31697 = cljs.core.count.call(null,c__21352__auto___31694);
var G__31698 = (0);
seq__31671_31683 = G__31695;
chunk__31672_31684 = G__31696;
count__31673_31685 = G__31697;
i__31674_31686 = G__31698;
continue;
} else {
var f_31699 = cljs.core.first.call(null,seq__31671_31693__$1);
cljs.core.println.call(null,"  ",f_31699);

var G__31700 = cljs.core.next.call(null,seq__31671_31693__$1);
var G__31701 = null;
var G__31702 = (0);
var G__31703 = (0);
seq__31671_31683 = G__31700;
chunk__31672_31684 = G__31701;
count__31673_31685 = G__31702;
i__31674_31686 = G__31703;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31704 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20567__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20567__auto__)){
return or__20567__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31704);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31704)))?cljs.core.second.call(null,arglists_31704):arglists_31704));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31675 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31676 = null;
var count__31677 = (0);
var i__31678 = (0);
while(true){
if((i__31678 < count__31677)){
var vec__31679 = cljs.core._nth.call(null,chunk__31676,i__31678);
var name = cljs.core.nth.call(null,vec__31679,(0),null);
var map__31680 = cljs.core.nth.call(null,vec__31679,(1),null);
var map__31680__$1 = ((cljs.core.seq_QMARK_.call(null,map__31680))?cljs.core.apply.call(null,cljs.core.hash_map,map__31680):map__31680);
var doc = cljs.core.get.call(null,map__31680__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__31680__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31705 = seq__31675;
var G__31706 = chunk__31676;
var G__31707 = count__31677;
var G__31708 = (i__31678 + (1));
seq__31675 = G__31705;
chunk__31676 = G__31706;
count__31677 = G__31707;
i__31678 = G__31708;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31675);
if(temp__4425__auto__){
var seq__31675__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31675__$1)){
var c__21352__auto__ = cljs.core.chunk_first.call(null,seq__31675__$1);
var G__31709 = cljs.core.chunk_rest.call(null,seq__31675__$1);
var G__31710 = c__21352__auto__;
var G__31711 = cljs.core.count.call(null,c__21352__auto__);
var G__31712 = (0);
seq__31675 = G__31709;
chunk__31676 = G__31710;
count__31677 = G__31711;
i__31678 = G__31712;
continue;
} else {
var vec__31681 = cljs.core.first.call(null,seq__31675__$1);
var name = cljs.core.nth.call(null,vec__31681,(0),null);
var map__31682 = cljs.core.nth.call(null,vec__31681,(1),null);
var map__31682__$1 = ((cljs.core.seq_QMARK_.call(null,map__31682))?cljs.core.apply.call(null,cljs.core.hash_map,map__31682):map__31682);
var doc = cljs.core.get.call(null,map__31682__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__31682__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31713 = cljs.core.next.call(null,seq__31675__$1);
var G__31714 = null;
var G__31715 = (0);
var G__31716 = (0);
seq__31675 = G__31713;
chunk__31676 = G__31714;
count__31677 = G__31715;
i__31678 = G__31716;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map