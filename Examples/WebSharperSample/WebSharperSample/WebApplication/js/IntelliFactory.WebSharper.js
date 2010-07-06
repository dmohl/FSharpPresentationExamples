// p99f16d6fa796290

Delay =
function (f)
{
  var x ={
           value: null,
           got: false,
           get: f
         };
  var get = function (unitVar0)
            {
              var __1;
              if (x.got)
              {
                __1 = x.value;
              }
              else
              {
                x.got = true;
                x.value = f(undefined);
                __1 = x.value;
              }
              return __1;
            };
  x.get = get;
  return x;
};

DelayValue =
function (v)
{
  var x ={
           value: v,
           got: true,
           get: function (unitVar0)
                {
                  return v;
                }
         };
  x.get =
  function (unitVar0)
  {
    return x.value;
  };
  return x;
};

(Array.prototype).GetHashCode =
function (unitVar1)
{
  var _this = this;
  var h = -34948909;
  var a = _this;
  for (var i = 0; i <= _this.length - 1; i++)
  {
    var this_1 = _this[i];
    h = ((W$.Hash).Mix)(h, ((W$.Hash).Get)(this_1));
  }
  return h;
};

(Array.prototype).Equals =
function (other)
{
  var _this = this;
  var a1 = _this;
  var a2 = other;
  var __1;
  if (a2 instanceof Array ?
      a1.length === a2.length :
      false)
  {
    var eq = true;
    var i = 0;
    while (eq ?
           i < a1.length :
           false)
    {
      if (!(W$.Equals)(a1[i], a2[i]))
      {
        eq = false;
      }
      i = i + 1;
    };
    __1 = eq;
  }
  else
  {
    __1 = false;
  }
  return __1;
};

(Array.prototype).CompareTo =
function (other)
{
  var _this = this;
  var a1 = _this;
  var a2 = other;
  var __2;
  if (a1.length < a2.length)
  {
    __2 = -1;
  }
  else
  {
    var __1;
    if (a1.length > a2.length)
    {
      __1 = 1;
    }
    else
    {
      var cmp = 0;
      var i = 0;
      while (cmp === 0 ?
             i < a1.length :
             false)
      {
        cmp = (W$.Compare)(a1[i], a2[i]);
        i = i + 1;
      };
      __1 = cmp;
    }
    __2 = __1;
  }
  return __2;
};

(Array.prototype).$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator =
function (unitVar1)
{
  var _this = this;
  var state = -1;
  return (function (next)
          {
            var next_1 = next;
            var state_1 = state;
            var returnVal = ((new W$.$Enumerator())._ctor)(next_1, null);
            returnVal.s = state_1;
            return returnVal;
          })(function (e)
             {
               var __1;
               if (e.s + 1 < _this.length)
               {
                 e.s = e.s + 1;
                 e.c = _this[e.s];
                 __1 = true;
               }
               else
               {
                 __1 = false;
               }
               return __1;
             });
};

(Date.prototype).GetHashCode =
function (unitVar1)
{
  var _this = this;
  var x = _this;
  var copyOfStruct = (x.getTime)();
  var this_1 = copyOfStruct;
  return ((W$.Hash).Mix)(32523, ((W$.Hash).Get)(this_1));
};

(Date.prototype).Equals =
function (other)
{
  var _this = this;
  var x = _this;
  var x_1 = other;
  return (x.getTime)() === (x_1.getTime)();
};

(Date.prototype).CompareTo =
function (other)
{
  var _this = this;
  var x = other;
  var b = (x.getTime)();
  var x_1 = _this;
  var a = (x_1.getTime)();
  return (W$.Compare)(a, b);
};

(RegExp.prototype).GetHashCode =
function (unitVar1)
{
  var _this = this;
  return (function (s)
          {
            return ((W$.Hash).String)(s);
          })("RegExp" + (_this.toString)());
};

(RegExp.prototype).Equals =
function (that)
{
  var _this = this;
  return _this == that;
};

(String.prototype).GetHashCode =
function (unitVar1)
{
  var _this = this;
  return ((W$.Hash).String)("String" + _this);
};

(String.prototype).Equals =
function (that)
{
  var _this = this;
  return _this == that;
};

(String.prototype).CompareTo =
function (other)
{
  var _this = this;
  return (_this.localeCompare)(other);
};

(Number.prototype).GetHashCode =
function (unitVar1)
{
  var _this = this;
  return ((W$.Hash).String)("Number" + (_this.toString)());
};

(Number.prototype).Equals =
function (that)
{
  var _this = this;
  return _this == that;
};

(Number.prototype).CompareTo =
function (other)
{
  var _this = this;
  return _this > other ?
         1 :
         (_this < other ?
          -1 :
          0);
};

(Boolean.prototype).GetHashCode =
function (unitVar1)
{
  var _this = this;
  return ((W$.Hash).Mix)(228530734, 1);
};

(Boolean.prototype).Equals =
function (that)
{
  var _this = this;
  return _this == that;
};

(Boolean.prototype).CompareTo =
function (other)
{
  var _this = this;
  return _this > other ?
         1 :
         (_this < other ?
          -1 :
          0);
};

if (typeof W$ == "undefined")
{
  W$ = {};
}

W$.DummyConsole =
function ()
{};

W$.$List =
function ()
{
  ((W$.Op).Copy)(arguments[0], this);
};

W$.$Enumerable =
function ()
{};

W$.$Enumerator =
function ()
{};

W$.$Observer =
function ()
{
  ((W$.Op).Copy)(arguments[0], this);
};

W$.$Observable =
function ()
{
  ((W$.Op).Copy)(arguments[0], this);
};

W$.$Disposable =
function ()
{
  ((W$.Op).Copy)(arguments[0], this);
};

W$.$Stack =
function ()
{};

W$.$Queue =
function ()
{};

W$.AsyncBuilder =
function ()
{};

W$.Dict =
function ()
{};

W$.$KeyValuePair =
function ()
{};

W$.$Event =
function ()
{};

W$.Exception =
function ()
{};

W$.$Control =
function ()
{};

W$.Color =
function ()
{
  ((W$.Op).Copy)(arguments[0], this);
};

W$.Compare =
function (a, b)
{
  var __4;
  if (a === b)
  {
    __4 = 0;
  }
  else
  {
    var __3;
    if (a == null)
    {
      __3 = -1;
    }
    else
    {
      var __2;
      if (b == null)
      {
        __2 = 1;
      }
      else
      {
        var __1;
        if ("$$IComparable_p1a5bc0930cb9817__IComparable" in Object(a))
        {
          var a_1 = a;
          __1 = (a_1.$IComparable_p1a5bc0930cb9817_CompareTo)(b);
        }
        else
        {
          __1 = ("CompareTo" in Object(a) ?
                 (a.CompareTo)(b) :
                 (((W$.Fields)(a)).CompareTo)((W$.Fields)(b)));
        }
        __2 = __1;
      }
      __3 = __2;
    }
    __4 = __3;
  }
  return __4;
};

W$.Equals =
function (a, b)
{
  return a === b ?
         true :
         (a === null ?
          b === null :
          (b === null ?
           a === null :
           ("Equals" in Object(a) ?
            (a.Equals)(b) :
            (((W$.Fields)(a)).Equals)((W$.Fields)(b)))));
};

W$.Fields =
function (o)
{
  var res = [];
  var o_1 = Object(o);
  for (var n in o_1)
  {
    if ((o_1.hasOwnProperty)(n))
    {
      var v = o_1[n];
      if (typeof v != "function")
      {
        (function (value)
         {
           return void value;
         })((res.push)(n, v));
      }
    }
  }
  return res;
};

((W$.DummyConsole).prototype)._ctor =
function (unitVar0)
{
  return this;
};

((W$.DummyConsole).prototype).log =
function (values)
{
  var _this = this;
};

((W$.DummyConsole).prototype).info =
function (values)
{
  var _this = this;
};

((W$.DummyConsole).prototype).warn =
function (values)
{
  var _this = this;
};

((W$.DummyConsole).prototype).error =
function (values)
{
  var _this = this;
};

((W$.DummyConsole).prototype).assert =
function (assertion, values)
{
  var _this = this;
};

((W$.$List).prototype).Raise =
function (unitVar1)
{
  var _this = this;
  return ((W$.Op$).failwith)("The input list was empty");
};

((W$.$List).prototype).$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator =
function (unitVar1)
{
  var _this = this;
  var data = _this;
  var next = function (e)
             {
               var matchValue = e.s;
               var __1;
               if (matchValue.$ == 0)
               {
                 __1 = false;
               }
               else
               {
                 var xs = matchValue.$1;
                 var x = matchValue.$0;
                 e.c = x;
                 e.s = xs;
                 __1 = true;
               }
               return __1;
             };
  var state = data;
  var returnVal = ((new W$.$Enumerator())._ctor)(next, null);
  returnVal.s = state;
  return returnVal;
};

((W$.$List).prototype).get_Head =
function (unitVar1)
{
  var _this = this;
  var __1;
  if (_this.$ == 1)
  {
    var x = _this.$0;
    __1 = x;
  }
  else
  {
    __1 = (_this.Raise)();
  }
  return __1;
};

((W$.$List).prototype).get_Tail =
function (unitVar1)
{
  var _this = this;
  var __1;
  if (_this.$ == 1)
  {
    var x = _this.$1;
    __1 = x;
  }
  else
  {
    __1 = (_this.Raise)();
  }
  return __1;
};

((W$.$List).prototype).get_IsEmpty =
function (unitVar1)
{
  var _this = this;
  return _this.$ == 1 ?
         false :
         true;
};

((W$.$List).prototype).get_Item =
function (index)
{
  var _this = this;
  return ((W$.Seq$).nth)(index, _this);
};

((W$.$Enumerable).prototype)._ctor =
function (_enum)
{
  var _this = this;
  _this._enum = _enum;
  return this;
};

((W$.$Enumerable).prototype).$IEnumerable_p7e293af1bfdeaae_GetEnumerator =
function (unitVar1)
{
  var _this = this;
  return (_this._enum)(undefined);
};

((W$.$Enumerable).prototype).$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator =
function (unitVar1)
{
  var _this = this;
  return (_this._enum)(undefined);
};

((W$.$Enumerator).prototype)._ctor =
function (next, dispose)
{
  var _this = this;
  _this.next = next;
  _this.dispose = dispose;
  _this.disposed = false;
  return this;
};

((W$.$Enumerator).prototype).$IDisposable_p1a5dece2430d1c7_Dispose =
function (unitVar1)
{
  var _this = this;
  if (!_this.disposed ?
      _this.dispose :
      false)
  {
    _this.disposed = true;
    (_this.dispose)(_this);
  }
};

((W$.$Enumerator).prototype).$IEnumerator_1_n7f0e01069ab79374_get_Current =
function (unitVar1)
{
  var _this = this;
  return _this.c;
};

((W$.$Enumerator).prototype).$IEnumerator_p7e293af1bfe37b0_MoveNext =
function (unitVar1)
{
  var _this = this;
  var _1;
  try
  {
    var __1;
    if ((_this.next)(_this))
    {
      __1 = true;
    }
    else
    {
      (_this.$IDisposable_p1a5dece2430d1c7_Dispose)();
      __1 = false;
    }
    _1 = __1;
  }
  catch (exception)
  {
    var matchValue = exception;
    (_this.$IDisposable_p1a5dece2430d1c7_Dispose)();
    throw exception;
    _1 = undefined;
  }
  return _1;
};

((W$.$Observer).prototype).$IObserver_1_p1a7a628d9b5921a_OnNext =
function (x)
{
  var _this = this;
  return (_this.observe)({
                           $: 0,
                           $0: x
                         });
};

((W$.$Observer).prototype).$IObserver_1_p1a7a628d9b5921a_OnError =
function (e)
{
  var _this = this;
  return (_this.observe)({
                           $: 1,
                           $0: e
                         });
};

((W$.$Observer).prototype).$IObserver_1_p1a7a628d9b5921a_OnCompleted =
function (unitVar1)
{
  var _this = this;
  return (_this.observe)({
                           $: 2,
                           $0: undefined
                         });
};

((W$.$Observable).prototype).$IObservable_1_pa29d3c612f3d457_Subscribe =
function (observer)
{
  var _this = this;
  return (_this.subscribe)(
         function (arg00)
         {
           return (observer.$IObserver_1_p1a7a628d9b5921a_OnNext)(arg00);
         });
};

((W$.$Disposable).prototype).$IDisposable_p1a5dece2430d1c7_Dispose =
function (unitVar1)
{
  var _this = this;
  return (_this.dispose)(undefined);
};

((W$.$Stack).prototype).init =
function (state)
{
  var _this = this;
  _this.state = state;
  return this;
};

((W$.$Stack).prototype)._ctor_1 =
function (unitVar0)
{
  return ((new W$.$Stack()).init)([]);
};

((W$.$Stack).prototype)._ctor_2 =
function (s)
{
  return ((new W$.$Stack()).init)(((W$.Seq$).toArray)(s));
};

((W$.$Stack).prototype).Clear =
function (unitVar1)
{
  var _this = this;
  var this_1 = _this;
  return void ((_this.state).splice)(0, (this_1.state).length);
};

((W$.$Stack).prototype).Contains =
function (x)
{
  var _this = this;
  var arr = _this.state;
  var f = function (y)
          {
            return (W$.Equals)(x, y);
          };
  return ((W$.Seq$).exists)(f, arr);
};

((W$.$Stack).prototype).CopyTo =
function (array, index)
{
  var _this = this;
  var this_1 = _this;
  return ((W$.Array).blit)(_this.state, 0, array, index, (this_1.state).length);
};

((W$.$Stack).prototype).Peek =
function (unitVar1)
{
  var _this = this;
  var this_1 = _this;
  if ((this_1.state).length === 0)
  {
    ((W$.Op$).failwith)("Stack empty.");
  }
  return (_this.state)[0];
};

((W$.$Stack).prototype).Pop =
function (unitVar1)
{
  var _this = this;
  var this_1 = _this;
  if ((this_1.state).length === 0)
  {
    ((W$.Op$).failwith)("Stack empty.");
  }
  return ((_this.state).shift)();
};

((W$.$Stack).prototype).Push =
function (x)
{
  var _this = this;
  return void ((_this.state).unshift)(x);
};

((W$.$Stack).prototype).ToArray =
function (unitVar1)
{
  var _this = this;
  return _this.state;
};

((W$.$Queue).prototype)._ctor =
function (state)
{
  var _this = this;
  _this.state = state;
  return this;
};

((W$.$Queue).prototype).Clear =
function (unitVar1)
{
  var _this = this;
  var this_1 = _this;
  return void ((_this.state).splice)(0, (this_1.state).length);
};

((W$.$Queue).prototype).Contains =
function (x)
{
  var _this = this;
  var arr = _this.state;
  var f = function (y)
          {
            return (W$.Equals)(x, y);
          };
  return ((W$.Seq$).exists)(f, arr);
};

((W$.$Queue).prototype).CopyTo =
function (array, index)
{
  var _this = this;
  var this_1 = _this;
  return ((W$.Array).blit)(_this.state, 0, array, index, (this_1.state).length);
};

((W$.$Queue).prototype).Peek =
function (unitVar1)
{
  var _this = this;
  var this_1 = _this;
  if ((this_1.state).length === 0)
  {
    ((W$.Op$).failwith)("Queue empty.");
  }
  return (_this.state)[0];
};

((W$.$Queue).prototype).Dequeue =
function (unitVar1)
{
  var _this = this;
  var this_1 = _this;
  if ((this_1.state).length === 0)
  {
    ((W$.Op$).failwith)("Queue empty.");
  }
  return ((_this.state).shift)();
};

((W$.$Queue).prototype).Enqueue =
function (x)
{
  var _this = this;
  return void ((_this.state).push)(x);
};

((W$.$Queue).prototype).ToArray =
function (unitVar1)
{
  var _this = this;
  return _this.state;
};

((W$.AsyncBuilder).prototype)._ctor =
function (unitVar0)
{
  return this;
};

((W$.AsyncBuilder).prototype).Bind =
function (x, f)
{
  var _this = this;
  return{
          Start: function (k)
                 {
                   return (x.Start)({
                                      Success: function (v)
                                               {
                                                 var _1;
                                                 try
                                                 {
                                                   _1 = ((f(v)).Start)(k);
                                                 }
                                                 catch (exception)
                                                 {
                                                   var e = exception;
                                                   _1 = (k.Failure)(e);
                                                 }
                                                 return _1;
                                               },
                                      Failure: function (e)
                                               {
                                                 return (k.Failure)(e);
                                               }
                                    });
                 }
        };
};

((W$.AsyncBuilder).prototype).Delay =
function (f)
{
  var _this = this;
  return{
          Start: function (k)
                 {
                   var _1;
                   try
                   {
                     _1 = ((f(undefined)).Start)(k);
                   }
                   catch (exception)
                   {
                     var e = exception;
                     _1 = (k.Failure)(e);
                   }
                   return _1;
                 }
        };
};

((W$.AsyncBuilder).prototype).Return =
function (x)
{
  var _this = this;
  return{
          Start: function (k)
                 {
                   return (k.Success)(x);
                 }
        };
};

((W$.AsyncBuilder).prototype).ReturnFrom =
function (x)
{
  var _this = this;
  return x;
};

((W$.AsyncBuilder).prototype).Combine =
function (a, b)
{
  var _this = this;
  return{
          Start: function (k)
                 {
                   return (a.Start)({
                                      Success: function (unitVar0)
                                               {
                                                 return (b.Start)(k);
                                               },
                                      Failure: k.Failure
                                    });
                 }
        };
};

((W$.AsyncBuilder).prototype).TryFinally =
function (a, f)
{
  var _this = this;
  return{
          Start: function (k)
                 {
                   return (a.Start)({
                                      Success: function (x)
                                               {
                                                 (k.Success)(x);
                                                 return f(undefined);
                                               },
                                      Failure: function (e)
                                               {
                                                 (k.Failure)(e);
                                                 return f(undefined);
                                               }
                                    });
                 }
        };
};

((W$.AsyncBuilder).prototype).TryWith =
function (a, f)
{
  var _this = this;
  return{
          Start: function (k)
                 {
                   return (a.Start)({
                                      Success: function (x)
                                               {
                                                 return (k.Success)(x);
                                               },
                                      Failure: function (e)
                                               {
                                                 return ((f(e)).Start)(k);
                                               }
                                    });
                 }
        };
};

((W$.AsyncBuilder).prototype).Using =
function (x, f)
{
  var _this = this;
  return (_this.TryFinally)(
         f(x), function (unitVar0)
               {
                 return (x.$IDisposable_p1a5dece2430d1c7_Dispose)();
               });
};

((W$.AsyncBuilder).prototype).Zero =
function (unitVar1)
{
  var _this = this;
  return{
          Start: function (_arg1)
                 {}
        };
};

((W$.Dict).prototype)._ctor =
function (data, hash)
{
  var _this = this;
  _this.hash = hash;
  _this.count = 0;
  _this.data_30 = data;
  return this;
};

((W$.Dict).prototype).NotPresent =
function (unitVar1)
{
  var _this = this;
  return ((W$.Op$).failwith)("The given key was not present in the dictionary.");
};

((W$.Dict).prototype).Add =
function (k, v)
{
  var _this = this;
  var h = (_this.hash)(k);
  if (h in _this.data_30)
  {
    var argumentName = "key";
    (function (message)
     {
       return ((W$.Op$).invalidArg)(argumentName, message);
     })("An item with the same key has already been added.");
  }
  else
  {
    (_this.data_30)[h] = ((new W$.$KeyValuePair())._ctor)(k, v);
    _this.count = _this.count + 1;
  }
};

((W$.Dict).prototype).Clear =
function (unitVar1)
{
  var _this = this;
  _this.data_30 = {};
  return _this.count = 0;
};

((W$.Dict).prototype).ContainsKey =
function (k)
{
  var _this = this;
  return (_this.hash)(k) in _this.data_30;
};

((W$.Dict).prototype).Remove =
function (k)
{
  var _this = this;
  var h = (_this.hash)(k);
  if (h in _this.data_30)
  {
    delete (_this.data_30)[h];
  }
  else
  {
    (_this.NotPresent)();
  }
};

((W$.Dict).prototype).$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator =
function (unitVar1)
{
  var _this = this;
  return (((_this.get_Sequence)()).$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)(
         );
};

((W$.Dict).prototype).get_Count =
function (unitVar1)
{
  var _this = this;
  return _this.count;
};

((W$.Dict).prototype).get_Item =
function (k)
{
  var _this = this;
  var h = (_this.hash)(k);
  var __1;
  if (h in _this.data_30)
  {
    var copyOfStruct = (_this.data_30)[h];
    var this_1 = copyOfStruct;
    __1 = this_1.value;
  }
  else
  {
    __1 = (_this.NotPresent)();
  }
  return __1;
};

((W$.Dict).prototype).set_Item =
function (k, v)
{
  var _this = this;
  var h = (_this.hash)(k);
  if (!(h in _this.data_30))
  {
    _this.count = _this.count + 1;
  }
  return (_this.data_30)[h] = ((new W$.$KeyValuePair())._ctor)(k, v);
};

((W$.Dict).prototype).get_Sequence =
function (unitVar1)
{
  var _this = this;
  var res = [];
  for (var k in _this.data_30)
  {
    void (res.push)((_this.data_30)[k]);
  }
  return res;
};

((W$.$KeyValuePair).prototype)._ctor =
function (key, value)
{
  var _this = this;
  _this.key = key;
  _this.value = value;
  return this;
};

((W$.$Event).prototype)._ctor =
function (unitVar0)
{
  var _this = this;
  _this.handlers = [];
  return this;
};

((W$.$Event).prototype).Add =
function (h)
{
  var _this = this;
  void ((_this.handlers).push)(h);
  return (_this.handlers).length;
};

((W$.$Event).prototype).Remove =
function (k)
{
  var _this = this;
  return void ((_this.handlers).splice)(k, 1);
};

((W$.$Event).prototype).Trigger =
function (value)
{
  var _this = this;
  for (var i = 0; i <= (_this.handlers).length - 1; i++)
  {
    ((_this.handlers)[i])(value);
  }
};

((W$.$Event).prototype).$IObservable_1_pa29d3c612f3d457_Subscribe =
function (observer)
{
  var _this = this;
  var h =
      (_this.Add)(
      function (arg00)
      {
        return (observer.$IObserver_1_p1a7a628d9b5921a_OnNext)(arg00);
      });
  var f = function (unitVar0)
          {
            return (_this.Remove)(h);
          };
  return new W$.$Disposable({
                              dispose: f
                            });
};

((W$.Exception).prototype)._ctor =
function (message, exn)
{
  var _this = this;
  _this.message = message;
  _this.exn = exn;
  return this;
};

((W$.Exception).prototype).ToString =
function (unitVar1)
{
  var _this = this;
  return _this.message +
         ((W$.Equals)((_this.get_InnerException)(), null) ?
          "" :
          " ---> " + (((_this.get_InnerException)()).toString)());
};

((W$.Exception).prototype).get_InnerException =
function (unitVar1)
{
  var _this = this;
  return _this.exn;
};

((W$.Exception).prototype).get_Message =
function (unitVar1)
{
  var _this = this;
  return _this.message;
};

((W$.$Control).prototype).$INode_p5129303de1c6d8ef_get_Body =
function (unitVar1)
{
  var _this = this;
  return (((_this.get_BodyValue)()).$INode_p5129303de1c6d8ef_get_Body)();
};

((W$.$Control).prototype).$IWidget_p4036373d8372c14d_get_Body =
function (unitVar1)
{
  var _this = this;
  return (((_this.get_BodyValue)()).$IWidget_p4036373d8372c14d_get_Body)();
};

((W$.$Control).prototype).$IWidget_p4036373d8372c14d_Render =
function (unitVar1)
{
  var _this = this;
  return (((_this.get_BodyValue)()).$IWidget_p4036373d8372c14d_Render)();
};

((W$.$Control).prototype).$IWidget_p4036373d8372c14d_OnAfterRender =
function (f)
{
  var _this = this;
  return (((_this.get_BodyValue)()).$IWidget_p4036373d8372c14d_OnAfterRender)(f);
};

((W$.$Control).prototype).$IWidget_p4036373d8372c14d_OnBeforeRender =
function (f)
{
  var _this = this;
  return (((_this.get_BodyValue)()).$IWidget_p4036373d8372c14d_OnBeforeRender)(f
         );
};

((W$.$Control).prototype).get_Body =
function (unitVar1)
{
  var _this = this;
  var x = new W$.$List({
                         $: 0
                       });
  var body = x;
  var name = "div";
  return ((W$.Html).Tag)(name, body);
};

((W$.$Control).prototype).get_BodyValue =
function (unitVar1)
{
  var _this = this;
  if (typeof _this.body == "undefined")
  {
    _this.body = (_this.get_Body)();
  }
  return _this.body;
};

