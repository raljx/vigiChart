// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t28035 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28035 = (function (fn_handler,f,meta28036){
this.fn_handler = fn_handler;
this.f = f;
this.meta28036 = meta28036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28037,meta28036__$1){
var self__ = this;
var _28037__$1 = this;
return (new cljs.core.async.t28035(self__.fn_handler,self__.f,meta28036__$1));
});

cljs.core.async.t28035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28037){
var self__ = this;
var _28037__$1 = this;
return self__.meta28036;
});

cljs.core.async.t28035.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28035.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28035.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta28036","meta28036",441352347,null)], null);
});

cljs.core.async.t28035.cljs$lang$type = true;

cljs.core.async.t28035.cljs$lang$ctorStr = "cljs.core.async/t28035";

cljs.core.async.t28035.cljs$lang$ctorPrWriter = (function (this__21146__auto__,writer__21147__auto__,opt__21148__auto__){
return cljs.core._write.call(null,writer__21147__auto__,"cljs.core.async/t28035");
});

cljs.core.async.__GT_t28035 = (function cljs$core$async$fn_handler_$___GT_t28035(fn_handler__$1,f__$1,meta28036){
return (new cljs.core.async.t28035(fn_handler__$1,f__$1,meta28036));
});

}

return (new cljs.core.async.t28035(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__28039 = buff;
if(G__28039){
var bit__21241__auto__ = null;
if(cljs.core.truth_((function (){var or__20567__auto__ = bit__21241__auto__;
if(cljs.core.truth_(or__20567__auto__)){
return or__20567__auto__;
} else {
return G__28039.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__28039.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28039);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28039);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__28041 = arguments.length;
switch (G__28041) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__28044 = arguments.length;
switch (G__28044) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28046 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28046);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28046,ret){
return (function (){
return fn1.call(null,val_28046);
});})(val_28046,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__28048 = arguments.length;
switch (G__28048) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__21452__auto___28050 = n;
var x_28051 = (0);
while(true){
if((x_28051 < n__21452__auto___28050)){
(a[x_28051] = (0));

var G__28052 = (x_28051 + (1));
x_28051 = G__28052;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28053 = (i + (1));
i = G__28053;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t28057 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28057 = (function (alt_flag,flag,meta28058){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28058 = meta28058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28059,meta28058__$1){
var self__ = this;
var _28059__$1 = this;
return (new cljs.core.async.t28057(self__.alt_flag,self__.flag,meta28058__$1));
});})(flag))
;

cljs.core.async.t28057.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28059){
var self__ = this;
var _28059__$1 = this;
return self__.meta28058;
});})(flag))
;

cljs.core.async.t28057.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28057.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t28057.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t28057.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28058","meta28058",-1767182153,null)], null);
});})(flag))
;

cljs.core.async.t28057.cljs$lang$type = true;

cljs.core.async.t28057.cljs$lang$ctorStr = "cljs.core.async/t28057";

cljs.core.async.t28057.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__21146__auto__,writer__21147__auto__,opt__21148__auto__){
return cljs.core._write.call(null,writer__21147__auto__,"cljs.core.async/t28057");
});})(flag))
;

cljs.core.async.__GT_t28057 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t28057(alt_flag__$1,flag__$1,meta28058){
return (new cljs.core.async.t28057(alt_flag__$1,flag__$1,meta28058));
});})(flag))
;

}

return (new cljs.core.async.t28057(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t28063 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28063 = (function (alt_handler,flag,cb,meta28064){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28064 = meta28064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28065,meta28064__$1){
var self__ = this;
var _28065__$1 = this;
return (new cljs.core.async.t28063(self__.alt_handler,self__.flag,self__.cb,meta28064__$1));
});

cljs.core.async.t28063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28065){
var self__ = this;
var _28065__$1 = this;
return self__.meta28064;
});

cljs.core.async.t28063.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t28063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t28063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28064","meta28064",-33120433,null)], null);
});

cljs.core.async.t28063.cljs$lang$type = true;

cljs.core.async.t28063.cljs$lang$ctorStr = "cljs.core.async/t28063";

cljs.core.async.t28063.cljs$lang$ctorPrWriter = (function (this__21146__auto__,writer__21147__auto__,opt__21148__auto__){
return cljs.core._write.call(null,writer__21147__auto__,"cljs.core.async/t28063");
});

cljs.core.async.__GT_t28063 = (function cljs$core$async$alt_handler_$___GT_t28063(alt_handler__$1,flag__$1,cb__$1,meta28064){
return (new cljs.core.async.t28063(alt_handler__$1,flag__$1,cb__$1,meta28064));
});

}

