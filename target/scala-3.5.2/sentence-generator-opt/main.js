'use strict';
var $p;
var $fileLevelThis = this;
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys;
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
  }
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = ({});
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, ({
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      }));
      i = ((i + 1) | 0);
    }
    return descriptors;
  });
})());
var $L0;
function $Char(c) {
  this.c = c;
}
$p = $Char.prototype;
$p.toString = (function() {
  return String.fromCharCode(this.c);
});
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object");
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0));
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.Z ? arg0.aN() : $objectClone(arg0));
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.l();
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.l();
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.l();
        } else {
          return $d_jl_Integer.l();
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.l();
      } else {
        return $d_jl_Double.l();
      }
    }
    case "boolean": {
      return $d_jl_Boolean.l();
    }
    case "undefined": {
      return $d_jl_Void.l();
    }
    default: {
      if ((arg0 instanceof $c_RTLong)) {
        return $d_jl_Long.l();
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.l();
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.l();
      } else {
        return null;
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte";
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short";
        } else {
          return "java.lang.Integer";
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float";
      } else {
        return "java.lang.Double";
      }
    }
    case "boolean": {
      return "java.lang.Boolean";
    }
    case "undefined": {
      return "java.lang.Void";
    }
    default: {
      if ((arg0 instanceof $c_RTLong)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.N;
      } else {
        return null.ix();
      }
    }
  }
}
function $dp_codePointAt__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__codePointAt__I__I(instance, x0);
  } else {
    return instance.io(x0);
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance);
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance);
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.F();
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance));
      } else {
        return $c_O.prototype.F.call(instance);
      }
    }
  }
}
function $dp_repeat__I__T(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__repeat__I__T(instance, x0);
  } else {
    return instance.iB(x0);
  }
}
function $dp_replaceAll__T__T__T(instance, x0, x1) {
  if (((typeof instance) === "string")) {
    return $f_T__replaceAll__T__T__T(instance, x0, x1);
  } else {
    return instance.iC(x0, x1);
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $intDiv(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return ((arg0 / arg1) | 0);
  }
}
function $intMod(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return ((arg0 % arg1) | 0);
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
}
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value);
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0);
    }
  }
  throw new TypeError((("super has no setter '" + arg2) + "'."));
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj);
      }
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32));
      }
      return biHash;
    }
    case "boolean": {
      return (obj ? 1231 : 1237);
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
    }
    default: {
      if ((obj === null)) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
}
function $bC(arg0) {
  return new $Char(arg0);
}
var $bC0 = $bC(0);
function $uC(arg0) {
  return ((arg0 === null) ? 0 : arg0.c);
}
function $uJ(arg0) {
  return ((arg0 === null) ? $L0 : arg0);
}
/** @constructor */
function $c_O() {
}
$p = $c_O.prototype;
$p.constructor = $c_O;
/** @constructor */
function $h_O() {
}
$h_O.prototype = $p;
$p.F = (function() {
  return $systemIdentityHashCode(this);
});
$p.k = (function() {
  var i = this.F();
  return (($objectClassName(this) + "@") + (+(i >>> 0.0)).toString(16));
});
$p.toString = (function() {
  return this.k();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = null;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.t = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.aN = (function() {
  return new $ac_O(this.a.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = false;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.t = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.aN = (function() {
  return new $ac_Z(this.a.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Uint16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.t = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aN = (function() {
  return new $ac_C(this.a.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int8Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.t = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aN = (function() {
  return new $ac_B(this.a.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.t = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aN = (function() {
  return new $ac_S(this.a.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.t = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aN = (function() {
  return new $ac_I(this.a.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = $L0;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.t = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.aN = (function() {
  return new $ac_J(this.a.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.t = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aN = (function() {
  return new $ac_F(this.a.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float64Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.t = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aN = (function() {
  return new $ac_D(this.a.slice());
});
function $TypeData() {
  this.C = (void 0);
  this.n = null;
  this.O = null;
  this.B = null;
  this.D = 0;
  this.z = null;
  this.E = "";
  this.L = (void 0);
  this.A = (void 0);
  this.F = (void 0);
  this.w = (void 0);
  this.J = false;
  this.N = "";
  this.X = false;
  this.Y = false;
  this.Z = false;
  this.I = (void 0);
}
$p = $TypeData.prototype;
$p.p = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.n = ({});
  this.z = zero;
  this.E = arrayEncodedName;
  var self = this;
  this.F = ((that) => (that === self));
  this.N = displayName;
  this.X = true;
  this.I = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this.A = new $TypeData().y(this, arrayClass, typedArrayClass);
  }
  return this;
});
$p.i = (function(kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.n = ancestors;
  this.E = (("L" + fullName) + ";");
  this.F = ((that) => (!(!that.n[internalName])));
  this.J = (kindOrCtor === 2);
  this.N = fullName;
  this.Y = (kindOrCtor === 1);
  this.I = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.n[internalName])))));
  if (((typeof kindOrCtor) !== "number")) {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
});
$p.y = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.E);
  this.C = arrayClass;
  this.n = ({
    z: 1,
    a: 1
  });
  this.O = componentData;
  this.B = componentData;
  this.D = 1;
  this.E = name;
  this.N = name;
  this.Z = true;
  var self = this;
  this.F = (isAssignableFromFun || ((that) => (self === that)));
  this.w = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
  this.I = ((obj) => (obj instanceof arrayClass));
  return this;
});
$p.a = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      this.a = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.a[i] = null;
      }
    } else {
      this.a = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.t = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
  });
  $p.aN = (function() {
    return new ArrayClass(this.a.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    z: 1,
    a: 1
  });
  this.O = componentData;
  this.B = arrayBase;
  this.D = arrayDepth;
  this.E = name;
  this.N = name;
  this.Z = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.D;
    return ((thatDepth === arrayDepth) ? arrayBase.F(that.B) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
  });
  this.F = isAssignableFromFun;
  this.w = ((array) => new ArrayClass(array));
  var self = this;
  this.I = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
  });
  return this;
});
$p.r = (function() {
  if ((!this.A)) {
    this.A = new $TypeData().a(this);
  }
  return this.A;
});
$p.l = (function() {
  if ((!this.L)) {
    this.L = new $c_jl_Class(this);
  }
  return this.L;
});
$p.R = (function(that) {
  return ((this === that) || this.F(that));
});
$p.S = (function() {
  return (this.P ? this.P.l() : null);
});
$p.Q = (function() {
  return (this.O ? this.O.l() : null);
});
$p.U = (function(length) {
  if ((this === $d_V)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return new (this.r().C)(length);
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false;
  } else {
    var arrayDepth = data.D;
    return ((arrayDepth === depth) ? (!data.B.X) : (arrayDepth > depth));
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_Z))));
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_C))));
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_B))));
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_S))));
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_I))));
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_J))));
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_F))));
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_D))));
}
var $d_O = new $TypeData();
$d_O.n = ({});
$d_O.E = "Ljava.lang.Object;";
$d_O.F = ((that) => (!that.X));
$d_O.N = "java.lang.Object";
$d_O.I = ((obj) => (obj !== null));
$d_O.A = new $TypeData().y($d_O, $ac_O, (void 0), ((that) => {
  var thatDepth = that.D;
  return ((thatDepth === 1) ? (!that.B.X) : (thatDepth > 1));
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().p((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().p(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().p(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().p(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().p(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().p(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().p(null, "J", "long", $ac_J, (void 0));
var $d_F = new $TypeData().p(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().p(0.0, "D", "double", $ac_D, Float64Array);
/** @constructor */
function $c_jl_FloatingPointBits$() {
  this.gm = false;
  this.ce = null;
  this.cM = null;
  this.e6 = null;
  this.de = false;
  this.gl = 0;
  this.go = 0;
  this.gn = null;
  $n_jl_FloatingPointBits$ = this;
  this.gm = true;
  this.ce = new ArrayBuffer(8);
  this.cM = new Int32Array(this.ce, 0, 2);
  new Float32Array(this.ce, 0, 2);
  this.e6 = new Float64Array(this.ce, 0, 1);
  this.cM[0] = 16909060;
  this.de = ((new Int8Array(this.ce, 0, 8)[0] | 0) === 1);
  this.gl = (this.de ? 0 : 1);
  this.go = (this.de ? 1 : 0);
  this.gn = null;
}
$p = $c_jl_FloatingPointBits$.prototype = new $h_O();
$p.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
}
$h_jl_FloatingPointBits$.prototype = $p;
$p.e1 = (function(value) {
  var iv = ((value | 0.0) | 0);
  if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
    return iv;
  } else {
    this.e6[0] = value;
    return ((this.cM[0] | 0) ^ (this.cM[1] | 0));
  }
});
var $d_jl_FloatingPointBits$ = new $TypeData().i($c_jl_FloatingPointBits$, "java.lang.FloatingPointBits$", ({
  b1: 1
}));
var $n_jl_FloatingPointBits$;
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$();
  }
  return $n_jl_FloatingPointBits$;
}
/** @constructor */
function $c_jl_System$Streams$() {
  this.e8 = null;
  this.gp = null;
  $n_jl_System$Streams$ = this;
  this.e8 = new $c_jl_JSConsoleBasedPrintStream(false);
  this.gp = new $c_jl_JSConsoleBasedPrintStream(true);
}
$p = $c_jl_System$Streams$.prototype = new $h_O();
$p.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $p;
var $d_jl_System$Streams$ = new $TypeData().i($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  bh: 1
}));
var $n_jl_System$Streams$;
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$();
  }
  return $n_jl_System$Streams$;
}
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = ({});
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  result["java.vm.version"] = "1.18.2";
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result;
}
/** @constructor */
function $c_jl_System$SystemProperties$() {
  this.df = null;
  this.e9 = null;
  $n_jl_System$SystemProperties$ = this;
  this.df = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.e9 = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.g4 = (function(key, default$1) {
  if ((this.df !== null)) {
    var dict = this.df;
    return ((!(!$m_jl_Utils$Cache$().cg.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.e9.g4(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  bi: 1
}));
var $n_jl_System$SystemProperties$;
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$();
  }
  return $n_jl_System$SystemProperties$;
}
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.cg = null;
  $n_jl_Utils$Cache$ = this;
  this.cg = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  bk: 1
}));
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$();
  }
  return $n_jl_Utils$Cache$;
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
function $isArrayOf_jl_Void(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ar)));
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  ar: 1
}), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch");
}
/** @constructor */
function $c_jl_reflect_Array$() {
}
$p = $c_jl_reflect_Array$.prototype = new $h_O();
$p.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
}
$h_jl_reflect_Array$.prototype = $p;
$p.aV = (function(array) {
  return ((array instanceof $ac_O) ? array.a.length : ((array instanceof $ac_Z) ? array.a.length : ((array instanceof $ac_C) ? array.a.length : ((array instanceof $ac_B) ? array.a.length : ((array instanceof $ac_S) ? array.a.length : ((array instanceof $ac_I) ? array.a.length : ((array instanceof $ac_J) ? array.a.length : ((array instanceof $ac_F) ? array.a.length : ((array instanceof $ac_D) ? array.a.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  bl: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
/** @constructor */
function $c_ju_Arrays$() {
}
$p = $c_ju_Arrays$.prototype = new $h_O();
$p.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
}
$h_ju_Arrays$.prototype = $p;
$p.fW = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.a.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (((-1) - startIndex) | 0);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.a[mid];
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid;
      } else if ((cmp === 0)) {
        return mid;
      } else {
        startIndex = ((1 + mid) | 0);
      }
    }
  }
});
$p.N = (function(original, newLength) {
  if ((newLength < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = $objectGetClass(original).P.Q().P.U(newLength);
  original.t(0, ret, 0, copyLength);
  return ret;
});
$p.w = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = original.a.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = $objectGetClass(original).P.Q().P.U(retLength);
  original.t(from, ret, 0, copyLength);
  return ret;
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  bm: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $p_ju_regex_PatternCompiler__parseError__T__E($thiz, desc) {
  throw new $c_ju_regex_PatternSyntaxException(desc, $thiz.W, $thiz.b);
}
function $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V($thiz) {
  var m = $m_ju_regex_PatternCompiler$().el.exec($thiz.W);
  if ((m !== null)) {
    var x = m[1];
    if ((x !== (void 0))) {
      var end = x.length;
      var i = 0;
      while ((i < end)) {
        var value = i;
        $thiz.H = ($thiz.H | $m_ju_regex_PatternCompiler$().g7(x.charCodeAt(value)));
        i = ((1 + i) | 0);
      }
    }
    if (((256 & $thiz.H) !== 0)) {
      $thiz.H = (64 | $thiz.H);
    }
    var x$1 = m[2];
    if ((x$1 !== (void 0))) {
      var end$1 = x$1.length;
      var i$1 = 0;
      while ((i$1 < end$1)) {
        var value$1 = i$1;
        $thiz.H = ($thiz.H & (~$m_ju_regex_PatternCompiler$().g7(x$1.charCodeAt(value$1))));
        i$1 = ((1 + i$1) | 0);
      }
    }
    $thiz.b = (($thiz.b + m[0].length) | 0);
  }
}
function $p_ju_regex_PatternCompiler__literal__T__T($thiz, s) {
  var result = "";
  var len = s.length;
  var i = 0;
  while ((i !== len)) {
    var cp = $f_T__codePointAt__I__I(s, i);
    result = (("" + result) + $p_ju_regex_PatternCompiler__literal__I__T($thiz, cp));
    i = ((i + ((cp >= 65536) ? 2 : 1)) | 0);
  }
  return result;
}
function $p_ju_regex_PatternCompiler__literal__I__T($thiz, cp) {
  var s = $m_ju_regex_PatternCompiler$().bG(cp);
  if ((cp < 128)) {
    switch (cp) {
      case 94:
      case 36:
      case 92:
      case 46:
      case 42:
      case 43:
      case 63:
      case 40:
      case 41:
      case 91:
      case 93:
      case 123:
      case 125:
      case 124: {
        return ("\\" + s);
        break;
      }
      default: {
        return (((66 & $thiz.H) !== 2) ? s : (((cp >= 65) && (cp <= 90)) ? ((("[" + s) + $m_ju_regex_PatternCompiler$().bG(((32 + cp) | 0))) + "]") : (((cp >= 97) && (cp <= 122)) ? ((("[" + $m_ju_regex_PatternCompiler$().bG((((-32) + cp) | 0))) + s) + "]") : s)));
      }
    }
  } else {
    return ((((-1024) & cp) === 56320) ? (("(?:" + s) + ")") : s);
  }
}
function $p_ju_regex_PatternCompiler__skipComments__V($thiz) {
  var pattern = $thiz.W;
  var len = pattern.length;
  while (true) {
    if (($thiz.b !== len)) {
      switch (pattern.charCodeAt($thiz.b)) {
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          $thiz.b = ((1 + $thiz.b) | 0);
          continue;
          break;
        }
        case 35: {
          $thiz.e0();
          continue;
          break;
        }
      }
    }
    break;
  }
}
function $p_ju_regex_PatternCompiler__compileRepeater__I__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken) {
  var pattern = $thiz.W;
  var len = pattern.length;
  var startOfRepeater = $thiz.b;
  var repeaterDispatchChar = ((startOfRepeater === len) ? 46 : pattern.charCodeAt(startOfRepeater));
  if (((((repeaterDispatchChar === 63) || (repeaterDispatchChar === 42)) || (repeaterDispatchChar === 43)) || (repeaterDispatchChar === 123))) {
    switch (compiledToken.charCodeAt(0)) {
      case 94:
      case 36: {
        var isTokenAnAssertion = true;
        break;
      }
      case 40: {
        var isTokenAnAssertion = ((compiledToken.charCodeAt(1) === 63) && (compiledToken.charCodeAt(2) !== 58));
        break;
      }
      case 92: {
        var c = compiledToken.charCodeAt(1);
        var isTokenAnAssertion = ((c === 98) || (c === 66));
        break;
      }
      default: {
        var isTokenAnAssertion = false;
      }
    }
    var wrappedToken = (isTokenAnAssertion ? (("(?:" + compiledToken) + ")") : compiledToken);
    var baseRepeater = $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T($thiz, repeaterDispatchChar);
    if (($thiz.b !== len)) {
      switch (pattern.charCodeAt($thiz.b)) {
        case 43: {
          $thiz.b = ((1 + $thiz.b) | 0);
          return $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T($thiz, compiledGroupCountBeforeThisToken, wrappedToken, baseRepeater);
          break;
        }
        case 63: {
          $thiz.b = ((1 + $thiz.b) | 0);
          return ((("" + wrappedToken) + baseRepeater) + "?");
          break;
        }
        default: {
          return (("" + wrappedToken) + baseRepeater);
        }
      }
    } else {
      return (("" + wrappedToken) + baseRepeater);
    }
  } else {
    return compiledToken;
  }
}
function $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T($thiz, repeaterDispatchChar) {
  var pattern = $thiz.W;
  var startOfRepeater = $thiz.b;
  $thiz.b = ((1 + $thiz.b) | 0);
  if ((repeaterDispatchChar === 123)) {
    var len = pattern.length;
    if (($thiz.b === len)) {
      var $x_1 = true;
    } else {
      var index = $thiz.b;
      var c = pattern.charCodeAt(index);
      var $x_1 = (!((c >= 48) && (c <= 57)));
    }
    if ($x_1) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    while (true) {
      if (($thiz.b !== len)) {
        var index$1 = $thiz.b;
        var c$1 = pattern.charCodeAt(index$1);
        var $x_2 = ((c$1 >= 48) && (c$1 <= 57));
      } else {
        var $x_2 = false;
      }
      if ($x_2) {
        $thiz.b = ((1 + $thiz.b) | 0);
      } else {
        break;
      }
    }
    if (($thiz.b === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    if ((pattern.charCodeAt($thiz.b) === 44)) {
      $thiz.b = ((1 + $thiz.b) | 0);
      while (true) {
        if (($thiz.b !== len)) {
          var index$3 = $thiz.b;
          var c$2 = pattern.charCodeAt(index$3);
          var $x_3 = ((c$2 >= 48) && (c$2 <= 57));
        } else {
          var $x_3 = false;
        }
        if ($x_3) {
          $thiz.b = ((1 + $thiz.b) | 0);
        } else {
          break;
        }
      }
    }
    if ((($thiz.b === len) || (pattern.charCodeAt($thiz.b) !== 125))) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    $thiz.b = ((1 + $thiz.b) | 0);
  }
  return pattern.substring(startOfRepeater, $thiz.b);
}
function $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken, baseRepeater) {
  var end = ($thiz.aa.length | 0);
  var i = 0;
  while ((i < end)) {
    var value = i;
    var mapped = ($thiz.aa[value] | 0);
    if ((mapped > compiledGroupCountBeforeThisToken)) {
      $thiz.aa[value] = ((1 + mapped) | 0);
    }
    i = ((1 + i) | 0);
  }
  var amendedToken = compiledToken.replace($m_ju_regex_PatternCompiler$().em, ((arg1$2, arg2$2, arg3$2) => {
    if ((((arg2$2.length % 2) | 0) === 0)) {
      return arg1$2;
    } else {
      var groupNumber = (parseInt(arg3$2, 10) | 0);
      return ((groupNumber > compiledGroupCountBeforeThisToken) ? (("" + arg2$2) + ((1 + groupNumber) | 0)) : arg1$2);
    }
  }));
  $thiz.a9 = ((1 + $thiz.a9) | 0);
  var myGroupNumber = ((1 + compiledGroupCountBeforeThisToken) | 0);
  return ((((("(?:(?=(" + amendedToken) + baseRepeater) + "))\\") + myGroupNumber) + ")");
}
function $p_ju_regex_PatternCompiler__compileEscape__T($thiz) {
  var pattern = $thiz.W;
  var len = pattern.length;
  if ((((1 + $thiz.b) | 0) === len)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\ at end of pattern");
  }
  $thiz.b = ((1 + $thiz.b) | 0);
  var index = $thiz.b;
  var dispatchChar = pattern.charCodeAt(index);
  switch (dispatchChar) {
    case 100:
    case 68:
    case 104:
    case 72:
    case 115:
    case 83:
    case 118:
    case 86:
    case 119:
    case 87:
    case 112:
    case 80: {
      var cls = $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, dispatchChar);
      var x1$2 = cls.cQ;
      switch (x1$2) {
        case 0: {
          return (("\\p{" + cls.as) + "}");
          break;
        }
        case 1: {
          return (("\\P{" + cls.as) + "}");
          break;
        }
        case 2: {
          return (("[" + cls.as) + "]");
          break;
        }
        case 3: {
          return $m_ju_regex_PatternCompiler$().d8(cls.as);
          break;
        }
        default: {
          throw new $c_jl_AssertionError(x1$2);
        }
      }
      break;
    }
    case 98: {
      if ((pattern.substring($thiz.b, ((4 + $thiz.b) | 0)) === "b{g}")) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\b{g} is not supported");
      } else if (((320 & $thiz.H) !== 0)) {
        $thiz.cb("\\b with UNICODE_CASE", "2018");
      } else {
        $thiz.b = ((1 + $thiz.b) | 0);
        return "\\b";
      }
      break;
    }
    case 66: {
      if (((320 & $thiz.H) !== 0)) {
        $thiz.cb("\\B with UNICODE_CASE", "2018");
      } else {
        $thiz.b = ((1 + $thiz.b) | 0);
        return "\\B";
      }
      break;
    }
    case 65: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return "^";
      break;
    }
    case 71: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\G in the middle of a pattern is not supported");
      break;
    }
    case 90: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return (("(?=" + (((1 & $thiz.H) !== 0) ? "\n" : "(?:\r\n?|[\n\u0085\u2028\u2029])")) + "?$)");
      break;
    }
    case 122: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return "$";
      break;
    }
    case 82: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return "(?:\r\n|[\n-\r\u0085\u2028\u2029])";
      break;
    }
    case 88: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\X is not supported");
      break;
    }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57: {
      var start = $thiz.b;
      var end = ((1 + start) | 0);
      while (true) {
        if ((end !== len)) {
          var index$1 = end;
          var c = pattern.charCodeAt(index$1);
          var $x_2 = ((c >= 48) && (c <= 57));
        } else {
          var $x_2 = false;
        }
        if ($x_2) {
          var s = pattern.substring(start, ((1 + end) | 0));
          var $x_1 = ((parseInt(s, 10) | 0) <= (((-1) + ($thiz.aa.length | 0)) | 0));
        } else {
          var $x_1 = false;
        }
        if ($x_1) {
          end = ((1 + end) | 0);
        } else {
          break;
        }
      }
      var groupString = pattern.substring(start, end);
      var groupNumber = (parseInt(groupString, 10) | 0);
      if ((groupNumber > (((-1) + ($thiz.aa.length | 0)) | 0))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("numbered capturing group <" + groupNumber) + "> does not exist"));
      }
      var compiledGroupNumber = ($thiz.aa[groupNumber] | 0);
      $thiz.b = end;
      return (("(?:\\" + compiledGroupNumber) + ")");
      break;
    }
    case 107: {
      $thiz.b = ((1 + $thiz.b) | 0);
      if ((($thiz.b === len) || (pattern.charCodeAt($thiz.b) !== 60))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\k is not followed by '<' for named capturing group");
      }
      $thiz.b = ((1 + $thiz.b) | 0);
      var groupName = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
      var dict = $thiz.ci;
      if ((!(!(!$m_jl_Utils$Cache$().cg.call(dict, groupName))))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + groupName) + "> does not exit"));
      }
      var groupNumber$2 = (dict[groupName] | 0);
      var compiledGroupNumber$2 = ($thiz.aa[groupNumber$2] | 0);
      $thiz.b = ((1 + $thiz.b) | 0);
      return (("(?:\\" + compiledGroupNumber$2) + ")");
      break;
    }
    case 81: {
      var start$2 = ((1 + $thiz.b) | 0);
      var end$2 = (pattern.indexOf("\\E", start$2) | 0);
      if ((end$2 < 0)) {
        $thiz.b = pattern.length;
        return $p_ju_regex_PatternCompiler__literal__T__T($thiz, pattern.substring(start$2));
      } else {
        $thiz.b = ((2 + end$2) | 0);
        return $p_ju_regex_PatternCompiler__literal__T__T($thiz, pattern.substring(start$2, end$2));
      }
      break;
    }
    default: {
      return $p_ju_regex_PatternCompiler__literal__I__T($thiz, $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz));
    }
  }
}
function $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) {
  var pattern = $thiz.W;
  var x1 = $f_T__codePointAt__I__I(pattern, $thiz.b);
  switch (x1) {
    case 48: {
      return $p_ju_regex_PatternCompiler__parseOctalEscape__I($thiz);
      break;
    }
    case 120: {
      return $p_ju_regex_PatternCompiler__parseHexEscape__I($thiz);
      break;
    }
    case 117: {
      return $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I($thiz);
      break;
    }
    case 78: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\N is not supported");
      break;
    }
    case 97: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 7;
      break;
    }
    case 116: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 9;
      break;
    }
    case 110: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 10;
      break;
    }
    case 102: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 12;
      break;
    }
    case 114: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 13;
      break;
    }
    case 101: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 27;
      break;
    }
    case 99: {
      $thiz.b = ((1 + $thiz.b) | 0);
      if (($thiz.b === pattern.length)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal control escape sequence");
      }
      var cp = $f_T__codePointAt__I__I(pattern, $thiz.b);
      $thiz.b = (($thiz.b + ((cp >= 65536) ? 2 : 1)) | 0);
      return (64 ^ cp);
      break;
    }
    default: {
      if ((((x1 >= 65) && (x1 <= 90)) || ((x1 >= 97) && (x1 <= 122)))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal/unsupported escape sequence");
      }
      $thiz.b = (($thiz.b + ((x1 >= 65536) ? 2 : 1)) | 0);
      return x1;
    }
  }
}
function $p_ju_regex_PatternCompiler__parseOctalEscape__I($thiz) {
  var pattern = $thiz.W;
  var len = pattern.length;
  var start = $thiz.b;
  var d1 = ((((1 + start) | 0) < len) ? (((-48) + pattern.charCodeAt(((1 + start) | 0))) | 0) : (-1));
  if (((d1 < 0) || (d1 > 7))) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal octal escape sequence");
  }
  var d2 = ((((2 + start) | 0) < len) ? (((-48) + pattern.charCodeAt(((2 + start) | 0))) | 0) : (-1));
  if (((d2 < 0) || (d2 > 7))) {
    $thiz.b = ((2 + $thiz.b) | 0);
    return d1;
  } else if ((d1 > 3)) {
    $thiz.b = ((3 + $thiz.b) | 0);
    return (((d1 << 3) + d2) | 0);
  } else {
    var d3 = ((((3 + start) | 0) < len) ? (((-48) + pattern.charCodeAt(((3 + start) | 0))) | 0) : (-1));
    if (((d3 < 0) || (d3 > 7))) {
      $thiz.b = ((3 + $thiz.b) | 0);
      return (((d1 << 3) + d2) | 0);
    } else {
      $thiz.b = ((4 + $thiz.b) | 0);
      return (((((d1 << 6) + (d2 << 3)) | 0) + d3) | 0);
    }
  }
}
function $p_ju_regex_PatternCompiler__parseHexEscape__I($thiz) {
  var pattern = $thiz.W;
  var len = pattern.length;
  var start = ((1 + $thiz.b) | 0);
  if (((start !== len) && (pattern.charCodeAt(start) === 123))) {
    var innerStart = ((1 + start) | 0);
    var innerEnd = (pattern.indexOf("}", innerStart) | 0);
    if ((innerEnd < 0)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed hexadecimal escape sequence");
    }
    var cp = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, innerStart, innerEnd, "hexadecimal");
    $thiz.b = ((1 + innerEnd) | 0);
    return cp;
  } else {
    var cp$2 = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, ((2 + start) | 0), "hexadecimal");
    $thiz.b = ((2 + start) | 0);
    return cp$2;
  }
}
function $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I($thiz) {
  var pattern = $thiz.W;
  var start = ((1 + $thiz.b) | 0);
  var end = ((4 + start) | 0);
  var codeUnit = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, end, "Unicode");
  $thiz.b = end;
  var lowStart = ((2 + end) | 0);
  var lowEnd = ((4 + lowStart) | 0);
  if (((((-1024) & codeUnit) === 55296) && (pattern.substring(end, lowStart) === "\\u"))) {
    var low = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, lowStart, lowEnd, "Unicode");
    if ((((-1024) & low) === 56320)) {
      $thiz.b = lowEnd;
      return ((((64 + (1023 & codeUnit)) | 0) << 10) | (1023 & low));
    } else {
      return codeUnit;
    }
  } else {
    return codeUnit;
  }
}
function $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, end, nameForError) {
  var pattern = $thiz.W;
  var len = pattern.length;
  if (((start === end) || (end > len))) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("Illegal " + nameForError) + " escape sequence"));
  }
  var i = start;
  while ((i < end)) {
    var value = i;
    var c = pattern.charCodeAt(value);
    if ((!((((c >= 48) && (c <= 57)) || ((c >= 65) && (c <= 70))) || ((c >= 97) && (c <= 102))))) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("Illegal " + nameForError) + " escape sequence"));
    }
    i = ((1 + i) | 0);
  }
  if ((((end - start) | 0) > 6)) {
    var cp = 1114112;
  } else {
    var s = pattern.substring(start, end);
    var cp = (parseInt(s, 16) | 0);
  }
  if ((cp > 1114111)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Hexadecimal codepoint is too big");
  }
  return cp;
}
function $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, dispatchChar) {
  $thiz.b = ((1 + $thiz.b) | 0);
  switch (dispatchChar) {
    case 100:
    case 68: {
      var positive = $m_ju_regex_PatternCompiler$().eg;
      break;
    }
    case 104:
    case 72: {
      var positive = $m_ju_regex_PatternCompiler$().ej;
      break;
    }
    case 115:
    case 83: {
      var positive = $m_ju_regex_PatternCompiler$().eh;
      break;
    }
    case 118:
    case 86: {
      var positive = $m_ju_regex_PatternCompiler$().ek;
      break;
    }
    case 119:
    case 87: {
      var positive = $m_ju_regex_PatternCompiler$().ei;
      break;
    }
    case 112:
    case 80: {
      var positive = $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz);
      break;
    }
    default: {
      var positive;
      throw new $c_jl_AssertionError($bC(dispatchChar));
    }
  }
  return ((dispatchChar >= 97) ? positive : positive.hz());
}
function $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  var pattern = $thiz.W;
  var len = pattern.length;
  var start = $thiz.b;
  if ((start === len)) {
    var property = "?";
  } else if ((pattern.charCodeAt(start) === 123)) {
    var innerStart = ((1 + start) | 0);
    var innerEnd = (pattern.indexOf("}", innerStart) | 0);
    if ((innerEnd < 0)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character family");
    }
    $thiz.b = innerEnd;
    var property = pattern.substring(innerStart, innerEnd);
  } else {
    var property = pattern.substring(start, ((1 + start) | 0));
  }
  var dict = $m_ju_regex_PatternCompiler$().dl;
  if ((!(!(!$m_jl_Utils$Cache$().cg.call(dict, property))))) {
    $thiz.cb("Unicode character family", "2018");
  }
  var property2 = ((((66 & $thiz.H) === 2) && ((property === "Lower") || (property === "Upper"))) ? "Alpha" : property);
  var dict$1 = $m_ju_regex_PatternCompiler$().dl;
  var result = dict$1[property2];
  $thiz.b = ((1 + $thiz.b) | 0);
  return result;
}
function $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz) {
  var pattern = $thiz.W;
  var len = pattern.length;
  $thiz.b = ((1 + $thiz.b) | 0);
  var isNegated = (($thiz.b !== len) && (pattern.charCodeAt($thiz.b) === 94));
  if (isNegated) {
    $thiz.b = ((1 + $thiz.b) | 0);
  }
  var builder = new $c_ju_regex_PatternCompiler$CharacterClassBuilder(((66 & $thiz.H) === 2), isNegated);
  while (($thiz.b !== len)) {
    var x1 = $f_T__codePointAt__I__I(pattern, $thiz.b);
    matchResult: {
      switch (x1) {
        case 93: {
          $thiz.b = ((1 + $thiz.b) | 0);
          return builder.hg();
          break;
        }
        case 38: {
          $thiz.b = ((1 + $thiz.b) | 0);
          if ((($thiz.b !== len) && (pattern.charCodeAt($thiz.b) === 38))) {
            $thiz.b = ((1 + $thiz.b) | 0);
            builder.hW();
            break matchResult;
          } else {
            $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, 38, len, pattern, builder);
            break matchResult;
          }
          break;
        }
        case 91: {
          $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(builder, $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz));
          break matchResult;
          break;
        }
        case 92: {
          $thiz.b = ((1 + $thiz.b) | 0);
          if (($thiz.b === len)) {
            $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal escape sequence");
          }
          var index$2 = $thiz.b;
          var c2 = pattern.charCodeAt(index$2);
          switch (c2) {
            case 100:
            case 68:
            case 104:
            case 72:
            case 115:
            case 83:
            case 118:
            case 86:
            case 119:
            case 87:
            case 112:
            case 80: {
              builder.gT($p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, c2));
              break matchResult;
              break;
            }
            case 81: {
              $thiz.b = ((1 + $thiz.b) | 0);
              var fromIndex = $thiz.b;
              var end = (pattern.indexOf("\\E", fromIndex) | 0);
              if ((end < 0)) {
                $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
              }
              builder.gV(pattern, $thiz.b, end);
              $thiz.b = ((2 + end) | 0);
              break matchResult;
              break;
            }
            default: {
              $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz), len, pattern, builder);
              break matchResult;
            }
          }
          break;
        }
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          if (((4 & $thiz.H) !== 0)) {
            $thiz.b = ((1 + $thiz.b) | 0);
            break matchResult;
          }
          break;
        }
        case 35: {
          if (((4 & $thiz.H) !== 0)) {
            $thiz.e0();
            break matchResult;
          }
          break;
        }
      }
      $thiz.b = (($thiz.b + ((x1 >= 65536) ? 2 : 1)) | 0);
      $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, x1, len, pattern, builder);
    }
  }
  $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
}
function $p_ju_regex_PatternCompiler__compileGroup__T($thiz) {
  var pattern = $thiz.W;
  var len = pattern.length;
  var start = $thiz.b;
  if (((((1 + start) | 0) === len) || (pattern.charCodeAt(((1 + start) | 0)) !== 63))) {
    $thiz.b = ((1 + start) | 0);
    $thiz.a9 = ((1 + $thiz.a9) | 0);
    $thiz.aa.push($thiz.a9);
    return (("(" + $thiz.cL(true)) + ")");
  } else {
    if ((((2 + start) | 0) === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
    }
    var index$1 = ((2 + start) | 0);
    var c1 = pattern.charCodeAt(index$1);
    if ((((c1 === 58) || (c1 === 61)) || (c1 === 33))) {
      $thiz.b = ((3 + start) | 0);
      return ((("" + pattern.substring(start, ((3 + start) | 0))) + $thiz.cL(true)) + ")");
    } else if ((c1 === 60)) {
      if ((((3 + start) | 0) === len)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
      }
      var index$2 = ((3 + start) | 0);
      var c2 = pattern.charCodeAt(index$2);
      if ((((c2 >= 65) && (c2 <= 90)) || ((c2 >= 97) && (c2 <= 122)))) {
        $thiz.b = ((3 + start) | 0);
        var name = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
        var dict = $thiz.ci;
        if ((!(!$m_jl_Utils$Cache$().cg.call(dict, name)))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + name) + "> is already defined"));
        }
        $thiz.a9 = ((1 + $thiz.a9) | 0);
        $thiz.aa.push($thiz.a9);
        var dict$1 = $thiz.ci;
        var value = (((-1) + ($thiz.aa.length | 0)) | 0);
        dict$1[name] = value;
        $thiz.b = ((1 + $thiz.b) | 0);
        return (("(" + $thiz.cL(true)) + ")");
      } else {
        if (((c2 !== 61) && (c2 !== 33))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unknown look-behind group");
        }
        $thiz.cb("Look-behind group", "2018");
      }
    } else if ((c1 === 62)) {
      $thiz.b = ((3 + start) | 0);
      $thiz.a9 = ((1 + $thiz.a9) | 0);
      var groupNumber = $thiz.a9;
      return (((("(?:(?=(" + $thiz.cL(true)) + "))\\") + groupNumber) + ")");
    } else {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Embedded flag expression in the middle of a pattern is not supported");
    }
  }
}
function $p_ju_regex_PatternCompiler__parseGroupName__T($thiz) {
  var pattern = $thiz.W;
  var len = pattern.length;
  var start = $thiz.b;
  while (true) {
    if (($thiz.b !== len)) {
      var index = $thiz.b;
      var c = pattern.charCodeAt(index);
      var $x_1 = ((((c >= 65) && (c <= 90)) || ((c >= 97) && (c <= 122))) || ((c >= 48) && (c <= 57)));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $thiz.b = ((1 + $thiz.b) | 0);
    } else {
      break;
    }
  }
  if ((($thiz.b === len) || (pattern.charCodeAt($thiz.b) !== 62))) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "named capturing group is missing trailing '>'");
  }
  return pattern.substring(start, $thiz.b);
}
function $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, startCodePoint, len$2, pattern$3, builder$1) {
  if (((4 & $thiz.H) !== 0)) {
    $p_ju_regex_PatternCompiler__skipComments__V($thiz);
  }
  if ((($thiz.b !== len$2) && (pattern$3.charCodeAt($thiz.b) === 45))) {
    $thiz.b = ((1 + $thiz.b) | 0);
    if (((4 & $thiz.H) !== 0)) {
      $p_ju_regex_PatternCompiler__skipComments__V($thiz);
    }
    if (($thiz.b === len$2)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
    }
    var cpEnd = $f_T__codePointAt__I__I(pattern$3, $thiz.b);
    if (((cpEnd === 91) || (cpEnd === 93))) {
      builder$1.d5(startCodePoint);
      builder$1.d5(45);
    } else {
      $thiz.b = (($thiz.b + ((cpEnd >= 65536) ? 2 : 1)) | 0);
      var endCodePoint = ((cpEnd === 92) ? $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) : cpEnd);
      if ((endCodePoint < startCodePoint)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal character range");
      }
      builder$1.gU(startCodePoint, endCodePoint);
    }
  } else {
    builder$1.d5(startCodePoint);
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler(pattern, flags) {
  this.W = null;
  this.H = 0;
  this.cP = false;
  this.b = 0;
  this.a9 = 0;
  this.aa = null;
  this.ci = null;
  this.W = pattern;
  this.H = flags;
  this.cP = false;
  this.b = 0;
  this.a9 = 0;
  this.aa = [0];
  this.ci = ({});
}
$p = $c_ju_regex_PatternCompiler.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler;
/** @constructor */
function $h_ju_regex_PatternCompiler() {
}
$h_ju_regex_PatternCompiler.prototype = $p;
$p.h8 = (function() {
  if (((256 & this.H) !== 0)) {
    this.H = (64 | this.H);
  }
  var isLiteral = ((16 & this.H) !== 0);
  if ((!isLiteral)) {
    $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V(this);
  }
  if (((128 & this.H) !== 0)) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "CANON_EQ is not supported");
  }
  if (((8 & this.H) !== 0)) {
    this.cb("MULTILINE", "2018");
  }
  if (((256 & this.H) !== 0)) {
    this.cb("UNICODE_CHARACTER_CLASS", "2018");
  }
  if (isLiteral) {
    var jsPattern = $p_ju_regex_PatternCompiler__literal__T__T(this, this.W);
  } else {
    if ((this.W.substring(this.b, ((2 + this.b) | 0)) === "\\G")) {
      this.cP = true;
      this.b = ((2 + this.b) | 0);
    }
    var jsPattern = this.cL(false);
  }
  var baseJSFlags = ($m_ju_regex_PatternCompiler$().dk ? "us" : "u");
  var jsFlags = (((66 & this.H) === 66) ? (baseJSFlags + "i") : baseJSFlags);
  return new $c_ju_regex_Pattern(this.W, this.H, jsPattern, jsFlags, this.cP, (((-1) + (this.aa.length | 0)) | 0), this.aa, this.ci);
});
$p.cb = (function(purpose, es) {
  $p_ju_regex_PatternCompiler__parseError__T__E(this, (((((((purpose + " is not supported because it requires RegExp features of ECMAScript ") + es) + ".\n") + ((("If you only target environments with ES" + es) + "+, you can enable ES") + es)) + " features with\n") + ("  scalaJSLinkerConfig ~= { _.withESFeatures(_.withESVersion(ESVersion.ES" + es)) + ")) }\nor an equivalent configuration depending on your build tool."));
});
$p.cL = (function(insideGroup) {
  var pattern = this.W;
  var len = pattern.length;
  var result = "";
  while ((this.b !== len)) {
    var dispatchCP = $f_T__codePointAt__I__I(pattern, this.b);
    matchResult: {
      switch (dispatchCP) {
        case 41: {
          if ((!insideGroup)) {
            $p_ju_regex_PatternCompiler__parseError__T__E(this, "Unmatched closing ')'");
          }
          this.b = ((1 + this.b) | 0);
          return result;
          break;
        }
        case 124: {
          if ((this.cP && (!insideGroup))) {
            $p_ju_regex_PatternCompiler__parseError__T__E(this, "\\G is not supported when there is an alternative at the top level");
          }
          this.b = ((1 + this.b) | 0);
          result = (result + "|");
          break matchResult;
          break;
        }
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          if (((4 & this.H) !== 0)) {
            this.b = ((1 + this.b) | 0);
            break matchResult;
          }
          break;
        }
        case 35: {
          if (((4 & this.H) !== 0)) {
            this.e0();
            break matchResult;
          }
          break;
        }
        case 63:
        case 42:
        case 43:
        case 123: {
          $p_ju_regex_PatternCompiler__parseError__T__E(this, (("Dangling meta character '" + $m_ju_regex_PatternCompiler$().bG(dispatchCP)) + "'"));
          break;
        }
      }
      var compiledGroupCountBeforeThisToken = this.a9;
      switch (dispatchCP) {
        case 92: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileEscape__T(this);
          break;
        }
        case 91: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileCharacterClass__T(this);
          break;
        }
        case 40: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileGroup__T(this);
          break;
        }
        case 94: {
          this.b = ((1 + this.b) | 0);
          var compiledToken = "^";
          break;
        }
        case 36: {
          this.b = ((1 + this.b) | 0);
          var compiledToken = "$";
          break;
        }
        case 46: {
          this.b = ((1 + this.b) | 0);
          var rejected = (((32 & this.H) !== 0) ? "" : (((1 & this.H) !== 0) ? "\n" : "\n\r\u0085\u2028\u2029"));
          var compiledToken = $m_ju_regex_PatternCompiler$().d8(rejected);
          break;
        }
        default: {
          this.b = ((this.b + ((dispatchCP >= 65536) ? 2 : 1)) | 0);
          var compiledToken = $p_ju_regex_PatternCompiler__literal__I__T(this, dispatchCP);
        }
      }
      result = (("" + result) + $p_ju_regex_PatternCompiler__compileRepeater__I__T__T(this, compiledGroupCountBeforeThisToken, compiledToken));
    }
  }
  if (insideGroup) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "Unclosed group");
  }
  return result;
});
$p.e0 = (function() {
  var pattern = this.W;
  var len = pattern.length;
  while (true) {
    if ((this.b !== len)) {
      var index = this.b;
      var c = pattern.charCodeAt(index);
      var $x_1 = (!(((((c === 10) || (c === 13)) || (c === 133)) || (c === 8232)) || (c === 8233)));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      this.b = ((1 + this.b) | 0);
    } else {
      break;
    }
  }
});
var $d_ju_regex_PatternCompiler = new $TypeData().i($c_ju_regex_PatternCompiler, "java.util.regex.PatternCompiler", ({
  bt: 1
}));
function $p_ju_regex_PatternCompiler$__featureTest__T__Z($thiz, flags) {
  try {
    new RegExp("", flags);
    return true;
  } catch (e) {
    return false;
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler$() {
  this.el = null;
  this.em = null;
  this.gu = false;
  this.gt = false;
  this.dk = false;
  this.eg = null;
  this.gq = null;
  this.ej = null;
  this.eh = null;
  this.gr = null;
  this.ek = null;
  this.ei = null;
  this.gs = null;
  this.dl = null;
  this.gv = null;
  $n_ju_regex_PatternCompiler$ = this;
  this.el = new RegExp("^\\(\\?([idmsuxU]*)(?:-([idmsuxU]*))?\\)");
  this.em = new RegExp("(\\\\+)(\\d+)", "g");
  this.gu = true;
  this.gt = true;
  this.dk = $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "us");
  $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "d");
  this.eg = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  this.gq = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "Nd");
  this.ej = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t \u00a0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000");
  this.eh = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  this.gr = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "White_Space");
  this.ek = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\n-\r\u0085\u2028\u2029");
  this.ei = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-zA-Z_0-9");
  this.gs = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\\p{Alphabetic}\\p{Mn}\\p{Me}\\p{Mc}\\p{Nd}\\p{Pc}\\p{Join_Control}");
  var r = ({});
  var value = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-z");
  r.Lower = value;
  var value$1 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "A-Z");
  r.Upper = value$1;
  var value$2 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\u0000-\u007f");
  r.ASCII = value$2;
  var value$3 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "A-Za-z");
  r.Alpha = value$3;
  var value$4 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  r.Digit = value$4;
  var value$5 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9A-Za-z");
  r.Alnum = value$5;
  var value$6 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "!-/:-@[-`{-~");
  r.Punct = value$6;
  var value$7 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "!-~");
  r.Graph = value$7;
  var value$8 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, " -~");
  r.Print = value$8;
  var value$9 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t ");
  r.Blank = value$9;
  var value$10 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\u0000-\u001f\u007f");
  r.Cntrl = value$10;
  var value$11 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9A-Fa-f");
  r.XDigit = value$11;
  var value$12 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  r.Space = value$12;
  this.dl = r;
  this.gv = new RegExp("(?:^|_)[a-z]", "g");
}
$p = $c_ju_regex_PatternCompiler$.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$;
/** @constructor */
function $h_ju_regex_PatternCompiler$() {
}
$h_ju_regex_PatternCompiler$.prototype = $p;
$p.h7 = (function(regex, flags) {
  return new $c_ju_regex_PatternCompiler(regex, flags).h8();
});
$p.g7 = (function(c) {
  switch (c) {
    case 105: {
      return 2;
      break;
    }
    case 100: {
      return 1;
      break;
    }
    case 109: {
      return 8;
      break;
    }
    case 115: {
      return 32;
      break;
    }
    case 117: {
      return 64;
      break;
    }
    case 120: {
      return 4;
      break;
    }
    case 85: {
      return 256;
      break;
    }
    default: {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "bad in-pattern flag");
    }
  }
});
$p.d8 = (function(characters) {
  return ((characters !== "") ? (("[^" + characters) + "]") : ($m_ju_regex_PatternCompiler$().dk ? "." : "[\\d\\D]"));
});
$p.bG = (function(codePoint) {
  return String.fromCodePoint(codePoint);
});
var $d_ju_regex_PatternCompiler$ = new $TypeData().i($c_ju_regex_PatternCompiler$, "java.util.regex.PatternCompiler$", ({
  bu: 1
}));
var $n_ju_regex_PatternCompiler$;
function $m_ju_regex_PatternCompiler$() {
  if ((!$n_ju_regex_PatternCompiler$)) {
    $n_ju_regex_PatternCompiler$ = new $c_ju_regex_PatternCompiler$();
  }
  return $n_ju_regex_PatternCompiler$;
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V($thiz, alt) {
  if (($thiz.ad === "")) {
    $thiz.ad = alt;
  } else {
    $thiz.ad = (($thiz.ad + "|") + alt);
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T($thiz) {
  if ($thiz.dn) {
    var negThisSegment = $m_ju_regex_PatternCompiler$().d8($thiz.K);
    return (($thiz.ad === "") ? negThisSegment : (((("(?:(?!" + $thiz.ad) + ")") + negThisSegment) + ")"));
  } else {
    return (($thiz.K === "") ? (($thiz.ad === "") ? "[^\\d\\D]" : (("(?:" + $thiz.ad) + ")")) : (($thiz.ad === "") ? (("[" + $thiz.K) + "]") : (((("(?:" + $thiz.ad) + "|[") + $thiz.K) + "])")));
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T($thiz, codePoint) {
  var s = $m_ju_regex_PatternCompiler$().bG(codePoint);
  return (((((codePoint === 93) || (codePoint === 92)) || (codePoint === 45)) || (codePoint === 94)) ? ("\\" + s) : s);
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CharacterClassBuilder(asciiCaseInsensitive, isNegated) {
  this.dm = false;
  this.dn = false;
  this.cj = null;
  this.ad = null;
  this.K = null;
  this.dm = asciiCaseInsensitive;
  this.dn = isNegated;
  this.cj = "";
  this.ad = "";
  this.K = "";
}
$p = $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$CharacterClassBuilder;
/** @constructor */
function $h_ju_regex_PatternCompiler$CharacterClassBuilder() {
}
$h_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = $p;
$p.hg = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  return ((this.cj === "") ? conjunct : ((("(?:" + this.cj) + conjunct) + ")"));
});
$p.hW = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  this.cj = (this.cj + (this.dn ? (conjunct + "|") : (("(?=" + conjunct) + ")")));
  this.ad = "";
  this.K = "";
});
$p.gT = (function(cls) {
  var x1 = cls.cQ;
  switch (x1) {
    case 0: {
      this.K = ((this.K + ("\\p{" + cls.as)) + "}");
      break;
    }
    case 1: {
      this.K = ((this.K + ("\\P{" + cls.as)) + "}");
      break;
    }
    case 2: {
      this.K = (("" + this.K) + cls.as);
      break;
    }
    case 3: {
      $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(this, $m_ju_regex_PatternCompiler$().d8(cls.as));
      break;
    }
    default: {
      throw new $c_jl_AssertionError(x1);
    }
  }
});
$p.gV = (function(str, start, end) {
  var i = start;
  while ((i !== end)) {
    var codePoint = $f_T__codePointAt__I__I(str, i);
    this.d5(codePoint);
    i = ((i + ((codePoint >= 65536) ? 2 : 1)) | 0);
  }
});
$p.d5 = (function(codePoint) {
  var s = $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, codePoint);
  if ((((-1024) & codePoint) === 56320)) {
    this.K = (("" + s) + this.K);
  } else {
    this.K = (("" + this.K) + s);
  }
  if (this.dm) {
    if (((codePoint >= 65) && (codePoint <= 90))) {
      this.K = (("" + this.K) + $m_ju_regex_PatternCompiler$().bG(((32 + codePoint) | 0)));
    } else if (((codePoint >= 97) && (codePoint <= 122))) {
      this.K = (("" + this.K) + $m_ju_regex_PatternCompiler$().bG((((-32) + codePoint) | 0)));
    }
  }
});
$p.gU = (function(startCodePoint, endCodePoint) {
  var s = (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, startCodePoint) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, endCodePoint));
  if ((((-1024) & startCodePoint) === 56320)) {
    this.K = (s + this.K);
  } else {
    this.K = (this.K + s);
  }
  if (this.dm) {
    var start = ((startCodePoint > 65) ? startCodePoint : 65);
    var end = ((endCodePoint < 90) ? endCodePoint : 90);
    if ((start <= end)) {
      var $x_1 = this.K;
      var start$1 = ((32 + start) | 0);
      var end$1 = ((32 + end) | 0);
      this.K = ($x_1 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$1) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$1)));
    }
    var start$2 = ((startCodePoint > 97) ? startCodePoint : 97);
    var end$2 = ((endCodePoint < 122) ? endCodePoint : 122);
    if ((start$2 <= end$2)) {
      var $x_2 = this.K;
      var start$3 = (((-32) + start$2) | 0);
      var end$3 = (((-32) + end$2) | 0);
      this.K = ($x_2 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$3) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$3)));
    }
  }
});
var $d_ju_regex_PatternCompiler$CharacterClassBuilder = new $TypeData().i($c_ju_regex_PatternCompiler$CharacterClassBuilder, "java.util.regex.PatternCompiler$CharacterClassBuilder", ({
  bv: 1
}));
function $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  if ((!$thiz.dp)) {
    $thiz.dq = new $c_ju_regex_PatternCompiler$CompiledCharClass((1 ^ $thiz.cQ), $thiz.as);
    $thiz.dp = true;
  }
  return $thiz.dq;
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CompiledCharClass(kind, data) {
  this.dq = null;
  this.cQ = 0;
  this.as = null;
  this.dp = false;
  this.cQ = kind;
  this.as = data;
}
$p = $c_ju_regex_PatternCompiler$CompiledCharClass.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$CompiledCharClass;
/** @constructor */
function $h_ju_regex_PatternCompiler$CompiledCharClass() {
}
$h_ju_regex_PatternCompiler$CompiledCharClass.prototype = $p;
$p.hz = (function() {
  return ((!this.dp) ? $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass(this) : this.dq);
});
var $d_ju_regex_PatternCompiler$CompiledCharClass = new $TypeData().i($c_ju_regex_PatternCompiler$CompiledCharClass, "java.util.regex.PatternCompiler$CompiledCharClass", ({
  bw: 1
}));
/** @constructor */
function $c_RTLong(lo, hi) {
  this.e = 0;
  this.f = 0;
  this.e = lo;
  this.f = hi;
}
$p = $c_RTLong.prototype = new $h_O();
$p.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
}
$h_RTLong.prototype = $p;
$p.is = (function(that) {
  return ((that instanceof $c_RTLong) && ((this.e === that.e) && (this.f === that.f)));
});
$p.F = (function() {
  return (this.e ^ this.f);
});
$p.k = (function() {
  return $m_RTLong$().ge(this.e, this.f);
});
$p.iG = (function() {
  return this.e;
});
$p.iF = (function() {
  return $m_RTLong$().gd(this.e, this.f);
});
$p.iE = (function() {
  return $m_RTLong$().e2(this.e, this.f);
});
$p.im = (function() {
  return ((this.e << 24) >> 24);
});
$p.iD = (function() {
  return ((this.e << 16) >> 16);
});
$p.iy = (function() {
  return this.e;
});
$p.iz = (function() {
  return this;
});
$p.iu = (function() {
  return $m_RTLong$().gd(this.e, this.f);
});
$p.ir = (function() {
  return $m_RTLong$().e2(this.e, this.f);
});
$p.iq = (function(that) {
  return $m_RTLong$().gb(this.e, this.f, that.e, that.f);
});
$p.ip = (function(that) {
  return $m_RTLong$().gb(this.e, this.f, that.e, that.f);
});
$p.it = (function(b) {
  return ((this.e === b.e) && (this.f === b.f));
});
$p.iA = (function(b) {
  return (!((this.e === b.e) && (this.f === b.f)));
});
$p.id = (function(b) {
  var ahi = this.f;
  var bhi = b.f;
  return ((ahi === bhi) ? (((-2147483648) ^ this.e) < ((-2147483648) ^ b.e)) : (ahi < bhi));
});
$p.ie = (function(b) {
  var ahi = this.f;
  var bhi = b.f;
  return ((ahi === bhi) ? (((-2147483648) ^ this.e) <= ((-2147483648) ^ b.e)) : (ahi < bhi));
});
$p.i9 = (function(b) {
  var ahi = this.f;
  var bhi = b.f;
  return ((ahi === bhi) ? (((-2147483648) ^ this.e) > ((-2147483648) ^ b.e)) : (ahi > bhi));
});
$p.ia = (function(b) {
  var ahi = this.f;
  var bhi = b.f;
  return ((ahi === bhi) ? (((-2147483648) ^ this.e) >= ((-2147483648) ^ b.e)) : (ahi > bhi));
});
$p.iI = (function() {
  return new $c_RTLong((~this.e), (~this.f));
});
$p.i7 = (function(b) {
  return new $c_RTLong((this.e | b.e), (this.f | b.f));
});
$p.i6 = (function(b) {
  return new $c_RTLong((this.e & b.e), (this.f & b.f));
});
$p.il = (function(b) {
  return new $c_RTLong((this.e ^ b.e), (this.f ^ b.f));
});
$p.ig = (function(n) {
  var lo = this.e;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.f << n)) : (lo << n)));
});
$p.ic = (function(n) {
  var hi = this.f;
  return new $c_RTLong((((32 & n) === 0) ? (((this.e >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0));
});
$p.ib = (function(n) {
  var hi = this.f;
  return new $c_RTLong((((32 & n) === 0) ? (((this.e >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)));
});
$p.iH = (function() {
  var lo = this.e;
  var hi = this.f;
  return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)));
});
$p.ij = (function(b) {
  var alo = this.e;
  var ahi = this.f;
  var bhi = b.f;
  var lo = ((alo + b.e) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)));
});
$p.ih = (function(b) {
  var alo = this.e;
  var ahi = this.f;
  var bhi = b.f;
  var lo = ((alo - b.e) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)));
});
$p.ik = (function(b) {
  var alo = this.e;
  var blo = b.e;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  return new $c_RTLong(lo, ((((((((Math.imul(alo, b.f) + Math.imul(this.f, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0));
});
$p.i8 = (function(b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.ha(this.e, this.f, b.e, b.f), this$1.J);
});
$p.ii = (function(b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.hP(this.e, this.f, b.e, b.f), this$1.J);
});
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.as)));
}
var $d_RTLong = new $TypeData().i($c_RTLong, "org.scalajs.linker.runtime.RuntimeLong", ({
  as: 1
}));
function $p_RTLong$__toUnsignedString__I__I__T($thiz, lo, hi) {
  return ((((-2097152) & hi) === 0) ? ("" + ((4.294967296E9 * hi) + (+(lo >>> 0.0)))) : $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2));
}
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + (+(alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + (+(blo >>> 0.0)));
      var rDouble = (aDouble / bDouble);
      $thiz.J = (((rDouble / 4.294967296E9) | 0.0) | 0);
      return ((rDouble | 0.0) | 0);
    } else {
      $thiz.J = 0;
      return 0;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - (Math.clz32(blo) | 0)) | 0);
    $thiz.J = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - (Math.clz32(bhi) | 0)) | 0);
    $thiz.J = 0;
    return ((ahi >>> pow$2) | 0);
  } else {
    return ($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0) | 0);
  }
}
function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + (+(alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + (+(blo >>> 0.0)));
      var rDouble = (aDouble % bDouble);
      $thiz.J = (((rDouble / 4.294967296E9) | 0.0) | 0);
      return ((rDouble | 0.0) | 0);
    } else {
      $thiz.J = ahi;
      return alo;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.J = 0;
    return (alo & (((-1) + blo) | 0));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.J = (ahi & (((-1) + bhi) | 0));
    return alo;
  } else {
    return ($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1) | 0);
  }
}
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, ask) {
  var shift = ((((bhi !== 0) ? (Math.clz32(bhi) | 0) : ((32 + (Math.clz32(blo) | 0)) | 0)) - ((ahi !== 0) ? (Math.clz32(ahi) | 0) : ((32 + (Math.clz32(alo) | 0)) | 0))) | 0);
  var n = shift;
  var lo = (((32 & n) === 0) ? (blo << n) : 0);
  var hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = ((lo$1 - lo$2) | 0);
      var hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift));
      } else {
        quotHi = (quotHi | (1 << shift));
      }
    }
    shift = (((-1) + shift) | 0);
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    var hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5;
  }
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = ((4.294967296E9 * hi$6) + (+(lo$6 >>> 0.0)));
    var bDouble = ((4.294967296E9 * bhi) + (+(blo >>> 0.0)));
    if ((ask !== 1)) {
      var x = (remDouble / bDouble);
      var lo$7 = ((x | 0.0) | 0);
      var hi$7 = (((x / 4.294967296E9) | 0.0) | 0);
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = ((lo$8 + lo$7) | 0);
      var hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9;
    }
    if ((ask !== 0)) {
      var rem_mod_bDouble = (remDouble % bDouble);
      remLo = ((rem_mod_bDouble | 0.0) | 0);
      remHi = (((rem_mod_bDouble / 4.294967296E9) | 0.0) | 0);
    }
  }
  if ((ask === 0)) {
    $thiz.J = quotHi;
    return quotLo;
  } else if ((ask === 1)) {
    $thiz.J = remHi;
    return remLo;
  } else {
    var lo$10 = quotLo;
    var hi$10 = quotHi;
    var quot = ((4.294967296E9 * hi$10) + (+(lo$10 >>> 0.0)));
    var this$7 = remLo;
    var remStr = ("" + this$7);
    var start = remStr.length;
    return ((("" + quot) + "000000000".substring(start)) + remStr);
  }
}
/** @constructor */
function $c_RTLong$() {
  this.J = 0;
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.ge = (function(lo, hi) {
  return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)));
});
$p.e2 = (function(lo, hi) {
  return ((hi < 0) ? (-((4.294967296E9 * (+(((lo !== 0) ? (~hi) : ((-hi) | 0)) >>> 0.0))) + (+(((-lo) | 0) >>> 0.0)))) : ((4.294967296E9 * hi) + (+(lo >>> 0.0))));
});
$p.gd = (function(lo, hi) {
  if ((hi < 0)) {
    var abs__lo = ((-lo) | 0);
    var abs__hi = ((lo !== 0) ? (~hi) : ((-hi) | 0));
  } else {
    var abs__lo = lo;
    var abs__hi = hi;
  }
  var compressedAbsLo = (((((-2097152) & abs__hi) === 0) || ((65535 & abs__lo) === 0)) ? abs__lo : (32768 | ((-65536) & abs__lo)));
  var absRes = ((4.294967296E9 * (+(abs__hi >>> 0.0))) + (+(compressedAbsLo >>> 0.0)));
  return Math.fround(((hi < 0) ? (-absRes) : absRes));
});
$p.iw = (function(value) {
  return new $c_RTLong(value, (value >> 31));
});
$p.iv = (function(value) {
  return new $c_RTLong(this.gc(value), this.J);
});
$p.gc = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.J = (-2147483648);
    return 0;
  } else if ((value >= 9.223372036854776E18)) {
    this.J = 2147483647;
    return (-1);
  } else {
    var rawLo = ((value | 0.0) | 0);
    var rawHi = (((value / 4.294967296E9) | 0.0) | 0);
    this.J = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo;
  }
});
$p.gb = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1));
});
$p.ha = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.J = 0;
        return (-2147483648);
      } else {
        var lo = $intDiv(alo, blo);
        this.J = (lo >> 31);
        return lo;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.J = (-1);
      return (-1);
    } else {
      this.J = 0;
      return 0;
    }
  } else {
    if ((ahi < 0)) {
      var aAbs__lo = ((-alo) | 0);
      var aAbs__hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi;
    }
    if ((bhi < 0)) {
      var bAbs__lo = ((-blo) | 0);
      var bAbs__hi = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi;
    }
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if (((ahi ^ bhi) >= 0)) {
      return absRLo;
    } else {
      var hi$2 = this.J;
      this.J = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0);
    }
  }
});
$p.hP = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.J = (lo >> 31);
        return lo;
      } else {
        this.J = 0;
        return 0;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.J = 0;
      return 0;
    } else {
      this.J = ahi;
      return alo;
    }
  } else {
    if ((ahi < 0)) {
      var aAbs__lo = ((-alo) | 0);
      var aAbs__hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi;
    }
    if ((bhi < 0)) {
      var bAbs__lo = ((-blo) | 0);
      var bAbs__hi = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi;
    }
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if ((ahi < 0)) {
      var hi$2 = this.J;
      this.J = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0);
    } else {
      return absRLo;
    }
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  by: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
function $f_sc_IterableOnceOps__find__F1__s_Option($thiz, p) {
  var it = $thiz.j();
  while (it.y()) {
    var a = it.h();
    if ((!(!p.v(a)))) {
      return new $c_s_Some(a);
    }
  }
  return $m_s_None$();
}
function $f_sc_IterableOnceOps__foldLeft__O__F2__O($thiz, z, op) {
  if ($is_sc_IndexedSeq($thiz)) {
    return $p_sc_IterableOnceOps__loop$1__I__I__O__F2__sc_IndexedSeq__O($thiz, 0, $thiz.p(), z, op, $thiz);
  } else {
    var result = z;
    var it = $thiz.j();
    while (it.y()) {
      result = op.c9(result, it.h());
    }
    return result;
  }
}
function $f_sc_IterableOnceOps__reduceLeft__F2__O($thiz, op) {
  if ($is_sc_IndexedSeq($thiz)) {
    if (($thiz.p() > 0)) {
      var z = $thiz.o(0);
      return $p_sc_IterableOnceOps__loop$1__I__I__O__F2__sc_IndexedSeq__O($thiz, 1, $thiz.p(), z, op, $thiz);
    }
  }
  if (($thiz.R() === 0)) {
    throw new $c_jl_UnsupportedOperationException("empty.reduceLeft");
  }
  var it = $thiz.j();
  if (it.y()) {
    var acc = it.h();
    while (it.y()) {
      acc = op.c9(acc, it.h());
    }
    return acc;
  } else {
    throw new $c_jl_UnsupportedOperationException("empty.reduceLeft");
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, xs, start, len) {
  var it = $thiz.j();
  var i = start;
  var y = (($m_jl_reflect_Array$().aV(xs) - start) | 0);
  var end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && it.y())) {
    $m_sr_ScalaRunTime$().dW(xs, i, it.h());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__sum__s_math_Numeric__O($thiz, num) {
  switch ($thiz.R()) {
    case (-1): {
      return $thiz.cJ(0, new $c_sjsr_AnonFunction2(((x$2$2, y$2$2) => $f_s_math_Numeric$IntIsIntegral__plus__I__I__I(num, (x$2$2 | 0), (y$2$2 | 0)))));
      break;
    }
    case 0: {
      return 0;
      break;
    }
    default: {
      return $thiz.e4(new $c_sjsr_AnonFunction2(((x$2$2$1, y$2$2$1) => $f_s_math_Numeric$IntIsIntegral__plus__I__I__I(num, (x$2$2$1 | 0), (y$2$2$1 | 0)))));
    }
  }
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.R() === 0) ? (("" + start) + end) : $thiz.cx($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).ao.s);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.ao;
  if ((start.length !== 0)) {
    jsb.s = (("" + jsb.s) + start);
  }
  var it = $thiz.j();
  if (it.y()) {
    var obj = it.h();
    jsb.s = (("" + jsb.s) + obj);
    while (it.y()) {
      jsb.s = (("" + jsb.s) + sep);
      var obj$1 = it.h();
      jsb.s = (("" + jsb.s) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.s = (("" + jsb.s) + end);
  }
  return b;
}
function $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O($thiz, evidence$2) {
  if (($thiz.R() >= 0)) {
    var destination = evidence$2.a5($thiz.R());
    $thiz.ak(destination, 0, 2147483647);
    return destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$2.a2();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var it = $thiz.j();
    while (it.y()) {
      var elem = it.h();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.P.z : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
    return elemRuntimeClass.P.r().w(jsElems);
  }
}
function $p_sc_IterableOnceOps__loop$1__I__I__O__F2__sc_IndexedSeq__O($thiz, at, end, acc, op$1, seq$1) {
  while (true) {
    if ((at === end)) {
      return acc;
    } else {
      var temp$at = ((1 + at) | 0);
      var temp$acc = op$1.c9(acc, seq$1.o(at));
      at = temp$at;
      acc = temp$acc;
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.ev = null;
  this.cm = null;
  this.ev = head;
  this.cm = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.hp = (function() {
  return this.ev.cB().j();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  c1: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.ew = null;
  $n_sc_StringOps$ = this;
  this.ew = new $c_sjsr_AnonFunction1(((x$1$2$2) => $m_sc_StringOps$().ew));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
$p.i3 = (function(this$, index, elem) {
  var this$1 = $ct_jl_StringBuilder__I__(new $c_jl_StringBuilder(), this$.length);
  this$1.s = (("" + this$1.s) + this$);
  this$1.hV(index, elem);
  return this$1.s;
});
$p.h6 = (function(this$) {
  return ((((this$ === null) || (this$.length === 0)) || (!$m_jl_Character$().hs(this$.charCodeAt(0)))) ? this$ : $m_sc_StringOps$().i3(this$, 0, $m_jl_Character$().hZ(this$.charCodeAt(0))));
});
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  c5: 1
}));
var $n_sc_StringOps$;
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$();
  }
  return $n_sc_StringOps$;
}
/** @constructor */
function $c_scg_CommonErrors$() {
}
$p = $c_scg_CommonErrors$.prototype = new $h_O();
$p.constructor = $c_scg_CommonErrors$;
/** @constructor */
function $h_scg_CommonErrors$() {
}
$h_scg_CommonErrors$.prototype = $p;
$p.cK = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
var $d_scg_CommonErrors$ = new $TypeData().i($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  c6: 1
}));
var $n_scg_CommonErrors$;
function $m_scg_CommonErrors$() {
  if ((!$n_scg_CommonErrors$)) {
    $n_scg_CommonErrors$ = new $c_scg_CommonErrors$();
  }
  return $n_scg_CommonErrors$;
}
function $p_sci_VectorSliceBuilder__addSlice__I__AO__I__I__V($thiz, n, a, lo, hi) {
  while (true) {
    if ((n === 1)) {
      var a$1 = a;
      var start = lo;
      var end = hi;
      $p_sci_VectorSliceBuilder__add__I__AO__V($thiz, 1, (((start === 0) && (end === a$1.a.length)) ? a$1 : $m_ju_Arrays$().w(a$1, start, end)));
    } else {
      var bitsN = Math.imul(5, (((-1) + n) | 0));
      var widthN = (1 << bitsN);
      var loN = ((lo >>> bitsN) | 0);
      var hiN = ((hi >>> bitsN) | 0);
      var loRest = (lo & (((-1) + widthN) | 0));
      var hiRest = (hi & (((-1) + widthN) | 0));
      if ((loRest === 0)) {
        if ((hiRest === 0)) {
          var $x_1 = n;
          var a$2 = a;
          $p_sci_VectorSliceBuilder__add__I__AO__V($thiz, $x_1, (((loN === 0) && (hiN === a$2.a.length)) ? a$2 : $m_ju_Arrays$().w(a$2, loN, hiN)));
        } else {
          if ((hiN > loN)) {
            var $x_2 = n;
            var a$3 = a;
            $p_sci_VectorSliceBuilder__add__I__AO__V($thiz, $x_2, (((loN === 0) && (hiN === a$3.a.length)) ? a$3 : $m_ju_Arrays$().w(a$3, loN, hiN)));
          }
          var temp$n = (((-1) + n) | 0);
          var temp$a = a.a[hiN];
          n = temp$n;
          a = temp$a;
          lo = 0;
          hi = hiRest;
          continue;
        }
      } else if ((hiN === loN)) {
        var temp$n$2 = (((-1) + n) | 0);
        var temp$a$2 = a.a[loN];
        n = temp$n$2;
        a = temp$a$2;
        lo = loRest;
        hi = hiRest;
        continue;
      } else {
        $p_sci_VectorSliceBuilder__addSlice__I__AO__I__I__V($thiz, (((-1) + n) | 0), a.a[loN], loRest, widthN);
        if ((hiRest === 0)) {
          if ((hiN > ((1 + loN) | 0))) {
            var $x_3 = n;
            var a$4 = a;
            var start$1 = ((1 + loN) | 0);
            $p_sci_VectorSliceBuilder__add__I__AO__V($thiz, $x_3, (((start$1 === 0) && (hiN === a$4.a.length)) ? a$4 : $m_ju_Arrays$().w(a$4, start$1, hiN)));
          }
        } else {
          if ((hiN > ((1 + loN) | 0))) {
            var $x_4 = n;
            var a$5 = a;
            var start$2 = ((1 + loN) | 0);
            $p_sci_VectorSliceBuilder__add__I__AO__V($thiz, $x_4, (((start$2 === 0) && (hiN === a$5.a.length)) ? a$5 : $m_ju_Arrays$().w(a$5, start$2, hiN)));
          }
          var temp$n$3 = (((-1) + n) | 0);
          var temp$a$3 = a.a[hiN];
          n = temp$n$3;
          a = temp$a$3;
          lo = 0;
          hi = hiRest;
          continue;
        }
      }
    }
    return (void 0);
  }
}
function $p_sci_VectorSliceBuilder__add__I__AO__V($thiz, n, a) {
  if ((n <= $thiz.a4)) {
    var idx = ((11 - n) | 0);
  } else {
    $thiz.a4 = n;
    var idx = (((-1) + n) | 0);
  }
  $thiz.g.a[idx] = a;
}
function $p_sci_VectorSliceBuilder__balancePrefix__I__V($thiz, n) {
  if (($thiz.g.a[(((-1) + n) | 0)] === null)) {
    if ((n === $thiz.a4)) {
      $thiz.g.a[(((-1) + n) | 0)] = $thiz.g.a[((11 - n) | 0)];
      $thiz.g.a[((11 - n) | 0)] = null;
    } else {
      $p_sci_VectorSliceBuilder__balancePrefix__I__V($thiz, ((1 + n) | 0));
      var preN1 = $thiz.g.a[(((-1) + ((1 + n) | 0)) | 0)];
      $thiz.g.a[(((-1) + n) | 0)] = preN1.a[0];
      if ((preN1.a.length === 1)) {
        $thiz.g.a[(((-1) + ((1 + n) | 0)) | 0)] = null;
        if ((($thiz.a4 === ((1 + n) | 0)) && ($thiz.g.a[((11 - ((1 + n) | 0)) | 0)] === null))) {
          $thiz.a4 = n;
        }
      } else {
        $thiz.g.a[(((-1) + ((1 + n) | 0)) | 0)] = $m_ju_Arrays$().w(preN1, 1, preN1.a.length);
      }
    }
  }
}
function $p_sci_VectorSliceBuilder__balanceSuffix__I__V($thiz, n) {
  if (($thiz.g.a[((11 - n) | 0)] === null)) {
    if ((n === $thiz.a4)) {
      $thiz.g.a[((11 - n) | 0)] = $thiz.g.a[(((-1) + n) | 0)];
      $thiz.g.a[(((-1) + n) | 0)] = null;
    } else {
      $p_sci_VectorSliceBuilder__balanceSuffix__I__V($thiz, ((1 + n) | 0));
      var sufN1 = $thiz.g.a[((11 - ((1 + n) | 0)) | 0)];
      $thiz.g.a[((11 - n) | 0)] = sufN1.a[(((-1) + sufN1.a.length) | 0)];
      if ((sufN1.a.length === 1)) {
        $thiz.g.a[((11 - ((1 + n) | 0)) | 0)] = null;
        if ((($thiz.a4 === ((1 + n) | 0)) && ($thiz.g.a[(((-1) + ((1 + n) | 0)) | 0)] === null))) {
          $thiz.a4 = n;
        }
      } else {
        $thiz.g.a[((11 - ((1 + n) | 0)) | 0)] = $m_ju_Arrays$().w(sufN1, 0, (((-1) + sufN1.a.length) | 0));
      }
    }
  }
}
/** @constructor */
function $c_sci_VectorSliceBuilder(lo, hi) {
  this.dI = 0;
  this.dH = 0;
  this.g = null;
  this.an = 0;
  this.bW = 0;
  this.a4 = 0;
  this.dI = lo;
  this.dH = hi;
  this.g = new ($d_O.r().r().C)(11);
  this.an = 0;
  this.bW = 0;
  this.a4 = 0;
}
$p = $c_sci_VectorSliceBuilder.prototype = new $h_O();
$p.constructor = $c_sci_VectorSliceBuilder;
/** @constructor */
function $h_sci_VectorSliceBuilder() {
}
$h_sci_VectorSliceBuilder.prototype = $p;
$p.E = (function(n, a) {
  var count = Math.imul(a.a.length, (1 << Math.imul(5, (((-1) + n) | 0))));
  var a$1 = ((this.dI - this.bW) | 0);
  var lo0 = ((a$1 > 0) ? a$1 : 0);
  var a$2 = ((this.dH - this.bW) | 0);
  var hi0 = ((a$2 < count) ? a$2 : count);
  if ((hi0 > lo0)) {
    $p_sci_VectorSliceBuilder__addSlice__I__AO__I__I__V(this, n, a, lo0, hi0);
    this.an = ((this.an + ((hi0 - lo0) | 0)) | 0);
  }
  this.bW = ((this.bW + count) | 0);
});
$p.aQ = (function() {
  if ((this.an <= 32)) {
    if ((this.an === 0)) {
      return $m_sci_Vector0$();
    } else {
      var prefix1 = this.g.a[0];
      var suffix1 = this.g.a[10];
      if ((prefix1 !== null)) {
        if ((suffix1 !== null)) {
          var dest = $m_ju_Arrays$().N(prefix1, ((prefix1.a.length + suffix1.a.length) | 0));
          var destPos = prefix1.a.length;
          var length = suffix1.a.length;
          suffix1.t(0, dest, destPos, length);
          var $x_1 = dest;
        } else {
          var $x_1 = prefix1;
        }
      } else if ((suffix1 !== null)) {
        var $x_1 = suffix1;
      } else {
        var prefix2 = this.g.a[1];
        var $x_1 = ((prefix2 !== null) ? prefix2.a[0] : this.g.a[9].a[0]);
      }
      return new $c_sci_Vector1($x_1);
    }
  } else {
    $p_sci_VectorSliceBuilder__balancePrefix__I__V(this, 1);
    $p_sci_VectorSliceBuilder__balanceSuffix__I__V(this, 1);
    var resultDim = this.a4;
    if ((resultDim < 6)) {
      var pre = this.g.a[(((-1) + this.a4) | 0)];
      var suf = this.g.a[((11 - this.a4) | 0)];
      if (((pre !== null) && (suf !== null))) {
        if ((((pre.a.length + suf.a.length) | 0) <= 30)) {
          var $x_3 = this.g;
          var $x_2 = this.a4;
          var dest$1 = $m_ju_Arrays$().N(pre, ((pre.a.length + suf.a.length) | 0));
          var destPos$1 = pre.a.length;
          var length$1 = suf.a.length;
          suf.t(0, dest$1, destPos$1, length$1);
          $x_3.a[(((-1) + $x_2) | 0)] = dest$1;
          this.g.a[((11 - this.a4) | 0)] = null;
        } else {
          resultDim = ((1 + resultDim) | 0);
        }
      } else if ((((pre !== null) ? pre : suf).a.length > 30)) {
        resultDim = ((1 + resultDim) | 0);
      }
    }
    var prefix1$2 = this.g.a[0];
    var suffix1$2 = this.g.a[10];
    var len1 = prefix1$2.a.length;
    var x1 = resultDim;
    switch (x1) {
      case 2: {
        var a$1 = $m_sci_VectorStatics$().aJ;
        var p = this.g.a[1];
        if ((p !== null)) {
          var $x_4 = p;
        } else {
          var s = this.g.a[9];
          var $x_4 = ((s !== null) ? s : a$1);
        }
        return new $c_sci_Vector2(prefix1$2, len1, $x_4, suffix1$2, this.an);
        break;
      }
      case 3: {
        var a$2 = $m_sci_VectorStatics$().aJ;
        var p$1 = this.g.a[1];
        var prefix2$2 = ((p$1 !== null) ? p$1 : a$2);
        var a$3 = $m_sci_VectorStatics$().bm;
        var p$2 = this.g.a[2];
        if ((p$2 !== null)) {
          var $x_5 = p$2;
        } else {
          var s$1 = this.g.a[8];
          var $x_5 = ((s$1 !== null) ? s$1 : a$3);
        }
        var a$4 = $m_sci_VectorStatics$().aJ;
        var s$2 = this.g.a[9];
        return new $c_sci_Vector3(prefix1$2, len1, prefix2$2, ((len1 + (prefix2$2.a.length << 5)) | 0), $x_5, ((s$2 !== null) ? s$2 : a$4), suffix1$2, this.an);
        break;
      }
      case 4: {
        var a$5 = $m_sci_VectorStatics$().aJ;
        var p$3 = this.g.a[1];
        var prefix2$3 = ((p$3 !== null) ? p$3 : a$5);
        var a$6 = $m_sci_VectorStatics$().bm;
        var p$4 = this.g.a[2];
        var prefix3 = ((p$4 !== null) ? p$4 : a$6);
        var a$7 = $m_sci_VectorStatics$().bX;
        var p$5 = this.g.a[3];
        if ((p$5 !== null)) {
          var $x_6 = p$5;
        } else {
          var s$3 = this.g.a[7];
          var $x_6 = ((s$3 !== null) ? s$3 : a$7);
        }
        var data4 = $x_6;
        var a$8 = $m_sci_VectorStatics$().bm;
        var s$4 = this.g.a[8];
        var suffix3 = ((s$4 !== null) ? s$4 : a$8);
        var a$9 = $m_sci_VectorStatics$().aJ;
        var s$5 = this.g.a[9];
        var suffix2$3 = ((s$5 !== null) ? s$5 : a$9);
        var len12$2 = ((len1 + (prefix2$3.a.length << 5)) | 0);
        return new $c_sci_Vector4(prefix1$2, len1, prefix2$3, len12$2, prefix3, ((len12$2 + (prefix3.a.length << 10)) | 0), data4, suffix3, suffix2$3, suffix1$2, this.an);
        break;
      }
      case 5: {
        var a$10 = $m_sci_VectorStatics$().aJ;
        var p$6 = this.g.a[1];
        var prefix2$4 = ((p$6 !== null) ? p$6 : a$10);
        var a$11 = $m_sci_VectorStatics$().bm;
        var p$7 = this.g.a[2];
        var prefix3$2 = ((p$7 !== null) ? p$7 : a$11);
        var a$12 = $m_sci_VectorStatics$().bX;
        var p$8 = this.g.a[3];
        var prefix4 = ((p$8 !== null) ? p$8 : a$12);
        var a$13 = $m_sci_VectorStatics$().d2;
        var p$9 = this.g.a[4];
        if ((p$9 !== null)) {
          var $x_7 = p$9;
        } else {
          var s$6 = this.g.a[6];
          var $x_7 = ((s$6 !== null) ? s$6 : a$13);
        }
        var data5 = $x_7;
        var a$14 = $m_sci_VectorStatics$().bX;
        var s$7 = this.g.a[7];
        var suffix4 = ((s$7 !== null) ? s$7 : a$14);
        var a$15 = $m_sci_VectorStatics$().bm;
        var s$8 = this.g.a[8];
        var suffix3$2 = ((s$8 !== null) ? s$8 : a$15);
        var a$16 = $m_sci_VectorStatics$().aJ;
        var s$9 = this.g.a[9];
        var suffix2$4 = ((s$9 !== null) ? s$9 : a$16);
        var len12$3 = ((len1 + (prefix2$4.a.length << 5)) | 0);
        var len123$2 = ((len12$3 + (prefix3$2.a.length << 10)) | 0);
        return new $c_sci_Vector5(prefix1$2, len1, prefix2$4, len12$3, prefix3$2, len123$2, prefix4, ((len123$2 + (prefix4.a.length << 15)) | 0), data5, suffix4, suffix3$2, suffix2$4, suffix1$2, this.an);
        break;
      }
      case 6: {
        var a$17 = $m_sci_VectorStatics$().aJ;
        var p$10 = this.g.a[1];
        var prefix2$5 = ((p$10 !== null) ? p$10 : a$17);
        var a$18 = $m_sci_VectorStatics$().bm;
        var p$11 = this.g.a[2];
        var prefix3$3 = ((p$11 !== null) ? p$11 : a$18);
        var a$19 = $m_sci_VectorStatics$().bX;
        var p$12 = this.g.a[3];
        var prefix4$2 = ((p$12 !== null) ? p$12 : a$19);
        var a$20 = $m_sci_VectorStatics$().d2;
        var p$13 = this.g.a[4];
        var prefix5 = ((p$13 !== null) ? p$13 : a$20);
        var a$21 = $m_sci_VectorStatics$().eB;
        var p$14 = this.g.a[5];
        if ((p$14 !== null)) {
          var $x_8 = p$14;
        } else {
          var s$10 = this.g.a[5];
          var $x_8 = ((s$10 !== null) ? s$10 : a$21);
        }
        var data6 = $x_8;
        var a$22 = $m_sci_VectorStatics$().d2;
        var s$11 = this.g.a[6];
        var suffix5 = ((s$11 !== null) ? s$11 : a$22);
        var a$23 = $m_sci_VectorStatics$().bX;
        var s$12 = this.g.a[7];
        var suffix4$2 = ((s$12 !== null) ? s$12 : a$23);
        var a$24 = $m_sci_VectorStatics$().bm;
        var s$13 = this.g.a[8];
        var suffix3$3 = ((s$13 !== null) ? s$13 : a$24);
        var a$25 = $m_sci_VectorStatics$().aJ;
        var s$14 = this.g.a[9];
        var suffix2$5 = ((s$14 !== null) ? s$14 : a$25);
        var len12$4 = ((len1 + (prefix2$5.a.length << 5)) | 0);
        var len123$3 = ((len12$4 + (prefix3$3.a.length << 10)) | 0);
        var len1234$2 = ((len123$3 + (prefix4$2.a.length << 15)) | 0);
        return new $c_sci_Vector6(prefix1$2, len1, prefix2$5, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, ((len1234$2 + (prefix5.a.length << 20)) | 0), data6, suffix5, suffix4$2, suffix3$3, suffix2$5, suffix1$2, this.an);
        break;
      }
      default: {
        throw new $c_s_MatchError(x1);
      }
    }
  }
});
$p.k = (function() {
  return (((((((((("VectorSliceBuilder(lo=" + this.dI) + ", hi=") + this.dH) + ", len=") + this.an) + ", pos=") + this.bW) + ", maxDim=") + this.a4) + ")");
});
var $d_sci_VectorSliceBuilder = new $TypeData().i($c_sci_VectorSliceBuilder, "scala.collection.immutable.VectorSliceBuilder", ({
  cu: 1
}));
/** @constructor */
function $c_sci_VectorStatics$() {
  this.dJ = null;
  this.aJ = null;
  this.bm = null;
  this.bX = null;
  this.d2 = null;
  this.eB = null;
  $n_sci_VectorStatics$ = this;
  this.dJ = new $ac_O(0);
  this.aJ = new ($d_O.r().r().C)(0);
  this.bm = new ($d_O.r().r().r().C)(0);
  this.bX = new ($d_O.r().r().r().r().C)(0);
  this.d2 = new ($d_O.r().r().r().r().r().C)(0);
  this.eB = new ($d_O.r().r().r().r().r().r().C)(0);
}
$p = $c_sci_VectorStatics$.prototype = new $h_O();
$p.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $p;
$p.aO = (function(elem, a) {
  var ac = $objectGetClass(a).P.Q().P.U(((1 + a.a.length) | 0));
  var length$1 = a.a.length;
  a.t(0, ac, 1, length$1);
  ac.a[0] = elem;
  return ac;
});
$p.fZ = (function(level, a, f) {
  var i = 0;
  var len = a.a.length;
  if ((level === 0)) {
    while ((i < len)) {
      f.v(a.a[i]);
      i = ((1 + i) | 0);
    }
  } else {
    var l = (((-1) + level) | 0);
    while ((i < len)) {
      this.fZ(l, a.a[i], f);
      i = ((1 + i) | 0);
    }
  }
});
$p.al = (function(a, f) {
  var i = 0;
  while ((i < a.a.length)) {
    var v1 = a.a[i];
    var v2 = f.v(v1);
    if ((!Object.is(v1, v2))) {
      return this.hx(a, f, i, v2);
    }
    i = ((1 + i) | 0);
  }
  return a;
});
$p.hx = (function(a, f, at, v2) {
  var ac = new $ac_O(a.a.length);
  if ((at > 0)) {
    a.t(0, ac, 0, at);
  }
  ac.a[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.a.length)) {
    ac.a[i] = f.v(a.a[i]);
    i = ((1 + i) | 0);
  }
  return ac;
});
$p.Q = (function(n, a, f) {
  if ((n === 1)) {
    return this.al(a, f);
  } else {
    var i = 0;
    while ((i < a.a.length)) {
      var v1 = a.a[i];
      var v2 = this.Q((((-1) + n) | 0), v1, f);
      if ((v1 !== v2)) {
        return this.hy(n, a, f, i, v2);
      }
      i = ((1 + i) | 0);
    }
    return a;
  }
});
$p.hy = (function(n, a, f, at, v2) {
  var ac = $objectGetClass(a).P.Q().P.U(a.a.length);
  if ((at > 0)) {
    a.t(0, ac, 0, at);
  }
  ac.a[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.a.length)) {
    ac.a[i] = this.Q((((-1) + n) | 0), a.a[i], f);
    i = ((1 + i) | 0);
  }
  return ac;
});
var $d_sci_VectorStatics$ = new $TypeData().i($c_sci_VectorStatics$, "scala.collection.immutable.VectorStatics$", ({
  cv: 1
}));
var $n_sci_VectorStatics$;
function $m_sci_VectorStatics$() {
  if ((!$n_sci_VectorStatics$)) {
    $n_sci_VectorStatics$ = new $c_sci_VectorStatics$();
  }
  return $n_sci_VectorStatics$;
}
/** @constructor */
function $c_scm_MutationTracker$() {
}
$p = $c_scm_MutationTracker$.prototype = new $h_O();
$p.constructor = $c_scm_MutationTracker$;
/** @constructor */
function $h_scm_MutationTracker$() {
}
$h_scm_MutationTracker$.prototype = $p;
$p.fY = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().i($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  cR: 1
}));
var $n_scm_MutationTracker$;
function $m_scm_MutationTracker$() {
  if ((!$n_scm_MutationTracker$)) {
    $n_scm_MutationTracker$ = new $c_scm_MutationTracker$();
  }
  return $n_scm_MutationTracker$;
}
var $d_sr_Null$ = new $TypeData().i(0, "scala.runtime.Null$", ({
  dw: 1
}));
/** @constructor */
function $c_sr_ScalaRunTime$() {
}
$p = $c_sr_ScalaRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
}
$h_sr_ScalaRunTime$.prototype = $p;
$p.bo = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_I)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_D)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_J)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_F)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_C)) {
    return $bC(xs.a[idx]);
  } else if ((xs instanceof $ac_B)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_S)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_Z)) {
    return xs.a[idx];
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  } else {
    throw new $c_s_MatchError(xs);
  }
});
$p.dW = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    xs.a[idx] = value;
  } else if ((xs instanceof $ac_I)) {
    xs.a[idx] = (value | 0);
  } else if ((xs instanceof $ac_D)) {
    xs.a[idx] = (+value);
  } else if ((xs instanceof $ac_J)) {
    xs.a[idx] = $uJ(value);
  } else if ((xs instanceof $ac_F)) {
    xs.a[idx] = Math.fround(value);
  } else if ((xs instanceof $ac_C)) {
    xs.a[idx] = $uC(value);
  } else if ((xs instanceof $ac_B)) {
    xs.a[idx] = (value | 0);
  } else if ((xs instanceof $ac_S)) {
    xs.a[idx] = (value | 0);
  } else if ((xs instanceof $ac_Z)) {
    xs.a[idx] = (!(!value));
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  } else {
    throw new $c_s_MatchError(xs);
  }
});
$p.gO = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.cd(), (x.bt() + "("), ",", ")");
});
$p.q = (function(xs) {
  return ((xs === null) ? null : ((xs.a.length === 0) ? $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($m_sci_ArraySeq$()) : new $c_sci_ArraySeq$ofRef(xs)));
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  dx: 1
}));
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
/** @constructor */
function $c_sr_Statics$() {
}
$p = $c_sr_Statics$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
}
$h_sr_Statics$.prototype = $p;
$p.cc = (function(lv) {
  var lo = lv.e;
  var hi = lv.f;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi));
});
$p.aq = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.gc(dv);
    var hi = this$1.J;
    return (($m_RTLong$().e2(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().e1(dv));
  }
});
$p.a0 = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.aq((+x));
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    return this.cc(new $c_RTLong(t.e, t.f));
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.d7 = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  dz: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
/** @constructor */
function $c_s_util_DynamicVariable(init) {
  this.dO = null;
  this.dO = init;
}
$p = $c_s_util_DynamicVariable.prototype = new $h_O();
$p.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
$h_s_util_DynamicVariable.prototype = $p;
$p.k = (function() {
  return (("DynamicVariable(" + this.dO) + ")");
});
var $d_s_util_DynamicVariable = new $TypeData().i($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  dG: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$p = $c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $p;
$p.d = (function(hash, data) {
  var h = this.g9(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$p.g9 = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.x = (function(hash, length) {
  return this.a8((hash ^ length));
});
$p.a8 = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.e3 = (function(x, seed, ignorePrefix) {
  var arr = x.br();
  if ((arr === 0)) {
    return $f_T__hashCode__I(x.bt());
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.d(h, $f_T__hashCode__I(x.bt()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.d(h, $m_sr_Statics$().a0(x.bs(i)));
      i = ((1 + i) | 0);
    }
    return this.x(h, arr);
  }
});
$p.i1 = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.j();
  while (iterator.y()) {
    var x = iterator.h();
    var h = $m_sr_Statics$().a0(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.d(h$2, a);
  h$2 = this.d(h$2, b);
  h$2 = this.g9(h$2, c);
  return this.x(h$2, n);
});
$p.hM = (function(xs, seed) {
  var it = xs.j();
  var h = seed;
  if ((!it.y())) {
    return this.x(h, 0);
  }
  var x0 = it.h();
  if ((!it.y())) {
    return this.x(this.d(h, $m_sr_Statics$().a0(x0)), 1);
  }
  var x1 = it.h();
  var initial = $m_sr_Statics$().a0(x0);
  h = this.d(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().a0(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.y()) {
    h = this.d(h, prev);
    var hash = $m_sr_Statics$().a0(it.h());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.d(h, hash);
      i = ((1 + i) | 0);
      while (it.y()) {
        h = this.d(h, $m_sr_Statics$().a0(it.h()));
        i = ((1 + i) | 0);
      }
      return this.x(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.a8(this.d(this.d(h0, rangeDiff), prev));
});
$p.fM = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().aV(a);
  switch (l) {
    case 0: {
      return this.x(h, 0);
      break;
    }
    case 1: {
      return this.x(this.d(h, $m_sr_Statics$().a0($m_sr_ScalaRunTime$().bo(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().a0($m_sr_ScalaRunTime$().bo(a, 0));
      h = this.d(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().a0($m_sr_ScalaRunTime$().bo(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.d(h, prev);
        var hash = $m_sr_Statics$().a0($m_sr_ScalaRunTime$().bo(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.d(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.d(h, $m_sr_Statics$().a0($m_sr_ScalaRunTime$().bo(a, i)));
            i = ((1 + i) | 0);
          }
          return this.x(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.a8(this.d(this.d(h0, rangeDiff), prev));
    }
  }
});
$p.hO = (function(start, step, last, seed) {
  return this.a8(this.d(this.d(this.d(seed, start), step), last));
});
$p.hq = (function(a, seed) {
  var h = seed;
  var l = a.p();
  switch (l) {
    case 0: {
      return this.x(h, 0);
      break;
    }
    case 1: {
      return this.x(this.d(h, $m_sr_Statics$().a0(a.o(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().a0(a.o(0));
      h = this.d(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().a0(a.o(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.d(h, prev);
        var hash = $m_sr_Statics$().a0(a.o(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.d(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.d(h, $m_sr_Statics$().a0(a.o(i)));
            i = ((1 + i) | 0);
          }
          return this.x(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.a8(this.d(this.d(h0, rangeDiff), prev));
    }
  }
});
$p.hv = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.Y())) {
    var head = elems.aW();
    var tail = elems.aZ();
    var hash = $m_sr_Statics$().a0(head);
    h = this.d(h, hash);
    switch (rangeState) {
      case 0: {
        initial = hash;
        rangeState = 1;
        break;
      }
      case 1: {
        rangeDiff = ((hash - prev) | 0);
        rangeState = 2;
        break;
      }
      case 2: {
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          rangeState = 3;
        }
        break;
      }
    }
    prev = hash;
    n = ((1 + n) | 0);
    elems = tail;
  }
  return ((rangeState === 2) ? this.hO(initial, rangeDiff, prev, seed) : this.x(h, n));
});
$p.fV = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.x(h, 0);
      break;
    }
    case 1: {
      return this.x(this.d(h, (a.a[0] ? 1231 : 1237)), 1);
      break;
    }
    default: {
      var initial = (a.a[0] ? 1231 : 1237);
      h = this.d(h, initial);
      var h0 = h;
      var prev = (a.a[1] ? 1231 : 1237);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.d(h, prev);
        var hash = (a.a[i] ? 1231 : 1237);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.d(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.d(h, (a.a[i] ? 1231 : 1237));
            i = ((1 + i) | 0);
          }
          return this.x(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.a8(this.d(this.d(h0, rangeDiff), prev));
    }
  }
});
$p.fN = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.x(h, 0);
      break;
    }
    case 1: {
      return this.x(this.d(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.d(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.d(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.d(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.d(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.x(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.a8(this.d(this.d(h0, rangeDiff), prev));
    }
  }
});
$p.fO = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.x(h, 0);
      break;
    }
    case 1: {
      return this.x(this.d(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.d(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.d(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.d(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.d(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.x(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.a8(this.d(this.d(h0, rangeDiff), prev));
    }
  }
});
$p.fP = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.x(h, 0);
      break;
    }
    case 1: {
      return this.x(this.d(h, $m_sr_Statics$().aq(a.a[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().aq(a.a[0]);
      h = this.d(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().aq(a.a[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.d(h, prev);
        var hash = $m_sr_Statics$().aq(a.a[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.d(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.d(h, $m_sr_Statics$().aq(a.a[i]));
            i = ((1 + i) | 0);
          }
          return this.x(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.a8(this.d(this.d(h0, rangeDiff), prev));
    }
  }
});
$p.fQ = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.x(h, 0);
      break;
    }
    case 1: {
      return this.x(this.d(h, $m_sr_Statics$().aq(a.a[0])), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().aq(a.a[0]);
      h = this.d(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().aq(a.a[1]);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.d(h, prev);
        var hash = $m_sr_Statics$().aq(a.a[i]);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.d(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.d(h, $m_sr_Statics$().aq(a.a[i]));
            i = ((1 + i) | 0);
          }
          return this.x(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.a8(this.d(this.d(h0, rangeDiff), prev));
    }
  }
});
$p.fR = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.x(h, 0);
      break;
    }
    case 1: {
      return this.x(this.d(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.d(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.d(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.d(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.d(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.x(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.a8(this.d(this.d(h0, rangeDiff), prev));
    }
  }
});
$p.fS = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.x(h, 0);
      break;
    }
    case 1: {
      var $x_1 = h;
      var t = a.a[0];
      return this.x(this.d($x_1, $m_sr_Statics$().cc(new $c_RTLong(t.e, t.f))), 1);
      break;
    }
    default: {
      var t$1 = a.a[0];
      var initial = $m_sr_Statics$().cc(new $c_RTLong(t$1.e, t$1.f));
      h = this.d(h, initial);
      var h0 = h;
      var t$2 = a.a[1];
      var prev = $m_sr_Statics$().cc(new $c_RTLong(t$2.e, t$2.f));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.d(h, prev);
        var t$3 = a.a[i];
        var hash = $m_sr_Statics$().cc(new $c_RTLong(t$3.e, t$3.f));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.d(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            var $x_2 = h;
            var t$4 = a.a[i];
            h = this.d($x_2, $m_sr_Statics$().cc(new $c_RTLong(t$4.e, t$4.f)));
            i = ((1 + i) | 0);
          }
          return this.x(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.a8(this.d(this.d(h0, rangeDiff), prev));
    }
  }
});
$p.fT = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.x(h, 0);
      break;
    }
    case 1: {
      return this.x(this.d(h, a.a[0]), 1);
      break;
    }
    default: {
      var initial = a.a[0];
      h = this.d(h, initial);
      var h0 = h;
      var prev = a.a[1];
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.d(h, prev);
        var hash = a.a[i];
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.d(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.d(h, a.a[i]);
            i = ((1 + i) | 0);
          }
          return this.x(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.a8(this.d(this.d(h0, rangeDiff), prev));
    }
  }
});
$p.fU = (function(a, seed) {
  var h = seed;
  var l = a.a.length;
  switch (l) {
    case 0: {
      return this.x(h, 0);
      break;
    }
    case 1: {
      return this.x(this.d(h, 0), 1);
      break;
    }
    default: {
      h = this.d(h, 0);
      var h0 = h;
      var prev = 0;
      var rangeDiff = prev;
      var i = 2;
      while ((i < l)) {
        h = this.d(h, prev);
        if (((rangeDiff !== ((-prev) | 0)) || (rangeDiff === 0))) {
          h = this.d(h, 0);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.d(h, 0);
            i = ((1 + i) | 0);
          }
          return this.x(h, l);
        }
        prev = 0;
        i = ((1 + i) | 0);
      }
      return this.a8(this.d(this.d(h0, rangeDiff), prev));
    }
  }
});
function $ct_Lsentences_Expansion__sci_Vector__I__($thiz, expression, weight) {
  $thiz.dP = expression;
  $thiz.dQ = weight;
  return $thiz;
}
function $ct_Lsentences_Expansion__Lsentences_Symbol__I__($thiz, expression, weight) {
  $ct_Lsentences_Expansion__sci_Vector__I__($thiz, $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Symbol.r().C)([expression]))), weight);
  return $thiz;
}
/** @constructor */
function $c_Lsentences_Expansion() {
  this.dP = null;
  this.dQ = 0;
}
$p = $c_Lsentences_Expansion.prototype = new $h_O();
$p.constructor = $c_Lsentences_Expansion;
/** @constructor */
function $h_Lsentences_Expansion() {
}
$h_Lsentences_Expansion.prototype = $p;
var $d_Lsentences_Expansion = new $TypeData().i($c_Lsentences_Expansion, "sentences.Expansion", ({
  dR: 1
}));
/** @constructor */
function $c_Lsentences_Grammar$package$() {
  this.f6 = null;
  this.f7 = false;
}
$p = $c_Lsentences_Grammar$package$.prototype = new $h_O();
$p.constructor = $c_Lsentences_Grammar$package$;
/** @constructor */
function $h_Lsentences_Grammar$package$() {
}
$h_Lsentences_Grammar$package$.prototype = $p;
$p.c = (function() {
  if ((!this.f7)) {
    this.f6 = new $c_Lsentences_Grammar$package$$anon$1();
    this.f7 = true;
  }
  return this.f6;
});
var $d_Lsentences_Grammar$package$ = new $TypeData().i($c_Lsentences_Grammar$package$, "sentences.Grammar$package$", ({
  dS: 1
}));
var $n_Lsentences_Grammar$package$;
function $m_Lsentences_Grammar$package$() {
  if ((!$n_Lsentences_Grammar$package$)) {
    $n_Lsentences_Grammar$package$ = new $c_Lsentences_Grammar$package$();
  }
  return $n_Lsentences_Grammar$package$;
}
function $s_Lsentences_Main$package__main__AT__V(args) {
  $m_Lsentences_Main$package$().hw(args);
}
/** @constructor */
function $c_Lsentences_Main$package$() {
}
$p = $c_Lsentences_Main$package$.prototype = new $h_O();
$p.constructor = $c_Lsentences_Main$package$;
/** @constructor */
function $h_Lsentences_Main$package$() {
}
$h_Lsentences_Main$package$.prototype = $p;
$p.hw = (function(args) {
  var root = document.getElementById("sentence");
  $m_s_Console$().gf().g6((root + "\n"));
  root.innerText = $m_Lsentences_Utils$package$().g3();
});
var $d_Lsentences_Main$package$ = new $TypeData().i($c_Lsentences_Main$package$, "sentences.Main$package$", ({
  dX: 1
}));
var $n_Lsentences_Main$package$;
function $m_Lsentences_Main$package$() {
  if ((!$n_Lsentences_Main$package$)) {
    $n_Lsentences_Main$package$ = new $c_Lsentences_Main$package$();
  }
  return $n_Lsentences_Main$package$;
}
function $f_Lsentences_Symbol__name__T($thiz) {
  return $f_T__replaceAll__T__T__T($objectGetClass($thiz).g5(), "\\$", "");
}
function $f_Lsentences_Symbol__totalWeight__I($thiz) {
  return ($f_sc_IterableOnceOps__sum__s_math_Numeric__O($thiz.O().bq(new $c_sjsr_AnonFunction1(((_$1) => _$1.dQ))), $m_s_math_Numeric$IntIsIntegral$()) | 0);
}
function $f_Lsentences_Symbol__expand__sci_Vector($thiz) {
  var randomNumber = ((+Math.random()) * $thiz.T());
  var this$2 = $thiz.O().bq(new $c_sjsr_AnonFunction1(((_$2) => _$2.dQ)));
  $m_sci_Vector$();
  var b = new $c_sci_VectorBuilder();
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(b, this$2, 0);
  var acc = 0;
  b.dU(acc);
  var it = this$2.j();
  while (it.y()) {
    var arg1 = acc;
    var arg2 = it.h();
    acc = (((arg1 | 0) + (arg2 | 0)) | 0);
    b.dU(acc);
  }
  var cumsum = b.aQ().bH();
  var this$5 = $f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O($thiz.O(), cumsum).dZ(new $c_sjsr_AnonFunction1(((_$5) => ((_$5.cT | 0) > randomNumber))));
  var rule = (this$5.Y() ? $m_s_None$() : new $c_s_Some(this$5.ca().cS));
  var $x_1 = $thiz.S();
  var this$7 = (rule.Y() ? $m_s_None$() : new $c_s_Some($f_sc_IterableOnceOps__mkString__T__T__T__T(rule.ca().dP, "", ", ", "")));
  var x = (($x_1 + " -> ") + (this$7.Y() ? "" : this$7.ca()));
  $m_s_Console$().gf().g6((x + "\n"));
  if (rule.Y()) {
    return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Symbol.r().C)([$thiz])));
  } else {
    var arg1$3 = rule.ca();
    var this$12 = arg1$3.dP;
    $m_sci_Vector$();
    var b$1 = new $c_sci_VectorBuilder();
    var it$1 = this$12.j();
    while (it$1.y()) {
      b$1.dT($f_Lsentences_Symbol__expand__sci_Vector(it$1.h()));
    }
    return b$1.aQ();
  }
}
var $d_Lsentences_Symbol = new $TypeData().i(1, "sentences.Symbol", ({
  r: 1
}));
/** @constructor */
function $c_Lsentences_Utils$package$() {
}
$p = $c_Lsentences_Utils$package$.prototype = new $h_O();
$p.constructor = $c_Lsentences_Utils$package$;
/** @constructor */
function $h_Lsentences_Utils$package$() {
}
$h_Lsentences_Utils$package$.prototype = $p;
$p.g3 = (function() {
  return $m_sc_StringOps$().h6($f_T__replaceAll__T__T__T($f_sc_IterableOnceOps__mkString__T__T__T__T($f_Lsentences_Symbol__expand__sci_Vector($m_Lsentences_Sentence$()), "", " ", "."), " \b", ""));
});
var $d_Lsentences_Utils$package$ = new $TypeData().i($c_Lsentences_Utils$package$, "sentences.Utils$package$", ({
  ec: 1
}));
var $n_Lsentences_Utils$package$;
function $m_Lsentences_Utils$package$() {
  if ((!$n_Lsentences_Utils$package$)) {
    $n_Lsentences_Utils$package$ = new $c_Lsentences_Utils$package$();
  }
  return $n_Lsentences_Utils$package$;
}
function $p_jl_Character$__getTypeGE256__I__I($thiz, codePoint) {
  return $p_jl_Character$__charTypes__AI($thiz).a[$p_jl_Character$__findIndexOfRange__AI__I__Z__I($thiz, $p_jl_Character$__charTypeIndices__AI($thiz), codePoint, false)];
}
function $p_jl_Character$__isLowerCaseGE256__I__Z($thiz, c) {
  return ((((((((((((((((((c >= 688) && (c <= 696)) || ((c >= 704) && (c <= 705))) || ((c >= 736) && (c <= 740))) || (c === 837)) || (c === 890)) || ((c >= 7468) && (c <= 7530))) || (c === 7544)) || ((c >= 7579) && (c <= 7615))) || (c === 8305)) || (c === 8319)) || ((c >= 8336) && (c <= 8348))) || ((c >= 8560) && (c <= 8575))) || ((c >= 9424) && (c <= 9449))) || ((c >= 11388) && (c <= 11389))) || (c === 42864)) || ((c >= 43000) && (c <= 43001))) || ($p_jl_Character$__getTypeGE256__I__I($thiz, c) === 2));
}
function $p_jl_Character$__java$lang$Character$$charTypesFirst256$lzycompute__AI($thiz) {
  if (((((1 & $thiz.a3) << 24) >> 24) === 0)) {
    $thiz.db = new $ac_I(new Int32Array([15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 12, 24, 24, 24, 26, 24, 24, 24, 21, 22, 24, 25, 24, 20, 24, 24, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 24, 24, 25, 25, 25, 24, 24, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 21, 24, 22, 27, 23, 27, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 21, 25, 22, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 12, 24, 26, 26, 26, 26, 28, 24, 27, 28, 5, 29, 25, 16, 28, 27, 28, 25, 11, 11, 27, 2, 24, 24, 27, 11, 5, 30, 11, 11, 11, 24, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 25, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 25, 2, 2, 2, 2, 2, 2, 2, 2]));
    $thiz.a3 = (((1 | $thiz.a3) << 24) >> 24);
  }
  return $thiz.db;
}
function $p_jl_Character$__charTypeIndices$lzycompute__AI($thiz) {
  if (((((2 & $thiz.a3) << 24) >> 24) === 0)) {
    $thiz.d9 = $p_jl_Character$__uncompressDeltas__AI__AI($thiz, new $ac_I(new Int32Array([257, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3, 2, 1, 1, 1, 2, 1, 3, 2, 4, 1, 2, 1, 3, 3, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 3, 1, 1, 1, 2, 2, 1, 1, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 2, 1, 2, 2, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 69, 1, 27, 18, 4, 12, 14, 5, 7, 1, 1, 1, 17, 112, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 3, 1, 1, 4, 2, 1, 1, 3, 1, 1, 1, 2, 1, 17, 1, 9, 35, 1, 2, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 2, 2, 51, 48, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 38, 2, 1, 6, 41, 1, 1, 2, 2, 1, 1, 45, 1, 1, 1, 2, 1, 2, 1, 1, 8, 27, 4, 4, 2, 11, 6, 3, 2, 1, 2, 2, 11, 1, 1, 3, 32, 1, 10, 21, 10, 4, 2, 1, 99, 1, 1, 7, 1, 1, 6, 2, 2, 1, 4, 2, 10, 3, 2, 1, 14, 1, 1, 1, 1, 30, 27, 2, 89, 11, 1, 14, 10, 33, 9, 2, 1, 3, 1, 2, 1, 2, 22, 4, 1, 9, 1, 3, 1, 5, 2, 15, 1, 25, 3, 2, 1, 1, 11, 5, 24, 1, 6, 1, 2, 6, 8, 41, 1, 24, 1, 32, 1, 54, 1, 1, 1, 1, 3, 8, 4, 1, 2, 1, 7, 10, 2, 2, 10, 1, 1, 15, 1, 2, 1, 8, 2, 2, 2, 22, 1, 7, 1, 1, 3, 4, 2, 1, 1, 3, 4, 2, 2, 2, 2, 1, 1, 8, 1, 4, 2, 1, 3, 2, 2, 10, 2, 2, 6, 1, 1, 1, 1, 1, 2, 2, 1, 1, 6, 4, 2, 2, 22, 1, 7, 1, 2, 1, 2, 1, 2, 2, 1, 1, 3, 2, 4, 2, 2, 3, 3, 1, 7, 4, 1, 1, 7, 10, 2, 3, 1, 1, 10, 2, 1, 1, 9, 1, 3, 1, 22, 1, 7, 1, 2, 1, 5, 2, 1, 1, 3, 5, 1, 2, 1, 1, 2, 1, 2, 1, 15, 2, 2, 2, 10, 1, 1, 7, 1, 6, 1, 1, 2, 1, 8, 2, 2, 2, 22, 1, 7, 1, 2, 1, 5, 2, 1, 1, 1, 1, 1, 4, 2, 2, 2, 2, 1, 7, 2, 1, 4, 2, 1, 3, 2, 2, 10, 1, 1, 6, 10, 1, 1, 1, 6, 3, 3, 1, 4, 3, 2, 1, 1, 1, 2, 3, 2, 3, 3, 3, 12, 4, 2, 1, 2, 3, 3, 1, 3, 1, 2, 1, 6, 1, 14, 10, 3, 6, 1, 1, 5, 1, 3, 1, 8, 1, 3, 1, 23, 1, 16, 2, 1, 1, 3, 4, 1, 3, 1, 4, 7, 2, 1, 3, 2, 1, 2, 2, 2, 2, 10, 7, 1, 7, 1, 1, 1, 2, 1, 8, 1, 3, 1, 23, 1, 10, 1, 5, 2, 1, 1, 1, 1, 5, 1, 1, 2, 1, 2, 2, 7, 2, 6, 2, 1, 2, 2, 2, 10, 1, 2, 1, 12, 2, 2, 9, 1, 3, 1, 41, 2, 1, 3, 4, 1, 3, 1, 3, 1, 1, 1, 4, 3, 1, 7, 3, 2, 2, 10, 9, 1, 6, 1, 1, 2, 1, 18, 3, 24, 1, 9, 1, 1, 2, 7, 3, 1, 4, 3, 3, 1, 1, 1, 8, 6, 10, 2, 2, 1, 12, 48, 1, 2, 7, 4, 1, 6, 1, 8, 1, 10, 2, 37, 2, 1, 1, 1, 5, 1, 24, 1, 1, 1, 10, 1, 2, 9, 1, 2, 5, 1, 1, 1, 7, 1, 10, 2, 4, 32, 1, 3, 15, 1, 1, 3, 2, 6, 10, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 8, 1, 36, 4, 14, 1, 5, 1, 2, 5, 11, 1, 36, 1, 8, 1, 6, 1, 2, 5, 4, 2, 37, 43, 2, 4, 1, 6, 1, 2, 2, 2, 1, 10, 6, 6, 2, 2, 4, 3, 1, 3, 2, 7, 3, 4, 13, 1, 2, 2, 6, 1, 1, 1, 10, 3, 1, 2, 38, 1, 1, 5, 1, 2, 43, 1, 1, 3, 329, 1, 4, 2, 7, 1, 1, 1, 4, 2, 41, 1, 4, 2, 33, 1, 4, 2, 7, 1, 1, 1, 4, 2, 15, 1, 57, 1, 4, 2, 67, 2, 3, 9, 20, 3, 16, 10, 6, 86, 2, 6, 2, 1, 620, 1, 1, 17, 1, 26, 1, 1, 3, 75, 3, 3, 8, 7, 18, 3, 1, 9, 19, 2, 1, 2, 9, 18, 2, 12, 13, 1, 3, 1, 2, 12, 52, 2, 1, 7, 8, 1, 2, 11, 3, 1, 3, 1, 1, 1, 2, 10, 6, 10, 6, 6, 1, 4, 3, 1, 1, 10, 6, 35, 1, 53, 7, 5, 2, 34, 1, 1, 5, 70, 10, 31, 1, 3, 4, 2, 3, 4, 2, 1, 6, 3, 4, 1, 3, 2, 10, 30, 2, 5, 11, 44, 4, 26, 6, 10, 1, 3, 34, 23, 2, 2, 1, 2, 2, 53, 1, 1, 1, 7, 1, 1, 1, 1, 2, 8, 6, 10, 2, 1, 10, 6, 10, 6, 7, 1, 6, 2, 14, 1, 16, 49, 4, 1, 47, 1, 1, 5, 1, 1, 5, 1, 2, 8, 3, 10, 7, 10, 9, 9, 2, 1, 2, 1, 30, 1, 4, 2, 2, 1, 3, 2, 10, 44, 1, 1, 2, 3, 1, 1, 3, 2, 8, 4, 36, 8, 8, 2, 2, 3, 5, 10, 3, 3, 10, 30, 6, 2, 9, 7, 43, 2, 3, 8, 8, 3, 1, 13, 1, 7, 4, 1, 6, 1, 2, 1, 2, 1, 5, 44, 63, 13, 1, 34, 37, 64, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 8, 6, 2, 6, 2, 8, 8, 8, 8, 6, 2, 6, 2, 8, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 14, 2, 8, 8, 8, 8, 8, 8, 5, 1, 2, 4, 1, 1, 1, 3, 3, 1, 2, 4, 1, 3, 4, 2, 2, 4, 1, 3, 8, 5, 3, 2, 3, 1, 2, 4, 1, 2, 1, 11, 5, 6, 2, 1, 1, 1, 2, 1, 1, 1, 8, 1, 1, 5, 1, 9, 1, 1, 4, 2, 3, 1, 1, 1, 11, 1, 1, 1, 10, 1, 5, 1, 10, 1, 1, 2, 6, 3, 1, 1, 1, 10, 3, 1, 1, 1, 13, 3, 33, 15, 13, 4, 1, 3, 12, 15, 2, 1, 4, 1, 2, 1, 3, 2, 3, 1, 1, 1, 2, 1, 5, 6, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 4, 1, 2, 2, 2, 5, 1, 4, 1, 1, 2, 1, 1, 16, 35, 1, 1, 4, 1, 2, 4, 5, 5, 2, 4, 1, 2, 1, 2, 1, 7, 1, 31, 2, 2, 1, 1, 1, 31, 268, 8, 1, 1, 1, 1, 20, 2, 7, 1, 1, 81, 1, 30, 25, 40, 6, 69, 25, 11, 21, 60, 78, 22, 183, 1, 9, 1, 54, 8, 111, 1, 248, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 30, 44, 5, 1, 1, 31, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 16, 256, 131, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 63, 1, 1, 1, 1, 32, 1, 1, 258, 48, 21, 2, 6, 39, 2, 32, 1, 105, 48, 48, 1, 1, 3, 2, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2, 1, 6, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 6, 1, 1, 1, 1, 3, 1, 1, 5, 4, 1, 2, 38, 1, 1, 5, 1, 2, 56, 7, 1, 1, 14, 1, 23, 9, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 32, 2, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 9, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 10, 2, 4, 1, 1, 1, 13, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 34, 26, 1, 89, 12, 214, 26, 12, 4, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 9, 4, 2, 1, 5, 2, 3, 1, 1, 1, 2, 1, 86, 2, 2, 2, 2, 1, 1, 90, 1, 3, 1, 5, 43, 1, 94, 1, 2, 4, 10, 32, 36, 12, 16, 31, 1, 10, 30, 8, 1, 15, 32, 10, 39, 15, 320, 6592, 64, 21013, 1, 1143, 3, 55, 9, 40, 6, 2, 268, 1, 3, 16, 10, 2, 20, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 70, 10, 2, 6, 8, 23, 9, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 24, 3, 1, 1, 1, 2, 1, 7, 1, 3, 1, 4, 1, 23, 2, 2, 1, 4, 1, 3, 6, 2, 1, 1, 6, 52, 4, 8, 2, 50, 16, 2, 8, 2, 10, 6, 18, 6, 3, 1, 1, 2, 1, 10, 28, 8, 2, 23, 11, 2, 11, 1, 29, 3, 3, 1, 47, 1, 2, 4, 2, 2, 3, 13, 1, 1, 10, 4, 2, 5, 1, 1, 9, 10, 5, 1, 41, 6, 2, 2, 2, 2, 9, 3, 1, 8, 1, 1, 2, 10, 2, 4, 16, 1, 6, 3, 1, 1, 1, 1, 50, 1, 1, 3, 2, 2, 5, 2, 1, 1, 1, 24, 2, 1, 2, 11, 1, 2, 2, 2, 1, 2, 1, 1, 10, 6, 2, 6, 2, 6, 9, 7, 1, 7, 1, 43, 1, 4, 9, 1, 2, 4, 80, 35, 2, 1, 2, 1, 2, 1, 1, 1, 2, 10, 6, 11172, 12, 23, 4, 49, 4, 2048, 6400, 366, 2, 106, 38, 7, 12, 5, 5, 1, 1, 10, 1, 13, 1, 5, 1, 1, 1, 2, 1, 2, 1, 108, 17, 16, 363, 1, 1, 16, 64, 2, 54, 7, 1, 32, 12, 1, 3, 16, 7, 1, 1, 1, 6, 16, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 4, 3, 3, 1, 4, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 2, 4, 5, 1, 135, 2, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 1, 2, 10, 2, 3, 2, 26, 1, 1, 1, 1, 1, 1, 26, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 10, 1, 45, 2, 31, 3, 6, 2, 6, 2, 6, 2, 3, 3, 2, 1, 1, 1, 2, 1, 1, 4, 2, 10, 3, 2, 2, 12, 1, 26, 1, 19, 1, 2, 1, 15, 2, 14, 34, 123, 5, 3, 4, 45, 3, 9, 53, 4, 17, 2, 3, 1, 13, 3, 1, 47, 45, 1, 130, 29, 3, 49, 15, 1, 27, 4, 32, 4, 9, 20, 1, 8, 1, 5, 38, 5, 5, 30, 1, 1, 36, 4, 8, 1, 5, 42, 40, 40, 78, 2, 10, 6, 36, 4, 36, 4, 40, 8, 52, 11, 1, 11, 1, 15, 1, 7, 1, 2, 1, 11, 1, 15, 1, 7, 1, 2, 67, 311, 9, 22, 10, 8, 24, 6, 1, 42, 1, 9, 69, 6, 2, 1, 1, 44, 1, 2, 3, 1, 2, 23, 1, 1, 8, 23, 2, 7, 31, 8, 9, 48, 19, 1, 2, 5, 5, 22, 6, 3, 1, 26, 5, 1, 64, 56, 4, 2, 2, 16, 2, 46, 1, 3, 1, 2, 5, 4, 4, 1, 3, 1, 29, 2, 3, 4, 1, 9, 7, 9, 7, 29, 2, 1, 29, 3, 32, 8, 1, 28, 2, 4, 5, 7, 9, 54, 3, 7, 22, 2, 8, 19, 5, 8, 18, 7, 4, 12, 7, 80, 73, 55, 51, 13, 51, 7, 6, 36, 4, 8, 10, 294, 31, 1, 42, 1, 2, 1, 2, 2, 75, 3, 29, 10, 1, 8, 22, 11, 4, 5, 22, 18, 4, 4, 38, 21, 7, 20, 23, 9, 1, 1, 1, 53, 15, 7, 4, 20, 10, 1, 2, 2, 1, 9, 3, 1, 45, 3, 4, 2, 2, 2, 1, 4, 1, 10, 1, 2, 25, 7, 10, 6, 3, 36, 5, 1, 8, 1, 10, 4, 1, 2, 1, 8, 35, 1, 2, 1, 9, 2, 1, 48, 3, 9, 2, 4, 4, 4, 1, 1, 1, 10, 1, 1, 1, 3, 1, 20, 11, 18, 1, 25, 3, 3, 2, 1, 1, 2, 6, 1, 2, 1, 62, 7, 1, 1, 1, 4, 1, 15, 1, 10, 1, 6, 47, 1, 3, 8, 5, 10, 6, 2, 2, 1, 8, 2, 2, 2, 22, 1, 7, 1, 2, 1, 5, 1, 2, 1, 2, 1, 4, 2, 2, 2, 3, 2, 1, 6, 1, 5, 5, 2, 2, 7, 3, 5, 139, 53, 3, 8, 2, 3, 1, 1, 4, 5, 10, 2, 1, 1, 1, 3, 30, 48, 3, 6, 1, 1, 4, 2, 1, 2, 2, 1, 1, 8, 10, 166, 47, 3, 4, 2, 4, 2, 1, 2, 23, 4, 2, 34, 48, 3, 8, 2, 1, 1, 2, 3, 1, 11, 10, 6, 13, 19, 43, 1, 1, 1, 2, 6, 1, 1, 1, 1, 6, 10, 54, 27, 2, 3, 2, 4, 1, 5, 4, 10, 2, 3, 1, 7, 185, 44, 3, 9, 1, 2, 1, 100, 32, 32, 10, 9, 12, 8, 2, 1, 2, 8, 1, 2, 1, 24, 6, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3, 9, 10, 70, 8, 2, 39, 3, 4, 2, 2, 4, 1, 1, 1, 1, 1, 27, 1, 10, 40, 6, 1, 1, 4, 8, 1, 8, 1, 6, 2, 3, 46, 13, 1, 2, 3, 1, 5, 13, 73, 7, 10, 246, 9, 1, 37, 1, 7, 1, 6, 1, 1, 1, 5, 10, 10, 19, 3, 2, 30, 2, 22, 1, 1, 7, 1, 2, 1, 2, 73, 7, 1, 2, 1, 38, 6, 3, 1, 1, 2, 1, 7, 1, 1, 8, 10, 6, 6, 1, 2, 1, 32, 5, 1, 2, 1, 2, 1, 1, 1, 1, 7, 10, 310, 19, 2, 2, 2, 7, 2, 1, 1, 13, 1, 34, 2, 5, 3, 2, 1, 1, 1, 13, 10, 86, 1, 15, 21, 8, 4, 17, 13, 1, 922, 102, 111, 1, 5, 11, 196, 2636, 97, 2, 13, 1072, 16, 1, 6, 15, 4010, 583, 8633, 569, 7, 31, 1, 10, 4, 2, 79, 1, 10, 6, 30, 2, 5, 1, 10, 48, 7, 5, 4, 4, 1, 1, 10, 10, 1, 7, 1, 21, 5, 19, 688, 32, 32, 23, 4, 101, 75, 4, 1, 1, 55, 7, 4, 13, 64, 2, 1, 1, 1, 11, 2, 14, 6136, 8, 1238, 42, 9, 8935, 4, 1, 7, 1, 2, 1, 291, 15, 1, 29, 3, 2, 1, 14, 4, 8, 396, 2308, 107, 5, 13, 3, 9, 7, 10, 2, 1, 2, 1, 4, 4700, 46, 2, 23, 9, 116, 60, 246, 10, 39, 2, 60, 2, 3, 3, 6, 8, 8, 2, 7, 30, 4, 61, 21, 66, 3, 1, 122, 20, 12, 20, 12, 87, 9, 25, 135, 26, 26, 26, 7, 1, 18, 26, 26, 1, 1, 2, 2, 1, 2, 2, 2, 4, 1, 8, 4, 1, 1, 1, 7, 1, 11, 26, 26, 2, 1, 4, 2, 8, 1, 7, 1, 26, 2, 1, 4, 1, 5, 1, 1, 3, 7, 1, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 28, 2, 25, 1, 25, 1, 6, 25, 1, 25, 1, 6, 25, 1, 25, 1, 6, 25, 1, 25, 1, 6, 25, 1, 25, 1, 6, 1, 1, 2, 50, 512, 55, 4, 50, 8, 1, 14, 1, 2, 5, 15, 5, 1, 15, 1104, 10, 1, 20, 6, 6, 213, 7, 1, 17, 2, 7, 1, 2, 1, 5, 5, 62, 33, 1, 112, 45, 3, 7, 7, 2, 10, 4, 1, 1, 320, 30, 1, 17, 44, 4, 10, 5, 1, 464, 27, 1, 4, 10, 742, 7, 1, 4, 1, 2, 1, 15, 1, 197, 2, 9, 7, 41, 34, 34, 7, 1, 4, 10, 4, 2, 785, 59, 1, 3, 1, 4, 76, 45, 1, 15, 194, 4, 1, 27, 1, 2, 1, 1, 2, 1, 1, 10, 1, 4, 1, 1, 1, 1, 6, 1, 4, 1, 1, 1, 1, 1, 1, 3, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 4, 1, 7, 1, 4, 1, 4, 1, 1, 1, 10, 1, 17, 5, 3, 1, 5, 1, 17, 52, 2, 270, 44, 4, 100, 12, 15, 2, 15, 1, 15, 1, 37, 10, 13, 161, 56, 29, 13, 44, 4, 9, 7, 2, 14, 6, 154, 251, 5, 728, 4, 17, 3, 13, 3, 119, 4, 95, 6, 12, 4, 1, 15, 12, 4, 56, 8, 10, 6, 40, 8, 30, 2, 2, 78, 340, 12, 14, 2, 13, 3, 9, 7, 46, 1, 7, 8, 14, 4, 9, 7, 9, 7, 147, 1, 55, 37, 10, 1030, 42720, 32, 4154, 6, 222, 2, 5762, 14, 7473, 3103, 542, 1506, 4939, 5, 4192, 711761, 1, 30, 96, 128, 240, 65040, 65534, 2, 65534])));
    $thiz.a3 = (((2 | $thiz.a3) << 24) >> 24);
  }
  return $thiz.d9;
}
function $p_jl_Character$__charTypeIndices__AI($thiz) {
  return (((((2 & $thiz.a3) << 24) >> 24) === 0) ? $p_jl_Character$__charTypeIndices$lzycompute__AI($thiz) : $thiz.d9);
}
function $p_jl_Character$__charTypes$lzycompute__AI($thiz) {
  if (((((4 & $thiz.a3) << 24) >> 24) === 0)) {
    $thiz.da = new $ac_I(new Int32Array([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 1, 2, 5, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 2, 4, 27, 4, 27, 4, 27, 4, 27, 4, 27, 6, 1, 2, 1, 2, 4, 27, 1, 2, 0, 4, 2, 24, 1, 0, 27, 1, 24, 1, 0, 1, 0, 1, 2, 1, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 25, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 28, 6, 7, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 1, 0, 4, 24, 2, 24, 20, 0, 28, 26, 0, 6, 20, 6, 24, 6, 24, 6, 24, 6, 0, 5, 0, 5, 24, 0, 16, 25, 24, 26, 24, 28, 6, 24, 16, 24, 5, 4, 5, 6, 9, 24, 5, 6, 5, 24, 5, 6, 16, 28, 6, 4, 6, 28, 6, 5, 9, 5, 28, 5, 24, 0, 16, 5, 6, 5, 6, 0, 5, 6, 5, 0, 9, 5, 6, 4, 28, 24, 4, 0, 6, 26, 5, 6, 4, 6, 4, 6, 4, 6, 0, 24, 0, 5, 6, 0, 24, 0, 5, 0, 5, 27, 5, 0, 16, 0, 6, 5, 4, 6, 16, 6, 8, 5, 6, 8, 6, 5, 8, 6, 8, 6, 8, 5, 6, 5, 6, 24, 9, 24, 4, 5, 6, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 5, 8, 6, 0, 8, 0, 8, 6, 5, 0, 8, 0, 5, 0, 5, 6, 0, 9, 5, 26, 11, 28, 26, 5, 24, 6, 0, 6, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 0, 8, 6, 0, 6, 0, 6, 0, 6, 0, 5, 0, 5, 0, 9, 6, 5, 6, 24, 0, 6, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 5, 8, 6, 0, 6, 8, 0, 8, 6, 0, 5, 0, 5, 6, 0, 9, 24, 26, 0, 5, 6, 0, 6, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 5, 8, 6, 8, 6, 0, 8, 0, 8, 6, 0, 6, 8, 0, 5, 0, 5, 6, 0, 9, 28, 5, 11, 0, 6, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 8, 6, 8, 0, 8, 0, 8, 6, 0, 5, 0, 8, 0, 9, 11, 28, 26, 28, 0, 6, 8, 6, 5, 0, 5, 0, 5, 0, 5, 0, 6, 5, 6, 8, 0, 6, 0, 6, 0, 6, 0, 5, 0, 5, 0, 5, 6, 0, 9, 0, 24, 11, 28, 5, 6, 8, 24, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 5, 8, 6, 8, 0, 6, 8, 0, 8, 6, 0, 8, 0, 5, 0, 5, 6, 0, 9, 0, 5, 8, 0, 6, 8, 5, 0, 5, 0, 5, 6, 5, 8, 6, 0, 8, 0, 8, 6, 5, 28, 0, 5, 8, 11, 5, 6, 0, 9, 11, 28, 5, 0, 6, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 0, 8, 6, 0, 6, 0, 8, 0, 9, 0, 8, 24, 0, 5, 6, 5, 6, 0, 26, 5, 4, 6, 24, 9, 24, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 6, 5, 6, 5, 0, 5, 0, 4, 0, 6, 0, 9, 0, 5, 0, 5, 28, 24, 28, 24, 28, 6, 28, 9, 11, 28, 6, 28, 6, 28, 6, 21, 22, 21, 22, 8, 5, 0, 5, 0, 6, 8, 6, 24, 6, 5, 6, 0, 6, 0, 28, 6, 28, 0, 28, 24, 28, 24, 0, 5, 8, 6, 8, 6, 8, 6, 8, 6, 5, 9, 24, 5, 8, 6, 5, 6, 5, 8, 5, 8, 5, 6, 5, 6, 8, 6, 8, 6, 5, 8, 9, 8, 6, 28, 1, 0, 1, 0, 1, 0, 2, 24, 4, 2, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 24, 11, 0, 5, 28, 0, 1, 0, 2, 0, 20, 5, 28, 24, 5, 12, 5, 21, 22, 0, 5, 24, 10, 5, 0, 5, 6, 8, 0, 5, 6, 8, 24, 0, 5, 6, 0, 5, 0, 5, 0, 6, 0, 5, 6, 8, 6, 8, 6, 8, 6, 24, 4, 24, 26, 5, 6, 0, 9, 0, 11, 0, 24, 20, 24, 6, 16, 6, 9, 0, 5, 4, 5, 0, 5, 6, 5, 6, 5, 0, 5, 0, 5, 0, 6, 8, 6, 8, 0, 8, 6, 8, 6, 0, 28, 0, 24, 9, 5, 0, 5, 0, 5, 0, 5, 0, 9, 11, 0, 28, 5, 6, 8, 6, 0, 24, 5, 8, 6, 8, 6, 0, 6, 8, 6, 8, 6, 8, 6, 0, 6, 9, 0, 9, 0, 24, 4, 24, 0, 6, 7, 6, 0, 6, 8, 5, 6, 8, 6, 8, 6, 8, 6, 8, 5, 0, 9, 24, 28, 6, 28, 24, 0, 6, 8, 5, 8, 6, 8, 6, 8, 6, 5, 9, 5, 6, 8, 6, 8, 6, 8, 6, 8, 0, 24, 5, 8, 6, 8, 6, 0, 24, 9, 0, 5, 9, 5, 4, 24, 2, 0, 1, 0, 1, 24, 0, 6, 24, 6, 8, 6, 5, 6, 5, 6, 5, 8, 6, 5, 0, 2, 4, 2, 4, 2, 4, 6, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 1, 0, 2, 1, 2, 1, 2, 0, 1, 0, 2, 0, 1, 0, 1, 0, 1, 0, 1, 2, 1, 2, 0, 2, 3, 2, 3, 2, 3, 2, 0, 2, 1, 3, 27, 2, 27, 2, 0, 2, 1, 3, 27, 2, 0, 2, 1, 0, 27, 2, 1, 27, 0, 2, 0, 2, 1, 3, 27, 0, 12, 16, 20, 24, 29, 30, 21, 29, 30, 21, 29, 24, 13, 14, 16, 12, 24, 29, 30, 24, 23, 24, 25, 21, 22, 24, 25, 24, 23, 24, 12, 16, 0, 16, 11, 4, 0, 11, 25, 21, 22, 4, 11, 25, 21, 22, 0, 4, 0, 26, 0, 6, 7, 6, 7, 6, 0, 28, 1, 28, 1, 28, 2, 1, 2, 1, 2, 28, 1, 28, 25, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 2, 1, 2, 5, 2, 28, 2, 1, 25, 1, 2, 28, 25, 28, 2, 28, 11, 10, 1, 2, 10, 11, 28, 0, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 25, 28, 21, 22, 21, 22, 28, 25, 28, 21, 22, 28, 25, 28, 25, 28, 25, 28, 0, 28, 0, 11, 28, 11, 28, 25, 28, 25, 28, 25, 28, 25, 28, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 11, 28, 25, 21, 22, 25, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 25, 28, 25, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 25, 21, 22, 21, 22, 25, 21, 22, 25, 28, 25, 28, 25, 28, 0, 28, 0, 28, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 28, 1, 2, 1, 2, 6, 1, 2, 0, 24, 11, 24, 2, 0, 2, 0, 2, 0, 5, 0, 4, 24, 0, 6, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 24, 29, 30, 29, 30, 24, 29, 30, 24, 29, 30, 24, 20, 24, 20, 24, 29, 30, 24, 29, 30, 21, 22, 21, 22, 21, 22, 21, 22, 24, 4, 24, 20, 24, 20, 24, 21, 24, 28, 24, 21, 22, 21, 22, 21, 22, 21, 22, 20, 0, 28, 0, 28, 0, 28, 0, 28, 0, 12, 24, 28, 4, 5, 10, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 28, 21, 22, 21, 22, 21, 22, 21, 22, 20, 21, 22, 28, 10, 6, 8, 20, 4, 28, 10, 4, 5, 24, 28, 0, 5, 0, 6, 27, 4, 5, 20, 5, 24, 4, 5, 0, 5, 0, 5, 0, 28, 11, 28, 5, 28, 0, 5, 28, 0, 11, 28, 11, 28, 11, 28, 11, 28, 11, 28, 5, 28, 5, 4, 5, 0, 28, 0, 5, 4, 24, 5, 4, 24, 5, 9, 5, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 5, 6, 7, 24, 6, 24, 4, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4, 6, 5, 10, 6, 24, 0, 27, 4, 27, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4, 27, 1, 2, 1, 2, 5, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 1, 2, 0, 2, 0, 2, 1, 2, 1, 2, 0, 4, 1, 2, 5, 4, 2, 5, 6, 5, 6, 5, 6, 5, 8, 6, 8, 28, 6, 0, 11, 28, 26, 28, 0, 5, 24, 0, 8, 5, 8, 6, 0, 24, 9, 0, 6, 5, 24, 5, 24, 5, 6, 9, 5, 6, 24, 5, 6, 8, 0, 24, 5, 0, 6, 8, 5, 6, 8, 6, 8, 6, 8, 24, 0, 4, 9, 0, 24, 5, 6, 4, 5, 9, 5, 0, 5, 6, 8, 6, 8, 6, 0, 5, 6, 5, 6, 8, 0, 9, 0, 24, 5, 4, 5, 28, 5, 8, 6, 8, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 0, 5, 4, 24, 5, 8, 6, 8, 24, 5, 4, 8, 6, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 2, 27, 4, 2, 4, 27, 0, 2, 5, 8, 6, 8, 6, 8, 24, 8, 6, 0, 9, 0, 5, 0, 5, 0, 5, 0, 19, 18, 5, 0, 5, 0, 2, 0, 2, 0, 5, 6, 5, 25, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 27, 0, 5, 22, 21, 28, 5, 0, 5, 0, 28, 0, 5, 26, 28, 6, 24, 21, 22, 24, 0, 6, 24, 20, 23, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 21, 22, 24, 21, 22, 24, 23, 24, 0, 24, 20, 21, 22, 21, 22, 21, 22, 24, 25, 20, 25, 0, 24, 26, 24, 0, 5, 0, 5, 0, 16, 0, 24, 26, 24, 21, 22, 24, 25, 24, 20, 24, 9, 24, 25, 24, 1, 21, 24, 22, 27, 23, 27, 2, 21, 25, 22, 25, 21, 22, 24, 21, 22, 24, 5, 4, 5, 4, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 26, 25, 27, 28, 26, 0, 28, 25, 28, 0, 16, 28, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 24, 0, 11, 0, 28, 10, 11, 28, 11, 28, 0, 28, 0, 28, 0, 28, 6, 0, 5, 0, 5, 0, 6, 11, 0, 5, 11, 0, 5, 10, 5, 10, 0, 5, 6, 0, 5, 0, 24, 5, 0, 5, 24, 10, 0, 1, 2, 5, 0, 9, 0, 1, 0, 2, 0, 5, 0, 5, 0, 24, 1, 0, 1, 0, 1, 0, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 5, 0, 5, 0, 5, 0, 4, 0, 4, 0, 4, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 24, 11, 5, 28, 11, 5, 0, 11, 0, 5, 0, 5, 0, 11, 5, 11, 0, 24, 5, 0, 24, 0, 5, 0, 11, 5, 11, 0, 11, 5, 6, 0, 6, 0, 6, 5, 0, 5, 0, 5, 0, 6, 0, 6, 11, 0, 24, 0, 5, 11, 24, 5, 11, 0, 5, 28, 5, 6, 0, 11, 24, 0, 5, 0, 24, 5, 0, 11, 5, 0, 11, 5, 0, 24, 0, 11, 0, 5, 0, 1, 0, 2, 0, 11, 5, 6, 0, 9, 0, 11, 0, 5, 0, 6, 20, 0, 5, 0, 6, 5, 11, 5, 0, 5, 6, 11, 24, 0, 5, 6, 24, 0, 5, 11, 0, 5, 0, 8, 6, 8, 5, 6, 24, 0, 11, 9, 6, 5, 6, 5, 0, 6, 8, 5, 8, 6, 8, 6, 24, 16, 24, 6, 0, 16, 0, 5, 0, 9, 0, 6, 5, 6, 8, 6, 0, 9, 24, 5, 8, 5, 0, 5, 6, 24, 5, 0, 6, 8, 5, 8, 6, 8, 5, 24, 6, 24, 8, 6, 9, 5, 24, 5, 24, 0, 11, 0, 5, 0, 5, 8, 6, 8, 6, 8, 6, 24, 6, 5, 6, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 24, 0, 5, 6, 8, 6, 0, 9, 0, 6, 8, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 6, 5, 8, 6, 8, 0, 8, 0, 8, 0, 5, 0, 8, 0, 5, 8, 0, 6, 0, 6, 0, 5, 8, 6, 8, 6, 8, 6, 5, 24, 9, 24, 0, 24, 6, 5, 0, 5, 8, 6, 8, 6, 8, 6, 8, 6, 5, 24, 5, 0, 9, 0, 5, 8, 6, 0, 8, 6, 8, 6, 24, 5, 6, 0, 5, 8, 6, 8, 6, 8, 6, 24, 5, 0, 9, 0, 24, 0, 5, 6, 8, 6, 8, 6, 8, 6, 5, 24, 0, 9, 0, 5, 0, 6, 8, 6, 8, 6, 0, 9, 11, 24, 28, 5, 0, 5, 8, 6, 8, 6, 24, 0, 1, 2, 9, 11, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 8, 0, 8, 0, 6, 8, 6, 5, 8, 5, 8, 6, 24, 0, 9, 0, 5, 0, 5, 8, 6, 0, 6, 8, 6, 5, 24, 5, 8, 0, 5, 6, 5, 6, 8, 5, 6, 24, 6, 0, 5, 6, 8, 6, 5, 6, 8, 6, 24, 5, 24, 0, 5, 0, 24, 0, 5, 0, 5, 8, 6, 0, 6, 8, 6, 5, 24, 0, 9, 11, 0, 24, 5, 0, 6, 0, 8, 6, 8, 6, 8, 6, 0, 5, 0, 5, 0, 5, 6, 0, 6, 0, 6, 0, 6, 5, 6, 0, 9, 0, 5, 0, 5, 0, 5, 8, 0, 6, 0, 8, 6, 8, 6, 5, 0, 9, 0, 5, 6, 8, 24, 0, 6, 5, 8, 5, 0, 5, 8, 6, 0, 8, 6, 8, 6, 24, 9, 0, 5, 0, 11, 28, 26, 28, 0, 24, 5, 0, 10, 0, 24, 0, 5, 0, 5, 24, 0, 5, 16, 6, 5, 6, 0, 5, 0, 5, 0, 5, 0, 9, 0, 24, 5, 0, 9, 0, 5, 0, 6, 24, 0, 5, 6, 24, 28, 4, 24, 28, 0, 9, 0, 11, 0, 5, 0, 5, 0, 1, 2, 11, 24, 0, 5, 0, 6, 5, 8, 0, 6, 4, 0, 4, 24, 4, 6, 0, 8, 0, 5, 0, 5, 0, 5, 0, 4, 0, 4, 0, 4, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 28, 6, 24, 16, 0, 6, 0, 6, 0, 28, 0, 28, 0, 28, 0, 28, 8, 6, 28, 8, 16, 6, 28, 6, 28, 6, 28, 0, 28, 6, 28, 0, 11, 0, 11, 0, 28, 0, 11, 0, 1, 2, 1, 2, 0, 2, 1, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 0, 2, 0, 2, 0, 2, 1, 2, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 0, 1, 25, 2, 25, 2, 1, 25, 2, 25, 2, 1, 25, 2, 25, 2, 1, 25, 2, 25, 2, 1, 25, 2, 25, 2, 1, 2, 0, 9, 28, 6, 28, 6, 28, 6, 28, 6, 28, 24, 0, 6, 0, 6, 0, 2, 5, 2, 0, 2, 0, 6, 0, 6, 0, 6, 0, 6, 0, 6, 0, 4, 0, 6, 0, 5, 0, 6, 4, 0, 9, 0, 5, 28, 0, 5, 6, 0, 5, 6, 9, 0, 26, 0, 5, 4, 6, 9, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 11, 6, 0, 1, 2, 6, 4, 0, 9, 0, 24, 0, 11, 28, 11, 26, 11, 0, 11, 28, 11, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 25, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 11, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 27, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 28, 0, 9, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 16, 0, 16, 0, 6, 0, 18, 0, 18, 0]));
    $thiz.a3 = (((4 | $thiz.a3) << 24) >> 24);
  }
  return $thiz.da;
}
function $p_jl_Character$__charTypes__AI($thiz) {
  return (((((4 & $thiz.a3) << 24) >> 24) === 0) ? $p_jl_Character$__charTypes$lzycompute__AI($thiz) : $thiz.da);
}
function $p_jl_Character$__uncompressDeltas__AI__AI($thiz, deltas) {
  var acc = deltas.a[0];
  var i = 1;
  var len = deltas.a.length;
  while ((i !== len)) {
    acc = ((acc + deltas.a[i]) | 0);
    deltas.a[i] = acc;
    i = ((1 + i) | 0);
  }
  return deltas;
}
function $p_jl_Character$__findIndexOfRange__AI__I__Z__I($thiz, startOfRangesArray, value, hasEmptyRanges) {
  var i = $m_ju_Arrays$().fW(startOfRangesArray, value);
  if ((i >= 0)) {
    if (hasEmptyRanges) {
      var j = ((1 + i) | 0);
      while (((j < startOfRangesArray.a.length) && (startOfRangesArray.a[j] === value))) {
        j = ((1 + j) | 0);
      }
      return j;
    } else {
      return ((1 + i) | 0);
    }
  } else {
    return (((-1) - i) | 0);
  }
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) {
  if (((((32 & $thiz.a3) << 24) >> 24) === 0)) {
    $thiz.dc = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
    $thiz.a3 = (((32 | $thiz.a3) << 24) >> 24);
  }
  return $thiz.dc;
}
function $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI($thiz) {
  return (((((32 & $thiz.a3) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.dc);
}
/** @constructor */
function $c_jl_Character$() {
  this.db = null;
  this.d9 = null;
  this.da = null;
  this.dc = null;
  this.a3 = 0;
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.hY = (function(codePoint) {
  if ((!((codePoint >= 0) && (codePoint <= 1114111)))) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.h9 = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))));
  } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
    var value = (((-65303) + codePoint) | 0);
  } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
    var value = (((-65335) + codePoint) | 0);
  } else {
    var p = $m_ju_Arrays$().fW($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this), codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this).a[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
$p.hs = (function(c) {
  return ((c < 256) ? (((c === 170) || (c === 186)) || (this.ht().a[c] === 2)) : $p_jl_Character$__isLowerCaseGE256__I__Z(this, c));
});
$p.hZ = (function(ch) {
  return (65535 & this.i0(ch));
});
$p.i0 = (function(codePoint) {
  switch (codePoint) {
    case 8115:
    case 8131:
    case 8179: {
      return ((9 + codePoint) | 0);
      break;
    }
    default: {
      if (((codePoint >= 8064) && (codePoint <= 8111))) {
        return (8 | codePoint);
      } else {
        var this$1 = this.hY(codePoint);
        var upperChars = this$1.toUpperCase();
        switch (upperChars.length) {
          case 1: {
            return upperChars.charCodeAt(0);
            break;
          }
          case 2: {
            var high = upperChars.charCodeAt(0);
            var low = upperChars.charCodeAt(1);
            return ((((-67044352) & ((high << 16) | low)) === (-671032320)) ? ((((64 + (1023 & high)) | 0) << 10) | (1023 & low)) : codePoint);
            break;
          }
          default: {
            return codePoint;
          }
        }
      }
    }
  }
});
$p.ht = (function() {
  return (((((1 & this.a3) << 24) >> 24) === 0) ? $p_jl_Character$__java$lang$Character$$charTypesFirst256$lzycompute__AI(this) : this.db);
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  aX: 1,
  a: 1
}));
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$();
  }
  return $n_jl_Character$;
}
function $ps_jl_Integer$__fail$1__T__E(s$1) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s$1) + "\""));
}
/** @constructor */
function $c_jl_Integer$() {
}
$p = $c_jl_Integer$.prototype = new $h_O();
$p.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
}
$h_jl_Integer$.prototype = $p;
$p.gg = (function(s, radix) {
  var len = ((s === null) ? 0 : s.length);
  if ((((len === 0) || (radix < 2)) || (radix > 36))) {
    $ps_jl_Integer$__fail$1__T__E(s);
  }
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var maxAbsValue = (negative ? 2.147483648E9 : 2.147483647E9);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= s.length)) {
    $ps_jl_Integer$__fail$1__T__E(s);
  }
  var result = 0.0;
  while ((i !== len)) {
    var digit = $m_jl_Character$().h9(s.charCodeAt(i), radix);
    result = ((result * radix) + digit);
    if (((digit === (-1)) || (result > maxAbsValue))) {
      $ps_jl_Integer$__fail$1__T__E(s);
    }
    i = ((1 + i) | 0);
  }
  return (negative ? (((-result) | 0.0) | 0) : ((result | 0.0) | 0));
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  b4: 1,
  a: 1
}));
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$();
  }
  return $n_jl_Integer$;
}
/** @constructor */
function $c_jl_Number() {
}
$p = $c_jl_Number.prototype = new $h_O();
$p.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
}
$h_jl_Number.prototype = $p;
/** @constructor */
function $c_jl_String$() {
}
$p = $c_jl_String$.prototype = new $h_O();
$p.constructor = $c_jl_String$;
/** @constructor */
function $h_jl_String$() {
}
$h_jl_String$.prototype = $p;
$p.hA = (function(value, offset, count) {
  var end = ((offset + count) | 0);
  if ((((offset < 0) || (end < offset)) || (end > value.a.length))) {
    throw $ct_jl_StringIndexOutOfBoundsException__(new $c_jl_StringIndexOutOfBoundsException());
  }
  var result = "";
  var i = offset;
  while ((i !== end)) {
    result = (result + ("" + $cToS(value.a[i])));
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_jl_String$ = new $TypeData().i($c_jl_String$, "java.lang.String$", ({
  bd: 1,
  a: 1
}));
var $n_jl_String$;
function $m_jl_String$() {
  if ((!$n_jl_String$)) {
    $n_jl_String$ = new $c_jl_String$();
  }
  return $n_jl_String$;
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.ea = s;
  if (writableStackTrace) {
    $thiz.he();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.ea = null;
  }
  d6() {
    return this.ea;
  }
  he() {
    var reference = (false ? this.i5 : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  k() {
    var className = $objectClassName(this);
    var message = this.d6();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  F() {
    return $c_O.prototype.F.call(this);
  }
  get "message"() {
    var m = this.d6();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.k();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.A)));
}
function $p_ju_regex_Matcher__resetMatch__ju_regex_Matcher($thiz) {
  $thiz.cO = 0;
  $thiz.ch = null;
  $thiz.bI = 0;
  return $thiz;
}
function $p_ju_regex_Matcher__ensureLastMatch__O($thiz) {
  if (($thiz.ch === null)) {
    throw new $c_jl_IllegalStateException("No match available");
  }
  return $thiz.ch;
}
/** @constructor */
function $c_ju_regex_Matcher(pattern0, input0) {
  this.dh = null;
  this.dg = null;
  this.di = 0;
  this.bu = null;
  this.cO = 0;
  this.ch = null;
  this.bI = 0;
  this.dh = pattern0;
  this.dg = input0;
  this.di = 0;
  this.bu = this.dg;
  this.cO = 0;
  this.ch = null;
  this.bI = 0;
}
$p = $c_ju_regex_Matcher.prototype = new $h_O();
$p.constructor = $c_ju_regex_Matcher;
/** @constructor */
function $h_ju_regex_Matcher() {
}
$h_ju_regex_Matcher.prototype = $p;
$p.hf = (function() {
  var this$1 = this.dh;
  var input = this.bu;
  var start = this.cO;
  var mtch = this$1.hu(input, start);
  var end = (this$1.dj.lastIndex | 0);
  this.cO = ((mtch !== null) ? ((end === (mtch.index | 0)) ? ((1 + end) | 0) : end) : ((1 + this.bu.length) | 0));
  this.ch = mtch;
  return (mtch !== null);
});
$p.h3 = (function(sb, replacement) {
  var this$1 = this.bu;
  var beginIndex = this.bI;
  var endIndex = this.gi();
  sb.dV(this$1.substring(beginIndex, endIndex));
  var len = replacement.length;
  var i = 0;
  while ((i < len)) {
    var index = i;
    var x1 = replacement.charCodeAt(index);
    switch (x1) {
      case 36: {
        i = ((1 + i) | 0);
        var j = i;
        while (true) {
          if ((i < len)) {
            var index$1 = i;
            var c = replacement.charCodeAt(index$1);
            var $x_1 = ((c >= 48) && (c <= 57));
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            i = ((1 + i) | 0);
          } else {
            break;
          }
        }
        var $x_2 = $m_jl_Integer$();
        var endIndex$1 = i;
        var group = $x_2.gg(replacement.substring(j, endIndex$1), 10);
        var replaced = this.hm(group);
        if ((replaced !== null)) {
          sb.dV(replaced);
        }
        break;
      }
      case 92: {
        i = ((1 + i) | 0);
        if ((i < len)) {
          sb.fK(replacement.charCodeAt(i));
        }
        i = ((1 + i) | 0);
        break;
      }
      default: {
        sb.fK(x1);
        i = ((1 + i) | 0);
      }
    }
  }
  this.bI = this.hd();
  return this;
});
$p.h4 = (function(sb) {
  var this$1 = this.bu;
  var beginIndex = this.bI;
  sb.dV(this$1.substring(beginIndex));
  this.bI = this.bu.length;
  return sb;
});
$p.hQ = (function(replacement) {
  this.hR();
  var sb = $ct_jl_StringBuffer__(new $c_jl_StringBuffer());
  while (this.hf()) {
    this.h3(sb, replacement);
  }
  this.h4(sb);
  return sb.k();
});
$p.hR = (function() {
  this.di = 0;
  this.bu = this.dg;
  return $p_ju_regex_Matcher__resetMatch__ju_regex_Matcher(this);
});
$p.gi = (function() {
  return ((($p_ju_regex_Matcher__ensureLastMatch__O(this).index | 0) + this.di) | 0);
});
$p.hd = (function() {
  return ((this.gi() + this.hn().length) | 0);
});
$p.hn = (function() {
  return $p_ju_regex_Matcher__ensureLastMatch__O(this)[0];
});
$p.hm = (function(group) {
  var x = $p_ju_regex_Matcher__ensureLastMatch__O(this)[this.dh.hL(group)];
  return ((x !== (void 0)) ? x : null);
});
var $d_ju_regex_Matcher = new $TypeData().i($c_ju_regex_Matcher, "java.util.regex.Matcher", ({
  br: 1,
  bq: 1
}));
/** @constructor */
function $c_ju_regex_Pattern(_pattern, _flags, jsPattern, jsFlags, sticky, groupCount, groupNumberMap, namedGroups) {
  this.eb = null;
  this.ee = null;
  this.ef = false;
  this.ec = 0;
  this.ed = null;
  this.dj = null;
  this.eb = _pattern;
  this.ee = jsFlags;
  this.ef = sticky;
  this.ec = groupCount;
  this.ed = groupNumberMap;
  this.dj = new RegExp(jsPattern, (this.ee + (this.ef ? "gy" : "g")));
  new RegExp((("^(?:" + jsPattern) + ")$"), jsFlags);
}
$p = $c_ju_regex_Pattern.prototype = new $h_O();
$p.constructor = $c_ju_regex_Pattern;
/** @constructor */
function $h_ju_regex_Pattern() {
}
$h_ju_regex_Pattern.prototype = $p;
$p.hu = (function(input, start) {
  var regexp = this.dj;
  regexp.lastIndex = start;
  return regexp.exec(input);
});
$p.hL = (function(group) {
  if (((group < 0) || (group > this.ec))) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + group));
  }
  return (this.ed[group] | 0);
});
$p.k = (function() {
  return this.eb;
});
var $d_ju_regex_Pattern = new $TypeData().i($c_ju_regex_Pattern, "java.util.regex.Pattern", ({
  bs: 1,
  a: 1
}));
function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
  var i = srcPos;
  var j = destPos;
  var srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().dW(dest, j, $m_sr_ScalaRunTime$().bo(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0);
  }
}
/** @constructor */
function $c_s_Array$() {
}
$p = $c_s_Array$.prototype = new $h_O();
$p.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
}
$h_s_Array$.prototype = $p;
$p.g1 = (function(it, evidence$3) {
  var n = it.R();
  if ((n > (-1))) {
    var elements = evidence$3.a5(n);
    var iterator = it.j();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().dW(elements, i, iterator.h());
      i = ((1 + i) | 0);
    }
    return elements;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$3.a2();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var iterator$2 = it.j();
    while (iterator$2.y()) {
      var elem = iterator$2.h();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? elementClass.P.z : elem));
      jsElems.push(unboxedElem);
    }
    var elemRuntimeClass = ((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass));
    return elemRuntimeClass.P.r().w(jsElems);
  }
});
$p.cI = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.P.Z && $objectGetClass(dest).P.R(srcClass.P))) {
    src.t(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  bz: 1,
  a: 1
}));
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$();
  }
  return $n_s_Array$;
}
/** @constructor */
function $c_s_Console$() {
  this.eq = null;
  $n_s_Console$ = this;
  this.eq = new $c_s_util_DynamicVariable($m_jl_System$Streams$().e8);
}
$p = $c_s_Console$.prototype = new $h_O();
$p.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
$h_s_Console$.prototype = $p;
$p.gf = (function() {
  return this.eq.dO;
});
var $d_s_Console$ = new $TypeData().i($c_s_Console$, "scala.Console$", ({
  bA: 1,
  cU: 1
}));
var $n_s_Console$;
function $m_s_Console$() {
  if ((!$n_s_Console$)) {
    $n_s_Console$ = new $c_s_Console$();
  }
  return $n_s_Console$;
}
/** @constructor */
function $c_s_Conversion() {
}
$p = $c_s_Conversion.prototype = new $h_O();
$p.constructor = $c_s_Conversion;
/** @constructor */
function $h_s_Conversion() {
}
$h_s_Conversion.prototype = $p;
$p.k = (function() {
  return "<function1>";
});
function $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($thiz, elems) {
  if ((elems === $thiz)) {
    $thiz.ap($m_scm_Buffer$().g2(elems));
  } else {
    var it = elems.j();
    while (it.y()) {
      $thiz.aj(it.h());
    }
  }
  return $thiz;
}
/** @constructor */
function $c_s_reflect_ClassTag$() {
  this.gB = null;
  this.gK = null;
  this.gC = null;
  this.gF = null;
  this.gG = null;
  this.gE = null;
  this.gD = null;
  this.gA = null;
  this.gL = null;
  this.gy = null;
  this.gJ = null;
  this.gz = null;
  this.gH = null;
  this.gI = null;
  $n_s_reflect_ClassTag$ = this;
  this.gB = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.gK = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.gC = $m_s_reflect_ManifestFactory$CharManifest$();
  this.gF = $m_s_reflect_ManifestFactory$IntManifest$();
  this.gG = $m_s_reflect_ManifestFactory$LongManifest$();
  this.gE = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.gD = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.gA = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.gL = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.gy = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.gJ = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.gz = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.gH = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.gI = $m_s_reflect_ManifestFactory$NullManifest$();
}
$p = $c_s_reflect_ClassTag$.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $p;
$p.h5 = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.l()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.l()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.l()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.l()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.l()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.l()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.l()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.l()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.l()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.l()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.l()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.l()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().i($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  d3: 1,
  a: 1
}));
var $n_s_reflect_ClassTag$;
function $m_s_reflect_ClassTag$() {
  if ((!$n_s_reflect_ClassTag$)) {
    $n_s_reflect_ClassTag$ = new $c_s_reflect_ClassTag$();
  }
  return $n_s_reflect_ClassTag$;
}
/** @constructor */
function $c_sr_AbstractFunction0() {
}
$p = $c_sr_AbstractFunction0.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $p;
$p.k = (function() {
  return "<function0>";
});
/** @constructor */
function $c_sr_AbstractFunction1() {
}
$p = $c_sr_AbstractFunction1.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
$h_sr_AbstractFunction1.prototype = $p;
$p.k = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_AbstractFunction2() {
}
$p = $c_sr_AbstractFunction2.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
}
$h_sr_AbstractFunction2.prototype = $p;
$p.k = (function() {
  return "<function2>";
});
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.V = 0;
  this.eR = 0;
  this.gM = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.V = $f_T__hashCode__I("Seq");
  this.eR = $f_T__hashCode__I("Map");
  this.gM = $f_T__hashCode__I("Set");
  this.i1($m_sci_Nil$(), this.eR);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.hU = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.hq(xs, this.V) : ((xs instanceof $c_sci_List) ? this.hv(xs, this.V) : this.hM(xs, this.V)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  dI: 1,
  dH: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_Lsentences_Adjective$() {
  this.eS = 0;
  this.eT = false;
}
$p = $c_Lsentences_Adjective$.prototype = new $h_O();
$p.constructor = $c_Lsentences_Adjective$;
/** @constructor */
function $h_Lsentences_Adjective$() {
}
$h_Lsentences_Adjective$.prototype = $p;
$p.T = (function() {
  if ((!this.eT)) {
    this.eS = $f_Lsentences_Symbol__totalWeight__I(this);
    this.eT = true;
  }
  return this.eS;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "sharp")), 6), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "horny")), 2), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "amazing")), 4), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "intelligent")), 3), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "wet")), 2), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "loud")), 4), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "sweet")), 5), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "beautiful")), 6)])));
});
var $d_Lsentences_Adjective$ = new $TypeData().i($c_Lsentences_Adjective$, "sentences.Adjective$", ({
  dJ: 1,
  r: 1
}));
var $n_Lsentences_Adjective$;
function $m_Lsentences_Adjective$() {
  if ((!$n_Lsentences_Adjective$)) {
    $n_Lsentences_Adjective$ = new $c_Lsentences_Adjective$();
  }
  return $n_Lsentences_Adjective$;
}
/** @constructor */
function $c_Lsentences_Adverb$() {
  this.eU = 0;
  this.eV = false;
}
$p = $c_Lsentences_Adverb$.prototype = new $h_O();
$p.constructor = $c_Lsentences_Adverb$;
/** @constructor */
function $h_Lsentences_Adverb$() {
}
$h_Lsentences_Adverb$.prototype = $p;
$p.T = (function() {
  if ((!this.eV)) {
    this.eU = $f_Lsentences_Symbol__totalWeight__I(this);
    this.eV = true;
  }
  return this.eU;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "loudly")), 6), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "softly")), 7), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "quietly")), 7), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "beautifully")), 6), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "wistfully")), 4), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "fast")), 7), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "happily")), 8), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "innocently")), 4), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "angrily")), 1), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "yesterday")), 5), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "next year")), 4), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "here")), 5), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "above")), 3), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "well")), 4), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "often")), 5), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "rarely")), 4)])));
});
var $d_Lsentences_Adverb$ = new $TypeData().i($c_Lsentences_Adverb$, "sentences.Adverb$", ({
  dK: 1,
  r: 1
}));
var $n_Lsentences_Adverb$;
function $m_Lsentences_Adverb$() {
  if ((!$n_Lsentences_Adverb$)) {
    $n_Lsentences_Adverb$ = new $c_Lsentences_Adverb$();
  }
  return $n_Lsentences_Adverb$;
}
/** @constructor */
function $c_Lsentences_Article$() {
  this.eW = 0;
  this.eX = false;
}
$p = $c_Lsentences_Article$.prototype = new $h_O();
$p.constructor = $c_Lsentences_Article$;
/** @constructor */
function $h_Lsentences_Article$() {
}
$h_Lsentences_Article$.prototype = $p;
$p.T = (function() {
  if ((!this.eX)) {
    this.eW = $f_Lsentences_Symbol__totalWeight__I(this);
    this.eX = true;
  }
  return this.eW;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "a")), 1), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "the")), 2)])));
});
var $d_Lsentences_Article$ = new $TypeData().i($c_Lsentences_Article$, "sentences.Article$", ({
  dL: 1,
  r: 1
}));
var $n_Lsentences_Article$;
function $m_Lsentences_Article$() {
  if ((!$n_Lsentences_Article$)) {
    $n_Lsentences_Article$ = new $c_Lsentences_Article$();
  }
  return $n_Lsentences_Article$;
}
/** @constructor */
function $c_Lsentences_ComplexSentence$() {
  this.eY = 0;
  this.eZ = false;
}
$p = $c_Lsentences_ComplexSentence$.prototype = new $h_O();
$p.constructor = $c_Lsentences_ComplexSentence$;
/** @constructor */
function $h_Lsentences_ComplexSentence$() {
}
$h_Lsentences_ComplexSentence$.prototype = $p;
$p.T = (function() {
  if ((!this.eZ)) {
    this.eY = $f_Lsentences_Symbol__totalWeight__I(this);
    this.eZ = true;
  }
  return this.eY;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__sci_Vector__I__(new $c_Lsentences_Expansion(), $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Symbol.r().C)([$m_Lsentences_IndependentClause$(), $m_Lsentences_Comma$(), $m_Lsentences_DependentClause$()]))), 3), $ct_Lsentences_Expansion__sci_Vector__I__(new $c_Lsentences_Expansion(), $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Symbol.r().C)([$m_Lsentences_DependentClause$(), $m_Lsentences_Comma$(), $m_Lsentences_IndependentClause$()]))), 2)])));
});
var $d_Lsentences_ComplexSentence$ = new $TypeData().i($c_Lsentences_ComplexSentence$, "sentences.ComplexSentence$", ({
  dN: 1,
  r: 1
}));
var $n_Lsentences_ComplexSentence$;
function $m_Lsentences_ComplexSentence$() {
  if ((!$n_Lsentences_ComplexSentence$)) {
    $n_Lsentences_ComplexSentence$ = new $c_Lsentences_ComplexSentence$();
  }
  return $n_Lsentences_ComplexSentence$;
}
/** @constructor */
function $c_Lsentences_CompoundSentence$() {
  this.f0 = 0;
  this.f1 = false;
}
$p = $c_Lsentences_CompoundSentence$.prototype = new $h_O();
$p.constructor = $c_Lsentences_CompoundSentence$;
/** @constructor */
function $h_Lsentences_CompoundSentence$() {
}
$h_Lsentences_CompoundSentence$.prototype = $p;
$p.T = (function() {
  if ((!this.f1)) {
    this.f0 = $f_Lsentences_Symbol__totalWeight__I(this);
    this.f1 = true;
  }
  return this.f0;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__sci_Vector__I__(new $c_Lsentences_Expansion(), $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Symbol.r().C)([$m_Lsentences_IndependentClause$(), $m_Lsentences_Comma$(), $m_Lsentences_CoordinatingConjunction$(), $m_Lsentences_IndependentClause$()]))), 1)])));
});
var $d_Lsentences_CompoundSentence$ = new $TypeData().i($c_Lsentences_CompoundSentence$, "sentences.CompoundSentence$", ({
  dO: 1,
  r: 1
}));
var $n_Lsentences_CompoundSentence$;
function $m_Lsentences_CompoundSentence$() {
  if ((!$n_Lsentences_CompoundSentence$)) {
    $n_Lsentences_CompoundSentence$ = new $c_Lsentences_CompoundSentence$();
  }
  return $n_Lsentences_CompoundSentence$;
}
/** @constructor */
function $c_Lsentences_CoordinatingConjunction$() {
  this.f2 = 0;
  this.f3 = false;
}
$p = $c_Lsentences_CoordinatingConjunction$.prototype = new $h_O();
$p.constructor = $c_Lsentences_CoordinatingConjunction$;
/** @constructor */
function $h_Lsentences_CoordinatingConjunction$() {
}
$h_Lsentences_CoordinatingConjunction$.prototype = $p;
$p.T = (function() {
  if ((!this.f3)) {
    this.f2 = $f_Lsentences_Symbol__totalWeight__I(this);
    this.f3 = true;
  }
  return this.f2;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "and")), 8), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "but")), 7), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "so")), 6), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "for")), 2), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "or")), 4), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "or")), 3)])));
});
var $d_Lsentences_CoordinatingConjunction$ = new $TypeData().i($c_Lsentences_CoordinatingConjunction$, "sentences.CoordinatingConjunction$", ({
  dP: 1,
  r: 1
}));
var $n_Lsentences_CoordinatingConjunction$;
function $m_Lsentences_CoordinatingConjunction$() {
  if ((!$n_Lsentences_CoordinatingConjunction$)) {
    $n_Lsentences_CoordinatingConjunction$ = new $c_Lsentences_CoordinatingConjunction$();
  }
  return $n_Lsentences_CoordinatingConjunction$;
}
/** @constructor */
function $c_Lsentences_DependentClause$() {
  this.f4 = 0;
  this.f5 = false;
}
$p = $c_Lsentences_DependentClause$.prototype = new $h_O();
$p.constructor = $c_Lsentences_DependentClause$;
/** @constructor */
function $h_Lsentences_DependentClause$() {
}
$h_Lsentences_DependentClause$.prototype = $p;
$p.T = (function() {
  if ((!this.f5)) {
    this.f4 = $f_Lsentences_Symbol__totalWeight__I(this);
    this.f5 = true;
  }
  return this.f4;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__sci_Vector__I__(new $c_Lsentences_Expansion(), $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Symbol.r().C)([$m_Lsentences_SubordinatingConjunction$(), $m_Lsentences_IndependentClause$()]))), 1)])));
});
var $d_Lsentences_DependentClause$ = new $TypeData().i($c_Lsentences_DependentClause$, "sentences.DependentClause$", ({
  dQ: 1,
  r: 1
}));
var $n_Lsentences_DependentClause$;
function $m_Lsentences_DependentClause$() {
  if ((!$n_Lsentences_DependentClause$)) {
    $n_Lsentences_DependentClause$ = new $c_Lsentences_DependentClause$();
  }
  return $n_Lsentences_DependentClause$;
}
/** @constructor */
function $c_Lsentences_ImperativeSentence$() {
  this.f8 = 0;
  this.f9 = false;
}
$p = $c_Lsentences_ImperativeSentence$.prototype = new $h_O();
$p.constructor = $c_Lsentences_ImperativeSentence$;
/** @constructor */
function $h_Lsentences_ImperativeSentence$() {
}
$h_Lsentences_ImperativeSentence$.prototype = $p;
$p.T = (function() {
  if ((!this.f9)) {
    this.f8 = $f_Lsentences_Symbol__totalWeight__I(this);
    this.f9 = true;
  }
  return this.f8;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__sci_Vector__I__(new $c_Lsentences_Expansion(), $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Symbol.r().C)([$m_Lsentences_PresentTense$(), $m_Lsentences_Subject$()]))), 1)])));
});
var $d_Lsentences_ImperativeSentence$ = new $TypeData().i($c_Lsentences_ImperativeSentence$, "sentences.ImperativeSentence$", ({
  dU: 1,
  r: 1
}));
var $n_Lsentences_ImperativeSentence$;
function $m_Lsentences_ImperativeSentence$() {
  if ((!$n_Lsentences_ImperativeSentence$)) {
    $n_Lsentences_ImperativeSentence$ = new $c_Lsentences_ImperativeSentence$();
  }
  return $n_Lsentences_ImperativeSentence$;
}
/** @constructor */
function $c_Lsentences_IndependentClause$() {
  this.fa = 0;
  this.fb = false;
}
$p = $c_Lsentences_IndependentClause$.prototype = new $h_O();
$p.constructor = $c_Lsentences_IndependentClause$;
/** @constructor */
function $h_Lsentences_IndependentClause$() {
}
$h_Lsentences_IndependentClause$.prototype = $p;
$p.T = (function() {
  if ((!this.fb)) {
    this.fa = $f_Lsentences_Symbol__totalWeight__I(this);
    this.fb = true;
  }
  return this.fa;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__sci_Vector__I__(new $c_Lsentences_Expansion(), $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Symbol.r().C)([$m_Lsentences_Subject$(), $m_Lsentences_Predicate$()]))), 7)])));
});
var $d_Lsentences_IndependentClause$ = new $TypeData().i($c_Lsentences_IndependentClause$, "sentences.IndependentClause$", ({
  dV: 1,
  r: 1
}));
var $n_Lsentences_IndependentClause$;
function $m_Lsentences_IndependentClause$() {
  if ((!$n_Lsentences_IndependentClause$)) {
    $n_Lsentences_IndependentClause$ = new $c_Lsentences_IndependentClause$();
  }
  return $n_Lsentences_IndependentClause$;
}
/** @constructor */
function $c_Lsentences_IntransitiveVerb$() {
  this.fc = 0;
  this.fd = false;
}
$p = $c_Lsentences_IntransitiveVerb$.prototype = new $h_O();
$p.constructor = $c_Lsentences_IntransitiveVerb$;
/** @constructor */
function $h_Lsentences_IntransitiveVerb$() {
}
$h_Lsentences_IntransitiveVerb$.prototype = $p;
$p.T = (function() {
  if ((!this.fd)) {
    this.fc = $f_Lsentences_Symbol__totalWeight__I(this);
    this.fd = true;
  }
  return this.fc;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "flew")), 4), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "moaned")), 1), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "came")), 3), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "went")), 4), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "slept")), 2), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "watched")), 3), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "gave")), 2), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "fell")), 1)])));
});
var $d_Lsentences_IntransitiveVerb$ = new $TypeData().i($c_Lsentences_IntransitiveVerb$, "sentences.IntransitiveVerb$", ({
  dW: 1,
  r: 1
}));
var $n_Lsentences_IntransitiveVerb$;
function $m_Lsentences_IntransitiveVerb$() {
  if ((!$n_Lsentences_IntransitiveVerb$)) {
    $n_Lsentences_IntransitiveVerb$ = new $c_Lsentences_IntransitiveVerb$();
  }
  return $n_Lsentences_IntransitiveVerb$;
}
/** @constructor */
function $c_Lsentences_NounPhrase$() {
  this.fe = 0;
  this.ff = false;
}
$p = $c_Lsentences_NounPhrase$.prototype = new $h_O();
$p.constructor = $c_Lsentences_NounPhrase$;
/** @constructor */
function $h_Lsentences_NounPhrase$() {
}
$h_Lsentences_NounPhrase$.prototype = $p;
$p.T = (function() {
  if ((!this.ff)) {
    this.fe = $f_Lsentences_Symbol__totalWeight__I(this);
    this.ff = true;
  }
  return this.fe;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), $m_Lsentences_PluralNoun$(), 2), $ct_Lsentences_Expansion__sci_Vector__I__(new $c_Lsentences_Expansion(), $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Symbol.r().C)([$m_Lsentences_Adjective$(), $m_Lsentences_PluralNoun$()]))), 3), $ct_Lsentences_Expansion__sci_Vector__I__(new $c_Lsentences_Expansion(), $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Symbol.r().C)([$m_Lsentences_Article$(), $m_Lsentences_SingularNoun$()]))), 5), $ct_Lsentences_Expansion__sci_Vector__I__(new $c_Lsentences_Expansion(), $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Symbol.r().C)([$ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "the"), $m_Lsentences_PluralNoun$()]))), 5), $ct_Lsentences_Expansion__sci_Vector__I__(new $c_Lsentences_Expansion(), $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Symbol.r().C)([$m_Lsentences_Article$(), $m_Lsentences_Adjective$(), $m_Lsentences_SingularNoun$()]))), 2), $ct_Lsentences_Expansion__sci_Vector__I__(new $c_Lsentences_Expansion(), $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Symbol.r().C)([$ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "the"), $m_Lsentences_Adjective$(), $m_Lsentences_PluralNoun$()]))), 3)])));
});
var $d_Lsentences_NounPhrase$ = new $TypeData().i($c_Lsentences_NounPhrase$, "sentences.NounPhrase$", ({
  dY: 1,
  r: 1
}));
var $n_Lsentences_NounPhrase$;
function $m_Lsentences_NounPhrase$() {
  if ((!$n_Lsentences_NounPhrase$)) {
    $n_Lsentences_NounPhrase$ = new $c_Lsentences_NounPhrase$();
  }
  return $n_Lsentences_NounPhrase$;
}
/** @constructor */
function $c_Lsentences_Object$() {
  this.fg = 0;
  this.fh = false;
}
$p = $c_Lsentences_Object$.prototype = new $h_O();
$p.constructor = $c_Lsentences_Object$;
/** @constructor */
function $h_Lsentences_Object$() {
}
$h_Lsentences_Object$.prototype = $p;
$p.T = (function() {
  if ((!this.fh)) {
    this.fg = $f_Lsentences_Symbol__totalWeight__I(this);
    this.fh = true;
  }
  return this.fg;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), $m_Lsentences_NounPhrase$(), 1)])));
});
var $d_Lsentences_Object$ = new $TypeData().i($c_Lsentences_Object$, "sentences.Object$", ({
  dZ: 1,
  r: 1
}));
var $n_Lsentences_Object$;
function $m_Lsentences_Object$() {
  if ((!$n_Lsentences_Object$)) {
    $n_Lsentences_Object$ = new $c_Lsentences_Object$();
  }
  return $n_Lsentences_Object$;
}
/** @constructor */
function $c_Lsentences_PluralNoun$() {
  this.fi = 0;
  this.fj = false;
}
$p = $c_Lsentences_PluralNoun$.prototype = new $h_O();
$p.constructor = $c_Lsentences_PluralNoun$;
/** @constructor */
function $h_Lsentences_PluralNoun$() {
}
$h_Lsentences_PluralNoun$.prototype = $p;
$p.T = (function() {
  if ((!this.fj)) {
    this.fi = $f_Lsentences_Symbol__totalWeight__I(this);
    this.fj = true;
  }
  return this.fi;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "work")), 4), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "men")), 3), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "cattle")), 4), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "water")), 2), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "holes")), 4), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "pens")), 2), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "ladies")), 3), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "people")), 4), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "children")), 3)])));
});
var $d_Lsentences_PluralNoun$ = new $TypeData().i($c_Lsentences_PluralNoun$, "sentences.PluralNoun$", ({
  e0: 1,
  r: 1
}));
var $n_Lsentences_PluralNoun$;
function $m_Lsentences_PluralNoun$() {
  if ((!$n_Lsentences_PluralNoun$)) {
    $n_Lsentences_PluralNoun$ = new $c_Lsentences_PluralNoun$();
  }
  return $n_Lsentences_PluralNoun$;
}
/** @constructor */
function $c_Lsentences_Predicate$() {
  this.fk = 0;
  this.fl = false;
}
$p = $c_Lsentences_Predicate$.prototype = new $h_O();
$p.constructor = $c_Lsentences_Predicate$;
/** @constructor */
function $h_Lsentences_Predicate$() {
}
$h_Lsentences_Predicate$.prototype = $p;
$p.T = (function() {
  if ((!this.fl)) {
    this.fk = $f_Lsentences_Symbol__totalWeight__I(this);
    this.fl = true;
  }
  return this.fk;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), $m_Lsentences_IntransitiveVerb$(), 12), $ct_Lsentences_Expansion__sci_Vector__I__(new $c_Lsentences_Expansion(), $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Symbol.r().C)([$m_Lsentences_Verb$(), $m_Lsentences_Adverb$()]))), 10), $ct_Lsentences_Expansion__sci_Vector__I__(new $c_Lsentences_Expansion(), $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Symbol.r().C)([$m_Lsentences_TransitiveVerb$(), $m_Lsentences_Object$()]))), 15), $ct_Lsentences_Expansion__sci_Vector__I__(new $c_Lsentences_Expansion(), $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Symbol.r().C)([$m_Lsentences_TransitiveVerb$(), $m_Lsentences_Object$(), $m_Lsentences_PrepositionalPhrase$()]))), 14), $ct_Lsentences_Expansion__sci_Vector__I__(new $c_Lsentences_Expansion(), $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Symbol.r().C)([$m_Lsentences_TransitiveVerb$(), $m_Lsentences_Object$(), $m_Lsentences_Adverb$()]))), 12), $ct_Lsentences_Expansion__sci_Vector__I__(new $c_Lsentences_Expansion(), $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Symbol.r().C)([$m_Lsentences_TransitiveVerb$(), $m_Lsentences_Object$(), $m_Lsentences_Adverb$()]))), 13), $ct_Lsentences_Expansion__sci_Vector__I__(new $c_Lsentences_Expansion(), $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Symbol.r().C)([$m_Lsentences_IntransitiveVerb$(), $m_Lsentences_PrepositionalPhrase$()]))), 11)])));
});
var $d_Lsentences_Predicate$ = new $TypeData().i($c_Lsentences_Predicate$, "sentences.Predicate$", ({
  e1: 1,
  r: 1
}));
var $n_Lsentences_Predicate$;
function $m_Lsentences_Predicate$() {
  if ((!$n_Lsentences_Predicate$)) {
    $n_Lsentences_Predicate$ = new $c_Lsentences_Predicate$();
  }
  return $n_Lsentences_Predicate$;
}
/** @constructor */
function $c_Lsentences_Preposition$() {
  this.fm = 0;
  this.fn = false;
}
$p = $c_Lsentences_Preposition$.prototype = new $h_O();
$p.constructor = $c_Lsentences_Preposition$;
/** @constructor */
function $h_Lsentences_Preposition$() {
}
$h_Lsentences_Preposition$.prototype = $p;
$p.T = (function() {
  if ((!this.fn)) {
    this.fm = $f_Lsentences_Symbol__totalWeight__I(this);
    this.fn = true;
  }
  return this.fm;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "at")), 4), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "in")), 5), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "on")), 3), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "out")), 3), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "in front of")), 1), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "on top of")), 2), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "behind")), 1), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "to")), 4), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "into")), 2), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "with")), 2), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "for")), 4)])));
});
var $d_Lsentences_Preposition$ = new $TypeData().i($c_Lsentences_Preposition$, "sentences.Preposition$", ({
  e2: 1,
  r: 1
}));
var $n_Lsentences_Preposition$;
function $m_Lsentences_Preposition$() {
  if ((!$n_Lsentences_Preposition$)) {
    $n_Lsentences_Preposition$ = new $c_Lsentences_Preposition$();
  }
  return $n_Lsentences_Preposition$;
}
/** @constructor */
function $c_Lsentences_PrepositionalPhrase$() {
  this.fo = 0;
  this.fp = false;
}
$p = $c_Lsentences_PrepositionalPhrase$.prototype = new $h_O();
$p.constructor = $c_Lsentences_PrepositionalPhrase$;
/** @constructor */
function $h_Lsentences_PrepositionalPhrase$() {
}
$h_Lsentences_PrepositionalPhrase$.prototype = $p;
$p.T = (function() {
  if ((!this.fp)) {
    this.fo = $f_Lsentences_Symbol__totalWeight__I(this);
    this.fp = true;
  }
  return this.fo;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__sci_Vector__I__(new $c_Lsentences_Expansion(), $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Symbol.r().C)([$m_Lsentences_Preposition$(), $m_Lsentences_Object$()]))), 5), $ct_Lsentences_Expansion__sci_Vector__I__(new $c_Lsentences_Expansion(), $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Symbol.r().C)([$m_Lsentences_Preposition$(), $m_Lsentences_Adverb$()]))), 3)])));
});
var $d_Lsentences_PrepositionalPhrase$ = new $TypeData().i($c_Lsentences_PrepositionalPhrase$, "sentences.PrepositionalPhrase$", ({
  e3: 1,
  r: 1
}));
var $n_Lsentences_PrepositionalPhrase$;
function $m_Lsentences_PrepositionalPhrase$() {
  if ((!$n_Lsentences_PrepositionalPhrase$)) {
    $n_Lsentences_PrepositionalPhrase$ = new $c_Lsentences_PrepositionalPhrase$();
  }
  return $n_Lsentences_PrepositionalPhrase$;
}
/** @constructor */
function $c_Lsentences_PresentTense$() {
  this.fq = 0;
  this.fr = false;
}
$p = $c_Lsentences_PresentTense$.prototype = new $h_O();
$p.constructor = $c_Lsentences_PresentTense$;
/** @constructor */
function $h_Lsentences_PresentTense$() {
}
$h_Lsentences_PresentTense$.prototype = $p;
$p.T = (function() {
  if ((!this.fr)) {
    this.fq = $f_Lsentences_Symbol__totalWeight__I(this);
    this.fr = true;
  }
  return this.fq;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "tell")), 30), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "call")), 27), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "nut")), 12), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "fuck")), 1), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "beat")), 12), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "write")), 24), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "go")), 21), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "come")), 24)])));
});
var $d_Lsentences_PresentTense$ = new $TypeData().i($c_Lsentences_PresentTense$, "sentences.PresentTense$", ({
  e4: 1,
  r: 1
}));
var $n_Lsentences_PresentTense$;
function $m_Lsentences_PresentTense$() {
  if ((!$n_Lsentences_PresentTense$)) {
    $n_Lsentences_PresentTense$ = new $c_Lsentences_PresentTense$();
  }
  return $n_Lsentences_PresentTense$;
}
/** @constructor */
function $c_Lsentences_Pronoun$() {
  this.fs = 0;
  this.ft = false;
}
$p = $c_Lsentences_Pronoun$.prototype = new $h_O();
$p.constructor = $c_Lsentences_Pronoun$;
/** @constructor */
function $h_Lsentences_Pronoun$() {
}
$h_Lsentences_Pronoun$.prototype = $p;
$p.T = (function() {
  if ((!this.ft)) {
    this.fs = $f_Lsentences_Symbol__totalWeight__I(this);
    this.ft = true;
  }
  return this.fs;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "he")), 3), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "she")), 3), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "it")), 1), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "they")), 2)])));
});
var $d_Lsentences_Pronoun$ = new $TypeData().i($c_Lsentences_Pronoun$, "sentences.Pronoun$", ({
  e5: 1,
  r: 1
}));
var $n_Lsentences_Pronoun$;
function $m_Lsentences_Pronoun$() {
  if ((!$n_Lsentences_Pronoun$)) {
    $n_Lsentences_Pronoun$ = new $c_Lsentences_Pronoun$();
  }
  return $n_Lsentences_Pronoun$;
}
/** @constructor */
function $c_Lsentences_Sentence$() {
  this.fu = 0;
  this.fv = false;
}
$p = $c_Lsentences_Sentence$.prototype = new $h_O();
$p.constructor = $c_Lsentences_Sentence$;
/** @constructor */
function $h_Lsentences_Sentence$() {
}
$h_Lsentences_Sentence$.prototype = $p;
$p.T = (function() {
  if ((!this.fv)) {
    this.fu = $f_Lsentences_Symbol__totalWeight__I(this);
    this.fv = true;
  }
  return this.fu;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), $m_Lsentences_SimpleSentence$(), 4), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), $m_Lsentences_ComplexSentence$(), 3), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), $m_Lsentences_CompoundSentence$(), 2)])));
});
var $d_Lsentences_Sentence$ = new $TypeData().i($c_Lsentences_Sentence$, "sentences.Sentence$", ({
  e6: 1,
  r: 1
}));
var $n_Lsentences_Sentence$;
function $m_Lsentences_Sentence$() {
  if ((!$n_Lsentences_Sentence$)) {
    $n_Lsentences_Sentence$ = new $c_Lsentences_Sentence$();
  }
  return $n_Lsentences_Sentence$;
}
/** @constructor */
function $c_Lsentences_SimpleSentence$() {
  this.fw = 0;
  this.fx = false;
}
$p = $c_Lsentences_SimpleSentence$.prototype = new $h_O();
$p.constructor = $c_Lsentences_SimpleSentence$;
/** @constructor */
function $h_Lsentences_SimpleSentence$() {
}
$h_Lsentences_SimpleSentence$.prototype = $p;
$p.T = (function() {
  if ((!this.fx)) {
    this.fw = $f_Lsentences_Symbol__totalWeight__I(this);
    this.fx = true;
  }
  return this.fw;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), $m_Lsentences_IndependentClause$(), 7), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), $m_Lsentences_ImperativeSentence$(), 2)])));
});
var $d_Lsentences_SimpleSentence$ = new $TypeData().i($c_Lsentences_SimpleSentence$, "sentences.SimpleSentence$", ({
  e7: 1,
  r: 1
}));
var $n_Lsentences_SimpleSentence$;
function $m_Lsentences_SimpleSentence$() {
  if ((!$n_Lsentences_SimpleSentence$)) {
    $n_Lsentences_SimpleSentence$ = new $c_Lsentences_SimpleSentence$();
  }
  return $n_Lsentences_SimpleSentence$;
}
/** @constructor */
function $c_Lsentences_SingularNoun$() {
  this.fy = 0;
  this.fz = false;
}
$p = $c_Lsentences_SingularNoun$.prototype = new $h_O();
$p.constructor = $c_Lsentences_SingularNoun$;
/** @constructor */
function $h_Lsentences_SingularNoun$() {
}
$h_Lsentences_SingularNoun$.prototype = $p;
$p.T = (function() {
  if ((!this.fz)) {
    this.fy = $f_Lsentences_Symbol__totalWeight__I(this);
    this.fz = true;
  }
  return this.fy;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "computer")), 5), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "boy")), 7), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "horse")), 3), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "potato")), 6), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "girl")), 5), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "house")), 3), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "bird")), 6), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "shaft")), 2), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "book")), 7), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "witch")), 4), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "moron")), 1), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "god")), 1)])));
});
var $d_Lsentences_SingularNoun$ = new $TypeData().i($c_Lsentences_SingularNoun$, "sentences.SingularNoun$", ({
  e8: 1,
  r: 1
}));
var $n_Lsentences_SingularNoun$;
function $m_Lsentences_SingularNoun$() {
  if ((!$n_Lsentences_SingularNoun$)) {
    $n_Lsentences_SingularNoun$ = new $c_Lsentences_SingularNoun$();
  }
  return $n_Lsentences_SingularNoun$;
}
/** @constructor */
function $c_Lsentences_Subject$() {
  this.fA = 0;
  this.fB = false;
}
$p = $c_Lsentences_Subject$.prototype = new $h_O();
$p.constructor = $c_Lsentences_Subject$;
/** @constructor */
function $h_Lsentences_Subject$() {
}
$h_Lsentences_Subject$.prototype = $p;
$p.T = (function() {
  if ((!this.fB)) {
    this.fA = $f_Lsentences_Symbol__totalWeight__I(this);
    this.fB = true;
  }
  return this.fA;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), $m_Lsentences_Pronoun$(), 5), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), $m_Lsentences_Object$(), 8)])));
});
var $d_Lsentences_Subject$ = new $TypeData().i($c_Lsentences_Subject$, "sentences.Subject$", ({
  e9: 1,
  r: 1
}));
var $n_Lsentences_Subject$;
function $m_Lsentences_Subject$() {
  if ((!$n_Lsentences_Subject$)) {
    $n_Lsentences_Subject$ = new $c_Lsentences_Subject$();
  }
  return $n_Lsentences_Subject$;
}
/** @constructor */
function $c_Lsentences_SubordinatingConjunction$() {
  this.fC = 0;
  this.fD = false;
}
$p = $c_Lsentences_SubordinatingConjunction$.prototype = new $h_O();
$p.constructor = $c_Lsentences_SubordinatingConjunction$;
/** @constructor */
function $h_Lsentences_SubordinatingConjunction$() {
}
$h_Lsentences_SubordinatingConjunction$.prototype = $p;
$p.T = (function() {
  if ((!this.fD)) {
    this.fC = $f_Lsentences_Symbol__totalWeight__I(this);
    this.fD = true;
  }
  return this.fC;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "before")), 6), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "when")), 6), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "that")), 7), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "since")), 5), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "because")), 7), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "though")), 6), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "even though")), 4), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "where")), 5), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "so that")), 1), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "while")), 3)])));
});
var $d_Lsentences_SubordinatingConjunction$ = new $TypeData().i($c_Lsentences_SubordinatingConjunction$, "sentences.SubordinatingConjunction$", ({
  ea: 1,
  r: 1
}));
var $n_Lsentences_SubordinatingConjunction$;
function $m_Lsentences_SubordinatingConjunction$() {
  if ((!$n_Lsentences_SubordinatingConjunction$)) {
    $n_Lsentences_SubordinatingConjunction$ = new $c_Lsentences_SubordinatingConjunction$();
  }
  return $n_Lsentences_SubordinatingConjunction$;
}
/** @constructor */
function $c_Lsentences_TransitiveVerb$() {
  this.fE = 0;
  this.fF = false;
}
$p = $c_Lsentences_TransitiveVerb$.prototype = new $h_O();
$p.constructor = $c_Lsentences_TransitiveVerb$;
/** @constructor */
function $h_Lsentences_TransitiveVerb$() {
}
$h_Lsentences_TransitiveVerb$.prototype = $p;
$p.T = (function() {
  if ((!this.fF)) {
    this.fE = $f_Lsentences_Symbol__totalWeight__I(this);
    this.fF = true;
  }
  return this.fE;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "wrote")), 21), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "licked")), 9), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "fucked")), 1), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "ate")), 15), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "rode")), 9), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "surprised")), 15), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "constructed")), 18), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "reviewed")), 15), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "said")), 21), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), ($m_Lsentences_Grammar$package$().c(), $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), "called")), 21)])));
});
var $d_Lsentences_TransitiveVerb$ = new $TypeData().i($c_Lsentences_TransitiveVerb$, "sentences.TransitiveVerb$", ({
  eb: 1,
  r: 1
}));
var $n_Lsentences_TransitiveVerb$;
function $m_Lsentences_TransitiveVerb$() {
  if ((!$n_Lsentences_TransitiveVerb$)) {
    $n_Lsentences_TransitiveVerb$ = new $c_Lsentences_TransitiveVerb$();
  }
  return $n_Lsentences_TransitiveVerb$;
}
/** @constructor */
function $c_Lsentences_Verb$() {
  this.fG = 0;
  this.fH = false;
}
$p = $c_Lsentences_Verb$.prototype = new $h_O();
$p.constructor = $c_Lsentences_Verb$;
/** @constructor */
function $h_Lsentences_Verb$() {
}
$h_Lsentences_Verb$.prototype = $p;
$p.T = (function() {
  if ((!this.fH)) {
    this.fG = $f_Lsentences_Symbol__totalWeight__I(this);
    this.fH = true;
  }
  return this.fG;
});
$p.S = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.k = (function() {
  return $f_Lsentences_Symbol__name__T(this);
});
$p.O = (function() {
  return $m_sci_Vector$().n($m_sr_ScalaRunTime$().q(new ($d_Lsentences_Expansion.r().C)([$ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), $m_Lsentences_TransitiveVerb$(), 2), $ct_Lsentences_Expansion__Lsentences_Symbol__I__(new $c_Lsentences_Expansion(), $m_Lsentences_IntransitiveVerb$(), 1)])));
});
var $d_Lsentences_Verb$ = new $TypeData().i($c_Lsentences_Verb$, "sentences.Verb$", ({
  ed: 1,
  r: 1
}));
var $n_Lsentences_Verb$;
function $m_Lsentences_Verb$() {
  if ((!$n_Lsentences_Verb$)) {
    $n_Lsentences_Verb$ = new $c_Lsentences_Verb$();
  }
  return $n_Lsentences_Verb$;
}
function $p_jl_Class__computeCachedSimpleNameBestEffort__T($thiz) {
  if ($thiz.P.Z) {
    return ($thiz.P.Q().g5() + "[]");
  } else {
    var name = $thiz.P.N;
    var idx = (((-1) + name.length) | 0);
    while (((idx >= 0) && (name.charCodeAt(idx) === 36))) {
      idx = (((-1) + idx) | 0);
    }
    if ((idx >= 0)) {
      var index$1 = idx;
      var c = name.charCodeAt(index$1);
      var $x_1 = ((c >= 48) && (c <= 57));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      idx = (((-1) + idx) | 0);
      while (true) {
        if ((idx >= 0)) {
          var index$2 = idx;
          var c$1 = name.charCodeAt(index$2);
          var $x_2 = ((c$1 >= 48) && (c$1 <= 57));
        } else {
          var $x_2 = false;
        }
        if ($x_2) {
          idx = (((-1) + idx) | 0);
        } else {
          break;
        }
      }
      while (((idx >= 0) && (name.charCodeAt(idx) === 36))) {
        idx = (((-1) + idx) | 0);
      }
    }
    while (true) {
      if ((idx >= 0)) {
        var index$4 = idx;
        var currChar = name.charCodeAt(index$4);
        var $x_3 = ((currChar !== 46) && (currChar !== 36));
      } else {
        var $x_3 = false;
      }
      if ($x_3) {
        idx = (((-1) + idx) | 0);
      } else {
        break;
      }
    }
    var beginIndex = ((1 + idx) | 0);
    return name.substring(beginIndex);
  }
}
/** @constructor */
function $c_jl_Class($data) {
  this.dd = null;
  this.P = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.k = (function() {
  return ((this.P.Y ? "interface " : (this.P.X ? "" : "class ")) + this.P.N);
});
$p.g5 = (function() {
  if ((this.dd === null)) {
    this.dd = $p_jl_Class__computeCachedSimpleNameBestEffort__T(this);
  }
  return this.dd;
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  aY: 1,
  a: 1,
  S: 1
}));
class $c_jl_Error extends $c_jl_Throwable {
}
class $c_jl_Exception extends $c_jl_Throwable {
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.cS;
      break;
    }
    case 1: {
      return $thiz.cT;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.cU = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.cU = null;
}
$p = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$p.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $p;
$p.bE = (function(it) {
  return this.cU.g0(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.aX = (function() {
  return this.cU.ga($m_s_reflect_ManifestFactory$AnyManifest$());
});
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).dX(xs);
}
/** @constructor */
function $c_sc_Iterator$() {
  this.Z = null;
  $n_sc_Iterator$ = this;
  this.Z = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
$p.aX = (function() {
  return new $c_sc_Iterator$$anon$21();
});
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  bX: 1,
  a1: 1,
  a: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $f_scm_Builder__sizeHint__sc_IterableOnce__I__V($thiz, coll, delta) {
  var x1 = coll.R();
  if ((x1 !== (-1))) {
    var that = ((x1 + delta) | 0);
    $thiz.am(((that < 0) ? 0 : that));
  }
}
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  dv: 1,
  A: 1,
  a: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction0(f) {
  this.eO = null;
  this.eO = f;
}
$p = $c_sjsr_AnonFunction0.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sjsr_AnonFunction0;
/** @constructor */
function $h_sjsr_AnonFunction0() {
}
$h_sjsr_AnonFunction0.prototype = $p;
$p.cB = (function() {
  return (0, this.eO)();
});
var $d_sjsr_AnonFunction0 = new $TypeData().i($c_sjsr_AnonFunction0, "scala.scalajs.runtime.AnonFunction0", ({
  dD: 1,
  ds: 1,
  bC: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction1(f) {
  this.eP = null;
  this.eP = f;
}
$p = $c_sjsr_AnonFunction1.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sjsr_AnonFunction1;
/** @constructor */
function $h_sjsr_AnonFunction1() {
}
$h_sjsr_AnonFunction1.prototype = $p;
$p.v = (function(arg1) {
  return (0, this.eP)(arg1);
});
var $d_sjsr_AnonFunction1 = new $TypeData().i($c_sjsr_AnonFunction1, "scala.scalajs.runtime.AnonFunction1", ({
  dE: 1,
  dt: 1,
  f: 1
}));
/** @constructor */
function $c_sjsr_AnonFunction2(f) {
  this.eQ = null;
  this.eQ = f;
}
$p = $c_sjsr_AnonFunction2.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sjsr_AnonFunction2;
/** @constructor */
function $h_sjsr_AnonFunction2() {
}
$h_sjsr_AnonFunction2.prototype = $p;
$p.c9 = (function(arg1, arg2) {
  return (0, this.eQ)(arg1, arg2);
});
var $d_sjsr_AnonFunction2 = new $TypeData().i($c_sjsr_AnonFunction2, "scala.scalajs.runtime.AnonFunction2", ({
  dF: 1,
  du: 1,
  bD: 1
}));
/** @constructor */
function $c_Lsentences_Grammar$package$$anon$1() {
}
$p = $c_Lsentences_Grammar$package$$anon$1.prototype = new $h_s_Conversion();
$p.constructor = $c_Lsentences_Grammar$package$$anon$1;
/** @constructor */
function $h_Lsentences_Grammar$package$$anon$1() {
}
$h_Lsentences_Grammar$package$$anon$1.prototype = $p;
$p.v = (function(x) {
  return $ct_Lsentences_Token__T__(new $c_Lsentences_Token(), x);
});
var $d_Lsentences_Grammar$package$$anon$1 = new $TypeData().i($c_Lsentences_Grammar$package$$anon$1, "sentences.Grammar$package$$anon$1", ({
  dT: 1,
  bB: 1,
  f: 1
}));
/** @constructor */
function $c_Ljava_io_OutputStream() {
}
$p = $c_Ljava_io_OutputStream.prototype = new $h_O();
$p.constructor = $c_Ljava_io_OutputStream;
/** @constructor */
function $h_Ljava_io_OutputStream() {
}
$h_Ljava_io_OutputStream.prototype = $p;
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("" + detailMessage), ((detailMessage instanceof $c_jl_Throwable) ? detailMessage : null), true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().i($c_jl_AssertionError, "java.lang.AssertionError", ({
  aT: 1,
  aZ: 1,
  A: 1,
  a: 1
}));
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  aU: 1,
  a: 1,
  Y: 1,
  S: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  aW: 1,
  a: 1,
  Y: 1,
  S: 1
}), ((x) => (x instanceof $Char)));
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().i($c_jl_RuntimeException, "java.lang.RuntimeException", ({
  E: 1,
  D: 1,
  A: 1,
  a: 1
}));
function $ct_jl_StringBuffer__jl_StringBuilder__($thiz, builder) {
  $thiz.cN = builder;
  return $thiz;
}
function $ct_jl_StringBuffer__($thiz) {
  $ct_jl_StringBuffer__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz;
}
/** @constructor */
function $c_jl_StringBuffer() {
  this.cN = null;
}
$p = $c_jl_StringBuffer.prototype = new $h_O();
$p.constructor = $c_jl_StringBuffer;
/** @constructor */
function $h_jl_StringBuffer() {
}
$h_jl_StringBuffer.prototype = $p;
$p.dV = (function(str) {
  var this$1 = this.cN;
  this$1.s = (("" + this$1.s) + str);
  return this;
});
$p.fK = (function(c) {
  var this$1 = this.cN;
  var str = ("" + $cToS(c));
  this$1.s = (this$1.s + str);
  return this;
});
$p.k = (function() {
  return this.cN.s;
});
var $d_jl_StringBuffer = new $TypeData().i($c_jl_StringBuffer, "java.lang.StringBuffer", ({
  be: 1,
  ab: 1,
  ae: 1,
  a: 1
}));
function $ct_jl_StringBuilder__($thiz) {
  $thiz.s = "";
  return $thiz;
}
function $ct_jl_StringBuilder__I__($thiz, initialCapacity) {
  $ct_jl_StringBuilder__($thiz);
  if ((initialCapacity < 0)) {
    throw new $c_jl_NegativeArraySizeException();
  }
  return $thiz;
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.s = null;
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.h2 = (function(str) {
  var str$1 = $m_jl_String$().hA(str, 0, str.a.length);
  this.s = (("" + this.s) + str$1);
  return this;
});
$p.k = (function() {
  return this.s;
});
$p.p = (function() {
  return this.s.length;
});
$p.fX = (function(index) {
  return this.s.charCodeAt(index);
});
$p.hV = (function(index, ch) {
  var oldContent = this.s;
  if (((index < 0) || (index >= oldContent.length))) {
    throw $ct_jl_StringIndexOutOfBoundsException__I__(new $c_jl_StringIndexOutOfBoundsException(), index);
  }
  var $x_1 = oldContent.substring(0, index);
  var beginIndex = ((1 + index) | 0);
  this.s = (($x_1 + $cToS(ch)) + oldContent.substring(beginIndex));
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  bf: 1,
  ab: 1,
  ae: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractIterator() {
}
$p = $c_sc_AbstractIterator.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
}
$h_sc_AbstractIterator.prototype = $p;
$p.j = (function() {
  return this;
});
$p.dX = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.k = (function() {
  return "<iterator>";
});
$p.dZ = (function(p) {
  return $f_sc_IterableOnceOps__find__F1__s_Option(this, p);
});
$p.cJ = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op);
});
$p.e4 = (function(op) {
  return $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op);
});
$p.ak = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.cx = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.R = (function() {
  return (-1);
});
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  $thiz.cW = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.cW = null;
}
$p = $c_sc_SeqFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $p;
$p.g2 = (function(it) {
  return this.cW.bE(it);
});
$p.aX = (function() {
  return this.cW.aX();
});
$p.bE = (function(source) {
  return this.g2(source);
});
function $f_sc_StrictOptimizedIterableOps__zip__sc_IterableOnce__O($thiz, that) {
  var b = $thiz.bF().aX();
  var it1 = $thiz.j();
  var it2 = that.j();
  while ((it1.y() && it2.y())) {
    b.aj(new $c_T2(it1.h(), it2.h()));
  }
  return b.aP();
}
/** @constructor */
function $c_scm_Builder$$anon$1(outer, f$1) {
  this.cs = null;
  this.eH = null;
  this.cs = outer;
  this.eH = f$1;
}
$p = $c_scm_Builder$$anon$1.prototype = new $h_O();
$p.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $p;
$p.gZ = (function(x) {
  this.cs.aj(x);
  return this;
});
$p.gQ = (function(xs) {
  this.cs.ap(xs);
  return this;
});
$p.am = (function(size) {
  this.cs.am(size);
});
$p.aP = (function() {
  return this.eH.v(this.cs.aP());
});
$p.ap = (function(elems) {
  return this.gQ(elems);
});
$p.aj = (function(elem) {
  return this.gZ(elem);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  cN: 1,
  Z: 1,
  X: 1,
  W: 1
}));
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.c7 = elems;
  return $thiz;
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.c7 = null;
}
$p = $c_scm_GrowableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
}
$h_scm_GrowableBuilder.prototype = $p;
$p.am = (function(size) {
});
$p.h0 = (function(elem) {
  this.c7.aj(elem);
  return this;
});
$p.gR = (function(xs) {
  this.c7.ap(xs);
  return this;
});
$p.ap = (function(elems) {
  return this.gR(elems);
});
$p.aj = (function(elem) {
  return this.h0(elem);
});
$p.aP = (function() {
  return this.c7;
});
var $d_scm_GrowableBuilder = new $TypeData().i($c_scm_GrowableBuilder, "scala.collection.mutable.GrowableBuilder", ({
  aM: 1,
  Z: 1,
  X: 1,
  W: 1
}));
function $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, out) {
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_FilterOutputStream() {
}
$p = $c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_Ljava_io_FilterOutputStream;
/** @constructor */
function $h_Ljava_io_FilterOutputStream() {
}
$h_Ljava_io_FilterOutputStream.prototype = $p;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  aS: 1,
  E: 1,
  D: 1,
  A: 1,
  a: 1
}));
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  aV: 1,
  a7: 1,
  a: 1,
  Y: 1,
  S: 1
}), ((x) => $isByte(x)));
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().i($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
  af: 1,
  E: 1,
  D: 1,
  A: 1,
  a: 1
}));
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IllegalStateException = new $TypeData().i($c_jl_IllegalStateException, "java.lang.IllegalStateException", ({
  b2: 1,
  E: 1,
  D: 1,
  A: 1,
  a: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  ap: 1,
  E: 1,
  D: 1,
  A: 1,
  a: 1
}));
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$p = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$h_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = $p;
var $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream$DummyOutputStream, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", ({
  b6: 1,
  am: 1,
  ak: 1,
  an: 1,
  al: 1
}));
class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NegativeArraySizeException = new $TypeData().i($c_jl_NegativeArraySizeException, "java.lang.NegativeArraySizeException", ({
  b7: 1,
  E: 1,
  D: 1,
  A: 1,
  a: 1
}));
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  b8: 1,
  E: 1,
  D: 1,
  A: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ba)));
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  bb: 1,
  a7: 1,
  a: 1,
  Y: 1,
  S: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  bj: 1,
  E: 1,
  D: 1,
  A: 1,
  a: 1
}));
class $c_ju_ConcurrentModificationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_ConcurrentModificationException = new $TypeData().i($c_ju_ConcurrentModificationException, "java.util.ConcurrentModificationException", ({
  bo: 1,
  E: 1,
  D: 1,
  A: 1,
  a: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  bp: 1,
  E: 1,
  D: 1,
  A: 1,
  a: 1
}));
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.dr)) {
    $thiz.ds = (($thiz.cR === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.dr = true;
  }
  return $thiz.ds;
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.dr) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.ds);
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  var this$1 = $thiz.cR;
  return ("of class " + $objectClassName(this$1));
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($thiz.cR + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")");
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz));
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.ds = null;
    this.cR = null;
    this.dr = false;
    this.cR = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  d6() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  bE: 1,
  E: 1,
  D: 1,
  A: 1,
  a: 1
}));
/** @constructor */
function $c_s_Option() {
}
$p = $c_s_Option.prototype = new $h_O();
$p.constructor = $c_s_Option;
/** @constructor */
function $h_s_Option() {
}
$h_s_Option.prototype = $p;
$p.Y = (function() {
  return (this === $m_s_None$());
});
$p.R = (function() {
  return (this.Y() ? 0 : 1);
});
$p.j = (function() {
  return (this.Y() ? $m_sc_Iterator$().Z : new $c_sc_Iterator$$anon$20(this.ca()));
});
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.ck = 0;
  this.es = 0;
  this.er = null;
  this.er = outer;
  this.ck = 0;
  this.es = outer.br();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.y = (function() {
  return (this.ck < this.es);
});
$p.h = (function() {
  var result = this.er.bs(this.ck);
  this.ck = ((1 + this.ck) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  bG: 1,
  t: 1,
  u: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.cS = null;
  this.cT = null;
  this.cS = _1;
  this.cT = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.br = (function() {
  return 2;
});
$p.bs = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.k = (function() {
  return (((("(" + this.cS) + ",") + this.cT) + ")");
});
$p.bt = (function() {
  return "Tuple2";
});
$p.cd = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.F = (function() {
  return $m_s_util_hashing_MurmurHash3$().e3(this, (-889275714), false);
});
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  bJ: 1,
  bH: 1,
  a3: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.cU = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
$p = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$p.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $p;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().i($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  bV: 1,
  bU: 1,
  a1: 1,
  a: 1,
  a4: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.bp() + "("), ", ", ")");
}
function $is_sc_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.e)));
}
function $isArrayOf_sc_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.e)));
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$p = $c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $p;
$p.y = (function() {
  return false;
});
$p.hB = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.R = (function() {
  return 0;
});
$p.h = (function() {
  this.hB();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  bY: 1,
  t: 1,
  u: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$1) {
  this.cV = false;
  this.eu = null;
  this.eu = a$1;
  this.cV = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.y = (function() {
  return (!this.cV);
});
$p.h = (function() {
  if (this.cV) {
    return $m_sc_Iterator$().Z.h();
  } else {
    this.cV = true;
    return this.eu;
  }
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  bZ: 1,
  t: 1,
  u: 1,
  b: 1,
  c: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.a6 instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.a6;
      $thiz.a6 = c.a6;
      $thiz.b3 = c.b3;
      if ((c.ag !== null)) {
        if (($thiz.af === null)) {
          $thiz.af = c.af;
        }
        c.af.cm = $thiz.ag;
        $thiz.ag = c.ag;
      }
      continue;
    }
    return (void 0);
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.ag === null)) {
      $thiz.a6 = null;
      $thiz.af = null;
      return false;
    } else {
      $thiz.a6 = $thiz.ag.hp();
      if (($thiz.af === $thiz.ag)) {
        $thiz.af = $thiz.af.cm;
      }
      $thiz.ag = $thiz.ag.cm;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.b3) {
        return true;
      } else if ((($thiz.a6 !== null) && $thiz.a6.y())) {
        $thiz.b3 = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(current) {
  this.a6 = null;
  this.ag = null;
  this.af = null;
  this.b3 = false;
  this.a6 = current;
  this.ag = null;
  this.af = null;
  this.b3 = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.y = (function() {
  if (this.b3) {
    return true;
  } else if ((this.a6 !== null)) {
    if (this.a6.y()) {
      this.b3 = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.h = (function() {
  if (this.y()) {
    this.b3 = false;
    return this.a6.h();
  } else {
    return $m_sc_Iterator$().Z.h();
  }
});
$p.dX = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.ag === null)) {
    this.ag = c;
    this.af = c;
  } else {
    this.af.cm = c;
    this.af = c;
  }
  if ((this.a6 === null)) {
    this.a6 = $m_sc_Iterator$().Z;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aB)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  aB: 1,
  t: 1,
  u: 1,
  b: 1,
  c: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.hb(n);
  if (skipped.Y()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.aW();
}
function $f_sc_LinearSeqOps__foldLeft__O__F2__O($thiz, z, op) {
  var acc = z;
  var these = $thiz;
  while ((!these.Y())) {
    acc = op.c9(acc, these.aW());
    these = these.aZ();
  }
  return acc;
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.cn = null;
  this.cn = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.y = (function() {
  return (!this.cn.Y());
});
$p.h = (function() {
  var r = this.cn.aW();
  this.cn = this.cn.aZ();
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  c4: 1,
  t: 1,
  u: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sci_List$() {
}
$p = $c_sci_List$.prototype = new $h_O();
$p.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
}
$h_sci_List$.prototype = $p;
$p.aX = (function() {
  return new $c_scm_ListBuffer();
});
$p.bE = (function(source) {
  return $m_sci_Nil$().hN(source);
});
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  ci: 1,
  a9: 1,
  a4: 1,
  a1: 1,
  a: 1
}));
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$();
  }
  return $n_sci_List$;
}
function $ps_sci_Vector$__liftedTree1$1__I() {
  try {
    return $m_jl_Integer$().gg($m_jl_System$SystemProperties$().g4("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250"), 10);
  } catch (e) {
    if (false) {
      return 250;
    } else {
      throw e;
    }
  }
}
/** @constructor */
function $c_sci_Vector$() {
  this.gw = 0;
  this.eA = null;
  $n_sci_Vector$ = this;
  this.gw = $ps_sci_Vector$__liftedTree1$1__I();
  this.eA = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
}
$p = $c_sci_Vector$.prototype = new $h_O();
$p.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
}
$h_sci_Vector$.prototype = $p;
$p.n = (function(it) {
  if ((it instanceof $c_sci_Vector)) {
    return it;
  } else {
    var knownSize = it.R();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$();
    } else if (((knownSize > 0) && (knownSize <= 32))) {
      matchEnd5: {
        var $x_1;
        if ((it instanceof $c_sci_ArraySeq$ofRef)) {
          var x = it.hc().a2();
          if (((x !== null) && (x === $d_O.l()))) {
            var $x_1 = it.b5;
            break matchEnd5;
          }
        }
        if ($is_sci_Iterable(it)) {
          var a1 = new $ac_O(knownSize);
          it.ak(a1, 0, 2147483647);
          var $x_1 = a1;
          break matchEnd5;
        }
        var a1$2 = new $ac_O(knownSize);
        it.j().ak(a1$2, 0, 2147483647);
        var $x_1 = a1$2;
      }
      return new $c_sci_Vector1($x_1);
    } else {
      return new $c_sci_VectorBuilder().dT(it).aQ();
    }
  }
});
$p.aX = (function() {
  return new $c_sci_VectorBuilder();
});
$p.bE = (function(source) {
  return this.n(source);
});
var $d_sci_Vector$ = new $TypeData().i($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
  cl: 1,
  a9: 1,
  a4: 1,
  a1: 1,
  a: 1
}));
var $n_sci_Vector$;
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$();
  }
  return $n_sci_Vector$;
}
function $p_sci_VectorBuilder__leftAlignPrefix__V($thiz) {
  var a = null;
  var aParent = null;
  if (($thiz.D >= 6)) {
    a = $thiz.X;
    var i = (($thiz.A >>> 25) | 0);
    if ((i > 0)) {
      var src = a;
      var dest = a;
      var length = ((64 - i) | 0);
      src.t(i, dest, 0, length);
    }
    var newOffset = (($thiz.A % 33554432) | 0);
    $thiz.m = (($thiz.m - (($thiz.A - newOffset) | 0)) | 0);
    $thiz.A = newOffset;
    if (((($thiz.m >>> 25) | 0) === 0)) {
      $thiz.D = 5;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.D >= 5)) {
    if ((a === null)) {
      a = $thiz.L;
    }
    var i$2 = (31 & (($thiz.A >>> 20) | 0));
    if (($thiz.D === 5)) {
      if ((i$2 > 0)) {
        var src$1 = a;
        var dest$1 = a;
        var length$1 = ((32 - i$2) | 0);
        src$1.t(i$2, dest$1, 0, length$1);
      }
      $thiz.L = a;
      var newOffset$1 = (($thiz.A % 1048576) | 0);
      $thiz.m = (($thiz.m - (($thiz.A - newOffset$1) | 0)) | 0);
      $thiz.A = newOffset$1;
      if (((($thiz.m >>> 20) | 0) === 0)) {
        $thiz.D = 4;
      }
    } else {
      if ((i$2 > 0)) {
        a = $m_ju_Arrays$().w(a, i$2, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.D >= 4)) {
    if ((a === null)) {
      a = $thiz.G;
    }
    var i$3 = (31 & (($thiz.A >>> 15) | 0));
    if (($thiz.D === 4)) {
      if ((i$3 > 0)) {
        var src$2 = a;
        var dest$2 = a;
        var length$2 = ((32 - i$3) | 0);
        src$2.t(i$3, dest$2, 0, length$2);
      }
      $thiz.G = a;
      var newOffset$2 = (($thiz.A % 32768) | 0);
      $thiz.m = (($thiz.m - (($thiz.A - newOffset$2) | 0)) | 0);
      $thiz.A = newOffset$2;
      if (((($thiz.m >>> 15) | 0) === 0)) {
        $thiz.D = 3;
      }
    } else {
      if ((i$3 > 0)) {
        a = $m_ju_Arrays$().w(a, i$3, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.D >= 3)) {
    if ((a === null)) {
      a = $thiz.B;
    }
    var i$4 = (31 & (($thiz.A >>> 10) | 0));
    if (($thiz.D === 3)) {
      if ((i$4 > 0)) {
        var src$3 = a;
        var dest$3 = a;
        var length$3 = ((32 - i$4) | 0);
        src$3.t(i$4, dest$3, 0, length$3);
      }
      $thiz.B = a;
      var newOffset$3 = (($thiz.A % 1024) | 0);
      $thiz.m = (($thiz.m - (($thiz.A - newOffset$3) | 0)) | 0);
      $thiz.A = newOffset$3;
      if (((($thiz.m >>> 10) | 0) === 0)) {
        $thiz.D = 2;
      }
    } else {
      if ((i$4 > 0)) {
        a = $m_ju_Arrays$().w(a, i$4, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.D >= 2)) {
    if ((a === null)) {
      a = $thiz.u;
    }
    var i$5 = (31 & (($thiz.A >>> 5) | 0));
    if (($thiz.D === 2)) {
      if ((i$5 > 0)) {
        var src$4 = a;
        var dest$4 = a;
        var length$4 = ((32 - i$5) | 0);
        src$4.t(i$5, dest$4, 0, length$4);
      }
      $thiz.u = a;
      var newOffset$4 = (($thiz.A % 32) | 0);
      $thiz.m = (($thiz.m - (($thiz.A - newOffset$4) | 0)) | 0);
      $thiz.A = newOffset$4;
      if (((($thiz.m >>> 5) | 0) === 0)) {
        $thiz.D = 1;
      }
    } else {
      if ((i$5 > 0)) {
        a = $m_ju_Arrays$().w(a, i$5, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.D >= 1)) {
    if ((a === null)) {
      a = $thiz.I;
    }
    var i$6 = (31 & $thiz.A);
    if (($thiz.D === 1)) {
      if ((i$6 > 0)) {
        var src$5 = a;
        var dest$5 = a;
        var length$5 = ((32 - i$6) | 0);
        src$5.t(i$6, dest$5, 0, length$5);
      }
      $thiz.I = a;
      $thiz.C = (($thiz.C - $thiz.A) | 0);
      $thiz.A = 0;
    } else {
      if ((i$6 > 0)) {
        a = $m_ju_Arrays$().w(a, i$6, 32);
      }
      aParent.a[0] = a;
    }
  }
  $thiz.d1 = false;
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = data.a.length;
  if ((dl > 0)) {
    if (($thiz.C === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz);
    }
    var a = ((32 - $thiz.C) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.I;
    var destPos = $thiz.C;
    data.t(0, dest, destPos, copy1);
    $thiz.C = (($thiz.C + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.I;
      data.t(copy1, dest$1, 0, copy2);
      $thiz.C = (($thiz.C + copy2) | 0);
    }
  }
}
function $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, dim) {
  if ((slice.a.length === 0)) {
    return (void 0);
  }
  if (($thiz.C === 32)) {
    $p_sci_VectorBuilder__advance__V($thiz);
  }
  var sl = slice.a.length;
  switch (dim) {
    case 2: {
      var a = (31 & ((((1024 - $thiz.m) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.m >>> 5) | 0));
      var dest = $thiz.u;
      slice.t(0, dest, destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.u;
        slice.t(copy1, dest$1, 0, copy2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2 << 5));
      }
      break;
    }
    case 3: {
      if (((($thiz.m % 1024) | 0) !== 0)) {
        var f = ((e$2$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$2$2, 2);
        });
        var len = slice.a.length;
        var i = 0;
        if ((slice !== null)) {
          while ((i < len)) {
            var arg1 = slice.a[i];
            f(arg1);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i < len)) {
            var arg1$1 = slice.a[i];
            f(arg1$1);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i < len)) {
            var arg1$2 = slice.a[i];
            f(arg1$2);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i < len)) {
            var t = slice.a[i];
            var lo = t.e;
            var hi = t.f;
            f(new $c_RTLong(lo, hi));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i < len)) {
            var arg1$3 = slice.a[i];
            f(arg1$3);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i < len)) {
            var arg1$4 = slice.a[i];
            f($bC(arg1$4));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i < len)) {
            var arg1$5 = slice.a[i];
            f(arg1$5);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i < len)) {
            var arg1$6 = slice.a[i];
            f(arg1$6);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i < len)) {
            var arg1$7 = slice.a[i];
            f(arg1$7);
            i = ((1 + i) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$1 = (31 & ((((32768 - $thiz.m) | 0) >>> 10) | 0));
      var copy1$2 = ((a$1 < sl) ? a$1 : sl);
      var copy2$2 = ((sl - copy1$2) | 0);
      var destPos$2 = (31 & (($thiz.m >>> 10) | 0));
      var dest$2 = $thiz.B;
      slice.t(0, dest$2, destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.B;
        slice.t(copy1$2, dest$3, 0, copy2$2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$2 << 10));
      }
      break;
    }
    case 4: {
      if (((($thiz.m % 32768) | 0) !== 0)) {
        var f$1 = ((e$2$2$1) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$2$2$1, 3);
        });
        var len$1 = slice.a.length;
        var i$1 = 0;
        if ((slice !== null)) {
          while ((i$1 < len$1)) {
            var arg1$8 = slice.a[i$1];
            f$1(arg1$8);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$1 < len$1)) {
            var arg1$9 = slice.a[i$1];
            f$1(arg1$9);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$1 < len$1)) {
            var arg1$10 = slice.a[i$1];
            f$1(arg1$10);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$1 < len$1)) {
            var t$1 = slice.a[i$1];
            var lo$1 = t$1.e;
            var hi$1 = t$1.f;
            f$1(new $c_RTLong(lo$1, hi$1));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$1 < len$1)) {
            var arg1$11 = slice.a[i$1];
            f$1(arg1$11);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$1 < len$1)) {
            var arg1$12 = slice.a[i$1];
            f$1($bC(arg1$12));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$1 < len$1)) {
            var arg1$13 = slice.a[i$1];
            f$1(arg1$13);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$1 < len$1)) {
            var arg1$14 = slice.a[i$1];
            f$1(arg1$14);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$1 < len$1)) {
            var arg1$15 = slice.a[i$1];
            f$1(arg1$15);
            i$1 = ((1 + i$1) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$2 = (31 & ((((1048576 - $thiz.m) | 0) >>> 15) | 0));
      var copy1$3 = ((a$2 < sl) ? a$2 : sl);
      var copy2$3 = ((sl - copy1$3) | 0);
      var destPos$3 = (31 & (($thiz.m >>> 15) | 0));
      var dest$4 = $thiz.G;
      slice.t(0, dest$4, destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.G;
        slice.t(copy1$3, dest$5, 0, copy2$3);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$3 << 15));
      }
      break;
    }
    case 5: {
      if (((($thiz.m % 1048576) | 0) !== 0)) {
        var f$2 = ((e$2$2$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$2$2$2, 4);
        });
        var len$2 = slice.a.length;
        var i$2 = 0;
        if ((slice !== null)) {
          while ((i$2 < len$2)) {
            var arg1$16 = slice.a[i$2];
            f$2(arg1$16);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$2 < len$2)) {
            var arg1$17 = slice.a[i$2];
            f$2(arg1$17);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$2 < len$2)) {
            var arg1$18 = slice.a[i$2];
            f$2(arg1$18);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$2 < len$2)) {
            var t$2 = slice.a[i$2];
            var lo$2 = t$2.e;
            var hi$2 = t$2.f;
            f$2(new $c_RTLong(lo$2, hi$2));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$2 < len$2)) {
            var arg1$19 = slice.a[i$2];
            f$2(arg1$19);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$2 < len$2)) {
            var arg1$20 = slice.a[i$2];
            f$2($bC(arg1$20));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$2 < len$2)) {
            var arg1$21 = slice.a[i$2];
            f$2(arg1$21);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$2 < len$2)) {
            var arg1$22 = slice.a[i$2];
            f$2(arg1$22);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$2 < len$2)) {
            var arg1$23 = slice.a[i$2];
            f$2(arg1$23);
            i$2 = ((1 + i$2) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$3 = (31 & ((((33554432 - $thiz.m) | 0) >>> 20) | 0));
      var copy1$4 = ((a$3 < sl) ? a$3 : sl);
      var copy2$4 = ((sl - copy1$4) | 0);
      var destPos$4 = (31 & (($thiz.m >>> 20) | 0));
      var dest$6 = $thiz.L;
      slice.t(0, dest$6, destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.L;
        slice.t(copy1$4, dest$7, 0, copy2$4);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$4 << 20));
      }
      break;
    }
    case 6: {
      if (((($thiz.m % 33554432) | 0) !== 0)) {
        var f$3 = ((e$2$2$3) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$2$2$3, 5);
        });
        var len$3 = slice.a.length;
        var i$3 = 0;
        if ((slice !== null)) {
          while ((i$3 < len$3)) {
            var arg1$24 = slice.a[i$3];
            f$3(arg1$24);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$3 < len$3)) {
            var arg1$25 = slice.a[i$3];
            f$3(arg1$25);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$3 < len$3)) {
            var arg1$26 = slice.a[i$3];
            f$3(arg1$26);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$3 < len$3)) {
            var t$3 = slice.a[i$3];
            var lo$3 = t$3.e;
            var hi$3 = t$3.f;
            f$3(new $c_RTLong(lo$3, hi$3));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$3 < len$3)) {
            var arg1$27 = slice.a[i$3];
            f$3(arg1$27);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$3 < len$3)) {
            var arg1$28 = slice.a[i$3];
            f$3($bC(arg1$28));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$3 < len$3)) {
            var arg1$29 = slice.a[i$3];
            f$3(arg1$29);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$3 < len$3)) {
            var arg1$30 = slice.a[i$3];
            f$3(arg1$30);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$3 < len$3)) {
            var arg1$31 = slice.a[i$3];
            f$3(arg1$31);
            i$3 = ((1 + i$3) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var destPos$5 = (($thiz.m >>> 25) | 0);
      if ((((destPos$5 + sl) | 0) > 64)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "exceeding 2^31 elements");
      }
      var dest$8 = $thiz.X;
      slice.t(0, dest$8, destPos$5, sl);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (sl << 25));
      break;
    }
    default: {
      throw new $c_s_MatchError(dim);
    }
  }
}
function $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder($thiz, xs) {
  var sliceCount = xs.b1();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = xs.b0(sliceIdx);
    var idx = sliceIdx;
    var c = ((sliceCount / 2) | 0);
    var a = ((idx - c) | 0);
    var x1 = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
    if ((x1 === 1)) {
      $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice);
    } else if ((($thiz.C === 32) || ($thiz.C === 0))) {
      $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x1);
    } else {
      $m_sci_VectorStatics$().fZ((((-2) + x1) | 0), slice, new $c_sjsr_AnonFunction1(((data$2$2) => {
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data$2$2);
      })));
    }
    sliceIdx = ((1 + sliceIdx) | 0);
  }
  return $thiz;
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.m) | 0);
  var xor = (idx ^ $thiz.m);
  $thiz.m = idx;
  $thiz.C = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.m + n) | 0);
    var xor = (idx ^ $thiz.m);
    $thiz.m = idx;
    $thiz.C = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.I) + ", a2=") + $thiz.u) + ", a3=") + $thiz.B) + ", a4=") + $thiz.G) + ", a5=") + $thiz.L) + ", a6=") + $thiz.X) + ", depth=") + $thiz.D));
  } else if ((xor < 1024)) {
    if (($thiz.D <= 1)) {
      $thiz.u = new ($d_O.r().r().C)(32);
      $thiz.u.a[0] = $thiz.I;
      $thiz.D = 2;
    }
    $thiz.I = new $ac_O(32);
    $thiz.u.a[(31 & ((idx >>> 5) | 0))] = $thiz.I;
  } else if ((xor < 32768)) {
    if (($thiz.D <= 2)) {
      $thiz.B = new ($d_O.r().r().r().C)(32);
      $thiz.B.a[0] = $thiz.u;
      $thiz.D = 3;
    }
    $thiz.I = new $ac_O(32);
    $thiz.u = new ($d_O.r().r().C)(32);
    $thiz.u.a[(31 & ((idx >>> 5) | 0))] = $thiz.I;
    $thiz.B.a[(31 & ((idx >>> 10) | 0))] = $thiz.u;
  } else if ((xor < 1048576)) {
    if (($thiz.D <= 3)) {
      $thiz.G = new ($d_O.r().r().r().r().C)(32);
      $thiz.G.a[0] = $thiz.B;
      $thiz.D = 4;
    }
    $thiz.I = new $ac_O(32);
    $thiz.u = new ($d_O.r().r().C)(32);
    $thiz.B = new ($d_O.r().r().r().C)(32);
    $thiz.u.a[(31 & ((idx >>> 5) | 0))] = $thiz.I;
    $thiz.B.a[(31 & ((idx >>> 10) | 0))] = $thiz.u;
    $thiz.G.a[(31 & ((idx >>> 15) | 0))] = $thiz.B;
  } else if ((xor < 33554432)) {
    if (($thiz.D <= 4)) {
      $thiz.L = new ($d_O.r().r().r().r().r().C)(32);
      $thiz.L.a[0] = $thiz.G;
      $thiz.D = 5;
    }
    $thiz.I = new $ac_O(32);
    $thiz.u = new ($d_O.r().r().C)(32);
    $thiz.B = new ($d_O.r().r().r().C)(32);
    $thiz.G = new ($d_O.r().r().r().r().C)(32);
    $thiz.u.a[(31 & ((idx >>> 5) | 0))] = $thiz.I;
    $thiz.B.a[(31 & ((idx >>> 10) | 0))] = $thiz.u;
    $thiz.G.a[(31 & ((idx >>> 15) | 0))] = $thiz.B;
    $thiz.L.a[(31 & ((idx >>> 20) | 0))] = $thiz.G;
  } else {
    if (($thiz.D <= 5)) {
      $thiz.X = new ($d_O.r().r().r().r().r().r().C)(64);
      $thiz.X.a[0] = $thiz.L;
      $thiz.D = 6;
    }
    $thiz.I = new $ac_O(32);
    $thiz.u = new ($d_O.r().r().C)(32);
    $thiz.B = new ($d_O.r().r().r().C)(32);
    $thiz.G = new ($d_O.r().r().r().r().C)(32);
    $thiz.L = new ($d_O.r().r().r().r().r().C)(32);
    $thiz.u.a[(31 & ((idx >>> 5) | 0))] = $thiz.I;
    $thiz.B.a[(31 & ((idx >>> 10) | 0))] = $thiz.u;
    $thiz.G.a[(31 & ((idx >>> 15) | 0))] = $thiz.B;
    $thiz.L.a[(31 & ((idx >>> 20) | 0))] = $thiz.G;
    $thiz.X.a[((idx >>> 25) | 0)] = $thiz.L;
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.X = null;
  this.L = null;
  this.G = null;
  this.B = null;
  this.u = null;
  this.I = null;
  this.C = 0;
  this.m = 0;
  this.A = 0;
  this.d1 = false;
  this.D = 0;
  this.I = new $ac_O(32);
  this.C = 0;
  this.m = 0;
  this.A = 0;
  this.d1 = false;
  this.D = 1;
}
$p = $c_sci_VectorBuilder.prototype = new $h_O();
$p.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
}
$h_sci_VectorBuilder.prototype = $p;
$p.am = (function(size) {
});
$p.hr = (function(v) {
  var x1 = v.b1();
  switch (x1) {
    case 0: {
      break;
    }
    case 1: {
      this.D = 1;
      var i = v.i.a.length;
      this.C = (31 & i);
      this.m = ((i - this.C) | 0);
      var a = v.i;
      this.I = ((a.a.length === 32) ? a : $m_ju_Arrays$().w(a, 0, 32));
      break;
    }
    case 3: {
      var d2 = v.au;
      var a$1 = v.r;
      this.I = ((a$1.a.length === 32) ? a$1 : $m_ju_Arrays$().w(a$1, 0, 32));
      this.D = 2;
      this.A = ((32 - v.bx) | 0);
      var i$1 = ((v.z + this.A) | 0);
      this.C = (31 & i$1);
      this.m = ((i$1 - this.C) | 0);
      this.u = new ($d_O.r().r().C)(32);
      this.u.a[0] = v.i;
      var dest = this.u;
      var length = d2.a.length;
      d2.t(0, dest, 1, length);
      this.u.a[((1 + d2.a.length) | 0)] = this.I;
      break;
    }
    case 5: {
      var d3 = v.av;
      var s2 = v.aw;
      var a$2 = v.r;
      this.I = ((a$2.a.length === 32) ? a$2 : $m_ju_Arrays$().w(a$2, 0, 32));
      this.D = 3;
      this.A = ((1024 - v.bS) | 0);
      var i$2 = ((v.z + this.A) | 0);
      this.C = (31 & i$2);
      this.m = ((i$2 - this.C) | 0);
      this.B = new ($d_O.r().r().r().C)(32);
      this.B.a[0] = $m_sci_VectorStatics$().aO(v.i, v.b9);
      var dest$1 = this.B;
      var length$1 = d3.a.length;
      d3.t(0, dest$1, 1, length$1);
      this.u = $m_ju_Arrays$().N(s2, 32);
      this.B.a[((1 + d3.a.length) | 0)] = this.u;
      this.u.a[s2.a.length] = this.I;
      break;
    }
    case 7: {
      var d4 = v.ax;
      var s3 = v.az;
      var s2$2 = v.ay;
      var a$3 = v.r;
      this.I = ((a$3.a.length === 32) ? a$3 : $m_ju_Arrays$().w(a$3, 0, 32));
      this.D = 4;
      this.A = ((32768 - v.bT) | 0);
      var i$3 = ((v.z + this.A) | 0);
      this.C = (31 & i$3);
      this.m = ((i$3 - this.C) | 0);
      this.G = new ($d_O.r().r().r().r().C)(32);
      this.G.a[0] = $m_sci_VectorStatics$().aO($m_sci_VectorStatics$().aO(v.i, v.bb), v.bc);
      var dest$2 = this.G;
      var length$2 = d4.a.length;
      d4.t(0, dest$2, 1, length$2);
      this.B = $m_ju_Arrays$().N(s3, 32);
      this.u = $m_ju_Arrays$().N(s2$2, 32);
      this.G.a[((1 + d4.a.length) | 0)] = this.B;
      this.B.a[s3.a.length] = this.u;
      this.u.a[s2$2.a.length] = this.I;
      break;
    }
    case 9: {
      var d5 = v.aA;
      var s4 = v.aD;
      var s3$2 = v.aC;
      var s2$3 = v.aB;
      var a$4 = v.r;
      this.I = ((a$4.a.length === 32) ? a$4 : $m_ju_Arrays$().w(a$4, 0, 32));
      this.D = 5;
      this.A = ((1048576 - v.bU) | 0);
      var i$4 = ((v.z + this.A) | 0);
      this.C = (31 & i$4);
      this.m = ((i$4 - this.C) | 0);
      this.L = new ($d_O.r().r().r().r().r().C)(32);
      this.L.a[0] = $m_sci_VectorStatics$().aO($m_sci_VectorStatics$().aO($m_sci_VectorStatics$().aO(v.i, v.be), v.bf), v.bg);
      var dest$3 = this.L;
      var length$3 = d5.a.length;
      d5.t(0, dest$3, 1, length$3);
      this.G = $m_ju_Arrays$().N(s4, 32);
      this.B = $m_ju_Arrays$().N(s3$2, 32);
      this.u = $m_ju_Arrays$().N(s2$3, 32);
      this.L.a[((1 + d5.a.length) | 0)] = this.G;
      this.G.a[s4.a.length] = this.B;
      this.B.a[s3$2.a.length] = this.u;
      this.u.a[s2$3.a.length] = this.I;
      break;
    }
    case 11: {
      var d6 = v.aE;
      var s5 = v.aI;
      var s4$2 = v.aH;
      var s3$3 = v.aG;
      var s2$4 = v.aF;
      var a$5 = v.r;
      this.I = ((a$5.a.length === 32) ? a$5 : $m_ju_Arrays$().w(a$5, 0, 32));
      this.D = 6;
      this.A = ((33554432 - v.bV) | 0);
      var i$5 = ((v.z + this.A) | 0);
      this.C = (31 & i$5);
      this.m = ((i$5 - this.C) | 0);
      this.X = new ($d_O.r().r().r().r().r().r().C)(64);
      this.X.a[0] = $m_sci_VectorStatics$().aO($m_sci_VectorStatics$().aO($m_sci_VectorStatics$().aO($m_sci_VectorStatics$().aO(v.i, v.bi), v.bj), v.bk), v.bl);
      var dest$4 = this.X;
      var length$4 = d6.a.length;
      d6.t(0, dest$4, 1, length$4);
      this.L = $m_ju_Arrays$().N(s5, 32);
      this.G = $m_ju_Arrays$().N(s4$2, 32);
      this.B = $m_ju_Arrays$().N(s3$3, 32);
      this.u = $m_ju_Arrays$().N(s2$4, 32);
      this.X.a[((1 + d6.a.length) | 0)] = this.L;
      this.L.a[s5.a.length] = this.G;
      this.G.a[s4$2.a.length] = this.B;
      this.B.a[s3$3.a.length] = this.u;
      this.u.a[s2$4.a.length] = this.I;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  if (((this.C === 0) && (this.m > 0))) {
    this.C = 32;
    this.m = (((-32) + this.m) | 0);
  }
  return this;
});
$p.dU = (function(elem) {
  if ((this.C === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  this.I.a[this.C] = elem;
  this.C = ((1 + this.C) | 0);
  return this;
});
$p.dT = (function(xs) {
  return ((xs instanceof $c_sci_Vector) ? ((((this.C === 0) && (this.m === 0)) && (!this.d1)) ? this.hr(xs) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, xs)) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.aQ = (function() {
  if (this.d1) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this);
  }
  var len = ((this.C + this.m) | 0);
  var realLen = ((len - this.A) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$();
  } else if ((len < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("Vector cannot have negative size " + len));
  } else if ((len <= 32)) {
    var a = this.I;
    return new $c_sci_Vector1(((a.a.length === realLen) ? a : $m_ju_Arrays$().N(a, realLen)));
  } else if ((len <= 1024)) {
    var i1 = (31 & (((-1) + len) | 0));
    var i2 = (((((-1) + len) | 0) >>> 5) | 0);
    var data = $m_ju_Arrays$().w(this.u, 1, i2);
    var prefix1 = this.u.a[0];
    var a$1 = this.u.a[i2];
    var len$1 = ((1 + i1) | 0);
    var suffix1 = ((a$1.a.length === len$1) ? a$1 : $m_ju_Arrays$().N(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.A) | 0), data, suffix1, realLen);
  } else if ((len <= 32768)) {
    var i1$2 = (31 & (((-1) + len) | 0));
    var i2$2 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3 = (((((-1) + len) | 0) >>> 10) | 0);
    var data$2 = $m_ju_Arrays$().w(this.B, 1, i3);
    var a$2 = this.B.a[0];
    var prefix2 = $m_ju_Arrays$().w(a$2, 1, a$2.a.length);
    var prefix1$2 = this.B.a[0].a[0];
    var suffix2 = $m_ju_Arrays$().N(this.B.a[i3], i2$2);
    var a$3 = this.B.a[i3].a[i2$2];
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = ((a$3.a.length === len$2) ? a$3 : $m_ju_Arrays$().N(a$3, len$2));
    var len1 = prefix1$2.a.length;
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, ((len1 + (prefix2.a.length << 5)) | 0), data$2, suffix2, suffix1$2, realLen);
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & (((-1) + len) | 0));
    var i2$3 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$2 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4 = (((((-1) + len) | 0) >>> 15) | 0);
    var data$3 = $m_ju_Arrays$().w(this.G, 1, i4);
    var a$4 = this.G.a[0];
    var prefix3 = $m_ju_Arrays$().w(a$4, 1, a$4.a.length);
    var a$5 = this.G.a[0].a[0];
    var prefix2$2 = $m_ju_Arrays$().w(a$5, 1, a$5.a.length);
    var prefix1$3 = this.G.a[0].a[0].a[0];
    var suffix3 = $m_ju_Arrays$().N(this.G.a[i4], i3$2);
    var suffix2$2 = $m_ju_Arrays$().N(this.G.a[i4].a[i3$2], i2$3);
    var a$6 = this.G.a[i4].a[i3$2].a[i2$3];
    var len$3 = ((1 + i1$3) | 0);
    var suffix1$3 = ((a$6.a.length === len$3) ? a$6 : $m_ju_Arrays$().N(a$6, len$3));
    var len1$2 = prefix1$3.a.length;
    var len12$2 = ((len1$2 + (prefix2$2.a.length << 5)) | 0);
    return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, ((len12$2 + (prefix3.a.length << 10)) | 0), data$3, suffix3, suffix2$2, suffix1$3, realLen);
  } else if ((len <= 33554432)) {
    var i1$4 = (31 & (((-1) + len) | 0));
    var i2$4 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$3 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$2 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5 = (((((-1) + len) | 0) >>> 20) | 0);
    var data$4 = $m_ju_Arrays$().w(this.L, 1, i5);
    var a$7 = this.L.a[0];
    var prefix4 = $m_ju_Arrays$().w(a$7, 1, a$7.a.length);
    var a$8 = this.L.a[0].a[0];
    var prefix3$2 = $m_ju_Arrays$().w(a$8, 1, a$8.a.length);
    var a$9 = this.L.a[0].a[0].a[0];
    var prefix2$3 = $m_ju_Arrays$().w(a$9, 1, a$9.a.length);
    var prefix1$4 = this.L.a[0].a[0].a[0].a[0];
    var suffix4 = $m_ju_Arrays$().N(this.L.a[i5], i4$2);
    var suffix3$2 = $m_ju_Arrays$().N(this.L.a[i5].a[i4$2], i3$3);
    var suffix2$3 = $m_ju_Arrays$().N(this.L.a[i5].a[i4$2].a[i3$3], i2$4);
    var a$10 = this.L.a[i5].a[i4$2].a[i3$3].a[i2$4];
    var len$4 = ((1 + i1$4) | 0);
    var suffix1$4 = ((a$10.a.length === len$4) ? a$10 : $m_ju_Arrays$().N(a$10, len$4));
    var len1$3 = prefix1$4.a.length;
    var len12$3 = ((len1$3 + (prefix2$3.a.length << 5)) | 0);
    var len123$2 = ((len12$3 + (prefix3$2.a.length << 10)) | 0);
    return new $c_sci_Vector5(prefix1$4, len1$3, prefix2$3, len12$3, prefix3$2, len123$2, prefix4, ((len123$2 + (prefix4.a.length << 15)) | 0), data$4, suffix4, suffix3$2, suffix2$3, suffix1$4, realLen);
  } else {
    var i1$5 = (31 & (((-1) + len) | 0));
    var i2$5 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
    var i3$4 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
    var i4$3 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
    var i5$2 = (31 & (((((-1) + len) | 0) >>> 20) | 0));
    var i6 = (((((-1) + len) | 0) >>> 25) | 0);
    var data$5 = $m_ju_Arrays$().w(this.X, 1, i6);
    var a$11 = this.X.a[0];
    var prefix5 = $m_ju_Arrays$().w(a$11, 1, a$11.a.length);
    var a$12 = this.X.a[0].a[0];
    var prefix4$2 = $m_ju_Arrays$().w(a$12, 1, a$12.a.length);
    var a$13 = this.X.a[0].a[0].a[0];
    var prefix3$3 = $m_ju_Arrays$().w(a$13, 1, a$13.a.length);
    var a$14 = this.X.a[0].a[0].a[0].a[0];
    var prefix2$4 = $m_ju_Arrays$().w(a$14, 1, a$14.a.length);
    var prefix1$5 = this.X.a[0].a[0].a[0].a[0].a[0];
    var suffix5 = $m_ju_Arrays$().N(this.X.a[i6], i5$2);
    var suffix4$2 = $m_ju_Arrays$().N(this.X.a[i6].a[i5$2], i4$3);
    var suffix3$3 = $m_ju_Arrays$().N(this.X.a[i6].a[i5$2].a[i4$3], i3$4);
    var suffix2$4 = $m_ju_Arrays$().N(this.X.a[i6].a[i5$2].a[i4$3].a[i3$4], i2$5);
    var a$15 = this.X.a[i6].a[i5$2].a[i4$3].a[i3$4].a[i2$5];
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = ((a$15.a.length === len$5) ? a$15 : $m_ju_Arrays$().N(a$15, len$5));
    var len1$4 = prefix1$5.a.length;
    var len12$4 = ((len1$4 + (prefix2$4.a.length << 5)) | 0);
    var len123$3 = ((len12$4 + (prefix3$3.a.length << 10)) | 0);
    var len1234$2 = ((len123$3 + (prefix4$2.a.length << 15)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, ((len1234$2 + (prefix5.a.length << 20)) | 0), data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen);
  }
});
$p.k = (function() {
  return (((((((("VectorBuilder(len1=" + this.C) + ", lenRest=") + this.m) + ", offset=") + this.A) + ", depth=") + this.D) + ")");
});
$p.aP = (function() {
  return this.aQ();
});
$p.ap = (function(elems) {
  return this.dT(elems);
});
$p.aj = (function(elem) {
  return this.dU(elem);
});
var $d_sci_VectorBuilder = new $TypeData().i($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
  ct: 1,
  aa: 1,
  Z: 1,
  X: 1,
  W: 1
}));
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.eC = null;
  $n_scm_ArrayBuffer$ = this;
  this.eC = new $ac_O(0);
}
$p = $c_scm_ArrayBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $p;
$p.hj = (function(coll) {
  var k = coll.R();
  if ((k >= 0)) {
    var array = this.gh(this.eC, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.ak(array, 0, 2147483647) : coll.j().ak(array, 0, 2147483647));
    if ((actual !== k)) {
      throw new $c_jl_IllegalStateException(((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).fI(coll);
  }
});
$p.aX = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.hT = (function(arrayLen, targetLen) {
  if ((targetLen < 0)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), ((((("Overflow while resizing array of array-backed collection. Requested length: " + targetLen) + "; current length: ") + arrayLen) + "; increase: ") + ((targetLen - arrayLen) | 0)));
  } else if ((targetLen <= arrayLen)) {
    return (-1);
  } else if ((targetLen > 2147483639)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), ((("Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: " + targetLen) + "; current length: ") + arrayLen));
  } else if ((arrayLen > 1073741819)) {
    return 2147483639;
  } else {
    var x = (arrayLen << 1);
    var y = ((x > 16) ? x : 16);
    return ((targetLen > y) ? targetLen : y);
  }
});
$p.gh = (function(array, curSize, targetSize) {
  var newLen = this.hT(array.a.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.t(0, res, 0, curSize);
    return res;
  }
});
$p.bE = (function(source) {
  return this.hj(source);
});
var $d_scm_ArrayBuffer$ = new $TypeData().i($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  cw: 1,
  a9: 1,
  a4: 1,
  a1: 1,
  a: 1
}));
var $n_scm_ArrayBuffer$;
function $m_scm_ArrayBuffer$() {
  if ((!$n_scm_ArrayBuffer$)) {
    $n_scm_ArrayBuffer$ = new $c_scm_ArrayBuffer$();
  }
  return $n_scm_ArrayBuffer$;
}
/** @constructor */
function $c_scm_ArrayBuffer$$anon$1() {
  this.c7 = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, ($m_scm_ArrayBuffer$(), $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())));
}
$p = $c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
}
$h_scm_ArrayBuffer$$anon$1.prototype = $p;
$p.am = (function(size) {
  this.c7.am(size);
});
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().i($c_scm_ArrayBuffer$$anon$1, "scala.collection.mutable.ArrayBuffer$$anon$1", ({
  cx: 1,
  aM: 1,
  Z: 1,
  X: 1,
  W: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.cW = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$p = $c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $p;
var $d_scm_Buffer$ = new $TypeData().i($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  cM: 1,
  c2: 1,
  a4: 1,
  a1: 1,
  a: 1
}));
var $n_scm_Buffer$;
function $m_scm_Buffer$() {
  if ((!$n_scm_Buffer$)) {
    $n_scm_Buffer$ = new $c_scm_Buffer$();
  }
  return $n_scm_Buffer$;
}
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.ct = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.ct = null;
}
$p = $c_scm_ImmutableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $p;
$p.am = (function(size) {
});
$p.ap = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.aP = (function() {
  return this.ct;
});
/** @constructor */
function $c_scm_ListBuffer$() {
}
$p = $c_scm_ListBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ListBuffer$;
/** @constructor */
function $h_scm_ListBuffer$() {
}
$h_scm_ListBuffer$.prototype = $p;
$p.aX = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer());
});
$p.bE = (function(source) {
  return new $c_scm_ListBuffer().e5(source);
});
var $d_scm_ListBuffer$ = new $TypeData().i($c_scm_ListBuffer$, "scala.collection.mutable.ListBuffer$", ({
  cQ: 1,
  a9: 1,
  a4: 1,
  a1: 1,
  a: 1
}));
var $n_scm_ListBuffer$;
function $m_scm_ListBuffer$() {
  if ((!$n_scm_ListBuffer$)) {
    $n_scm_ListBuffer$ = new $c_scm_ListBuffer$();
  }
  return $n_scm_ListBuffer$;
}
/** @constructor */
function $c_scm_MutationTracker$CheckedIterator(underlying, mutationCount) {
  this.dN = null;
  this.eL = null;
  this.eK = 0;
  this.dN = underlying;
  this.eL = mutationCount;
  this.eK = (mutationCount.cB() | 0);
}
$p = $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $p;
$p.y = (function() {
  $m_scm_MutationTracker$().fY(this.eK, (this.eL.cB() | 0), "mutation occurred during iteration");
  return this.dN.y();
});
$p.h = (function() {
  return this.dN.h();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().i($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  cS: 1,
  t: 1,
  u: 1,
  b: 1,
  c: 1
}));
function $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz) {
  return (clazz.P.Z ? (("Array[" + $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz.P.Q())) + "]") : clazz.P.N);
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$2) {
  this.cv = 0;
  this.eM = 0;
  this.eN = null;
  this.eN = x$2;
  this.cv = 0;
  this.eM = x$2.br();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.y = (function() {
  return (this.cv < this.eM);
});
$p.h = (function() {
  var result = this.eN.bs(this.cv);
  this.cv = ((1 + this.cv) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  dy: 1,
  t: 1,
  u: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray$() {
}
$p = $c_sjs_js_WrappedArray$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedArray$;
/** @constructor */
function $h_sjs_js_WrappedArray$() {
}
$h_sjs_js_WrappedArray$.prototype = $p;
$p.aX = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$p.hk = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).aP();
});
$p.bE = (function(source) {
  return this.hk(source);
});
var $d_sjs_js_WrappedArray$ = new $TypeData().i($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  dC: 1,
  a9: 1,
  a4: 1,
  a1: 1,
  a: 1
}));
var $n_sjs_js_WrappedArray$;
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$();
  }
  return $n_sjs_js_WrappedArray$;
}
function $ct_Lsentences_Token__T__($thiz, name) {
  $thiz.cw = name;
  return $thiz;
}
/** @constructor */
function $c_Lsentences_Token() {
  this.dR = 0;
  this.dS = false;
  this.cw = null;
}
$p = $c_Lsentences_Token.prototype = new $h_O();
$p.constructor = $c_Lsentences_Token;
/** @constructor */
function $h_Lsentences_Token() {
}
$h_Lsentences_Token.prototype = $p;
$p.T = (function() {
  if ((!this.dS)) {
    this.dR = $f_Lsentences_Symbol__totalWeight__I(this);
    this.dS = true;
  }
  return this.dR;
});
$p.k = (function() {
  return this.cw;
});
$p.cd = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.F = (function() {
  return $m_s_util_hashing_MurmurHash3$().e3(this, (-889275714), false);
});
$p.br = (function() {
  return 1;
});
$p.bt = (function() {
  return "Token";
});
$p.bs = (function(n) {
  if ((n === 0)) {
    return this.cw;
  }
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
$p.S = (function() {
  return this.cw;
});
$p.O = (function() {
  $m_sci_Vector$();
  return $m_sci_Vector0$();
});
var $d_Lsentences_Token = new $TypeData().i($c_Lsentences_Token, "sentences.Token", ({
  aP: 1,
  r: 1,
  d: 1,
  a3: 1,
  a: 1
}));
function $f_jl_Double__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().e1($thiz);
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ao)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  ao: 1,
  a7: 1,
  a: 1,
  Y: 1,
  S: 1,
  a8: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  return $m_jl_FloatingPointBits$().e1(value);
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Float = new $TypeData().i(0, "java.lang.Float", ({
  b0: 1,
  a7: 1,
  a: 1,
  Y: 1,
  S: 1,
  a8: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  b3: 1,
  a7: 1,
  a: 1,
  Y: 1,
  S: 1,
  a8: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__hashCode__I($thiz) {
  return ($thiz.e ^ $thiz.f);
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().ge($thiz.e, $thiz.f);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aq)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  aq: 1,
  a7: 1,
  a: 1,
  Y: 1,
  S: 1,
  a8: 1
}), ((x) => (x instanceof $c_RTLong)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  b9: 1,
  af: 1,
  E: 1,
  D: 1,
  A: 1,
  a: 1
}));
function $f_T__codePointAt__I__I($thiz, index) {
  return ($thiz.codePointAt(index) | 0);
}
function $f_T__hashCode__I($thiz) {
  var res = 0;
  var mul = 1;
  var i = (((-1) + $thiz.length) | 0);
  while ((i >= 0)) {
    res = ((res + Math.imul($thiz.charCodeAt(i), mul)) | 0);
    mul = Math.imul(31, mul);
    i = (((-1) + i) | 0);
  }
  return res;
}
function $f_T__repeat__I__T($thiz, count) {
  if ((count < 0)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  } else {
    return $thiz.repeat(count);
  }
}
function $f_T__replaceAll__T__T__T($thiz, regex, replacement) {
  return new $c_ju_regex_Matcher($m_ju_regex_PatternCompiler$().h7(regex, 0), $thiz).hQ(replacement);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  bc: 1,
  a: 1,
  Y: 1,
  ab: 1,
  S: 1,
  a8: 1
}), ((x) => ((typeof x) === "string")));
function $ct_jl_StringIndexOutOfBoundsException__I__($thiz, index) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, ("String index out of range: " + index), null, true, true);
  return $thiz;
}
function $ct_jl_StringIndexOutOfBoundsException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
var $d_jl_StringIndexOutOfBoundsException = new $TypeData().i($c_jl_StringIndexOutOfBoundsException, "java.lang.StringIndexOutOfBoundsException", ({
  bg: 1,
  ap: 1,
  E: 1,
  D: 1,
  A: 1,
  a: 1
}));
class $c_ju_regex_PatternSyntaxException extends $c_jl_IllegalArgumentException {
  constructor(desc, regex, index) {
    super();
    this.en = null;
    this.ep = null;
    this.eo = 0;
    this.en = desc;
    this.ep = regex;
    this.eo = index;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  d6() {
    var idx = this.eo;
    var re = this.ep;
    var indexHint = ((idx < 0) ? "" : (" near index " + idx));
    var base = (((this.en + indexHint) + "\n") + re);
    return ((((idx >= 0) && (re !== null)) && (idx < re.length)) ? (((base + "\n") + $f_T__repeat__I__T(" ", idx)) + "^") : base);
  }
}
var $d_ju_regex_PatternSyntaxException = new $TypeData().i($c_ju_regex_PatternSyntaxException, "java.util.regex.PatternSyntaxException", ({
  bx: 1,
  af: 1,
  E: 1,
  D: 1,
  A: 1,
  a: 1
}));
/** @constructor */
function $c_s_None$() {
}
$p = $c_s_None$.prototype = new $h_s_Option();
$p.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
}
$h_s_None$.prototype = $p;
$p.hl = (function() {
  throw new $c_ju_NoSuchElementException("None.get");
});
$p.bt = (function() {
  return "None";
});
$p.br = (function() {
  return 0;
});
$p.bs = (function(x$1) {
  return $m_sr_Statics$().d7(x$1);
});
$p.cd = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.F = (function() {
  return 2433880;
});
$p.k = (function() {
  return "None";
});
$p.ca = (function() {
  this.hl();
});
var $d_s_None$ = new $TypeData().i($c_s_None$, "scala.None$", ({
  bF: 1,
  at: 1,
  b: 1,
  a3: 1,
  d: 1,
  a: 1
}));
var $n_s_None$;
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$();
  }
  return $n_s_None$;
}
/** @constructor */
function $c_s_Some(value) {
  this.dt = null;
  this.dt = value;
}
$p = $c_s_Some.prototype = new $h_s_Option();
$p.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $p;
$p.ca = (function() {
  return this.dt;
});
$p.bt = (function() {
  return "Some";
});
$p.br = (function() {
  return 1;
});
$p.bs = (function(x$1) {
  return ((x$1 === 0) ? this.dt : $m_sr_Statics$().d7(x$1));
});
$p.cd = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.F = (function() {
  return $m_s_util_hashing_MurmurHash3$().e3(this, (-889275714), false);
});
$p.k = (function() {
  return $m_sr_ScalaRunTime$().gO(this);
});
var $d_s_Some = new $TypeData().i($c_s_Some, "scala.Some", ({
  bI: 1,
  at: 1,
  b: 1,
  a3: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractIterable() {
}
$p = $c_sc_AbstractIterable.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
$h_sc_AbstractIterable.prototype = $p;
$p.bp = (function() {
  return this.aR();
});
$p.dZ = (function(p) {
  return $f_sc_IterableOnceOps__find__F1__s_Option(this, p);
});
$p.cJ = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op);
});
$p.e4 = (function(op) {
  return $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op);
});
$p.ak = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.cx = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.R = (function() {
  return (-1);
});
function $ct_sc_ArrayOps$ArrayIterator__O__($thiz, xs) {
  $thiz.ab = xs;
  $thiz.l = 0;
  $thiz.ae = $m_jl_reflect_Array$().aV($thiz.ab);
  return $thiz;
}
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator() {
  this.ab = null;
  this.l = 0;
  this.ae = 0;
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.R = (function() {
  return ((this.ae - this.l) | 0);
});
$p.y = (function() {
  return (this.l < this.ae);
});
$p.h = (function() {
  if ((this.l >= $m_jl_reflect_Array$().aV(this.ab))) {
    $m_sc_Iterator$().Z.h();
  }
  var r = $m_sr_ScalaRunTime$().bo(this.ab, this.l);
  this.l = ((1 + this.l) | 0);
  return r;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  T: 1,
  t: 1,
  u: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.dC = self;
  $thiz.cl = 0;
  $thiz.b2 = self.p();
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.dC = null;
  this.cl = 0;
  this.b2 = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.R = (function() {
  return this.b2;
});
$p.y = (function() {
  return (this.b2 > 0);
});
$p.h = (function() {
  if ((this.b2 > 0)) {
    var r = this.dC.o(this.cl);
    this.cl = ((1 + this.cl) | 0);
    this.b2 = (((-1) + this.b2) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().Z.h();
  }
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  aA: 1,
  t: 1,
  u: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$21() {
  this.ct = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().Z);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.gX = (function(elem) {
  this.ct = this.ct.dX(new $c_sjsr_AnonFunction0((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.aj = (function(elem) {
  return this.gX(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().i($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  c0: 1,
  cP: 1,
  aa: 1,
  Z: 1,
  X: 1,
  W: 1
}));
function $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.dE)) {
    $thiz.dF = new $c_sci_ArraySeq$ofRef(new $ac_O(0));
    $thiz.dE = true;
  }
  return $thiz.dF;
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  return ((!$thiz.dE) ? $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) : $thiz.dF);
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.dF = null;
  this.ex = null;
  this.dE = false;
  $n_sci_ArraySeq$ = this;
  this.ex = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
$p.hh = (function(it, tag) {
  return ((it instanceof $c_sci_ArraySeq) ? it : this.gk($m_s_Array$().g1(it, tag)));
});
$p.ga = (function(evidence$2) {
  return new $c_scm_Builder$$anon$1(($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()), new $c_sjsr_AnonFunction1(((b$2$2) => $m_sci_ArraySeq$().gk($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2$2, evidence$2)))));
});
$p.gk = (function(x) {
  if ((x === null)) {
    return null;
  } else if ((x instanceof $ac_O)) {
    return new $c_sci_ArraySeq$ofRef(x);
  } else if ((x instanceof $ac_I)) {
    return new $c_sci_ArraySeq$ofInt(x);
  } else if ((x instanceof $ac_D)) {
    return new $c_sci_ArraySeq$ofDouble(x);
  } else if ((x instanceof $ac_J)) {
    return new $c_sci_ArraySeq$ofLong(x);
  } else if ((x instanceof $ac_F)) {
    return new $c_sci_ArraySeq$ofFloat(x);
  } else if ((x instanceof $ac_C)) {
    return new $c_sci_ArraySeq$ofChar(x);
  } else if ((x instanceof $ac_B)) {
    return new $c_sci_ArraySeq$ofByte(x);
  } else if ((x instanceof $ac_S)) {
    return new $c_sci_ArraySeq$ofShort(x);
  } else if ((x instanceof $ac_Z)) {
    return new $c_sci_ArraySeq$ofBoolean(x);
  } else if ($isArrayOf_jl_Void(x, 1)) {
    return new $c_sci_ArraySeq$ofUnit(x);
  } else {
    throw new $c_s_MatchError(x);
  }
});
$p.g0 = (function(it, evidence$5) {
  return this.hh(it, evidence$5);
});
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  c8: 1,
  aF: 1,
  ax: 1,
  aw: 1,
  ay: 1,
  a: 1
}));
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
}
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.s)));
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.s)));
}
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.aS <= $thiz.a1)) {
    $m_sc_Iterator$().Z.h();
  }
  $thiz.b7 = ((1 + $thiz.b7) | 0);
  var slice = $thiz.dG.b0($thiz.b7);
  while ((slice.a.length === 0)) {
    $thiz.b7 = ((1 + $thiz.b7) | 0);
    slice = $thiz.dG.b0($thiz.b7);
  }
  $thiz.d0 = $thiz.bR;
  var count = $thiz.ez;
  var idx = $thiz.b7;
  var c = ((count / 2) | 0);
  var a = ((idx - c) | 0);
  $thiz.bw = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
  var x1 = $thiz.bw;
  switch (x1) {
    case 1: {
      $thiz.ac = slice;
      break;
    }
    case 2: {
      $thiz.at = slice;
      break;
    }
    case 3: {
      $thiz.b6 = slice;
      break;
    }
    case 4: {
      $thiz.bQ = slice;
      break;
    }
    case 5: {
      $thiz.cY = slice;
      break;
    }
    case 6: {
      $thiz.ey = slice;
      break;
    }
    default: {
      throw new $c_s_MatchError(x1);
    }
  }
  $thiz.bR = (($thiz.d0 + Math.imul(slice.a.length, (1 << Math.imul(5, (((-1) + $thiz.bw) | 0))))) | 0);
  if (($thiz.bR > $thiz.cq)) {
    $thiz.bR = $thiz.cq;
  }
  if (($thiz.bw > 1)) {
    $thiz.cZ = (((-1) + (1 << Math.imul(5, $thiz.bw))) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.a1 - $thiz.aS) | 0) + $thiz.cq) | 0);
  if ((pos === $thiz.bR)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.bw > 1)) {
    var io = ((pos - $thiz.d0) | 0);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, ($thiz.cZ ^ io));
    $thiz.cZ = io;
  }
  $thiz.aS = (($thiz.aS - $thiz.a1) | 0);
  var a = $thiz.ac.a.length;
  var b = $thiz.aS;
  $thiz.cp = ((a < b) ? a : b);
  $thiz.a1 = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.ac = $thiz.at.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.at = $thiz.b6.a[(31 & ((io >>> 10) | 0))];
    $thiz.ac = $thiz.at.a[0];
  } else if ((xor < 1048576)) {
    $thiz.b6 = $thiz.bQ.a[(31 & ((io >>> 15) | 0))];
    $thiz.at = $thiz.b6.a[0];
    $thiz.ac = $thiz.at.a[0];
  } else if ((xor < 33554432)) {
    $thiz.bQ = $thiz.cY.a[(31 & ((io >>> 20) | 0))];
    $thiz.b6 = $thiz.bQ.a[0];
    $thiz.at = $thiz.b6.a[0];
    $thiz.ac = $thiz.at.a[0];
  } else {
    $thiz.cY = $thiz.ey.a[((io >>> 25) | 0)];
    $thiz.bQ = $thiz.cY.a[0];
    $thiz.b6 = $thiz.bQ.a[0];
    $thiz.at = $thiz.b6.a[0];
    $thiz.ac = $thiz.at.a[0];
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.dG = null;
  this.cq = 0;
  this.ez = 0;
  this.ac = null;
  this.at = null;
  this.b6 = null;
  this.bQ = null;
  this.cY = null;
  this.ey = null;
  this.cp = 0;
  this.a1 = 0;
  this.cZ = 0;
  this.aS = 0;
  this.b7 = 0;
  this.bw = 0;
  this.d0 = 0;
  this.bR = 0;
  this.dG = v;
  this.cq = totalLength;
  this.ez = sliceCount;
  this.ac = v.i;
  this.cp = this.ac.a.length;
  this.a1 = 0;
  this.cZ = 0;
  this.aS = this.cq;
  this.b7 = 0;
  this.bw = 1;
  this.d0 = 0;
  this.bR = this.cp;
}
$p = $c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
}
$h_sci_NewVectorIterator.prototype = $p;
$p.R = (function() {
  return ((this.aS - this.a1) | 0);
});
$p.y = (function() {
  return (this.aS > this.a1);
});
$p.h = (function() {
  if ((this.a1 === this.cp)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = this.ac.a[this.a1];
  this.a1 = ((1 + this.a1) | 0);
  return r;
});
$p.ak = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().aV(xs);
  var srcLen = ((this.aS - this.a1) | 0);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((xsLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var total = ((x$1 > 0) ? x$1 : 0);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total)) {
    if ((this.a1 === this.cp)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total - copied) | 0);
    var b = ((this.ac.a.length - this.a1) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.ac;
      var srcPos = this.a1;
      var destPos = ((start + copied) | 0);
      src.t(srcPos, xs, destPos, count);
    } else {
      $m_s_Array$().cI(this.ac, this.a1, xs, ((start + copied) | 0), count);
    }
    this.a1 = ((this.a1 + count) | 0);
    copied = ((copied + count) | 0);
  }
  return total;
});
var $d_sci_NewVectorIterator = new $TypeData().i($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
  cj: 1,
  t: 1,
  u: 1,
  b: 1,
  c: 1,
  z: 1
}));
function $ct_scm_ArrayBuilder__($thiz) {
  $thiz.dL = 0;
  $thiz.eE = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.dL = 0;
  this.eE = 0;
}
$p = $c_scm_ArrayBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $p;
$p.am = (function(size) {
  if ((this.dL < size)) {
    this.hS(size);
  }
});
/** @constructor */
function $c_scm_ArraySeq$() {
  this.eG = null;
  this.gx = null;
  $n_scm_ArraySeq$ = this;
  this.eG = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.gx = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
$p.hi = (function(it, evidence$2) {
  return this.g8($m_s_Array$().g1(it, evidence$2));
});
$p.ga = (function(evidence$3) {
  return new $c_scm_Builder$$anon$1(new $c_scm_ArrayBuilder$generic(evidence$3.a2()), new $c_sjsr_AnonFunction1(((x$2$2) => $m_scm_ArraySeq$().g8(x$2$2))));
});
$p.g8 = (function(x) {
  if ((x === null)) {
    return null;
  } else if ((x instanceof $ac_O)) {
    return new $c_scm_ArraySeq$ofRef(x);
  } else if ((x instanceof $ac_I)) {
    return new $c_scm_ArraySeq$ofInt(x);
  } else if ((x instanceof $ac_D)) {
    return new $c_scm_ArraySeq$ofDouble(x);
  } else if ((x instanceof $ac_J)) {
    return new $c_scm_ArraySeq$ofLong(x);
  } else if ((x instanceof $ac_F)) {
    return new $c_scm_ArraySeq$ofFloat(x);
  } else if ((x instanceof $ac_C)) {
    return new $c_scm_ArraySeq$ofChar(x);
  } else if ((x instanceof $ac_B)) {
    return new $c_scm_ArraySeq$ofByte(x);
  } else if ((x instanceof $ac_S)) {
    return new $c_scm_ArraySeq$ofShort(x);
  } else if ((x instanceof $ac_Z)) {
    return new $c_scm_ArraySeq$ofBoolean(x);
  } else if ($isArrayOf_jl_Void(x, 1)) {
    return new $c_scm_ArraySeq$ofUnit(x);
  } else {
    throw new $c_s_MatchError(x);
  }
});
$p.g0 = (function(it, evidence$5) {
  return this.hi(it, evidence$5);
});
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  cB: 1,
  aF: 1,
  ax: 1,
  aw: 1,
  ay: 1,
  a: 1
}));
var $n_scm_ArraySeq$;
function $m_scm_ArraySeq$() {
  if ((!$n_scm_ArraySeq$)) {
    $n_scm_ArraySeq$ = new $c_scm_ArraySeq$();
  }
  return $n_scm_ArraySeq$;
}
/** @constructor */
function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
  this.cu = null;
  this.cu = runtimeClass;
}
$p = $c_s_reflect_ClassTag$GenericClassTag.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$GenericClassTag;
/** @constructor */
function $h_s_reflect_ClassTag$GenericClassTag() {
}
$h_s_reflect_ClassTag$GenericClassTag.prototype = $p;
$p.F = (function() {
  return $m_sr_Statics$().a0(this.cu);
});
$p.k = (function() {
  return $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this.cu);
});
$p.a2 = (function() {
  return this.cu;
});
$p.a5 = (function(len) {
  return this.cu.P.U(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().i($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  d4: 1,
  L: 1,
  K: 1,
  M: 1,
  a: 1,
  d: 1
}));
/** @constructor */
function $c_Lsentences_Comma$() {
  this.dR = 0;
  this.dS = false;
  this.cw = null;
  $ct_Lsentences_Token__T__(this, "\b,");
}
$p = $c_Lsentences_Comma$.prototype = new $h_Lsentences_Token();
$p.constructor = $c_Lsentences_Comma$;
/** @constructor */
function $h_Lsentences_Comma$() {
}
$h_Lsentences_Comma$.prototype = $p;
var $d_Lsentences_Comma$ = new $TypeData().i($c_Lsentences_Comma$, "sentences.Comma$", ({
  dM: 1,
  aP: 1,
  r: 1,
  d: 1,
  a3: 1,
  a: 1
}));
var $n_Lsentences_Comma$;
function $m_Lsentences_Comma$() {
  if ((!$n_Lsentences_Comma$)) {
    $n_Lsentences_Comma$ = new $c_Lsentences_Comma$();
  }
  return $n_Lsentences_Comma$;
}
function $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__($thiz, _out, autoFlush, charset) {
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_PrintStream() {
}
$p = $c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
$p.constructor = $c_Ljava_io_PrintStream;
/** @constructor */
function $h_Ljava_io_PrintStream() {
}
$h_Ljava_io_PrintStream.prototype = $p;
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcB$sp(xs$mcB$sp) {
  this.ab = null;
  this.l = 0;
  this.ae = 0;
  this.du = null;
  this.du = xs$mcB$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcB$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcB$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcB$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = $p;
$p.hC = (function() {
  if ((this.l >= this.du.a.length)) {
    $m_sc_Iterator$().Z.h();
  }
  var r = this.du.a[this.l];
  this.l = ((1 + this.l) | 0);
  return r;
});
$p.h = (function() {
  return this.hC();
});
var $d_sc_ArrayOps$ArrayIterator$mcB$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcB$sp, "scala.collection.ArrayOps$ArrayIterator$mcB$sp", ({
  bL: 1,
  T: 1,
  t: 1,
  u: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcC$sp(xs$mcC$sp) {
  this.ab = null;
  this.l = 0;
  this.ae = 0;
  this.dv = null;
  this.dv = xs$mcC$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcC$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcC$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcC$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = $p;
$p.hD = (function() {
  if ((this.l >= this.dv.a.length)) {
    $m_sc_Iterator$().Z.h();
  }
  var r = this.dv.a[this.l];
  this.l = ((1 + this.l) | 0);
  return r;
});
$p.h = (function() {
  return $bC(this.hD());
});
var $d_sc_ArrayOps$ArrayIterator$mcC$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcC$sp, "scala.collection.ArrayOps$ArrayIterator$mcC$sp", ({
  bM: 1,
  T: 1,
  t: 1,
  u: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcD$sp(xs$mcD$sp) {
  this.ab = null;
  this.l = 0;
  this.ae = 0;
  this.dw = null;
  this.dw = xs$mcD$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcD$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcD$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcD$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = $p;
$p.hE = (function() {
  if ((this.l >= this.dw.a.length)) {
    $m_sc_Iterator$().Z.h();
  }
  var r = this.dw.a[this.l];
  this.l = ((1 + this.l) | 0);
  return r;
});
$p.h = (function() {
  return this.hE();
});
var $d_sc_ArrayOps$ArrayIterator$mcD$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcD$sp, "scala.collection.ArrayOps$ArrayIterator$mcD$sp", ({
  bN: 1,
  T: 1,
  t: 1,
  u: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcF$sp(xs$mcF$sp) {
  this.ab = null;
  this.l = 0;
  this.ae = 0;
  this.dx = null;
  this.dx = xs$mcF$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcF$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcF$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcF$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = $p;
$p.hF = (function() {
  if ((this.l >= this.dx.a.length)) {
    $m_sc_Iterator$().Z.h();
  }
  var r = this.dx.a[this.l];
  this.l = ((1 + this.l) | 0);
  return r;
});
$p.h = (function() {
  return this.hF();
});
var $d_sc_ArrayOps$ArrayIterator$mcF$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcF$sp, "scala.collection.ArrayOps$ArrayIterator$mcF$sp", ({
  bO: 1,
  T: 1,
  t: 1,
  u: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcI$sp(xs$mcI$sp) {
  this.ab = null;
  this.l = 0;
  this.ae = 0;
  this.dy = null;
  this.dy = xs$mcI$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcI$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcI$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcI$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = $p;
$p.hG = (function() {
  if ((this.l >= this.dy.a.length)) {
    $m_sc_Iterator$().Z.h();
  }
  var r = this.dy.a[this.l];
  this.l = ((1 + this.l) | 0);
  return r;
});
$p.h = (function() {
  return this.hG();
});
var $d_sc_ArrayOps$ArrayIterator$mcI$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcI$sp, "scala.collection.ArrayOps$ArrayIterator$mcI$sp", ({
  bP: 1,
  T: 1,
  t: 1,
  u: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcJ$sp(xs$mcJ$sp) {
  this.ab = null;
  this.l = 0;
  this.ae = 0;
  this.dz = null;
  this.dz = xs$mcJ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcJ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcJ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcJ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = $p;
$p.hH = (function() {
  if ((this.l >= this.dz.a.length)) {
    $m_sc_Iterator$().Z.h();
  }
  var t = this.dz.a[this.l];
  var lo = t.e;
  var hi = t.f;
  this.l = ((1 + this.l) | 0);
  return new $c_RTLong(lo, hi);
});
$p.h = (function() {
  return this.hH();
});
var $d_sc_ArrayOps$ArrayIterator$mcJ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcJ$sp, "scala.collection.ArrayOps$ArrayIterator$mcJ$sp", ({
  bQ: 1,
  T: 1,
  t: 1,
  u: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcS$sp(xs$mcS$sp) {
  this.ab = null;
  this.l = 0;
  this.ae = 0;
  this.dA = null;
  this.dA = xs$mcS$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcS$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcS$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcS$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = $p;
$p.hI = (function() {
  if ((this.l >= this.dA.a.length)) {
    $m_sc_Iterator$().Z.h();
  }
  var r = this.dA.a[this.l];
  this.l = ((1 + this.l) | 0);
  return r;
});
$p.h = (function() {
  return this.hI();
});
var $d_sc_ArrayOps$ArrayIterator$mcS$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcS$sp, "scala.collection.ArrayOps$ArrayIterator$mcS$sp", ({
  bR: 1,
  T: 1,
  t: 1,
  u: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcV$sp(xs$mcV$sp) {
  this.ab = null;
  this.l = 0;
  this.ae = 0;
  this.et = null;
  this.et = xs$mcV$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcV$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcV$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcV$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = $p;
$p.hJ = (function() {
  if ((this.l >= this.et.a.length)) {
    $m_sc_Iterator$().Z.h();
  }
  this.l = ((1 + this.l) | 0);
});
$p.h = (function() {
  this.hJ();
});
var $d_sc_ArrayOps$ArrayIterator$mcV$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcV$sp, "scala.collection.ArrayOps$ArrayIterator$mcV$sp", ({
  bS: 1,
  T: 1,
  t: 1,
  u: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator$mcZ$sp(xs$mcZ$sp) {
  this.ab = null;
  this.l = 0;
  this.ae = 0;
  this.dB = null;
  this.dB = xs$mcZ$sp;
  $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcZ$sp);
}
$p = $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator$mcZ$sp;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator$mcZ$sp() {
}
$h_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = $p;
$p.hK = (function() {
  if ((this.l >= this.dB.a.length)) {
    $m_sc_Iterator$().Z.h();
  }
  var r = this.dB.a[this.l];
  this.l = ((1 + this.l) | 0);
  return r;
});
$p.h = (function() {
  return this.hK();
});
var $d_sc_ArrayOps$ArrayIterator$mcZ$sp = new $TypeData().i($c_sc_ArrayOps$ArrayIterator$mcZ$sp, "scala.collection.ArrayOps$ArrayIterator$mcZ$sp", ({
  bT: 1,
  T: 1,
  t: 1,
  u: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.bp() + "(<not computed>)");
}
/** @constructor */
function $c_scm_ArrayBuilder$generic(elementClass) {
  this.dL = 0;
  this.eE = 0;
  this.bY = null;
  this.eF = false;
  this.dM = null;
  this.bY = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.eF = (elementClass === $d_C.l());
  this.dM = [];
}
$p = $c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$p.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $p;
$p.fJ = (function(elem) {
  var unboxedElem = (this.eF ? $uC(elem) : ((elem === null) ? this.bY.P.z : elem));
  this.dM.push(unboxedElem);
  return this;
});
$p.gP = (function(xs) {
  var it = xs.j();
  while (it.y()) {
    this.fJ(it.h());
  }
  return this;
});
$p.hS = (function(size) {
});
$p.aP = (function() {
  var elemRuntimeClass = ((this.bY === $d_V.l()) ? $d_jl_Void.l() : (((this.bY === $d_sr_Null$.l()) || (this.bY === $d_sr_Nothing$.l())) ? $d_O.l() : this.bY));
  return elemRuntimeClass.P.r().w(this.dM);
});
$p.k = (function() {
  return "ArrayBuilder.generic";
});
$p.ap = (function(elems) {
  return this.gP(elems);
});
$p.aj = (function(elem) {
  return this.fJ(elem);
});
var $d_scm_ArrayBuilder$generic = new $TypeData().i($c_scm_ArrayBuilder$generic, "scala.collection.mutable.ArrayBuilder$generic", ({
  cA: 1,
  cz: 1,
  aa: 1,
  Z: 1,
  X: 1,
  W: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.dC = null;
  this.cl = 0;
  this.b2 = 0;
  this.eJ = null;
  this.eI = 0;
  this.eJ = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.eI = (mutationCount.cB() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $p;
$p.y = (function() {
  $m_scm_MutationTracker$().fY(this.eI, (this.eJ.cB() | 0), "mutation occurred during iteration");
  return (this.b2 > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  cO: 1,
  aA: 1,
  t: 1,
  u: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.M = null;
}
$p = $c_s_reflect_AnyValManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
}
$h_s_reflect_AnyValManifest.prototype = $p;
$p.k = (function() {
  return this.M;
});
$p.F = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$p = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $p;
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.dA)));
}
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (((typeof console) !== "undefined")) {
    if (($thiz.e7 && (!(!(!(!console.error)))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.e7 = false;
  this.cf = null;
  this.e7 = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(), false, null);
  this.cf = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.g6 = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = (this$1.indexOf("\n") | 0);
    if ((nlPos < 0)) {
      this.cf = (("" + this.cf) + rest);
      rest = "";
    } else {
      var $x_1 = this.cf;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + this$2.substring(0, nlPos)));
      this.cf = "";
      var this$3 = rest;
      var beginIndex = ((1 + nlPos) | 0);
      rest = this$3.substring(beginIndex);
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  b5: 1,
  aR: 1,
  aQ: 1,
  am: 1,
  ak: 1,
  an: 1,
  al: 1,
  ae: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  while (true) {
    if (((n <= 0) || s.Y())) {
      return s;
    } else {
      var temp$n = (((-1) + n) | 0);
      var temp$s = s.aZ();
      n = temp$n;
      s = temp$s;
    }
  }
}
function $f_s_math_Numeric$IntIsIntegral__plus__I__I__I($thiz, x, y) {
  return ((x + y) | 0);
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest() {
  this.M = null;
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest() {
}
$h_s_reflect_ManifestFactory$BooleanManifest.prototype = $p;
$p.a2 = (function() {
  return $d_Z.l();
});
$p.a5 = (function(len) {
  return new $ac_Z(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest() {
  this.M = null;
}
$p = $c_s_reflect_ManifestFactory$ByteManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest() {
}
$h_s_reflect_ManifestFactory$ByteManifest.prototype = $p;
$p.a2 = (function() {
  return $d_B.l();
});
$p.a5 = (function(len) {
  return new $ac_B(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest() {
  this.M = null;
}
$p = $c_s_reflect_ManifestFactory$CharManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest() {
}
$h_s_reflect_ManifestFactory$CharManifest.prototype = $p;
$p.a2 = (function() {
  return $d_C.l();
});
$p.a5 = (function(len) {
  return new $ac_C(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest() {
  this.M = null;
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest() {
}
$h_s_reflect_ManifestFactory$DoubleManifest.prototype = $p;
$p.a2 = (function() {
  return $d_D.l();
});
$p.a5 = (function(len) {
  return new $ac_D(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest() {
  this.M = null;
}
$p = $c_s_reflect_ManifestFactory$FloatManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest() {
}
$h_s_reflect_ManifestFactory$FloatManifest.prototype = $p;
$p.a2 = (function() {
  return $d_F.l();
});
$p.a5 = (function(len) {
  return new $ac_F(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest() {
  this.M = null;
}
$p = $c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest() {
}
$h_s_reflect_ManifestFactory$IntManifest.prototype = $p;
$p.a2 = (function() {
  return $d_I.l();
});
$p.a5 = (function(len) {
  return new $ac_I(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest() {
  this.M = null;
}
$p = $c_s_reflect_ManifestFactory$LongManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest() {
}
$h_s_reflect_ManifestFactory$LongManifest.prototype = $p;
$p.a2 = (function() {
  return $d_J.l();
});
$p.a5 = (function(len) {
  return new $ac_J(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.aU = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.k = (function() {
  return this.aU;
});
$p.F = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest() {
  this.M = null;
}
$p = $c_s_reflect_ManifestFactory$ShortManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest() {
}
$h_s_reflect_ManifestFactory$ShortManifest.prototype = $p;
$p.a2 = (function() {
  return $d_S.l();
});
$p.a5 = (function(len) {
  return new $ac_S(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest() {
  this.M = null;
}
$p = $c_s_reflect_ManifestFactory$UnitManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest() {
}
$h_s_reflect_ManifestFactory$UnitManifest.prototype = $p;
$p.a2 = (function() {
  return $d_V.l();
});
$p.a5 = (function(len) {
  return new ($d_jl_Void.r().C)(len);
});
/** @constructor */
function $c_sc_AbstractView() {
}
$p = $c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $p;
$p.k = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.aU = null;
  this.aU = "Any";
}
$p = $c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $p;
$p.a2 = (function() {
  return $d_O.l();
});
$p.a5 = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  d5: 1,
  ad: 1,
  ac: 1,
  P: 1,
  L: 1,
  K: 1,
  M: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$AnyManifest$;
function $m_s_reflect_ManifestFactory$AnyManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyManifest$)) {
    $n_s_reflect_ManifestFactory$AnyManifest$ = new $c_s_reflect_ManifestFactory$AnyManifest$();
  }
  return $n_s_reflect_ManifestFactory$AnyManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest$() {
  this.M = null;
  this.M = "Boolean";
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_ManifestFactory$BooleanManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest$() {
}
$h_s_reflect_ManifestFactory$BooleanManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$BooleanManifest$, "scala.reflect.ManifestFactory$BooleanManifest$", ({
  d7: 1,
  d6: 1,
  a0: 1,
  P: 1,
  L: 1,
  K: 1,
  M: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$BooleanManifest$;
function $m_s_reflect_ManifestFactory$BooleanManifest$() {
  if ((!$n_s_reflect_ManifestFactory$BooleanManifest$)) {
    $n_s_reflect_ManifestFactory$BooleanManifest$ = new $c_s_reflect_ManifestFactory$BooleanManifest$();
  }
  return $n_s_reflect_ManifestFactory$BooleanManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest$() {
  this.M = null;
  this.M = "Byte";
}
$p = $c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_ManifestFactory$ByteManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest$() {
}
$h_s_reflect_ManifestFactory$ByteManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ByteManifest$, "scala.reflect.ManifestFactory$ByteManifest$", ({
  d9: 1,
  d8: 1,
  a0: 1,
  P: 1,
  L: 1,
  K: 1,
  M: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$ByteManifest$;
function $m_s_reflect_ManifestFactory$ByteManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ByteManifest$)) {
    $n_s_reflect_ManifestFactory$ByteManifest$ = new $c_s_reflect_ManifestFactory$ByteManifest$();
  }
  return $n_s_reflect_ManifestFactory$ByteManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest$() {
  this.M = null;
  this.M = "Char";
}
$p = $c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_ManifestFactory$CharManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest$() {
}
$h_s_reflect_ManifestFactory$CharManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$CharManifest$, "scala.reflect.ManifestFactory$CharManifest$", ({
  db: 1,
  da: 1,
  a0: 1,
  P: 1,
  L: 1,
  K: 1,
  M: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$CharManifest$;
function $m_s_reflect_ManifestFactory$CharManifest$() {
  if ((!$n_s_reflect_ManifestFactory$CharManifest$)) {
    $n_s_reflect_ManifestFactory$CharManifest$ = new $c_s_reflect_ManifestFactory$CharManifest$();
  }
  return $n_s_reflect_ManifestFactory$CharManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest$() {
  this.M = null;
  this.M = "Double";
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_ManifestFactory$DoubleManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest$() {
}
$h_s_reflect_ManifestFactory$DoubleManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$DoubleManifest$, "scala.reflect.ManifestFactory$DoubleManifest$", ({
  dd: 1,
  dc: 1,
  a0: 1,
  P: 1,
  L: 1,
  K: 1,
  M: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$DoubleManifest$;
function $m_s_reflect_ManifestFactory$DoubleManifest$() {
  if ((!$n_s_reflect_ManifestFactory$DoubleManifest$)) {
    $n_s_reflect_ManifestFactory$DoubleManifest$ = new $c_s_reflect_ManifestFactory$DoubleManifest$();
  }
  return $n_s_reflect_ManifestFactory$DoubleManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest$() {
  this.M = null;
  this.M = "Float";
}
$p = $c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_ManifestFactory$FloatManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest$() {
}
$h_s_reflect_ManifestFactory$FloatManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$FloatManifest$, "scala.reflect.ManifestFactory$FloatManifest$", ({
  df: 1,
  de: 1,
  a0: 1,
  P: 1,
  L: 1,
  K: 1,
  M: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$FloatManifest$;
function $m_s_reflect_ManifestFactory$FloatManifest$() {
  if ((!$n_s_reflect_ManifestFactory$FloatManifest$)) {
    $n_s_reflect_ManifestFactory$FloatManifest$ = new $c_s_reflect_ManifestFactory$FloatManifest$();
  }
  return $n_s_reflect_ManifestFactory$FloatManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest$() {
  this.M = null;
  this.M = "Int";
}
$p = $c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$IntManifest$, "scala.reflect.ManifestFactory$IntManifest$", ({
  dh: 1,
  dg: 1,
  a0: 1,
  P: 1,
  L: 1,
  K: 1,
  M: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$IntManifest$;
function $m_s_reflect_ManifestFactory$IntManifest$() {
  if ((!$n_s_reflect_ManifestFactory$IntManifest$)) {
    $n_s_reflect_ManifestFactory$IntManifest$ = new $c_s_reflect_ManifestFactory$IntManifest$();
  }
  return $n_s_reflect_ManifestFactory$IntManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest$() {
  this.M = null;
  this.M = "Long";
}
$p = $c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_ManifestFactory$LongManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest$() {
}
$h_s_reflect_ManifestFactory$LongManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$LongManifest$, "scala.reflect.ManifestFactory$LongManifest$", ({
  dj: 1,
  di: 1,
  a0: 1,
  P: 1,
  L: 1,
  K: 1,
  M: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$LongManifest$;
function $m_s_reflect_ManifestFactory$LongManifest$() {
  if ((!$n_s_reflect_ManifestFactory$LongManifest$)) {
    $n_s_reflect_ManifestFactory$LongManifest$ = new $c_s_reflect_ManifestFactory$LongManifest$();
  }
  return $n_s_reflect_ManifestFactory$LongManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NothingManifest$() {
  this.aU = null;
  this.aU = "Nothing";
}
$p = $c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $p;
$p.a2 = (function() {
  return $d_sr_Nothing$.l();
});
$p.a5 = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
  dk: 1,
  ad: 1,
  ac: 1,
  P: 1,
  L: 1,
  K: 1,
  M: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$NothingManifest$;
function $m_s_reflect_ManifestFactory$NothingManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NothingManifest$)) {
    $n_s_reflect_ManifestFactory$NothingManifest$ = new $c_s_reflect_ManifestFactory$NothingManifest$();
  }
  return $n_s_reflect_ManifestFactory$NothingManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NullManifest$() {
  this.aU = null;
  this.aU = "Null";
}
$p = $c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $p;
$p.a2 = (function() {
  return $d_sr_Null$.l();
});
$p.a5 = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  dl: 1,
  ad: 1,
  ac: 1,
  P: 1,
  L: 1,
  K: 1,
  M: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$NullManifest$;
function $m_s_reflect_ManifestFactory$NullManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NullManifest$)) {
    $n_s_reflect_ManifestFactory$NullManifest$ = new $c_s_reflect_ManifestFactory$NullManifest$();
  }
  return $n_s_reflect_ManifestFactory$NullManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.aU = null;
  this.aU = "Object";
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
$p.a2 = (function() {
  return $d_O.l();
});
$p.a5 = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  dm: 1,
  ad: 1,
  ac: 1,
  P: 1,
  L: 1,
  K: 1,
  M: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$ObjectManifest$;
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$();
  }
  return $n_s_reflect_ManifestFactory$ObjectManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest$() {
  this.M = null;
  this.M = "Short";
}
$p = $c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_ManifestFactory$ShortManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest$() {
}
$h_s_reflect_ManifestFactory$ShortManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ShortManifest$, "scala.reflect.ManifestFactory$ShortManifest$", ({
  dp: 1,
  dn: 1,
  a0: 1,
  P: 1,
  L: 1,
  K: 1,
  M: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$ShortManifest$;
function $m_s_reflect_ManifestFactory$ShortManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ShortManifest$)) {
    $n_s_reflect_ManifestFactory$ShortManifest$ = new $c_s_reflect_ManifestFactory$ShortManifest$();
  }
  return $n_s_reflect_ManifestFactory$ShortManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest$() {
  this.M = null;
  this.M = "Unit";
}
$p = $c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_ManifestFactory$UnitManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest$() {
}
$h_s_reflect_ManifestFactory$UnitManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$UnitManifest$, "scala.reflect.ManifestFactory$UnitManifest$", ({
  dr: 1,
  dq: 1,
  a0: 1,
  P: 1,
  L: 1,
  K: 1,
  M: 1,
  a: 1,
  d: 1
}));
var $n_s_reflect_ManifestFactory$UnitManifest$;
function $m_s_reflect_ManifestFactory$UnitManifest$() {
  if ((!$n_s_reflect_ManifestFactory$UnitManifest$)) {
    $n_s_reflect_ManifestFactory$UnitManifest$ = new $c_s_reflect_ManifestFactory$UnitManifest$();
  }
  return $n_s_reflect_ManifestFactory$UnitManifest$;
}
/** @constructor */
function $c_s_math_Numeric$IntIsIntegral$() {
}
$p = $c_s_math_Numeric$IntIsIntegral$.prototype = new $h_O();
$p.constructor = $c_s_math_Numeric$IntIsIntegral$;
/** @constructor */
function $h_s_math_Numeric$IntIsIntegral$() {
}
$h_s_math_Numeric$IntIsIntegral$.prototype = $p;
var $d_s_math_Numeric$IntIsIntegral$ = new $TypeData().i($c_s_math_Numeric$IntIsIntegral$, "scala.math.Numeric$IntIsIntegral$", ({
  cZ: 1,
  cY: 1,
  cW: 1,
  cX: 1,
  d0: 1,
  bn: 1,
  d2: 1,
  cV: 1,
  a: 1,
  d1: 1
}));
var $n_s_math_Numeric$IntIsIntegral$;
function $m_s_math_Numeric$IntIsIntegral$() {
  if ((!$n_s_math_Numeric$IntIsIntegral$)) {
    $n_s_math_Numeric$IntIsIntegral$ = new $c_s_math_Numeric$IntIsIntegral$();
  }
  return $n_s_math_Numeric$IntIsIntegral$;
}
/** @constructor */
function $c_sc_AbstractSeq() {
}
$p = $c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $p;
$p.F = (function() {
  return $m_s_util_hashing_MurmurHash3$().hU(this);
});
$p.k = (function() {
  return $f_sc_Iterable__toString__T(this);
});
/** @constructor */
function $c_sc_AbstractSeqView() {
}
$p = $c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
}
$h_sc_AbstractSeqView.prototype = $p;
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.n)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.n)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.cX = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.cX = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.o = (function(idx) {
  return this.cX.o(idx);
});
$p.p = (function() {
  return this.cX.p();
});
/** @constructor */
function $c_sc_AbstractIndexedSeqView() {
}
$p = $c_sc_AbstractIndexedSeqView.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_AbstractIndexedSeqView;
/** @constructor */
function $h_sc_AbstractIndexedSeqView() {
}
$h_sc_AbstractIndexedSeqView.prototype = $p;
$p.aR = (function() {
  return "IndexedSeqView";
});
$p.R = (function() {
  return this.p();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.cX = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.j = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.aR = (function() {
  return "IndexedSeqView";
});
$p.R = (function() {
  return this.p();
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  bW: 1,
  c3: 1,
  au: 1,
  av: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  aH: 1,
  a: 1,
  aE: 1,
  j: 1,
  az: 1,
  o: 1
}));
/** @constructor */
function $c_sci_AbstractSeq() {
}
$p = $c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
}
$h_sci_AbstractSeq.prototype = $p;
/** @constructor */
function $c_scm_ArrayBufferView(underlying, mutationCount) {
  this.dK = null;
  this.eD = null;
  this.dK = underlying;
  this.eD = mutationCount;
}
$p = $c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $p;
$p.o = (function(n) {
  return this.dK.o(n);
});
$p.p = (function() {
  return this.dK.U;
});
$p.bp = (function() {
  return "ArrayBufferView";
});
$p.j = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.eD);
});
var $d_scm_ArrayBufferView = new $TypeData().i($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  cy: 1,
  bK: 1,
  au: 1,
  av: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  aH: 1,
  a: 1,
  aE: 1,
  j: 1,
  az: 1,
  o: 1
}));
/** @constructor */
function $c_scm_AbstractSeq() {
}
$p = $c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
$h_scm_AbstractSeq.prototype = $p;
/** @constructor */
function $c_scm_AbstractBuffer() {
}
$p = $c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
}
$h_scm_AbstractBuffer.prototype = $p;
$p.ap = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
/** @constructor */
function $c_sci_ArraySeq() {
}
$p = $c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
}
$h_sci_ArraySeq.prototype = $p;
$p.aR = (function() {
  return "IndexedSeq";
});
$p.R = (function() {
  return this.p();
});
$p.cJ = (function(z, f) {
  var array = this.ar();
  var b = z;
  var i = 0;
  while ((i < $m_jl_reflect_Array$().aV(array))) {
    var a = $m_sr_ScalaRunTime$().bo(array, i);
    b = f.c9(b, a);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.bp = (function() {
  return "ArraySeq";
});
$p.ak = (function(xs, start, len) {
  var srcLen = this.p();
  var destLen = $m_jl_reflect_Array$().aV(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().cI(this.ar(), 0, xs, start, copied);
  }
  return copied;
});
$p.bF = (function() {
  return $m_sci_ArraySeq$().ex;
});
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.R)));
}
function $ct_sci_Vector__AO__($thiz, prefix1) {
  $thiz.i = prefix1;
  return $thiz;
}
/** @constructor */
function $c_sci_Vector() {
  this.i = null;
}
$p = $c_sci_Vector.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
}
$h_sci_Vector.prototype = $p;
$p.aR = (function() {
  return "IndexedSeq";
});
$p.R = (function() {
  return this.p();
});
$p.p = (function() {
  return ((this instanceof $c_sci_BigVector) ? this.z : this.i.a.length);
});
$p.j = (function() {
  return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().eA : new $c_sci_NewVectorIterator(this, this.p(), this.b1()));
});
$p.bp = (function() {
  return "Vector";
});
$p.ak = (function(xs, start, len) {
  return this.j().ak(xs, start, len);
});
$p.a7 = (function(index) {
  return $m_scg_CommonErrors$().cK(index, (((-1) + this.p()) | 0));
});
$p.bF = (function() {
  return $m_sci_Vector$();
});
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a2)));
}
/** @constructor */
function $c_scm_ArraySeq() {
}
$p = $c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_ArraySeq;
/** @constructor */
function $h_scm_ArraySeq() {
}
$h_scm_ArraySeq.prototype = $p;
$p.aR = (function() {
  return "IndexedSeq";
});
$p.R = (function() {
  return this.p();
});
$p.bp = (function() {
  return "ArraySeq";
});
$p.ak = (function(xs, start, len) {
  var srcLen = this.p();
  var destLen = $m_jl_reflect_Array$().aV(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().cI(this.aM(), 0, xs, start, copied);
  }
  return copied;
});
$p.bF = (function() {
  return $m_scm_ArraySeq$().eG;
});
/** @constructor */
function $c_sci_ArraySeq$ofBoolean(unsafeArray) {
  this.bJ = null;
  this.bJ = unsafeArray;
}
$p = $c_sci_ArraySeq$ofBoolean.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofBoolean;
/** @constructor */
function $h_sci_ArraySeq$ofBoolean() {
}
$h_sci_ArraySeq$ofBoolean.prototype = $p;
$p.p = (function() {
  return this.bJ.a.length;
});
$p.F = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.fV(this.bJ, this$1.V);
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.bJ);
});
$p.cH = (function(i) {
  return this.bJ.a[i];
});
$p.v = (function(v1) {
  return this.cH((v1 | 0));
});
$p.o = (function(i) {
  return this.cH(i);
});
$p.ar = (function() {
  return this.bJ;
});
var $d_sci_ArraySeq$ofBoolean = new $TypeData().i($c_sci_ArraySeq$ofBoolean, "scala.collection.immutable.ArraySeq$ofBoolean", ({
  c9: 1,
  R: 1,
  v: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  w: 1,
  s: 1,
  x: 1,
  B: 1,
  n: 1,
  o: 1,
  C: 1,
  y: 1,
  q: 1,
  p: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofByte(unsafeArray) {
  this.bK = null;
  this.bK = unsafeArray;
}
$p = $c_sci_ArraySeq$ofByte.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofByte;
/** @constructor */
function $h_sci_ArraySeq$ofByte() {
}
$h_sci_ArraySeq$ofByte.prototype = $p;
$p.p = (function() {
  return this.bK.a.length;
});
$p.cy = (function(i) {
  return this.bK.a[i];
});
$p.F = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.fN(this.bK, this$1.V);
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.bK);
});
$p.v = (function(v1) {
  return this.cy((v1 | 0));
});
$p.o = (function(i) {
  return this.cy(i);
});
$p.ar = (function() {
  return this.bK;
});
var $d_sci_ArraySeq$ofByte = new $TypeData().i($c_sci_ArraySeq$ofByte, "scala.collection.immutable.ArraySeq$ofByte", ({
  ca: 1,
  R: 1,
  v: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  w: 1,
  s: 1,
  x: 1,
  B: 1,
  n: 1,
  o: 1,
  C: 1,
  y: 1,
  q: 1,
  p: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofChar(unsafeArray) {
  this.bv = null;
  this.bv = unsafeArray;
}
$p = $c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
$h_sci_ArraySeq$ofChar.prototype = $p;
$p.p = (function() {
  return this.bv.a.length;
});
$p.cz = (function(i) {
  return this.bv.a[i];
});
$p.F = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.fO(this.bv, this$1.V);
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.bv);
});
$p.cx = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.bv).cx(sb, start, sep, end);
});
$p.v = (function(v1) {
  return $bC(this.cz((v1 | 0)));
});
$p.o = (function(i) {
  return $bC(this.cz(i));
});
$p.ar = (function() {
  return this.bv;
});
var $d_sci_ArraySeq$ofChar = new $TypeData().i($c_sci_ArraySeq$ofChar, "scala.collection.immutable.ArraySeq$ofChar", ({
  cb: 1,
  R: 1,
  v: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  w: 1,
  s: 1,
  x: 1,
  B: 1,
  n: 1,
  o: 1,
  C: 1,
  y: 1,
  q: 1,
  p: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofDouble(unsafeArray) {
  this.bL = null;
  this.bL = unsafeArray;
}
$p = $c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
}
$h_sci_ArraySeq$ofDouble.prototype = $p;
$p.p = (function() {
  return this.bL.a.length;
});
$p.F = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.fP(this.bL, this$1.V);
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.bL);
});
$p.cC = (function(i) {
  return this.bL.a[i];
});
$p.v = (function(v1) {
  return this.cC((v1 | 0));
});
$p.o = (function(i) {
  return this.cC(i);
});
$p.ar = (function() {
  return this.bL;
});
var $d_sci_ArraySeq$ofDouble = new $TypeData().i($c_sci_ArraySeq$ofDouble, "scala.collection.immutable.ArraySeq$ofDouble", ({
  cc: 1,
  R: 1,
  v: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  w: 1,
  s: 1,
  x: 1,
  B: 1,
  n: 1,
  o: 1,
  C: 1,
  y: 1,
  q: 1,
  p: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofFloat(unsafeArray) {
  this.bM = null;
  this.bM = unsafeArray;
}
$p = $c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
}
$h_sci_ArraySeq$ofFloat.prototype = $p;
$p.p = (function() {
  return this.bM.a.length;
});
$p.F = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.fQ(this.bM, this$1.V);
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.bM);
});
$p.cD = (function(i) {
  return this.bM.a[i];
});
$p.v = (function(v1) {
  return this.cD((v1 | 0));
});
$p.o = (function(i) {
  return this.cD(i);
});
$p.ar = (function() {
  return this.bM;
});
var $d_sci_ArraySeq$ofFloat = new $TypeData().i($c_sci_ArraySeq$ofFloat, "scala.collection.immutable.ArraySeq$ofFloat", ({
  cd: 1,
  R: 1,
  v: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  w: 1,
  s: 1,
  x: 1,
  B: 1,
  n: 1,
  o: 1,
  C: 1,
  y: 1,
  q: 1,
  p: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofInt(unsafeArray) {
  this.bN = null;
  this.bN = unsafeArray;
}
$p = $c_sci_ArraySeq$ofInt.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofInt;
/** @constructor */
function $h_sci_ArraySeq$ofInt() {
}
$h_sci_ArraySeq$ofInt.prototype = $p;
$p.p = (function() {
  return this.bN.a.length;
});
$p.F = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.fR(this.bN, this$1.V);
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.bN);
});
$p.cE = (function(i) {
  return this.bN.a[i];
});
$p.v = (function(v1) {
  return this.cE((v1 | 0));
});
$p.o = (function(i) {
  return this.cE(i);
});
$p.ar = (function() {
  return this.bN;
});
var $d_sci_ArraySeq$ofInt = new $TypeData().i($c_sci_ArraySeq$ofInt, "scala.collection.immutable.ArraySeq$ofInt", ({
  ce: 1,
  R: 1,
  v: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  w: 1,
  s: 1,
  x: 1,
  B: 1,
  n: 1,
  o: 1,
  C: 1,
  y: 1,
  q: 1,
  p: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofLong(unsafeArray) {
  this.bO = null;
  this.bO = unsafeArray;
}
$p = $c_sci_ArraySeq$ofLong.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofLong;
/** @constructor */
function $h_sci_ArraySeq$ofLong() {
}
$h_sci_ArraySeq$ofLong.prototype = $p;
$p.p = (function() {
  return this.bO.a.length;
});
$p.F = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.fS(this.bO, this$1.V);
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.bO);
});
$p.cF = (function(i) {
  return this.bO.a[i];
});
$p.v = (function(v1) {
  return this.cF((v1 | 0));
});
$p.o = (function(i) {
  return this.cF(i);
});
$p.ar = (function() {
  return this.bO;
});
var $d_sci_ArraySeq$ofLong = new $TypeData().i($c_sci_ArraySeq$ofLong, "scala.collection.immutable.ArraySeq$ofLong", ({
  cf: 1,
  R: 1,
  v: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  w: 1,
  s: 1,
  x: 1,
  B: 1,
  n: 1,
  o: 1,
  C: 1,
  y: 1,
  q: 1,
  p: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.b5 = null;
  this.b5 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.hc = (function() {
  return $m_s_reflect_ClassTag$().h5($objectGetClass(this.b5).P.Q());
});
$p.p = (function() {
  return this.b5.a.length;
});
$p.o = (function(i) {
  return this.b5.a[i];
});
$p.F = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.fM(this.b5, this$1.V);
});
$p.j = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.b5);
});
$p.v = (function(v1) {
  return this.o((v1 | 0));
});
$p.ar = (function() {
  return this.b5;
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aI)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  aI: 1,
  R: 1,
  v: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  w: 1,
  s: 1,
  x: 1,
  B: 1,
  n: 1,
  o: 1,
  C: 1,
  y: 1,
  q: 1,
  p: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofShort(unsafeArray) {
  this.bP = null;
  this.bP = unsafeArray;
}
$p = $c_sci_ArraySeq$ofShort.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofShort;
/** @constructor */
function $h_sci_ArraySeq$ofShort() {
}
$h_sci_ArraySeq$ofShort.prototype = $p;
$p.p = (function() {
  return this.bP.a.length;
});
$p.cA = (function(i) {
  return this.bP.a[i];
});
$p.F = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.fT(this.bP, this$1.V);
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.bP);
});
$p.v = (function(v1) {
  return this.cA((v1 | 0));
});
$p.o = (function(i) {
  return this.cA(i);
});
$p.ar = (function() {
  return this.bP;
});
var $d_sci_ArraySeq$ofShort = new $TypeData().i($c_sci_ArraySeq$ofShort, "scala.collection.immutable.ArraySeq$ofShort", ({
  cg: 1,
  R: 1,
  v: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  w: 1,
  s: 1,
  x: 1,
  B: 1,
  n: 1,
  o: 1,
  C: 1,
  y: 1,
  q: 1,
  p: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofUnit(unsafeArray) {
  this.co = null;
  this.co = unsafeArray;
}
$p = $c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $p;
$p.p = (function() {
  return this.co.a.length;
});
$p.F = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.fU(this.co, this$1.V);
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.co);
});
$p.cG = (function(i) {
});
$p.v = (function(v1) {
  this.cG((v1 | 0));
});
$p.o = (function(i) {
  this.cG(i);
});
$p.ar = (function() {
  return this.co;
});
var $d_sci_ArraySeq$ofUnit = new $TypeData().i($c_sci_ArraySeq$ofUnit, "scala.collection.immutable.ArraySeq$ofUnit", ({
  ch: 1,
  R: 1,
  v: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  w: 1,
  s: 1,
  x: 1,
  B: 1,
  n: 1,
  o: 1,
  C: 1,
  y: 1,
  q: 1,
  p: 1,
  U: 1,
  a: 1
}));
/** @constructor */
function $c_sci_List() {
}
$p = $c_sci_List.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $p;
$p.j = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$p.aR = (function() {
  return "LinearSeq";
});
$p.o = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.cJ = (function(z, op) {
  return $f_sc_LinearSeqOps__foldLeft__O__F2__O(this, z, op);
});
$p.gN = (function(prefix) {
  if (this.Y()) {
    return prefix;
  } else if (prefix.Y()) {
    return this;
  } else {
    var result = new $c_sci_$colon$colon(prefix.aW(), this);
    var curr = result;
    var that = prefix.aZ();
    while ((!that.Y())) {
      var temp = new $c_sci_$colon$colon(that.aW(), this);
      curr.b4 = temp;
      curr = temp;
      that = that.aZ();
    }
    return result;
  }
});
$p.Y = (function() {
  return (this === $m_sci_Nil$());
});
$p.hN = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    return this.gN(prefix);
  }
  if ((prefix.R() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    if (this.Y()) {
      return prefix.gj();
    }
  }
  var iter = prefix.j();
  if (iter.y()) {
    var result = new $c_sci_$colon$colon(iter.h(), this);
    var curr = result;
    while (iter.y()) {
      var temp = new $c_sci_$colon$colon(iter.h(), this);
      curr.b4 = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$p.p = (function() {
  var these = this;
  var len = 0;
  while ((!these.Y())) {
    len = ((1 + len) | 0);
    these = these.aZ();
  }
  return len;
});
$p.dZ = (function(p) {
  var these = this;
  while ((!these.Y())) {
    if ((!(!p.v(these.aW())))) {
      return new $c_s_Some(these.aW());
    }
    these = these.aZ();
  }
  return $m_s_None$();
});
$p.bp = (function() {
  return "List";
});
$p.v = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.hb = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.bF = (function() {
  return $m_sci_List$();
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
/** @constructor */
function $c_sci_VectorImpl() {
  this.i = null;
}
$p = $c_sci_VectorImpl.prototype = new $h_sci_Vector();
$p.constructor = $c_sci_VectorImpl;
/** @constructor */
function $h_sci_VectorImpl() {
}
$h_sci_VectorImpl.prototype = $p;
/** @constructor */
function $c_scm_ArraySeq$ofBoolean(array) {
  this.bZ = null;
  this.bZ = array;
}
$p = $c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
$h_scm_ArraySeq$ofBoolean.prototype = $p;
$p.p = (function() {
  return this.bZ.a.length;
});
$p.F = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.fV(this.bZ, this$1.V);
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.bZ);
});
$p.cH = (function(index) {
  return this.bZ.a[index];
});
$p.v = (function(v1) {
  return this.cH((v1 | 0));
});
$p.o = (function(i) {
  return this.cH(i);
});
$p.aM = (function() {
  return this.bZ;
});
var $d_scm_ArraySeq$ofBoolean = new $TypeData().i($c_scm_ArraySeq$ofBoolean, "scala.collection.mutable.ArraySeq$ofBoolean", ({
  cC: 1,
  V: 1,
  F: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  I: 1,
  H: 1,
  J: 1,
  G: 1,
  z: 1,
  N: 1,
  n: 1,
  o: 1,
  O: 1,
  q: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofByte(array) {
  this.c0 = null;
  this.c0 = array;
}
$p = $c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
$h_scm_ArraySeq$ofByte.prototype = $p;
$p.p = (function() {
  return this.c0.a.length;
});
$p.cy = (function(index) {
  return this.c0.a[index];
});
$p.F = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.fN(this.c0, this$1.V);
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.c0);
});
$p.v = (function(v1) {
  return this.cy((v1 | 0));
});
$p.o = (function(i) {
  return this.cy(i);
});
$p.aM = (function() {
  return this.c0;
});
var $d_scm_ArraySeq$ofByte = new $TypeData().i($c_scm_ArraySeq$ofByte, "scala.collection.mutable.ArraySeq$ofByte", ({
  cD: 1,
  V: 1,
  F: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  I: 1,
  H: 1,
  J: 1,
  G: 1,
  z: 1,
  N: 1,
  n: 1,
  o: 1,
  O: 1,
  q: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofChar(array) {
  this.aL = null;
  this.aL = array;
}
$p = $c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
$h_scm_ArraySeq$ofChar.prototype = $p;
$p.p = (function() {
  return this.aL.a.length;
});
$p.cz = (function(index) {
  return this.aL.a[index];
});
$p.F = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.fO(this.aL, this$1.V);
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.aL);
});
$p.cx = (function(sb, start, sep, end) {
  var jsb = sb.ao;
  if ((start.length !== 0)) {
    jsb.s = (("" + jsb.s) + start);
  }
  var len = this.aL.a.length;
  if ((len !== 0)) {
    if ((sep === "")) {
      jsb.h2(this.aL);
    } else {
      jsb.p();
      var c = this.aL.a[0];
      var str = ("" + $cToS(c));
      jsb.s = (jsb.s + str);
      var i = 1;
      while ((i < len)) {
        jsb.s = (("" + jsb.s) + sep);
        var c$1 = this.aL.a[i];
        var str$1 = ("" + $cToS(c$1));
        jsb.s = (jsb.s + str$1);
        i = ((1 + i) | 0);
      }
    }
  }
  if ((end.length !== 0)) {
    jsb.s = (("" + jsb.s) + end);
  }
  return sb;
});
$p.v = (function(v1) {
  return $bC(this.cz((v1 | 0)));
});
$p.o = (function(i) {
  return $bC(this.cz(i));
});
$p.aM = (function() {
  return this.aL;
});
var $d_scm_ArraySeq$ofChar = new $TypeData().i($c_scm_ArraySeq$ofChar, "scala.collection.mutable.ArraySeq$ofChar", ({
  cE: 1,
  V: 1,
  F: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  I: 1,
  H: 1,
  J: 1,
  G: 1,
  z: 1,
  N: 1,
  n: 1,
  o: 1,
  O: 1,
  q: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofDouble(array) {
  this.c1 = null;
  this.c1 = array;
}
$p = $c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
$h_scm_ArraySeq$ofDouble.prototype = $p;
$p.p = (function() {
  return this.c1.a.length;
});
$p.F = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.fP(this.c1, this$1.V);
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.c1);
});
$p.cC = (function(index) {
  return this.c1.a[index];
});
$p.v = (function(v1) {
  return this.cC((v1 | 0));
});
$p.o = (function(i) {
  return this.cC(i);
});
$p.aM = (function() {
  return this.c1;
});
var $d_scm_ArraySeq$ofDouble = new $TypeData().i($c_scm_ArraySeq$ofDouble, "scala.collection.mutable.ArraySeq$ofDouble", ({
  cF: 1,
  V: 1,
  F: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  I: 1,
  H: 1,
  J: 1,
  G: 1,
  z: 1,
  N: 1,
  n: 1,
  o: 1,
  O: 1,
  q: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofFloat(array) {
  this.c2 = null;
  this.c2 = array;
}
$p = $c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
$h_scm_ArraySeq$ofFloat.prototype = $p;
$p.p = (function() {
  return this.c2.a.length;
});
$p.F = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.fQ(this.c2, this$1.V);
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.c2);
});
$p.cD = (function(index) {
  return this.c2.a[index];
});
$p.v = (function(v1) {
  return this.cD((v1 | 0));
});
$p.o = (function(i) {
  return this.cD(i);
});
$p.aM = (function() {
  return this.c2;
});
var $d_scm_ArraySeq$ofFloat = new $TypeData().i($c_scm_ArraySeq$ofFloat, "scala.collection.mutable.ArraySeq$ofFloat", ({
  cG: 1,
  V: 1,
  F: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  I: 1,
  H: 1,
  J: 1,
  G: 1,
  z: 1,
  N: 1,
  n: 1,
  o: 1,
  O: 1,
  q: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofInt(array) {
  this.c3 = null;
  this.c3 = array;
}
$p = $c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
$h_scm_ArraySeq$ofInt.prototype = $p;
$p.p = (function() {
  return this.c3.a.length;
});
$p.F = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.fR(this.c3, this$1.V);
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.c3);
});
$p.cE = (function(index) {
  return this.c3.a[index];
});
$p.v = (function(v1) {
  return this.cE((v1 | 0));
});
$p.o = (function(i) {
  return this.cE(i);
});
$p.aM = (function() {
  return this.c3;
});
var $d_scm_ArraySeq$ofInt = new $TypeData().i($c_scm_ArraySeq$ofInt, "scala.collection.mutable.ArraySeq$ofInt", ({
  cH: 1,
  V: 1,
  F: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  I: 1,
  H: 1,
  J: 1,
  G: 1,
  z: 1,
  N: 1,
  n: 1,
  o: 1,
  O: 1,
  q: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofLong(array) {
  this.c4 = null;
  this.c4 = array;
}
$p = $c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
$h_scm_ArraySeq$ofLong.prototype = $p;
$p.p = (function() {
  return this.c4.a.length;
});
$p.F = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.fS(this.c4, this$1.V);
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.c4);
});
$p.cF = (function(index) {
  return this.c4.a[index];
});
$p.v = (function(v1) {
  return this.cF((v1 | 0));
});
$p.o = (function(i) {
  return this.cF(i);
});
$p.aM = (function() {
  return this.c4;
});
var $d_scm_ArraySeq$ofLong = new $TypeData().i($c_scm_ArraySeq$ofLong, "scala.collection.mutable.ArraySeq$ofLong", ({
  cI: 1,
  V: 1,
  F: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  I: 1,
  H: 1,
  J: 1,
  G: 1,
  z: 1,
  N: 1,
  n: 1,
  o: 1,
  O: 1,
  q: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.c5 = null;
  this.c5 = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.p = (function() {
  return this.c5.a.length;
});
$p.o = (function(index) {
  return this.c5.a[index];
});
$p.F = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.fM(this.c5, this$1.V);
});
$p.j = (function() {
  return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.c5);
});
$p.v = (function(v1) {
  return this.o((v1 | 0));
});
$p.aM = (function() {
  return this.c5;
});
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  cJ: 1,
  V: 1,
  F: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  I: 1,
  H: 1,
  J: 1,
  G: 1,
  z: 1,
  N: 1,
  n: 1,
  o: 1,
  O: 1,
  q: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofShort(array) {
  this.c6 = null;
  this.c6 = array;
}
$p = $c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
$h_scm_ArraySeq$ofShort.prototype = $p;
$p.p = (function() {
  return this.c6.a.length;
});
$p.cA = (function(index) {
  return this.c6.a[index];
});
$p.F = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.fT(this.c6, this$1.V);
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.c6);
});
$p.v = (function(v1) {
  return this.cA((v1 | 0));
});
$p.o = (function(i) {
  return this.cA(i);
});
$p.aM = (function() {
  return this.c6;
});
var $d_scm_ArraySeq$ofShort = new $TypeData().i($c_scm_ArraySeq$ofShort, "scala.collection.mutable.ArraySeq$ofShort", ({
  cK: 1,
  V: 1,
  F: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  I: 1,
  H: 1,
  J: 1,
  G: 1,
  z: 1,
  N: 1,
  n: 1,
  o: 1,
  O: 1,
  q: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofUnit(array) {
  this.cr = null;
  this.cr = array;
}
$p = $c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $p;
$p.p = (function() {
  return this.cr.a.length;
});
$p.F = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.fU(this.cr, this$1.V);
});
$p.j = (function() {
  return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.cr);
});
$p.cG = (function(index) {
});
$p.v = (function(v1) {
  this.cG((v1 | 0));
});
$p.o = (function(i) {
  this.cG(i);
});
$p.aM = (function() {
  return this.cr;
});
var $d_scm_ArraySeq$ofUnit = new $TypeData().i($c_scm_ArraySeq$ofUnit, "scala.collection.mutable.ArraySeq$ofUnit", ({
  cL: 1,
  V: 1,
  F: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  I: 1,
  H: 1,
  J: 1,
  G: 1,
  z: 1,
  N: 1,
  n: 1,
  o: 1,
  O: 1,
  q: 1,
  p: 1,
  a: 1
}));
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.r = suffix1;
  $thiz.z = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz;
}
/** @constructor */
function $c_sci_BigVector() {
  this.i = null;
  this.r = null;
  this.z = 0;
}
$p = $c_sci_BigVector.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_BigVector;
/** @constructor */
function $h_sci_BigVector() {
}
$h_sci_BigVector.prototype = $p;
function $isArrayOf_sci_BigVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a5)));
}
/** @constructor */
function $c_sci_Vector1(_data1) {
  this.i = null;
  $ct_sci_Vector__AO__(this, _data1);
}
$p = $c_sci_Vector1.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_Vector1;
/** @constructor */
function $h_sci_Vector1() {
}
$h_sci_Vector1.prototype = $p;
$p.o = (function(index) {
  if (((index >= 0) && (index < this.i.a.length))) {
    return this.i.a[index];
  } else {
    throw this.a7(index);
  }
});
$p.bq = (function(f) {
  return new $c_sci_Vector1($m_sci_VectorStatics$().al(this.i, f));
});
$p.bH = (function() {
  if ((this.i.a.length === 1)) {
    return $m_sci_Vector0$();
  } else {
    var a = this.i;
    return new $c_sci_Vector1($m_ju_Arrays$().w(a, 1, a.a.length));
  }
});
$p.b1 = (function() {
  return 1;
});
$p.b0 = (function(idx) {
  return this.i;
});
$p.v = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.i.a.length))) {
    return this.i.a[index];
  } else {
    throw this.a7(index);
  }
});
var $d_sci_Vector1 = new $TypeData().i($c_sci_Vector1, "scala.collection.immutable.Vector1", ({
  cn: 1,
  a6: 1,
  a2: 1,
  v: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  w: 1,
  s: 1,
  x: 1,
  B: 1,
  n: 1,
  o: 1,
  C: 1,
  y: 1,
  q: 1,
  p: 1,
  Q: 1,
  a: 1
}));
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.dD = null;
  this.b4 = null;
  this.dD = head;
  this.b4 = next;
}
$p = $c_sci_$colon$colon.prototype = new $h_sci_List();
$p.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $p;
$p.aW = (function() {
  return this.dD;
});
$p.bt = (function() {
  return "::";
});
$p.br = (function() {
  return 2;
});
$p.bs = (function(x$1) {
  switch (x$1) {
    case 0: {
      return this.dD;
      break;
    }
    case 1: {
      return this.b4;
      break;
    }
    default: {
      return $m_sr_Statics$().d7(x$1);
    }
  }
});
$p.cd = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.aZ = (function() {
  return this.b4;
});
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  c7: 1,
  ag: 1,
  v: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  w: 1,
  s: 1,
  x: 1,
  aJ: 1,
  aC: 1,
  aD: 1,
  aK: 1,
  aG: 1,
  q: 1,
  p: 1,
  y: 1,
  Q: 1,
  a: 1,
  a3: 1
}));
/** @constructor */
function $c_sci_Nil$() {
}
$p = $c_sci_Nil$.prototype = new $h_sci_List();
$p.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
}
$h_sci_Nil$.prototype = $p;
$p.ho = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.hX = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.R = (function() {
  return 0;
});
$p.j = (function() {
  return $m_sc_Iterator$().Z;
});
$p.bt = (function() {
  return "Nil";
});
$p.br = (function() {
  return 0;
});
$p.bs = (function(x$1) {
  return $m_sr_Statics$().d7(x$1);
});
$p.cd = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.aZ = (function() {
  this.hX();
});
$p.aW = (function() {
  this.ho();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  ck: 1,
  ag: 1,
  v: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  w: 1,
  s: 1,
  x: 1,
  aJ: 1,
  aC: 1,
  aD: 1,
  aK: 1,
  aG: 1,
  q: 1,
  p: 1,
  y: 1,
  Q: 1,
  a: 1,
  a3: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
/** @constructor */
function $c_sci_Vector0$() {
  this.i = null;
  this.r = null;
  this.z = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().dJ, $m_sci_VectorStatics$().dJ, 0);
}
$p = $c_sci_Vector0$.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
}
$h_sci_Vector0$.prototype = $p;
$p.fL = (function(index) {
  throw this.a7(index);
});
$p.bq = (function(f) {
  return this;
});
$p.bH = (function() {
  throw new $c_jl_UnsupportedOperationException("empty.tail");
});
$p.b1 = (function() {
  return 0;
});
$p.b0 = (function(idx) {
  return null;
});
$p.a7 = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"));
});
$p.v = (function(v1) {
  this.fL((v1 | 0));
});
$p.o = (function(i) {
  this.fL(i);
});
var $d_sci_Vector0$ = new $TypeData().i($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
  cm: 1,
  a5: 1,
  a6: 1,
  a2: 1,
  v: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  w: 1,
  s: 1,
  x: 1,
  B: 1,
  n: 1,
  o: 1,
  C: 1,
  y: 1,
  q: 1,
  p: 1,
  Q: 1,
  a: 1
}));
var $n_sci_Vector0$;
function $m_sci_Vector0$() {
  if ((!$n_sci_Vector0$)) {
    $n_sci_Vector0$ = new $c_sci_Vector0$();
  }
  return $n_sci_Vector0$;
}
/** @constructor */
function $c_sci_Vector2(_prefix1, len1, data2, _suffix1, _length0) {
  this.i = null;
  this.r = null;
  this.z = 0;
  this.bx = 0;
  this.au = null;
  this.bx = len1;
  this.au = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector2.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
}
$h_sci_Vector2.prototype = $p;
$p.o = (function(index) {
  if (((index >= 0) && (index < this.z))) {
    var io = ((index - this.bx) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.au.a.length) ? this.au.a[i2].a[i1] : this.r.a[(31 & io)]);
    } else {
      return this.i.a[index];
    }
  } else {
    throw this.a7(index);
  }
});
$p.bq = (function(f) {
  var x$1 = $m_sci_VectorStatics$().al(this.i, f);
  var x$2 = $m_sci_VectorStatics$().Q(2, this.au, f);
  var x$3 = $m_sci_VectorStatics$().al(this.r, f);
  return new $c_sci_Vector2(x$1, this.bx, x$2, x$3, this.z);
});
$p.aY = (function(lo, hi) {
  var b = new $c_sci_VectorSliceBuilder(lo, hi);
  b.E(1, this.i);
  b.E(2, this.au);
  b.E(1, this.r);
  return b.aQ();
});
$p.bH = (function() {
  if ((this.bx > 1)) {
    var a = this.i;
    var x$1 = $m_ju_Arrays$().w(a, 1, a.a.length);
    var x$2 = (((-1) + this.bx) | 0);
    var x$3 = (((-1) + this.z) | 0);
    return new $c_sci_Vector2(x$1, x$2, this.au, this.r, x$3);
  } else {
    return this.aY(1, this.z);
  }
});
$p.b1 = (function() {
  return 3;
});
$p.b0 = (function(idx) {
  switch (idx) {
    case 0: {
      return this.i;
      break;
    }
    case 1: {
      return this.au;
      break;
    }
    case 2: {
      return this.r;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.v = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.z))) {
    var io = ((index - this.bx) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.au.a.length) ? this.au.a[i2].a[i1] : this.r.a[(31 & io)]);
    } else {
      return this.i.a[index];
    }
  } else {
    throw this.a7(index);
  }
});
var $d_sci_Vector2 = new $TypeData().i($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
  co: 1,
  a5: 1,
  a6: 1,
  a2: 1,
  v: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  w: 1,
  s: 1,
  x: 1,
  B: 1,
  n: 1,
  o: 1,
  C: 1,
  y: 1,
  q: 1,
  p: 1,
  Q: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.i = null;
  this.r = null;
  this.z = 0;
  this.b8 = 0;
  this.b9 = null;
  this.bS = 0;
  this.av = null;
  this.aw = null;
  this.b8 = len1;
  this.b9 = prefix2;
  this.bS = len12;
  this.av = data3;
  this.aw = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector3.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
}
$h_sci_Vector3.prototype = $p;
$p.o = (function(index) {
  if (((index >= 0) && (index < this.z))) {
    var io = ((index - this.bS) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.av.a.length) ? this.av.a[i3].a[i2].a[i1] : ((i2 < this.aw.a.length) ? this.aw.a[i2].a[i1] : this.r.a[i1]));
    } else if ((index >= this.b8)) {
      var io$2 = ((index - this.b8) | 0);
      return this.b9.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.i.a[index];
    }
  } else {
    throw this.a7(index);
  }
});
$p.bq = (function(f) {
  var x$1 = $m_sci_VectorStatics$().al(this.i, f);
  var x$2 = $m_sci_VectorStatics$().Q(2, this.b9, f);
  var x$3 = $m_sci_VectorStatics$().Q(3, this.av, f);
  var x$4 = $m_sci_VectorStatics$().Q(2, this.aw, f);
  var x$5 = $m_sci_VectorStatics$().al(this.r, f);
  return new $c_sci_Vector3(x$1, this.b8, x$2, this.bS, x$3, x$4, x$5, this.z);
});
$p.aY = (function(lo, hi) {
  var b = new $c_sci_VectorSliceBuilder(lo, hi);
  b.E(1, this.i);
  b.E(2, this.b9);
  b.E(3, this.av);
  b.E(2, this.aw);
  b.E(1, this.r);
  return b.aQ();
});
$p.bH = (function() {
  if ((this.b8 > 1)) {
    var a = this.i;
    var x$1 = $m_ju_Arrays$().w(a, 1, a.a.length);
    var x$2 = (((-1) + this.b8) | 0);
    var x$3 = (((-1) + this.bS) | 0);
    var x$4 = (((-1) + this.z) | 0);
    return new $c_sci_Vector3(x$1, x$2, this.b9, x$3, this.av, this.aw, this.r, x$4);
  } else {
    return this.aY(1, this.z);
  }
});
$p.b1 = (function() {
  return 5;
});
$p.b0 = (function(idx) {
  switch (idx) {
    case 0: {
      return this.i;
      break;
    }
    case 1: {
      return this.b9;
      break;
    }
    case 2: {
      return this.av;
      break;
    }
    case 3: {
      return this.aw;
      break;
    }
    case 4: {
      return this.r;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.v = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.z))) {
    var io = ((index - this.bS) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.av.a.length) ? this.av.a[i3].a[i2].a[i1] : ((i2 < this.aw.a.length) ? this.aw.a[i2].a[i1] : this.r.a[i1]));
    } else if ((index >= this.b8)) {
      var io$2 = ((index - this.b8) | 0);
      return this.b9.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.i.a[index];
    }
  } else {
    throw this.a7(index);
  }
});
var $d_sci_Vector3 = new $TypeData().i($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
  cp: 1,
  a5: 1,
  a6: 1,
  a2: 1,
  v: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  w: 1,
  s: 1,
  x: 1,
  B: 1,
  n: 1,
  o: 1,
  C: 1,
  y: 1,
  q: 1,
  p: 1,
  Q: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.i = null;
  this.r = null;
  this.z = 0;
  this.ba = 0;
  this.bb = null;
  this.by = 0;
  this.bc = null;
  this.bT = 0;
  this.ax = null;
  this.az = null;
  this.ay = null;
  this.ba = len1;
  this.bb = prefix2;
  this.by = len12;
  this.bc = prefix3;
  this.bT = len123;
  this.ax = data4;
  this.az = suffix3;
  this.ay = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector4.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
}
$h_sci_Vector4.prototype = $p;
$p.o = (function(index) {
  if (((index >= 0) && (index < this.z))) {
    var io = ((index - this.bT) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.ax.a.length) ? this.ax.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.az.a.length) ? this.az.a[i3].a[i2].a[i1] : ((i2 < this.ay.a.length) ? this.ay.a[i2].a[i1] : this.r.a[i1])));
    } else if ((index >= this.by)) {
      var io$2 = ((index - this.by) | 0);
      return this.bc.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ba)) {
      var io$3 = ((index - this.ba) | 0);
      return this.bb.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.i.a[index];
    }
  } else {
    throw this.a7(index);
  }
});
$p.bq = (function(f) {
  var x$1 = $m_sci_VectorStatics$().al(this.i, f);
  var x$2 = $m_sci_VectorStatics$().Q(2, this.bb, f);
  var x$3 = $m_sci_VectorStatics$().Q(3, this.bc, f);
  var x$4 = $m_sci_VectorStatics$().Q(4, this.ax, f);
  var x$5 = $m_sci_VectorStatics$().Q(3, this.az, f);
  var x$6 = $m_sci_VectorStatics$().Q(2, this.ay, f);
  var x$7 = $m_sci_VectorStatics$().al(this.r, f);
  return new $c_sci_Vector4(x$1, this.ba, x$2, this.by, x$3, this.bT, x$4, x$5, x$6, x$7, this.z);
});
$p.aY = (function(lo, hi) {
  var b = new $c_sci_VectorSliceBuilder(lo, hi);
  b.E(1, this.i);
  b.E(2, this.bb);
  b.E(3, this.bc);
  b.E(4, this.ax);
  b.E(3, this.az);
  b.E(2, this.ay);
  b.E(1, this.r);
  return b.aQ();
});
$p.bH = (function() {
  if ((this.ba > 1)) {
    var a = this.i;
    var x$1 = $m_ju_Arrays$().w(a, 1, a.a.length);
    var x$2 = (((-1) + this.ba) | 0);
    var x$3 = (((-1) + this.by) | 0);
    var x$4 = (((-1) + this.bT) | 0);
    var x$5 = (((-1) + this.z) | 0);
    return new $c_sci_Vector4(x$1, x$2, this.bb, x$3, this.bc, x$4, this.ax, this.az, this.ay, this.r, x$5);
  } else {
    return this.aY(1, this.z);
  }
});
$p.b1 = (function() {
  return 7;
});
$p.b0 = (function(idx) {
  switch (idx) {
    case 0: {
      return this.i;
      break;
    }
    case 1: {
      return this.bb;
      break;
    }
    case 2: {
      return this.bc;
      break;
    }
    case 3: {
      return this.ax;
      break;
    }
    case 4: {
      return this.az;
      break;
    }
    case 5: {
      return this.ay;
      break;
    }
    case 6: {
      return this.r;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.v = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.z))) {
    var io = ((index - this.bT) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.ax.a.length) ? this.ax.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.az.a.length) ? this.az.a[i3].a[i2].a[i1] : ((i2 < this.ay.a.length) ? this.ay.a[i2].a[i1] : this.r.a[i1])));
    } else if ((index >= this.by)) {
      var io$2 = ((index - this.by) | 0);
      return this.bc.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ba)) {
      var io$3 = ((index - this.ba) | 0);
      return this.bb.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.i.a[index];
    }
  } else {
    throw this.a7(index);
  }
});
var $d_sci_Vector4 = new $TypeData().i($c_sci_Vector4, "scala.collection.immutable.Vector4", ({
  cq: 1,
  a5: 1,
  a6: 1,
  a2: 1,
  v: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  w: 1,
  s: 1,
  x: 1,
  B: 1,
  n: 1,
  o: 1,
  C: 1,
  y: 1,
  q: 1,
  p: 1,
  Q: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.i = null;
  this.r = null;
  this.z = 0;
  this.bd = 0;
  this.be = null;
  this.bz = 0;
  this.bf = null;
  this.bA = 0;
  this.bg = null;
  this.bU = 0;
  this.aA = null;
  this.aD = null;
  this.aC = null;
  this.aB = null;
  this.bd = len1;
  this.be = prefix2;
  this.bz = len12;
  this.bf = prefix3;
  this.bA = len123;
  this.bg = prefix4;
  this.bU = len1234;
  this.aA = data5;
  this.aD = suffix4;
  this.aC = suffix3;
  this.aB = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector5.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
}
$h_sci_Vector5.prototype = $p;
$p.o = (function(index) {
  if (((index >= 0) && (index < this.z))) {
    var io = ((index - this.bU) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.aA.a.length) ? this.aA.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.aD.a.length) ? this.aD.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aC.a.length) ? this.aC.a[i3].a[i2].a[i1] : ((i2 < this.aB.a.length) ? this.aB.a[i2].a[i1] : this.r.a[i1]))));
    } else if ((index >= this.bA)) {
      var io$2 = ((index - this.bA) | 0);
      return this.bg.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.bz)) {
      var io$3 = ((index - this.bz) | 0);
      return this.bf.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.bd)) {
      var io$4 = ((index - this.bd) | 0);
      return this.be.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.i.a[index];
    }
  } else {
    throw this.a7(index);
  }
});
$p.bq = (function(f) {
  var x$1 = $m_sci_VectorStatics$().al(this.i, f);
  var x$2 = $m_sci_VectorStatics$().Q(2, this.be, f);
  var x$3 = $m_sci_VectorStatics$().Q(3, this.bf, f);
  var x$4 = $m_sci_VectorStatics$().Q(4, this.bg, f);
  var x$5 = $m_sci_VectorStatics$().Q(5, this.aA, f);
  var x$6 = $m_sci_VectorStatics$().Q(4, this.aD, f);
  var x$7 = $m_sci_VectorStatics$().Q(3, this.aC, f);
  var x$8 = $m_sci_VectorStatics$().Q(2, this.aB, f);
  var x$9 = $m_sci_VectorStatics$().al(this.r, f);
  return new $c_sci_Vector5(x$1, this.bd, x$2, this.bz, x$3, this.bA, x$4, this.bU, x$5, x$6, x$7, x$8, x$9, this.z);
});
$p.aY = (function(lo, hi) {
  var b = new $c_sci_VectorSliceBuilder(lo, hi);
  b.E(1, this.i);
  b.E(2, this.be);
  b.E(3, this.bf);
  b.E(4, this.bg);
  b.E(5, this.aA);
  b.E(4, this.aD);
  b.E(3, this.aC);
  b.E(2, this.aB);
  b.E(1, this.r);
  return b.aQ();
});
$p.bH = (function() {
  if ((this.bd > 1)) {
    var a = this.i;
    var x$1 = $m_ju_Arrays$().w(a, 1, a.a.length);
    var x$2 = (((-1) + this.bd) | 0);
    var x$3 = (((-1) + this.bz) | 0);
    var x$4 = (((-1) + this.bA) | 0);
    var x$5 = (((-1) + this.bU) | 0);
    var x$6 = (((-1) + this.z) | 0);
    return new $c_sci_Vector5(x$1, x$2, this.be, x$3, this.bf, x$4, this.bg, x$5, this.aA, this.aD, this.aC, this.aB, this.r, x$6);
  } else {
    return this.aY(1, this.z);
  }
});
$p.b1 = (function() {
  return 9;
});
$p.b0 = (function(idx) {
  switch (idx) {
    case 0: {
      return this.i;
      break;
    }
    case 1: {
      return this.be;
      break;
    }
    case 2: {
      return this.bf;
      break;
    }
    case 3: {
      return this.bg;
      break;
    }
    case 4: {
      return this.aA;
      break;
    }
    case 5: {
      return this.aD;
      break;
    }
    case 6: {
      return this.aC;
      break;
    }
    case 7: {
      return this.aB;
      break;
    }
    case 8: {
      return this.r;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.v = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.z))) {
    var io = ((index - this.bU) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.aA.a.length) ? this.aA.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.aD.a.length) ? this.aD.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aC.a.length) ? this.aC.a[i3].a[i2].a[i1] : ((i2 < this.aB.a.length) ? this.aB.a[i2].a[i1] : this.r.a[i1]))));
    } else if ((index >= this.bA)) {
      var io$2 = ((index - this.bA) | 0);
      return this.bg.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.bz)) {
      var io$3 = ((index - this.bz) | 0);
      return this.bf.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.bd)) {
      var io$4 = ((index - this.bd) | 0);
      return this.be.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.i.a[index];
    }
  } else {
    throw this.a7(index);
  }
});
var $d_sci_Vector5 = new $TypeData().i($c_sci_Vector5, "scala.collection.immutable.Vector5", ({
  cr: 1,
  a5: 1,
  a6: 1,
  a2: 1,
  v: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  w: 1,
  s: 1,
  x: 1,
  B: 1,
  n: 1,
  o: 1,
  C: 1,
  y: 1,
  q: 1,
  p: 1,
  Q: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.i = null;
  this.r = null;
  this.z = 0;
  this.bh = 0;
  this.bi = null;
  this.bB = 0;
  this.bj = null;
  this.bC = 0;
  this.bk = null;
  this.bD = 0;
  this.bl = null;
  this.bV = 0;
  this.aE = null;
  this.aI = null;
  this.aH = null;
  this.aG = null;
  this.aF = null;
  this.bh = len1;
  this.bi = prefix2;
  this.bB = len12;
  this.bj = prefix3;
  this.bC = len123;
  this.bk = prefix4;
  this.bD = len1234;
  this.bl = prefix5;
  this.bV = len12345;
  this.aE = data6;
  this.aI = suffix5;
  this.aH = suffix4;
  this.aG = suffix3;
  this.aF = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector6.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector6;
/** @constructor */
function $h_sci_Vector6() {
}
$h_sci_Vector6.prototype = $p;
$p.o = (function(index) {
  if (((index >= 0) && (index < this.z))) {
    var io = ((index - this.bV) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.aE.a.length) ? this.aE.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.aI.a.length) ? this.aI.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.aH.a.length) ? this.aH.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aG.a.length) ? this.aG.a[i3].a[i2].a[i1] : ((i2 < this.aF.a.length) ? this.aF.a[i2].a[i1] : this.r.a[i1])))));
    } else if ((index >= this.bD)) {
      var io$2 = ((index - this.bD) | 0);
      return this.bl.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.bC)) {
      var io$3 = ((index - this.bC) | 0);
      return this.bk.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.bB)) {
      var io$4 = ((index - this.bB) | 0);
      return this.bj.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.bh)) {
      var io$5 = ((index - this.bh) | 0);
      return this.bi.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.i.a[index];
    }
  } else {
    throw this.a7(index);
  }
});
$p.bq = (function(f) {
  var x$1 = $m_sci_VectorStatics$().al(this.i, f);
  var x$2 = $m_sci_VectorStatics$().Q(2, this.bi, f);
  var x$3 = $m_sci_VectorStatics$().Q(3, this.bj, f);
  var x$4 = $m_sci_VectorStatics$().Q(4, this.bk, f);
  var x$5 = $m_sci_VectorStatics$().Q(5, this.bl, f);
  var x$6 = $m_sci_VectorStatics$().Q(6, this.aE, f);
  var x$7 = $m_sci_VectorStatics$().Q(5, this.aI, f);
  var x$8 = $m_sci_VectorStatics$().Q(4, this.aH, f);
  var x$9 = $m_sci_VectorStatics$().Q(3, this.aG, f);
  var x$10 = $m_sci_VectorStatics$().Q(2, this.aF, f);
  var x$11 = $m_sci_VectorStatics$().al(this.r, f);
  return new $c_sci_Vector6(x$1, this.bh, x$2, this.bB, x$3, this.bC, x$4, this.bD, x$5, this.bV, x$6, x$7, x$8, x$9, x$10, x$11, this.z);
});
$p.aY = (function(lo, hi) {
  var b = new $c_sci_VectorSliceBuilder(lo, hi);
  b.E(1, this.i);
  b.E(2, this.bi);
  b.E(3, this.bj);
  b.E(4, this.bk);
  b.E(5, this.bl);
  b.E(6, this.aE);
  b.E(5, this.aI);
  b.E(4, this.aH);
  b.E(3, this.aG);
  b.E(2, this.aF);
  b.E(1, this.r);
  return b.aQ();
});
$p.bH = (function() {
  if ((this.bh > 1)) {
    var a = this.i;
    var x$1 = $m_ju_Arrays$().w(a, 1, a.a.length);
    var x$2 = (((-1) + this.bh) | 0);
    var x$3 = (((-1) + this.bB) | 0);
    var x$4 = (((-1) + this.bC) | 0);
    var x$5 = (((-1) + this.bD) | 0);
    var x$6 = (((-1) + this.bV) | 0);
    var x$7 = (((-1) + this.z) | 0);
    return new $c_sci_Vector6(x$1, x$2, this.bi, x$3, this.bj, x$4, this.bk, x$5, this.bl, x$6, this.aE, this.aI, this.aH, this.aG, this.aF, this.r, x$7);
  } else {
    return this.aY(1, this.z);
  }
});
$p.b1 = (function() {
  return 11;
});
$p.b0 = (function(idx) {
  switch (idx) {
    case 0: {
      return this.i;
      break;
    }
    case 1: {
      return this.bi;
      break;
    }
    case 2: {
      return this.bj;
      break;
    }
    case 3: {
      return this.bk;
      break;
    }
    case 4: {
      return this.bl;
      break;
    }
    case 5: {
      return this.aE;
      break;
    }
    case 6: {
      return this.aI;
      break;
    }
    case 7: {
      return this.aH;
      break;
    }
    case 8: {
      return this.aG;
      break;
    }
    case 9: {
      return this.aF;
      break;
    }
    case 10: {
      return this.r;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.v = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.z))) {
    var io = ((index - this.bV) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.aE.a.length) ? this.aE.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.aI.a.length) ? this.aI.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.aH.a.length) ? this.aH.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aG.a.length) ? this.aG.a[i3].a[i2].a[i1] : ((i2 < this.aF.a.length) ? this.aF.a[i2].a[i1] : this.r.a[i1])))));
    } else if ((index >= this.bD)) {
      var io$2 = ((index - this.bD) | 0);
      return this.bl.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.bC)) {
      var io$3 = ((index - this.bC) | 0);
      return this.bk.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.bB)) {
      var io$4 = ((index - this.bB) | 0);
      return this.bj.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.bh)) {
      var io$5 = ((index - this.bh) | 0);
      return this.bi.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.i.a[index];
    }
  } else {
    throw this.a7(index);
  }
});
var $d_sci_Vector6 = new $TypeData().i($c_sci_Vector6, "scala.collection.immutable.Vector6", ({
  cs: 1,
  a5: 1,
  a6: 1,
  a2: 1,
  v: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  w: 1,
  s: 1,
  x: 1,
  B: 1,
  n: 1,
  o: 1,
  C: 1,
  y: 1,
  q: 1,
  p: 1,
  Q: 1,
  a: 1
}));
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.ao = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.ao = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.aR = (function() {
  return "IndexedSeq";
});
$p.j = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.am = (function(size) {
});
$p.ap = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.p = (function() {
  return this.ao.p();
});
$p.R = (function() {
  return this.ao.p();
});
$p.gW = (function(x) {
  var this$1 = this.ao;
  var str = ("" + $cToS(x));
  this$1.s = (this$1.s + str);
  return this;
});
$p.k = (function() {
  return this.ao.s;
});
$p.aP = (function() {
  return this.ao.s;
});
$p.aj = (function(elem) {
  return this.gW($uC(elem));
});
$p.v = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.ao.fX(i));
});
$p.o = (function(i) {
  return $bC(this.ao.fX(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cT: 1,
  F: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  I: 1,
  H: 1,
  J: 1,
  G: 1,
  z: 1,
  aa: 1,
  Z: 1,
  X: 1,
  W: 1,
  N: 1,
  n: 1,
  o: 1,
  O: 1,
  ab: 1,
  a: 1
}));
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().e5($thiz);
  $thiz.ah = buf.ah;
  $thiz.aT = buf.aT;
  $thiz.d3 = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.d4 = ((1 + $thiz.d4) | 0);
  if ($thiz.d3) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.d4 = 0;
  this.ah = null;
  this.aT = null;
  this.d3 = false;
  this.ai = 0;
  this.d4 = 0;
  this.ah = $m_sci_Nil$();
  this.aT = null;
  this.d3 = false;
  this.ai = 0;
}
$p = $c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $p;
$p.am = (function(size) {
});
$p.j = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.ah.j(), new $c_sjsr_AnonFunction0((() => this.d4)));
});
$p.o = (function(i) {
  return $f_sc_LinearSeqOps__apply__I__O(this.ah, i);
});
$p.p = (function() {
  return this.ai;
});
$p.R = (function() {
  return this.ai;
});
$p.Y = (function() {
  return (this.ai === 0);
});
$p.gj = (function() {
  this.d3 = (!this.Y());
  return this.ah;
});
$p.h1 = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.ai === 0)) {
    this.ah = last1;
  } else {
    this.aT.b4 = last1;
  }
  this.aT = last1;
  this.ai = ((1 + this.ai) | 0);
  return this;
});
$p.e5 = (function(xs) {
  var it = xs.j();
  if (it.y()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon(it.h(), $m_sci_Nil$());
    this.ah = last0;
    while (it.y()) {
      var last1 = new $c_sci_$colon$colon(it.h(), $m_sci_Nil$());
      last0.b4 = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.ai = len;
    this.aT = last0;
  }
  return this;
});
$p.gS = (function(xs) {
  var it = xs.j();
  if (it.y()) {
    var fresh = new $c_scm_ListBuffer().e5(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.ai === 0)) {
      this.ah = fresh.ah;
    } else {
      this.aT.b4 = fresh.ah;
    }
    this.aT = fresh.aT;
    this.ai = ((this.ai + fresh.ai) | 0);
  }
  return this;
});
$p.aR = (function() {
  return "ListBuffer";
});
$p.ap = (function(elems) {
  return this.gS(elems);
});
$p.aj = (function(elem) {
  return this.h1(elem);
});
$p.aP = (function() {
  return this.gj();
});
$p.v = (function(v1) {
  var i = (v1 | 0);
  return $f_sc_LinearSeqOps__apply__I__O(this.ah, i);
});
$p.bF = (function() {
  return $m_scm_ListBuffer$();
});
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aO)));
}
var $d_scm_ListBuffer = new $TypeData().i($c_scm_ListBuffer, "scala.collection.mutable.ListBuffer", ({
  aO: 1,
  ah: 1,
  F: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  I: 1,
  H: 1,
  J: 1,
  G: 1,
  z: 1,
  ai: 1,
  X: 1,
  W: 1,
  aj: 1,
  q: 1,
  p: 1,
  aa: 1,
  Z: 1,
  Q: 1,
  a: 1
}));
function $p_scm_ArrayBuffer__foldl__I__I__O__F2__O($thiz, start, end, z, op) {
  while (true) {
    if ((start === end)) {
      return z;
    } else {
      var temp$start = ((1 + start) | 0);
      var temp$z = op.c9(z, $thiz.aK.a[start]);
      start = temp$start;
      z = temp$z;
    }
  }
}
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.bn = 0;
  $thiz.aK = initialElements;
  $thiz.U = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.bn = 0;
  this.aK = null;
  this.U = 0;
}
$p = $c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $p;
$p.j = (function() {
  return this.i4().j();
});
$p.R = (function() {
  return this.U;
});
$p.dY = (function(n) {
  this.aK = $m_scm_ArrayBuffer$().gh(this.aK, this.U, n);
});
$p.am = (function(size) {
  if (((size > this.U) && (size >= 1))) {
    this.dY(size);
  }
});
$p.o = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $m_scg_CommonErrors$().cK(n, (((-1) + this.U) | 0));
  }
  if ((hi > this.U)) {
    throw $m_scg_CommonErrors$().cK((((-1) + hi) | 0), (((-1) + this.U) | 0));
  }
  return this.aK.a[n];
});
$p.i2 = (function(index, elem) {
  var hi = ((1 + index) | 0);
  if ((index < 0)) {
    throw $m_scg_CommonErrors$().cK(index, (((-1) + this.U) | 0));
  }
  if ((hi > this.U)) {
    throw $m_scg_CommonErrors$().cK((((-1) + hi) | 0), (((-1) + this.U) | 0));
  }
  this.bn = ((1 + this.bn) | 0);
  this.aK.a[index] = elem;
});
$p.p = (function() {
  return this.U;
});
$p.i4 = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sjsr_AnonFunction0((() => this.bn)));
});
$p.gY = (function(elem) {
  this.bn = ((1 + this.bn) | 0);
  var newSize = ((1 + this.U) | 0);
  this.dY(newSize);
  this.U = newSize;
  this.i2((((-1) + this.U) | 0), elem);
  return this;
});
$p.fI = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.U;
    if ((elemsLength > 0)) {
      this.bn = ((1 + this.bn) | 0);
      this.dY(((this.U + elemsLength) | 0));
      $m_s_Array$().cI(elems.aK, 0, this.aK, this.U, elemsLength);
      this.U = ((this.U + elemsLength) | 0);
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
  }
  return this;
});
$p.aR = (function() {
  return "ArrayBuffer";
});
$p.ak = (function(xs, start, len) {
  var srcLen = this.U;
  var destLen = $m_jl_reflect_Array$().aV(xs);
  var x = ((len < srcLen) ? len : srcLen);
  var y = ((destLen - start) | 0);
  var x$1 = ((x < y) ? x : y);
  var copied = ((x$1 > 0) ? x$1 : 0);
  if ((copied > 0)) {
    $m_s_Array$().cI(this.aK, 0, xs, start, copied);
  }
  return copied;
});
$p.cJ = (function(z, op) {
  return $p_scm_ArrayBuffer__foldl__I__I__O__F2__O(this, 0, this.U, z, op);
});
$p.e4 = (function(op) {
  return ((this.U > 0) ? $p_scm_ArrayBuffer__foldl__I__I__O__F2__O(this, 1, this.U, this.aK.a[0], op) : $f_sc_IterableOnceOps__reduceLeft__F2__O(this, op));
});
$p.ap = (function(elems) {
  return this.fI(elems);
});
$p.aj = (function(elem) {
  return this.gY(elem);
});
$p.bF = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.v = (function(v1) {
  return this.o((v1 | 0));
});
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aL)));
}
var $d_scm_ArrayBuffer = new $TypeData().i($c_scm_ArrayBuffer, "scala.collection.mutable.ArrayBuffer", ({
  aL: 1,
  ah: 1,
  F: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  I: 1,
  H: 1,
  J: 1,
  G: 1,
  z: 1,
  ai: 1,
  X: 1,
  W: 1,
  aj: 1,
  aN: 1,
  N: 1,
  n: 1,
  o: 1,
  O: 1,
  q: 1,
  p: 1,
  Q: 1,
  a: 1
}));
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.c8 = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.c8 = null;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.am = (function(size) {
});
$p.aR = (function() {
  return "IndexedSeq";
});
$p.j = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.o = (function(index) {
  return this.c8[index];
});
$p.p = (function() {
  return (this.c8.length | 0);
});
$p.R = (function() {
  return (this.c8.length | 0);
});
$p.bp = (function() {
  return "WrappedArray";
});
$p.aP = (function() {
  return this;
});
$p.aj = (function(elem) {
  this.c8.push(elem);
  return this;
});
$p.v = (function(v1) {
  var index = (v1 | 0);
  return this.c8[index];
});
$p.bF = (function() {
  return $m_sjs_js_WrappedArray$();
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  dB: 1,
  ah: 1,
  F: 1,
  l: 1,
  g: 1,
  e: 1,
  b: 1,
  i: 1,
  c: 1,
  h: 1,
  m: 1,
  k: 1,
  f: 1,
  j: 1,
  d: 1,
  I: 1,
  H: 1,
  J: 1,
  G: 1,
  z: 1,
  ai: 1,
  X: 1,
  W: 1,
  aj: 1,
  q: 1,
  p: 1,
  N: 1,
  n: 1,
  o: 1,
  O: 1,
  aN: 1,
  Z: 1,
  a: 1
}));
$L0 = new $c_RTLong(0, 0);
$d_J.z = $L0;
let $e_generateSentence = (function() {
  return $m_Lsentences_Utils$package$().g3();
});
export { $e_generateSentence as generateSentence };
$s_Lsentences_Main$package__main__AT__V(new ($d_T.r().C)([]));
//# sourceMappingURL=main.js.map