((W$.Color).prototype).Show =
function (unitVar1)
{
  var self = this;
  var matchValue = self.A;
  var __1;
  if (matchValue.$ == 1)
  {
    var a = matchValue.$0;
    var x = self.R;
    var x_1 = self.G;
    var x_2 = self.B;
    var x_3 = a;
    __1 =
    ((((((("rgba(" + (x.toString)()) + ", ") + (x_1.toString)()) + ", ") +
       (x_2.toString)()) + ", ") + (x_3.toString)()) + ")";
  }
  else
  {
    var x_4 = self.R;
    var x_5 = self.G;
    var x_6 = self.B;
    __1 =
    ((((("rgb(" + (x_4.toString)()) + ", ") + (x_5.toString)()) + ", ") +
     (x_6.toString)()) + ")";
  }
  return __1;
};

if (typeof W$.Registry == "undefined")
{
  W$.Registry = {};
}

(W$.Registry).Types = Delay(function (unitVar0)
                            {
                              return {};
                            });

if (typeof W$.Op == "undefined")
{
  W$.Op = {};
}

(W$.Op).Copy =
function (src, tgt)
{
  for (var f in src)
  {
    tgt[f] = src[f];
  }
};

if (typeof W$.Console == "undefined")
{
  W$.Console = {};
}

(W$.Console).JConsole =
Delay(function (unitVar0)
      {
        return (W$.Equals)(typeof console, "undefined") ?
               ((new W$.DummyConsole())._ctor)() :
               console;
      });

if (typeof W$.Html == "undefined")
{
  W$.Html = {};
}

(W$.Html).Element =
function ()
{
  ((W$.Op).Copy)(arguments[0], this);
};

(W$.Html).Text =
function ()
{
  ((W$.Op).Copy)(arguments[0], this);
};

(W$.Html).Attribute =
function ()
{
  ((W$.Op).Copy)(arguments[0], this);
};

(W$.Html).Canvas =
function ()
{};

(W$.Html).Tag =
function (tag, children)
{
  return new (W$.Html).Element({
                                 tag: tag,
                                 children: ((W$.Seq$).toList)(children),
                                 beforeR: new W$.$List({
                                                         $: 0
                                                       }),
                                 afterR: new W$.$List({
                                                        $: 0
                                                      }),
                                 rendered: false,
                                 el: null
                               });
};

(W$.Html).text =
function (data)
{
  return new (W$.Html).Text({
                              text: data
                            });
};

(W$.Html).append =
function (n, c)
{
  var rendered = false;
  var el = null;
  var children = ((W$.Seq$).toList)(((W$.Seq$).append)(n.children, c));
  return new (W$.Html).Element({
                                 tag: n.tag,
                                 children: children,
                                 beforeR: n.beforeR,
                                 afterR: n.afterR,
                                 rendered: rendered,
                                 el: el
                               });
};

(W$.Html).appendOne =
function (n, c)
{
  var rendered = false;
  var el = null;
  var b = new W$.$List({
                         $: 1,
                         $0: c,
                         $1: new W$.$List({
                                            $: 0
                                          })
                       });
  var a = n.children;
  var children = ((W$.List$).append)(a, b);
  return new (W$.Html).Element({
                                 tag: n.tag,
                                 children: children,
                                 beforeR: n.beforeR,
                                 afterR: n.afterR,
                                 rendered: rendered,
                                 el: el
                               });
};

(W$.Html).NewId =
function (unitVar0)
{
  var x = (Math.abs)((Math.round)(1000000 * (Math.random)()));
  return (x.toString)();
};

(((W$.Html).Element).prototype).Clone =
function (unitVar1)
{
  var _this = this;
  return new (W$.Html).Element({
                                 tag: _this.tag,
                                 children: _this.children,
                                 beforeR: _this.beforeR,
                                 afterR: _this.afterR,
                                 rendered: false,
                                 el: null
                               });
};

(((W$.Html).Element).prototype).Append =
function (el)
{
  var _this = this;
  var this_1 = _this;
  (function (value)
   {
     return void value;
   })(
  ((jQuery((this_1.get_Dom)())).append)(
  (el.$IWidget_p4036373d8372c14d_get_Body)()));
  return (_this.$IWidget_p4036373d8372c14d_OnAfterRender)(
         function (unitVar0)
         {
           return (el.$IWidget_p4036373d8372c14d_Render)();
         });
};

(((W$.Html).Element).prototype).$INode_p5129303de1c6d8ef_get_Body =
function (unitVar1)
{
  var _this = this;
  return (_this.get_Dom)();
};

(((W$.Html).Element).prototype).$IWidget_p4036373d8372c14d_get_Body =
function (unitVar1)
{
  var _this = this;
  return (_this.get_Dom)();
};

(((W$.Html).Element).prototype).$IWidget_p4036373d8372c14d_OnAfterRender =
function (f)
{
  var _this = this;
  _this.afterR = new W$.$List({
                                $: 1,
                                $0: f,
                                $1: _this.afterR
                              });
  if (_this.rendered)
  {
    f(undefined);
  }
};

(((W$.Html).Element).prototype).$IWidget_p4036373d8372c14d_OnBeforeRender =
function (f)
{
  var _this = this;
  _this.beforeR = new W$.$List({
                                 $: 1,
                                 $0: f,
                                 $1: _this.beforeR
                               });
  if (_this.rendered)
  {
    f(undefined);
  }
};

