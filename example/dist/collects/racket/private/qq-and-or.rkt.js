import * as $rjs_core from '../../../runtime/core.js';import * as M0 from "../../../runtime/kernel.rkt.js";var qq_append = function(a2834, b2835) {if (arguments.length!==2) {throw $rjs_core.racketContractError("arity mismatch");} else {}if (M0.list_p(a2834)!==false) {var if_res1889 = M0.append(a2834,b2835);} else {var if_res1889 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("unquote-splicing"),$rjs_core.UString.make("list?"),a2834);}return if_res1889;};var __rjs_quoted__ = {};__rjs_quoted__.qq_append = qq_append;export { __rjs_quoted__ };