return (new cljs.core.async.t28063(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28066_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28066_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28067_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28067_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20567__auto__ = wport;
if(cljs.core.truth_(or__20567__auto__)){
return or__20567__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28068 = (i + (1));
i = G__28068;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20567__auto__ = ret;
if(cljs.core.truth_(or__20567__auto__)){
return or__20567__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__20555__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20555__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20555__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__21607__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21607__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28071){
var map__28072 = p__28071;
var map__28072__$1 = ((cljs.core.seq_QMARK_.call(null,map__28072))?cljs.core.apply.call(null,cljs.core.hash_map,map__28072):map__28072);
var opts = map__28072__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28069){
var G__28070 = cljs.core.first.call(null,seq28069);
var seq28069__$1 = cljs.core.next.call(null,seq28069);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28070,seq28069__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__28074 = arguments.length;
switch (G__28074) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23577__auto___28123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto___28123){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto___28123){
return (function (state_28098){
var state_val_28099 = (state_28098[(1)]);
if((state_val_28099 === (7))){
var inst_28094 = (state_28098[(2)]);
var state_28098__$1 = state_28098;
var statearr_28100_28124 = state_28098__$1;
(statearr_28100_28124[(2)] = inst_28094);

(statearr_28100_28124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (1))){
var state_28098__$1 = state_28098;
var statearr_28101_28125 = state_28098__$1;
(statearr_28101_28125[(2)] = null);

(statearr_28101_28125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (4))){
var inst_28077 = (state_28098[(7)]);
var inst_28077__$1 = (state_28098[(2)]);
var inst_28078 = (inst_28077__$1 == null);
var state_28098__$1 = (function (){var statearr_28102 = state_28098;
(statearr_28102[(7)] = inst_28077__$1);

return statearr_28102;
})();
if(cljs.core.truth_(inst_28078)){
var statearr_28103_28126 = state_28098__$1;
(statearr_28103_28126[(1)] = (5));

} else {
var statearr_28104_28127 = state_28098__$1;
(statearr_28104_28127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (13))){
var state_28098__$1 = state_28098;
var statearr_28105_28128 = state_28098__$1;
(statearr_28105_28128[(2)] = null);

(statearr_28105_28128[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (6))){
var inst_28077 = (state_28098[(7)]);
var state_28098__$1 = state_28098;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28098__$1,(11),to,inst_28077);
} else {
if((state_val_28099 === (3))){
var inst_28096 = (state_28098[(2)]);
var state_28098__$1 = state_28098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28098__$1,inst_28096);
} else {
if((state_val_28099 === (12))){
var state_28098__$1 = state_28098;
var statearr_28106_28129 = state_28098__$1;
(statearr_28106_28129[(2)] = null);

(statearr_28106_28129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (2))){
var state_28098__$1 = state_28098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28098__$1,(4),from);
} else {
if((state_val_28099 === (11))){
var inst_28087 = (state_28098[(2)]);
var state_28098__$1 = state_28098;
if(cljs.core.truth_(inst_28087)){
var statearr_28107_28130 = state_28098__$1;
(statearr_28107_28130[(1)] = (12));

} else {
var statearr_28108_28131 = state_28098__$1;
(statearr_28108_28131[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (9))){
var state_28098__$1 = state_28098;
var statearr_28109_28132 = state_28098__$1;
(statearr_28109_28132[(2)] = null);

(statearr_28109_28132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (5))){
var state_28098__$1 = state_28098;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28110_28133 = state_28098__$1;
(statearr_28110_28133[(1)] = (8));

} else {
var statearr_28111_28134 = state_28098__$1;
(statearr_28111_28134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (14))){
var inst_28092 = (state_28098[(2)]);
var state_28098__$1 = state_28098;
var statearr_28112_28135 = state_28098__$1;
(statearr_28112_28135[(2)] = inst_28092);

(statearr_28112_28135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (10))){
var inst_28084 = (state_28098[(2)]);
var state_28098__$1 = state_28098;
var statearr_28113_28136 = state_28098__$1;
(statearr_28113_28136[(2)] = inst_28084);

(statearr_28113_28136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28099 === (8))){
var inst_28081 = cljs.core.async.close_BANG_.call(null,to);
var state_28098__$1 = state_28098;
var statearr_28114_28137 = state_28098__$1;
(statearr_28114_28137[(2)] = inst_28081);

(statearr_28114_28137[(1)] = (10));


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
});})(c__23577__auto___28123))
;
return ((function (switch__23515__auto__,c__23577__auto___28123){
return (function() {
var cljs$core$async$state_machine__23516__auto__ = null;
var cljs$core$async$state_machine__23516__auto____0 = (function (){
var statearr_28118 = [null,null,null,null,null,null,null,null];
(statearr_28118[(0)] = cljs$core$async$state_machine__23516__auto__);

(statearr_28118[(1)] = (1));

return statearr_28118;
});
var cljs$core$async$state_machine__23516__auto____1 = (function (state_28098){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_28098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e28119){if((e28119 instanceof Object)){
var ex__23519__auto__ = e28119;
var statearr_28120_28138 = state_28098;
(statearr_28120_28138[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28139 = state_28098;
state_28098 = G__28139;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
cljs$core$async$state_machine__23516__auto__ = function(state_28098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23516__auto____1.call(this,state_28098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23516__auto____0;
cljs$core$async$state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23516__auto____1;
return cljs$core$async$state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto___28123))
})();
var state__23579__auto__ = (function (){var statearr_28121 = f__23578__auto__.call(null);
(statearr_28121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto___28123);

return statearr_28121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto___28123))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28323){
var vec__28324 = p__28323;
var v = cljs.core.nth.call(null,vec__28324,(0),null);
var p = cljs.core.nth.call(null,vec__28324,(1),null);
var job = vec__28324;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23577__auto___28506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto___28506,res,vec__28324,v,p,job,jobs,results){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto___28506,res,vec__28324,v,p,job,jobs,results){
return (function (state_28329){
var state_val_28330 = (state_28329[(1)]);
if((state_val_28330 === (1))){
var state_28329__$1 = state_28329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28329__$1,(2),res,v);
} else {
if((state_val_28330 === (2))){
var inst_28326 = (state_28329[(2)]);
var inst_28327 = cljs.core.async.close_BANG_.call(null,res);
var state_28329__$1 = (function (){var statearr_28331 = state_28329;
(statearr_28331[(7)] = inst_28326);

return statearr_28331;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28329__$1,inst_28327);
} else {
return null;
}
}
});})(c__23577__auto___28506,res,vec__28324,v,p,job,jobs,results))
;
return ((function (switch__23515__auto__,c__23577__auto___28506,res,vec__28324,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____0 = (function (){
var statearr_28335 = [null,null,null,null,null,null,null,null];
(statearr_28335[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__);

(statearr_28335[(1)] = (1));

return statearr_28335;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____1 = (function (state_28329){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_28329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e28336){if((e28336 instanceof Object)){
var ex__23519__auto__ = e28336;
var statearr_28337_28507 = state_28329;
(statearr_28337_28507[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28508 = state_28329;
state_28329 = G__28508;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__ = function(state_28329){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____1.call(this,state_28329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto___28506,res,vec__28324,v,p,job,jobs,results))
})();
var state__23579__auto__ = (function (){var statearr_28338 = f__23578__auto__.call(null);
(statearr_28338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto___28506);

return statearr_28338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto___28506,res,vec__28324,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28339){
var vec__28340 = p__28339;
var v = cljs.core.nth.call(null,vec__28340,(0),null);
var p = cljs.core.nth.call(null,vec__28340,(1),null);
var job = vec__28340;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__21452__auto___28509 = n;
var __28510 = (0);
while(true){
if((__28510 < n__21452__auto___28509)){
var G__28341_28511 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28341_28511) {
case "compute":
var c__23577__auto___28513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28510,c__23577__auto___28513,G__28341_28511,n__21452__auto___28509,jobs,results,process,async){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (__28510,c__23577__auto___28513,G__28341_28511,n__21452__auto___28509,jobs,results,process,async){
return (function (state_28354){
var state_val_28355 = (state_28354[(1)]);
if((state_val_28355 === (1))){
var state_28354__$1 = state_28354;
var statearr_28356_28514 = state_28354__$1;
(statearr_28356_28514[(2)] = null);

(statearr_28356_28514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (2))){
var state_28354__$1 = state_28354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28354__$1,(4),jobs);
} else {
if((state_val_28355 === (3))){
var inst_28352 = (state_28354[(2)]);
var state_28354__$1 = state_28354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28354__$1,inst_28352);
} else {
if((state_val_28355 === (4))){
var inst_28344 = (state_28354[(2)]);
var inst_28345 = process.call(null,inst_28344);
var state_28354__$1 = state_28354;
if(cljs.core.truth_(inst_28345)){
var statearr_28357_28515 = state_28354__$1;
(statearr_28357_28515[(1)] = (5));

} else {
var statearr_28358_28516 = state_28354__$1;
(statearr_28358_28516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (5))){
var state_28354__$1 = state_28354;
var statearr_28359_28517 = state_28354__$1;
(statearr_28359_28517[(2)] = null);

(statearr_28359_28517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (6))){
var state_28354__$1 = state_28354;
var statearr_28360_28518 = state_28354__$1;
(statearr_28360_28518[(2)] = null);

(statearr_28360_28518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (7))){
var inst_28350 = (state_28354[(2)]);
var state_28354__$1 = state_28354;
var statearr_28361_28519 = state_28354__$1;
(statearr_28361_28519[(2)] = inst_28350);

(statearr_28361_28519[(1)] = (3));


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
});})(__28510,c__23577__auto___28513,G__28341_28511,n__21452__auto___28509,jobs,results,process,async))
;
return ((function (__28510,switch__23515__auto__,c__23577__auto___28513,G__28341_28511,n__21452__auto___28509,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____0 = (function (){
var statearr_28365 = [null,null,null,null,null,null,null];
(statearr_28365[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__);

(statearr_28365[(1)] = (1));

return statearr_28365;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____1 = (function (state_28354){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_28354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e28366){if((e28366 instanceof Object)){
var ex__23519__auto__ = e28366;
var statearr_28367_28520 = state_28354;
(statearr_28367_28520[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28521 = state_28354;
state_28354 = G__28521;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__ = function(state_28354){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____1.call(this,state_28354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__;
})()
;})(__28510,switch__23515__auto__,c__23577__auto___28513,G__28341_28511,n__21452__auto___28509,jobs,results,process,async))
})();
var state__23579__auto__ = (function (){var statearr_28368 = f__23578__auto__.call(null);
(statearr_28368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto___28513);

return statearr_28368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(__28510,c__23577__auto___28513,G__28341_28511,n__21452__auto___28509,jobs,results,process,async))
);


break;
case "async":
var c__23577__auto___28522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28510,c__23577__auto___28522,G__28341_28511,n__21452__auto___28509,jobs,results,process,async){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (__28510,c__23577__auto___28522,G__28341_28511,n__21452__auto___28509,jobs,results,process,async){
return (function (state_28381){
var state_val_28382 = (state_28381[(1)]);
if((state_val_28382 === (1))){
var state_28381__$1 = state_28381;
var statearr_28383_28523 = state_28381__$1;
(statearr_28383_28523[(2)] = null);

(statearr_28383_28523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (2))){
var state_28381__$1 = state_28381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28381__$1,(4),jobs);
} else {
if((state_val_28382 === (3))){
var inst_28379 = (state_28381[(2)]);
var state_28381__$1 = state_28381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28381__$1,inst_28379);
} else {
if((state_val_28382 === (4))){
var inst_28371 = (state_28381[(2)]);
var inst_28372 = async.call(null,inst_28371);
var state_28381__$1 = state_28381;
if(cljs.core.truth_(inst_28372)){
var statearr_28384_28524 = state_28381__$1;
(statearr_28384_28524[(1)] = (5));

} else {
var statearr_28385_28525 = state_28381__$1;
(statearr_28385_28525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (5))){
var state_28381__$1 = state_28381;
var statearr_28386_28526 = state_28381__$1;
(statearr_28386_28526[(2)] = null);

(statearr_28386_28526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (6))){
var state_28381__$1 = state_28381;
var statearr_28387_28527 = state_28381__$1;
(statearr_28387_28527[(2)] = null);

(statearr_28387_28527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28382 === (7))){
var inst_28377 = (state_28381[(2)]);
var state_28381__$1 = state_28381;
var statearr_28388_28528 = state_28381__$1;
(statearr_28388_28528[(2)] = inst_28377);

(statearr_28388_28528[(1)] = (3));


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
});})(__28510,c__23577__auto___28522,G__28341_28511,n__21452__auto___28509,jobs,results,process,async))
;
return ((function (__28510,switch__23515__auto__,c__23577__auto___28522,G__28341_28511,n__21452__auto___28509,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____0 = (function (){
var statearr_28392 = [null,null,null,null,null,null,null];
(statearr_28392[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__);

(statearr_28392[(1)] = (1));

return statearr_28392;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____1 = (function (state_28381){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_28381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e28393){if((e28393 instanceof Object)){
var ex__23519__auto__ = e28393;
var statearr_28394_28529 = state_28381;
(statearr_28394_28529[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28530 = state_28381;
state_28381 = G__28530;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__ = function(state_28381){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____1.call(this,state_28381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__;
})()
;})(__28510,switch__23515__auto__,c__23577__auto___28522,G__28341_28511,n__21452__auto___28509,jobs,results,process,async))
})();
var state__23579__auto__ = (function (){var statearr_28395 = f__23578__auto__.call(null);
(statearr_28395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto___28522);

return statearr_28395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(__28510,c__23577__auto___28522,G__28341_28511,n__21452__auto___28509,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28531 = (__28510 + (1));
__28510 = G__28531;
continue;
} else {
}
break;
}

var c__23577__auto___28532 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto___28532,jobs,results,process,async){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto___28532,jobs,results,process,async){
return (function (state_28417){
var state_val_28418 = (state_28417[(1)]);
if((state_val_28418 === (1))){
var state_28417__$1 = state_28417;
var statearr_28419_28533 = state_28417__$1;
(statearr_28419_28533[(2)] = null);

(statearr_28419_28533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (2))){
var state_28417__$1 = state_28417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28417__$1,(4),from);
} else {
if((state_val_28418 === (3))){
var inst_28415 = (state_28417[(2)]);
var state_28417__$1 = state_28417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28417__$1,inst_28415);
} else {
if((state_val_28418 === (4))){
var inst_28398 = (state_28417[(7)]);
var inst_28398__$1 = (state_28417[(2)]);
var inst_28399 = (inst_28398__$1 == null);
var state_28417__$1 = (function (){var statearr_28420 = state_28417;
(statearr_28420[(7)] = inst_28398__$1);

return statearr_28420;
})();
if(cljs.core.truth_(inst_28399)){
var statearr_28421_28534 = state_28417__$1;
(statearr_28421_28534[(1)] = (5));

} else {
var statearr_28422_28535 = state_28417__$1;
(statearr_28422_28535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (5))){
var inst_28401 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28417__$1 = state_28417;
var statearr_28423_28536 = state_28417__$1;
(statearr_28423_28536[(2)] = inst_28401);

(statearr_28423_28536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (6))){
var inst_28398 = (state_28417[(7)]);
var inst_28403 = (state_28417[(8)]);
var inst_28403__$1 = cljs.core.async.chan.call(null,(1));
var inst_28404 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28405 = [inst_28398,inst_28403__$1];
var inst_28406 = (new cljs.core.PersistentVector(null,2,(5),inst_28404,inst_28405,null));
var state_28417__$1 = (function (){var statearr_28424 = state_28417;
(statearr_28424[(8)] = inst_28403__$1);

return statearr_28424;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28417__$1,(8),jobs,inst_28406);
} else {
if((state_val_28418 === (7))){
var inst_28413 = (state_28417[(2)]);
var state_28417__$1 = state_28417;
var statearr_28425_28537 = state_28417__$1;
(statearr_28425_28537[(2)] = inst_28413);

(statearr_28425_28537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28418 === (8))){
var inst_28403 = (state_28417[(8)]);
var inst_28408 = (state_28417[(2)]);
var state_28417__$1 = (function (){var statearr_28426 = state_28417;
(statearr_28426[(9)] = inst_28408);

return statearr_28426;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28417__$1,(9),results,inst_28403);
} else {
if((state_val_28418 === (9))){
var inst_28410 = (state_28417[(2)]);
var state_28417__$1 = (function (){var statearr_28427 = state_28417;
(statearr_28427[(10)] = inst_28410);

return statearr_28427;
})();
var statearr_28428_28538 = state_28417__$1;
(statearr_28428_28538[(2)] = null);

(statearr_28428_28538[(1)] = (2));


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
});})(c__23577__auto___28532,jobs,results,process,async))
;
return ((function (switch__23515__auto__,c__23577__auto___28532,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____0 = (function (){
var statearr_28432 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28432[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__);

(statearr_28432[(1)] = (1));

return statearr_28432;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____1 = (function (state_28417){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_28417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e28433){if((e28433 instanceof Object)){
var ex__23519__auto__ = e28433;
var statearr_28434_28539 = state_28417;
(statearr_28434_28539[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28540 = state_28417;
state_28417 = G__28540;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__ = function(state_28417){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____1.call(this,state_28417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto___28532,jobs,results,process,async))
})();
var state__23579__auto__ = (function (){var statearr_28435 = f__23578__auto__.call(null);
(statearr_28435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto___28532);

return statearr_28435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto___28532,jobs,results,process,async))
);


var c__23577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto__,jobs,results,process,async){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto__,jobs,results,process,async){
return (function (state_28473){
var state_val_28474 = (state_28473[(1)]);
if((state_val_28474 === (7))){
var inst_28469 = (state_28473[(2)]);
var state_28473__$1 = state_28473;
var statearr_28475_28541 = state_28473__$1;
(statearr_28475_28541[(2)] = inst_28469);

(statearr_28475_28541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (20))){
var state_28473__$1 = state_28473;
var statearr_28476_28542 = state_28473__$1;
(statearr_28476_28542[(2)] = null);

(statearr_28476_28542[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (1))){
var state_28473__$1 = state_28473;
var statearr_28477_28543 = state_28473__$1;
(statearr_28477_28543[(2)] = null);

(statearr_28477_28543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (4))){
var inst_28438 = (state_28473[(7)]);
var inst_28438__$1 = (state_28473[(2)]);
var inst_28439 = (inst_28438__$1 == null);
var state_28473__$1 = (function (){var statearr_28478 = state_28473;
(statearr_28478[(7)] = inst_28438__$1);

return statearr_28478;
})();
if(cljs.core.truth_(inst_28439)){
var statearr_28479_28544 = state_28473__$1;
(statearr_28479_28544[(1)] = (5));

} else {
var statearr_28480_28545 = state_28473__$1;
(statearr_28480_28545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (15))){
var inst_28451 = (state_28473[(8)]);
var state_28473__$1 = state_28473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28473__$1,(18),to,inst_28451);
} else {
if((state_val_28474 === (21))){
var inst_28464 = (state_28473[(2)]);
var state_28473__$1 = state_28473;
var statearr_28481_28546 = state_28473__$1;
(statearr_28481_28546[(2)] = inst_28464);

(statearr_28481_28546[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (13))){
var inst_28466 = (state_28473[(2)]);
var state_28473__$1 = (function (){var statearr_28482 = state_28473;
(statearr_28482[(9)] = inst_28466);

return statearr_28482;
})();
var statearr_28483_28547 = state_28473__$1;
(statearr_28483_28547[(2)] = null);

(statearr_28483_28547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (6))){
var inst_28438 = (state_28473[(7)]);
var state_28473__$1 = state_28473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28473__$1,(11),inst_28438);
} else {
if((state_val_28474 === (17))){
var inst_28459 = (state_28473[(2)]);
var state_28473__$1 = state_28473;
if(cljs.core.truth_(inst_28459)){
var statearr_28484_28548 = state_28473__$1;
(statearr_28484_28548[(1)] = (19));

} else {
var statearr_28485_28549 = state_28473__$1;
(statearr_28485_28549[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (3))){
var inst_28471 = (state_28473[(2)]);
var state_28473__$1 = state_28473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28473__$1,inst_28471);
} else {
if((state_val_28474 === (12))){
var inst_28448 = (state_28473[(10)]);
var state_28473__$1 = state_28473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28473__$1,(14),inst_28448);
} else {
if((state_val_28474 === (2))){
var state_28473__$1 = state_28473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28473__$1,(4),results);
} else {
if((state_val_28474 === (19))){
var state_28473__$1 = state_28473;
var statearr_28486_28550 = state_28473__$1;
(statearr_28486_28550[(2)] = null);

(statearr_28486_28550[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (11))){
var inst_28448 = (state_28473[(2)]);
var state_28473__$1 = (function (){var statearr_28487 = state_28473;
(statearr_28487[(10)] = inst_28448);

return statearr_28487;
})();
var statearr_28488_28551 = state_28473__$1;
(statearr_28488_28551[(2)] = null);

(statearr_28488_28551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (9))){
var state_28473__$1 = state_28473;
var statearr_28489_28552 = state_28473__$1;
(statearr_28489_28552[(2)] = null);

(statearr_28489_28552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (5))){
var state_28473__$1 = state_28473;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28490_28553 = state_28473__$1;
(statearr_28490_28553[(1)] = (8));

} else {
var statearr_28491_28554 = state_28473__$1;
(statearr_28491_28554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (14))){
var inst_28451 = (state_28473[(8)]);
var inst_28453 = (state_28473[(11)]);
var inst_28451__$1 = (state_28473[(2)]);
var inst_28452 = (inst_28451__$1 == null);
var inst_28453__$1 = cljs.core.not.call(null,inst_28452);
var state_28473__$1 = (function (){var statearr_28492 = state_28473;
(statearr_28492[(8)] = inst_28451__$1);

(statearr_28492[(11)] = inst_28453__$1);

return statearr_28492;
})();
if(inst_28453__$1){
var statearr_28493_28555 = state_28473__$1;
(statearr_28493_28555[(1)] = (15));

} else {
var statearr_28494_28556 = state_28473__$1;
(statearr_28494_28556[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (16))){
var inst_28453 = (state_28473[(11)]);
var state_28473__$1 = state_28473;
var statearr_28495_28557 = state_28473__$1;
(statearr_28495_28557[(2)] = inst_28453);

(statearr_28495_28557[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (10))){
var inst_28445 = (state_28473[(2)]);
var state_28473__$1 = state_28473;
var statearr_28496_28558 = state_28473__$1;
(statearr_28496_28558[(2)] = inst_28445);

(statearr_28496_28558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (18))){
var inst_28456 = (state_28473[(2)]);
var state_28473__$1 = state_28473;
var statearr_28497_28559 = state_28473__$1;
(statearr_28497_28559[(2)] = inst_28456);

(statearr_28497_28559[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28474 === (8))){
var inst_28442 = cljs.core.async.close_BANG_.call(null,to);
var state_28473__$1 = state_28473;
var statearr_28498_28560 = state_28473__$1;
(statearr_28498_28560[(2)] = inst_28442);

(statearr_28498_28560[(1)] = (10));


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
});})(c__23577__auto__,jobs,results,process,async))
;
return ((function (switch__23515__auto__,c__23577__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____0 = (function (){
var statearr_28502 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28502[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__);

(statearr_28502[(1)] = (1));

return statearr_28502;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____1 = (function (state_28473){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_28473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e28503){if((e28503 instanceof Object)){
var ex__23519__auto__ = e28503;
var statearr_28504_28561 = state_28473;
(statearr_28504_28561[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28562 = state_28473;
state_28473 = G__28562;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__ = function(state_28473){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____1.call(this,state_28473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23516__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto__,jobs,results,process,async))
})();
var state__23579__auto__ = (function (){var statearr_28505 = f__23578__auto__.call(null);
(statearr_28505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto__);

return statearr_28505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto__,jobs,results,process,async))
);

return c__23577__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__28564 = arguments.length;
switch (G__28564) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__28567 = arguments.length;
switch (G__28567) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__28570 = arguments.length;
switch (G__28570) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23577__auto___28622 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto___28622,tc,fc){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto___28622,tc,fc){
return (function (state_28596){
var state_val_28597 = (state_28596[(1)]);
if((state_val_28597 === (7))){
var inst_28592 = (state_28596[(2)]);
var state_28596__$1 = state_28596;
var statearr_28598_28623 = state_28596__$1;
(statearr_28598_28623[(2)] = inst_28592);

(statearr_28598_28623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28597 === (1))){
var state_28596__$1 = state_28596;
var statearr_28599_28624 = state_28596__$1;
(statearr_28599_28624[(2)] = null);

(statearr_28599_28624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28597 === (4))){
var inst_28573 = (state_28596[(7)]);
var inst_28573__$1 = (state_28596[(2)]);
var inst_28574 = (inst_28573__$1 == null);
var state_28596__$1 = (function (){var statearr_28600 = state_28596;
(statearr_28600[(7)] = inst_28573__$1);

return statearr_28600;
})();
if(cljs.core.truth_(inst_28574)){
var statearr_28601_28625 = state_28596__$1;
(statearr_28601_28625[(1)] = (5));

} else {
var statearr_28602_28626 = state_28596__$1;
(statearr_28602_28626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28597 === (13))){
var state_28596__$1 = state_28596;
var statearr_28603_28627 = state_28596__$1;
(statearr_28603_28627[(2)] = null);

(statearr_28603_28627[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28597 === (6))){
var inst_28573 = (state_28596[(7)]);
var inst_28579 = p.call(null,inst_28573);
var state_28596__$1 = state_28596;
if(cljs.core.truth_(inst_28579)){
var statearr_28604_28628 = state_28596__$1;
(statearr_28604_28628[(1)] = (9));

} else {
var statearr_28605_28629 = state_28596__$1;
(statearr_28605_28629[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28597 === (3))){
var inst_28594 = (state_28596[(2)]);
var state_28596__$1 = state_28596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28596__$1,inst_28594);
} else {
if((state_val_28597 === (12))){
var state_28596__$1 = state_28596;
var statearr_28606_28630 = state_28596__$1;
(statearr_28606_28630[(2)] = null);

(statearr_28606_28630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28597 === (2))){
var state_28596__$1 = state_28596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28596__$1,(4),ch);
} else {
if((state_val_28597 === (11))){
var inst_28573 = (state_28596[(7)]);
var inst_28583 = (state_28596[(2)]);
var state_28596__$1 = state_28596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28596__$1,(8),inst_28583,inst_28573);
} else {
if((state_val_28597 === (9))){
var state_28596__$1 = state_28596;
var statearr_28607_28631 = state_28596__$1;
(statearr_28607_28631[(2)] = tc);

(statearr_28607_28631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28597 === (5))){
var inst_28576 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28577 = cljs.core.async.close_BANG_.call(null,fc);
var state_28596__$1 = (function (){var statearr_28608 = state_28596;
(statearr_28608[(8)] = inst_28576);

return statearr_28608;
})();
var statearr_28609_28632 = state_28596__$1;
(statearr_28609_28632[(2)] = inst_28577);

(statearr_28609_28632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28597 === (14))){
var inst_28590 = (state_28596[(2)]);
var state_28596__$1 = state_28596;
var statearr_28610_28633 = state_28596__$1;
(statearr_28610_28633[(2)] = inst_28590);

(statearr_28610_28633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28597 === (10))){
var state_28596__$1 = state_28596;
var statearr_28611_28634 = state_28596__$1;
(statearr_28611_28634[(2)] = fc);

(statearr_28611_28634[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28597 === (8))){
var inst_28585 = (state_28596[(2)]);
var state_28596__$1 = state_28596;
if(cljs.core.truth_(inst_28585)){
var statearr_28612_28635 = state_28596__$1;
(statearr_28612_28635[(1)] = (12));

} else {
var statearr_28613_28636 = state_28596__$1;
(statearr_28613_28636[(1)] = (13));

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
});})(c__23577__auto___28622,tc,fc))
;
return ((function (switch__23515__auto__,c__23577__auto___28622,tc,fc){
return (function() {
var cljs$core$async$state_machine__23516__auto__ = null;
var cljs$core$async$state_machine__23516__auto____0 = (function (){
var statearr_28617 = [null,null,null,null,null,null,null,null,null];
(statearr_28617[(0)] = cljs$core$async$state_machine__23516__auto__);

(statearr_28617[(1)] = (1));

return statearr_28617;
});
var cljs$core$async$state_machine__23516__auto____1 = (function (state_28596){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_28596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e28618){if((e28618 instanceof Object)){
var ex__23519__auto__ = e28618;
var statearr_28619_28637 = state_28596;
(statearr_28619_28637[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28638 = state_28596;
state_28596 = G__28638;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
cljs$core$async$state_machine__23516__auto__ = function(state_28596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23516__auto____1.call(this,state_28596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23516__auto____0;
cljs$core$async$state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23516__auto____1;
return cljs$core$async$state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto___28622,tc,fc))
})();
var state__23579__auto__ = (function (){var statearr_28620 = f__23578__auto__.call(null);
(statearr_28620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto___28622);

return statearr_28620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto___28622,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto__){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto__){
return (function (state_28685){
var state_val_28686 = (state_28685[(1)]);
if((state_val_28686 === (1))){
var inst_28671 = init;
var state_28685__$1 = (function (){var statearr_28687 = state_28685;
(statearr_28687[(7)] = inst_28671);

return statearr_28687;
})();
var statearr_28688_28703 = state_28685__$1;
(statearr_28688_28703[(2)] = null);

(statearr_28688_28703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (2))){
var state_28685__$1 = state_28685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28685__$1,(4),ch);
} else {
if((state_val_28686 === (3))){
var inst_28683 = (state_28685[(2)]);
var state_28685__$1 = state_28685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28685__$1,inst_28683);
} else {
if((state_val_28686 === (4))){
var inst_28674 = (state_28685[(8)]);
var inst_28674__$1 = (state_28685[(2)]);
var inst_28675 = (inst_28674__$1 == null);
var state_28685__$1 = (function (){var statearr_28689 = state_28685;
(statearr_28689[(8)] = inst_28674__$1);

return statearr_28689;
})();
if(cljs.core.truth_(inst_28675)){
var statearr_28690_28704 = state_28685__$1;
(statearr_28690_28704[(1)] = (5));

} else {
var statearr_28691_28705 = state_28685__$1;
(statearr_28691_28705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (5))){
var inst_28671 = (state_28685[(7)]);
var state_28685__$1 = state_28685;
var statearr_28692_28706 = state_28685__$1;
(statearr_28692_28706[(2)] = inst_28671);

(statearr_28692_28706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (6))){
var inst_28671 = (state_28685[(7)]);
var inst_28674 = (state_28685[(8)]);
var inst_28678 = f.call(null,inst_28671,inst_28674);
var inst_28671__$1 = inst_28678;
var state_28685__$1 = (function (){var statearr_28693 = state_28685;
(statearr_28693[(7)] = inst_28671__$1);

return statearr_28693;
})();
var statearr_28694_28707 = state_28685__$1;
(statearr_28694_28707[(2)] = null);

(statearr_28694_28707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28686 === (7))){
var inst_28681 = (state_28685[(2)]);
var state_28685__$1 = state_28685;
var statearr_28695_28708 = state_28685__$1;
(statearr_28695_28708[(2)] = inst_28681);

(statearr_28695_28708[(1)] = (3));


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
});})(c__23577__auto__))
;
return ((function (switch__23515__auto__,c__23577__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23516__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23516__auto____0 = (function (){
var statearr_28699 = [null,null,null,null,null,null,null,null,null];
(statearr_28699[(0)] = cljs$core$async$reduce_$_state_machine__23516__auto__);

(statearr_28699[(1)] = (1));

return statearr_28699;
});
var cljs$core$async$reduce_$_state_machine__23516__auto____1 = (function (state_28685){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_28685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e28700){if((e28700 instanceof Object)){
var ex__23519__auto__ = e28700;
var statearr_28701_28709 = state_28685;
(statearr_28701_28709[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28710 = state_28685;
state_28685 = G__28710;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23516__auto__ = function(state_28685){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23516__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23516__auto____1.call(this,state_28685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23516__auto____0;
cljs$core$async$reduce_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23516__auto____1;
return cljs$core$async$reduce_$_state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto__))
})();
var state__23579__auto__ = (function (){var statearr_28702 = f__23578__auto__.call(null);
(statearr_28702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto__);

return statearr_28702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto__))
);

return c__23577__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__28712 = arguments.length;
switch (G__28712) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto__){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto__){
return (function (state_28737){
var state_val_28738 = (state_28737[(1)]);
if((state_val_28738 === (7))){
var inst_28719 = (state_28737[(2)]);
var state_28737__$1 = state_28737;
var statearr_28739_28763 = state_28737__$1;
(statearr_28739_28763[(2)] = inst_28719);

(statearr_28739_28763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (1))){
var inst_28713 = cljs.core.seq.call(null,coll);
var inst_28714 = inst_28713;
var state_28737__$1 = (function (){var statearr_28740 = state_28737;
(statearr_28740[(7)] = inst_28714);

return statearr_28740;
})();
var statearr_28741_28764 = state_28737__$1;
(statearr_28741_28764[(2)] = null);

(statearr_28741_28764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (4))){
var inst_28714 = (state_28737[(7)]);
var inst_28717 = cljs.core.first.call(null,inst_28714);
var state_28737__$1 = state_28737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28737__$1,(7),ch,inst_28717);
} else {
if((state_val_28738 === (13))){
var inst_28731 = (state_28737[(2)]);
var state_28737__$1 = state_28737;
var statearr_28742_28765 = state_28737__$1;
(statearr_28742_28765[(2)] = inst_28731);

(statearr_28742_28765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (6))){
var inst_28722 = (state_28737[(2)]);
var state_28737__$1 = state_28737;
if(cljs.core.truth_(inst_28722)){
var statearr_28743_28766 = state_28737__$1;
(statearr_28743_28766[(1)] = (8));

} else {
var statearr_28744_28767 = state_28737__$1;
(statearr_28744_28767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (3))){
var inst_28735 = (state_28737[(2)]);
var state_28737__$1 = state_28737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28737__$1,inst_28735);
} else {
if((state_val_28738 === (12))){
var state_28737__$1 = state_28737;
var statearr_28745_28768 = state_28737__$1;
(statearr_28745_28768[(2)] = null);

(statearr_28745_28768[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (2))){
var inst_28714 = (state_28737[(7)]);
var state_28737__$1 = state_28737;
if(cljs.core.truth_(inst_28714)){
var statearr_28746_28769 = state_28737__$1;
(statearr_28746_28769[(1)] = (4));

} else {
var statearr_28747_28770 = state_28737__$1;
(statearr_28747_28770[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (11))){
var inst_28728 = cljs.core.async.close_BANG_.call(null,ch);
var state_28737__$1 = state_28737;
var statearr_28748_28771 = state_28737__$1;
(statearr_28748_28771[(2)] = inst_28728);

(statearr_28748_28771[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (9))){
var state_28737__$1 = state_28737;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28749_28772 = state_28737__$1;
(statearr_28749_28772[(1)] = (11));

} else {
var statearr_28750_28773 = state_28737__$1;
(statearr_28750_28773[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (5))){
var inst_28714 = (state_28737[(7)]);
var state_28737__$1 = state_28737;
var statearr_28751_28774 = state_28737__$1;
(statearr_28751_28774[(2)] = inst_28714);

(statearr_28751_28774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (10))){
var inst_28733 = (state_28737[(2)]);
var state_28737__$1 = state_28737;
var statearr_28752_28775 = state_28737__$1;
(statearr_28752_28775[(2)] = inst_28733);

(statearr_28752_28775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (8))){
var inst_28714 = (state_28737[(7)]);
var inst_28724 = cljs.core.next.call(null,inst_28714);
var inst_28714__$1 = inst_28724;
var state_28737__$1 = (function (){var statearr_28753 = state_28737;
(statearr_28753[(7)] = inst_28714__$1);

return statearr_28753;
})();
var statearr_28754_28776 = state_28737__$1;
(statearr_28754_28776[(2)] = null);

(statearr_28754_28776[(1)] = (2));


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
});})(c__23577__auto__))
;
return ((function (switch__23515__auto__,c__23577__auto__){
return (function() {
var cljs$core$async$state_machine__23516__auto__ = null;
var cljs$core$async$state_machine__23516__auto____0 = (function (){
var statearr_28758 = [null,null,null,null,null,null,null,null];
(statearr_28758[(0)] = cljs$core$async$state_machine__23516__auto__);

(statearr_28758[(1)] = (1));

return statearr_28758;
});
var cljs$core$async$state_machine__23516__auto____1 = (function (state_28737){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_28737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e28759){if((e28759 instanceof Object)){
var ex__23519__auto__ = e28759;
var statearr_28760_28777 = state_28737;
(statearr_28760_28777[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28778 = state_28737;
state_28737 = G__28778;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
cljs$core$async$state_machine__23516__auto__ = function(state_28737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23516__auto____1.call(this,state_28737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23516__auto____0;
cljs$core$async$state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23516__auto____1;
return cljs$core$async$state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto__))
})();
var state__23579__auto__ = (function (){var statearr_28761 = f__23578__auto__.call(null);
(statearr_28761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto__);

return statearr_28761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto__))
);

return c__23577__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj28780 = {};
return obj28780;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__20555__auto__ = _;
if(and__20555__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__20555__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__21203__auto__ = (((_ == null))?null:_);
return (function (){var or__20567__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj28782 = {};
return obj28782;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__20555__auto__ = m;
if(and__20555__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__20555__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__21203__auto__ = (((m == null))?null:m);
return (function (){var or__20567__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__20555__auto__ = m;
if(and__20555__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__20555__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__21203__auto__ = (((m == null))?null:m);
return (function (){var or__20567__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__20555__auto__ = m;
if(and__20555__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__20555__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__21203__auto__ = (((m == null))?null:m);
return (function (){var or__20567__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t29004 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29004 = (function (mult,ch,cs,meta29005){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29005 = meta29005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29006,meta29005__$1){
var self__ = this;
var _29006__$1 = this;
return (new cljs.core.async.t29004(self__.mult,self__.ch,self__.cs,meta29005__$1));
});})(cs))
;

cljs.core.async.t29004.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29006){
var self__ = this;
var _29006__$1 = this;
return self__.meta29005;
});})(cs))
;

cljs.core.async.t29004.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29004.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t29004.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t29004.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t29004.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t29004.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t29004.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29005","meta29005",-1410778506,null)], null);
});})(cs))
;

cljs.core.async.t29004.cljs$lang$type = true;

cljs.core.async.t29004.cljs$lang$ctorStr = "cljs.core.async/t29004";

cljs.core.async.t29004.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__21146__auto__,writer__21147__auto__,opt__21148__auto__){
return cljs.core._write.call(null,writer__21147__auto__,"cljs.core.async/t29004");
});})(cs))
;

cljs.core.async.__GT_t29004 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t29004(mult__$1,ch__$1,cs__$1,meta29005){
return (new cljs.core.async.t29004(mult__$1,ch__$1,cs__$1,meta29005));
});})(cs))
;

}

return (new cljs.core.async.t29004(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23577__auto___29225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto___29225,cs,m,dchan,dctr,done){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto___29225,cs,m,dchan,dctr,done){
return (function (state_29137){
var state_val_29138 = (state_29137[(1)]);
if((state_val_29138 === (7))){
var inst_29133 = (state_29137[(2)]);
var state_29137__$1 = state_29137;
var statearr_29139_29226 = state_29137__$1;
(statearr_29139_29226[(2)] = inst_29133);

(statearr_29139_29226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (20))){
var inst_29038 = (state_29137[(7)]);
var inst_29048 = cljs.core.first.call(null,inst_29038);
var inst_29049 = cljs.core.nth.call(null,inst_29048,(0),null);
var inst_29050 = cljs.core.nth.call(null,inst_29048,(1),null);
var state_29137__$1 = (function (){var statearr_29140 = state_29137;
(statearr_29140[(8)] = inst_29049);

return statearr_29140;
})();
if(cljs.core.truth_(inst_29050)){
var statearr_29141_29227 = state_29137__$1;
(statearr_29141_29227[(1)] = (22));

} else {
var statearr_29142_29228 = state_29137__$1;
(statearr_29142_29228[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (27))){
var inst_29009 = (state_29137[(9)]);
var inst_29085 = (state_29137[(10)]);
var inst_29080 = (state_29137[(11)]);
var inst_29078 = (state_29137[(12)]);
var inst_29085__$1 = cljs.core._nth.call(null,inst_29078,inst_29080);
var inst_29086 = cljs.core.async.put_BANG_.call(null,inst_29085__$1,inst_29009,done);
var state_29137__$1 = (function (){var statearr_29143 = state_29137;
(statearr_29143[(10)] = inst_29085__$1);

return statearr_29143;
})();
if(cljs.core.truth_(inst_29086)){
var statearr_29144_29229 = state_29137__$1;
(statearr_29144_29229[(1)] = (30));

} else {
var statearr_29145_29230 = state_29137__$1;
(statearr_29145_29230[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (1))){
var state_29137__$1 = state_29137;
var statearr_29146_29231 = state_29137__$1;
(statearr_29146_29231[(2)] = null);

(statearr_29146_29231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (24))){
var inst_29038 = (state_29137[(7)]);
var inst_29055 = (state_29137[(2)]);
var inst_29056 = cljs.core.next.call(null,inst_29038);
var inst_29018 = inst_29056;
var inst_29019 = null;
var inst_29020 = (0);
var inst_29021 = (0);
var state_29137__$1 = (function (){var statearr_29147 = state_29137;
(statearr_29147[(13)] = inst_29018);

(statearr_29147[(14)] = inst_29021);

(statearr_29147[(15)] = inst_29019);

(statearr_29147[(16)] = inst_29020);

(statearr_29147[(17)] = inst_29055);

return statearr_29147;
})();
var statearr_29148_29232 = state_29137__$1;
(statearr_29148_29232[(2)] = null);

(statearr_29148_29232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (39))){
var state_29137__$1 = state_29137;
var statearr_29152_29233 = state_29137__$1;
(statearr_29152_29233[(2)] = null);

(statearr_29152_29233[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (4))){
var inst_29009 = (state_29137[(9)]);
var inst_29009__$1 = (state_29137[(2)]);
var inst_29010 = (inst_29009__$1 == null);
var state_29137__$1 = (function (){var statearr_29153 = state_29137;
(statearr_29153[(9)] = inst_29009__$1);

return statearr_29153;
})();
if(cljs.core.truth_(inst_29010)){
var statearr_29154_29234 = state_29137__$1;
(statearr_29154_29234[(1)] = (5));

} else {
var statearr_29155_29235 = state_29137__$1;
(statearr_29155_29235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (15))){
var inst_29018 = (state_29137[(13)]);
var inst_29021 = (state_29137[(14)]);
var inst_29019 = (state_29137[(15)]);
var inst_29020 = (state_29137[(16)]);
var inst_29034 = (state_29137[(2)]);
var inst_29035 = (inst_29021 + (1));
var tmp29149 = inst_29018;
var tmp29150 = inst_29019;
var tmp29151 = inst_29020;
var inst_29018__$1 = tmp29149;
var inst_29019__$1 = tmp29150;
var inst_29020__$1 = tmp29151;
var inst_29021__$1 = inst_29035;
var state_29137__$1 = (function (){var statearr_29156 = state_29137;
(statearr_29156[(18)] = inst_29034);

(statearr_29156[(13)] = inst_29018__$1);

(statearr_29156[(14)] = inst_29021__$1);

(statearr_29156[(15)] = inst_29019__$1);

(statearr_29156[(16)] = inst_29020__$1);

return statearr_29156;
})();
var statearr_29157_29236 = state_29137__$1;
(statearr_29157_29236[(2)] = null);

(statearr_29157_29236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (21))){
var inst_29059 = (state_29137[(2)]);
var state_29137__$1 = state_29137;
var statearr_29161_29237 = state_29137__$1;
(statearr_29161_29237[(2)] = inst_29059);

(statearr_29161_29237[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (31))){
var inst_29085 = (state_29137[(10)]);
var inst_29089 = done.call(null,null);
var inst_29090 = cljs.core.async.untap_STAR_.call(null,m,inst_29085);
var state_29137__$1 = (function (){var statearr_29162 = state_29137;
(statearr_29162[(19)] = inst_29089);

return statearr_29162;
})();
var statearr_29163_29238 = state_29137__$1;
(statearr_29163_29238[(2)] = inst_29090);

(statearr_29163_29238[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (32))){
var inst_29080 = (state_29137[(11)]);
var inst_29078 = (state_29137[(12)]);
var inst_29077 = (state_29137[(20)]);
var inst_29079 = (state_29137[(21)]);
var inst_29092 = (state_29137[(2)]);
var inst_29093 = (inst_29080 + (1));
var tmp29158 = inst_29078;
var tmp29159 = inst_29077;
var tmp29160 = inst_29079;
var inst_29077__$1 = tmp29159;
var inst_29078__$1 = tmp29158;
var inst_29079__$1 = tmp29160;
var inst_29080__$1 = inst_29093;
var state_29137__$1 = (function (){var statearr_29164 = state_29137;
(statearr_29164[(11)] = inst_29080__$1);

(statearr_29164[(12)] = inst_29078__$1);

(statearr_29164[(20)] = inst_29077__$1);

(statearr_29164[(21)] = inst_29079__$1);

(statearr_29164[(22)] = inst_29092);

return statearr_29164;
})();
var statearr_29165_29239 = state_29137__$1;
(statearr_29165_29239[(2)] = null);

(statearr_29165_29239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (40))){
var inst_29105 = (state_29137[(23)]);
var inst_29109 = done.call(null,null);
var inst_29110 = cljs.core.async.untap_STAR_.call(null,m,inst_29105);
var state_29137__$1 = (function (){var statearr_29166 = state_29137;
(statearr_29166[(24)] = inst_29109);

return statearr_29166;
})();
var statearr_29167_29240 = state_29137__$1;
(statearr_29167_29240[(2)] = inst_29110);

(statearr_29167_29240[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (33))){
var inst_29096 = (state_29137[(25)]);
var inst_29098 = cljs.core.chunked_seq_QMARK_.call(null,inst_29096);
var state_29137__$1 = state_29137;
if(inst_29098){
var statearr_29168_29241 = state_29137__$1;
(statearr_29168_29241[(1)] = (36));

} else {
var statearr_29169_29242 = state_29137__$1;
(statearr_29169_29242[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (13))){
var inst_29028 = (state_29137[(26)]);
var inst_29031 = cljs.core.async.close_BANG_.call(null,inst_29028);
var state_29137__$1 = state_29137;
var statearr_29170_29243 = state_29137__$1;
(statearr_29170_29243[(2)] = inst_29031);

(statearr_29170_29243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (22))){
var inst_29049 = (state_29137[(8)]);
var inst_29052 = cljs.core.async.close_BANG_.call(null,inst_29049);
var state_29137__$1 = state_29137;
var statearr_29171_29244 = state_29137__$1;
(statearr_29171_29244[(2)] = inst_29052);

(statearr_29171_29244[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (36))){
var inst_29096 = (state_29137[(25)]);
var inst_29100 = cljs.core.chunk_first.call(null,inst_29096);
var inst_29101 = cljs.core.chunk_rest.call(null,inst_29096);
var inst_29102 = cljs.core.count.call(null,inst_29100);
var inst_29077 = inst_29101;
var inst_29078 = inst_29100;
var inst_29079 = inst_29102;
var inst_29080 = (0);
var state_29137__$1 = (function (){var statearr_29172 = state_29137;
(statearr_29172[(11)] = inst_29080);

(statearr_29172[(12)] = inst_29078);

(statearr_29172[(20)] = inst_29077);

(statearr_29172[(21)] = inst_29079);

return statearr_29172;
})();
var statearr_29173_29245 = state_29137__$1;
(statearr_29173_29245[(2)] = null);

(statearr_29173_29245[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (41))){
var inst_29096 = (state_29137[(25)]);
var inst_29112 = (state_29137[(2)]);
var inst_29113 = cljs.core.next.call(null,inst_29096);
var inst_29077 = inst_29113;
var inst_29078 = null;
var inst_29079 = (0);
var inst_29080 = (0);
var state_29137__$1 = (function (){var statearr_29174 = state_29137;
(statearr_29174[(11)] = inst_29080);

(statearr_29174[(27)] = inst_29112);

(statearr_29174[(12)] = inst_29078);

(statearr_29174[(20)] = inst_29077);

(statearr_29174[(21)] = inst_29079);

return statearr_29174;
})();
var statearr_29175_29246 = state_29137__$1;
(statearr_29175_29246[(2)] = null);

(statearr_29175_29246[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (43))){
var state_29137__$1 = state_29137;
var statearr_29176_29247 = state_29137__$1;
(statearr_29176_29247[(2)] = null);

(statearr_29176_29247[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (29))){
var inst_29121 = (state_29137[(2)]);
var state_29137__$1 = state_29137;
var statearr_29177_29248 = state_29137__$1;
(statearr_29177_29248[(2)] = inst_29121);

(statearr_29177_29248[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (44))){
var inst_29130 = (state_29137[(2)]);
var state_29137__$1 = (function (){var statearr_29178 = state_29137;
(statearr_29178[(28)] = inst_29130);

return statearr_29178;
})();
var statearr_29179_29249 = state_29137__$1;
(statearr_29179_29249[(2)] = null);

(statearr_29179_29249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (6))){
var inst_29069 = (state_29137[(29)]);
var inst_29068 = cljs.core.deref.call(null,cs);
var inst_29069__$1 = cljs.core.keys.call(null,inst_29068);
var inst_29070 = cljs.core.count.call(null,inst_29069__$1);
var inst_29071 = cljs.core.reset_BANG_.call(null,dctr,inst_29070);
var inst_29076 = cljs.core.seq.call(null,inst_29069__$1);
var inst_29077 = inst_29076;
var inst_29078 = null;
var inst_29079 = (0);
var inst_29080 = (0);
var state_29137__$1 = (function (){var statearr_29180 = state_29137;
(statearr_29180[(11)] = inst_29080);

(statearr_29180[(29)] = inst_29069__$1);

(statearr_29180[(12)] = inst_29078);

(statearr_29180[(30)] = inst_29071);

(statearr_29180[(20)] = inst_29077);

(statearr_29180[(21)] = inst_29079);

return statearr_29180;
})();
var statearr_29181_29250 = state_29137__$1;
(statearr_29181_29250[(2)] = null);

(statearr_29181_29250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (28))){
var inst_29096 = (state_29137[(25)]);
var inst_29077 = (state_29137[(20)]);
var inst_29096__$1 = cljs.core.seq.call(null,inst_29077);
var state_29137__$1 = (function (){var statearr_29182 = state_29137;
(statearr_29182[(25)] = inst_29096__$1);

return statearr_29182;
})();
if(inst_29096__$1){
var statearr_29183_29251 = state_29137__$1;
(statearr_29183_29251[(1)] = (33));

} else {
var statearr_29184_29252 = state_29137__$1;
(statearr_29184_29252[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (25))){
var inst_29080 = (state_29137[(11)]);
var inst_29079 = (state_29137[(21)]);
var inst_29082 = (inst_29080 < inst_29079);
var inst_29083 = inst_29082;
var state_29137__$1 = state_29137;
if(cljs.core.truth_(inst_29083)){
var statearr_29185_29253 = state_29137__$1;
(statearr_29185_29253[(1)] = (27));

} else {
var statearr_29186_29254 = state_29137__$1;
(statearr_29186_29254[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (34))){
var state_29137__$1 = state_29137;
var statearr_29187_29255 = state_29137__$1;
(statearr_29187_29255[(2)] = null);

(statearr_29187_29255[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (17))){
var state_29137__$1 = state_29137;
var statearr_29188_29256 = state_29137__$1;
(statearr_29188_29256[(2)] = null);

(statearr_29188_29256[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (3))){
var inst_29135 = (state_29137[(2)]);
var state_29137__$1 = state_29137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29137__$1,inst_29135);
} else {
if((state_val_29138 === (12))){
var inst_29064 = (state_29137[(2)]);
var state_29137__$1 = state_29137;
var statearr_29189_29257 = state_29137__$1;
(statearr_29189_29257[(2)] = inst_29064);

(statearr_29189_29257[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (2))){
var state_29137__$1 = state_29137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29137__$1,(4),ch);
} else {
if((state_val_29138 === (23))){
var state_29137__$1 = state_29137;
var statearr_29190_29258 = state_29137__$1;
(statearr_29190_29258[(2)] = null);

(statearr_29190_29258[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (35))){
var inst_29119 = (state_29137[(2)]);
var state_29137__$1 = state_29137;
var statearr_29191_29259 = state_29137__$1;
(statearr_29191_29259[(2)] = inst_29119);

(statearr_29191_29259[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (19))){
var inst_29038 = (state_29137[(7)]);
var inst_29042 = cljs.core.chunk_first.call(null,inst_29038);
var inst_29043 = cljs.core.chunk_rest.call(null,inst_29038);
var inst_29044 = cljs.core.count.call(null,inst_29042);
var inst_29018 = inst_29043;
var inst_29019 = inst_29042;
var inst_29020 = inst_29044;
var inst_29021 = (0);
var state_29137__$1 = (function (){var statearr_29192 = state_29137;
(statearr_29192[(13)] = inst_29018);

(statearr_29192[(14)] = inst_29021);

(statearr_29192[(15)] = inst_29019);

(statearr_29192[(16)] = inst_29020);

return statearr_29192;
})();
var statearr_29193_29260 = state_29137__$1;
(statearr_29193_29260[(2)] = null);

(statearr_29193_29260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (11))){
var inst_29018 = (state_29137[(13)]);
var inst_29038 = (state_29137[(7)]);
var inst_29038__$1 = cljs.core.seq.call(null,inst_29018);
var state_29137__$1 = (function (){var statearr_29194 = state_29137;
(statearr_29194[(7)] = inst_29038__$1);

return statearr_29194;
})();
if(inst_29038__$1){
var statearr_29195_29261 = state_29137__$1;
(statearr_29195_29261[(1)] = (16));

} else {
var statearr_29196_29262 = state_29137__$1;
(statearr_29196_29262[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (9))){
var inst_29066 = (state_29137[(2)]);
var state_29137__$1 = state_29137;
var statearr_29197_29263 = state_29137__$1;
(statearr_29197_29263[(2)] = inst_29066);

(statearr_29197_29263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (5))){
var inst_29016 = cljs.core.deref.call(null,cs);
var inst_29017 = cljs.core.seq.call(null,inst_29016);
var inst_29018 = inst_29017;
var inst_29019 = null;
var inst_29020 = (0);
var inst_29021 = (0);
var state_29137__$1 = (function (){var statearr_29198 = state_29137;
(statearr_29198[(13)] = inst_29018);

(statearr_29198[(14)] = inst_29021);

(statearr_29198[(15)] = inst_29019);

(statearr_29198[(16)] = inst_29020);

return statearr_29198;
})();
var statearr_29199_29264 = state_29137__$1;
(statearr_29199_29264[(2)] = null);

(statearr_29199_29264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (14))){
var state_29137__$1 = state_29137;
var statearr_29200_29265 = state_29137__$1;
(statearr_29200_29265[(2)] = null);

(statearr_29200_29265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (45))){
var inst_29127 = (state_29137[(2)]);
var state_29137__$1 = state_29137;
var statearr_29201_29266 = state_29137__$1;
(statearr_29201_29266[(2)] = inst_29127);

(statearr_29201_29266[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (26))){
var inst_29069 = (state_29137[(29)]);
var inst_29123 = (state_29137[(2)]);
var inst_29124 = cljs.core.seq.call(null,inst_29069);
var state_29137__$1 = (function (){var statearr_29202 = state_29137;
(statearr_29202[(31)] = inst_29123);

return statearr_29202;
})();
if(inst_29124){
var statearr_29203_29267 = state_29137__$1;
(statearr_29203_29267[(1)] = (42));

} else {
var statearr_29204_29268 = state_29137__$1;
(statearr_29204_29268[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (16))){
var inst_29038 = (state_29137[(7)]);
var inst_29040 = cljs.core.chunked_seq_QMARK_.call(null,inst_29038);
var state_29137__$1 = state_29137;
if(inst_29040){
var statearr_29205_29269 = state_29137__$1;
(statearr_29205_29269[(1)] = (19));

} else {
var statearr_29206_29270 = state_29137__$1;
(statearr_29206_29270[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (38))){
var inst_29116 = (state_29137[(2)]);
var state_29137__$1 = state_29137;
var statearr_29207_29271 = state_29137__$1;
(statearr_29207_29271[(2)] = inst_29116);

(statearr_29207_29271[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (30))){
var state_29137__$1 = state_29137;
var statearr_29208_29272 = state_29137__$1;
(statearr_29208_29272[(2)] = null);

(statearr_29208_29272[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (10))){
var inst_29021 = (state_29137[(14)]);
var inst_29019 = (state_29137[(15)]);
var inst_29027 = cljs.core._nth.call(null,inst_29019,inst_29021);
var inst_29028 = cljs.core.nth.call(null,inst_29027,(0),null);
var inst_29029 = cljs.core.nth.call(null,inst_29027,(1),null);
var state_29137__$1 = (function (){var statearr_29209 = state_29137;
(statearr_29209[(26)] = inst_29028);

return statearr_29209;
})();
if(cljs.core.truth_(inst_29029)){
var statearr_29210_29273 = state_29137__$1;
(statearr_29210_29273[(1)] = (13));

} else {
var statearr_29211_29274 = state_29137__$1;
(statearr_29211_29274[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (18))){
var inst_29062 = (state_29137[(2)]);
var state_29137__$1 = state_29137;
var statearr_29212_29275 = state_29137__$1;
(statearr_29212_29275[(2)] = inst_29062);

(statearr_29212_29275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (42))){
var state_29137__$1 = state_29137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29137__$1,(45),dchan);
} else {
if((state_val_29138 === (37))){
var inst_29105 = (state_29137[(23)]);
var inst_29009 = (state_29137[(9)]);
var inst_29096 = (state_29137[(25)]);
var inst_29105__$1 = cljs.core.first.call(null,inst_29096);
var inst_29106 = cljs.core.async.put_BANG_.call(null,inst_29105__$1,inst_29009,done);
var state_29137__$1 = (function (){var statearr_29213 = state_29137;
(statearr_29213[(23)] = inst_29105__$1);

return statearr_29213;
})();
if(cljs.core.truth_(inst_29106)){
var statearr_29214_29276 = state_29137__$1;
(statearr_29214_29276[(1)] = (39));

} else {
var statearr_29215_29277 = state_29137__$1;
(statearr_29215_29277[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29138 === (8))){
var inst_29021 = (state_29137[(14)]);
var inst_29020 = (state_29137[(16)]);
var inst_29023 = (inst_29021 < inst_29020);
var inst_29024 = inst_29023;
var state_29137__$1 = state_29137;
if(cljs.core.truth_(inst_29024)){
var statearr_29216_29278 = state_29137__$1;
(statearr_29216_29278[(1)] = (10));

} else {
var statearr_29217_29279 = state_29137__$1;
(statearr_29217_29279[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__23577__auto___29225,cs,m,dchan,dctr,done))
;
return ((function (switch__23515__auto__,c__23577__auto___29225,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23516__auto__ = null;
var cljs$core$async$mult_$_state_machine__23516__auto____0 = (function (){
var statearr_29221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29221[(0)] = cljs$core$async$mult_$_state_machine__23516__auto__);

(statearr_29221[(1)] = (1));

return statearr_29221;
});
var cljs$core$async$mult_$_state_machine__23516__auto____1 = (function (state_29137){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_29137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e29222){if((e29222 instanceof Object)){
var ex__23519__auto__ = e29222;
var statearr_29223_29280 = state_29137;
(statearr_29223_29280[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29281 = state_29137;
state_29137 = G__29281;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23516__auto__ = function(state_29137){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23516__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23516__auto____1.call(this,state_29137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23516__auto____0;
cljs$core$async$mult_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23516__auto____1;
return cljs$core$async$mult_$_state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto___29225,cs,m,dchan,dctr,done))
})();
var state__23579__auto__ = (function (){var statearr_29224 = f__23578__auto__.call(null);
(statearr_29224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto___29225);

return statearr_29224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto___29225,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__29283 = arguments.length;
switch (G__29283) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj29286 = {};
return obj29286;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__20555__auto__ = m;
if(and__20555__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__20555__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__21203__auto__ = (((m == null))?null:m);
return (function (){var or__20567__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__20555__auto__ = m;
if(and__20555__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__20555__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__21203__auto__ = (((m == null))?null:m);
return (function (){var or__20567__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__20555__auto__ = m;
if(and__20555__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__20555__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__21203__auto__ = (((m == null))?null:m);
return (function (){var or__20567__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__20555__auto__ = m;
if(and__20555__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__20555__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__21203__auto__ = (((m == null))?null:m);
return (function (){var or__20567__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__20555__auto__ = m;
if(and__20555__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__20555__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__21203__auto__ = (((m == null))?null:m);
return (function (){var or__20567__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__21607__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21607__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29291){
var map__29292 = p__29291;
var map__29292__$1 = ((cljs.core.seq_QMARK_.call(null,map__29292))?cljs.core.apply.call(null,cljs.core.hash_map,map__29292):map__29292);
var opts = map__29292__$1;
var statearr_29293_29296 = state;
(statearr_29293_29296[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__29292,map__29292__$1,opts){
return (function (val){
var statearr_29294_29297 = state;
(statearr_29294_29297[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29292,map__29292__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_29295_29298 = state;
(statearr_29295_29298[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29287){
var G__29288 = cljs.core.first.call(null,seq29287);
var seq29287__$1 = cljs.core.next.call(null,seq29287);
var G__29289 = cljs.core.first.call(null,seq29287__$1);
var seq29287__$2 = cljs.core.next.call(null,seq29287__$1);
var G__29290 = cljs.core.first.call(null,seq29287__$2);
var seq29287__$3 = cljs.core.next.call(null,seq29287__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29288,G__29289,G__29290,seq29287__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t29418 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29418 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29419){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29419 = meta29419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29420,meta29419__$1){
var self__ = this;
var _29420__$1 = this;
return (new cljs.core.async.t29418(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29419__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29418.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29420){
var self__ = this;
var _29420__$1 = this;
return self__.meta29419;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29418.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29418.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29418.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t29418.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29418.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29418.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29418.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29418.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29418.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29419","meta29419",-965696403,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29418.cljs$lang$type = true;

cljs.core.async.t29418.cljs$lang$ctorStr = "cljs.core.async/t29418";

cljs.core.async.t29418.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__21146__auto__,writer__21147__auto__,opt__21148__auto__){
return cljs.core._write.call(null,writer__21147__auto__,"cljs.core.async/t29418");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t29418 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t29418(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29419){
return (new cljs.core.async.t29418(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29419));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t29418(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23577__auto___29537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto___29537,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto___29537,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29490){
var state_val_29491 = (state_29490[(1)]);
if((state_val_29491 === (7))){
var inst_29434 = (state_29490[(7)]);
var inst_29439 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29434);
var state_29490__$1 = state_29490;
var statearr_29492_29538 = state_29490__$1;
(statearr_29492_29538[(2)] = inst_29439);

(statearr_29492_29538[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (20))){
var inst_29449 = (state_29490[(8)]);
var state_29490__$1 = state_29490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29490__$1,(23),out,inst_29449);
} else {
if((state_val_29491 === (1))){
var inst_29424 = (state_29490[(9)]);
var inst_29424__$1 = calc_state.call(null);
var inst_29425 = cljs.core.seq_QMARK_.call(null,inst_29424__$1);
var state_29490__$1 = (function (){var statearr_29493 = state_29490;
(statearr_29493[(9)] = inst_29424__$1);

return statearr_29493;
})();
if(inst_29425){
var statearr_29494_29539 = state_29490__$1;
(statearr_29494_29539[(1)] = (2));

} else {
var statearr_29495_29540 = state_29490__$1;
(statearr_29495_29540[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (24))){
var inst_29442 = (state_29490[(10)]);
var inst_29434 = inst_29442;
var state_29490__$1 = (function (){var statearr_29496 = state_29490;
(statearr_29496[(7)] = inst_29434);

return statearr_29496;
})();
var statearr_29497_29541 = state_29490__$1;
(statearr_29497_29541[(2)] = null);

(statearr_29497_29541[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (4))){
var inst_29424 = (state_29490[(9)]);
var inst_29430 = (state_29490[(2)]);
var inst_29431 = cljs.core.get.call(null,inst_29430,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29432 = cljs.core.get.call(null,inst_29430,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29433 = cljs.core.get.call(null,inst_29430,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29434 = inst_29424;
var state_29490__$1 = (function (){var statearr_29498 = state_29490;
(statearr_29498[(11)] = inst_29431);

(statearr_29498[(12)] = inst_29433);

(statearr_29498[(13)] = inst_29432);

(statearr_29498[(7)] = inst_29434);

return statearr_29498;
})();
var statearr_29499_29542 = state_29490__$1;
(statearr_29499_29542[(2)] = null);

(statearr_29499_29542[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (15))){
var state_29490__$1 = state_29490;
var statearr_29500_29543 = state_29490__$1;
(statearr_29500_29543[(2)] = null);

(statearr_29500_29543[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (21))){
var inst_29442 = (state_29490[(10)]);
var inst_29434 = inst_29442;
var state_29490__$1 = (function (){var statearr_29501 = state_29490;
(statearr_29501[(7)] = inst_29434);

return statearr_29501;
})();
var statearr_29502_29544 = state_29490__$1;
(statearr_29502_29544[(2)] = null);

(statearr_29502_29544[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (13))){
var inst_29486 = (state_29490[(2)]);
var state_29490__$1 = state_29490;
var statearr_29503_29545 = state_29490__$1;
(statearr_29503_29545[(2)] = inst_29486);

(statearr_29503_29545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (22))){
var inst_29484 = (state_29490[(2)]);
var state_29490__$1 = state_29490;
var statearr_29504_29546 = state_29490__$1;
(statearr_29504_29546[(2)] = inst_29484);

(statearr_29504_29546[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (6))){
var inst_29488 = (state_29490[(2)]);
var state_29490__$1 = state_29490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29490__$1,inst_29488);
} else {
if((state_val_29491 === (25))){
var state_29490__$1 = state_29490;
var statearr_29505_29547 = state_29490__$1;
(statearr_29505_29547[(2)] = null);

(statearr_29505_29547[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (17))){
var inst_29464 = (state_29490[(14)]);
var state_29490__$1 = state_29490;
var statearr_29506_29548 = state_29490__$1;
(statearr_29506_29548[(2)] = inst_29464);

(statearr_29506_29548[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (3))){
var inst_29424 = (state_29490[(9)]);
var state_29490__$1 = state_29490;
var statearr_29507_29549 = state_29490__$1;
(statearr_29507_29549[(2)] = inst_29424);

(statearr_29507_29549[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (12))){
var inst_29450 = (state_29490[(15)]);
var inst_29443 = (state_29490[(16)]);
var inst_29464 = (state_29490[(14)]);
var inst_29464__$1 = inst_29443.call(null,inst_29450);
var state_29490__$1 = (function (){var statearr_29508 = state_29490;
(statearr_29508[(14)] = inst_29464__$1);

return statearr_29508;
})();
if(cljs.core.truth_(inst_29464__$1)){
var statearr_29509_29550 = state_29490__$1;
(statearr_29509_29550[(1)] = (17));

} else {
var statearr_29510_29551 = state_29490__$1;
(statearr_29510_29551[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (2))){
var inst_29424 = (state_29490[(9)]);
var inst_29427 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29424);
var state_29490__$1 = state_29490;
var statearr_29511_29552 = state_29490__$1;
(statearr_29511_29552[(2)] = inst_29427);

(statearr_29511_29552[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (23))){
var inst_29475 = (state_29490[(2)]);
var state_29490__$1 = state_29490;
if(cljs.core.truth_(inst_29475)){
var statearr_29512_29553 = state_29490__$1;
(statearr_29512_29553[(1)] = (24));

} else {
var statearr_29513_29554 = state_29490__$1;
(statearr_29513_29554[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (19))){
var inst_29472 = (state_29490[(2)]);
var state_29490__$1 = state_29490;
if(cljs.core.truth_(inst_29472)){
var statearr_29514_29555 = state_29490__$1;
(statearr_29514_29555[(1)] = (20));

} else {
var statearr_29515_29556 = state_29490__$1;
(statearr_29515_29556[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (11))){
var inst_29449 = (state_29490[(8)]);
var inst_29455 = (inst_29449 == null);
var state_29490__$1 = state_29490;
if(cljs.core.truth_(inst_29455)){
var statearr_29516_29557 = state_29490__$1;
(statearr_29516_29557[(1)] = (14));

} else {
var statearr_29517_29558 = state_29490__$1;
(statearr_29517_29558[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (9))){
var inst_29442 = (state_29490[(10)]);
var inst_29442__$1 = (state_29490[(2)]);
var inst_29443 = cljs.core.get.call(null,inst_29442__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29444 = cljs.core.get.call(null,inst_29442__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29445 = cljs.core.get.call(null,inst_29442__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29490__$1 = (function (){var statearr_29518 = state_29490;
(statearr_29518[(10)] = inst_29442__$1);

(statearr_29518[(16)] = inst_29443);

(statearr_29518[(17)] = inst_29444);

return statearr_29518;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29490__$1,(10),inst_29445);
} else {
if((state_val_29491 === (5))){
var inst_29434 = (state_29490[(7)]);
var inst_29437 = cljs.core.seq_QMARK_.call(null,inst_29434);
var state_29490__$1 = state_29490;
if(inst_29437){
var statearr_29519_29559 = state_29490__$1;
(statearr_29519_29559[(1)] = (7));

} else {
var statearr_29520_29560 = state_29490__$1;
(statearr_29520_29560[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (14))){
var inst_29450 = (state_29490[(15)]);
var inst_29457 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29450);
var state_29490__$1 = state_29490;
var statearr_29521_29561 = state_29490__$1;
(statearr_29521_29561[(2)] = inst_29457);

(statearr_29521_29561[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (26))){
var inst_29480 = (state_29490[(2)]);
var state_29490__$1 = state_29490;
var statearr_29522_29562 = state_29490__$1;
(statearr_29522_29562[(2)] = inst_29480);

(statearr_29522_29562[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (16))){
var inst_29460 = (state_29490[(2)]);
var inst_29461 = calc_state.call(null);
var inst_29434 = inst_29461;
var state_29490__$1 = (function (){var statearr_29523 = state_29490;
(statearr_29523[(7)] = inst_29434);

(statearr_29523[(18)] = inst_29460);

return statearr_29523;
})();
var statearr_29524_29563 = state_29490__$1;
(statearr_29524_29563[(2)] = null);

(statearr_29524_29563[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (10))){
var inst_29449 = (state_29490[(8)]);
var inst_29450 = (state_29490[(15)]);
var inst_29448 = (state_29490[(2)]);
var inst_29449__$1 = cljs.core.nth.call(null,inst_29448,(0),null);
var inst_29450__$1 = cljs.core.nth.call(null,inst_29448,(1),null);
var inst_29451 = (inst_29449__$1 == null);
var inst_29452 = cljs.core._EQ_.call(null,inst_29450__$1,change);
var inst_29453 = (inst_29451) || (inst_29452);
var state_29490__$1 = (function (){var statearr_29525 = state_29490;
(statearr_29525[(8)] = inst_29449__$1);

(statearr_29525[(15)] = inst_29450__$1);

return statearr_29525;
})();
if(cljs.core.truth_(inst_29453)){
var statearr_29526_29564 = state_29490__$1;
(statearr_29526_29564[(1)] = (11));

} else {
var statearr_29527_29565 = state_29490__$1;
(statearr_29527_29565[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (18))){
var inst_29450 = (state_29490[(15)]);
var inst_29443 = (state_29490[(16)]);
var inst_29444 = (state_29490[(17)]);
var inst_29467 = cljs.core.empty_QMARK_.call(null,inst_29443);
var inst_29468 = inst_29444.call(null,inst_29450);
var inst_29469 = cljs.core.not.call(null,inst_29468);
var inst_29470 = (inst_29467) && (inst_29469);
var state_29490__$1 = state_29490;
var statearr_29528_29566 = state_29490__$1;
(statearr_29528_29566[(2)] = inst_29470);

(statearr_29528_29566[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29491 === (8))){
var inst_29434 = (state_29490[(7)]);
var state_29490__$1 = state_29490;
var statearr_29529_29567 = state_29490__$1;
(statearr_29529_29567[(2)] = inst_29434);

(statearr_29529_29567[(1)] = (9));


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
});})(c__23577__auto___29537,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23515__auto__,c__23577__auto___29537,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23516__auto__ = null;
var cljs$core$async$mix_$_state_machine__23516__auto____0 = (function (){
var statearr_29533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29533[(0)] = cljs$core$async$mix_$_state_machine__23516__auto__);

(statearr_29533[(1)] = (1));

return statearr_29533;
});
var cljs$core$async$mix_$_state_machine__23516__auto____1 = (function (state_29490){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_29490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e29534){if((e29534 instanceof Object)){
var ex__23519__auto__ = e29534;
var statearr_29535_29568 = state_29490;
(statearr_29535_29568[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29569 = state_29490;
state_29490 = G__29569;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23516__auto__ = function(state_29490){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23516__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23516__auto____1.call(this,state_29490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23516__auto____0;
cljs$core$async$mix_$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23516__auto____1;
return cljs$core$async$mix_$_state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto___29537,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23579__auto__ = (function (){var statearr_29536 = f__23578__auto__.call(null);
(statearr_29536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto___29537);

return statearr_29536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto___29537,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj29571 = {};
return obj29571;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__20555__auto__ = p;
if(and__20555__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__20555__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__21203__auto__ = (((p == null))?null:p);
return (function (){var or__20567__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__20555__auto__ = p;
if(and__20555__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__20555__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__21203__auto__ = (((p == null))?null:p);
return (function (){var or__20567__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__29573 = arguments.length;
switch (G__29573) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__20555__auto__ = p;
if(and__20555__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__20555__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__21203__auto__ = (((p == null))?null:p);
return (function (){var or__20567__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__20555__auto__ = p;
if(and__20555__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__20555__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__21203__auto__ = (((p == null))?null:p);
return (function (){var or__20567__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21203__auto__)]);
if(or__20567__auto__){
return or__20567__auto__;
} else {
var or__20567__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__20567__auto____$1){
return or__20567__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__29577 = arguments.length;
switch (G__29577) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20567__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20567__auto__)){
return or__20567__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20567__auto__,mults){
return (function (p1__29575_SHARP_){
if(cljs.core.truth_(p1__29575_SHARP_.call(null,topic))){
return p1__29575_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29575_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20567__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t29578 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29578 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29579){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29579 = meta29579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29580,meta29579__$1){
var self__ = this;
var _29580__$1 = this;
return (new cljs.core.async.t29578(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29579__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t29578.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29580){
var self__ = this;
var _29580__$1 = this;
return self__.meta29579;
});})(mults,ensure_mult))
;

cljs.core.async.t29578.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29578.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t29578.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t29578.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t29578.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t29578.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t29578.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t29578.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29579","meta29579",517502015,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t29578.cljs$lang$type = true;

cljs.core.async.t29578.cljs$lang$ctorStr = "cljs.core.async/t29578";

cljs.core.async.t29578.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__21146__auto__,writer__21147__auto__,opt__21148__auto__){
return cljs.core._write.call(null,writer__21147__auto__,"cljs.core.async/t29578");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t29578 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t29578(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29579){
return (new cljs.core.async.t29578(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29579));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t29578(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23577__auto___29701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto___29701,mults,ensure_mult,p){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto___29701,mults,ensure_mult,p){
return (function (state_29652){
var state_val_29653 = (state_29652[(1)]);
if((state_val_29653 === (7))){
var inst_29648 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
var statearr_29654_29702 = state_29652__$1;
(statearr_29654_29702[(2)] = inst_29648);

(statearr_29654_29702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (20))){
var state_29652__$1 = state_29652;
var statearr_29655_29703 = state_29652__$1;
(statearr_29655_29703[(2)] = null);

(statearr_29655_29703[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (1))){
var state_29652__$1 = state_29652;
var statearr_29656_29704 = state_29652__$1;
(statearr_29656_29704[(2)] = null);

(statearr_29656_29704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (24))){
var inst_29631 = (state_29652[(7)]);
var inst_29640 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29631);
var state_29652__$1 = state_29652;
var statearr_29657_29705 = state_29652__$1;
(statearr_29657_29705[(2)] = inst_29640);

(statearr_29657_29705[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (4))){
var inst_29583 = (state_29652[(8)]);
var inst_29583__$1 = (state_29652[(2)]);
var inst_29584 = (inst_29583__$1 == null);
var state_29652__$1 = (function (){var statearr_29658 = state_29652;
(statearr_29658[(8)] = inst_29583__$1);

return statearr_29658;
})();
if(cljs.core.truth_(inst_29584)){
var statearr_29659_29706 = state_29652__$1;
(statearr_29659_29706[(1)] = (5));

} else {
var statearr_29660_29707 = state_29652__$1;
(statearr_29660_29707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (15))){
var inst_29625 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
var statearr_29661_29708 = state_29652__$1;
(statearr_29661_29708[(2)] = inst_29625);

(statearr_29661_29708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (21))){
var inst_29645 = (state_29652[(2)]);
var state_29652__$1 = (function (){var statearr_29662 = state_29652;
(statearr_29662[(9)] = inst_29645);

return statearr_29662;
})();
var statearr_29663_29709 = state_29652__$1;
(statearr_29663_29709[(2)] = null);

(statearr_29663_29709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (13))){
var inst_29607 = (state_29652[(10)]);
var inst_29609 = cljs.core.chunked_seq_QMARK_.call(null,inst_29607);
var state_29652__$1 = state_29652;
if(inst_29609){
var statearr_29664_29710 = state_29652__$1;
(statearr_29664_29710[(1)] = (16));

} else {
var statearr_29665_29711 = state_29652__$1;
(statearr_29665_29711[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (22))){
var inst_29637 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
if(cljs.core.truth_(inst_29637)){
var statearr_29666_29712 = state_29652__$1;
(statearr_29666_29712[(1)] = (23));

} else {
var statearr_29667_29713 = state_29652__$1;
(statearr_29667_29713[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (6))){
var inst_29633 = (state_29652[(11)]);
var inst_29631 = (state_29652[(7)]);
var inst_29583 = (state_29652[(8)]);
var inst_29631__$1 = topic_fn.call(null,inst_29583);
var inst_29632 = cljs.core.deref.call(null,mults);
var inst_29633__$1 = cljs.core.get.call(null,inst_29632,inst_29631__$1);
var state_29652__$1 = (function (){var statearr_29668 = state_29652;
(statearr_29668[(11)] = inst_29633__$1);

(statearr_29668[(7)] = inst_29631__$1);

return statearr_29668;
})();
if(cljs.core.truth_(inst_29633__$1)){
var statearr_29669_29714 = state_29652__$1;
(statearr_29669_29714[(1)] = (19));

} else {
var statearr_29670_29715 = state_29652__$1;
(statearr_29670_29715[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (25))){
var inst_29642 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
var statearr_29671_29716 = state_29652__$1;
(statearr_29671_29716[(2)] = inst_29642);

(statearr_29671_29716[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (17))){
var inst_29607 = (state_29652[(10)]);
var inst_29616 = cljs.core.first.call(null,inst_29607);
var inst_29617 = cljs.core.async.muxch_STAR_.call(null,inst_29616);
var inst_29618 = cljs.core.async.close_BANG_.call(null,inst_29617);
var inst_29619 = cljs.core.next.call(null,inst_29607);
var inst_29593 = inst_29619;
var inst_29594 = null;
var inst_29595 = (0);
var inst_29596 = (0);
var state_29652__$1 = (function (){var statearr_29672 = state_29652;
(statearr_29672[(12)] = inst_29618);

(statearr_29672[(13)] = inst_29596);

(statearr_29672[(14)] = inst_29593);

(statearr_29672[(15)] = inst_29594);

(statearr_29672[(16)] = inst_29595);

return statearr_29672;
})();
var statearr_29673_29717 = state_29652__$1;
(statearr_29673_29717[(2)] = null);

(statearr_29673_29717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (3))){
var inst_29650 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29652__$1,inst_29650);
} else {
if((state_val_29653 === (12))){
var inst_29627 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
var statearr_29674_29718 = state_29652__$1;
(statearr_29674_29718[(2)] = inst_29627);

(statearr_29674_29718[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (2))){
var state_29652__$1 = state_29652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29652__$1,(4),ch);
} else {
if((state_val_29653 === (23))){
var state_29652__$1 = state_29652;
var statearr_29675_29719 = state_29652__$1;
(statearr_29675_29719[(2)] = null);

(statearr_29675_29719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (19))){
var inst_29633 = (state_29652[(11)]);
var inst_29583 = (state_29652[(8)]);
var inst_29635 = cljs.core.async.muxch_STAR_.call(null,inst_29633);
var state_29652__$1 = state_29652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29652__$1,(22),inst_29635,inst_29583);
} else {
if((state_val_29653 === (11))){
var inst_29593 = (state_29652[(14)]);
var inst_29607 = (state_29652[(10)]);
var inst_29607__$1 = cljs.core.seq.call(null,inst_29593);
var state_29652__$1 = (function (){var statearr_29676 = state_29652;
(statearr_29676[(10)] = inst_29607__$1);

return statearr_29676;
})();
if(inst_29607__$1){
var statearr_29677_29720 = state_29652__$1;
(statearr_29677_29720[(1)] = (13));

} else {
var statearr_29678_29721 = state_29652__$1;
(statearr_29678_29721[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (9))){
var inst_29629 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
var statearr_29679_29722 = state_29652__$1;
(statearr_29679_29722[(2)] = inst_29629);

(statearr_29679_29722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (5))){
var inst_29590 = cljs.core.deref.call(null,mults);
var inst_29591 = cljs.core.vals.call(null,inst_29590);
var inst_29592 = cljs.core.seq.call(null,inst_29591);
var inst_29593 = inst_29592;
var inst_29594 = null;
var inst_29595 = (0);
var inst_29596 = (0);
var state_29652__$1 = (function (){var statearr_29680 = state_29652;
(statearr_29680[(13)] = inst_29596);

(statearr_29680[(14)] = inst_29593);

(statearr_29680[(15)] = inst_29594);

(statearr_29680[(16)] = inst_29595);

return statearr_29680;
})();
var statearr_29681_29723 = state_29652__$1;
(statearr_29681_29723[(2)] = null);

(statearr_29681_29723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (14))){
var state_29652__$1 = state_29652;
var statearr_29685_29724 = state_29652__$1;
(statearr_29685_29724[(2)] = null);

(statearr_29685_29724[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (16))){
var inst_29607 = (state_29652[(10)]);
var inst_29611 = cljs.core.chunk_first.call(null,inst_29607);
var inst_29612 = cljs.core.chunk_rest.call(null,inst_29607);
var inst_29613 = cljs.core.count.call(null,inst_29611);
var inst_29593 = inst_29612;
var inst_29594 = inst_29611;
var inst_29595 = inst_29613;
var inst_29596 = (0);
var state_29652__$1 = (function (){var statearr_29686 = state_29652;
(statearr_29686[(13)] = inst_29596);

(statearr_29686[(14)] = inst_29593);

(statearr_29686[(15)] = inst_29594);

(statearr_29686[(16)] = inst_29595);

return statearr_29686;
})();
var statearr_29687_29725 = state_29652__$1;
(statearr_29687_29725[(2)] = null);

(statearr_29687_29725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (10))){
var inst_29596 = (state_29652[(13)]);
var inst_29593 = (state_29652[(14)]);
var inst_29594 = (state_29652[(15)]);
var inst_29595 = (state_29652[(16)]);
var inst_29601 = cljs.core._nth.call(null,inst_29594,inst_29596);
var inst_29602 = cljs.core.async.muxch_STAR_.call(null,inst_29601);
var inst_29603 = cljs.core.async.close_BANG_.call(null,inst_29602);
var inst_29604 = (inst_29596 + (1));
var tmp29682 = inst_29593;
var tmp29683 = inst_29594;
var tmp29684 = inst_29595;
var inst_29593__$1 = tmp29682;
var inst_29594__$1 = tmp29683;
var inst_29595__$1 = tmp29684;
var inst_29596__$1 = inst_29604;
var state_29652__$1 = (function (){var statearr_29688 = state_29652;
(statearr_29688[(17)] = inst_29603);

(statearr_29688[(13)] = inst_29596__$1);

(statearr_29688[(14)] = inst_29593__$1);

(statearr_29688[(15)] = inst_29594__$1);

(statearr_29688[(16)] = inst_29595__$1);

return statearr_29688;
})();
var statearr_29689_29726 = state_29652__$1;
(statearr_29689_29726[(2)] = null);

(statearr_29689_29726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (18))){
var inst_29622 = (state_29652[(2)]);
var state_29652__$1 = state_29652;
var statearr_29690_29727 = state_29652__$1;
(statearr_29690_29727[(2)] = inst_29622);

(statearr_29690_29727[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29653 === (8))){
var inst_29596 = (state_29652[(13)]);
var inst_29595 = (state_29652[(16)]);
var inst_29598 = (inst_29596 < inst_29595);
var inst_29599 = inst_29598;
var state_29652__$1 = state_29652;
if(cljs.core.truth_(inst_29599)){
var statearr_29691_29728 = state_29652__$1;
(statearr_29691_29728[(1)] = (10));

} else {
var statearr_29692_29729 = state_29652__$1;
(statearr_29692_29729[(1)] = (11));

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
});})(c__23577__auto___29701,mults,ensure_mult,p))
;
return ((function (switch__23515__auto__,c__23577__auto___29701,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23516__auto__ = null;
var cljs$core$async$state_machine__23516__auto____0 = (function (){
var statearr_29696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29696[(0)] = cljs$core$async$state_machine__23516__auto__);

(statearr_29696[(1)] = (1));

return statearr_29696;
});
var cljs$core$async$state_machine__23516__auto____1 = (function (state_29652){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_29652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e29697){if((e29697 instanceof Object)){
var ex__23519__auto__ = e29697;
var statearr_29698_29730 = state_29652;
(statearr_29698_29730[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29731 = state_29652;
state_29652 = G__29731;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
cljs$core$async$state_machine__23516__auto__ = function(state_29652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23516__auto____1.call(this,state_29652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23516__auto____0;
cljs$core$async$state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23516__auto____1;
return cljs$core$async$state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto___29701,mults,ensure_mult,p))
})();
var state__23579__auto__ = (function (){var statearr_29699 = f__23578__auto__.call(null);
(statearr_29699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto___29701);

return statearr_29699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto___29701,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__29733 = arguments.length;
switch (G__29733) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__29736 = arguments.length;
switch (G__29736) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__29739 = arguments.length;
switch (G__29739) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23577__auto___29809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto___29809,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto___29809,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29778){
var state_val_29779 = (state_29778[(1)]);
if((state_val_29779 === (7))){
var state_29778__$1 = state_29778;
var statearr_29780_29810 = state_29778__$1;
(statearr_29780_29810[(2)] = null);

(statearr_29780_29810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29779 === (1))){
var state_29778__$1 = state_29778;
var statearr_29781_29811 = state_29778__$1;
(statearr_29781_29811[(2)] = null);

(statearr_29781_29811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29779 === (4))){
var inst_29742 = (state_29778[(7)]);
var inst_29744 = (inst_29742 < cnt);
var state_29778__$1 = state_29778;
if(cljs.core.truth_(inst_29744)){
var statearr_29782_29812 = state_29778__$1;
(statearr_29782_29812[(1)] = (6));

} else {
var statearr_29783_29813 = state_29778__$1;
(statearr_29783_29813[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29779 === (15))){
var inst_29774 = (state_29778[(2)]);
var state_29778__$1 = state_29778;
var statearr_29784_29814 = state_29778__$1;
(statearr_29784_29814[(2)] = inst_29774);

(statearr_29784_29814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29779 === (13))){
var inst_29767 = cljs.core.async.close_BANG_.call(null,out);
var state_29778__$1 = state_29778;
var statearr_29785_29815 = state_29778__$1;
(statearr_29785_29815[(2)] = inst_29767);

(statearr_29785_29815[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29779 === (6))){
var state_29778__$1 = state_29778;
var statearr_29786_29816 = state_29778__$1;
(statearr_29786_29816[(2)] = null);

(statearr_29786_29816[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29779 === (3))){
var inst_29776 = (state_29778[(2)]);
var state_29778__$1 = state_29778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29778__$1,inst_29776);
} else {
if((state_val_29779 === (12))){
var inst_29764 = (state_29778[(8)]);
var inst_29764__$1 = (state_29778[(2)]);
var inst_29765 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29764__$1);
var state_29778__$1 = (function (){var statearr_29787 = state_29778;
(statearr_29787[(8)] = inst_29764__$1);

return statearr_29787;
})();
if(cljs.core.truth_(inst_29765)){
var statearr_29788_29817 = state_29778__$1;
(statearr_29788_29817[(1)] = (13));

} else {
var statearr_29789_29818 = state_29778__$1;
(statearr_29789_29818[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29779 === (2))){
var inst_29741 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29742 = (0);
var state_29778__$1 = (function (){var statearr_29790 = state_29778;
(statearr_29790[(9)] = inst_29741);

(statearr_29790[(7)] = inst_29742);

return statearr_29790;
})();
var statearr_29791_29819 = state_29778__$1;
(statearr_29791_29819[(2)] = null);

(statearr_29791_29819[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29779 === (11))){
var inst_29742 = (state_29778[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29778,(10),Object,null,(9));
var inst_29751 = chs__$1.call(null,inst_29742);
var inst_29752 = done.call(null,inst_29742);
var inst_29753 = cljs.core.async.take_BANG_.call(null,inst_29751,inst_29752);
var state_29778__$1 = state_29778;
var statearr_29792_29820 = state_29778__$1;
(statearr_29792_29820[(2)] = inst_29753);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29778__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29779 === (9))){
var inst_29742 = (state_29778[(7)]);
var inst_29755 = (state_29778[(2)]);
var inst_29756 = (inst_29742 + (1));
var inst_29742__$1 = inst_29756;
var state_29778__$1 = (function (){var statearr_29793 = state_29778;
(statearr_29793[(10)] = inst_29755);

(statearr_29793[(7)] = inst_29742__$1);

return statearr_29793;
})();
var statearr_29794_29821 = state_29778__$1;
(statearr_29794_29821[(2)] = null);

(statearr_29794_29821[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29779 === (5))){
var inst_29762 = (state_29778[(2)]);
var state_29778__$1 = (function (){var statearr_29795 = state_29778;
(statearr_29795[(11)] = inst_29762);

return statearr_29795;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29778__$1,(12),dchan);
} else {
if((state_val_29779 === (14))){
var inst_29764 = (state_29778[(8)]);
var inst_29769 = cljs.core.apply.call(null,f,inst_29764);
var state_29778__$1 = state_29778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29778__$1,(16),out,inst_29769);
} else {
if((state_val_29779 === (16))){
var inst_29771 = (state_29778[(2)]);
var state_29778__$1 = (function (){var statearr_29796 = state_29778;
(statearr_29796[(12)] = inst_29771);

return statearr_29796;
})();
var statearr_29797_29822 = state_29778__$1;
(statearr_29797_29822[(2)] = null);

(statearr_29797_29822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29779 === (10))){
var inst_29746 = (state_29778[(2)]);
var inst_29747 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29778__$1 = (function (){var statearr_29798 = state_29778;
(statearr_29798[(13)] = inst_29746);

return statearr_29798;
})();
var statearr_29799_29823 = state_29778__$1;
(statearr_29799_29823[(2)] = inst_29747);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29778__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29779 === (8))){
var inst_29760 = (state_29778[(2)]);
var state_29778__$1 = state_29778;
var statearr_29800_29824 = state_29778__$1;
(statearr_29800_29824[(2)] = inst_29760);

(statearr_29800_29824[(1)] = (5));


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
});})(c__23577__auto___29809,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23515__auto__,c__23577__auto___29809,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23516__auto__ = null;
var cljs$core$async$state_machine__23516__auto____0 = (function (){
var statearr_29804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29804[(0)] = cljs$core$async$state_machine__23516__auto__);

(statearr_29804[(1)] = (1));

return statearr_29804;
});
var cljs$core$async$state_machine__23516__auto____1 = (function (state_29778){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_29778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e29805){if((e29805 instanceof Object)){
var ex__23519__auto__ = e29805;
var statearr_29806_29825 = state_29778;
(statearr_29806_29825[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29826 = state_29778;
state_29778 = G__29826;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
cljs$core$async$state_machine__23516__auto__ = function(state_29778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23516__auto____1.call(this,state_29778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23516__auto____0;
cljs$core$async$state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23516__auto____1;
return cljs$core$async$state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto___29809,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23579__auto__ = (function (){var statearr_29807 = f__23578__auto__.call(null);
(statearr_29807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto___29809);

return statearr_29807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto___29809,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__29829 = arguments.length;
switch (G__29829) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23577__auto___29884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto___29884,out){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto___29884,out){
return (function (state_29859){
var state_val_29860 = (state_29859[(1)]);
if((state_val_29860 === (7))){
var inst_29838 = (state_29859[(7)]);
var inst_29839 = (state_29859[(8)]);
var inst_29838__$1 = (state_29859[(2)]);
var inst_29839__$1 = cljs.core.nth.call(null,inst_29838__$1,(0),null);
var inst_29840 = cljs.core.nth.call(null,inst_29838__$1,(1),null);
var inst_29841 = (inst_29839__$1 == null);
var state_29859__$1 = (function (){var statearr_29861 = state_29859;
(statearr_29861[(7)] = inst_29838__$1);

(statearr_29861[(8)] = inst_29839__$1);

(statearr_29861[(9)] = inst_29840);

return statearr_29861;
})();
if(cljs.core.truth_(inst_29841)){
var statearr_29862_29885 = state_29859__$1;
(statearr_29862_29885[(1)] = (8));

} else {
var statearr_29863_29886 = state_29859__$1;
(statearr_29863_29886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (1))){
var inst_29830 = cljs.core.vec.call(null,chs);
var inst_29831 = inst_29830;
var state_29859__$1 = (function (){var statearr_29864 = state_29859;
(statearr_29864[(10)] = inst_29831);

return statearr_29864;
})();
var statearr_29865_29887 = state_29859__$1;
(statearr_29865_29887[(2)] = null);

(statearr_29865_29887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (4))){
var inst_29831 = (state_29859[(10)]);
var state_29859__$1 = state_29859;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29859__$1,(7),inst_29831);
} else {
if((state_val_29860 === (6))){
var inst_29855 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29866_29888 = state_29859__$1;
(statearr_29866_29888[(2)] = inst_29855);

(statearr_29866_29888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (3))){
var inst_29857 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29859__$1,inst_29857);
} else {
if((state_val_29860 === (2))){
var inst_29831 = (state_29859[(10)]);
var inst_29833 = cljs.core.count.call(null,inst_29831);
var inst_29834 = (inst_29833 > (0));
var state_29859__$1 = state_29859;
if(cljs.core.truth_(inst_29834)){
var statearr_29868_29889 = state_29859__$1;
(statearr_29868_29889[(1)] = (4));

} else {
var statearr_29869_29890 = state_29859__$1;
(statearr_29869_29890[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (11))){
var inst_29831 = (state_29859[(10)]);
var inst_29848 = (state_29859[(2)]);
var tmp29867 = inst_29831;
var inst_29831__$1 = tmp29867;
var state_29859__$1 = (function (){var statearr_29870 = state_29859;
(statearr_29870[(11)] = inst_29848);

(statearr_29870[(10)] = inst_29831__$1);

return statearr_29870;
})();
var statearr_29871_29891 = state_29859__$1;
(statearr_29871_29891[(2)] = null);

(statearr_29871_29891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (9))){
var inst_29839 = (state_29859[(8)]);
var state_29859__$1 = state_29859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29859__$1,(11),out,inst_29839);
} else {
if((state_val_29860 === (5))){
var inst_29853 = cljs.core.async.close_BANG_.call(null,out);
var state_29859__$1 = state_29859;
var statearr_29872_29892 = state_29859__$1;
(statearr_29872_29892[(2)] = inst_29853);

(statearr_29872_29892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (10))){
var inst_29851 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29873_29893 = state_29859__$1;
(statearr_29873_29893[(2)] = inst_29851);

(statearr_29873_29893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (8))){
var inst_29831 = (state_29859[(10)]);
var inst_29838 = (state_29859[(7)]);
var inst_29839 = (state_29859[(8)]);
var inst_29840 = (state_29859[(9)]);
var inst_29843 = (function (){var cs = inst_29831;
var vec__29836 = inst_29838;
var v = inst_29839;
var c = inst_29840;
return ((function (cs,vec__29836,v,c,inst_29831,inst_29838,inst_29839,inst_29840,state_val_29860,c__23577__auto___29884,out){
return (function (p1__29827_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29827_SHARP_);
});
;})(cs,vec__29836,v,c,inst_29831,inst_29838,inst_29839,inst_29840,state_val_29860,c__23577__auto___29884,out))
})();
var inst_29844 = cljs.core.filterv.call(null,inst_29843,inst_29831);
var inst_29831__$1 = inst_29844;
var state_29859__$1 = (function (){var statearr_29874 = state_29859;
(statearr_29874[(10)] = inst_29831__$1);

return statearr_29874;
})();
var statearr_29875_29894 = state_29859__$1;
(statearr_29875_29894[(2)] = null);

(statearr_29875_29894[(1)] = (2));


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
});})(c__23577__auto___29884,out))
;
return ((function (switch__23515__auto__,c__23577__auto___29884,out){
return (function() {
var cljs$core$async$state_machine__23516__auto__ = null;
var cljs$core$async$state_machine__23516__auto____0 = (function (){
var statearr_29879 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29879[(0)] = cljs$core$async$state_machine__23516__auto__);

(statearr_29879[(1)] = (1));

return statearr_29879;
});
var cljs$core$async$state_machine__23516__auto____1 = (function (state_29859){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_29859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e29880){if((e29880 instanceof Object)){
var ex__23519__auto__ = e29880;
var statearr_29881_29895 = state_29859;
(statearr_29881_29895[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29896 = state_29859;
state_29859 = G__29896;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
cljs$core$async$state_machine__23516__auto__ = function(state_29859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23516__auto____1.call(this,state_29859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23516__auto____0;
cljs$core$async$state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23516__auto____1;
return cljs$core$async$state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto___29884,out))
})();
var state__23579__auto__ = (function (){var statearr_29882 = f__23578__auto__.call(null);
(statearr_29882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto___29884);

return statearr_29882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto___29884,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__29898 = arguments.length;
switch (G__29898) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23577__auto___29946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto___29946,out){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto___29946,out){
return (function (state_29922){
var state_val_29923 = (state_29922[(1)]);
if((state_val_29923 === (7))){
var inst_29904 = (state_29922[(7)]);
var inst_29904__$1 = (state_29922[(2)]);
var inst_29905 = (inst_29904__$1 == null);
var inst_29906 = cljs.core.not.call(null,inst_29905);
var state_29922__$1 = (function (){var statearr_29924 = state_29922;
(statearr_29924[(7)] = inst_29904__$1);

return statearr_29924;
})();
if(inst_29906){
var statearr_29925_29947 = state_29922__$1;
(statearr_29925_29947[(1)] = (8));

} else {
var statearr_29926_29948 = state_29922__$1;
(statearr_29926_29948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29923 === (1))){
var inst_29899 = (0);
var state_29922__$1 = (function (){var statearr_29927 = state_29922;
(statearr_29927[(8)] = inst_29899);

return statearr_29927;
})();
var statearr_29928_29949 = state_29922__$1;
(statearr_29928_29949[(2)] = null);

(statearr_29928_29949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29923 === (4))){
var state_29922__$1 = state_29922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29922__$1,(7),ch);
} else {
if((state_val_29923 === (6))){
var inst_29917 = (state_29922[(2)]);
var state_29922__$1 = state_29922;
var statearr_29929_29950 = state_29922__$1;
(statearr_29929_29950[(2)] = inst_29917);

(statearr_29929_29950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29923 === (3))){
var inst_29919 = (state_29922[(2)]);
var inst_29920 = cljs.core.async.close_BANG_.call(null,out);
var state_29922__$1 = (function (){var statearr_29930 = state_29922;
(statearr_29930[(9)] = inst_29919);

return statearr_29930;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29922__$1,inst_29920);
} else {
if((state_val_29923 === (2))){
var inst_29899 = (state_29922[(8)]);
var inst_29901 = (inst_29899 < n);
var state_29922__$1 = state_29922;
if(cljs.core.truth_(inst_29901)){
var statearr_29931_29951 = state_29922__$1;
(statearr_29931_29951[(1)] = (4));

} else {
var statearr_29932_29952 = state_29922__$1;
(statearr_29932_29952[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29923 === (11))){
var inst_29899 = (state_29922[(8)]);
var inst_29909 = (state_29922[(2)]);
var inst_29910 = (inst_29899 + (1));
var inst_29899__$1 = inst_29910;
var state_29922__$1 = (function (){var statearr_29933 = state_29922;
(statearr_29933[(10)] = inst_29909);

(statearr_29933[(8)] = inst_29899__$1);

return statearr_29933;
})();
var statearr_29934_29953 = state_29922__$1;
(statearr_29934_29953[(2)] = null);

(statearr_29934_29953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29923 === (9))){
var state_29922__$1 = state_29922;
var statearr_29935_29954 = state_29922__$1;
(statearr_29935_29954[(2)] = null);

(statearr_29935_29954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29923 === (5))){
var state_29922__$1 = state_29922;
var statearr_29936_29955 = state_29922__$1;
(statearr_29936_29955[(2)] = null);

(statearr_29936_29955[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29923 === (10))){
var inst_29914 = (state_29922[(2)]);
var state_29922__$1 = state_29922;
var statearr_29937_29956 = state_29922__$1;
(statearr_29937_29956[(2)] = inst_29914);

(statearr_29937_29956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29923 === (8))){
var inst_29904 = (state_29922[(7)]);
var state_29922__$1 = state_29922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29922__$1,(11),out,inst_29904);
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
});})(c__23577__auto___29946,out))
;
return ((function (switch__23515__auto__,c__23577__auto___29946,out){
return (function() {
var cljs$core$async$state_machine__23516__auto__ = null;
var cljs$core$async$state_machine__23516__auto____0 = (function (){
var statearr_29941 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29941[(0)] = cljs$core$async$state_machine__23516__auto__);

(statearr_29941[(1)] = (1));

return statearr_29941;
});
var cljs$core$async$state_machine__23516__auto____1 = (function (state_29922){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_29922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e29942){if((e29942 instanceof Object)){
var ex__23519__auto__ = e29942;
var statearr_29943_29957 = state_29922;
(statearr_29943_29957[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29958 = state_29922;
state_29922 = G__29958;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
cljs$core$async$state_machine__23516__auto__ = function(state_29922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23516__auto____1.call(this,state_29922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23516__auto____0;
cljs$core$async$state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23516__auto____1;
return cljs$core$async$state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto___29946,out))
})();
var state__23579__auto__ = (function (){var statearr_29944 = f__23578__auto__.call(null);
(statearr_29944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto___29946);

return statearr_29944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto___29946,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t29966 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29966 = (function (map_LT_,f,ch,meta29967){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29967 = meta29967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29968,meta29967__$1){
var self__ = this;
var _29968__$1 = this;
return (new cljs.core.async.t29966(self__.map_LT_,self__.f,self__.ch,meta29967__$1));
});

cljs.core.async.t29966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29968){
var self__ = this;
var _29968__$1 = this;
return self__.meta29967;
});

cljs.core.async.t29966.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29966.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29966.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29966.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29966.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t29969 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29969 = (function (map_LT_,f,ch,meta29967,_,fn1,meta29970){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29967 = meta29967;
this._ = _;
this.fn1 = fn1;
this.meta29970 = meta29970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29971,meta29970__$1){
var self__ = this;
var _29971__$1 = this;
return (new cljs.core.async.t29969(self__.map_LT_,self__.f,self__.ch,self__.meta29967,self__._,self__.fn1,meta29970__$1));
});})(___$1))
;

cljs.core.async.t29969.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29971){
var self__ = this;
var _29971__$1 = this;
return self__.meta29970;
});})(___$1))
;

cljs.core.async.t29969.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29969.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t29969.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29959_SHARP_){
return f1.call(null,(((p1__29959_SHARP_ == null))?null:self__.f.call(null,p1__29959_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t29969.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29967","meta29967",-1752258090,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29970","meta29970",362842115,null)], null);
});})(___$1))
;

cljs.core.async.t29969.cljs$lang$type = true;

cljs.core.async.t29969.cljs$lang$ctorStr = "cljs.core.async/t29969";

cljs.core.async.t29969.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__21146__auto__,writer__21147__auto__,opt__21148__auto__){
return cljs.core._write.call(null,writer__21147__auto__,"cljs.core.async/t29969");
});})(___$1))
;

cljs.core.async.__GT_t29969 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t29969(map_LT___$1,f__$1,ch__$1,meta29967__$1,___$2,fn1__$1,meta29970){
return (new cljs.core.async.t29969(map_LT___$1,f__$1,ch__$1,meta29967__$1,___$2,fn1__$1,meta29970));
});})(___$1))
;

}

return (new cljs.core.async.t29969(self__.map_LT_,self__.f,self__.ch,self__.meta29967,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__20555__auto__ = ret;
if(cljs.core.truth_(and__20555__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20555__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t29966.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29966.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t29966.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29967","meta29967",-1752258090,null)], null);
});

cljs.core.async.t29966.cljs$lang$type = true;

cljs.core.async.t29966.cljs$lang$ctorStr = "cljs.core.async/t29966";

cljs.core.async.t29966.cljs$lang$ctorPrWriter = (function (this__21146__auto__,writer__21147__auto__,opt__21148__auto__){
return cljs.core._write.call(null,writer__21147__auto__,"cljs.core.async/t29966");
});

cljs.core.async.__GT_t29966 = (function cljs$core$async$map_LT__$___GT_t29966(map_LT___$1,f__$1,ch__$1,meta29967){
return (new cljs.core.async.t29966(map_LT___$1,f__$1,ch__$1,meta29967));
});

}

return (new cljs.core.async.t29966(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t29975 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29975 = (function (map_GT_,f,ch,meta29976){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29976 = meta29976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29977,meta29976__$1){
var self__ = this;
var _29977__$1 = this;
return (new cljs.core.async.t29975(self__.map_GT_,self__.f,self__.ch,meta29976__$1));
});

cljs.core.async.t29975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29977){
var self__ = this;
var _29977__$1 = this;
return self__.meta29976;
});

cljs.core.async.t29975.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29975.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29975.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29975.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29975.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29975.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t29975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29976","meta29976",-362042234,null)], null);
});

cljs.core.async.t29975.cljs$lang$type = true;

cljs.core.async.t29975.cljs$lang$ctorStr = "cljs.core.async/t29975";

cljs.core.async.t29975.cljs$lang$ctorPrWriter = (function (this__21146__auto__,writer__21147__auto__,opt__21148__auto__){
return cljs.core._write.call(null,writer__21147__auto__,"cljs.core.async/t29975");
});

cljs.core.async.__GT_t29975 = (function cljs$core$async$map_GT__$___GT_t29975(map_GT___$1,f__$1,ch__$1,meta29976){
return (new cljs.core.async.t29975(map_GT___$1,f__$1,ch__$1,meta29976));
});

}

return (new cljs.core.async.t29975(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t29981 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29981 = (function (filter_GT_,p,ch,meta29982){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29982 = meta29982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29983,meta29982__$1){
var self__ = this;
var _29983__$1 = this;
return (new cljs.core.async.t29981(self__.filter_GT_,self__.p,self__.ch,meta29982__$1));
});

cljs.core.async.t29981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29983){
var self__ = this;
var _29983__$1 = this;
return self__.meta29982;
});

cljs.core.async.t29981.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29981.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29981.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29981.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29981.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29981.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29981.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t29981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29982","meta29982",1004342760,null)], null);
});

cljs.core.async.t29981.cljs$lang$type = true;

cljs.core.async.t29981.cljs$lang$ctorStr = "cljs.core.async/t29981";

cljs.core.async.t29981.cljs$lang$ctorPrWriter = (function (this__21146__auto__,writer__21147__auto__,opt__21148__auto__){
return cljs.core._write.call(null,writer__21147__auto__,"cljs.core.async/t29981");
});

cljs.core.async.__GT_t29981 = (function cljs$core$async$filter_GT__$___GT_t29981(filter_GT___$1,p__$1,ch__$1,meta29982){
return (new cljs.core.async.t29981(filter_GT___$1,p__$1,ch__$1,meta29982));
});

}

return (new cljs.core.async.t29981(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__29985 = arguments.length;
switch (G__29985) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23577__auto___30028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto___30028,out){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto___30028,out){
return (function (state_30006){
var state_val_30007 = (state_30006[(1)]);
if((state_val_30007 === (7))){
var inst_30002 = (state_30006[(2)]);
var state_30006__$1 = state_30006;
var statearr_30008_30029 = state_30006__$1;
(statearr_30008_30029[(2)] = inst_30002);

(statearr_30008_30029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (1))){
var state_30006__$1 = state_30006;
var statearr_30009_30030 = state_30006__$1;
(statearr_30009_30030[(2)] = null);

(statearr_30009_30030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (4))){
var inst_29988 = (state_30006[(7)]);
var inst_29988__$1 = (state_30006[(2)]);
var inst_29989 = (inst_29988__$1 == null);
var state_30006__$1 = (function (){var statearr_30010 = state_30006;
(statearr_30010[(7)] = inst_29988__$1);

return statearr_30010;
})();
if(cljs.core.truth_(inst_29989)){
var statearr_30011_30031 = state_30006__$1;
(statearr_30011_30031[(1)] = (5));

} else {
var statearr_30012_30032 = state_30006__$1;
(statearr_30012_30032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (6))){
var inst_29988 = (state_30006[(7)]);
var inst_29993 = p.call(null,inst_29988);
var state_30006__$1 = state_30006;
if(cljs.core.truth_(inst_29993)){
var statearr_30013_30033 = state_30006__$1;
(statearr_30013_30033[(1)] = (8));

} else {
var statearr_30014_30034 = state_30006__$1;
(statearr_30014_30034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (3))){
var inst_30004 = (state_30006[(2)]);
var state_30006__$1 = state_30006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30006__$1,inst_30004);
} else {
if((state_val_30007 === (2))){
var state_30006__$1 = state_30006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30006__$1,(4),ch);
} else {
if((state_val_30007 === (11))){
var inst_29996 = (state_30006[(2)]);
var state_30006__$1 = state_30006;
var statearr_30015_30035 = state_30006__$1;
(statearr_30015_30035[(2)] = inst_29996);

(statearr_30015_30035[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (9))){
var state_30006__$1 = state_30006;
var statearr_30016_30036 = state_30006__$1;
(statearr_30016_30036[(2)] = null);

(statearr_30016_30036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (5))){
var inst_29991 = cljs.core.async.close_BANG_.call(null,out);
var state_30006__$1 = state_30006;
var statearr_30017_30037 = state_30006__$1;
(statearr_30017_30037[(2)] = inst_29991);

(statearr_30017_30037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (10))){
var inst_29999 = (state_30006[(2)]);
var state_30006__$1 = (function (){var statearr_30018 = state_30006;
(statearr_30018[(8)] = inst_29999);

return statearr_30018;
})();
var statearr_30019_30038 = state_30006__$1;
(statearr_30019_30038[(2)] = null);

(statearr_30019_30038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (8))){
var inst_29988 = (state_30006[(7)]);
var state_30006__$1 = state_30006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30006__$1,(11),out,inst_29988);
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
});})(c__23577__auto___30028,out))
;
return ((function (switch__23515__auto__,c__23577__auto___30028,out){
return (function() {
var cljs$core$async$state_machine__23516__auto__ = null;
var cljs$core$async$state_machine__23516__auto____0 = (function (){
var statearr_30023 = [null,null,null,null,null,null,null,null,null];
(statearr_30023[(0)] = cljs$core$async$state_machine__23516__auto__);

(statearr_30023[(1)] = (1));

return statearr_30023;
});
var cljs$core$async$state_machine__23516__auto____1 = (function (state_30006){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_30006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e30024){if((e30024 instanceof Object)){
var ex__23519__auto__ = e30024;
var statearr_30025_30039 = state_30006;
(statearr_30025_30039[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30040 = state_30006;
state_30006 = G__30040;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
cljs$core$async$state_machine__23516__auto__ = function(state_30006){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23516__auto____1.call(this,state_30006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23516__auto____0;
cljs$core$async$state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23516__auto____1;
return cljs$core$async$state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto___30028,out))
})();
var state__23579__auto__ = (function (){var statearr_30026 = f__23578__auto__.call(null);
(statearr_30026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto___30028);

return statearr_30026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto___30028,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__30042 = arguments.length;
switch (G__30042) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto__){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto__){
return (function (state_30209){
var state_val_30210 = (state_30209[(1)]);
if((state_val_30210 === (7))){
var inst_30205 = (state_30209[(2)]);
var state_30209__$1 = state_30209;
var statearr_30211_30252 = state_30209__$1;
(statearr_30211_30252[(2)] = inst_30205);

(statearr_30211_30252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (20))){
var inst_30175 = (state_30209[(7)]);
var inst_30186 = (state_30209[(2)]);
var inst_30187 = cljs.core.next.call(null,inst_30175);
var inst_30161 = inst_30187;
var inst_30162 = null;
var inst_30163 = (0);
var inst_30164 = (0);
var state_30209__$1 = (function (){var statearr_30212 = state_30209;
(statearr_30212[(8)] = inst_30186);

(statearr_30212[(9)] = inst_30164);

(statearr_30212[(10)] = inst_30163);

(statearr_30212[(11)] = inst_30161);

(statearr_30212[(12)] = inst_30162);

return statearr_30212;
})();
var statearr_30213_30253 = state_30209__$1;
(statearr_30213_30253[(2)] = null);

(statearr_30213_30253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (1))){
var state_30209__$1 = state_30209;
var statearr_30214_30254 = state_30209__$1;
(statearr_30214_30254[(2)] = null);

(statearr_30214_30254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (4))){
var inst_30150 = (state_30209[(13)]);
var inst_30150__$1 = (state_30209[(2)]);
var inst_30151 = (inst_30150__$1 == null);
var state_30209__$1 = (function (){var statearr_30215 = state_30209;
(statearr_30215[(13)] = inst_30150__$1);

return statearr_30215;
})();
if(cljs.core.truth_(inst_30151)){
var statearr_30216_30255 = state_30209__$1;
(statearr_30216_30255[(1)] = (5));

} else {
var statearr_30217_30256 = state_30209__$1;
(statearr_30217_30256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (15))){
var state_30209__$1 = state_30209;
var statearr_30221_30257 = state_30209__$1;
(statearr_30221_30257[(2)] = null);

(statearr_30221_30257[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (21))){
var state_30209__$1 = state_30209;
var statearr_30222_30258 = state_30209__$1;
(statearr_30222_30258[(2)] = null);

(statearr_30222_30258[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (13))){
var inst_30164 = (state_30209[(9)]);
var inst_30163 = (state_30209[(10)]);
var inst_30161 = (state_30209[(11)]);
var inst_30162 = (state_30209[(12)]);
var inst_30171 = (state_30209[(2)]);
var inst_30172 = (inst_30164 + (1));
var tmp30218 = inst_30163;
var tmp30219 = inst_30161;
var tmp30220 = inst_30162;
var inst_30161__$1 = tmp30219;
var inst_30162__$1 = tmp30220;
var inst_30163__$1 = tmp30218;
var inst_30164__$1 = inst_30172;
var state_30209__$1 = (function (){var statearr_30223 = state_30209;
(statearr_30223[(9)] = inst_30164__$1);

(statearr_30223[(10)] = inst_30163__$1);

(statearr_30223[(14)] = inst_30171);

(statearr_30223[(11)] = inst_30161__$1);

(statearr_30223[(12)] = inst_30162__$1);

return statearr_30223;
})();
var statearr_30224_30259 = state_30209__$1;
(statearr_30224_30259[(2)] = null);

(statearr_30224_30259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (22))){
var state_30209__$1 = state_30209;
var statearr_30225_30260 = state_30209__$1;
(statearr_30225_30260[(2)] = null);

(statearr_30225_30260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (6))){
var inst_30150 = (state_30209[(13)]);
var inst_30159 = f.call(null,inst_30150);
var inst_30160 = cljs.core.seq.call(null,inst_30159);
var inst_30161 = inst_30160;
var inst_30162 = null;
var inst_30163 = (0);
var inst_30164 = (0);
var state_30209__$1 = (function (){var statearr_30226 = state_30209;
(statearr_30226[(9)] = inst_30164);

(statearr_30226[(10)] = inst_30163);

(statearr_30226[(11)] = inst_30161);

(statearr_30226[(12)] = inst_30162);

return statearr_30226;
})();
var statearr_30227_30261 = state_30209__$1;
(statearr_30227_30261[(2)] = null);

(statearr_30227_30261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (17))){
var inst_30175 = (state_30209[(7)]);
var inst_30179 = cljs.core.chunk_first.call(null,inst_30175);
var inst_30180 = cljs.core.chunk_rest.call(null,inst_30175);
var inst_30181 = cljs.core.count.call(null,inst_30179);
var inst_30161 = inst_30180;
var inst_30162 = inst_30179;
var inst_30163 = inst_30181;
var inst_30164 = (0);
var state_30209__$1 = (function (){var statearr_30228 = state_30209;
(statearr_30228[(9)] = inst_30164);

(statearr_30228[(10)] = inst_30163);

(statearr_30228[(11)] = inst_30161);

(statearr_30228[(12)] = inst_30162);

return statearr_30228;
})();
var statearr_30229_30262 = state_30209__$1;
(statearr_30229_30262[(2)] = null);

(statearr_30229_30262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (3))){
var inst_30207 = (state_30209[(2)]);
var state_30209__$1 = state_30209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30209__$1,inst_30207);
} else {
if((state_val_30210 === (12))){
var inst_30195 = (state_30209[(2)]);
var state_30209__$1 = state_30209;
var statearr_30230_30263 = state_30209__$1;
(statearr_30230_30263[(2)] = inst_30195);

(statearr_30230_30263[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (2))){
var state_30209__$1 = state_30209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30209__$1,(4),in$);
} else {
if((state_val_30210 === (23))){
var inst_30203 = (state_30209[(2)]);
var state_30209__$1 = state_30209;
var statearr_30231_30264 = state_30209__$1;
(statearr_30231_30264[(2)] = inst_30203);

(statearr_30231_30264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (19))){
var inst_30190 = (state_30209[(2)]);
var state_30209__$1 = state_30209;
var statearr_30232_30265 = state_30209__$1;
(statearr_30232_30265[(2)] = inst_30190);

(statearr_30232_30265[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (11))){
var inst_30175 = (state_30209[(7)]);
var inst_30161 = (state_30209[(11)]);
var inst_30175__$1 = cljs.core.seq.call(null,inst_30161);
var state_30209__$1 = (function (){var statearr_30233 = state_30209;
(statearr_30233[(7)] = inst_30175__$1);

return statearr_30233;
})();
if(inst_30175__$1){
var statearr_30234_30266 = state_30209__$1;
(statearr_30234_30266[(1)] = (14));

} else {
var statearr_30235_30267 = state_30209__$1;
(statearr_30235_30267[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (9))){
var inst_30197 = (state_30209[(2)]);
var inst_30198 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30209__$1 = (function (){var statearr_30236 = state_30209;
(statearr_30236[(15)] = inst_30197);

return statearr_30236;
})();
if(cljs.core.truth_(inst_30198)){
var statearr_30237_30268 = state_30209__$1;
(statearr_30237_30268[(1)] = (21));

} else {
var statearr_30238_30269 = state_30209__$1;
(statearr_30238_30269[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (5))){
var inst_30153 = cljs.core.async.close_BANG_.call(null,out);
var state_30209__$1 = state_30209;
var statearr_30239_30270 = state_30209__$1;
(statearr_30239_30270[(2)] = inst_30153);

(statearr_30239_30270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (14))){
var inst_30175 = (state_30209[(7)]);
var inst_30177 = cljs.core.chunked_seq_QMARK_.call(null,inst_30175);
var state_30209__$1 = state_30209;
if(inst_30177){
var statearr_30240_30271 = state_30209__$1;
(statearr_30240_30271[(1)] = (17));

} else {
var statearr_30241_30272 = state_30209__$1;
(statearr_30241_30272[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (16))){
var inst_30193 = (state_30209[(2)]);
var state_30209__$1 = state_30209;
var statearr_30242_30273 = state_30209__$1;
(statearr_30242_30273[(2)] = inst_30193);

(statearr_30242_30273[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30210 === (10))){
var inst_30164 = (state_30209[(9)]);
var inst_30162 = (state_30209[(12)]);
var inst_30169 = cljs.core._nth.call(null,inst_30162,inst_30164);
var state_30209__$1 = state_30209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30209__$1,(13),out,inst_30169);
} else {
if((state_val_30210 === (18))){
var inst_30175 = (state_30209[(7)]);
var inst_30184 = cljs.core.first.call(null,inst_30175);
var state_30209__$1 = state_30209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30209__$1,(20),out,inst_30184);
} else {
if((state_val_30210 === (8))){
var inst_30164 = (state_30209[(9)]);
var inst_30163 = (state_30209[(10)]);
var inst_30166 = (inst_30164 < inst_30163);
var inst_30167 = inst_30166;
var state_30209__$1 = state_30209;
if(cljs.core.truth_(inst_30167)){
var statearr_30243_30274 = state_30209__$1;
(statearr_30243_30274[(1)] = (10));

} else {
var statearr_30244_30275 = state_30209__$1;
(statearr_30244_30275[(1)] = (11));

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
});})(c__23577__auto__))
;
return ((function (switch__23515__auto__,c__23577__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23516__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23516__auto____0 = (function (){
var statearr_30248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30248[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23516__auto__);

(statearr_30248[(1)] = (1));

return statearr_30248;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23516__auto____1 = (function (state_30209){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_30209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e30249){if((e30249 instanceof Object)){
var ex__23519__auto__ = e30249;
var statearr_30250_30276 = state_30209;
(statearr_30250_30276[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30277 = state_30209;
state_30209 = G__30277;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23516__auto__ = function(state_30209){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23516__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23516__auto____1.call(this,state_30209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23516__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23516__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto__))
})();
var state__23579__auto__ = (function (){var statearr_30251 = f__23578__auto__.call(null);
(statearr_30251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto__);

return statearr_30251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto__))
);

return c__23577__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__30279 = arguments.length;
switch (G__30279) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__30282 = arguments.length;
switch (G__30282) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__30285 = arguments.length;
switch (G__30285) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23577__auto___30335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto___30335,out){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto___30335,out){
return (function (state_30309){
var state_val_30310 = (state_30309[(1)]);
if((state_val_30310 === (7))){
var inst_30304 = (state_30309[(2)]);
var state_30309__$1 = state_30309;
var statearr_30311_30336 = state_30309__$1;
(statearr_30311_30336[(2)] = inst_30304);

(statearr_30311_30336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (1))){
var inst_30286 = null;
var state_30309__$1 = (function (){var statearr_30312 = state_30309;
(statearr_30312[(7)] = inst_30286);

return statearr_30312;
})();
var statearr_30313_30337 = state_30309__$1;
(statearr_30313_30337[(2)] = null);

(statearr_30313_30337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (4))){
var inst_30289 = (state_30309[(8)]);
var inst_30289__$1 = (state_30309[(2)]);
var inst_30290 = (inst_30289__$1 == null);
var inst_30291 = cljs.core.not.call(null,inst_30290);
var state_30309__$1 = (function (){var statearr_30314 = state_30309;
(statearr_30314[(8)] = inst_30289__$1);

return statearr_30314;
})();
if(inst_30291){
var statearr_30315_30338 = state_30309__$1;
(statearr_30315_30338[(1)] = (5));

} else {
var statearr_30316_30339 = state_30309__$1;
(statearr_30316_30339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (6))){
var state_30309__$1 = state_30309;
var statearr_30317_30340 = state_30309__$1;
(statearr_30317_30340[(2)] = null);

(statearr_30317_30340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (3))){
var inst_30306 = (state_30309[(2)]);
var inst_30307 = cljs.core.async.close_BANG_.call(null,out);
var state_30309__$1 = (function (){var statearr_30318 = state_30309;
(statearr_30318[(9)] = inst_30306);

return statearr_30318;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30309__$1,inst_30307);
} else {
if((state_val_30310 === (2))){
var state_30309__$1 = state_30309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30309__$1,(4),ch);
} else {
if((state_val_30310 === (11))){
var inst_30289 = (state_30309[(8)]);
var inst_30298 = (state_30309[(2)]);
var inst_30286 = inst_30289;
var state_30309__$1 = (function (){var statearr_30319 = state_30309;
(statearr_30319[(7)] = inst_30286);

(statearr_30319[(10)] = inst_30298);

return statearr_30319;
})();
var statearr_30320_30341 = state_30309__$1;
(statearr_30320_30341[(2)] = null);

(statearr_30320_30341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (9))){
var inst_30289 = (state_30309[(8)]);
var state_30309__$1 = state_30309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30309__$1,(11),out,inst_30289);
} else {
if((state_val_30310 === (5))){
var inst_30289 = (state_30309[(8)]);
var inst_30286 = (state_30309[(7)]);
var inst_30293 = cljs.core._EQ_.call(null,inst_30289,inst_30286);
var state_30309__$1 = state_30309;
if(inst_30293){
var statearr_30322_30342 = state_30309__$1;
(statearr_30322_30342[(1)] = (8));

} else {
var statearr_30323_30343 = state_30309__$1;
(statearr_30323_30343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (10))){
var inst_30301 = (state_30309[(2)]);
var state_30309__$1 = state_30309;
var statearr_30324_30344 = state_30309__$1;
(statearr_30324_30344[(2)] = inst_30301);

(statearr_30324_30344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30310 === (8))){
var inst_30286 = (state_30309[(7)]);
var tmp30321 = inst_30286;
var inst_30286__$1 = tmp30321;
var state_30309__$1 = (function (){var statearr_30325 = state_30309;
(statearr_30325[(7)] = inst_30286__$1);

return statearr_30325;
})();
var statearr_30326_30345 = state_30309__$1;
(statearr_30326_30345[(2)] = null);

(statearr_30326_30345[(1)] = (2));


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
});})(c__23577__auto___30335,out))
;
return ((function (switch__23515__auto__,c__23577__auto___30335,out){
return (function() {
var cljs$core$async$state_machine__23516__auto__ = null;
var cljs$core$async$state_machine__23516__auto____0 = (function (){
var statearr_30330 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30330[(0)] = cljs$core$async$state_machine__23516__auto__);

(statearr_30330[(1)] = (1));

return statearr_30330;
});
var cljs$core$async$state_machine__23516__auto____1 = (function (state_30309){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_30309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e30331){if((e30331 instanceof Object)){
var ex__23519__auto__ = e30331;
var statearr_30332_30346 = state_30309;
(statearr_30332_30346[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30347 = state_30309;
state_30309 = G__30347;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
cljs$core$async$state_machine__23516__auto__ = function(state_30309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23516__auto____1.call(this,state_30309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23516__auto____0;
cljs$core$async$state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23516__auto____1;
return cljs$core$async$state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto___30335,out))
})();
var state__23579__auto__ = (function (){var statearr_30333 = f__23578__auto__.call(null);
(statearr_30333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto___30335);

return statearr_30333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto___30335,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__30349 = arguments.length;
switch (G__30349) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23577__auto___30418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto___30418,out){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto___30418,out){
return (function (state_30387){
var state_val_30388 = (state_30387[(1)]);
if((state_val_30388 === (7))){
var inst_30383 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
var statearr_30389_30419 = state_30387__$1;
(statearr_30389_30419[(2)] = inst_30383);

(statearr_30389_30419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (1))){
var inst_30350 = (new Array(n));
var inst_30351 = inst_30350;
var inst_30352 = (0);
var state_30387__$1 = (function (){var statearr_30390 = state_30387;
(statearr_30390[(7)] = inst_30351);

(statearr_30390[(8)] = inst_30352);

return statearr_30390;
})();
var statearr_30391_30420 = state_30387__$1;
(statearr_30391_30420[(2)] = null);

(statearr_30391_30420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (4))){
var inst_30355 = (state_30387[(9)]);
var inst_30355__$1 = (state_30387[(2)]);
var inst_30356 = (inst_30355__$1 == null);
var inst_30357 = cljs.core.not.call(null,inst_30356);
var state_30387__$1 = (function (){var statearr_30392 = state_30387;
(statearr_30392[(9)] = inst_30355__$1);

return statearr_30392;
})();
if(inst_30357){
var statearr_30393_30421 = state_30387__$1;
(statearr_30393_30421[(1)] = (5));

} else {
var statearr_30394_30422 = state_30387__$1;
(statearr_30394_30422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (15))){
var inst_30377 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
var statearr_30395_30423 = state_30387__$1;
(statearr_30395_30423[(2)] = inst_30377);

(statearr_30395_30423[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (13))){
var state_30387__$1 = state_30387;
var statearr_30396_30424 = state_30387__$1;
(statearr_30396_30424[(2)] = null);

(statearr_30396_30424[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (6))){
var inst_30352 = (state_30387[(8)]);
var inst_30373 = (inst_30352 > (0));
var state_30387__$1 = state_30387;
if(cljs.core.truth_(inst_30373)){
var statearr_30397_30425 = state_30387__$1;
(statearr_30397_30425[(1)] = (12));

} else {
var statearr_30398_30426 = state_30387__$1;
(statearr_30398_30426[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (3))){
var inst_30385 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30387__$1,inst_30385);
} else {
if((state_val_30388 === (12))){
var inst_30351 = (state_30387[(7)]);
var inst_30375 = cljs.core.vec.call(null,inst_30351);
var state_30387__$1 = state_30387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30387__$1,(15),out,inst_30375);
} else {
if((state_val_30388 === (2))){
var state_30387__$1 = state_30387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30387__$1,(4),ch);
} else {
if((state_val_30388 === (11))){
var inst_30367 = (state_30387[(2)]);
var inst_30368 = (new Array(n));
var inst_30351 = inst_30368;
var inst_30352 = (0);
var state_30387__$1 = (function (){var statearr_30399 = state_30387;
(statearr_30399[(7)] = inst_30351);

(statearr_30399[(8)] = inst_30352);

(statearr_30399[(10)] = inst_30367);

return statearr_30399;
})();
var statearr_30400_30427 = state_30387__$1;
(statearr_30400_30427[(2)] = null);

(statearr_30400_30427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (9))){
var inst_30351 = (state_30387[(7)]);
var inst_30365 = cljs.core.vec.call(null,inst_30351);
var state_30387__$1 = state_30387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30387__$1,(11),out,inst_30365);
} else {
if((state_val_30388 === (5))){
var inst_30351 = (state_30387[(7)]);
var inst_30355 = (state_30387[(9)]);
var inst_30352 = (state_30387[(8)]);
var inst_30360 = (state_30387[(11)]);
var inst_30359 = (inst_30351[inst_30352] = inst_30355);
var inst_30360__$1 = (inst_30352 + (1));
var inst_30361 = (inst_30360__$1 < n);
var state_30387__$1 = (function (){var statearr_30401 = state_30387;
(statearr_30401[(12)] = inst_30359);

(statearr_30401[(11)] = inst_30360__$1);

return statearr_30401;
})();
if(cljs.core.truth_(inst_30361)){
var statearr_30402_30428 = state_30387__$1;
(statearr_30402_30428[(1)] = (8));

} else {
var statearr_30403_30429 = state_30387__$1;
(statearr_30403_30429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (14))){
var inst_30380 = (state_30387[(2)]);
var inst_30381 = cljs.core.async.close_BANG_.call(null,out);
var state_30387__$1 = (function (){var statearr_30405 = state_30387;
(statearr_30405[(13)] = inst_30380);

return statearr_30405;
})();
var statearr_30406_30430 = state_30387__$1;
(statearr_30406_30430[(2)] = inst_30381);

(statearr_30406_30430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (10))){
var inst_30371 = (state_30387[(2)]);
var state_30387__$1 = state_30387;
var statearr_30407_30431 = state_30387__$1;
(statearr_30407_30431[(2)] = inst_30371);

(statearr_30407_30431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30388 === (8))){
var inst_30351 = (state_30387[(7)]);
var inst_30360 = (state_30387[(11)]);
var tmp30404 = inst_30351;
var inst_30351__$1 = tmp30404;
var inst_30352 = inst_30360;
var state_30387__$1 = (function (){var statearr_30408 = state_30387;
(statearr_30408[(7)] = inst_30351__$1);

(statearr_30408[(8)] = inst_30352);

return statearr_30408;
})();
var statearr_30409_30432 = state_30387__$1;
(statearr_30409_30432[(2)] = null);

(statearr_30409_30432[(1)] = (2));


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
});})(c__23577__auto___30418,out))
;
return ((function (switch__23515__auto__,c__23577__auto___30418,out){
return (function() {
var cljs$core$async$state_machine__23516__auto__ = null;
var cljs$core$async$state_machine__23516__auto____0 = (function (){
var statearr_30413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30413[(0)] = cljs$core$async$state_machine__23516__auto__);

(statearr_30413[(1)] = (1));

return statearr_30413;
});
var cljs$core$async$state_machine__23516__auto____1 = (function (state_30387){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_30387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e30414){if((e30414 instanceof Object)){
var ex__23519__auto__ = e30414;
var statearr_30415_30433 = state_30387;
(statearr_30415_30433[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30434 = state_30387;
state_30387 = G__30434;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
cljs$core$async$state_machine__23516__auto__ = function(state_30387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23516__auto____1.call(this,state_30387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23516__auto____0;
cljs$core$async$state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23516__auto____1;
return cljs$core$async$state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto___30418,out))
})();
var state__23579__auto__ = (function (){var statearr_30416 = f__23578__auto__.call(null);
(statearr_30416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto___30418);

return statearr_30416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto___30418,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__30436 = arguments.length;
switch (G__30436) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23577__auto___30509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23577__auto___30509,out){
return (function (){
var f__23578__auto__ = (function (){var switch__23515__auto__ = ((function (c__23577__auto___30509,out){
return (function (state_30478){
var state_val_30479 = (state_30478[(1)]);
if((state_val_30479 === (7))){
var inst_30474 = (state_30478[(2)]);
var state_30478__$1 = state_30478;
var statearr_30480_30510 = state_30478__$1;
(statearr_30480_30510[(2)] = inst_30474);

(statearr_30480_30510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (1))){
var inst_30437 = [];
var inst_30438 = inst_30437;
var inst_30439 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30478__$1 = (function (){var statearr_30481 = state_30478;
(statearr_30481[(7)] = inst_30438);

(statearr_30481[(8)] = inst_30439);

return statearr_30481;
})();
var statearr_30482_30511 = state_30478__$1;
(statearr_30482_30511[(2)] = null);

(statearr_30482_30511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (4))){
var inst_30442 = (state_30478[(9)]);
var inst_30442__$1 = (state_30478[(2)]);
var inst_30443 = (inst_30442__$1 == null);
var inst_30444 = cljs.core.not.call(null,inst_30443);
var state_30478__$1 = (function (){var statearr_30483 = state_30478;
(statearr_30483[(9)] = inst_30442__$1);

return statearr_30483;
})();
if(inst_30444){
var statearr_30484_30512 = state_30478__$1;
(statearr_30484_30512[(1)] = (5));

} else {
var statearr_30485_30513 = state_30478__$1;
(statearr_30485_30513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (15))){
var inst_30468 = (state_30478[(2)]);
var state_30478__$1 = state_30478;
var statearr_30486_30514 = state_30478__$1;
(statearr_30486_30514[(2)] = inst_30468);

(statearr_30486_30514[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (13))){
var state_30478__$1 = state_30478;
var statearr_30487_30515 = state_30478__$1;
(statearr_30487_30515[(2)] = null);

(statearr_30487_30515[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (6))){
var inst_30438 = (state_30478[(7)]);
var inst_30463 = inst_30438.length;
var inst_30464 = (inst_30463 > (0));
var state_30478__$1 = state_30478;
if(cljs.core.truth_(inst_30464)){
var statearr_30488_30516 = state_30478__$1;
(statearr_30488_30516[(1)] = (12));

} else {
var statearr_30489_30517 = state_30478__$1;
(statearr_30489_30517[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (3))){
var inst_30476 = (state_30478[(2)]);
var state_30478__$1 = state_30478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30478__$1,inst_30476);
} else {
if((state_val_30479 === (12))){
var inst_30438 = (state_30478[(7)]);
var inst_30466 = cljs.core.vec.call(null,inst_30438);
var state_30478__$1 = state_30478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30478__$1,(15),out,inst_30466);
} else {
if((state_val_30479 === (2))){
var state_30478__$1 = state_30478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30478__$1,(4),ch);
} else {
if((state_val_30479 === (11))){
var inst_30446 = (state_30478[(10)]);
var inst_30442 = (state_30478[(9)]);
var inst_30456 = (state_30478[(2)]);
var inst_30457 = [];
var inst_30458 = inst_30457.push(inst_30442);
var inst_30438 = inst_30457;
var inst_30439 = inst_30446;
var state_30478__$1 = (function (){var statearr_30490 = state_30478;
(statearr_30490[(11)] = inst_30458);

(statearr_30490[(7)] = inst_30438);

(statearr_30490[(12)] = inst_30456);

(statearr_30490[(8)] = inst_30439);

return statearr_30490;
})();
var statearr_30491_30518 = state_30478__$1;
(statearr_30491_30518[(2)] = null);

(statearr_30491_30518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (9))){
var inst_30438 = (state_30478[(7)]);
var inst_30454 = cljs.core.vec.call(null,inst_30438);
var state_30478__$1 = state_30478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30478__$1,(11),out,inst_30454);
} else {
if((state_val_30479 === (5))){
var inst_30446 = (state_30478[(10)]);
var inst_30442 = (state_30478[(9)]);
var inst_30439 = (state_30478[(8)]);
var inst_30446__$1 = f.call(null,inst_30442);
var inst_30447 = cljs.core._EQ_.call(null,inst_30446__$1,inst_30439);
var inst_30448 = cljs.core.keyword_identical_QMARK_.call(null,inst_30439,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30449 = (inst_30447) || (inst_30448);
var state_30478__$1 = (function (){var statearr_30492 = state_30478;
(statearr_30492[(10)] = inst_30446__$1);

return statearr_30492;
})();
if(cljs.core.truth_(inst_30449)){
var statearr_30493_30519 = state_30478__$1;
(statearr_30493_30519[(1)] = (8));

} else {
var statearr_30494_30520 = state_30478__$1;
(statearr_30494_30520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (14))){
var inst_30471 = (state_30478[(2)]);
var inst_30472 = cljs.core.async.close_BANG_.call(null,out);
var state_30478__$1 = (function (){var statearr_30496 = state_30478;
(statearr_30496[(13)] = inst_30471);

return statearr_30496;
})();
var statearr_30497_30521 = state_30478__$1;
(statearr_30497_30521[(2)] = inst_30472);

(statearr_30497_30521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (10))){
var inst_30461 = (state_30478[(2)]);
var state_30478__$1 = state_30478;
var statearr_30498_30522 = state_30478__$1;
(statearr_30498_30522[(2)] = inst_30461);

(statearr_30498_30522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30479 === (8))){
var inst_30438 = (state_30478[(7)]);
var inst_30446 = (state_30478[(10)]);
var inst_30442 = (state_30478[(9)]);
var inst_30451 = inst_30438.push(inst_30442);
var tmp30495 = inst_30438;
var inst_30438__$1 = tmp30495;
var inst_30439 = inst_30446;
var state_30478__$1 = (function (){var statearr_30499 = state_30478;
(statearr_30499[(14)] = inst_30451);

(statearr_30499[(7)] = inst_30438__$1);

(statearr_30499[(8)] = inst_30439);

return statearr_30499;
})();
var statearr_30500_30523 = state_30478__$1;
(statearr_30500_30523[(2)] = null);

(statearr_30500_30523[(1)] = (2));


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
});})(c__23577__auto___30509,out))
;
return ((function (switch__23515__auto__,c__23577__auto___30509,out){
return (function() {
var cljs$core$async$state_machine__23516__auto__ = null;
var cljs$core$async$state_machine__23516__auto____0 = (function (){
var statearr_30504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30504[(0)] = cljs$core$async$state_machine__23516__auto__);

(statearr_30504[(1)] = (1));

return statearr_30504;
});
var cljs$core$async$state_machine__23516__auto____1 = (function (state_30478){
while(true){
var ret_value__23517__auto__ = (function (){try{while(true){
var result__23518__auto__ = switch__23515__auto__.call(null,state_30478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23518__auto__;
}
break;
}
}catch (e30505){if((e30505 instanceof Object)){
var ex__23519__auto__ = e30505;
var statearr_30506_30524 = state_30478;
(statearr_30506_30524[(5)] = ex__23519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30525 = state_30478;
state_30478 = G__30525;
continue;
} else {
return ret_value__23517__auto__;
}
break;
}
});
cljs$core$async$state_machine__23516__auto__ = function(state_30478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23516__auto____1.call(this,state_30478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23516__auto____0;
cljs$core$async$state_machine__23516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23516__auto____1;
return cljs$core$async$state_machine__23516__auto__;
})()
;})(switch__23515__auto__,c__23577__auto___30509,out))
})();
var state__23579__auto__ = (function (){var statearr_30507 = f__23578__auto__.call(null);
(statearr_30507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23577__auto___30509);

return statearr_30507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23579__auto__);
});})(c__23577__auto___30509,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map