(((W$.Html).Element).prototype).$IWidget_p4036373d8372c14d_Render =
function (unitVar1)
{
  var _this = this;
  if (!_this.rendered)
  {
    _this.rendered = true;
    var action = function (f)
                 {
                   return f(undefined);
                 };
    (function (list)
     {
       var l = list;
       var f = action;
       return ((W$.Seq$).iter)(f, l);
     })(((W$.List$).rev)(_this.beforeR));
    var inputSequence = ((W$.List$).rev)(_this.children);
    var enumerator =
        (inputSequence.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
    var _1;
    try
    {
      while ((enumerator.$IEnumerator_p7e293af1bfe37b0_MoveNext)())
      {
        var c = (enumerator.$IEnumerator_1_n7f0e01069ab79374_get_Current)();
        var matchValue = c;
        if ("$$IWidget_p4036373d8372c14d__IWidget" in Object(matchValue))
        {
          var c_1 = matchValue;
          (c_1.$IWidget_p4036373d8372c14d_Render)();
        }
      };
      _1 = undefined;
    }
    finally
    {
      if ("$$IDisposable_p1a5dece2430d1c7__IDisposable" in Object(enumerator))
      {
        (enumerator.$IDisposable_p1a5dece2430d1c7_Dispose)();
      }
    }
    _1;
    var action_1 = function (f)
                   {
                     return f(undefined);
                   };
    (function (list)
     {
       var l = list;
       var f = action_1;
       return ((W$.Seq$).iter)(f, l);
     })(((W$.List$).rev)(_this.afterR));
  }
};

(((W$.Html).Element).prototype).get_Dom =
function (unitVar1)
{
  var _this = this;
  if (_this.el == null)
  {
    var el = (document.createElement)(_this.tag);
    var action = function (node)
                 {
                   var body = (node.$INode_p5129303de1c6d8ef_get_Body)();
                   if ((W$.Equals)(body.nodeType, 2))
                   {
                     var body_1 = body;
                     (function (value)
                      {
                        return void value;
                      })(((jQuery(el)).attr)(body_1.name, body_1.value));
                   }
                   else
                   {
                     var body_2 = body;
                     (function (value)
                      {
                        return void value;
                      })(((jQuery(el)).append)(body_2));
                   }
                 };
    (function (list)
     {
       var l = list;
       var f = action;
       return ((W$.Seq$).iter)(f, l);
     })(_this.children);
    _this.el = el;
  }
  return _this.el;
};

(((W$.Html).Element).prototype).get_Text =
function (unitVar1)
{
  var _this = this;
  var this_1 = _this;
  return ((jQuery((this_1.get_Dom)())).text)();
};

(((W$.Html).Element).prototype).set_Text =
function (x)
{
  var _this = this;
  var this_1 = _this;
  return (function (value)
          {
            return void value;
          })(((jQuery((this_1.get_Dom)())).text)(x));
};

(((W$.Html).Element).prototype).get_Html =
function (unitVar1)
{
  var _this = this;
  var this_1 = _this;
  return ((jQuery((this_1.get_Dom)())).html)();
};

(((W$.Html).Element).prototype).set_Html =
function (x)
{
  var _this = this;
  var this_1 = _this;
  return (function (value)
          {
            return void value;
          })(((jQuery((this_1.get_Dom)())).html)(x));
};

(((W$.Html).Element).prototype).get_Value =
function (unitVar1)
{
  var _this = this;
  var this_2 = _this;
  var this_1 = jQuery((this_2.get_Dom)());
  var x = (this_1.val)();
  return (x instanceof Array ?
          x :
          [x])[0];
};

(((W$.Html).Element).prototype).set_Value =
function (x)
{
  var _this = this;
  var this_1 = _this;
  return (function (value)
          {
            return void value;
          })(((jQuery((this_1.get_Dom)())).val)(x));
};

(((W$.Html).Element).prototype).get_Values =
function (unitVar1)
{
  var _this = this;
  var this_2 = _this;
  var this_1 = jQuery((this_2.get_Dom)());
  var x = (this_1.val)();
  return x instanceof Array ?
         x :
         [x];
};

(((W$.Html).Element).prototype).set_Values =
function (x)
{
  var _this = this;
  var this_1 = _this;
  return (function (value)
          {
            return void value;
          })(((jQuery((this_1.get_Dom)())).val)(x));
};

(((W$.Html).Element).prototype).get_Id =
function (unitVar1)
{
  var _this = this;
  var this_1 = _this;
  var j = jQuery((this_1.get_Dom)());
  var a = (j.attr)("id");
  var __1;
  if (a)
  {
    __1 = a;
  }
  else
  {
    var x = (Math.abs)((Math.round)(1000000 * (Math.random)()));
    var id = (x.toString)();
    void (j.attr)("id", id);
    __1 = id;
  }
  return __1;
};

(((W$.Html).Element).prototype).set_Id =
function (x)
{
  var _this = this;
  var this_1 = _this;
  return void ((jQuery((this_1.get_Dom)())).attr)("id", x);
};

(((W$.Html).Element).prototype).get_Item =
function (name)
{
  var _this = this;
  var this_1 = _this;
  return ((jQuery((this_1.get_Dom)())).attr)(name);
};

(((W$.Html).Element).prototype).set_Item =
function (name, value)
{
  var _this = this;
  var this_1 = _this;
  return void ((jQuery((this_1.get_Dom)())).attr)(name, value);
};

(((W$.Html).Text).prototype).$INode_p5129303de1c6d8ef_get_Body =
function (unitVar1)
{
  var _this = this;
  return (document.createTextNode)(_this.text);
};

(((W$.Html).Attribute).prototype).$INode_p5129303de1c6d8ef_get_Body =
function (unitVar1)
{
  var _this = this;
  var attr = (document.createAttribute)(_this.name);
  attr.value = _this.value;
  return attr;
};

(((W$.Html).Canvas).prototype)._ctor =
function (width, height)
{
  var _this = this;
  var body = new W$.$List({
                            $: 0
                          });
  var name = "canvas";
  _this.tag = ((W$.Html).Tag)(name, body);
  _this.el = ((_this.tag).get_Dom)();
  (_this.el).height = height;
  (_this.el).width = width;
  var this_1 = _this.el;
  _this.ctx = (this_1.getContext)("2d");
  return this;
};

(((W$.Html).Canvas).prototype).$INode_p5129303de1c6d8ef_get_Body =
function (unitVar1)
{
  var _this = this;
  return ((_this.tag).get_Dom)();
};

if (typeof (W$.Html).Events == "undefined")
{
  (W$.Html).Events = {};
}

((W$.Html).Events).On =
function (event, f, target)
{
  return ((jQuery((target.$IWidget_p4036373d8372c14d_get_Body)())).bind)(
         event, function (e)
                {
                  var _arg1 = this;
                  return (f(target))(e);
                });
};

((W$.Html).Events).OnBeforeRender =
function (f, w)
{
  return (w.$IWidget_p4036373d8372c14d_OnBeforeRender)(function (unitVar0)
                                                       {
                                                         return f(w);
                                                       });
};

((W$.Html).Events).OnAfterRender =
function (f, w)
{
  return (w.$IWidget_p4036373d8372c14d_OnAfterRender)(function (unitVar0)
                                                      {
                                                        return f(w);
                                                      });
};

((W$.Html).Events).op_BarGreaterBang =
function (x, f)
{
  f(x);
  return x;
};

if (typeof W$.Seq$ == "undefined")
{
  W$.Seq$ = {};
}

(W$.Seq$).EnumerateWhile =
function (f, s)
{
  var getEnumerator =
      function (unitVar0)
      {
        var next;
        next =
        function (en)
        {
          var matchValue = en.s;
          var __3;
          if (matchValue.$ == 1)
          {
            var e = matchValue.$0;
            var __1;
            if ((e.$IEnumerator_p7e293af1bfe37b0_MoveNext)())
            {
              en.c = (e.$IEnumerator_1_n7f0e01069ab79374_get_Current)();
              __1 = true;
            }
            else
            {
              (e.$IDisposable_p1a5dece2430d1c7_Dispose)();
              en.s ={
                      $: 0
                    };
              __1 = next(en);
            }
            __3 = __1;
          }
          else
          {
            var __2;
            if (f(undefined))
            {
              en.s ={
                      $: 1,
                      $0: (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)()
                    };
              __2 = next(en);
            }
            else
            {
              __2 = false;
            }
            __3 = __2;
          }
          return __3;
        };
        var next_1 = next;
        var state ={
                     $: 0
                   };
        var dispose = function (en)
                      {
                        var matchValue = en.s;
                        if (matchValue.$ == 0)
                        {}
                        else
                        {
                          var x = matchValue.$0;
                          (x.$IDisposable_p1a5dece2430d1c7_Dispose)();
                        }
                      };
        var returnVal = ((new W$.$Enumerator())._ctor)(next_1, dispose);
        returnVal.s = state;
        return returnVal;
      };
  return ((new W$.$Enumerable())._ctor)(getEnumerator);
};

(W$.Seq$).EnumerateThenFinally =
function (s, f)
{
  var getEnumerator =
      function (unitVar0)
      {
        var e = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
        var next =
            function (en)
            {
              var __1;
              if ((e.$IEnumerator_p7e293af1bfe37b0_MoveNext)())
              {
                en.c = (e.$IEnumerator_1_n7f0e01069ab79374_get_Current)();
                __1 = true;
              }
              else
              {
                __1 = false;
              }
              return __1;
            };
        var state;
        var dispose = function (_arg1)
                      {
                        (e.$IDisposable_p1a5dece2430d1c7_Dispose)();
                        return f(undefined);
                      };
        var returnVal = ((new W$.$Enumerator())._ctor)(next, dispose);
        returnVal.s = state;
        return returnVal;
      };
  return ((new W$.$Enumerable())._ctor)(getEnumerator);
};

(W$.Seq$).zip3 =
function (s1, s2, s3)
{
  return ((W$.Seq$).map2)(function (x)
                          {
                            return function (_1)
                                   {
                                     var tupledArg = arguments.length > 1 ?
                                                     arguments :
                                                     _1;
                                     var y = tupledArg[0];
                                     var z = tupledArg[1];
                                     return [x, y, z];
                                   };
                          }, s1, ((W$.Seq$).zip)(s2, s3));
};

(W$.Seq$).zip =
function (s1, s2)
{
  return ((W$.Seq$).map2)(function (x)
                          {
                            return function (y)
                                   {
                                     return [x, y];
                                   };
                          }, s1, s2);
};

(W$.Seq$).windowed =
function (windowSize, s)
{
  if (windowSize <= 0)
  {
    ((W$.Op$).invalidArg)("windowSize", "The input must be non-negative.");
  }
  return ((W$.Seq$).delay)(
         function (unitVar)
         {
           var f =
               function (e)
               {
                 var q = ((new W$.$Queue())._ctor)([]);
                 return ((W$.Seq$).append)(
                        ((W$.Seq$).EnumerateWhile)(
                        function (unitVar_1)
                        {
                          var _this = q;
                          return (_this.state).length < windowSize ?
                                 (e.$IEnumerator_p7e293af1bfe37b0_MoveNext)() :
                                 false;
                        },
                        ((W$.Seq$).delay)(
                        function (unitVar_1)
                        {
                          (q.Enqueue)(
                          (e.$IEnumerator_1_n7f0e01069ab79374_get_Current)());
                          return ((W$.Seq$).empty)();
                        })),
                        ((W$.Seq$).delay)(
                        function (unitVar_1)
                        {
                          var x = (q.ToArray)();
                          return ((W$.Seq$).append)(
                                 [x],
                                 ((W$.Seq$).delay)(
                                 function (unitVar_2)
                                 {
                                   return ((W$.Seq$).EnumerateWhile)(
                                          function (unitVar_3)
                                          {
                                            return (e.$IEnumerator_p7e293af1bfe37b0_MoveNext)(
                                                   );
                                          },
                                          ((W$.Seq$).delay)(
                                          function (unitVar_3)
                                          {
                                            void (q.Dequeue)();
                                            (q.Enqueue)(
                                            (e.$IEnumerator_1_n7f0e01069ab79374_get_Current)(
                                            ));
                                            var x_1 = (q.ToArray)();
                                            return [x_1];
                                          }));
                                 }));
                        }));
               };
           var x_2 = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
           return ((W$.Seq$).EnumerateThenFinally)(
                  f(x_2),
                  function (unitVar0)
                  {
                    return (x_2.$IDisposable_p1a5dece2430d1c7_Dispose)();
                  });
         });
};

(W$.Seq$).unfold =
function (f, s)
{
  return (function (getEnumerator)
          {
            var getEnumerator_1 = getEnumerator;
            return ((new W$.$Enumerable())._ctor)(getEnumerator_1);
          })(
         function (unitVar0)
         {
           return (function (next)
                   {
                     var next_1 = next;
                     var state = s;
                     var returnVal =
                         ((new W$.$Enumerator())._ctor)(next_1, null);
                     returnVal.s = state;
                     return returnVal;
                   })(function (e)
                      {
                        var matchValue = f(e.s);
                        var __1;
                        if (matchValue.$ == 0)
                        {
                          __1 = false;
                        }
                        else
                        {
                          var t = (matchValue.$0)[1];
                          var s_1 = (matchValue.$0)[0];
                          e.c = t;
                          e.s = s_1;
                          __1 = true;
                        }
                        return __1;
                      });
         });
};

(W$.Seq$).tryPick =
function (f, s)
{
  var e = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
  var _1;
  try
  {
    var r ={
             $: 0
           };
    while ((W$.Equals)(r,{
                           $: 0
                         }) ?
           (e.$IEnumerator_p7e293af1bfe37b0_MoveNext)() :
           false)
    {
      r = f((e.$IEnumerator_1_n7f0e01069ab79374_get_Current)());
    };
    _1 = r;
  }
  finally
  {
    if ("$$IDisposable_p1a5dece2430d1c7__IDisposable" in Object(e))
    {
      (e.$IDisposable_p1a5dece2430d1c7_Dispose)();
    }
  }
  return _1;
};

(W$.Seq$).tryFindIndex =
function (ok, s)
{
  var e = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
  var _1;
  try
  {
    var loop = true;
    var i = 0;
    while (loop ?
           (e.$IEnumerator_p7e293af1bfe37b0_MoveNext)() :
           false)
    {
      var x = (e.$IEnumerator_1_n7f0e01069ab79374_get_Current)();
      if (ok(x))
      {
        loop = false;
      }
      else
      {
        i = i + 1;
      }
    };
    _1 = (loop ?
          {
            $: 0
          }:
          {
            $: 1,
            $0: i
          });
  }
  finally
  {
    if ("$$IDisposable_p1a5dece2430d1c7__IDisposable" in Object(e))
    {
      (e.$IDisposable_p1a5dece2430d1c7_Dispose)();
    }
  }
  return _1;
};

(W$.Seq$).tryFind =
function (ok, s)
{
  var e = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
  var _1;
  try
  {
    var r ={
             $: 0
           };
    var x = r;
    while (((W$.Option$).isNone)(x) ?
           (e.$IEnumerator_p7e293af1bfe37b0_MoveNext)() :
           false)
    {
      var x_1 = (e.$IEnumerator_1_n7f0e01069ab79374_get_Current)();
      if (ok(x_1))
      {
        r ={
             $: 1,
             $0: x_1
           };
      }
      var x = r;
    };
    _1 = r;
  }
  finally
  {
    if ("$$IDisposable_p1a5dece2430d1c7__IDisposable" in Object(e))
    {
      (e.$IDisposable_p1a5dece2430d1c7_Dispose)();
    }
  }
  return _1;
};

(W$.Seq$).truncate =
function (n, s)
{
  return ((W$.Seq$).delay)(
         function (unitVar)
         {
           var f =
               function (e)
               {
                 var i = [0];
                 return ((W$.Seq$).EnumerateWhile)(
                        function (unitVar_1)
                        {
                          return (e.$IEnumerator_p7e293af1bfe37b0_MoveNext)() ?
                                 i[0] < n :
                                 false;
                        },
                        ((W$.Seq$).delay)(
                        function (unitVar_1)
                        {
                          ((W$.Op$).incr)(i);
                          var x =
                              (e.$IEnumerator_1_n7f0e01069ab79374_get_Current)();
                          return [x];
                        }));
               };
           var x_1 = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
           return ((W$.Seq$).EnumerateThenFinally)(
                  f(x_1),
                  function (unitVar0)
                  {
                    return (x_1.$IDisposable_p1a5dece2430d1c7_Dispose)();
                  });
         });
};

(W$.Seq$).toList =
function (s)
{
  return ((W$.List$).ofArray)(((W$.Seq$).toArray)(s));
};

(W$.Seq$).toArray =
function (s)
{
  var q = ((new W$.$Queue())._ctor)([]);
  var enumerator = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
  var _1;
  try
  {
    while ((enumerator.$IEnumerator_p7e293af1bfe37b0_MoveNext)())
    {
      var e = (enumerator.$IEnumerator_1_n7f0e01069ab79374_get_Current)();
      (q.Enqueue)(e);
    };
    _1 = undefined;
  }
  finally
  {
    if ("$$IDisposable_p1a5dece2430d1c7__IDisposable" in Object(enumerator))
    {
      (enumerator.$IDisposable_p1a5dece2430d1c7_Dispose)();
    }
  }
  _1;
  return (q.ToArray)();
};

(W$.Seq$).takeWhile =
function (f, s)
{
  return ((W$.Seq$).delay)(
         function (unitVar)
         {
           var f_1 =
               function (e)
               {
                 return ((W$.Seq$).EnumerateWhile)(
                        function (unitVar_1)
                        {
                          return (e.$IEnumerator_p7e293af1bfe37b0_MoveNext)() ?
                                 f(
                                 (e.$IEnumerator_1_n7f0e01069ab79374_get_Current)(
                                 )) :
                                 false;
                        },
                        ((W$.Seq$).delay)(
                        function (unitVar_1)
                        {
                          var x =
                              (e.$IEnumerator_1_n7f0e01069ab79374_get_Current)();
                          return [x];
                        }));
               };
           var x_1 = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
           return ((W$.Seq$).EnumerateThenFinally)(
                  f_1(x_1),
                  function (unitVar0)
                  {
                    return (x_1.$IDisposable_p1a5dece2430d1c7_Dispose)();
                  });
         });
};

(W$.Seq$).take =
function (n, s)
{
  var getEnumerator =
      function (unitVar0)
      {
        var e = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
        var next =
            function (_enum)
            {
              var __2;
              if (_enum.s >= n)
              {
                __2 = false;
              }
              else
              {
                var __1;
                if ((e.$IEnumerator_p7e293af1bfe37b0_MoveNext)())
                {
                  _enum.s = _enum.s + 1;
                  _enum.c = (e.$IEnumerator_1_n7f0e01069ab79374_get_Current)();
                  __1 = true;
                }
                else
                {
                  (e.$IDisposable_p1a5dece2430d1c7_Dispose)();
                  _enum.s = n;
                  __1 = false;
                }
                __2 = __1;
              }
              return __2;
            };
        var state = 0;
        var dispose = function (_arg1)
                      {
                        return (e.$IDisposable_p1a5dece2430d1c7_Dispose)();
                      };
        var returnVal = ((new W$.$Enumerator())._ctor)(next, dispose);
        returnVal.s = state;
        return returnVal;
      };
  return ((new W$.$Enumerable())._ctor)(getEnumerator);
};

(W$.Seq$).sumBy =
function (f, s)
{
  return ((W$.Seq$).fold)(function (s_1)
                          {
                            return function (x)
                                   {
                                     return s_1 + f(x);
                                   };
                          }, 0, s);
};

(W$.Seq$).sum =
function (s)
{
  return ((W$.Seq$).fold)(function (s_1)
                          {
                            return function (x)
                                   {
                                     return s_1 + x;
                                   };
                          }, 0, s);
};

(W$.Seq$).sortBy =
function (f, s)
{
  return ((W$.Seq$).delay)(function (unitVar0)
                           {
                             var array = ((W$.Seq$).toArray)(s);
                             ((W$.Array).sortInPlaceBy)(f, array);
                             return array;
                           });
};

(W$.Seq$).sort =
function (s)
{
  return ((W$.Seq$).sortBy)(function (x)
                            {
                              return x;
                            }, s);
};

(W$.Seq$).skipWhile =
function (f, s)
{
  var getEnumerator =
      function (unitVar0)
      {
        var e = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
        while ((e.$IEnumerator_p7e293af1bfe37b0_MoveNext)() ?
               f((e.$IEnumerator_1_n7f0e01069ab79374_get_Current)()) :
               false)
        {};
        return e;
      };
  return ((new W$.$Enumerable())._ctor)(getEnumerator);
};

(W$.Seq$).skip =
function (n, s)
{
  var getEnumerator =
      function (unitVar0)
      {
        var e = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
        for (var i = 1; i <= n; i++)
        {
          if (!(e.$IEnumerator_p7e293af1bfe37b0_MoveNext)())
          {
            ((W$.Seq$).Insufficient)();
          }
        }
        return e;
      };
  return ((new W$.$Enumerable())._ctor)(getEnumerator);
};

(W$.Seq$).Insufficient =
function (unitVar0)
{
  return ((W$.Op$).failwith)(
         "The input sequence has an insufficient number of elements.");
};

(W$.Seq$).scan =
function (f, x, s)
{
  return (function (getEnumerator)
          {
            var getEnumerator_1 = getEnumerator;
            return ((new W$.$Enumerable())._ctor)(getEnumerator_1);
          })(
         function (unitVar0)
         {
           var en = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
           var dispose = function (_arg1)
                         {
                           return (en.$IDisposable_p1a5dece2430d1c7_Dispose)();
                         };
           var state = false;
           return (function (next)
                   {
                     var next_1 = next;
                     var state_1 = state;
                     var dispose_1 = dispose;
                     var returnVal =
                         ((new W$.$Enumerator())._ctor)(next_1, dispose_1);
                     returnVal.s = state_1;
                     return returnVal;
                   })(
                  function (e)
                  {
                    var __2;
                    if (e.s)
                    {
                      var __1;
                      if ((en.$IEnumerator_p7e293af1bfe37b0_MoveNext)())
                      {
                        e.c =
                        (f(e.c))(
                        (en.$IEnumerator_1_n7f0e01069ab79374_get_Current)());
                        __1 = true;
                      }
                      else
                      {
                        __1 = false;
                      }
                      __2 = __1;
                    }
                    else
                    {
                      e.c = x;
                      e.s = true;
                      __2 = true;
                    }
                    return __2;
                  });
         });
};

(W$.Seq$).reduce =
function (f, source)
{
  var e = (source.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
  var _1;
  try
  {
    if (!(e.$IEnumerator_p7e293af1bfe37b0_MoveNext)())
    {
      ((W$.Op$).invalidArg)("source", "The input sequence was empty");
    }
    var r = (e.$IEnumerator_1_n7f0e01069ab79374_get_Current)();
    while ((e.$IEnumerator_p7e293af1bfe37b0_MoveNext)())
    {
      r = (f(r))((e.$IEnumerator_1_n7f0e01069ab79374_get_Current)());
    };
    _1 = r;
  }
  finally
  {
    if ("$$IDisposable_p1a5dece2430d1c7__IDisposable" in Object(e))
    {
      (e.$IDisposable_p1a5dece2430d1c7_Dispose)();
    }
  }
  return _1;
};

(W$.Seq$).readonly =
function (s)
{
  var getEnumerator =
      function (unitVar0)
      {
        return (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
      };
  return ((new W$.$Enumerable())._ctor)(getEnumerator);
};

(W$.Seq$).pick =
function (p, s)
{
  var matchValue = ((W$.Seq$).tryPick)(p, s);
  var __1;
  if (matchValue.$ == 0)
  {
    __1 = ((W$.Op$).failwith)("KeyNotFoundException");
  }
  else
  {
    var x = matchValue.$0;
    __1 = x;
  }
  return __1;
};

(W$.Seq$).pairWise =
function (s)
{
  var mapping = function (x)
                {
                  return [x[0], x[1]];
                };
  return (function (source)
          {
            return ((W$.Seq$).map)(mapping, source);
          })(((W$.Seq$).windowed)(2, s));
};

(W$.Seq$).nth =
function (index, s)
{
  if (index < 0)
  {
    ((W$.Op$).invalidArg)("index", "negative index requested");
  }
  var pos = -1;
  var e = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
  var _1;
  try
  {
    while (pos < index)
    {
      if (!(e.$IEnumerator_p7e293af1bfe37b0_MoveNext)())
      {
        ((W$.Seq$).Insufficient)();
      }
      pos = pos + 1;
    };
    _1 = (e.$IEnumerator_1_n7f0e01069ab79374_get_Current)();
  }
  finally
  {
    if ("$$IDisposable_p1a5dece2430d1c7__IDisposable" in Object(e))
    {
      (e.$IDisposable_p1a5dece2430d1c7_Dispose)();
    }
  }
  return _1;
};

(W$.Seq$).min =
function (s)
{
  return ((W$.Seq$).reduce)(function (x)
                            {
                              return function (y)
                                     {
                                       return (W$.Compare)(x, y) < 1 ?
                                              x :
                                              y;
                                     };
                            }, s);
};

(W$.Seq$).max =
function (s)
{
  return ((W$.Seq$).reduce)(function (x)
                            {
                              return function (y)
                                     {
                                       return (W$.Compare)(x, y) > -1 ?
                                              x :
                                              y;
                                     };
                            }, s);
};

(W$.Seq$).minBy =
function (f, s)
{
  return ((W$.Seq$).reduce)(function (x)
                            {
                              return function (y)
                                     {
                                       return (W$.Compare)(f(x), f(y)) < 1 ?
                                              x :
                                              y;
                                     };
                            }, s);
};

(W$.Seq$).maxBy =
function (f, s)
{
  return ((W$.Seq$).reduce)(function (x)
                            {
                              return function (y)
                                     {
                                       return (W$.Compare)(f(x), f(y)) > -1 ?
                                              x :
                                              y;
                                     };
                            }, s);
};

(W$.Seq$).map2 =
function (f, s1, s2)
{
  return (function (getEnumerator)
          {
            var getEnumerator_1 = getEnumerator;
            return ((new W$.$Enumerable())._ctor)(getEnumerator_1);
          })(
         function (unitVar0)
         {
           var e1 = (s1.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
           var e2 = (s2.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
           var dispose = function (_arg1)
                         {
                           (e1.$IDisposable_p1a5dece2430d1c7_Dispose)();
                           return (e2.$IDisposable_p1a5dece2430d1c7_Dispose)();
                         };
           var state;
           return (function (next)
                   {
                     var next_1 = next;
                     var state_1 = state;
                     var dispose_1 = dispose;
                     var returnVal =
                         ((new W$.$Enumerator())._ctor)(next_1, dispose_1);
                     returnVal.s = state_1;
                     return returnVal;
                   })(
                  function (e)
                  {
                    var __1;
                    if ((e1.$IEnumerator_p7e293af1bfe37b0_MoveNext)() ?
                        (e2.$IEnumerator_p7e293af1bfe37b0_MoveNext)() :
                        false)
                    {
                      e.c =
                      (f((e1.$IEnumerator_1_n7f0e01069ab79374_get_Current)()))(
                      (e2.$IEnumerator_1_n7f0e01069ab79374_get_Current)());
                      __1 = true;
                    }
                    else
                    {
                      __1 = false;
                    }
                    return __1;
                  });
         });
};

(W$.Seq$).mapi =
function (f, s)
{
  return ((W$.Seq$).map2)(f, ((W$.Seq$).initInfinite)(function (x)
                                                      {
                                                        return x;
                                                      }), s);
};

(W$.Seq$).map =
function (f, s)
{
  return (function (getEnumerator)
          {
            var getEnumerator_1 = getEnumerator;
            return ((new W$.$Enumerable())._ctor)(getEnumerator_1);
          })(
         function (unitVar0)
         {
           var en = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
           var dispose = function (_arg1)
                         {
                           return (en.$IDisposable_p1a5dece2430d1c7_Dispose)();
                         };
           var state;
           return (function (next)
                   {
                     var next_1 = next;
                     var state_1 = state;
                     var dispose_1 = dispose;
                     var returnVal =
                         ((new W$.$Enumerator())._ctor)(next_1, dispose_1);
                     returnVal.s = state_1;
                     return returnVal;
                   })(
                  function (e)
                  {
                    var __1;
                    if ((en.$IEnumerator_p7e293af1bfe37b0_MoveNext)())
                    {
                      e.c =
                      f((en.$IEnumerator_1_n7f0e01069ab79374_get_Current)());
                      __1 = true;
                    }
                    else
                    {
                      __1 = false;
                    }
                    return __1;
                  });
         });
};

(W$.Seq$).length =
function (s)
{
  var i = 0;
  var e = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
  var _1;
  try
  {
    while ((e.$IEnumerator_p7e293af1bfe37b0_MoveNext)())
    {
      i = i + 1;
    };
    _1 = i;
  }
  finally
  {
    if ("$$IDisposable_p1a5dece2430d1c7__IDisposable" in Object(e))
    {
      (e.$IDisposable_p1a5dece2430d1c7_Dispose)();
    }
  }
  return _1;
};

(W$.Seq$).iteri =
function (p, s)
{
  var i = 0;
  var e = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
  var _1;
  try
  {
    while ((e.$IEnumerator_p7e293af1bfe37b0_MoveNext)())
    {
      (p(i))((e.$IEnumerator_1_n7f0e01069ab79374_get_Current)());
      i = i + 1;
    };
    _1 = undefined;
  }
  finally
  {
    if ("$$IDisposable_p1a5dece2430d1c7__IDisposable" in Object(e))
    {
      (e.$IDisposable_p1a5dece2430d1c7_Dispose)();
    }
  }
  return _1;
};

(W$.Seq$).iter2 =
function (p, s1, s2)
{
  var e1 = (s1.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
  var _1;
  try
  {
    var e2 = (s2.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
    var _2;
    try
    {
      while ((e1.$IEnumerator_p7e293af1bfe37b0_MoveNext)() ?
             (e2.$IEnumerator_p7e293af1bfe37b0_MoveNext)() :
             false)
      {
        (p((e1.$IEnumerator_1_n7f0e01069ab79374_get_Current)()))(
        (e2.$IEnumerator_1_n7f0e01069ab79374_get_Current)());
      };
      _2 = undefined;
    }
    finally
    {
      if ("$$IDisposable_p1a5dece2430d1c7__IDisposable" in Object(e2))
      {
        (e2.$IDisposable_p1a5dece2430d1c7_Dispose)();
      }
    }
    _1 = _2;
  }
  finally
  {
    if ("$$IDisposable_p1a5dece2430d1c7__IDisposable" in Object(e1))
    {
      (e1.$IDisposable_p1a5dece2430d1c7_Dispose)();
    }
  }
  return _1;
};

(W$.Seq$).iter =
function (p, s)
{
  return ((W$.Seq$).iteri)(function (_arg1)
                           {
                             return function (x)
                                    {
                                      return p(x);
                                    };
                           }, s);
};

(W$.Seq$).isEmpty =
function (s)
{
  var e = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
  var _1;
  try
  {
    _1 = !(e.$IEnumerator_p7e293af1bfe37b0_MoveNext)();
  }
  finally
  {
    if ("$$IDisposable_p1a5dece2430d1c7__IDisposable" in Object(e))
    {
      (e.$IDisposable_p1a5dece2430d1c7_Dispose)();
    }
  }
  return _1;
};

(W$.Seq$).initInfinite =
function (f)
{
  return (function (getEnumerator)
          {
            var getEnumerator_1 = getEnumerator;
            return ((new W$.$Enumerable())._ctor)(getEnumerator_1);
          })(
         function (unitVar0)
         {
           var state = 0;
           return (function (next)
                   {
                     var next_1 = next;
                     var state_1 = state;
                     var returnVal =
                         ((new W$.$Enumerator())._ctor)(next_1, null);
                     returnVal.s = state_1;
                     return returnVal;
                   })(function (e)
                      {
                        e.c = f(e.s);
                        e.s = e.s + 1;
                        return true;
                      });
         });
};

(W$.Seq$).init =
function (n, f)
{
  return ((W$.Seq$).take)(n, ((W$.Seq$).initInfinite)(f));
};

(W$.Seq$).head =
function (s)
{
  var e = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
  var _1;
  try
  {
    _1 = ((e.$IEnumerator_p7e293af1bfe37b0_MoveNext)() ?
          (e.$IEnumerator_1_n7f0e01069ab79374_get_Current)() :
          ((W$.Op$).invalidArg)("s", "the input sequence was empty"));
  }
  finally
  {
    if ("$$IDisposable_p1a5dece2430d1c7__IDisposable" in Object(e))
    {
      (e.$IDisposable_p1a5dece2430d1c7_Dispose)();
    }
  }
  return _1;
};

(W$.Seq$).groupBy =
function (f, s)
{
  return ((W$.Seq$).delay)(
         function (unitVar0)
         {
           var d =
               ((new W$.Dict())._ctor)(
               {}, function (x)
                   {
                     var _this = x;
                     var copyOfStruct = ((W$.Hash).Get)(_this);
                     return (copyOfStruct.toString)();
                   });
           var e = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
           var _1;
           try
           {
             while ((e.$IEnumerator_p7e293af1bfe37b0_MoveNext)())
             {
               var c = (e.$IEnumerator_1_n7f0e01069ab79374_get_Current)();
               var k = f(c);
               if ((d.ContainsKey)(k))
               {
                 void (((d.get_Item)(k)).push)(c);
               }
               else
               {
                 (d.set_Item)(k, [c]);
               }
             };
             var mapping = function (kv)
                           {
                             var _this = kv;
                             var this_1 = kv;
                             return [_this.key, this_1.value];
                           };
             _1 = (function (source)
                   {
                     return ((W$.Seq$).map)(mapping, source);
                   })(d);
           }
           finally
           {
             if ("$$IDisposable_p1a5dece2430d1c7__IDisposable" in Object(e))
             {
               (e.$IDisposable_p1a5dece2430d1c7_Dispose)();
             }
           }
           return _1;
         });
};

(W$.Seq$).forall2 =
function (p, s1, s2)
{
  return !((W$.Seq$).exists2)(function (x)
                              {
                                return function (y)
                                       {
                                         return !(p(x))(y);
                                       };
                              }, s1, s2);
};

(W$.Seq$).forall =
function (p, s)
{
  return !((W$.Seq$).exists)(function (x)
                             {
                               return !p(x);
                             }, s);
};

(W$.Seq$).fold =
function (f, x, s)
{
  var r = x;
  var e = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
  var _1;
  try
  {
    while ((e.$IEnumerator_p7e293af1bfe37b0_MoveNext)())
    {
      r = (f(r))((e.$IEnumerator_1_n7f0e01069ab79374_get_Current)());
    };
    _1 = r;
  }
  finally
  {
    if ("$$IDisposable_p1a5dece2430d1c7__IDisposable" in Object(e))
    {
      (e.$IDisposable_p1a5dece2430d1c7_Dispose)();
    }
  }
  return _1;
};

(W$.Seq$).findIndex =
function (p, s)
{
  var matchValue = ((W$.Seq$).tryFindIndex)(p, s);
  var __1;
  if (matchValue.$ == 0)
  {
    __1 = ((W$.Op$).failwith)("KeyNotFoundException");
  }
  else
  {
    var x = matchValue.$0;
    __1 = x;
  }
  return __1;
};

(W$.Seq$).find =
function (p, s)
{
  var matchValue = ((W$.Seq$).tryFind)(p, s);
  var __1;
  if (matchValue.$ == 0)
  {
    __1 = ((W$.Op$).failwith)("KeyNotFoundException");
  }
  else
  {
    var x = matchValue.$0;
    __1 = x;
  }
  return __1;
};

(W$.Seq$).filter =
function (f, s)
{
  return (function (getEnumerator)
          {
            var getEnumerator_1 = getEnumerator;
            return ((new W$.$Enumerable())._ctor)(getEnumerator_1);
          })(
         function (unitVar0)
         {
           var _enum = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
           var dispose =
               function (_arg1)
               {
                 return (_enum.$IDisposable_p1a5dece2430d1c7_Dispose)();
               };
           var state;
           return (function (next)
                   {
                     var next_1 = next;
                     var state_1 = state;
                     var dispose_1 = dispose;
                     var returnVal =
                         ((new W$.$Enumerator())._ctor)(next_1, dispose_1);
                     returnVal.s = state_1;
                     return returnVal;
                   })(
                  function (e)
                  {
                    var loop = (_enum.$IEnumerator_p7e293af1bfe37b0_MoveNext)();
                    var c =
                        (_enum.$IEnumerator_1_n7f0e01069ab79374_get_Current)();
                    var res = false;
                    while (loop)
                    {
                      if (f(c))
                      {
                        e.c = c;
                        res = true;
                        loop = false;
                      }
                      else
                      {
                        if ((_enum.$IEnumerator_p7e293af1bfe37b0_MoveNext)())
                        {
                          c =
                          (_enum.$IEnumerator_1_n7f0e01069ab79374_get_Current)();
                        }
                        else
                        {
                          loop = false;
                        }
                      }
                    };
                    return res;
                  });
         });
};

(W$.Seq$).exists2 =
function (p, s1, s2)
{
  var e1 = (s1.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
  var _1;
  try
  {
    var e2 = (s2.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
    var _2;
    try
    {
      var r = false;
      while ((!r ?
              (e1.$IEnumerator_p7e293af1bfe37b0_MoveNext)() :
              false) ?
             (e2.$IEnumerator_p7e293af1bfe37b0_MoveNext)() :
             false)
      {
        r =
        (p((e1.$IEnumerator_1_n7f0e01069ab79374_get_Current)()))(
        (e2.$IEnumerator_1_n7f0e01069ab79374_get_Current)());
      };
      _2 = r;
    }
    finally
    {
      if ("$$IDisposable_p1a5dece2430d1c7__IDisposable" in Object(e2))
      {
        (e2.$IDisposable_p1a5dece2430d1c7_Dispose)();
      }
    }
    _1 = _2;
  }
  finally
  {
    if ("$$IDisposable_p1a5dece2430d1c7__IDisposable" in Object(e1))
    {
      (e1.$IDisposable_p1a5dece2430d1c7_Dispose)();
    }
  }
  return _1;
};

(W$.Seq$).exists =
function (p, s)
{
  var e = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
  var _1;
  try
  {
    var r = false;
    while (!r ?
           (e.$IEnumerator_p7e293af1bfe37b0_MoveNext)() :
           false)
    {
      r = p((e.$IEnumerator_1_n7f0e01069ab79374_get_Current)());
    };
    _1 = r;
  }
  finally
  {
    if ("$$IDisposable_p1a5dece2430d1c7__IDisposable" in Object(e))
    {
      (e.$IDisposable_p1a5dece2430d1c7_Dispose)();
    }
  }
  return _1;
};

(W$.Seq$).empty =
function (unit)
{
  var getEnumerator =
      function (unitVar0)
      {
        var next = function (_arg1)
                   {
                     return false;
                   };
        var state;
        var returnVal = ((new W$.$Enumerator())._ctor)(next, null);
        returnVal.s = state;
        return returnVal;
      };
  return ((new W$.$Enumerable())._ctor)(getEnumerator);
};

(W$.Seq$).distinctBy =
function (f, s)
{
  return (function (getEnumerator)
          {
            var getEnumerator_1 = getEnumerator;
            return ((new W$.$Enumerable())._ctor)(getEnumerator_1);
          })(
         function (unitVar0)
         {
           var _enum = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
           var seen =
               ((new W$.Dict())._ctor)(
               {}, function (x)
                   {
                     var _this = x;
                     var copyOfStruct = ((W$.Hash).Get)(_this);
                     return (copyOfStruct.toString)();
                   });
           var dispose =
               function (_arg1)
               {
                 return (_enum.$IDisposable_p1a5dece2430d1c7_Dispose)();
               };
           var state;
           return (function (next)
                   {
                     var next_1 = next;
                     var state_1 = state;
                     var dispose_1 = dispose;
                     var returnVal =
                         ((new W$.$Enumerator())._ctor)(next_1, dispose_1);
                     returnVal.s = state_1;
                     return returnVal;
                   })(
                  function (e)
                  {
                    var __2;
                    if ((_enum.$IEnumerator_p7e293af1bfe37b0_MoveNext)())
                    {
                      var cur =
                          (_enum.$IEnumerator_1_n7f0e01069ab79374_get_Current)();
                      var x = f(cur);
                      var _this = x;
                      var has = (seen.ContainsKey)(((W$.Hash).Get)(_this));
                      while (has ?
                             (_enum.$IEnumerator_p7e293af1bfe37b0_MoveNext)() :
                             false)
                      {
                        cur =
                        (_enum.$IEnumerator_1_n7f0e01069ab79374_get_Current)();
                        var x_1 = f(cur);
                        var this_1 = x_1;
                        has = (seen.ContainsKey)(((W$.Hash).Get)(this_1));
                      };
                      var __1;
                      if (has)
                      {
                        (_enum.$IDisposable_p1a5dece2430d1c7_Dispose)();
                        __1 = false;
                      }
                      else
                      {
                        var x_2 = f(cur);
                        var this_2 = x_2;
                        (seen.set_Item)(((W$.Hash).Get)(this_2), undefined);
                        e.c = cur;
                        __1 = true;
                      }
                      __2 = __1;
                    }
                    else
                    {
                      __2 = false;
                    }
                    return __2;
                  });
         });
};

(W$.Seq$).delay =
function (f)
{
  var getEnumerator =
      function (unitVar0)
      {
        return ((f(undefined)).$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
      };
  return ((new W$.$Enumerable())._ctor)(getEnumerator);
};

(W$.Seq$).countBy =
function (f, s)
{
  return (function (generator)
          {
            return ((W$.Seq$).delay)(generator);
          })(
         function (unitVar0)
         {
           var d =
               ((new W$.Dict())._ctor)(
               {}, function (x)
                   {
                     var _this = x;
                     var copyOfStruct = ((W$.Hash).Get)(_this);
                     return (copyOfStruct.toString)();
                   });
           var e = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
           var _1;
           try
           {
             while ((e.$IEnumerator_p7e293af1bfe37b0_MoveNext)())
             {
               var k = f((e.$IEnumerator_1_n7f0e01069ab79374_get_Current)());
               if ((d.ContainsKey)(k))
               {
                 (d.set_Item)(k, (d.get_Item)(k) + 1);
               }
               else
               {
                 (d.set_Item)(k, 1);
               }
             };
             var mapping = function (kv)
                           {
                             var _this = kv;
                             var this_1 = kv;
                             return [_this.key, this_1.value];
                           };
             _1 = (function (source)
                   {
                     return ((W$.Seq$).map)(mapping, source);
                   })(d);
           }
           finally
           {
             if ("$$IDisposable_p1a5dece2430d1c7__IDisposable" in Object(e))
             {
               (e.$IDisposable_p1a5dece2430d1c7_Dispose)();
             }
           }
           return _1;
         });
};

(W$.Seq$).concat =
function (ss)
{
  return ((W$.Seq$).fold)(
         function (source1)
         {
           return function (source2)
                  {
                    return ((W$.Seq$).append)(source1, source2);
                  };
         }, ((W$.Seq$).empty)(), ss);
};

(W$.Seq$).compareWith =
function (f, s1, s2)
{
  var e1 = (s1.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
  var _1;
  try
  {
    var e2 = (s2.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
    var _2;
    try
    {
      var r = 0;
      var loop = true;
      while (loop ?
             r === 0 :
             false)
      {
        var matchValue =
            [(e1.$IEnumerator_p7e293af1bfe37b0_MoveNext)(),
             (e2.$IEnumerator_p7e293af1bfe37b0_MoveNext)()];
        if (matchValue[0])
        {
          if (matchValue[1])
          {
            r =
            (f((e1.$IEnumerator_1_n7f0e01069ab79374_get_Current)()))(
            (e2.$IEnumerator_1_n7f0e01069ab79374_get_Current)());
          }
          else
          {
            r = 1;
          }
        }
        else
        {
          if (matchValue[1])
          {
            r = -1;
          }
          else
          {
            loop = false;
          }
        }
      };
      _2 = r;
    }
    finally
    {
      if ("$$IDisposable_p1a5dece2430d1c7__IDisposable" in Object(e2))
      {
        (e2.$IDisposable_p1a5dece2430d1c7_Dispose)();
      }
    }
    _1 = _2;
  }
  finally
  {
    if ("$$IDisposable_p1a5dece2430d1c7__IDisposable" in Object(e1))
    {
      (e1.$IDisposable_p1a5dece2430d1c7_Dispose)();
    }
  }
  return _1;
};

(W$.Seq$).collect =
function (f, s)
{
  return ((W$.Seq$).concat)(((W$.Seq$).map)(f, s));
};

(W$.Seq$).choose =
function (f, s)
{
  var mapping = function (x)
                {
                  var matchValue = f(x);
                  var __1;
                  if (matchValue.$ == 0)
                  {
                    __1 = new W$.$List({
                                         $: 0
                                       });
                  }
                  else
                  {
                    var v = matchValue.$0;
                    __1 = new W$.$List({
                                         $: 1,
                                         $0: v,
                                         $1: new W$.$List({
                                                            $: 0
                                                          })
                                       });
                  }
                  return __1;
                };
  return (function (source)
          {
            return ((W$.Seq$).collect)(mapping, source);
          })(s);
};

(W$.Seq$).cache =
function (s)
{
  var cache = [];
  var _enum = (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
  return (function (getEnumerator)
          {
            var getEnumerator_1 = getEnumerator;
            return ((new W$.$Enumerable())._ctor)(getEnumerator_1);
          })(
         function (unitVar0)
         {
           var next =
               function (e)
               {
                 var __2;
                 if (e.s + 1 < cache.length)
                 {
                   e.s = e.s + 1;
                   e.c = cache[e.s];
                   __2 = true;
                 }
                 else
                 {
                   var __1;
                   if ((_enum.$IEnumerator_p7e293af1bfe37b0_MoveNext)())
                   {
                     e.s = e.s + 1;
                     e.c =
                     (_enum.$IEnumerator_1_n7f0e01069ab79374_get_Current)();
                     (function (value)
                      {
                        return void value;
                      })((cache.push)(e.c));
                     __1 = true;
                   }
                   else
                   {
                     __1 = false;
                   }
                   __2 = __1;
                 }
                 return __2;
               };
           var next_1 = next;
           var state = 0;
           var returnVal = ((new W$.$Enumerator())._ctor)(next_1, null);
           returnVal.s = state;
           return returnVal;
         });
};

(W$.Seq$).averageBy =
function (f, s)
{
  var patternInput = ((W$.Seq$).fold)(function (_1)
                                      {
                                        var tupledArg = arguments.length > 1 ?
                                                        arguments :
                                                        _1;
                                        var n = tupledArg[0];
                                        var s_1 = tupledArg[1];
                                        return function (x)
                                               {
                                                 return [n + 1, s_1 + f(x)];
                                               };
                                      }, [0, 0], s);
  var sum = patternInput[1];
  var count = patternInput[0];
  return sum / count;
};

(W$.Seq$).average =
function (s)
{
  var patternInput = ((W$.Seq$).fold)(function (_1)
                                      {
                                        var tupledArg = arguments.length > 1 ?
                                                        arguments :
                                                        _1;
                                        var n = tupledArg[0];
                                        var s_1 = tupledArg[1];
                                        return function (x)
                                               {
                                                 return [n + 1, s_1 + x];
                                               };
                                      }, [0, 0], s);
  var sum = patternInput[1];
  var count = patternInput[0];
  return sum / count;
};

(W$.Seq$).append =
function (s1, s2)
{
  return (function (getEnumerator)
          {
            var getEnumerator_1 = getEnumerator;
            return ((new W$.$Enumerable())._ctor)(getEnumerator_1);
          })(
         function (unitVar0)
         {
           var e1 = (s1.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
           var e2 = (s2.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
           var next;
           next =
           function (e)
           {
             var __3;
             if (e.s)
             {
               var __1;
               if ((e2.$IEnumerator_p7e293af1bfe37b0_MoveNext)())
               {
                 e.c = (e2.$IEnumerator_1_n7f0e01069ab79374_get_Current)();
                 __1 = true;
               }
               else
               {
                 __1 = false;
               }
               __3 = __1;
             }
             else
             {
               var __2;
               if ((e1.$IEnumerator_p7e293af1bfe37b0_MoveNext)())
               {
                 e.c = (e1.$IEnumerator_1_n7f0e01069ab79374_get_Current)();
                 __2 = true;
               }
               else
               {
                 e.s = true;
                 __2 = next(e);
               }
               __3 = __2;
             }
             return __3;
           };
           var next_1 = next;
           var state = false;
           var dispose = function (_arg1)
                         {
                           (e1.$IDisposable_p1a5dece2430d1c7_Dispose)();
                           return (e2.$IDisposable_p1a5dece2430d1c7_Dispose)();
                         };
           var returnVal = ((new W$.$Enumerator())._ctor)(next_1, dispose);
           returnVal.s = state;
           return returnVal;
         });
};

if (typeof W$.List$ == "undefined")
{
  W$.List$ = {};
}

(W$.List$).unzip =
function (l)
{
  var x = ((new W$.$Queue())._ctor)([]);
  var y = ((new W$.$Queue())._ctor)([]);
  var enumerator = (l.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
  var _1;
  try
  {
    while ((enumerator.$IEnumerator_p7e293af1bfe37b0_MoveNext)())
    {
      var forLoopVar =
          (enumerator.$IEnumerator_1_n7f0e01069ab79374_get_Current)();
      var b = forLoopVar[1];
      var a = forLoopVar[0];
      (x.Enqueue)(a);
      (y.Enqueue)(b);
    };
    _1 = undefined;
  }
  finally
  {
    if ("$$IDisposable_p1a5dece2430d1c7__IDisposable" in Object(enumerator))
    {
      (enumerator.$IDisposable_p1a5dece2430d1c7_Dispose)();
    }
  }
  _1;
  return [((W$.List$).ofArray)((x.ToArray)()),
          ((W$.List$).ofArray)((y.ToArray)())];
};

(W$.List$).unzip3 =
function (l)
{
  var x = ((new W$.$Queue())._ctor)([]);
  var y = ((new W$.$Queue())._ctor)([]);
  var z = ((new W$.$Queue())._ctor)([]);
  var enumerator = (l.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
  var _1;
  try
  {
    while ((enumerator.$IEnumerator_p7e293af1bfe37b0_MoveNext)())
    {
      var forLoopVar =
          (enumerator.$IEnumerator_1_n7f0e01069ab79374_get_Current)();
      var c = forLoopVar[2];
      var b = forLoopVar[1];
      var a = forLoopVar[0];
      (x.Enqueue)(a);
      (y.Enqueue)(b);
      (z.Enqueue)(c);
    };
    _1 = undefined;
  }
  finally
  {
    if ("$$IDisposable_p1a5dece2430d1c7__IDisposable" in Object(enumerator))
    {
      (enumerator.$IDisposable_p1a5dece2430d1c7_Dispose)();
    }
  }
  _1;
  return [((W$.List$).ofArray)((x.ToArray)()),
          ((W$.List$).ofArray)((y.ToArray)()),
          ((W$.List$).ofArray)((z.ToArray)())];
};

(W$.List$).zip =
function (l1, l2)
{
  return ((W$.List$).ofArray)(
         ((W$.Array).zip)(((W$.Array).ofList)(l1), ((W$.Array).ofList)(l2)));
};

(W$.List$).zip3 =
function (l1, l2, l3)
{
  return (function (array)
          {
            return ((W$.List$).ofArray)(array);
          })(
         ((W$.Array).zip3)(
         ((W$.Array).ofList)(l1), ((W$.Array).ofList)(l2),
         ((W$.Array).ofList)(l3)));
};

(W$.List$).append =
function (x, y)
{
  var r = y;
  var l = x;
  var x_1 = ((W$.Array).ofList)(l);
  for (var i = 0; i <= x_1.length - 1; i++)
  {
    r = new W$.$List({
                       $: 1,
                       $0: x_1[(x_1.length - 1) - i],
                       $1: r
                     });
  }
  return r;
};

(W$.List$).choose =
function (f, l)
{
  return (function (array)
          {
            return ((W$.List$).ofArray)(array);
          })((function (array)
              {
                return ((W$.Array).choose)(f, array);
              })((function (list)
                  {
                    return ((W$.Array).ofList)(list);
                  })(l)));
};

(W$.List$).collect =
function (f, l)
{
  var g = function (list)
          {
            return ((W$.Array).ofList)(list);
          };
  var f_1 = f;
  var r = function (x)
          {
            return g(f_1(x));
          };
  var mapping = r;
  return (function (array)
          {
            return ((W$.List$).ofArray)(array);
          })((function (array)
              {
                var x = array;
                var f_2 = mapping;
                return (([].concat).apply)([], ((W$.Array).map)(f_2, x));
              })(((W$.Array).ofList)(l)));
};

(W$.List$).concat =
function (s)
{
  var mapping = function (list)
                {
                  return ((W$.Array).ofList)(list);
                };
  return (function (array)
          {
            return ((W$.List$).ofArray)(array);
          })((function (arrays)
              {
                var xs = arrays;
                return (([].concat).apply)([], ((W$.Seq$).toArray)(xs));
              })((function (array)
                  {
                    return ((W$.Array).map)(mapping, array);
                  })(((W$.Array).ofSeq)(s))));
};

(W$.List$).fold2 =
function (f, s, l1, l2)
{
  var folder = function (s_1)
               {
                 return function (_1)
                        {
                          var tupledArg = arguments.length > 1 ?
                                          arguments :
                                          _1;
                          var x1 = tupledArg[0];
                          var x2 = tupledArg[1];
                          return ((f(s_1))(x1))(x2);
                        };
               };
  return (function (source)
          {
            return ((W$.Seq$).fold)(folder, s, source);
          })(((W$.Array).zip)(((W$.Array).ofList)(l1), ((W$.Array).ofList)(l2)));
};

(W$.List$).foldBack2 =
function (f, l1, l2, s)
{
  var a1 = ((W$.Array).ofList)(l1);
  var a2 = ((W$.Array).ofList)(l2);
  if (a1.length !== a2.length)
  {
    ((W$.Op$).invalidArg)("list2", "The lists had different lengths.");
  }
  return ((W$.Array).foldBack2)(f, a1, a2, s);
};

(W$.List$).forall2 =
function (p, l1, l2)
{
  return ((W$.Array).forall2)(
         p, ((W$.Array).ofList)(l1), ((W$.Array).ofList)(l2));
};

(W$.List$).head =
function (l)
{
  return l.$0;
};

(W$.List$).iter2 =
function (f, l1, l2)
{
  return ((W$.Array).iter2)(f, ((W$.Array).ofList)(l1), ((W$.Array).ofList)(l2));
};

(W$.List$).iteri2 =
function (f, l1, l2)
{
  return ((W$.Array).iteri2)(f, ((W$.Array).ofList)(l1), ((W$.Array).ofList)(l2)
         );
};

(W$.List$).map =
function (f, l)
{
  return (function (array)
          {
            var arr = array;
            return ((W$.List$).ofArray)(arr);
          })((function (array)
              {
                return ((W$.Array).map)(f, array);
              })(((W$.Array).ofList)(l)));
};

(W$.List$).map2 =
function (f, l1, l2)
{
  return (function (array)
          {
            var arr = array;
            return ((W$.List$).ofArray)(arr);
          })(
         ((W$.Array).map2)(f, ((W$.Array).ofList)(l1), ((W$.Array).ofList)(l2)));
};

(W$.List$).map3 =
function (f, l1, l2, l3)
{
  return (function (array)
          {
            var arr = array;
            return ((W$.List$).ofArray)(arr);
          })(
         ((W$.Array).map2)(
         function (func)
         {
           return function (arg1)
                  {
                    return func(arg1);
                  };
         },
         ((W$.Array).map2)(f, ((W$.Array).ofList)(l1), ((W$.Array).ofList)(l2)),
         ((W$.Array).ofList)(l3)));
};

(W$.List$).mapi =
function (f, l)
{
  return (function (array)
          {
            var arr = array;
            return ((W$.List$).ofArray)(arr);
          })((function (array)
              {
                return ((W$.Array).mapi)(f, array);
              })(((W$.Array).ofList)(l)));
};

(W$.List$).mapi2 =
function (f, l1, l2)
{
  return (function (array)
          {
            var arr = array;
            return ((W$.List$).ofArray)(arr);
          })(
         ((W$.Array).mapi2)(f, ((W$.Array).ofList)(l1), ((W$.Array).ofList)(l2))
         );
};

(W$.List$).maxBy =
function (f, l)
{
  var maxBy = function (x)
              {
                return function (y)
                       {
                         return (W$.Compare)(f(x), f(y)) === 1 ?
                                x :
                                y;
                       };
              };
  return ((W$.List$).reduce)(maxBy, l);
};

(W$.List$).minBy =
function (f, l)
{
  var minBy = function (x)
              {
                return function (y)
                       {
                         return (W$.Compare)(f(x), f(y)) === -1 ?
                                x :
                                y;
                       };
              };
  return ((W$.List$).reduce)(minBy, l);
};

(W$.List$).ofArray =
function (arr)
{
  var r = new W$.$List({
                         $: 0
                       });
  for (var i = 0; i <= arr.length - 1; i++)
  {
    r = new W$.$List({
                       $: 1,
                       $0: arr[(arr.length - i) - 1],
                       $1: r
                     });
  }
  return r;
};

(W$.List$).partition =
function (p, l)
{
  var patternInput = ((W$.Array).partition)(p, ((W$.Array).ofList)(l));
  var b = patternInput[1];
  var a = patternInput[0];
  return [((W$.List$).ofArray)(a), ((W$.List$).ofArray)(b)];
};

(W$.List$).reduce =
function (f, list)
{
  var __1;
  if (list.$ == 1)
  {
    var t = list.$1;
    var h = list.$0;
    var l = t;
    var s = h;
    var f_1 = f;
    __1 = ((W$.Seq$).fold)(f_1, s, l);
  }
  else
  {
    __1 = ((W$.Op$).invalidArg)("list", "The input list was empty.");
  }
  return __1;
};

(W$.List$).rev =
function (l)
{
  var l_1 = l;
  var a = ((W$.Array).ofList)(l_1);
  var array = a;
  void (array.reverse)();
  var arr = a;
  return ((W$.List$).ofArray)(arr);
};

(W$.List$).scan =
function (f, s, l)
{
  return ((W$.List$).ofArray)(((W$.Array).scan)(f, s, ((W$.Array).ofList)(l)));
};

(W$.List$).scanBack =
function (f, l, s)
{
  return ((W$.List$).ofArray)(
         ((W$.Array).scanBack)(f, ((W$.Array).ofList)(l), s));
};

(W$.List$).sort =
function (l)
{
  var a = ((W$.Array).ofList)(l);
  var arr = a;
  ((W$.Array).sortInPlaceBy)(function (x)
                             {
                               return x;
                             }, arr);
  return ((W$.List$).ofArray)(a);
};

(W$.List$).sortWith =
function (f, l)
{
  var a = ((W$.Array).ofList)(l);
  ((W$.Array).sortInPlaceWith)(f, a);
  return ((W$.List$).ofArray)(a);
};

if (typeof W$.Attr == "undefined")
{
  W$.Attr = {};
}

(W$.Attr).NewAttr =
function (name, value)
{
  return new (W$.Html).Attribute({
                                   name: name,
                                   value: value
                                 });
};

if (typeof W$.Hash == "undefined")
{
  W$.Hash = {};
}

(W$.Hash).Get =
function (o)
{
  var __4;
  if (typeof o == "undefined")
  {
    __4 = -11;
  }
  else
  {
    var __3;
    if (o === null)
    {
      __3 = -12;
    }
    else
    {
      var __2;
      if ("GetHashCode" in Object(o))
      {
        __2 = (o.GetHashCode)();
      }
      else
      {
        var __1;
        if ("$hash" in o)
        {
          __1 = o.$hash;
        }
        else
        {
          var h = ((W$.Hash).New)();
          o.$hash = h;
          __1 = h;
        }
        __2 = __1;
      }
      __3 = __2;
    }
    __4 = __3;
  }
  return __4;
};

(W$.Hash).Mix =
function (x, y)
{
  return -(Math.abs)(((x << 5) + x) + y);
};

(W$.Hash).String =
function (s)
{
  var hash = 5381;
  var _this = s;
  for (var i = 0; i <= _this.length - 1; i++)
  {
    var ix = i;
    var s_1 = s;
    hash = ((hash << 5) + hash) + (((s_1.charAt)(ix)).charCodeAt)(0);
    var _this = s;
  }
  return -(Math.abs)(hash);
};

(W$.Hash).New =
function (unitVar0)
{
  ((W$.Hash).maximum).value = (((W$.Hash).maximum).get)() + 1;
  return (((W$.Hash).maximum).get)();
};

(W$.Hash).maximum = Delay(function (unitVar0)
                          {
                            return 0;
                          });

if (typeof W$.Observer$ == "undefined")
{
  W$.Observer$ = {};
}

(W$.Observer$).Simple =
function (f)
{
  return new W$.$Observer({
                            observe: function (_arg1)
                                     {
                                       if (_arg1.$ == 0)
                                       {
                                         var x = _arg1.$0;
                                         f(x);
                                       }
                                     }
                          });
};

if (typeof W$.Op$ == "undefined")
{
  W$.Op$ = {};
}

(W$.Op$).using =
function (t, f)
{
  var _1;
  try
  {
    _1 = f(t);
  }
  finally
  {
    (t.$IDisposable_p1a5dece2430d1c7_Dispose)();
  }
  return _1;
};

(W$.Op$).tanh =
function (x)
{
  var a = (Math.exp)(x);
  var b = (Math.exp)(-x);
  return (a - b) / (a + b);
};

(W$.Op$).tan =
function (x)
{
  return (Math.tan)(x);
};

(W$.Op$).sinh =
function (x)
{
  return ((Math.exp)(x) - (Math.exp)(-x)) / 2;
};

(W$.Op$).sign =
function (x)
{
  var matchValue = x;
  var __2;
  if (matchValue === 0)
  {
    __2 = 0;
  }
  else
  {
    var n = matchValue;
    var __1;
    if (n < 0)
    {
      var n_1 = matchValue;
      __1 = -1;
    }
    else
    {
      __1 = 1;
    }
    __2 = __1;
  }
  return __2;
};

(W$.Op$).pown =
function (a, n)
{
  var a_1 = a;
  var p;
  p =
  function (n_1)
  {
    var __2;
    if (n_1 === 1)
    {
      __2 = a_1;
    }
    else
    {
      var n_2 = n_1;
      var __1;
      if (n_2 % 2 === 0)
      {
        var n_3 = n_1;
        var b = p(n_3 / 2 >> 0);
        __1 = b * b;
      }
      else
      {
        var n_4 = n_1;
        __1 = a_1 * p(n_4 - 1);
      }
      __2 = __1;
    }
    return __2;
  };
  return p(n);
};

(W$.Op$).nullArg =
function (msg)
{
  return ((W$.Op$).failwith)("ArgumentNullException: " + msg);
};

(W$.Op$).failwith =
function (msg)
{
  throw new Error(msg);
};

(W$.Op$).min =
function (a, b)
{
  return (W$.Compare)(a, b) === -1 ?
         a :
         b;
};

(W$.Op$).max =
function (a, b)
{
  return (W$.Compare)(a, b) === 1 ?
         a :
         b;
};

(W$.Op$).log10 =
function (x)
{
  return (Math.log)(x) / (Math.log)(10);
};

(W$.Op$).invalidOp =
function (message)
{
  return ((W$.Op$).failwith)("InvalidOperationException: " + message);
};

(W$.Op$).invalidArg =
function (arg, message)
{
  return ((W$.Op$).failwith)(
         (("ArgumentException (invalid " + arg) + "): ") + message);
};

(W$.Op$).incr =
function (x)
{
  return x[0] = x[0] + 1;
};

(W$.Op$).defaultArg =
function (x, d)
{
  var __1;
  if (x.$ == 0)
  {
    __1 = d;
  }
  else
  {
    var x_1 = x.$0;
    __1 = x_1;
  }
  return __1;
};

(W$.Op$).decr =
function (x)
{
  return x[0] = x[0] - 1;
};

(W$.Op$).cosh =
function (x)
{
  return ((Math.exp)(x) + (Math.exp)(-x)) / 2;
};

(W$.Op$).Step =
function (min, step, max)
{
  var x = max;
  var predicate = function (y)
                  {
                    return x >= y;
                  };
  return (function (x_1)
          {
            return x_1;
          })((function (source)
              {
                return ((W$.Seq$).takeWhile)(predicate, source);
              })(((W$.Seq$).initInfinite)(function (k)
                                          {
                                            return min + k * step;
                                          })));
};

(W$.Op$).Range =
function (min, max)
{
  return ((W$.Seq$).init)((1 + max) - min, function (x)
                                           {
                                             return x + min;
                                           });
};

if (typeof W$.Array == "undefined")
{
  W$.Array = {};
}

(W$.Array).zip3 =
function (arr1, arr2, arr3)
{
  if (arr1.length !== arr2.length ?
      true :
      arr2.length !== arr3.length)
  {
    ((W$.Op$).invalidArg)("arr3", "The arrays have different lengths.");
  }
  var arr = arr1;
  var size = arr.length;
  var res = new Array(size);
  for (var i = 0; i <= arr1.length - 1; i++)
  {
    res[i] = [arr1[i], arr2[i], arr3[i]];
  }
  return res;
};

(W$.Array).zip =
function (arr1, arr2)
{
  if (arr1.length !== arr2.length)
  {
    ((W$.Op$).invalidArg)("arr2", "The arrays have different lengths.");
  }
  var arr = arr1;
  var size = arr.length;
  var res = new Array(size);
  for (var i = 0; i <= arr1.length - 1; i++)
  {
    res[i] = [arr1[i], arr2[i]];
  }
  return res;
};

(W$.Array).unzip3 =
function (arr)
{
  var x = ((new W$.$Queue())._ctor)([]);
  var y = ((new W$.$Queue())._ctor)([]);
  var z = ((new W$.$Queue())._ctor)([]);
  for (var i = 0; i <= arr.length - 1; i++)
  {
    var matchValue = arr[i];
    var c = matchValue[2];
    var b = matchValue[1];
    var a = matchValue[0];
    (x.Enqueue)(a);
    (y.Enqueue)(b);
    (z.Enqueue)(c);
  }
  return [(x.ToArray)(), (y.ToArray)(), (z.ToArray)()];
};

(W$.Array).unzip =
function (arr)
{
  var x = ((new W$.$Queue())._ctor)([]);
  var y = ((new W$.$Queue())._ctor)([]);
  for (var i = 0; i <= arr.length - 1; i++)
  {
    var patternInput = arr[i];
    var b = patternInput[1];
    var a = patternInput[0];
    (x.Enqueue)(a);
    (y.Enqueue)(b);
  }
  return [(x.ToArray)(), (y.ToArray)()];
};

(W$.Array).sub =
function (arr, start, length)
{
  ((W$.Array).checkRange)(arr, start, length);
  var res = new Array(length);
  for (var i = start; i <= (start + length) - 1; i++)
  {
    res[i - start] = arr[i];
  }
  return res;
};

(W$.Array).checkRange =
function (arr, start, size)
{
  if ((size < 0 ?
       true :
       start < 0) ?
      true :
      arr.length < start + size)
  {
    ((W$.Op$).invalidArg)("size", "Index was outside the bounds of the array.");
  }
};

(W$.Array).sortWith =
function (comparer, arr)
{
  var f = function (_1)
          {
            var tupledArg = arguments.length > 1 ?
                            arguments :
                            _1;
            var x = tupledArg[0];
            var y = tupledArg[1];
            return (comparer(x))(y);
          };
  var x_1 = arr;
  return (((x_1.slice)(0, x_1.length)).sort)(f);
};

(W$.Array).sortInPlaceWith =
function (comparer, arr)
{
  var f = function (_1)
          {
            var tupledArg = arguments.length > 1 ?
                            arguments :
                            _1;
            var x = tupledArg[0];
            var y = tupledArg[1];
            return (comparer(x))(y);
          };
  return (function (value)
          {
            return void value;
          })((arr.sort)(f));
};

(W$.Array).sortInPlaceBy =
function (f, arr)
{
  var f_1 = function (_1)
            {
              var tupledArg = arguments.length > 1 ?
                              arguments :
                              _1;
              var x = tupledArg[0];
              var y = tupledArg[1];
              var b = f(y);
              var a = f(x);
              return (W$.Compare)(a, b);
            };
  return (function (value)
          {
            return void value;
          })((arr.sort)(f_1));
};

(W$.Array).sortBy =
function (f, arr)
{
  var f_1 = function (_1)
            {
              var tupledArg = arguments.length > 1 ?
                              arguments :
                              _1;
              var x = tupledArg[0];
              var y = tupledArg[1];
              var b = f(y);
              var a = f(x);
              return (W$.Compare)(a, b);
            };
  var x_1 = arr;
  return (((x_1.slice)(0, x_1.length)).sort)(f_1);
};

(W$.Array).set =
function (arr, index, value)
{
  return arr[index] = value;
};

(W$.Array).scanBack =
function (f, arr, zero)
{
  var len = arr.length;
  var size = 1 + len;
  var ret = new Array(size);
  ret[len] = zero;
  for (var i = 0; i <= len - 1; i++)
  {
    ret[(len - i) - 1] = (f(arr[(len - i) - 1]))(ret[len - i]);
  }
  return ret;
};

(W$.Array).scan =
function (f, zero, arr)
{
  var size = 1 + arr.length;
  var ret = new Array(size);
  ret[0] = zero;
  for (var i = 0; i <= arr.length - 1; i++)
  {
    ret[i + 1] = (f(ret[i]))(arr[i]);
  }
  return ret;
};

(W$.Array).reduceBack =
function (f, arr)
{
  if (arr.length < 1)
  {
    ((W$.Op$).invalidArg)("arr", "The input array was empty.");
  }
  var len = arr.length;
  var acc = [arr[len - 1]];
  for (var i = 2; i <= len; i++)
  {
    acc[0] = (f(arr[len - i]))(acc[0]);
  }
  return acc[0];
};

(W$.Array).reduce =
function (f, arr)
{
  if (arr.length < 1)
  {
    ((W$.Op$).invalidArg)("arr", "The input array was empty.");
  }
  var acc = [arr[0]];
  for (var i = 1; i <= arr.length - 1; i++)
  {
    acc[0] = (f(acc[0]))(arr[i]);
  }
  return acc[0];
};

(W$.Array).permute =
function (f, arr)
{
  var x = arr;
  var ret = (x.slice)(0, x.length);
  for (var i = 0; i <= arr.length - 1; i++)
  {
    ret[f(i)] = arr[i];
  }
  return ret;
};

(W$.Array).partition =
function (f, arr)
{
  var ret1 = ((new W$.$Queue())._ctor)([]);
  var ret2 = ((new W$.$Queue())._ctor)([]);
  for (var i = 0; i <= arr.length - 1; i++)
  {
    if (f(arr[i]))
    {
      (ret1.Enqueue)(arr[i]);
    }
    else
    {
      (ret2.Enqueue)(arr[i]);
    }
  }
  return [(ret1.ToArray)(), (ret2.ToArray)()];
};

(W$.Array).ofSeq =
function (xs)
{
  var q = ((new W$.$Queue())._ctor)([]);
  var _enum = (xs.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
  var _1;
  try
  {
    while ((_enum.$IEnumerator_p7e293af1bfe37b0_MoveNext)())
    {
      (q.Enqueue)((_enum.$IEnumerator_1_n7f0e01069ab79374_get_Current)());
    };
    _1 = (q.ToArray)();
  }
  finally
  {
    if ("$$IDisposable_p1a5dece2430d1c7__IDisposable" in Object(_enum))
    {
      (_enum.$IDisposable_p1a5dece2430d1c7_Dispose)();
    }
  }
  return _1;
};

(W$.Array).ofList =
function (xs)
{
  var q = ((new W$.$Queue())._ctor)([]);
  var action = function (x)
               {
                 return (q.Enqueue)(x);
               };
  (function (list)
   {
     var l = list;
     var f = action;
     return ((W$.Seq$).iter)(f, l);
   })(xs);
  return (q.ToArray)();
};

(W$.Array).mapi2 =
function (f, arr1, arr2)
{
  if (arr1.length !== arr2.length)
  {
    ((W$.Op$).invalidArg)("arr2", "The arrays have different lengths.");
  }
  var size = arr1.length;
  var res = new Array(size);
  for (var i = 0; i <= arr1.length - 1; i++)
  {
    res[i] = ((f(i))(arr1[i]))(arr2[i]);
  }
  return res;
};

(W$.Array).mapi =
function (f, arr)
{
  var size = arr.length;
  var y = new Array(size);
  for (var i = 0; i <= arr.length - 1; i++)
  {
    y[i] = (f(i))(arr[i]);
  }
  return y;
};

(W$.Array).map2 =
function (f, arr1, arr2)
{
  if (arr1.length !== arr2.length)
  {
    ((W$.Op$).invalidArg)("arr2", "The arrays have different lengths.");
  }
  var size = arr2.length;
  var r = new Array(size);
  for (var i = 0; i <= arr2.length - 1; i++)
  {
    r[i] = (f(arr1[i]))(arr2[i]);
  }
  return r;
};

(W$.Array).map =
function (f, arr)
{
  var size = arr.length;
  var r = new Array(size);
  for (var i = 0; i <= arr.length - 1; i++)
  {
    r[i] = f(arr[i]);
  }
  return r;
};

(W$.Array).iteri2 =
function (f, arr1, arr2)
{
  if (arr1.length !== arr2.length)
  {
    ((W$.Op$).invalidArg)("arr2", "The arrays have different lengths.");
  }
  for (var i = 0; i <= arr1.length - 1; i++)
  {
    ((f(i))(arr1[i]))(arr2[i]);
  }
};

(W$.Array).iteri =
function (f, arr)
{
  for (var i = 0; i <= arr.length - 1; i++)
  {
    (f(i))(arr[i]);
  }
};

(W$.Array).iter2 =
function (f, arr1, arr2)
{
  if (arr1.length !== arr2.length)
  {
    ((W$.Op$).invalidArg)("arr2", "The arrays have different lengths.");
  }
  for (var i = 0; i <= arr1.length - 1; i++)
  {
    (f(arr1[i]))(arr2[i]);
  }
};

(W$.Array).iter =
function (f, arr)
{
  for (var i = 0; i <= arr.length - 1; i++)
  {
    f(arr[i]);
  }
};

(W$.Array).init =
function (size, f)
{
  if (size < 0)
  {
    ((W$.Op$).invalidArg)("size", "Negative size given.");
  }
  var size_1 = size;
  var r = new Array(size_1);
  for (var i = 0; i <= size - 1; i++)
  {
    r[i] = f(i);
  }
  return r;
};

(W$.Array).forall2 =
function (f, arr1, arr2)
{
  return arr1.length === arr2.length ?
         ((W$.Seq$).forall2)(f, arr1, arr2) :
         ((W$.Op$).failwith)("Arrays differ in length.");
};

(W$.Array).foldBack2 =
function (f, arr1, arr2, zero)
{
  if (arr1.length !== arr2.length)
  {
    ((W$.Op$).invalidArg)("arr2", "The arrays have different lengths.");
  }
  var len = arr1.length;
  var accum = [zero];
  for (var i = 1; i <= len; i++)
  {
    accum[0] = ((f(arr1[len - i]))(arr2[len - i]))(accum[0]);
  }
  return accum[0];
};

(W$.Array).foldBack =
function (f, arr, zero)
{
  var acc = [zero];
  var len = arr.length;
  for (var i = 1; i <= len; i++)
  {
    acc[0] = (f(arr[len - i]))(acc[0]);
  }
  return acc[0];
};

(W$.Array).fold2 =
function (f, zero, arr1, arr2)
{
  if (arr1.length !== arr2.length)
  {
    ((W$.Op$).invalidArg)("arr2", "The arrays have different lengths.");
  }
  var accum = [zero];
  var arr = arr1;
  for (var i = 0; i <= arr.length - 1; i++)
  {
    accum[0] = ((f(accum[0]))(arr1[i]))(arr2[i]);
    var arr = arr1;
  }
  return accum[0];
};

(W$.Array).fold =
function (f, zero, arr)
{
  var acc = [zero];
  for (var i = 0; i <= arr.length - 1; i++)
  {
    acc[0] = (f(acc[0]))(arr[i]);
  }
  return acc[0];
};

(W$.Array).filter =
function (f, arr)
{
  var r = ((new W$.$Queue())._ctor)([]);
  for (var i = 0; i <= arr.length - 1; i++)
  {
    if (f(arr[i]))
    {
      (r.Enqueue)(arr[i]);
    }
  }
  return (r.ToArray)();
};

(W$.Array).fill =
function (arr, start, length, value)
{
  ((W$.Array).checkRange)(arr, start, length);
  for (var i = start; i <= (start + length) - 1; i++)
  {
    arr[i] = value;
  }
};

(W$.Array).exists2 =
function (f, arr1, arr2)
{
  return arr1.length === arr2.length ?
         ((W$.Seq$).exists2)(f, arr1, arr2) :
         ((W$.Op$).failwith)("Arrays differ in length.");
};

(W$.Array).create =
function (size, value)
{
  var size_1 = size;
  var r = new Array(size_1);
  for (var i = 0; i <= size - 1; i++)
  {
    r[i] = value;
  }
  return r;
};

(W$.Array).choose =
function (f, arr)
{
  var q = ((new W$.$Queue())._ctor)([]);
  for (var i = 0; i <= arr.length - 1; i++)
  {
    var matchValue = f(arr[i]);
    if (matchValue.$ == 0)
    {}
    else
    {
      var x = matchValue.$0;
      (q.Enqueue)(x);
    }
  }
  return (q.ToArray)();
};

(W$.Array).blit =
function (arr1, start1, arr2, start2, length)
{
  ((W$.Array).checkRange)(arr1, start1, length);
  ((W$.Array).checkRange)(arr2, start2, length);
  for (var i = 0; i <= length - 1; i++)
  {
    arr2[start2 + i] = arr1[start1 + i];
  }
};

if (typeof W$.Json == "undefined")
{
  W$.Json = {};
}

(W$.Json).Parse =
function (s)
{
  return (JSON.parse)(s, function (_1)
                         {
                           var tupledArg = arguments.length > 1 ?
                                           arguments :
                                           _1;
                           var name = tupledArg[0];
                           var value = tupledArg[1];
                           return ((W$.Json).Revive)(name, value);
                         });
};

(W$.Json).Revive =
function (name, value)
{
  var __3;
  if (value instanceof Array)
  {
    var a = value;
    var hash = a[0];
    var __2;
    if (hash)
    {
      var ctor = ((((W$.Registry).Types).get)())[hash];
      var fields = a[1];
      var __1;
      if (ctor)
      {
        var obj = new ctor();
        for (var k in fields)
        {
          obj[k] = fields[k];
        }
        __1 = obj;
      }
      else
      {
        __1 = fields;
      }
      __2 = __1;
    }
    else
    {
      (function (value_1)
       {
         return void value_1;
       })((a.shift)());
      __2 = a;
    }
    __3 = __2;
  }
  else
  {
    __3 = value;
  }
  return __3;
};

if (typeof W$.Rpc == "undefined")
{
  W$.Rpc = {};
}

(W$.Rpc).Async =
function (meth, data)
{
  return ((W$.$Async).FromContinuations)(
         function (_1)
         {
           var tupledArg = arguments.length > 1 ?
                           arguments :
                           _1;
           var ok = tupledArg[0];
           var exn = tupledArg[1];
           var cancel = tupledArg[2];
           return ((W$.Rpc).Ajax)(meth, true, ok, exn, data);
         });
};

(W$.Rpc).Ajax =
function (meth, async, onSuccess, onError, data)
{
  var returnVal = {};
  returnVal.async = async;
  returnVal.beforeSend =
  function (xhr)
  {
    var ajax_1 = this;
    (xhr.setRequestHeader)("X-WebSharper", "Rpc");
    return (xhr.setRequestHeader)("X-WebSharper-Rpc-Method", meth);
  };
  returnVal.contentType = "text/json";
  returnVal.data = (JSON.stringify)(data);
  returnVal.dataType = 5;
  returnVal.error =
  function (_arg2, _arg1, err)
  {
    var _arg3 = this;
    return onError(err);
  };
  returnVal.success =
  function (data_1, _arg4)
  {
    var _arg5 = this;
    var error = false;
    var _1;
    try
    {
      _1 = ((W$.Json).Parse)(data_1);
    }
    catch (exception)
    {
      var exn = exception;
      error = true;
      _1 = exn;
    }
    var data_2 = _1;
    if (error)
    {
      onError(data_2);
    }
    else
    {
      onSuccess(data_2);
    }
  };
  returnVal.type = "POST";
  var ajax = returnVal;
  return void (jQuery.ajax)(ajax);
};

(W$.Rpc).Sync =
function (meth, data)
{
  var value = [null];
  var error = [false];
  ((W$.Rpc).Ajax)(meth, false, function (x)
                               {
                                 return value[0] = x;
                               }, function (e)
                                  {
                                    value[0] = e;
                                    return error[0] = true;
                                  }, data);
  var __1;
  if (error[0])
  {
    throw value[0];
    __1 = undefined;
  }
  else
  {
    __1 = value[0];
  }
  return __1;
};

(W$.Rpc).Send =
function (meth, data)
{
  return ((W$.Rpc).Ajax)(meth, false, function (value)
                                      {
                                        return void value;
                                      }, function (value)
                                         {
                                           return void value;
                                         }, data);
};

if (typeof W$.$Async == "undefined")
{
  W$.$Async = {};
}

(W$.$Async).Catch =
function (computation)
{
  return{
          Start: function (k)
                 {
                   var g = function (arg0)
                           {
                             return{
                                     $: 0,
                                     $0: arg0
                                   };
                           };
                   var f = k.Success;
                   var r = function (x)
                           {
                             return f(g(x));
                           };
                   var g_1 = function (arg0)
                             {
                               return{
                                       $: 1,
                                       $0: arg0
                                     };
                             };
                   var f_1 = k.Success;
                   var r_1 = function (x)
                             {
                               return f_1(g_1(x));
                             };
                   return (computation.Start)({
                                                Success: r,
                                                Failure: r_1
                                              });
                 }
        };
};

(W$.$Async).Start =
function (computation, cancellationToken)
{
  return (computation.Start)({
                               Success: function (unitVar0)
                                        {},
                               Failure: function (_arg1)
                                        {}
                             });
};

(W$.$Async).Ignore =
function (computation)
{
  return{
          Start: function (k)
                 {
                   var g = function (value)
                           {
                             return void value;
                           };
                   var f = k.Success;
                   var r = function (x)
                           {
                             return f(g(x));
                           };
                   return (computation.Start)({
                                                Success: r,
                                                Failure: k.Failure
                                              });
                 }
        };
};

(W$.$Async).Sleep =
function (milliseconds)
{
  return{
          Start: function (k)
                 {
                   return (window.setTimeout)(k.Success, milliseconds);
                 }
        };
};

(W$.$Async).FromContinuations =
function (callback)
{
  return{
          Start: function (k)
                 {
                   return callback([k.Success, k.Failure, function (_arg2)
                                                          {}]);
                 }
        };
};

if (typeof W$.Web == "undefined")
{
  W$.Web = {};
}

(W$.Web).Init =
Delay(
function (unitVar0)
{
  return jQuery(
         function (unitVar0_1)
         {
           return void
                  ((jQuery(".WebSharper")).each)(
                  function ()
                  {
                    var el = this;
                    var widget = (function (s)
                                  {
                                    return ((W$.Json).Parse)(s);
                                  })(((el.childNodes)[0]).nodeValue);
                    void
                    ((jQuery(el)).append)(
                    (widget.$IWidget_p4036373d8372c14d_get_Body)());
                    return (widget.$IWidget_p4036373d8372c14d_Render)();
                  });
         });
});

if (typeof W$.Async$ == "undefined")
{
  W$.Async$ = {};
}

(W$.Async$).Do = Delay(function (unitVar0)
                       {
                         return ((new W$.AsyncBuilder())._ctor)();
                       });

if (typeof W$.Event$ == "undefined")
{
  W$.Event$ = {};
}

(W$.Event$).choose =
function (c, e)
{
  var f =
      function (f_1)
      {
        var h = function (x)
                {
                  var matchValue = c(x);
                  if (matchValue.$ == 0)
                  {}
                  else
                  {
                    var x_1 = matchValue.$0;
                    f_1(x_1);
                  }
                };
        var event = e;
        return (event.$IObservable_1_pa29d3c612f3d457_Subscribe)(
               ((W$.Observer$).Simple)(h));
      };
  return new W$.$Observable({
                              subscribe: f
                            });
};

(W$.Event$).filter =
function (ok, e)
{
  var f =
      function (f_1)
      {
        var h = function (x)
                {
                  if (ok(x))
                  {
                    f_1(x);
                  }
                };
        var event = e;
        return (event.$IObservable_1_pa29d3c612f3d457_Subscribe)(
               ((W$.Observer$).Simple)(h));
      };
  return new W$.$Observable({
                              subscribe: f
                            });
};

(W$.Event$).map =
function (t, e)
{
  var f =
      function (f_1)
      {
        var h = function (x)
                {
                  return f_1(t(x));
                };
        var event = e;
        return (event.$IObservable_1_pa29d3c612f3d457_Subscribe)(
               ((W$.Observer$).Simple)(h));
      };
  return new W$.$Observable({
                              subscribe: f
                            });
};

(W$.Event$).merge =
function (e1, e2)
{
  var f =
      function (f_1)
      {
        var h = f_1;
        var event = e1;
        var d1 =
            (event.$IObservable_1_pa29d3c612f3d457_Subscribe)(
            ((W$.Observer$).Simple)(h));
        var h_1 = f_1;
        var event_1 = e2;
        var d2 =
            (event_1.$IObservable_1_pa29d3c612f3d457_Subscribe)(
            ((W$.Observer$).Simple)(h_1));
        var f_2 = function (unitVar0)
                  {
                    (d1.$IDisposable_p1a5dece2430d1c7_Dispose)();
                    return (d2.$IDisposable_p1a5dece2430d1c7_Dispose)();
                  };
        return new W$.$Disposable({
                                    dispose: f_2
                                  });
      };
  return new W$.$Observable({
                              subscribe: f
                            });
};

(W$.Event$).pairwise =
function (e)
{
  var buf = [{
               $: 0
             }];
  var ev = ((new W$.$Event())._ctor)();
  var e_1 = e;
  var f = function (x)
          {
            var matchValue = buf[0];
            if (matchValue.$ == 1)
            {
              var old = matchValue.$0;
              buf[0] ={
                        $: 1,
                        $0: x
                      };
              (ev.Trigger)([old, x]);
            }
            else
            {
              buf[0] ={
                        $: 1,
                        $0: x
                      };
            }
          };
  var h = f;
  var event = e_1;
  void
  (event.$IObservable_1_pa29d3c612f3d457_Subscribe)(((W$.Observer$).Simple)(h));
  var _this = ev;
  return _this;
};

(W$.Event$).partition =
function (f, e)
{
  var g = function (value)
          {
            return !value;
          };
  var f_1 = f;
  var r = function (x)
          {
            return g(f_1(x));
          };
  return [((W$.Event$).filter)(f, e), ((W$.Event$).filter)(r, e)];
};

(W$.Event$).scan =
function (fold, seed, e)
{
  var state = [seed];
  var f = function (value)
          {
            state[0] = (fold(state[0]))(value);
            return state[0];
          };
  return ((W$.Event$).map)(f, e);
};

(W$.Event$).split =
function (f, e)
{
  return [((W$.Event$).choose)(function (_arg1)
                               {
                                 var __1;
                                 if (_arg1.$ == 0)
                                 {
                                   var x = _arg1.$0;
                                   __1 ={
                                          $: 1,
                                          $0: x
                                        };
                                 }
                                 else
                                 {
                                   __1 ={
                                          $: 0
                                        };
                                 }
                                 return __1;
                               }, e), ((W$.Event$).choose)(function (_arg2)
                                                           {
                                                             var __1;
                                                             if (_arg2.$ == 1)
                                                             {
                                                               var x = _arg2.$0;
                                                               __1 ={
                                                                      $: 1,
                                                                      $0: x
                                                                    };
                                                             }
                                                             else
                                                             {
                                                               __1 ={
                                                                      $: 0
                                                                    };
                                                             }
                                                             return __1;
                                                           }, e)];
};

if (typeof W$.Option$ == "undefined")
{
  W$.Option$ = {};
}

(W$.Option$).bind =
function (f, x)
{
  var __1;
  if (x.$ == 0)
  {
    __1 ={
           $: 0
         };
  }
  else
  {
    var x_1 = x.$0;
    __1 = f(x_1);
  }
  return __1;
};

(W$.Option$).count =
function (x)
{
  return x.$ == 0 ?
         0 :
         1;
};

(W$.Option$).exists =
function (p, x)
{
  var __1;
  if (x.$ == 0)
  {
    __1 = false;
  }
  else
  {
    var x_1 = x.$0;
    __1 = p(x_1);
  }
  return __1;
};

(W$.Option$).fold =
function (f, s, x)
{
  var __1;
  if (x.$ == 0)
  {
    __1 = s;
  }
  else
  {
    var x_1 = x.$0;
    __1 = (f(s))(x_1);
  }
  return __1;
};

(W$.Option$).foldBack =
function (f, x, s)
{
  var __1;
  if (x.$ == 0)
  {
    __1 = s;
  }
  else
  {
    var x_1 = x.$0;
    __1 = (f(x_1))(s);
  }
  return __1;
};

(W$.Option$).forall =
function (p, x)
{
  var __1;
  if (x.$ == 0)
  {
    __1 = true;
  }
  else
  {
    var x_1 = x.$0;
    __1 = p(x_1);
  }
  return __1;
};

(W$.Option$).get =
function (x)
{
  var __1;
  if (x.$ == 0)
  {
    __1 = ((W$.Op$).failwith)("Option was None.");
  }
  else
  {
    var x_1 = x.$0;
    __1 = x_1;
  }
  return __1;
};

(W$.Option$).isNone =
function (x)
{
  return x.$ == 0 ?
         true :
         false;
};

(W$.Option$).isSome =
function (x)
{
  return x.$ == 0 ?
         false :
         true;
};

(W$.Option$).iter =
function (p, x)
{
  if (x.$ == 0)
  {}
  else
  {
    var x_1 = x.$0;
    p(x_1);
  }
};

(W$.Option$).map =
function (f, x)
{
  var __1;
  if (x.$ == 0)
  {
    __1 ={
           $: 0
         };
  }
  else
  {
    var x_1 = x.$0;
    __1 ={
           $: 1,
           $0: f(x_1)
         };
  }
  return __1;
};

(W$.Option$).toArray =
function (x)
{
  var __1;
  if (x.$ == 0)
  {
    __1 = [];
  }
  else
  {
    var x_1 = x.$0;
    __1 = [x_1];
  }
  return __1;
};

(W$.Option$).toList =
function (x)
{
  var __1;
  if (x.$ == 0)
  {
    __1 = new W$.$List({
                         $: 0
                       });
  }
  else
  {
    var x_1 = x.$0;
    __1 = new W$.$List({
                         $: 1,
                         $0: x_1,
                         $1: new W$.$List({
                                            $: 0
                                          })
                       });
  }
  return __1;
};

if (typeof W$.String$ == "undefined")
{
  W$.String$ = {};
}

(W$.String$).TrimEnd =
function (s)
{
  return (s.replace)(new RegExp("\\s*$", "g"), "");
};

(W$.String$).TrimStart =
function (s)
{
  return (s.replace)(new RegExp("^\\s*", "g"), "");
};

(W$.String$).Trim =
function (s)
{
  return ((W$.String$).TrimStart)(((W$.String$).TrimEnd)(s));
};

(W$.String$).Replace =
function (search, target, subject)
{
  var subject_1 = subject;
  var loop = true;
  while (loop)
  {
    var next = (subject_1.replace)(search, target);
    if (next === subject_1)
    {
      loop = false;
    }
    else
    {
      subject_1 = next;
    }
  };
  return subject_1;
};

if (typeof IntelliFactory$ == "undefined")
{
  IntelliFactory$ = {};
}

if (typeof IntelliFactory$.WebSharper$ == "undefined")
{
  IntelliFactory$.WebSharper$ = {};
}

if (typeof (IntelliFactory$.WebSharper$).Runtime$ == "undefined")
{
  (IntelliFactory$.WebSharper$).Runtime$ = {};
}

if (typeof ((IntelliFactory$.WebSharper$).Runtime$).Tree$ == "undefined")
{
  ((IntelliFactory$.WebSharper$).Runtime$).Tree$ = {};
}

(((IntelliFactory$.WebSharper$).Runtime$).Tree$).$Tree_1 =
function ()
{};

(((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend =
function (t)
{
  return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Enumerate)(false, t);
};

(((IntelliFactory$.WebSharper$).Runtime$).Tree$).Descend =
function (t)
{
  return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Enumerate)(true, t);
};

(((IntelliFactory$.WebSharper$).Runtime$).Tree$).Empty =
function (unit)
{
  return null;
};

(((IntelliFactory$.WebSharper$).Runtime$).Tree$).OfSorted =
function (data)
{
  var arr = data;
  return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Build)(
         data, 0, arr.length - 1);
};

(((IntelliFactory$.WebSharper$).Runtime$).Tree$).Remove =
function (k, t)
{
  var matchValue =
      ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Lookup)(k, t);
  var __1;
  if ((W$.Equals)(matchValue[0], null))
  {
    var spine = matchValue[1];
    __1 = t;
  }
  else
  {
    var t_1 = matchValue[0];
    var spine_1 = matchValue[1];
    __1 =
    ((W$.Equals)((t_1.get_Right)(), null) ?
     ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Rebuild)(
     spine_1, (t_1.get_Left)()) :
     ((W$.Equals)((t_1.get_Left)(), null) ?
      ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Rebuild)(
      spine_1, (t_1.get_Right)()) :
      (function (t_2)
       {
         return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Rebuild)(
                spine_1, t_2);
       })(
      (function (data)
       {
         return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).OfSorted)(data
                );
       })(
      (function (source)
       {
         return ((W$.Seq$).toArray)(source);
       })(
      ((W$.Seq$).append)(
      ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)((t_1.get_Left)()
      ),
      ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(
      (t_1.get_Right)())))))));
  }
  return __1;
};

(((IntelliFactory$.WebSharper$).Runtime$).Tree$).IsEmpty =
function (t)
{
  return (W$.Equals)(t, null);
};

(((IntelliFactory$.WebSharper$).Runtime$).Tree$).Count =
function (t)
{
  return (((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Tree_1$).GetCount)(t
         );
};

(((IntelliFactory$.WebSharper$).Runtime$).Tree$).Contains =
function (v, t)
{
  var matchValue =
      ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Lookup)(v, t);
  return (W$.Equals)(matchValue[0], null) ?
         false :
         true;
};

(((IntelliFactory$.WebSharper$).Runtime$).Tree$).Add =
function (x, t)
{
  return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Put)(
         function (_arg1)
         {
           return function (x_1)
                  {
                    return x_1;
                  };
         }, x, t);
};

(((IntelliFactory$.WebSharper$).Runtime$).Tree$).OfSeq =
function (data)
{
  var s = data;
  var arr = ((W$.Seq$).toArray)(((W$.Seq$).distinctBy)(function (x)
                                                       {
                                                         return x;
                                                       }, s));
  return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).OfSorted)(
         ((W$.Array).sortBy)(function (x)
                             {
                               return x;
                             }, arr));
};

(((IntelliFactory$.WebSharper$).Runtime$).Tree$).TryFind =
function (v, t)
{
  var matchValue =
      ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Lookup)(v, t);
  var __1;
  if ((W$.Equals)(matchValue[0], null))
  {
    __1 ={
           $: 0
         };
  }
  else
  {
    var t_1 = matchValue[0];
    __1 ={
           $: 1,
           $0: (t_1.get_Node)()
         };
  }
  return __1;
};

(((IntelliFactory$.WebSharper$).Runtime$).Tree$).Lookup =
function (k, t)
{
  var spine = ((new W$.$Stack())._ctor_1)();
  var t_1 = t;
  var loop = true;
  while (loop)
  {
    if ((W$.Equals)(t_1, null))
    {
      loop = false;
    }
    else
    {
      var b = (t_1.get_Node)();
      var a = k;
      var matchValue = (W$.Compare)(a, b);
      if (matchValue === 0)
      {
        loop = false;
      }
      else
      {
        if (matchValue === 1)
        {
          (spine.Push)([true, (t_1.get_Node)(), (t_1.get_Left)()]);
          t_1 = (t_1.get_Right)();
        }
        else
        {
          (spine.Push)([false, (t_1.get_Node)(), (t_1.get_Right)()]);
          t_1 = (t_1.get_Left)();
        }
      }
    }
  };
  return [t_1, (spine.ToArray)()];
};

(((IntelliFactory$.WebSharper$).Runtime$).Tree$).Put =
function (combine, k, t)
{
  var matchValue =
      ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Lookup)(k, t);
  var __1;
  if ((W$.Equals)(matchValue[0], null))
  {
    var spine = matchValue[1];
    __1 =
    (function (t_1)
     {
       return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Rebuild)(
              spine, t_1);
     })(
    ((new (((IntelliFactory$.WebSharper$).Runtime$).Tree$).$Tree_1())._ctor)(
    k, null, null));
  }
  else
  {
    var t_2 = matchValue[0];
    var spine_1 = matchValue[1];
    __1 =
    (function (t_1)
     {
       return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Rebuild)(
              spine_1, t_1);
     })(
    ((new (((IntelliFactory$.WebSharper$).Runtime$).Tree$).$Tree_1())._ctor)(
    (combine((t_2.get_Node)()))(k), (t_2.get_Left)(), (t_2.get_Right)()));
  }
  return __1;
};

(((IntelliFactory$.WebSharper$).Runtime$).Tree$).Rebuild =
function (spine, t)
{
  var h =
      function (x)
      {
        return (((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Tree_1$).GetHeight)(
               x);
      };
  var t_1 = t;
  for (var i = 0; i <= spine.length - 1; i++)
  {
    var matchValue = spine[i];
    var __5;
    if (matchValue[0])
    {
      var x_1 = matchValue[1];
      var l = matchValue[2];
      var __2;
      if (h(t_1) > h(l) + 1)
      {
        var __1;
        if (h((t_1.get_Left)()) === h((t_1.get_Right)()) + 1)
        {
          var m = (t_1.get_Left)();
          __1 =
          ((new (((IntelliFactory$.WebSharper$).Runtime$).Tree$).$Tree_1())._ctor)(
          (m.get_Node)(),
          ((new (((IntelliFactory$.WebSharper$).Runtime$).Tree$).$Tree_1())._ctor)(
          x_1, l, (m.get_Left)()),
          ((new (((IntelliFactory$.WebSharper$).Runtime$).Tree$).$Tree_1())._ctor)(
          (t_1.get_Node)(), (m.get_Right)(), (t_1.get_Right)()));
        }
        else
        {
          __1 =
          ((new (((IntelliFactory$.WebSharper$).Runtime$).Tree$).$Tree_1())._ctor)(
          (t_1.get_Node)(),
          ((new (((IntelliFactory$.WebSharper$).Runtime$).Tree$).$Tree_1())._ctor)(
          x_1, l, (t_1.get_Left)()), (t_1.get_Right)());
        }
        __2 = __1;
      }
      else
      {
        __2 =
        ((new (((IntelliFactory$.WebSharper$).Runtime$).Tree$).$Tree_1())._ctor)(
        x_1, l, t_1);
      }
      __5 = __2;
    }
    else
    {
      var x_2 = matchValue[1];
      var r = matchValue[2];
      var __4;
      if (h(t_1) > h(r) + 1)
      {
        var __3;
        if (h((t_1.get_Right)()) === h((t_1.get_Left)()) + 1)
        {
          var m_1 = (t_1.get_Right)();
          __3 =
          ((new (((IntelliFactory$.WebSharper$).Runtime$).Tree$).$Tree_1())._ctor)(
          (m_1.get_Node)(),
          ((new (((IntelliFactory$.WebSharper$).Runtime$).Tree$).$Tree_1())._ctor)(
          (t_1.get_Node)(), (t_1.get_Left)(), (m_1.get_Left)()),
          ((new (((IntelliFactory$.WebSharper$).Runtime$).Tree$).$Tree_1())._ctor)(
          x_2, (m_1.get_Right)(), r));
        }
        else
        {
          __3 =
          ((new (((IntelliFactory$.WebSharper$).Runtime$).Tree$).$Tree_1())._ctor)(
          (t_1.get_Node)(), (t_1.get_Left)(),
          ((new (((IntelliFactory$.WebSharper$).Runtime$).Tree$).$Tree_1())._ctor)(
          x_2, (t_1.get_Right)(), r));
        }
        __4 = __3;
      }
      else
      {
        __4 =
        ((new (((IntelliFactory$.WebSharper$).Runtime$).Tree$).$Tree_1())._ctor)(
        x_2, t_1, r);
      }
      __5 = __4;
    }
    t_1 = __5;
  }
  return t_1;
};

(((IntelliFactory$.WebSharper$).Runtime$).Tree$).Build =
function (data, min, max)
{
  var sz = (max - min) + 1;
  var __1;
  if (sz <= 0)
  {
    __1 = null;
  }
  else
  {
    var center = (min + max) / 2 >> 0;
    var left =
        ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Build)(
        data, min, center - 1);
    var right =
        ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Build)(
        data, center + 1, max);
    __1 =
    ((new (((IntelliFactory$.WebSharper$).Runtime$).Tree$).$Tree_1())._ctor)(
    data[center], left, right);
  }
  return __1;
};

(((IntelliFactory$.WebSharper$).Runtime$).Tree$).Enumerate =
function (reverse, tree)
{
  var spine = ((new W$.$Stack())._ctor_1)();
  var next =
      function (en)
      {
        var tree_1 = en.s;
        var loop = true;
        while (loop)
        {
          if ((W$.Equals)(tree_1, null))
          {
            loop = false;
          }
          else
          {
            var patternInput = reverse ?
                               [(tree_1.get_Right)(), (tree_1.get_Left)()] :
                               [(tree_1.get_Left)(), (tree_1.get_Right)()];
            var r = patternInput[1];
            var l = patternInput[0];
            (spine.Push)([(tree_1.get_Node)(), r]);
            tree_1 = l;
          }
        };
        var _this = spine;
        var __1;
        if ((_this.state).length === 0)
        {
          __1 = false;
        }
        else
        {
          var patternInput_1 = (spine.Pop)();
          var y = patternInput_1[1];
          var x = patternInput_1[0];
          en.c = x;
          en.s = y;
          __1 = true;
        }
        return __1;
      };
  var getEnumerator =
      function (unitVar0)
      {
        var next_1 = next;
        var state = tree;
        var returnVal = ((new W$.$Enumerator())._ctor)(next_1, null);
        returnVal.s = state;
        return returnVal;
      };
  return ((new W$.$Enumerable())._ctor)(getEnumerator);
};

(((((IntelliFactory$.WebSharper$).Runtime$).Tree$).$Tree_1).prototype)._ctor =
function (n, l, r)
{
  var _this = this;
  _this.n = n;
  _this.l = l;
  _this.r = r;
  _this.height =
  1 +
  ((W$.Op$).max)(
  (((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Tree_1$).GetHeight)(_this.l
  ),
  (((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Tree_1$).GetHeight)(_this.r
  ));
  _this.count =
  (1 +
   (((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Tree_1$).GetCount)(_this.l
   )) +
  (((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Tree_1$).GetCount)(_this.r);
  return this;
};

(((((IntelliFactory$.WebSharper$).Runtime$).Tree$).$Tree_1).prototype).get_Height =
function (unitVar1)
{
  var _this = this;
  return _this.height;
};

(((((IntelliFactory$.WebSharper$).Runtime$).Tree$).$Tree_1).prototype).get_Count =
function (unitVar1)
{
  var _this = this;
  return _this.count;
};

(((((IntelliFactory$.WebSharper$).Runtime$).Tree$).$Tree_1).prototype).get_Node =
function (unitVar1)
{
  var _this = this;
  return _this.n;
};

(((((IntelliFactory$.WebSharper$).Runtime$).Tree$).$Tree_1).prototype).get_Left =
function (unitVar1)
{
  var _this = this;
  return _this.l;
};

(((((IntelliFactory$.WebSharper$).Runtime$).Tree$).$Tree_1).prototype).get_Right =
function (unitVar1)
{
  var _this = this;
  return _this.r;
};

if (typeof (((IntelliFactory$.WebSharper$).Runtime$).Tree$).Tree_1$ ==
    "undefined")
{
  (((IntelliFactory$.WebSharper$).Runtime$).Tree$).Tree_1$ = {};
}

((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Tree_1$).GetHeight =
function (t)
{
  return (W$.Equals)(t, null) ?
         0 :
         (t.get_Height)();
};

((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Tree_1$).GetCount =
function (t)
{
  return (W$.Equals)(t, null) ?
         0 :
         (t.get_Count)();
};

if (typeof (IntelliFactory$.WebSharper$).Proxy$ == "undefined")
{
  (IntelliFactory$.WebSharper$).Proxy$ = {};
}

if (typeof ((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$ == "undefined")
{
  ((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$ = {};
}

(((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy =
function ()
{};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype)._ctor =
function (date, kind)
{
  var _this = this;
  _this.date = date;
  _this.kind = kind;
  return this;
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype)._ctor_1 =
function (year, month, day)
{
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy())._ctor)(
         ((new Date(year, month - 1, day)).getTime)(), 0);
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype)._ctor_2 =
function (year, month, day, hour, minute, second)
{
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy())._ctor)(
         ((new Date(year, month - 1, day, hour, minute, second)).getTime)(), 0);
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype)._ctor_3 =
function (year, month, day, hour, minute, second, kind)
{
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy())._ctor)(
         ((new Date(year, month - 1, day, hour, minute, second)).getTime)(),
         kind);
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype)._ctor_4 =
function (year, month, day, hour, minute, second, millisecond)
{
  var d = new Date(year, month - 1, day, hour, minute, second, millisecond);
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy())._ctor)(
         (d.getTime)(), 0);
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype)._ctor_5 =
function (year, month, day, hour, minute, second, millisecond, kind)
{
  var d = new Date(year, month - 1, day, hour, minute, second, millisecond);
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy())._ctor)(
         (d.getTime)(), kind);
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).Add =
function (ts)
{
  var _this = this;
  var msec = (((_this.get_JDate)()).getTime)() + (ts.get_TotalMilliseconds)();
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy())._ctor)(
         msec, _this.kind);
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).Subtract =
function (ts)
{
  var _this = this;
  return (_this.Add)((ts.Negate)());
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).AddYears =
function (years)
{
  var _this = this;
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy())._ctor_5)(
         (_this.get_Year)() + years, (_this.get_Month)(), (_this.get_Day)(),
         (_this.get_Hour)(), (_this.get_Minute)(), (_this.get_Second)(),
         (_this.get_Millisecond)(), _this.kind);
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).AddMonths =
function (months)
{
  var _this = this;
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy())._ctor_5)(
         (_this.get_Year)(), (_this.get_Month)() + months, (_this.get_Day)(),
         (_this.get_Hour)(), (_this.get_Minute)(), (_this.get_Second)(),
         (_this.get_Millisecond)(), _this.kind);
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).AddDays =
function (days)
{
  var _this = this;
  var ticks = days * 864000000000;
  return (function (arg00)
          {
            return (_this.Add)(arg00);
          })(
         ((new (((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy())._ctor)(
         ticks));
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).AddHours =
function (hours)
{
  var _this = this;
  var ticks = hours * 36000000000;
  return (function (arg00)
          {
            return (_this.Add)(arg00);
          })(
         ((new (((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy())._ctor)(
         ticks));
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).AddMinutes =
function (minutes)
{
  var _this = this;
  var ticks = minutes * 600000000;
  return (function (arg00)
          {
            return (_this.Add)(arg00);
          })(
         ((new (((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy())._ctor)(
         ticks));
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).AddSeconds =
function (seconds)
{
  var _this = this;
  var ticks = seconds * 10000000;
  return (function (arg00)
          {
            return (_this.Add)(arg00);
          })(
         ((new (((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy())._ctor)(
         ticks));
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).AddMilliseconds =
function (msec)
{
  var _this = this;
  var ticks = msec * 10000;
  return (function (arg00)
          {
            return (_this.Add)(arg00);
          })(
         ((new (((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy())._ctor)(
         ticks));
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).AddTicks =
function (ticks)
{
  var _this = this;
  var ticks_1 = ticks;
  return (_this.Add)(
         ((new (((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy())._ctor)(
         ticks_1));
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).ToUniversalTime =
function (unitVar1)
{
  var _this = this;
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy())._ctor)(
         _this.date, 1);
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).ToLocalTime =
function (unitVar1)
{
  var _this = this;
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy())._ctor)(
         _this.date, 2);
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).GetHashCode =
function (unitVar1)
{
  var _this = this;
  var x = (((_this.get_JDate)()).getTime)();
  var this_1 = x;
  return ((W$.Hash).Get)(this_1);
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).Equals =
function (other)
{
  var _this = this;
  return (((_this.get_JDate)()).getTime)() === (((other.get_JDate)()).getTime)();
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).$IComparable_p1a5bc0930cb9817_CompareTo =
function (other)
{
  var _this = this;
  var o = other;
  var b = (((o.get_JDate)()).getTime)();
  var a = (((_this.get_JDate)()).getTime)();
  return (W$.Compare)(a, b);
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).get_Kind =
function (unitVar1)
{
  var _this = this;
  return _this.kind;
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).get_Date =
function (unitVar1)
{
  var _this = this;
  var d =
      new Date((_this.get_Year)(), (_this.get_Month)() - 1, (_this.get_Day)());
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy())._ctor)(
         (d.getTime)(), _this.kind);
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).get_TimeOfDay =
function (unitVar1)
{
  var _this = this;
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy())._ctor_4)(
         0, (_this.get_Hour)(), (_this.get_Minute)(), (_this.get_Second)(),
         (_this.get_Millisecond)());
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).get_Year =
function (unitVar1)
{
  var _this = this;
  var matchValue = _this.kind;
  return (W$.Equals)(matchValue, 1) ?
         (((_this.get_JDate)()).getUTCFullYear)() :
         (((_this.get_JDate)()).getFullYear)();
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).get_Month =
function (unitVar1)
{
  var _this = this;
  var matchValue = _this.kind;
  return (W$.Equals)(matchValue, 1) ?
         1 + (((_this.get_JDate)()).getUTCMonth)() :
         1 + (((_this.get_JDate)()).getMonth)();
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).get_Day =
function (unitVar1)
{
  var _this = this;
  var matchValue = _this.kind;
  return (W$.Equals)(matchValue, 1) ?
         (((_this.get_JDate)()).getUTCDate)() :
         (((_this.get_JDate)()).getDate)();
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).get_Hour =
function (unitVar1)
{
  var _this = this;
  var matchValue = _this.kind;
  return (W$.Equals)(matchValue, 1) ?
         (((_this.get_JDate)()).getUTCHours)() :
         (((_this.get_JDate)()).getHours)();
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).get_Minute =
function (unitVar1)
{
  var _this = this;
  var matchValue = _this.kind;
  return (W$.Equals)(matchValue, 1) ?
         (((_this.get_JDate)()).getUTCMinutes)() :
         (((_this.get_JDate)()).getMinutes)();
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).get_Second =
function (unitVar1)
{
  var _this = this;
  var matchValue = _this.kind;
  return (W$.Equals)(matchValue, 1) ?
         (((_this.get_JDate)()).getUTCSeconds)() :
         (((_this.get_JDate)()).getSeconds)();
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).get_Millisecond =
function (unitVar1)
{
  var _this = this;
  var matchValue = _this.kind;
  return (W$.Equals)(matchValue, 1) ?
         (((_this.get_JDate)()).getUTCMilliseconds)() :
         (((_this.get_JDate)()).getMilliseconds)();
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).get_DayOfWeek =
function (unitVar1)
{
  var _this = this;
  var matchValue = _this.kind;
  return (W$.Equals)(matchValue, 1) ?
         (((_this.get_JDate)()).getUTCDay)() :
         (((_this.get_JDate)()).getDay)();
};

(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).get_JDate =
function (unitVar1)
{
  var _this = this;
  return new Date(_this.date);
};

if (typeof
    (((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).DateTimeProxy$ ==
    "undefined")
{
  (((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).DateTimeProxy$ = {};
}

((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).DateTimeProxy$).SpecifyKind =
function (d, k)
{
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy())._ctor)(
         (((d.get_JDate)()).getTime)(), k);
};

((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).DateTimeProxy$).get_Now =
function (unitVar0)
{
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy())._ctor)(
         ((new Date()).getTime)(), 2);
};

((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).DateTimeProxy$).get_UtcNow =
function (unitVar0)
{
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy())._ctor)(
         ((new Date()).getTime)(), 1);
};

((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).DateTimeProxy$).get_Today =
function (unitVar0)
{
  var copyOfStruct =
      (((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).DateTimeProxy$).get_Now)(
      );
  return (copyOfStruct.get_Date)();
};

if (typeof ((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$ == "undefined")
{
  ((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$ = {};
}

(((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy =
function ()
{};

(((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy).prototype)._ctor =
function (ticks)
{
  var _this = this;
  _this.ticks = ticks;
  return this;
};

(((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy).prototype)._ctor_2 =
function (hours, minutes, seconds)
{
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy())._ctor_4)(
         0, hours, minutes, seconds, 0);
};

(((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy).prototype)._ctor_3 =
function (days, hours, minutes, seconds)
{
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy())._ctor_4)(
         days, hours, minutes, seconds, 0);
};

(((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy).prototype)._ctor_4 =
function (days, hours, minutes, seconds, msec)
{
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy())._ctor)(
         (((days * 864000000000 + hours * 36000000000) + minutes * 600000000) +
          seconds * 10000000) + msec * 10000);
};

(((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy).prototype).$IComparable_p1a5bc0930cb9817_CompareTo =
function (other)
{
  var _this = this;
  return (_this.CompareTo)(other);
};

(((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy).prototype).Add =
function (t)
{
  var _this = this;
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy())._ctor)(
         _this.ticks + (t.get_Ticks)());
};

(((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy).prototype).Subtract =
function (t)
{
  var _this = this;
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy())._ctor)(
         _this.ticks - (t.get_Ticks)());
};

(((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy).prototype).CompareTo =
function (t)
{
  var _this = this;
  var b = (t.get_Ticks)();
  var a = _this.ticks;
  return (W$.Compare)(a, b);
};

(((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy).prototype).Negate =
function (unitVar1)
{
  var _this = this;
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy())._ctor)(
         -_this.ticks);
};

(((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy).prototype).Duration =
function (unitVar1)
{
  var _this = this;
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy())._ctor)(
         (Math.abs)(_this.ticks));
};

(((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy).prototype).GetHashCode =
function (unitVar1)
{
  var _this = this;
  return ((W$.Hash).Get)(_this.ticks);
};

(((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy).prototype).Equals =
function (other)
{
  var _this = this;
  var copyOfStruct = other;
  return _this.ticks === (copyOfStruct.get_Ticks)();
};

(((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy).prototype).get_Days =
function (unitVar1)
{
  var _this = this;
  return (Math.floor)((_this.get_TotalDays)());
};

(((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy).prototype).get_Hours =
function (unitVar1)
{
  var _this = this;
  return (Math.floor)((_this.get_TotalHours)()) % 24;
};

(((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy).prototype).get_Minutes =
function (unitVar1)
{
  var _this = this;
  return (Math.floor)((_this.get_TotalMinutes)()) % 60;
};

(((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy).prototype).get_Seconds =
function (unitVar1)
{
  var _this = this;
  return (Math.floor)((_this.get_TotalSeconds)()) % 60;
};

(((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy).prototype).get_Milliseconds =
function (unitVar1)
{
  var _this = this;
  return (Math.floor)((_this.get_TotalMilliseconds)()) % 1000;
};

(((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy).prototype).get_TotalDays =
function (unitVar1)
{
  var _this = this;
  return _this.ticks / 864000000000;
};

(((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy).prototype).get_TotalHours =
function (unitVar1)
{
  var _this = this;
  return _this.ticks / 36000000000;
};

(((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy).prototype).get_TotalMinutes =
function (unitVar1)
{
  var _this = this;
  return _this.ticks / 600000000;
};

(((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy).prototype).get_TotalSeconds =
function (unitVar1)
{
  var _this = this;
  return _this.ticks / 10000000;
};

(((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy).prototype).get_TotalMilliseconds =
function (unitVar1)
{
  var _this = this;
  return _this.ticks / 10000;
};

(((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy).prototype).get_Ticks =
function (unitVar1)
{
  var _this = this;
  return _this.ticks;
};

if (typeof
    (((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).TimeSpanProxy$ ==
    "undefined")
{
  (((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).TimeSpanProxy$ = {};
}

((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).TimeSpanProxy$).Compare =
function (t1, t2)
{
  var b = (t2.get_Ticks)();
  var a = (t1.get_Ticks)();
  return (W$.Compare)(a, b);
};

((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).TimeSpanProxy$).Equals =
function (t1, t2)
{
  return (W$.Equals)((t1.get_Ticks)(), (t2.get_Ticks)());
};

((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).TimeSpanProxy$).FromTicks =
function (ticks)
{
  var ticks_1 = ticks;
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy())._ctor)(
         ticks_1);
};

((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).TimeSpanProxy$).FromDays =
function (days)
{
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy())._ctor)(
         864000000000 * days);
};

((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).TimeSpanProxy$).FromHours =
function (hours)
{
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy())._ctor)(
         36000000000 * hours);
};

((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).TimeSpanProxy$).FromMinutes =
function (min)
{
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy())._ctor)(
         600000000 * min);
};

((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).TimeSpanProxy$).FromSeconds =
function (sec)
{
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy())._ctor)(
         10000000 * sec);
};

((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).TimeSpanProxy$).get_Zero =
function (unitVar0)
{
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy())._ctor)(
         0);
};

((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).TimeSpanProxy$).get_MaxValue =
function (unitVar0)
{
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy())._ctor)(
         Number.MAX_VALUE);
};

((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).TimeSpanProxy$).get_MinValue =
function (unitVar0)
{
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy())._ctor)(
         Number.MIN_VALUE);
};

if (typeof ((IntelliFactory$.WebSharper$).Proxy$).MapProxy$ == "undefined")
{
  ((IntelliFactory$.WebSharper$).Proxy$).MapProxy$ = {};
}

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2 =
function ()
{};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapPair_2 =
function ()
{
  ((W$.Op).Copy)(arguments[0], this);
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).tryPick =
function (f, m)
{
  var chooser = function (kv)
                {
                  var _this = kv;
                  var this_1 = kv;
                  return (f(_this.key))(this_1.value);
                };
  return (function (source)
          {
            return ((W$.Seq$).tryPick)(chooser, source);
          })(m);
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).tryFindKey =
function (f, m)
{
  var predicate = function (kv)
                  {
                    var _this = kv;
                    var this_1 = kv;
                    return (f(_this.key))(this_1.value);
                  };
  return (function (source)
          {
            return ((W$.Seq$).tryFind)(predicate, source);
          })(m);
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).tryFind =
function (k, m)
{
  return (m.TryFind)(k);
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).toSeq =
function (m)
{
  var mapping = function (kv)
                {
                  return [kv.key, kv.value];
                };
  return (function (source)
          {
            return ((W$.Seq$).map)(mapping, source);
          })(
         (function (t)
          {
            return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(t);
          })(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).ToTree)(m)));
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).ToTree =
function (m)
{
  return (m.get_Tree)();
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).toList =
function (m)
{
  return (function (source)
          {
            return ((W$.Seq$).toList)(source);
          })(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).toSeq)(m));
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).toArray =
function (m)
{
  return (function (source)
          {
            return ((W$.Seq$).toArray)(source);
          })(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).toSeq)(m));
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).remove =
function (k, m)
{
  return (m.Remove)(k);
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).pick =
function (f, m)
{
  var chooser = function (kv)
                {
                  var _this = kv;
                  var this_1 = kv;
                  return (f(_this.key))(this_1.value);
                };
  return (function (source)
          {
            return ((W$.Seq$).pick)(chooser, source);
          })(m);
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).partition =
function (f, m)
{
  var predicate = function (kv)
                  {
                    return (f(kv.key))(kv.value);
                  };
  var patternInput =
      (function (array)
       {
         return ((W$.Array).partition)(predicate, array);
       })(
      (function (source)
       {
         return ((W$.Seq$).toArray)(source);
       })(
      (function (t)
       {
         return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(t);
       })(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).ToTree)(m))));
  var y = patternInput[1];
  var x = patternInput[0];
  return [((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).OfTree)(
          ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).OfSorted)(x)),
          ((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).OfTree)(
          ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).OfSorted)(y))];
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).OfTree =
function (t)
{
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2())._ctor)(
         t);
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).ofSeq =
function (s)
{
  var a = ((W$.Seq$).toArray)(s);
  return ((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).ofArray)(a);
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).ofList =
function (kvs)
{
  return ((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).ofSeq)(kvs);
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).ofArray =
function (a)
{
  var mapping =
      function (_1)
      {
        var tupledArg = arguments.length > 1 ?
                        arguments :
                        _1;
        var k = tupledArg[0];
        var v = tupledArg[1];
        return new (((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapPair_2({
                                                                                   key:
                                                                                   k,
                                                                                   value:
                                                                                   v
                                                                                 });
      };
  return (function (t)
          {
            return ((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).OfTree)(t
                   );
          })(
         (function (data)
          {
            return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).OfSeq)(data
                   );
          })((function (source)
              {
                return ((W$.Seq$).map)(mapping, source);
              })(a)));
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).map =
function (f, m)
{
  var mapping =
      function (kv)
      {
        return new (((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapPair_2({
                                                                                   key:
                                                                                   kv.key,
                                                                                   value:
                                                                                   (f(
                                                                                    kv.key
                                                                                    ))(
                                                                                   kv.value
                                                                                   )
                                                                                 });
      };
  return (function (t)
          {
            return ((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).OfTree)(t
                   );
          })(
         (function (data)
          {
            return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).OfSeq)(data
                   );
          })(
         (function (source)
          {
            return ((W$.Seq$).map)(mapping, source);
          })(
         (function (t)
          {
            return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(t);
          })(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).ToTree)(m)))));
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).iter =
function (f, m)
{
  var action = function (kv)
               {
                 var _this = kv;
                 var this_1 = kv;
                 return (f(_this.key))(this_1.value);
               };
  return (function (source)
          {
            return ((W$.Seq$).iter)(action, source);
          })(m);
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).isEmpty =
function (m)
{
  return (m.get_IsEmpty)();
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).forall =
function (f, m)
{
  var predicate = function (kv)
                  {
                    var _this = kv;
                    var this_1 = kv;
                    return (f(_this.key))(this_1.value);
                  };
  return (function (source)
          {
            return ((W$.Seq$).forall)(predicate, source);
          })(m);
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).foldBack =
function (f, m, s)
{
  var folder = function (s_1)
               {
                 return function (kv)
                        {
                          return ((f(kv.key))(kv.value))(s_1);
                        };
               };
  return (function (source)
          {
            return ((W$.Seq$).fold)(folder, s, source);
          })(
         (function (t)
          {
            return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Descend)(t);
          })(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).ToTree)(m)));
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).fold =
function (f, s, m)
{
  var folder = function (s_1)
               {
                 return function (kv)
                        {
                          return ((f(s_1))(kv.key))(kv.value);
                        };
               };
  return (function (source)
          {
            return ((W$.Seq$).fold)(folder, s, source);
          })(
         (function (t)
          {
            return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(t);
          })(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).ToTree)(m)));
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).findKey =
function (f, m)
{
  var chooser = function (kv)
                {
                  var _this = kv;
                  var this_1 = kv;
                  var __1;
                  if ((f(_this.key))(this_1.value))
                  {
                    var this_2 = kv;
                    __1 ={
                           $: 1,
                           $0: this_2.key
                         };
                  }
                  else
                  {
                    __1 ={
                           $: 0
                         };
                  }
                  return __1;
                };
  return (function (source)
          {
            return ((W$.Seq$).pick)(chooser, source);
          })(m);
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).find =
function (k, m)
{
  return (m.get_Item)(k);
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).filter =
function (f, m)
{
  var predicate = function (kv)
                  {
                    return (f(kv.key))(kv.value);
                  };
  return (function (t)
          {
            return ((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).OfTree)(t
                   );
          })(
         (function (data)
          {
            return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).OfSorted)(
                   data);
          })(
         (function (source)
          {
            return ((W$.Seq$).toArray)(source);
          })(
         (function (source)
          {
            return ((W$.Seq$).filter)(predicate, source);
          })(
         (function (t)
          {
            return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(t);
          })(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).ToTree)(m))))));
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).exists =
function (f, m)
{
  var predicate = function (kv)
                  {
                    var _this = kv;
                    var this_1 = kv;
                    return (f(_this.key))(this_1.value);
                  };
  return (function (source)
          {
            return ((W$.Seq$).exists)(predicate, source);
          })(m);
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).empty =
function (unit)
{
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2()).make)(
         []);
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).containsKey =
function (k, m)
{
  return (m.ContainsKey)(k);
};

