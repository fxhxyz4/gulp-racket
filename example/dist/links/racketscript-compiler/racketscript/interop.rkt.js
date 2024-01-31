import * as $rjs_core from '../../../runtime/core.js';import * as M0 from "../../../runtime/kernel.rkt.js";import * as M1 from "../../../collects/racket/private/reverse.rkt.js";import * as M2 from "./private/interop.rkt.js";var __eq__gt_$ = function(lam_expr2873) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return $rjs_core.Marks.wrapWithContext(lam_expr2873);};var js_string = function(e2874) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return e2874.toString();};var js_string__gt_string = function(e2875) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return $rjs_core.UString.makeImmutable(e2875);};var js_array__gt_list = function(e2876) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return $rjs_core.Pair.listFromArray(e2876);};var assoc__gt_object = function(pairs2877) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}var result2878 = {};var loop2879 = function(pairs2880) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.null_p(pairs2880)!==false) {var if_res1922 = result2878;} else {var p2881 = M0.car(pairs2880);var k2883 = M0.car(p2881);var or_part2884 = typeof(k2883)==="string";if (or_part2884!==false) {var if_res1919 = or_part2884;} else {var if_res1919 = M0.string_p(k2883);}if (if_res1919!==false) {var if_res1921 = k2883;} else {if (M0.symbol_p(k2883)!==false) {var if_res1920 = M0.symbol__gt_string(k2883);} else {var if_res1920 = M0.error($rjs_core.PrimitiveSymbol.make("assoc->object"),$rjs_core.UString.make("invalid key value"));}var if_res1921 = if_res1920;}var key2882 = if_res1921;result2878[key2882] = M0.car(M0.cdr(p2881));var if_res1922 = loop2879(M0.cdr(pairs2880));}return if_res1922;};return loop2879(pairs2877);};var js_array_p = function(v2885) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return Array.isArray(v2885);};var in_js_array = function(arr2886) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}check_array(arr2886);var arr2887 = arr2886;if (js_array_p(arr2887)!==false) {var if_res1923 = M0.rvoid();} else {var if_res1923 = in_js_array(arr2887);}if_res1923;var for_loop2888 = function(fold_var2889, i2890) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.__lt_(i2890,arr2887.length)!==false) {var v2891 = arr2887[i2890];if (true!==false) {var fold_var2893 = fold_var2889;var fold_var2894 = M0.cons(v2891,fold_var2893);var fold_var2892 = M0.values(fold_var2894);if (true!==false) {var if_res1924 = M0.not(false);} else {var if_res1924 = false;}if (if_res1924!==false) {var if_res1925 = for_loop2888(fold_var2892,i2890+1);} else {var if_res1925 = fold_var2892;}var if_res1926 = if_res1925;} else {var if_res1926 = fold_var2889;}var if_res1927 = if_res1926;} else {var if_res1927 = fold_var2889;}return if_res1927;};return M1.alt_reverse(for_loop2888(M0.rnull,0));};var check_array = function(v2895) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (js_array_p(v2895)!==false) {var if_res1928 = M0.rvoid();} else {var if_res1928 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-js-array"),$rjs_core.UString.make("js-array?"),v2895);}return if_res1928;};var in_js_obect = function(obj2896) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}check_object(obj2896);var obj2897 = obj2896;var keys2898 = Object.keys(obj2896);if (js_object_p(obj2897)!==false) {var if_res1929 = M0.rvoid();} else {var if_res1929 = in_js_array(obj2897);}if_res1929;var for_loop2899 = function(fold_var2900, i2901) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.__lt_(i2901,keys2898.length)!==false) {var k2902 = keys2898[i2901];var v2903 = obj2897[keys2898[i2901]];if (true!==false) {var fold_var2905 = fold_var2900;var fold_var2906 = M0.cons(M0.values(k2902,v2903),fold_var2905);var fold_var2904 = M0.values(fold_var2906);if (true!==false) {var if_res1930 = M0.not(false);} else {var if_res1930 = false;}if (if_res1930!==false) {var if_res1931 = for_loop2899(fold_var2904,i2901+1);} else {var if_res1931 = fold_var2904;}var if_res1932 = if_res1931;} else {var if_res1932 = fold_var2900;}var if_res1933 = if_res1932;} else {var if_res1933 = fold_var2900;}return if_res1933;};return M1.alt_reverse(for_loop2899(M0.rnull,0));};var js_object_p = function(v2907) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}return ((typeof(v2907)==="object")&&(v2907!==null))&&M0.not($rjs_core.Primitive.check(v2907));};var check_object = function(v2908) {if (arguments.length!==1) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (js_object_p(v2908)!==false) {var if_res1934 = M0.rvoid();} else {var if_res1934 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-js-object"),$rjs_core.UString.make("js-object?"),v2908);}return if_res1934;};var __rjs_quoted__ = {};__rjs_quoted__.js_object_p = js_object_p;__rjs_quoted__.js_array_p = js_array_p;__rjs_quoted__.in_js_array = in_js_array;__rjs_quoted__.js_string = js_string;export { __rjs_quoted__,js_object_p,js_array_p,assoc__gt_object,js_array__gt_list,js_string__gt_string,js_string,__eq__gt_$ };