(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).add =
function (k, v, m)
{
  return (m.Add)(k, v);
};

(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2).prototype)._ctor =
function (tree)
{
  var _this = this;
  _this.tree = tree;
  return this;
};

(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2).prototype).make =
function (s)
{
  var s_1 = ((W$.Seq$).distinctBy)(function (_1)
                                   {
                                     var tuple = arguments.length > 1 ?
                                                 arguments :
                                                 _1;
                                     return tuple[0];
                                   }, s);
  var a =
      ((W$.Seq$).toArray)(
      ((W$.Seq$).delay)(
      function (unitVar)
      {
        return ((W$.Seq$).collect)(
               function (_1)
               {
                 var matchValue = arguments.length > 1 ?
                                  arguments :
                                  _1;
                 var v = matchValue[1];
                 var k = matchValue[0];
                 var x =
                     new (((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapPair_2({
                                                                                         key:
                                                                                         k,
                                                                                         value:
                                                                                         v
                                                                                       });
                 return [x];
               }, s_1);
      }));
  var arr = a;
  ((W$.Array).sortInPlaceBy)(function (x)
                             {
                               return x;
                             }, arr);
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2())._ctor)(
         ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).OfSorted)(a));
};

(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2).prototype).Add =
function (k, v)
{
  var _this = this;
  var kv =
      new (((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapPair_2({
                                                                          key: k,
                                                                          value:
                                                                          v
                                                                        });
  var t = ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Add)(kv, _this.tree);
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2())._ctor)(
         t);
};

(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2).prototype).ContainsKey =
function (k)
{
  var _this = this;
  return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Contains)(
         (_this.kv)(k), _this.tree);
};

(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2).prototype).Remove =
function (k)
{
  var _this = this;
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2())._ctor)(
         ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Remove)(
         (_this.kv)(k), _this.tree));
};

(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2).prototype).TryFind =
function (k)
{
  var _this = this;
  var mapping = function (kv)
                {
                  return kv.value;
                };
  return (function (option)
          {
            return ((W$.Option$).map)(mapping, option);
          })(
         ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).TryFind)(
         (_this.kv)(k), _this.tree));
};

(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2).prototype).GetHashCode =
function (unitVar1)
{
  var _this = this;
  var this_1 = ((W$.Seq$).toArray)(_this);
  return ((W$.Hash).Mix)(227881149, ((W$.Hash).Get)(this_1));
};

(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2).prototype).Equals =
function (other)
{
  var _this = this;
  var other_1 = other;
  return (_this.get_Count)() === (other_1.get_Count)() ?
         ((W$.Seq$).forall2)(function (x)
                             {
                               return function (y)
                                      {
                                        return (W$.Equals)(x, y);
                                      };
                             }, _this, other_1) :
         false;
};

(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2).prototype).$IEnumerable_p7e293af1bfdeaae_GetEnumerator =
function (unitVar1)
{
  var _this = this;
  return (_this.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
};

(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2).prototype).$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator =
function (unitVar1)
{
  var _this = this;
  var mapping = function (kv)
                {
                  return ((new W$.$KeyValuePair())._ctor)(kv.key, kv.value);
                };
  var s =
      (function (source)
       {
         return ((W$.Seq$).map)(mapping, source);
       })(((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(_this.tree));
  return (s.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
};

(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2).prototype).$IComparable_p1a5bc0930cb9817_CompareTo =
function (other)
{
  var _this = this;
  return ((W$.Seq$).compareWith)(function (x)
                                 {
                                   return function (y)
                                          {
                                            var b = y;
                                            var a = x;
                                            return (W$.Compare)(a, b);
                                          };
                                 }, _this, other);
};

(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2).prototype).kv =
function (k)
{
  var _this = this;
  return new (((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapPair_2({
                                                                             key:
                                                                             k,
                                                                             value:
                                                                             null
                                                                           });
};

(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2).prototype).get_Tree =
function (unitVar1)
{
  var _this = this;
  return _this.tree;
};

(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2).prototype).get_Count =
function (unitVar1)
{
  var _this = this;
  return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Count)(_this.tree);
};

(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2).prototype).get_IsEmpty =
function (unitVar1)
{
  var _this = this;
  return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).IsEmpty)(_this.tree);
};

(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2).prototype).get_Item =
function (k)
{
  var _this = this;
  var matchValue = (_this.TryFind)(k);
  var __1;
  if (matchValue.$ == 0)
  {
    __1 =
    ((W$.Op$).failwith)("The given key was not present in the dictionary.");
  }
  else
  {
    var v = matchValue.$0;
    __1 = v;
  }
  return __1;
};

(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapPair_2).prototype).GetHashCode =
function (unitVar1)
{
  var _this = this;
  var copyOfStruct = _this.key;
  var this_1 = copyOfStruct;
  return -
         (Math.abs)(
         ((W$.Hash).Mix)(((W$.Hash).String)("MapPair"), ((W$.Hash).Get)(this_1))
         );
};

(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapPair_2).prototype).Equals =
function (other)
{
  var _this = this;
  var copyOfStruct = _this.key;
  var obj = other.key;
  var this_1 = copyOfStruct;
  return (W$.Equals)(this_1, obj);
};

(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapPair_2).prototype).$IComparable_p1a5bc0930cb9817_CompareTo =
function (other)
{
  var _this = this;
  var b = other.key;
  var a = _this.key;
  return (W$.Compare)(a, b);
};

if (typeof ((IntelliFactory$.WebSharper$).Proxy$).ObservableProxy$ ==
    "undefined")
{
  ((IntelliFactory$.WebSharper$).Proxy$).ObservableProxy$ = {};
}

if (typeof
    (((IntelliFactory$.WebSharper$).Proxy$).ObservableProxy$).ObservableModule$
    == "undefined")
{
  (((IntelliFactory$.WebSharper$).Proxy$).ObservableProxy$).ObservableModule$ =
  {};
}

((((IntelliFactory$.WebSharper$).Proxy$).ObservableProxy$).ObservableModule$).add =
function (f, o)
{
  return (function (value)
          {
            return void value;
          })(
         (o.$IObservable_1_pa29d3c612f3d457_Subscribe)(
         ((W$.Observer$).Simple)(f)));
};

((((IntelliFactory$.WebSharper$).Proxy$).ObservableProxy$).ObservableModule$).choose =
function (c, e)
{
  var f =
      function (f_1)
      {
        var h = function (x)
                {
                  var matchValue = c(x);
                  if (matchValue.$ == 0)
                  {}
                  else
                  {
                    var x_1 = matchValue.$0;
                    f_1(x_1);
                  }
                };
        var event = e;
        return (event.$IObservable_1_pa29d3c612f3d457_Subscribe)(
               ((W$.Observer$).Simple)(h));
      };
  return new W$.$Observable({
                              subscribe: f
                            });
};

((((IntelliFactory$.WebSharper$).Proxy$).ObservableProxy$).ObservableModule$).filter =
function (ok, e)
{
  return (((((IntelliFactory$.WebSharper$).Proxy$).ObservableProxy$).ObservableModule$).choose)(
         function (x)
         {
           return ok(x) ?
                  {
                    $: 1,
                    $0: x
                  }:
                  {
                    $: 0
                  };
         }, e);
};

((((IntelliFactory$.WebSharper$).Proxy$).ObservableProxy$).ObservableModule$).map =
function (t, e)
{
  var f =
      function (f_1)
      {
        var h = function (x)
                {
                  return f_1(t(x));
                };
        var event = e;
        return (event.$IObservable_1_pa29d3c612f3d457_Subscribe)(
               ((W$.Observer$).Simple)(h));
      };
  return new W$.$Observable({
                              subscribe: f
                            });
};

((((IntelliFactory$.WebSharper$).Proxy$).ObservableProxy$).ObservableModule$).merge =
function (e1, e2)
{
  var f =
      function (f_1)
      {
        var h = f_1;
        var event = e1;
        var d1 =
            (event.$IObservable_1_pa29d3c612f3d457_Subscribe)(
            ((W$.Observer$).Simple)(h));
        var h_1 = f_1;
        var event_1 = e2;
        var d2 =
            (event_1.$IObservable_1_pa29d3c612f3d457_Subscribe)(
            ((W$.Observer$).Simple)(h_1));
        var f_2 = function (unitVar0)
                  {
                    (d1.$IDisposable_p1a5dece2430d1c7_Dispose)();
                    return (d2.$IDisposable_p1a5dece2430d1c7_Dispose)();
                  };
        return new W$.$Disposable({
                                    dispose: f_2
                                  });
      };
  return new W$.$Observable({
                              subscribe: f
                            });
};

((((IntelliFactory$.WebSharper$).Proxy$).ObservableProxy$).ObservableModule$).pairwise =
function (e)
{
  var old = [{
               $: 0
             }];
  var f =
      function (f_1)
      {
        var on = function (x)
                 {
                   var matchValue = old[0];
                   if (matchValue.$ == 0)
                   {
                     old[0] ={
                               $: 1,
                               $0: x
                             };
                   }
                   else
                   {
                     var o = matchValue.$0;
                     var r = [o, x];
                     old[0] ={
                               $: 1,
                               $0: x
                             };
                     f_1(r);
                   }
                 };
        var h = on;
        var event = e;
        return (event.$IObservable_1_pa29d3c612f3d457_Subscribe)(
               ((W$.Observer$).Simple)(h));
      };
  return new W$.$Observable({
                              subscribe: f
                            });
};

((((IntelliFactory$.WebSharper$).Proxy$).ObservableProxy$).ObservableModule$).partition =
function (f, e)
{
  var g = function (value)
          {
            return !value;
          };
  var f_1 = f;
  var r = function (x)
          {
            return g(f_1(x));
          };
  return [(((((IntelliFactory$.WebSharper$).Proxy$).ObservableProxy$).ObservableModule$).filter)(
          f, e),
          (((((IntelliFactory$.WebSharper$).Proxy$).ObservableProxy$).ObservableModule$).filter)(
          r, e)];
};

((((IntelliFactory$.WebSharper$).Proxy$).ObservableProxy$).ObservableModule$).scan =
function (fold, seed, e)
{
  var state = [seed];
  var f = function (value)
          {
            state[0] = (fold(state[0]))(value);
            return state[0];
          };
  return (((((IntelliFactory$.WebSharper$).Proxy$).ObservableProxy$).ObservableModule$).map)(
         f, e);
};

((((IntelliFactory$.WebSharper$).Proxy$).ObservableProxy$).ObservableModule$).split =
function (f, e)
{
  var chooser = function (x)
                {
                  var matchValue = f(x);
                  var __1;
                  if (matchValue.$ == 0)
                  {
                    var x_1 = matchValue.$0;
                    __1 ={
                           $: 1,
                           $0: x_1
                         };
                  }
                  else
                  {
                    __1 ={
                           $: 0
                         };
                  }
                  return __1;
                };
  var left =
      (function (source)
       {
         return (((((IntelliFactory$.WebSharper$).Proxy$).ObservableProxy$).ObservableModule$).choose)(
                chooser, source);
       })(e);
  var chooser_1 = function (x)
                  {
                    var matchValue = f(x);
                    var __1;
                    if (matchValue.$ == 1)
                    {
                      var x_1 = matchValue.$0;
                      __1 ={
                             $: 1,
                             $0: x_1
                           };
                    }
                    else
                    {
                      __1 ={
                             $: 0
                           };
                    }
                    return __1;
                  };
  var right =
      (function (source)
       {
         return (((((IntelliFactory$.WebSharper$).Proxy$).ObservableProxy$).ObservableModule$).choose)(
                chooser_1, source);
       })(e);
  return [left, right];
};

if (typeof ((IntelliFactory$.WebSharper$).Proxy$).SetProxy$ == "undefined")
{
  ((IntelliFactory$.WebSharper$).Proxy$).SetProxy$ = {};
}

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1 =
function ()
{};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).unionMany =
function (sets)
{
  return ((W$.Seq$).fold)(
         function (set1)
         {
           return function (set2)
                  {
                    return ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).union)(
                           set1, set2);
                  };
         }, ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).empty)(), sets);
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).union =
function (s1, s2)
{
  return (function (t)
          {
            return ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).OfTree)(t
                   );
          })(
         (function (s)
          {
            return ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).MakeTree)(
                   s);
          })(
         (((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Union)(
         ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(
         ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).ToTree)(s1)),
         ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(
         ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).ToTree)(s2)))));
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).ToTree =
function (s)
{
  return (s.get_Tree)();
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).MakeTree =
function (s)
{
  var s_1 = s;
  var a = ((W$.Seq$).toArray)(((W$.Seq$).distinctBy)(function (x)
                                                     {
                                                       return x;
                                                     }, s_1));
  var arr = a;
  ((W$.Array).sortInPlaceBy)(function (x)
                             {
                               return x;
                             }, arr);
  return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).OfSorted)(a);
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).OfTree =
function (t)
{
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1())._ctor)(
         t);
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).toSeq =
function (a)
{
  return a;
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).toList =
function (a)
{
  return ((W$.Seq$).toList)(
         ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(
         ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).ToTree)(a)));
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).toArray =
function (a)
{
  return ((W$.Seq$).toArray)(
         ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(
         ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).ToTree)(a)));
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).singleton =
function (x)
{
  return ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).add)(
         x, ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).empty)());
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).remove =
function (v, a)
{
  return (a.Remove)(v);
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).partition =
function (f, a)
{
  var patternInput =
      (function (array)
       {
         return ((W$.Array).partition)(f, array);
       })(
      (function (source)
       {
         return ((W$.Seq$).toArray)(source);
       })(
      (function (t)
       {
         return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(t);
       })(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).ToTree)(a))));
  var y = patternInput[1];
  var x = patternInput[0];
  return [((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).OfTree)(
          ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).MakeTree)(x)),
          ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).OfTree)(
          ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).MakeTree)(y))];
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).ofSeq =
function (a)
{
  var a_1 = ((W$.Seq$).toArray)(a);
  var arr = a_1;
  ((W$.Array).sortInPlaceBy)(function (x)
                             {
                               return x;
                             }, arr);
  return ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).OfTree)(
         ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).MakeTree)(a_1));
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).ofList =
function (a)
{
  return ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).ofSeq)(a);
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).ofArray =
function (a)
{
  return ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).OfTree)(
         ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).MakeTree)(a));
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).minElement =
function (s)
{
  return (s.get_MinimumElement)();
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).maxElement =
function (s)
{
  return (s.get_MaximumElement)();
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).map =
function (f, s)
{
  return (function (t)
          {
            return ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).OfTree)(t
                   );
          })(
         (function (s_1)
          {
            return ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).MakeTree)(
                   s_1);
          })(
         (function (source)
          {
            return ((W$.Seq$).map)(f, source);
          })(
         (function (t)
          {
            return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(t);
          })(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).ToTree)(s)))));
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).iter =
function (f, s)
{
  return ((W$.Seq$).iter)(
         f,
         ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(
         ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).ToTree)(s)));
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).isSuperset =
function (a, b)
{
  return (a.IsSupersetOf)(b);
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).isSubset =
function (a, b)
{
  return (a.IsSubsetOf)(b);
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).isProperSuperset =
function (a, b)
{
  return (a.IsProperSupersetOf)(b);
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).isProperSubset =
function (a, b)
{
  return (a.IsProperSubsetOf)(b);
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).isEmpty =
function (a)
{
  return (a.get_IsEmpty)();
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).intersectMany =
function (s)
{
  return ((W$.Seq$).reduce)(
         function (set1)
         {
           return function (set2)
                  {
                    return ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).intersect)(
                           set1, set2);
                  };
         }, s);
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).intersect =
function (s1, s2)
{
  return (function (t)
          {
            return ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).OfTree)(t
                   );
          })(
         (function (s)
          {
            return ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).MakeTree)(
                   s);
          })(
         (((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Intersect)(
         ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(
         (s1.get_Tree)()),
         ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(
         (s2.get_Tree)()))));
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).forall =
function (f, a)
{
  return ((W$.Seq$).forall)(f, a);
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).foldBack =
function (f, a, s)
{
  var folder = function (s_1)
               {
                 return function (x)
                        {
                          return (f(x))(s_1);
                        };
               };
  return (function (source)
          {
            return ((W$.Seq$).fold)(folder, s, source);
          })(
         (function (t)
          {
            return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Descend)(t);
          })(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).ToTree)(a)));
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).fold =
function (f, x, a)
{
  return ((W$.Seq$).fold)(f, x, a);
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).filter =
function (f, s)
{
  return (function (t)
          {
            return ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).OfTree)(t
                   );
          })(
         (function (s_1)
          {
            return ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).MakeTree)(
                   s_1);
          })(
         (function (source)
          {
            return ((W$.Seq$).filter)(f, source);
          })(
         (function (t)
          {
            return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(t);
          })(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).ToTree)(s)))));
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).exists =
function (f, s)
{
  return ((W$.Seq$).exists)(f, s);
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).empty =
function (unit)
{
  return ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).OfTree)(
         ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Empty)());
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).difference =
function (s1, s2)
{
  return (function (t)
          {
            return ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).OfTree)(t
                   );
          })(
         (function (s)
          {
            return ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).MakeTree)(
                   s);
          })(
         (((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Difference)(
         ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(
         ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).ToTree)(s1)),
         ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(
         ((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).ToTree)(s2)))));
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).count =
function (s)
{
  return (s.get_Count)();
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).contains =
function (v, s)
{
  return (s.Contains)(v);
};

(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).add =
function (v, s)
{
  return (s.Add)(v);
};

(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1).prototype)._ctor =
function (tree)
{
  var _this = this;
  _this.tree = tree;
  return this;
};

(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1).prototype).make =
function (s)
{
  var a = ((W$.Seq$).toArray)(s);
  var arr = a;
  ((W$.Array).sortInPlaceBy)(function (x)
                             {
                               return x;
                             }, arr);
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1()).make)(
         a);
};

(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1).prototype).Add =
function (x)
{
  var _this = this;
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1())._ctor)(
         ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Add)(x, _this.tree));
};

(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1).prototype).Contains =
function (v)
{
  var _this = this;
  return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Contains)(
         v, _this.tree);
};

(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1).prototype).IsProperSubsetOf =
function (s)
{
  var _this = this;
  return (_this.IsSubsetOf)(s) ?
         (_this.get_Count)() < (s.get_Count)() :
         false;
};

(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1).prototype).IsProperSupersetOf =
function (s)
{
  var _this = this;
  return (_this.IsSupersetOf)(s) ?
         (_this.get_Count)() > (s.get_Count)() :
         false;
};

(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1).prototype).IsSubsetOf =
function (s)
{
  var _this = this;
  var s_1 = s;
  return (function (source)
          {
            return ((W$.Seq$).isEmpty)(source);
          })(
         (((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Difference)(
         ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(_this.tree),
         ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(
         (s_1.get_Tree)())));
};

(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1).prototype).IsSupersetOf =
function (s)
{
  var _this = this;
  var s_1 = s;
  return (function (source)
          {
            return ((W$.Seq$).isEmpty)(source);
          })(
         (((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Difference)(
         ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(
         (s_1.get_Tree)()),
         ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(_this.tree)));
};

(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1).prototype).Remove =
function (v)
{
  var _this = this;
  return ((new (((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1())._ctor)(
         ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Remove)(v, _this.tree
         ));
};

(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1).prototype).GetHashCode =
function (unitVar1)
{
  var _this = this;
  var this_1 = ((W$.Seq$).toArray)(_this);
  return ((W$.Hash).Mix)(-1741749453, ((W$.Hash).Get)(this_1));
};

(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1).prototype).Equals =
function (other)
{
  var _this = this;
  return (_this.get_Count)() === (other.get_Count)() ?
         ((W$.Seq$).forall2)(function (x)
                             {
                               return function (y)
                                      {
                                        return (W$.Equals)(x, y);
                                      };
                             }, _this, other) :
         false;
};

(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1).prototype).$IEnumerable_p7e293af1bfdeaae_GetEnumerator =
function (unitVar1)
{
  var _this = this;
  return ((((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(_this.tree)).$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)(
         );
};

(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1).prototype).$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator =
function (unitVar1)
{
  var _this = this;
  return ((((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(_this.tree)).$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)(
         );
};

(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1).prototype).get_Count =
function (unitVar1)
{
  var _this = this;
  return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Count)(_this.tree);
};

(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1).prototype).get_IsEmpty =
function (unitVar1)
{
  var _this = this;
  return ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).IsEmpty)(_this.tree);
};

(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1).prototype).get_Tree =
function (unitVar1)
{
  var _this = this;
  return _this.tree;
};

(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1).prototype).get_MaximumElement =
function (unitVar1)
{
  var _this = this;
  return ((W$.Seq$).head)(
         ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Descend)(_this.tree));
};

(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1).prototype).get_MinimumElement =
function (unitVar1)
{
  var _this = this;
  return ((W$.Seq$).head)(
         ((((IntelliFactory$.WebSharper$).Runtime$).Tree$).Ascend)(_this.tree));
};

if (typeof (((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$ ==
    "undefined")
{
  (((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$ = {};
}

((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Union =
function (s1, s2)
{
  return (function (getEnumerator)
          {
            var getEnumerator_1 = getEnumerator;
            return ((new W$.$Enumerable())._ctor)(getEnumerator_1);
          })(
         function (unitVar0)
         {
           var e1 = (s1.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
           var e2 = (s2.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
           var dispose = function (_arg1)
                         {
                           (e1.$IDisposable_p1a5dece2430d1c7_Dispose)();
                           return (e2.$IDisposable_p1a5dece2430d1c7_Dispose)();
                         };
           var state =
               [(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Next)(
                e1),
                (((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Next)(
                e2)];
           return (function (next)
                   {
                     var next_1 = next;
                     var state_1 = state;
                     var dispose_1 = dispose;
                     var returnVal =
                         ((new W$.$Enumerator())._ctor)(next_1, dispose_1);
                     returnVal.s = state_1;
                     return returnVal;
                   })(
                  function (e)
                  {
                    var patternInput = e.s;
                    var c2 = patternInput[1];
                    var c1 = patternInput[0];
                    var matchValue = [c1, c2];
                    var __7;
                    if ((matchValue[0]).$ == 0)
                    {
                      var __1;
                      if ((matchValue[1]).$ == 0)
                      {
                        __1 = false;
                      }
                      else
                      {
                        var v2 = (matchValue[1]).$0;
                        e.s =
                        [c1,
                         (((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Next)(
                         e2)];
                        e.c = v2;
                        __1 = true;
                      }
                      __7 = __1;
                    }
                    else
                    {
                      var __6;
                      if ((matchValue[1]).$ == 0)
                      {
                        var v1 = (matchValue[0]).$0;
                        e.s =
                        [(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Next)(
                         e1), c2];
                        e.c = v1;
                        __6 = true;
                      }
                      else
                      {
                        var v1_1 = (matchValue[0]).$0;
                        var v2_1 = (matchValue[1]).$0;
                        var b = v2_1;
                        var a = v1_1;
                        var matchValue_1 = (W$.Compare)(a, b);
                        var __5;
                        if (matchValue_1 === 0)
                        {
                          var c1_1 = c1;
                          var x = c1_1;
                          var __2;
                          if (((W$.Option$).isSome)(x))
                          {
                            var b_1 = c1_1.$0;
                            var a_1 = v1_1;
                            __2 = (W$.Compare)(a_1, b_1) === 0;
                          }
                          else
                          {
                            __2 = false;
                          }
                          while (__2)
                          {
                            c1_1 =
                            (((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Next)(
                            e1);
                            var x = c1_1;
                            var __2;
                            if (((W$.Option$).isSome)(x))
                            {
                              var b_1 = c1_1.$0;
                              var a_1 = v1_1;
                              __2 = (W$.Compare)(a_1, b_1) === 0;
                            }
                            else
                            {
                              __2 = false;
                            }
                          };
                          var c2_1 = c2;
                          var x_1 = c2_1;
                          var __3;
                          if (((W$.Option$).isSome)(x_1))
                          {
                            var b_2 = c2_1.$0;
                            var a_2 = v2_1;
                            __3 = (W$.Compare)(a_2, b_2) === 0;
                          }
                          else
                          {
                            __3 = false;
                          }
                          while (__3)
                          {
                            c2_1 =
                            (((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Next)(
                            e2);
                            var x_1 = c2_1;
                            var __3;
                            if (((W$.Option$).isSome)(x_1))
                            {
                              var b_2 = c2_1.$0;
                              var a_2 = v2_1;
                              __3 = (W$.Compare)(a_2, b_2) === 0;
                            }
                            else
                            {
                              __3 = false;
                            }
                          };
                          e.s = [c1_1, c2_1];
                          e.c = v1_1;
                          __5 = true;
                        }
                        else
                        {
                          var __4;
                          if (matchValue_1 === 1)
                          {
                            e.s =
                            [c1,
                             (((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Next)(
                             e2)];
                            e.c = v2_1;
                            __4 = true;
                          }
                          else
                          {
                            e.s =
                            [(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Next)(
                             e1), c2];
                            e.c = v1_1;
                            __4 = true;
                          }
                          __5 = __4;
                        }
                        __6 = __5;
                      }
                      __7 = __6;
                    }
                    return __7;
                  });
         });
};

((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Intersect =
function (s1, s2)
{
  var getEnumerator =
      function (unitVar0)
      {
        var e1 = (s1.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
        var e2 = (s2.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
        var next =
            function (en)
            {
              var c1 = (en.s)[0];
              var c2 = (en.s)[1];
              var loop = true;
              while (loop)
              {
                var matchValue = [c1, c2];
                if ((matchValue[0]).$ == 1)
                {
                  if ((matchValue[1]).$ == 1)
                  {
                    var v1 = (matchValue[0]).$0;
                    var v2 = (matchValue[1]).$0;
                    var b = v2;
                    var a = v1;
                    var matchValue_1 = (W$.Compare)(a, b);
                    if (matchValue_1 === 0)
                    {
                      loop = false;
                    }
                    else
                    {
                      if (matchValue_1 === 1)
                      {
                        c2 =
                        (((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Next)(
                        e2);
                      }
                      else
                      {
                        c1 =
                        (((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Next)(
                        e1);
                      }
                    }
                  }
                  else
                  {
                    loop = false;
                  }
                }
                else
                {
                  loop = false;
                }
              };
              var matchValue_2 = [c1, c2];
              var __5;
              if ((matchValue_2[0]).$ == 1)
              {
                var __4;
                if ((matchValue_2[1]).$ == 1)
                {
                  var v2_1 = (matchValue_2[1]).$0;
                  var v1_1 = (matchValue_2[0]).$0;
                  var b_1 = v2_1;
                  var a_1 = v1_1;
                  var __3;
                  if ((W$.Compare)(a_1, b_1) === 0)
                  {
                    var v1_2 = (matchValue_2[0]).$0;
                    var v2_2 = (matchValue_2[1]).$0;
                    var x = c1;
                    var __1;
                    if (((W$.Option$).isSome)(x))
                    {
                      var b_2 = v1_2;
                      var a_2 = c1.$0;
                      __1 = (W$.Compare)(a_2, b_2) === 0;
                    }
                    else
                    {
                      __1 = false;
                    }
                    while (__1)
                    {
                      c1 =
                      (((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Next)(
                      e1);
                      var x = c1;
                      var __1;
                      if (((W$.Option$).isSome)(x))
                      {
                        var b_2 = v1_2;
                        var a_2 = c1.$0;
                        __1 = (W$.Compare)(a_2, b_2) === 0;
                      }
                      else
                      {
                        __1 = false;
                      }
                    };
                    var x_1 = c2;
                    var __2;
                    if (((W$.Option$).isSome)(x_1))
                    {
                      var b_3 = v2_2;
                      var a_3 = c2.$0;
                      __2 = (W$.Compare)(a_3, b_3) === 0;
                    }
                    else
                    {
                      __2 = false;
                    }
                    while (__2)
                    {
                      c2 =
                      (((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Next)(
                      e2);
                      var x_1 = c2;
                      var __2;
                      if (((W$.Option$).isSome)(x_1))
                      {
                        var b_3 = v2_2;
                        var a_3 = c2.$0;
                        __2 = (W$.Compare)(a_3, b_3) === 0;
                      }
                      else
                      {
                        __2 = false;
                      }
                    };
                    en.s = [c1, c2];
                    en.c = v1_2;
                    __3 = true;
                  }
                  else
                  {
                    __3 = false;
                  }
                  __4 = __3;
                }
                else
                {
                  __4 = false;
                }
                __5 = __4;
              }
              else
              {
                __5 = false;
              }
              return __5;
            };
        var state =
            [(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Next)(
             e1),
             (((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Next)(
             e2)];
        var dispose = function (_arg1)
                      {
                        (e1.$IDisposable_p1a5dece2430d1c7_Dispose)();
                        return (e2.$IDisposable_p1a5dece2430d1c7_Dispose)();
                      };
        var returnVal = ((new W$.$Enumerator())._ctor)(next, dispose);
        returnVal.s = state;
        return returnVal;
      };
  return ((new W$.$Enumerable())._ctor)(getEnumerator);
};

((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Difference =
function (s1, s2)
{
  return (function (getEnumerator)
          {
            var getEnumerator_1 = getEnumerator;
            return ((new W$.$Enumerable())._ctor)(getEnumerator_1);
          })(
         function (unitVar0)
         {
           var e1 = (s1.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
           var e2 = (s2.$IEnumerable_1_n7f0e01069bff28f6_GetEnumerator)();
           var dispose = function (_arg1)
                         {
                           (e1.$IDisposable_p1a5dece2430d1c7_Dispose)();
                           return (e2.$IDisposable_p1a5dece2430d1c7_Dispose)();
                         };
           var state =
               [(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Next)(
                e1),
                (((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Next)(
                e2)];
           return (function (next)
                   {
                     var next_1 = next;
                     var state_1 = state;
                     var dispose_1 = dispose;
                     var returnVal =
                         ((new W$.$Enumerator())._ctor)(next_1, dispose_1);
                     returnVal.s = state_1;
                     return returnVal;
                   })(
                  function (e)
                  {
                    var c1 = (e.s)[0];
                    var c2 = (e.s)[1];
                    var loop = true;
                    while (loop)
                    {
                      var matchValue = [c1, c2];
                      if ((matchValue[0]).$ == 1)
                      {
                        if ((matchValue[1]).$ == 1)
                        {
                          var v1 = (matchValue[0]).$0;
                          var v2 = (matchValue[1]).$0;
                          var b = v2;
                          var a = v1;
                          var matchValue_1 = (W$.Compare)(a, b);
                          if (matchValue_1 === 0)
                          {
                            c1 =
                            (((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Next)(
                            e1);
                          }
                          else
                          {
                            if (matchValue_1 === 1)
                            {
                              c2 =
                              (((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Next)(
                              e2);
                            }
                            else
                            {
                              loop = false;
                            }
                          }
                        }
                        else
                        {
                          loop = false;
                        }
                      }
                      else
                      {
                        loop = false;
                      }
                    };
                    var __1;
                    if (c1.$ == 0)
                    {
                      __1 = false;
                    }
                    else
                    {
                      var v1_1 = c1.$0;
                      e.s =
                      [(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Next)(
                       e1), c2];
                      e.c = v1_1;
                      __1 = true;
                    }
                    return __1;
                  });
         });
};

((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).SortedSeq$).Next =
function (e)
{
  return (e.$IEnumerator_p7e293af1bfe37b0_MoveNext)() ?
         {
           $: 1,
           $0: (e.$IEnumerator_1_n7f0e01069ab79374_get_Current)()
         }:
         {
           $: 0
         };
};

if (typeof ((IntelliFactory$.WebSharper$).Proxy$).MathProxy$ == "undefined")
{
  ((IntelliFactory$.WebSharper$).Proxy$).MathProxy$ = {};
}

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Abs =
function (x)
{
  return (Math.abs)(x);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Abs_1 =
function (x)
{
  return (Math.abs)(x);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Acos =
function (x)
{
  return (Math.acos)(x);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Asin =
function (x)
{
  return (Math.asin)(x);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Atan =
function (x)
{
  return (Math.atan)(x);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Atan2 =
function (x, y)
{
  return (Math.atan2)(x, y);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Ceiling =
function (x)
{
  return (Math.ceil)(x);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Cos =
function (x)
{
  return (Math.cos)(x);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Cosh =
function (x)
{
  return ((W$.Op$).cosh)(x);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Exp =
function (x)
{
  return (Math.exp)(x);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Floor =
function (x)
{
  return (Math.floor)(x);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Log =
function (x)
{
  return (Math.log)(x);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Log_1 =
function (x, newBase)
{
  return (Math.log)(x) / (Math.log)(newBase);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Log10 =
function (x)
{
  return (Math.log)(x) / (Math.log)(10);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Max =
function (x, y)
{
  return (Math.max)(x, y);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Max_1 =
function (x, y)
{
  return (Math.max)(x, y);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Min =
function (x, y)
{
  return (Math.min)(x, y);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Min_1 =
function (x, y)
{
  return (Math.min)(x, y);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Pow =
function (x, y)
{
  return (Math.pow)(x, y);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Round =
function (x)
{
  return (Math.round)(x);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Sign =
function (x)
{
  return x === 0 ?
         0 :
         (x < 0 ?
          -1 :
          1);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Sign_1 =
function (x)
{
  return x === 0 ?
         0 :
         (x < 0 ?
          -1 :
          1);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Sin =
function (x)
{
  return (Math.sin)(x);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Sinh =
function (x)
{
  return ((W$.Op$).sinh)(x);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Sqrt =
function (x)
{
  return (Math.sqrt)(x);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Tan =
function (x)
{
  return (Math.tan)(x);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Tanh =
function (x)
{
  return ((W$.Op$).tanh)(x);
};

(((IntelliFactory$.WebSharper$).Proxy$).MathProxy$).Truncate =
function (x)
{
  return (Math.floor)(x);
};

(((W$.Registry).Types).get)();
((((W$.Registry).Types).get)()).DummyConsole_n6e47818c5424771c = W$.DummyConsole;
((W$.DummyConsole).prototype).$$IConsole_p15efd13ebb84dbf9__IConsole = 1;
(((W$.Console).JConsole).get)();
((((W$.Registry).Types).get)()).Canvas_n6895879e4fa8506b = (W$.Html).Canvas;
(((W$.Html).Canvas).prototype).$$INode_p5129303de1c6d8ef__INode = 1;
(((W$.Hash).maximum).get)();
((((W$.Registry).Types).get)())["Enumerable`1_p31e06ead03edeb6b"] =
W$.$Enumerable;
((W$.$Enumerable).prototype)["$$IEnumerable`1_n7f0e01069bff28f6__IEnumerable_1"]
= 1;
((W$.$Enumerable).prototype).$$IEnumerable_p7e293af1bfdeaae__IEnumerable = 1;
((((W$.Registry).Types).get)())["Enumerator`2_n48d217d232f49ed0"] =
W$.$Enumerator;
((W$.$Enumerator).prototype).$$IEnumerator_p7e293af1bfe37b0__IEnumerator = 1;
((W$.$Enumerator).prototype)["$$IEnumerator`1_n7f0e01069ab79374__IEnumerator_1"]
= 1;
((W$.$Enumerator).prototype).$$IDisposable_p1a5dece2430d1c7__IDisposable = 1;
((((W$.Registry).Types).get)())["Observer`1_p121bba4295406bfb"] = W$.$Observer;
((W$.$Observer).prototype)["$$IObserver`1_p1a7a628d9b5921a__IObserver_1"] = 1;
((((W$.Registry).Types).get)())["Observable`1_n65acc5b2a97fcfeb"] =
W$.$Observable;
((W$.$Observable).prototype)["$$IObservable`1_pa29d3c612f3d457__IObservable_1"]
= 1;
((((W$.Registry).Types).get)()).Disposable_p1d963c241c2106e6 = W$.$Disposable;
((W$.$Disposable).prototype).$$IDisposable_p1a5dece2430d1c7__IDisposable = 1;
((((W$.Registry).Types).get)())["Tree`1_n65c8b45dd5b8c175"] =
(((IntelliFactory$.WebSharper$).Runtime$).Tree$).$Tree_1;
(((W$.Web).Init).get)();
(((W$.Async$).Do).get)();
((((W$.Registry).Types).get)()).AsyncBuilder_n79a720572d6b7743 = W$.AsyncBuilder;
((((W$.Registry).Types).get)()).FSharpAsyncBuilder_nfa4a549dcbc7aed =
W$.AsyncBuilder;
((((W$.Registry).Types).get)()).DateTimeProxy_p7a293661dd70a1d6 =
(((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy;
((((W$.Registry).Types).get)()).DateTime_p5deafe0a747b785 =
(((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy;
(((((IntelliFactory$.WebSharper$).Proxy$).DateTimeProxy$).$DateTimeProxy).prototype).$$IComparable_p1a5bc0930cb9817__IComparable
= 1;
((((W$.Registry).Types).get)())["Dictionary`2_p545451ac85a9e798"] = W$.Dict;
((((W$.Registry).Types).get)())["Dictionary`2_n3ce6f44d15cfbd68"] = W$.Dict;
((W$.Dict).prototype)["$$IEnumerable`1_n7f0e01069bff28f6__IEnumerable_1"] = 1;
((W$.Dict).prototype).$$IEnumerable_p7e293af1bfdeaae__IEnumerable = 1;
((((W$.Registry).Types).get)())["EventImplementation`1_p3deb136d2fdf9855"] =
W$.$Event;
((((W$.Registry).Types).get)())["FSharpEvent`1_ncbb1d81492932bf"] = W$.$Event;
((W$.$Event).prototype)["$$IObservable`1_pa29d3c612f3d457__IObservable_1"] = 1;
((((W$.Registry).Types).get)())["List`1_p5b46c89dea183350"] = W$.$List;
((((W$.Registry).Types).get)())["FSharpList`1_p220cb680921f17f9"] = W$.$List;
((W$.$List).prototype)["$$IEquatable`1_p36687d34b8177c46__IEquatable_1"] = 1;
((W$.$List).prototype).$$IStructuralEquatable_n56ca4a8a2a725a05__IStructuralEquatable
= 1;
((W$.$List).prototype)["$$IComparable`1_p204e31892120668__IComparable_1"] = 1;
((W$.$List).prototype).$$IComparable_p1a5bc0930cb9817__IComparable = 1;
((W$.$List).prototype).$$IStructuralComparable_n3013f315744fcfa3__IStructuralComparable
= 1;
((W$.$List).prototype).$$IEnumerable_p7e293af1bfdeaae__IEnumerable = 1;
((W$.$List).prototype)["$$IEnumerable`1_n7f0e01069bff28f6__IEnumerable_1"] = 1;
((((W$.Registry).Types).get)())["MapProxy`2_p6620a4785ca965ea"] =
(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2;
((((W$.Registry).Types).get)())["FSharpMap`2_n163dace4d4bb1b44"] =
(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2;
(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2).prototype).$$IComparable_p1a5bc0930cb9817__IComparable
= 1;
(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2).prototype)["$$IEnumerable`1_n7f0e01069bff28f6__IEnumerable_1"]
= 1;
(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapProxy_2).prototype).$$IEnumerable_p7e293af1bfdeaae__IEnumerable
= 1;
((((W$.Registry).Types).get)())["MapPair`2_p129c2403a48086f4"] =
(((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapPair_2;
(((((IntelliFactory$.WebSharper$).Proxy$).MapProxy$).$MapPair_2).prototype).$$IComparable_p1a5bc0930cb9817__IComparable
= 1;
((((W$.Registry).Types).get)())["SetProxy`1_p3b234e4c20c05a45"] =
(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1;
((((W$.Registry).Types).get)())["FSharpSet`1_n163dace4d44c45b7"] =
(((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1;
(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1).prototype).$$IComparable_p1a5bc0930cb9817__IComparable
= 1;
(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1).prototype)["$$IEnumerable`1_n7f0e01069bff28f6__IEnumerable_1"]
= 1;
(((((IntelliFactory$.WebSharper$).Proxy$).SetProxy$).$SetProxy_1).prototype).$$IEnumerable_p7e293af1bfdeaae__IEnumerable
= 1;
((((W$.Registry).Types).get)()).TimeSpanProxy_n12e4edb018b6c302 =
(((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy;
((((W$.Registry).Types).get)()).TimeSpan_p5deb081c2e25f19 =
(((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy;
(((((IntelliFactory$.WebSharper$).Proxy$).TimeSpanProxy$).$TimeSpanProxy).prototype).$$IComparable_p1a5bc0930cb9817__IComparable
= 1;
((((W$.Registry).Types).get)())["StackProxy`1_p7a5c4b3a890f49d6"] = W$.$Stack;
((((W$.Registry).Types).get)())["Stack`1_p1bb69228d1f34c17"] = W$.$Stack;
((((W$.Registry).Types).get)())["QueueProxy`1_p78fb5c4563e47da5"] = W$.$Queue;
((((W$.Registry).Types).get)())["Queue`1_p1bb692283aa62286"] = W$.$Queue;
((((W$.Registry).Types).get)())["KeyValuePairProxy`2_p70dd18b8ef365333"] =
W$.$KeyValuePair;
((((W$.Registry).Types).get)())["KeyValuePair`2_n7d634141f8723d6c"] =
W$.$KeyValuePair;
((((W$.Registry).Types).get)()).ExceptionProxy_p1ae8802d83d7ed3e = W$.Exception;
((((W$.Registry).Types).get)()).Exception_n3e4b51e3dbf82879 = W$.Exception;
((((W$.Registry).Types).get)()).Control_p769e4ccf2098ba2a = W$.$Control;
((W$.$Control).prototype).$$IComponent_p4642b924f95be4a6__IComponent = 1;
((W$.$Control).prototype).$$IDisposable_p1a5dece2430d1c7__IDisposable = 1;
((W$.$Control).prototype).$$IParserAccessor_p23114829d1dcea79__IParserAccessor =
1;
((W$.$Control).prototype).$$IUrlResolutionService_p3d8fd69f2d090451__IUrlResolutionService
= 1;
((W$.$Control).prototype).$$IDataBindingsAccessor_naf467a036212eec__IDataBindingsAccessor
= 1;
((W$.$Control).prototype).$$IControlBuilderAccessor_p12767bfcffc685b4__IControlBuilderAccessor
= 1;
((W$.$Control).prototype).$$IControlDesignerAccessor_p21c9dfd732eeac7e__IControlDesignerAccessor
= 1;
((W$.$Control).prototype).$$IExpressionsAccessor_p63d69e724f7de2af__IExpressionsAccessor
= 1;
((W$.$Control).prototype).$$IWidget_p4036373d8372c14d__IWidget = 1;
((W$.$Control).prototype).$$INode_p5129303de1c6d8ef__INode = 1;
((((W$.Registry).Types).get)()).Color_n2c160cb9a7382c6d = W$.Color;
((W$.Color).prototype)["$$IEquatable`1_p36687d34b8177c46__IEquatable_1"] = 1;
((W$.Color).prototype).$$IStructuralEquatable_n56ca4a8a2a725a05__IStructuralEquatable
= 1;
((W$.Color).prototype)["$$IComparable`1_p204e31892120668__IComparable_1"] = 1;
((W$.Color).prototype).$$IComparable_p1a5bc0930cb9817__IComparable = 1;
((W$.Color).prototype).$$IStructuralComparable_n3013f315744fcfa3__IStructuralComparable
= 1;
((((W$.Registry).Types).get)()).Element_p4036373c8042a98a = (W$.Html).Element;
(((W$.Html).Element).prototype).$$IWidget_p4036373d8372c14d__IWidget = 1;
(((W$.Html).Element).prototype).$$INode_p5129303de1c6d8ef__INode = 1;
((((W$.Registry).Types).get)()).Text_n2c16064bb350a57b = (W$.Html).Text;
(((W$.Html).Text).prototype)["$$IEquatable`1_p36687d34b8177c46__IEquatable_1"] =
1;
(((W$.Html).Text).prototype).$$IStructuralEquatable_n56ca4a8a2a725a05__IStructuralEquatable
= 1;
(((W$.Html).Text).prototype)["$$IComparable`1_p204e31892120668__IComparable_1"]
= 1;
(((W$.Html).Text).prototype).$$IComparable_p1a5bc0930cb9817__IComparable = 1;
(((W$.Html).Text).prototype).$$IStructuralComparable_n3013f315744fcfa3__IStructuralComparable
= 1;
(((W$.Html).Text).prototype).$$INode_p5129303de1c6d8ef__INode = 1;
((((W$.Registry).Types).get)()).Attribute_p26a0f393ba455294 =
(W$.Html).Attribute;
(((W$.Html).Attribute).prototype)["$$IEquatable`1_p36687d34b8177c46__IEquatable_1"]
= 1;
(((W$.Html).Attribute).prototype).$$IStructuralEquatable_n56ca4a8a2a725a05__IStructuralEquatable
= 1;
(((W$.Html).Attribute).prototype)["$$IComparable`1_p204e31892120668__IComparable_1"]
= 1;
(((W$.Html).Attribute).prototype).$$IComparable_p1a5bc0930cb9817__IComparable =
1;
(((W$.Html).Attribute).prototype).$$IStructuralComparable_n3013f315744fcfa3__IStructuralComparable
= 1;
(((W$.Html).Attribute).prototype).$$INode_p5129303de1c6d8ef__INode = 1;
