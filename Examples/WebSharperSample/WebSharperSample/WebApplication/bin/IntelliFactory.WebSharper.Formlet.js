// p5156a4e3f0c0df82

if (typeof IntelliFactory$ == "undefined")
{
  IntelliFactory$ = {};
}

if (typeof IntelliFactory$.WebSharper$ == "undefined")
{
  IntelliFactory$.WebSharper$ = {};
}

if (typeof (IntelliFactory$.WebSharper$).Formlet$ == "undefined")
{
  (IntelliFactory$.WebSharper$).Formlet$ = {};
}

((IntelliFactory$.WebSharper$).Formlet$).$Form_1 =
function ()
{
  ((W$.Op).Copy)(arguments[0], this);
};

((((IntelliFactory$.WebSharper$).Formlet$).$Form_1).prototype).$INode_p5129303de1c6d8ef_get_Body =
function (unitVar1)
{
  var _this = this;
  return (((_this.get_Element)()).$INode_p5129303de1c6d8ef_get_Body)();
};

((((IntelliFactory$.WebSharper$).Formlet$).$Form_1).prototype).$IObservable_1_pa29d3c612f3d457_Subscribe =
function (f)
{
  var _this = this;
  return ((_this.stream).$IObservable_1_pa29d3c612f3d457_Subscribe)(f);
};

((((IntelliFactory$.WebSharper$).Formlet$).$Form_1).prototype).$IWidget_p4036373d8372c14d_OnAfterRender =
function (f)
{
  var _this = this;
  return (((_this.get_Element)()).$IWidget_p4036373d8372c14d_OnAfterRender)(f);
};

((((IntelliFactory$.WebSharper$).Formlet$).$Form_1).prototype).$IWidget_p4036373d8372c14d_OnBeforeRender =
function (f)
{
  var _this = this;
  return (((_this.get_Element)()).$IWidget_p4036373d8372c14d_OnBeforeRender)(f);
};

((((IntelliFactory$.WebSharper$).Formlet$).$Form_1).prototype).$IWidget_p4036373d8372c14d_Render =
function (unitVar1)
{
  var _this = this;
  return (((_this.get_Element)()).$IWidget_p4036373d8372c14d_Render)();
};

((((IntelliFactory$.WebSharper$).Formlet$).$Form_1).prototype).$IWidget_p4036373d8372c14d_get_Body =
function (unitVar1)
{
  var _this = this;
  return (((_this.get_Element)()).$IWidget_p4036373d8372c14d_get_Body)();
};

((((IntelliFactory$.WebSharper$).Formlet$).$Form_1).prototype).get_Reset =
function (unitVar1)
{
  var _this = this;
  return _this.reset;
};

((((IntelliFactory$.WebSharper$).Formlet$).$Form_1).prototype).get_Body =
function (unitVar1)
{
  var _this = this;
  return _this.body;
};

((((IntelliFactory$.WebSharper$).Formlet$).$Form_1).prototype).get_State =
function (unitVar1)
{
  var _this = this;
  return _this.state;
};

((((IntelliFactory$.WebSharper$).Formlet$).$Form_1).prototype).get_Element =
function (unitVar1)
{
  var _this = this;
  var x = _this.element;
  if (((W$.Option$).isNone)(x))
  {
    var matchValue = _this.body;
    var __3;
    if (matchValue.$ == 1)
    {
      var __2;
      if (((matchValue.$0)[0]).$ == 0)
      {
        var __1;
        if ((matchValue.$1).$ == 0)
        {
          var elem = (matchValue.$0)[1];
          __1 = elem;
        }
        else
        {
          var bs = matchValue;
          __1 =
          ((((((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).VerticalTable).get)(
           ))(
          ((((((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).ToRowElements).get)(
           ))(bs));
        }
        __2 = __1;
      }
      else
      {
        var bs_1 = matchValue;
        __2 =
        ((((((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).VerticalTable).get)(
         ))(
        ((((((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).ToRowElements).get)(
         ))(bs_1));
      }
      __3 = __2;
    }
    else
    {
      var bs_2 = matchValue;
      __3 =
      ((((((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).VerticalTable).get)(
       ))(
      ((((((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).ToRowElements).get)(
       ))(bs_2));
    }
    _this.element = (function (arg0)
                     {
                       return{
                               $: 1,
                               $0: arg0
                             };
                     })(__3);
  }
  return (_this.element).$0;
};

if (typeof ((IntelliFactory$.WebSharper$).Formlet$).Behavior$ == "undefined")
{
  ((IntelliFactory$.WebSharper$).Formlet$).Behavior$ = {};
}

(((IntelliFactory$.WebSharper$).Formlet$).Behavior$).$BehaviorBuilder =
function ()
{};

(((IntelliFactory$.WebSharper$).Formlet$).Behavior$).$Behavior_1 =
function ()
{
  ((W$.Op).Copy)(arguments[0], this);
};

(((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Init =
function (init, event)
{
  var cv = [init];
  var evNew = ((new W$.$Event())._ctor)();
  var h = function (v)
          {
            cv[0] = v;
            return (evNew.Trigger)(cv[0]);
          };
  var event_1 = event;
  void
  (event_1.$IObservable_1_pa29d3c612f3d457_Subscribe)(((W$.Observer$).Simple)(h)
  );
  var _this = evNew;
  return new (((IntelliFactory$.WebSharper$).Formlet$).Behavior$).$Behavior_1({
                                                                                CurrentValue:
                                                                                cv,
                                                                                Event:
                                                                                _this
                                                                              });
};

(((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Iterate =
function (f, b)
{
  f((b.$IBehavior_1_n7022c65334d74452_get_CurrentValue)());
  var h = f;
  var event = b;
  return void
         (event.$IObservable_1_pa29d3c612f3d457_Subscribe)(
         ((W$.Observer$).Simple)(h));
};

(((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Snapshot =
function (ev, b)
{
  var outEv = ((new W$.$Event())._ctor)();
  var h =
      function (_arg1)
      {
        return (outEv.Trigger)(
               (b.$IBehavior_1_n7022c65334d74452_get_CurrentValue)());
      };
  var event = ev;
  void
  (event.$IObservable_1_pa29d3c612f3d457_Subscribe)(((W$.Observer$).Simple)(h));
  var _this = outEv;
  return _this;
};

(((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Map =
function (f, b)
{
  return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Init)(
         f((b.$IBehavior_1_n7022c65334d74452_get_CurrentValue)()),
         (((((IntelliFactory$.WebSharper$).Proxy$).ObservableProxy$).ObservableModule$).map)(
         f, b));
};

(((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Constant =
function (c)
{
  var _this = ((new W$.$Event())._ctor)();
  return new (((IntelliFactory$.WebSharper$).Formlet$).Behavior$).$Behavior_1({
                                                                                CurrentValue:
                                                                                [c],
                                                                                Event:
                                                                                _this
                                                                              });
};

(((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Sequence =
function (behaviors)
{
  var behaviors_1 = ((W$.Seq$).toArray)(behaviors);
  var changes = ((new W$.$Event())._ctor)();
  var mapping =
      function (b)
      {
        var h = function (t)
                {
                  return (changes.Trigger)(undefined);
                };
        var event = b;
        void
        (event.$IObservable_1_pa29d3c612f3d457_Subscribe)(
        ((W$.Observer$).Simple)(h));
        return (b.$IBehavior_1_n7022c65334d74452_get_CurrentValue)();
      };
  var values = (function (array)
                {
                  return ((W$.Array).map)(mapping, array);
                })(behaviors_1);
  var mapping_1 =
      function (unitVar0)
      {
        var mapping_2 =
            function (b)
            {
              return (b.$IBehavior_1_n7022c65334d74452_get_CurrentValue)();
            };
        return (function (array)
                {
                  return ((W$.Array).map)(mapping_2, array);
                })(behaviors_1);
      };
  var _this = changes;
  var event_1 = (function (sourceEvent)
                 {
                   return ((W$.Event$).map)(mapping_1, sourceEvent);
                 })(_this);
  return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Init)(
         values, event_1);
};

(((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Changes =
function (b)
{
  return b;
};

(((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Bind =
function (b, f)
{
  return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Join)(
         ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Map)(f, b));
};

(((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Join =
function (b)
{
  var e = ((new W$.$Event())._ctor)();
  var currIx = [0];
  var f =
      function (bi)
      {
        currIx[0] = currIx[0] + 1;
        var cI = currIx[0];
        var f_1 = function (v)
                  {
                    if (currIx[0] === cI)
                    {
                      (e.Trigger)(v);
                    }
                  };
        return (function (b_1)
                {
                  return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Iterate)(
                         f_1, b_1);
                })(bi);
      };
  (function (b_1)
   {
     return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Iterate)(
            f, b_1);
   })(b);
  var _this = e;
  return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Init)(
         (((b.$IBehavior_1_n7022c65334d74452_get_CurrentValue)()).$IBehavior_1_n7022c65334d74452_get_CurrentValue)(
         ), _this);
};

(((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Do =
Delay(
function (unitVar0)
{
  return ((new (((IntelliFactory$.WebSharper$).Formlet$).Behavior$).$BehaviorBuilder())._ctor)(
         );
});

(((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).$BehaviorBuilder).prototype)._ctor =
function (unitVar0)
{
  return this;
};

(((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).$BehaviorBuilder).prototype).Return =
function (x)
{
  var _this = this;
  return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Constant)(x);
};

(((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).$BehaviorBuilder).prototype).Bind =
function (b, f)
{
  var _this = this;
  return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Bind)(b, f);
};

(((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).$BehaviorBuilder).prototype).ReturnFrom =
function (x)
{
  var _this = this;
  return x;
};

(((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).$Behavior_1).prototype).$IObservable_1_pa29d3c612f3d457_Subscribe =
function (f)
{
  var _this = this;
  return ((_this.Event).$IObservable_1_pa29d3c612f3d457_Subscribe)(f);
};

(((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).$Behavior_1).prototype).$IBehavior_1_n7022c65334d74452_get_CurrentValue =
function (unitVar1)
{
  var _this = this;
  return (_this.CurrentValue)[0];
};

if (typeof ((IntelliFactory$.WebSharper$).Formlet$).Utils$ == "undefined")
{
  ((IntelliFactory$.WebSharper$).Formlet$).Utils$ = {};
}

(((IntelliFactory$.WebSharper$).Formlet$).Utils$).Maybe =
function (d, f, o)
{
  var __1;
  if (o.$ == 0)
  {
    __1 = d;
  }
  else
  {
    var x = o.$0;
    __1 = f(x);
  }
  return __1;
};

(((IntelliFactory$.WebSharper$).Formlet$).Utils$).InTable =
function (rows)
{
  var mapping =
      function (cols)
      {
        var mapping_1 = function (c)
                        {
                          var x_1 = new W$.$List({
                                                   $: 1,
                                                   $0: c,
                                                   $1: new W$.$List({
                                                                      $: 0
                                                                    })
                                                 });
                          var body = x_1;
                          var name = "td";
                          return ((W$.Html).Tag)(name, body);
                        };
        var x = (function (list)
                 {
                   return ((W$.List$).map)(mapping_1, list);
                 })(cols);
        var body_1 = x;
        var name_1 = "tr";
        return ((W$.Html).Tag)(name_1, body_1);
      };
  return (function (tb)
          {
            var x = new W$.$List({
                                   $: 1,
                                   $0: tb,
                                   $1: new W$.$List({
                                                      $: 0
                                                    })
                                 });
            var body = x;
            var name = "table";
            return ((W$.Html).Tag)(name, body);
          })((function (x)
              {
                var x_1 = x;
                var body = x_1;
                var name = "tbody";
                return ((W$.Html).Tag)(name, body);
              })((function (list)
                  {
                    return ((W$.List$).map)(mapping, list);
                  })(rows)));
};

(((IntelliFactory$.WebSharper$).Formlet$).Utils$).MapOption =
function (f, value)
{
  var __1;
  if (value.$ == 1)
  {
    var v = value.$0;
    __1 ={
           $: 1,
           $0: f(v)
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

(((IntelliFactory$.WebSharper$).Formlet$).Utils$).DoNothing =
function (unitVar0)
{};

(((IntelliFactory$.WebSharper$).Formlet$).Utils$).X =
function (unit)
{
  return ((W$.Op$).failwith)("Not implemented.");
};

if (typeof ((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$ ==
    "undefined")
{
  ((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$ = {};
}

(((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).VerticalTableWith =
function (rowTrans, rows)
{
  var __1;
  if (rows.$ == 0)
  {
    __1 = 0;
  }
  else
  {
    var mapping = function (list)
                  {
                    var l = list;
                    return ((W$.Seq$).length)(l);
                  };
    __1 =
    (function (list)
     {
       var l = list;
       return ((W$.List$).reduce)(function (e1)
                                  {
                                    return function (e2)
                                           {
                                             return ((W$.Op$).max)(e1, e2);
                                           };
                                  }, l);
     })((function (list)
         {
           return ((W$.List$).map)(mapping, list);
         })(rows));
  }
  var maxCols = __1;
  var mapping_1 =
      function (ix)
      {
        return function (cols)
               {
                 var l = cols;
                 var cspan = maxCols - ((W$.Seq$).length)(l);
                 var mapping_2 =
                     function (ix_1)
                     {
                       return function (_1)
                              {
                                var tupledArg = arguments.length > 1 ?
                                                arguments :
                                                _1;
                                var elem = tupledArg[0];
                                var lc = tupledArg[1];
                                var __1;
                                if (lc.$ == 1)
                                {
                                  var lc_1 = lc.$0;
                                  var x =
                                      new W$.$List({
                                                     $: 1,
                                                     $0:
                                                     ((((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).HorizontalAlignCell)(
                                                     lc_1.Align, elem),
                                                     $1: new W$.$List({
                                                                        $: 0
                                                                      })
                                                   });
                                  var body = x;
                                  var name = "td";
                                  var cell_1 = ((W$.Html).Tag)(name, body);
                                  ((((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).VerticalAlignCell)(
                                  lc_1.VerticalAlign, cell_1);
                                  __1 = cell_1;
                                }
                                else
                                {
                                  var x_1 =
                                      new W$.$List({
                                                     $: 1,
                                                     $0: elem,
                                                     $1: new W$.$List({
                                                                        $: 0
                                                                      })
                                                   });
                                  var body_1 = x_1;
                                  var name_1 = "td";
                                  __1 = ((W$.Html).Tag)(name_1, body_1);
                                }
                                var cell = __1;
                                if (ix_1 === 0 ?
                                    cspan > 0 :
                                    false)
                                {
                                  var x_2 = cspan + 1;
                                  (cell.set_Item)("colspan", (x_2.toString)());
                                }
                                return cell;
                              };
                     };
                 return (rowTrans(ix))(
                        (function (x)
                         {
                           var x_1 = x;
                           var body = x_1;
                           var name = "tr";
                           return ((W$.Html).Tag)(name, body);
                         })((function (list)
                             {
                               return ((W$.List$).mapi)(mapping_2, list);
                             })(cols)));
               };
      };
  var tbody = (function (x)
               {
                 var x_1 = x;
                 var body = x_1;
                 var name = "tbody";
                 return ((W$.Html).Tag)(name, body);
               })((function (list)
                   {
                     return ((W$.List$).mapi)(mapping_1, list);
                   })(rows));
  var x_3 = new W$.$List({
                           $: 1,
                           $0: tbody,
                           $1: new W$.$List({
                                              $: 0
                                            })
                         });
  var body_2 = x_3;
  var name_2 = "table";
  return ((W$.Html).Tag)(name_2, body_2);
};

(((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).HorizontalTable =
function (rows)
{
  var mapping =
      function (cols)
      {
        var mapping_1 =
            function (_1)
            {
              var tupledArg = arguments.length > 1 ?
                              arguments :
                              _1;
              var elem = tupledArg[0];
              var lc = tupledArg[1];
              var x = new W$.$List({
                                     $: 1,
                                     $0: elem,
                                     $1: new W$.$List({
                                                        $: 0
                                                      })
                                   });
              var body = x;
              var name = "td";
              var cell = ((W$.Html).Tag)(name, body);
              var d;
              var f =
                  function (lc_1)
                  {
                    return ((((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).VerticalAlignCell)(
                           lc_1.VerticalAlign, cell);
                  };
              (function (o)
               {
                 return ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).Maybe)(
                        d, f, o);
               })(lc);
              return cell;
            };
        return (function (list)
                {
                  return ((W$.List$).map)(mapping_1, list);
                })(cols);
      };
  var row = (function (lists)
             {
               return ((W$.List$).concat)(lists);
             })((function (list)
                 {
                   return ((W$.List$).map)(mapping, list);
                 })(rows));
  return ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).InTable)(
         new W$.$List({
                        $: 1,
                        $0: row,
                        $1: new W$.$List({
                                           $: 0
                                         })
                      }));
};

(((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).VerticalAlignCell =
function (valign, cell)
{
  var valign_1 = valign.$ == 1 ?
                 "middle" :
                 (valign.$ == 2 ?
                  "bottom" :
                  "top");
  var prop = valign_1;
  var name = "vertical-align";
  var _this = cell;
  var this_1 = _this;
  return void ((jQuery((this_1.get_Dom)())).css)(name, prop);
};

(((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).HorizontalAlignCell =
function (align, el)
{
  var _float = align.$ == 0 ?
               "left" :
               "right";
  var x_1 = ("float:" + _float) + ";";
  var x = new W$.$List({
                         $: 1,
                         $0: ((W$.Attr).NewAttr)("style", x_1),
                         $1: new W$.$List({
                                            $: 0
                                          })
                       });
  var body = x;
  var name = "div";
  return ((W$.Html).append)(
         ((W$.Html).Tag)(name, body), new W$.$List({
                                                     $: 1,
                                                     $0: el,
                                                     $1: new W$.$List({
                                                                        $: 0
                                                                      })
                                                   }));
};

(((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).ToRowElement =
function (label, elem)
{
  var __4;
  if (label.$ == 1)
  {
    var lc = (label.$0)[1];
    var lblEl = (label.$0)[0];
    var matchValue = lc.Placement;
    var __3;
    if (matchValue.$ == 3)
    {
      var lblEl_1 =
          ((((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).HorizontalAlignCell)(
          lc.Align, lblEl);
      __3 =
      new W$.$List({
                     $: 1,
                     $0:
                     [((((IntelliFactory$.WebSharper$).Formlet$).Utils$).InTable)(
                      new W$.$List({
                                     $: 1,
                                     $0: new W$.$List({
                                                        $: 1,
                                                        $0: elem,
                                                        $1: new W$.$List({
                                                                           $: 0
                                                                         })
                                                      }),
                                     $1:
                                     new W$.$List({
                                                    $: 1,
                                                    $0:
                                                    new W$.$List({
                                                                   $: 1,
                                                                   $0: lblEl_1,
                                                                   $1:
                                                                   new W$.$List({
                                                                                  $:
                                                                                  0
                                                                                })
                                                                 }),
                                                    $1: new W$.$List({
                                                                       $: 0
                                                                     })
                                                  })
                                   })),{
                                         $: 0
                                       }],
                     $1: new W$.$List({
                                        $: 0
                                      })
                   });
    }
    else
    {
      var __2;
      if (matchValue.$ == 0)
      {
        __2 = new W$.$List({
                             $: 1,
                             $0: [lblEl,{
                                          $: 1,
                                          $0: lc
                                        }],
                             $1: new W$.$List({
                                                $: 1,
                                                $0: [elem,{
                                                            $: 0
                                                          }],
                                                $1: new W$.$List({
                                                                   $: 0
                                                                 })
                                              })
                           });
      }
      else
      {
        var __1;
        if (matchValue.$ == 1)
        {
          __1 = new W$.$List({
                               $: 1,
                               $0: [elem,{
                                           $: 0
                                         }],
                               $1: new W$.$List({
                                                  $: 1,
                                                  $0: [lblEl,{
                                                               $: 1,
                                                               $0: lc
                                                             }],
                                                  $1: new W$.$List({
                                                                     $: 0
                                                                   })
                                                })
                             });
        }
        else
        {
          var lblEl_2 =
              ((((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).HorizontalAlignCell)(
              lc.Align, lblEl);
          __1 =
          new W$.$List({
                         $: 1,
                         $0:
                         [((((IntelliFactory$.WebSharper$).Formlet$).Utils$).InTable)(
                          new W$.$List({
                                         $: 1,
                                         $0:
                                         new W$.$List({
                                                        $: 1,
                                                        $0: lblEl_2,
                                                        $1: new W$.$List({
                                                                           $: 0
                                                                         })
                                                      }),
                                         $1:
                                         new W$.$List({
                                                        $: 1,
                                                        $0:
                                                        new W$.$List({
                                                                       $: 1,
                                                                       $0: elem,
                                                                       $1:
                                                                       new W$.$List({
                                                                                      $:
                                                                                      0
                                                                                    })
                                                                     }),
                                                        $1: new W$.$List({
                                                                           $: 0
                                                                         })
                                                      })
                                       })),{
                                             $: 0
                                           }],
                         $1: new W$.$List({
                                            $: 0
                                          })
                       });
        }
        __2 = __1;
      }
      __3 = __2;
    }
    __4 = __3;
  }
  else
  {
    __4 = new W$.$List({
                         $: 1,
                         $0: [elem,{
                                     $: 0
                                   }],
                         $1: new W$.$List({
                                            $: 0
                                          })
                       });
  }
  return __4;
};

(((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).ToRowElements =
Delay(
function (unitVar0)
{
  return function (list)
         {
           return ((W$.List$).map)(
                  function (_1)
                  {
                    var tupledArg = arguments.length > 1 ?
                                    arguments :
                                    _1;
                    var arg00_ = tupledArg[0];
                    var arg01_ = tupledArg[1];
                    return ((((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).ToRowElement)(
                           arg00_, arg01_);
                  }, list);
         };
});

(((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).VerticalTable =
Delay(
function (unitVar0)
{
  var rowTrans = function (_arg1)
                 {
                   return function (el)
                          {
                            return el;
                          };
                 };
  return function (rows)
         {
           return ((((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).VerticalTableWith)(
                  rowTrans, rows);
         };
});

if (typeof ((IntelliFactory$.WebSharper$).Formlet$).Result$ == "undefined")
{
  ((IntelliFactory$.WebSharper$).Formlet$).Result$ = {};
}

(((IntelliFactory$.WebSharper$).Formlet$).Result$).OfOption =
function (o)
{
  var __1;
  if (o.$ == 0)
  {
    __1 ={
           $: 1,
           $0: new W$.$List({
                              $: 0
                            })
         };
  }
  else
  {
    var v = o.$0;
    __1 ={
           $: 0,
           $0: v
         };
  }
  return __1;
};

(((IntelliFactory$.WebSharper$).Formlet$).Result$).Map =
function (f, r)
{
  var __1;
  if (r.$ == 1)
  {
    var fs = r.$0;
    __1 ={
           $: 1,
           $0: fs
         };
  }
  else
  {
    var s = r.$0;
    __1 = (function (arg0)
           {
             return{
                     $: 0,
                     $0: arg0
                   };
           })(f(s));
  }
  return __1;
};

(((IntelliFactory$.WebSharper$).Formlet$).Result$).Sequence =
function (rs)
{
  var merge = function (rs_1)
              {
                return function (r)
                       {
                         var __3;
                         if (rs_1.$ == 1)
                         {
                           var fs1 = rs_1.$0;
                           var __1;
                           if (r.$ == 1)
                           {
                             var fs2 = r.$0;
                             var b = fs2;
                             var a = fs1;
                             __1 ={
                                    $: 1,
                                    $0: ((W$.List$).append)(a, b)
                                  };
                           }
                           else
                           {
                             var v = r.$0;
                             __1 ={
                                    $: 1,
                                    $0: fs1
                                  };
                           }
                           __3 = __1;
                         }
                         else
                         {
                           var vs = rs_1.$0;
                           var __2;
                           if (r.$ == 1)
                           {
                             var fs = r.$0;
                             __2 ={
                                    $: 1,
                                    $0: fs
                                  };
                           }
                           else
                           {
                             var v_1 = r.$0;
                             var b_1 = new W$.$List({
                                                      $: 1,
                                                      $0: v_1,
                                                      $1: new W$.$List({
                                                                         $: 0
                                                                       })
                                                    });
                             var a_1 = vs;
                             __2 ={
                                    $: 0,
                                    $0: ((W$.List$).append)(a_1, b_1)
                                  };
                           }
                           __3 = __2;
                         }
                         return __3;
                       };
              };
  var matchValue = ((W$.Seq$).fold)(merge,{
                                            $: 0,
                                            $0: new W$.$List({
                                                               $: 0
                                                             })
                                          }, rs);
  var __1;
  if (matchValue.$ == 1)
  {
    var fs_1 = matchValue.$0;
    __1 ={
           $: 1,
           $0: fs_1
         };
  }
  else
  {
    var vs_1 = matchValue.$0;
    __1 = (function (arg0)
           {
             return{
                     $: 0,
                     $0: arg0
                   };
           })((function (source)
               {
                 var l = source;
                 return l;
               })(vs_1));
  }
  return __1;
};

if (typeof ((IntelliFactory$.WebSharper$).Formlet$).FormState$ == "undefined")
{
  ((IntelliFactory$.WebSharper$).Formlet$).FormState$ = {};
}

(((IntelliFactory$.WebSharper$).Formlet$).FormState$).Apply =
function (fState, vState)
{
  return (function (builder_)
          {
            return (builder_.Bind)(
                   fState,
                   function (_arg3)
                   {
                     var f = _arg3;
                     return (builder_.Bind)(
                            vState, function (_arg2)
                                    {
                                      var v = _arg2;
                                      var matchValue = [f, v];
                                      var __3;
                                      if ((matchValue[0]).$ == 1)
                                      {
                                        var __1;
                                        if ((matchValue[1]).$ == 1)
                                        {
                                          var s1 = (matchValue[0]).$0;
                                          var s2 = (matchValue[1]).$0;
                                          var b = s2;
                                          var a = s1;
                                          __1 ={
                                                 $: 1,
                                                 $0: ((W$.List$).append)(a, b)
                                               };
                                        }
                                        else
                                        {
                                          var s1_1 = (matchValue[0]).$0;
                                          __1 ={
                                                 $: 1,
                                                 $0: s1_1
                                               };
                                        }
                                        __3 = __1;
                                      }
                                      else
                                      {
                                        var __2;
                                        if ((matchValue[1]).$ == 1)
                                        {
                                          var s2_1 = (matchValue[1]).$0;
                                          __2 ={
                                                 $: 1,
                                                 $0: s2_1
                                               };
                                        }
                                        else
                                        {
                                          var f_1 = (matchValue[0]).$0;
                                          var x = (matchValue[1]).$0;
                                          __2 ={
                                                 $: 0,
                                                 $0: f_1(x)
                                               };
                                        }
                                        __3 = __2;
                                      }
                                      var r = __3;
                                      return (builder_.Return)(r);
                                    });
                   });
          })((((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Do).get)());
};

(((IntelliFactory$.WebSharper$).Formlet$).FormState$).Yield =
function (v)
{
  return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Constant)({
                                                                           $: 0,
                                                                           $0: v
                                                                         });
};

(((IntelliFactory$.WebSharper$).Formlet$).FormState$).Map =
function (f, fs)
{
  return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Map)(
         function (r)
         {
           return ((((IntelliFactory$.WebSharper$).Formlet$).Result$).Map)(f, r);
         }, fs);
};

(((IntelliFactory$.WebSharper$).Formlet$).FormState$).op_LessMultiplyGreater =
function (f, fs)
{
  return ((((IntelliFactory$.WebSharper$).Formlet$).FormState$).Apply)(f, fs);
};

(((IntelliFactory$.WebSharper$).Formlet$).FormState$).Sequence =
function (fs)
{
  var f =
      function (rs)
      {
        return ((((IntelliFactory$.WebSharper$).Formlet$).Result$).Sequence)(rs);
      };
  return (function (b)
          {
            return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Map)(
                   f, b);
          })(((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Sequence)(fs)
         );
};

if (typeof ((IntelliFactory$.WebSharper$).Formlet$).Form$ == "undefined")
{
  ((IntelliFactory$.WebSharper$).Formlet$).Form$ = {};
}

(((IntelliFactory$.WebSharper$).Formlet$).Form$).Create =
function (body, state, reset)
{
  var chooser = function (_arg1)
                {
                  var __1;
                  if (_arg1.$ == 1)
                  {
                    __1 ={
                           $: 0
                         };
                  }
                  else
                  {
                    var t = _arg1.$0;
                    __1 ={
                           $: 1,
                           $0: t
                         };
                  }
                  return __1;
                };
  return new ((IntelliFactory$.WebSharper$).Formlet$).$Form_1({
                                                                element:{
                                                                          $: 0
                                                                        },
                                                                body: body,
                                                                reset: reset,
                                                                state: state,
                                                                stream:
                                                                (function (source)
                                                                 {
                                                                   return (((((IntelliFactory$.WebSharper$).Proxy$).ObservableProxy$).ObservableModule$).choose)(
                                                                          chooser,
                                                                          source
                                                                          );
                                                                 })(state)
                                                              });
};

(((IntelliFactory$.WebSharper$).Formlet$).Form$).Dependent =
function (fs, f)
{
  var fEv = ((new W$.$Event())._ctor)();
  var init ={
              $: 1,
              $0: new W$.$List({
                                 $: 0
                               })
            };
  var _this = fEv;
  var state =
      (function (event)
       {
         return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Init)(
                init, event);
       })(_this);
  var x = new W$.$List({
                         $: 0
                       });
  var body = x;
  var name = "div";
  var pan = ((W$.Html).Tag)(name, body);
  var f_1 =
      function (r)
      {
        if (r.$ == 0)
        {
          var v = r.$0;
          var fN = f(v);
          var f_2 = function (r_1)
                    {
                      return (fEv.Trigger)(r_1);
                    };
          (function (b)
           {
             return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Iterate)(
                    f_2, b);
           })(fN.state);
          var this_1 = pan;
          var this_2 = this_1;
          void ((jQuery((this_2.get_Dom)())).empty)();
          (pan.Append)((fN.get_Element)());
        }
        else
        {
          var fs_1 = r.$0;
          var this_3 = pan;
          var this_4 = this_3;
          void ((jQuery((this_4.get_Dom)())).empty)();
          (fEv.Trigger)({
                          $: 1,
                          $0: fs_1
                        });
        }
      };
  (function (b)
   {
     return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Iterate)(
            f_1, b);
   })(fs);
  var reset =
      function (unitVar0)
      {
        var form =
            ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Dependent)(fs, f);
        var this_1 = pan;
        var this_2 = this_1;
        void ((jQuery((this_2.get_Dom)())).empty)();
        return (pan.Append)((form.get_Element)());
      };
  return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
         new W$.$List({
                        $: 1,
                        $0: [{
                               $: 0
                             }, pan],
                        $1: new W$.$List({
                                           $: 0
                                         })
                      }), state, reset);
};

(((IntelliFactory$.WebSharper$).Formlet$).Form$).Apply =
function (f, form)
{
  var b = form.body;
  var a = f.body;
  return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
         ((W$.List$).append)(a, b),
         ((((IntelliFactory$.WebSharper$).Formlet$).FormState$).Apply)(
         f.state, form.state), function (unitVar0)
                               {
                                 (f.reset)(undefined);
                                 return (form.reset)(undefined);
                               });
};

(((IntelliFactory$.WebSharper$).Formlet$).Form$).Yield =
function (v)
{
  return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
         new W$.$List({
                        $: 0
                      }),
         ((((IntelliFactory$.WebSharper$).Formlet$).FormState$).Yield)(v),
         function (unitVar0)
         {});
};

if (typeof ((IntelliFactory$.WebSharper$).Formlet$).Formlet$ == "undefined")
{
  ((IntelliFactory$.WebSharper$).Formlet$).Formlet$ = {};
}

(((IntelliFactory$.WebSharper$).Formlet$).Formlet$).$FormletBuilder =
function ()
{};

(((IntelliFactory$.WebSharper$).Formlet$).Formlet$).MapElement =
function (f, flet)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var form = (flet.BuildForm)(undefined);
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   new W$.$List({
                                  $: 1,
                                  $0: [{
                                         $: 0
                                       }, f((form.get_Element)())],
                                  $1: new W$.$List({
                                                     $: 0
                                                   })
                                }), (form.get_State)(), (form.get_Reset)());
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Formlet$).MapResult =
function (f, flet)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var form = (flet.BuildForm)(undefined);
            var state =
                (function (b)
                 {
                   return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Map)(
                          f, b);
                 })((form.get_State)());
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   (form.get_Body)(), state, (form.get_Reset)());
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Apply =
function (f, flet)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var form1 = (f.BuildForm)(undefined);
            var form2 = (flet.BuildForm)(undefined);
            var b = (form2.get_Body)();
            var a = (form1.get_Body)();
            var body = ((W$.List$).append)(a, b);
            var state =
                ((((IntelliFactory$.WebSharper$).Formlet$).FormState$).Apply)(
                (form1.get_State)(), (form2.get_State)());
            var reset = function (unitVar0_1)
                        {
                          ((form1.get_Reset)())(undefined);
                          return ((form2.get_Reset)())(undefined);
                        };
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   body, state, reset);
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Bind =
function (flet, f)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var form1 = (flet.BuildForm)(undefined);
            var form2 =
                ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).op_BarGreaterGreaterEquals)(
                (form1.get_State)(), function (v)
                                     {
                                       return ((f(v)).BuildForm)(undefined);
                                     });
            var x = new W$.$List({
                                   $: 1,
                                   $0: (form1.get_Element)(),
                                   $1: new W$.$List({
                                                      $: 0
                                                    })
                                 });
            var body = x;
            var name = "div";
            var pan1 = ((W$.Html).Tag)(name, body);
            var x_1 = new W$.$List({
                                     $: 1,
                                     $0: (form2.get_Element)(),
                                     $1: new W$.$List({
                                                        $: 0
                                                      })
                                   });
            var body_1 = x_1;
            var name_1 = "div";
            var pan2 = ((W$.Html).Tag)(name_1, body_1);
            var body_2 =
                new W$.$List({
                               $: 1,
                               $0: [{
                                      $: 0
                                    }, pan1],
                               $1: new W$.$List({
                                                  $: 1,
                                                  $0: [{
                                                         $: 0
                                                       }, pan2],
                                                  $1: new W$.$List({
                                                                     $: 0
                                                                   })
                                                })
                             });
            var reset =
                function (unitVar0_1)
                {
                  var form1_1 = (flet.BuildForm)(undefined);
                  var form2_1 =
                      ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).op_BarGreaterGreaterEquals)(
                      (form1_1.get_State)(),
                      function (v)
                      {
                        return ((f(v)).BuildForm)(undefined);
                      });
                  var _this = pan1;
                  var this_1 = _this;
                  void ((jQuery((this_1.get_Dom)())).empty)();
                  (pan1.Append)((form1_1.get_Element)());
                  var this_2 = pan2;
                  var this_3 = this_2;
                  void ((jQuery((this_3.get_Dom)())).empty)();
                  return (pan2.Append)((form2_1.get_Element)());
                };
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   body_2, (form2.get_State)(), reset);
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Return =
function (value)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   new W$.$List({
                                  $: 0
                                }),
                   ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Constant)(
                   {
                     $: 0,
                     $0: value
                   }),
                   function (arg00_)
                   {
                     return ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).DoNothing)(
                            );
                   });
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Formlet$).OfElement =
function (genElem)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var elem = genElem(undefined);
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   new W$.$List({
                                  $: 1,
                                  $0: [{
                                         $: 0
                                       }, elem],
                                  $1: new W$.$List({
                                                     $: 0
                                                   })
                                }),
                   ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Constant)(
                   {
                     $: 0,
                     $0: undefined
                   }),
                   function (arg00_)
                   {
                     return ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).DoNothing)(
                            );
                   });
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Horizontal =
function (flet)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var form = (flet.BuildForm)(undefined);
            var body =
                (function (rows)
                 {
                   return ((((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).HorizontalTable)(
                          rows);
                 })(
                ((((((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).ToRowElements).get)(
                 ))((form.get_Body)()));
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   new W$.$List({
                                  $: 1,
                                  $0: [{
                                         $: 0
                                       }, body],
                                  $1: new W$.$List({
                                                     $: 0
                                                   })
                                }), (form.get_State)(), (form.get_Reset)());
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Vertical =
function (flet)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var form = (flet.BuildForm)(undefined);
            var body = new W$.$List({
                                      $: 1,
                                      $0: [{
                                             $: 0
                                           }, (form.get_Element)()],
                                      $1: new W$.$List({
                                                         $: 0
                                                       })
                                    });
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   body, (form.get_State)(), (form.get_Reset)());
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Sequence =
function (fs)
{
  var __1;
  if (fs.$ == 1)
  {
    var fs_1 = fs.$1;
    var f = fs.$0;
    __1 =
    ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).op_LessMultiplyGreater)(
    ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).op_LessMultiplyGreater)(
    ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Yield)(
    function (v)
    {
      return function (vs)
             {
               return new W$.$List({
                                     $: 1,
                                     $0: v,
                                     $1: vs
                                   });
             };
    }), f), ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Sequence)(fs_1)
    );
  }
  else
  {
    __1 =
    ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Return)(
    new W$.$List({
                   $: 0
                 }));
  }
  return __1;
};

(((IntelliFactory$.WebSharper$).Formlet$).Formlet$).op_LessMultiplyGreater =
function (f, x)
{
  return ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Apply)(f, x);
};

(((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Yield =
function (value)
{
  return ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Return)(value);
};

(((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Many =
function (formlet)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var updEv = ((new W$.$Event())._ctor)();
            var state =
                (function (builder_)
                 {
                   var _this = updEv;
                   return (builder_.Bind)(
                          ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Update)(
                          new W$.$List({
                                         $: 0
                                       }), _this),
                          function (_arg5)
                          {
                            var bs = _arg5;
                            return (builder_.Bind)(
                                   ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Sequence)(
                                   ((W$.List$).map)(
                                   function (_1)
                                   {
                                     var tuple = arguments.length > 1 ?
                                                 arguments :
                                                 _1;
                                     return tuple[0];
                                   }, bs)),
                                   function (_arg4)
                                   {
                                     var ms = _arg4;
                                     return (builder_.Return)(
                                            ((((IntelliFactory$.WebSharper$).Formlet$).Result$).Map)(
                                            function (source)
                                            {
                                              var s = source;
                                              return ((W$.List$).ofArray)(
                                                     ((W$.Array).ofSeq)(s));
                                            },
                                            ((((IntelliFactory$.WebSharper$).Formlet$).Result$).Sequence)(
                                            ms)));
                                   });
                          });
                 })(
                (((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Do).get)(
                ));
            var fRow =
                function (unitVar0_1)
                {
                  var form = (formlet.BuildForm)(undefined);
                  var id = ((W$.Html).NewId)();
                  (updEv.Trigger)(
                  function (sts)
                  {
                    var b = new W$.$List({
                                           $: 1,
                                           $0: [(form.get_State)(), id],
                                           $1: new W$.$List({
                                                              $: 0
                                                            })
                                         });
                    var a = sts;
                    return ((W$.List$).append)(a, b);
                  });
                  var x_1 = "removeIcon";
                  var x = new W$.$List({
                                         $: 1,
                                         $0: ((W$.Attr).NewAttr)("class", x_1),
                                         $1: new W$.$List({
                                                            $: 0
                                                          })
                                       });
                  var body = x;
                  var name = "div";
                  var x_2 = new W$.$List({
                                           $: 0
                                         });
                  var body_1 = x_2;
                  var name_1 = "div";
                  var remBtn =
                      ((W$.Html).append)(
                      ((W$.Html).Tag)(name, body),
                      new W$.$List({
                                     $: 1,
                                     $0: ((W$.Html).Tag)(name_1, body_1),
                                     $1: new W$.$List({
                                                        $: 0
                                                      })
                                   }));
                  var pan =
                      ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).InTable)(
                      new W$.$List({
                                     $: 1,
                                     $0:
                                     new W$.$List({
                                                    $: 1,
                                                    $0: (form.get_Element)(),
                                                    $1:
                                                    new W$.$List({
                                                                   $: 1,
                                                                   $0: remBtn,
                                                                   $1:
                                                                   new W$.$List({
                                                                                  $:
                                                                                  0
                                                                                })
                                                                 })
                                                  }),
                                     $1: new W$.$List({
                                                        $: 0
                                                      })
                                   }));
                  var f =
                      function (_arg3)
                      {
                        return function (_arg2)
                               {
                                 (updEv.Trigger)(
                                 function (sts)
                                 {
                                   var predicate =
                                       function (_1)
                                       {
                                         var tupledArg = arguments.length > 1 ?
                                                         arguments :
                                                         _1;
                                         var _arg1 = tupledArg[0];
                                         var sid = tupledArg[1];
                                         return sid !== id;
                                       };
                                   return (function (list)
                                           {
                                             var l = list;
                                             var p = predicate;
                                             return ((W$.Seq$).toList)(
                                                    ((W$.Seq$).filter)(p, l));
                                           })(sts);
                                 });
                                 var _this = pan;
                                 var this_1 = _this;
                                 return void
                                        ((jQuery((this_1.get_Dom)())).remove)();
                               };
                      };
                  (function (t)
                   {
                     var t_1 = t;
                     var f_1 = f;
                     return (((W$.Html).Events).On)("click", f_1, t_1);
                   })(remBtn);
                  return pan;
                };
            var x_3 = new W$.$List({
                                     $: 0
                                   });
            var body_2 = x_3;
            var name_2 = "div";
            var panel = ((W$.Html).Tag)(name_2, body_2);
            var x_5 = "addIcon";
            var x_4 = new W$.$List({
                                     $: 1,
                                     $0: ((W$.Attr).NewAttr)("class", x_5),
                                     $1: new W$.$List({
                                                        $: 0
                                                      })
                                   });
            var body_3 = x_4;
            var name_3 = "div";
            var x_6 = new W$.$List({
                                     $: 0
                                   });
            var body_4 = x_6;
            var name_4 = "div";
            var f_2 = function (_arg5)
                      {
                        return function (_arg4)
                               {
                                 return (panel.Append)(fRow(undefined));
                               };
                      };
            var addBtn =
                (((W$.Html).Events).op_BarGreaterBang)(
                ((W$.Html).append)(
                ((W$.Html).Tag)(name_3, body_3),
                new W$.$List({
                               $: 1,
                               $0: ((W$.Html).Tag)(name_4, body_4),
                               $1: new W$.$List({
                                                  $: 0
                                                })
                             })),
                function (t)
                {
                  var t_1 = t;
                  var f = f_2;
                  return (((W$.Html).Events).On)("click", f, t_1);
                });
            (panel.Append)(fRow(undefined));
            var xBody =
                ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).InTable)(
                new W$.$List({
                               $: 1,
                               $0: new W$.$List({
                                                  $: 1,
                                                  $0: panel,
                                                  $1: new W$.$List({
                                                                     $: 0
                                                                   })
                                                }),
                               $1:
                               new W$.$List({
                                              $: 1,
                                              $0:
                                              new W$.$List({
                                                             $: 1,
                                                             $0: addBtn,
                                                             $1:
                                                             new W$.$List({
                                                                            $: 0
                                                                          })
                                                           }),
                                              $1: new W$.$List({
                                                                 $: 0
                                                               })
                                            })
                             }));
            var reset = function (unitVar0_1)
                        {
                          (updEv.Trigger)(function (_arg6)
                                          {
                                            return new W$.$List({
                                                                  $: 0
                                                                });
                                          });
                          var _this = panel;
                          var this_1 = _this;
                          void ((jQuery((this_1.get_Dom)())).empty)();
                          return (panel.Append)(fRow(undefined));
                        };
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   new W$.$List({
                                  $: 1,
                                  $0: [{
                                         $: 0
                                       }, xBody],
                                  $1: new W$.$List({
                                                     $: 0
                                                   })
                                }), state, reset);
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Update =
function (init, updEv)
{
  var currVal = [init];
  var mapping = function (f)
                {
                  var newVal = f(currVal[0]);
                  currVal[0] = newVal;
                  return newVal;
                };
  return (function (event)
          {
            return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Init)(
                   init, event);
          })((function (sourceEvent)
              {
                return ((W$.Event$).map)(mapping, sourceEvent);
              })(updEv));
};

(((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Delay =
function (formlet)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var form = (formlet.BuildForm)(undefined);
            var init ={
                        $: 1,
                        $0: new W$.$List({
                                           $: 0
                                         })
                      };
            var state =
                (function (event)
                 {
                   return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Init)(
                          init, event);
                 })(
                ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Changes)(
                (form.get_State)()));
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   (form.get_Body)(), state, (form.get_Reset)());
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Formlet$).BindWith3 =
function (hF, f1, f2, f3, dp)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var form1 = (f1.BuildForm)(undefined);
            var form2 = (f2.BuildForm)(undefined);
            var form3 = (f3.BuildForm)(undefined);
            var state =
                ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).op_LessMultiplyMultiplyMultiplyGreater)(
                ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).op_LessMultiplyMultiplyMultiplyGreater)(
                ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).op_LessMultiplyMultiplyMultiplyGreater)(
                ((((IntelliFactory$.WebSharper$).Formlet$).FormState$).Yield)(
                function (s1)
                {
                  return function (s2)
                         {
                           return function (s3)
                                  {
                                    return [s1, s2, s3];
                                  };
                         };
                }), (form1.get_State)()), (form2.get_State)()),
                (form3.get_State)());
            var form4 =
                ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).op_BarGreaterGreaterEquals)(
                state, function (_1)
                       {
                         var tupledArg = arguments.length > 1 ?
                                         arguments :
                                         _1;
                         var s1 = tupledArg[0];
                         var s2 = tupledArg[1];
                         var s3 = tupledArg[2];
                         return ((((dp(s1))(s2))(s3)).BuildForm)(undefined);
                       });
            var hBody =
                (((hF((form1.get_Element)()))((form2.get_Element)()))(
                 (form3.get_Element)()))((form4.get_Element)());
            var reset = function (unitVar0_1)
                        {
                          ((form1.get_Reset)())(undefined);
                          ((form2.get_Reset)())(undefined);
                          ((form3.get_Reset)())(undefined);
                          return ((form4.get_Reset)())(undefined);
                        };
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   new W$.$List({
                                  $: 1,
                                  $0: [{
                                         $: 0
                                       }, hBody],
                                  $1: new W$.$List({
                                                     $: 0
                                                   })
                                }), (form4.get_State)(), reset);
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Formlet$).op_LessMultiplyMultiplyMultiplyGreater =
function (f, fs)
{
  return ((((IntelliFactory$.WebSharper$).Formlet$).FormState$).Apply)(f, fs);
};

(((IntelliFactory$.WebSharper$).Formlet$).Formlet$).op_BarGreaterGreaterEquals =
function (s, f)
{
  return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Dependent)(s, f);
};

(((IntelliFactory$.WebSharper$).Formlet$).Formlet$).BindWith2 =
function (hF, f1, f2, dp)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var form1 = (f1.BuildForm)(undefined);
            var form2 = (f2.BuildForm)(undefined);
            var state =
                ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).op_LessMultiplyMultiplyMultiplyGreater)(
                ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).op_LessMultiplyMultiplyMultiplyGreater)(
                ((((IntelliFactory$.WebSharper$).Formlet$).FormState$).Yield)(
                function (s1)
                {
                  return function (s2)
                         {
                           return [s1, s2];
                         };
                }), (form1.get_State)()), (form2.get_State)());
            var form3 =
                ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).op_BarGreaterGreaterEquals)(
                state, function (_1)
                       {
                         var tupledArg = arguments.length > 1 ?
                                         arguments :
                                         _1;
                         var s1 = tupledArg[0];
                         var s2 = tupledArg[1];
                         return (((dp(s1))(s2)).BuildForm)(undefined);
                       });
            var hBody =
                ((hF((form1.get_Element)()))((form2.get_Element)()))(
                (form3.get_Element)());
            var reset = function (unitVar0_1)
                        {
                          ((form1.get_Reset)())(undefined);
                          ((form2.get_Reset)())(undefined);
                          return ((form3.get_Reset)())(undefined);
                        };
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   new W$.$List({
                                  $: 1,
                                  $0: [{
                                         $: 0
                                       }, hBody],
                                  $1: new W$.$List({
                                                     $: 0
                                                   })
                                }), (form3.get_State)(), reset);
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Formlet$).BindWith =
function (hF, flet, f)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var form1 = (flet.BuildForm)(undefined);
            var form2 =
                ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).op_BarGreaterGreaterEquals)(
                (form1.get_State)(), function (v)
                                     {
                                       return ((f(v)).BuildForm)(undefined);
                                     });
            var hBody = (hF((form1.get_Element)()))((form2.get_Element)());
            var reset = function (unitVar0_1)
                        {
                          ((form1.get_Reset)())(undefined);
                          return ((form2.get_Reset)())(undefined);
                        };
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   new W$.$List({
                                  $: 1,
                                  $0: [{
                                         $: 0
                                       }, hBody],
                                  $1: new W$.$List({
                                                     $: 0
                                                   })
                                }), (form2.get_State)(), reset);
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Run =
function (f, formlet)
{
  var form = (formlet.BuildForm)(undefined);
  var f_1 = function (res)
            {
              if (res.$ == 1)
              {}
              else
              {
                var v = res.$0;
                f(v);
              }
            };
  (function (b)
   {
     return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Iterate)(
            f_1, b);
   })((form.get_State)());
  return (form.get_Element)();
};

(((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Map =
function (f, flet)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var form = (flet.BuildForm)(undefined);
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   (form.get_Body)(),
                   ((((IntelliFactory$.WebSharper$).Formlet$).FormState$).Map)(
                   f, (form.get_State)()), (form.get_Reset)());
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Do =
Delay(
function (unitVar0)
{
  return ((new (((IntelliFactory$.WebSharper$).Formlet$).Formlet$).$FormletBuilder())._ctor)(
         );
});

(((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).$FormletBuilder).prototype)._ctor =
function (unitVar0)
{
  return this;
};

(((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).$FormletBuilder).prototype).Return =
function (x)
{
  var c = this;
  return ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Return)(x);
};

(((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).$FormletBuilder).prototype).Bind =
function (form, f)
{
  var c = this;
  return ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Bind)(form, f);
};

(((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).$FormletBuilder).prototype).ReturnFrom =
function (form)
{
  var c = this;
  return form;
};

if (typeof ((IntelliFactory$.WebSharper$).Formlet$).Flowlet$ == "undefined")
{
  ((IntelliFactory$.WebSharper$).Formlet$).Flowlet$ = {};
}

(((IntelliFactory$.WebSharper$).Formlet$).Flowlet$).$FlowletBuilder =
function ()
{};

(((IntelliFactory$.WebSharper$).Formlet$).Flowlet$).op_GreaterGreaterEquals =
function (flet, f)
{
  return ((((IntelliFactory$.WebSharper$).Formlet$).Flowlet$).Bind)(flet, f);
};

(((IntelliFactory$.WebSharper$).Formlet$).Flowlet$).Bind =
function (formlet, f)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var form = (formlet.BuildForm)(undefined);
            var formBody = (form.get_Element)();
            var x = new W$.$List({
                                   $: 1,
                                   $0: formBody,
                                   $1: new W$.$List({
                                                      $: 0
                                                    })
                                 });
            var body = x;
            var name = "div";
            var pan = ((W$.Html).Tag)(name, body);
            var ev = ((new W$.$Event())._ctor)();
            var state =
                (function (builder_)
                 {
                   return (builder_.Bind)(
                          (form.get_State)(),
                          function (_arg7)
                          {
                            var state1 = _arg7;
                            var __1;
                            if (state1.$ == 1)
                            {
                              var fs = state1.$0;
                              __1 =
                              ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Constant)(
                              {
                                $: 1,
                                $0: fs
                              });
                            }
                            else
                            {
                              var res = state1.$0;
                              var form2 = ((f(res)).BuildForm)(undefined);
                              var el = (form2.get_Element)();
                              var _this = pan;
                              var this_1 = _this;
                              void ((jQuery((this_1.get_Dom)())).empty)();
                              (pan.Append)(el);
                              __1 = (form2.get_State)();
                            }
                            return (builder_.Bind)(
                                   __1, function (_arg6)
                                        {
                                          var state2 = _arg6;
                                          return (builder_.Return)(state2);
                                        });
                          });
                 })(
                (((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Do).get)(
                ));
            var reset =
                function (unitVar0_1)
                {
                  ((form.get_Reset)())(undefined);
                  var _this = pan;
                  var this_1 = _this;
                  void ((jQuery((this_1.get_Dom)())).empty)();
                  var formlet_1 =
                      ((((IntelliFactory$.WebSharper$).Formlet$).Flowlet$).Bind)(
                      formlet, f);
                  return (function (arg00)
                          {
                            return (pan.Append)(arg00);
                          })((((formlet_1.BuildForm)(undefined)).get_Element)());
                };
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   new W$.$List({
                                  $: 1,
                                  $0: [{
                                         $: 0
                                       }, pan],
                                  $1: new W$.$List({
                                                     $: 0
                                                   })
                                }), state, reset);
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Flowlet$).Do =
Delay(
function (unitVar0)
{
  return ((new (((IntelliFactory$.WebSharper$).Formlet$).Flowlet$).$FlowletBuilder())._ctor)(
         );
});

(((((IntelliFactory$.WebSharper$).Formlet$).Flowlet$).$FlowletBuilder).prototype)._ctor =
function (unitVar0)
{
  return this;
};

(((((IntelliFactory$.WebSharper$).Formlet$).Flowlet$).$FlowletBuilder).prototype).Return =
function (x)
{
  var c = this;
  return ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Return)(x);
};

(((((IntelliFactory$.WebSharper$).Formlet$).Flowlet$).$FlowletBuilder).prototype).Bind =
function (form, f)
{
  var c = this;
  return ((((IntelliFactory$.WebSharper$).Formlet$).Flowlet$).Bind)(form, f);
};

(((((IntelliFactory$.WebSharper$).Formlet$).Flowlet$).$FlowletBuilder).prototype).ReturnFrom =
function (form)
{
  var c = this;
  return form;
};

if (typeof ((IntelliFactory$.WebSharper$).Formlet$).Operators$ == "undefined")
{
  ((IntelliFactory$.WebSharper$).Formlet$).Operators$ = {};
}

(((IntelliFactory$.WebSharper$).Formlet$).Operators$).op_LessMultiplyGreater =
function (f, x)
{
  return ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Apply)(f, x);
};

(((IntelliFactory$.WebSharper$).Formlet$).Operators$).op_GreaterGreaterEquals =
function (formlet, fn)
{
  return ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Bind)(formlet, fn);
};

(((IntelliFactory$.WebSharper$).Formlet$).Operators$).formlet =
Delay(function (unitVar0)
      {
        return (((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Do).get)();
      });

(((IntelliFactory$.WebSharper$).Formlet$).Operators$).flowlet =
Delay(function (unitVar0)
      {
        return (((((IntelliFactory$.WebSharper$).Formlet$).Flowlet$).Do).get)();
      });

if (typeof ((IntelliFactory$.WebSharper$).Formlet$).Validator$ == "undefined")
{
  ((IntelliFactory$.WebSharper$).Formlet$).Validator$ = {};
}

(((IntelliFactory$.WebSharper$).Formlet$).Validator$).IsNotEqual =
function (value, msg)
{
  var f = function (i)
          {
            return !(W$.Equals)(i, value);
          };
  return function (flet)
         {
           return ((((IntelliFactory$.WebSharper$).Formlet$).Validator$).Is)(
                  f, msg, flet);
         };
};

(((IntelliFactory$.WebSharper$).Formlet$).Validator$).Is =
function (f, errMsg, flet)
{
  var f_1 = function (res)
            {
              var __1;
              if (res.$ == 1)
              {
                var fs = res;
                __1 = fs;
              }
              else
              {
                var res_1 = res.$0;
                __1 = (f(res_1) ?
                       {
                         $: 0,
                         $0: res_1
                       }:
                       {
                         $: 1,
                         $0: new W$.$List({
                                            $: 1,
                                            $0: errMsg,
                                            $1: new W$.$List({
                                                               $: 0
                                                             })
                                          })
                       });
              }
              return __1;
            };
  return (function (flet_1)
          {
            return ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).MapResult)(
                   f_1, flet_1);
          })(flet);
};

(((IntelliFactory$.WebSharper$).Formlet$).Validator$).IsEqual =
function (value, msg)
{
  var f = function (i)
          {
            return (W$.Equals)(i, value);
          };
  return function (flet)
         {
           return ((((IntelliFactory$.WebSharper$).Formlet$).Validator$).Is)(
                  f, msg, flet);
         };
};

(((IntelliFactory$.WebSharper$).Formlet$).Validator$).IsLessThan =
function (max, msg)
{
  var f = function (i)
          {
            return i < max;
          };
  return function (flet)
         {
           return ((((IntelliFactory$.WebSharper$).Formlet$).Validator$).Is)(
                  f, msg, flet);
         };
};

(((IntelliFactory$.WebSharper$).Formlet$).Validator$).IsGreaterThan =
function (min, msg)
{
  var f = function (i)
          {
            return i > min;
          };
  return function (flet)
         {
           return ((((IntelliFactory$.WebSharper$).Formlet$).Validator$).Is)(
                  f, msg, flet);
         };
};

(((IntelliFactory$.WebSharper$).Formlet$).Validator$).IsTrue =
function (msg)
{
  var f = function (x)
          {
            return x;
          };
  return function (flet)
         {
           return ((((IntelliFactory$.WebSharper$).Formlet$).Validator$).Is)(
                  f, msg, flet);
         };
};

(((IntelliFactory$.WebSharper$).Formlet$).Validator$).IsInt =
function (msg)
{
  return ((((IntelliFactory$.WebSharper$).Formlet$).Validator$).IsRegexMatch)(
         "^-?\\d+$", msg);
};

(((IntelliFactory$.WebSharper$).Formlet$).Validator$).IsRegexMatch =
function (regex, msg)
{
  var f = function (text)
          {
            return (text.match)(new RegExp(regex));
          };
  return function (flet)
         {
           return ((((IntelliFactory$.WebSharper$).Formlet$).Validator$).Is)(
                  f, msg, flet);
         };
};

(((IntelliFactory$.WebSharper$).Formlet$).Validator$).IsEmail =
function (msg)
{
  var regex =
      "^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$";
  return ((((IntelliFactory$.WebSharper$).Formlet$).Validator$).IsRegexMatch)(
         regex, msg);
};

(((IntelliFactory$.WebSharper$).Formlet$).Validator$).IsNotEmpty =
function (msg)
{
  var f = function (s)
          {
            return s !== "";
          };
  return function (flet)
         {
           return ((((IntelliFactory$.WebSharper$).Formlet$).Validator$).Is)(
                  f, msg, flet);
         };
};

if (typeof ((IntelliFactory$.WebSharper$).Formlet$).Enhance$ == "undefined")
{
  ((IntelliFactory$.WebSharper$).Formlet$).Enhance$ = {};
}

(((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithRowConfiguration =
function (rc, formlet)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var form = (formlet.BuildForm)(undefined);
            var padding = rc.Padding;
            var px = function (n)
                     {
                       var x = n;
                       return (x.toString)() + "px";
                     };
            var rowTrans =
                function (rowIx)
                {
                  return function (row)
                         {
                           var d = "";
                           var f =
                               function (rowColor)
                               {
                                 return ("background-color:" +
                                         ((rowColor(rowIx)).Show)()) + ";";
                               };
                           var bgColor =
                               (function (o)
                                {
                                  return ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).Maybe)(
                                         d, f, o);
                                })(rc.Color);
                           var d_1 = "";
                           var f_1 = function (style_1)
                                     {
                                       return style_1(rowIx);
                                     };
                           var style =
                               (function (o)
                                {
                                  return ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).Maybe)(
                                         d_1, f_1, o);
                                })(rc.Style);
                           (row.set_Item)("style", bgColor + style);
                           var d_2;
                           var f_2 =
                               function (rowClass)
                               {
                                 var cls = rowClass(rowIx);
                                 var _this = row;
                                 var this_1 = _this;
                                 return void
                                        ((jQuery((this_1.get_Dom)())).addClass)(
                                        cls);
                               };
                           (function (o)
                            {
                              return ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).Maybe)(
                                     d_2, f_2, o);
                            })(rc.Class);
                           return row;
                         };
                };
            var mapping =
                function (cols)
                {
                  var l = cols;
                  var colsLen = ((W$.Seq$).length)(l);
                  var mapping_1 =
                      function (ix)
                      {
                        return function (_1)
                               {
                                 var tupledArg = arguments.length > 1 ?
                                                 arguments :
                                                 _1;
                                 var elem = tupledArg[0];
                                 var valign = tupledArg[1];
                                 var x = new W$.$List({
                                                        $: 1,
                                                        $0: elem,
                                                        $1: new W$.$List({
                                                                           $: 0
                                                                         })
                                                      });
                                 var body_1 = x;
                                 var name = "div";
                                 var panel = ((W$.Html).Tag)(name, body_1);
                                 if (ix === 0)
                                 {
                                   var d;
                                   var f =
                                       function (n)
                                       {
                                         var prop = px(n);
                                         var name_1 = "padding-left";
                                         var _this = panel;
                                         var this_1 = _this;
                                         return void
                                                ((jQuery((this_1.get_Dom)())).css)(
                                                name_1, prop);
                                       };
                                   (function (o)
                                    {
                                      return ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).Maybe)(
                                             d, f, o);
                                    })(padding.Left);
                                 }
                                 var pl;
                                 if (ix === colsLen - 1)
                                 {
                                   var d_1;
                                   var f_1 =
                                       function (n)
                                       {
                                         var prop = px(n);
                                         var name_1 = "padding-right";
                                         var _this = panel;
                                         var this_1 = _this;
                                         return void
                                                ((jQuery((this_1.get_Dom)())).css)(
                                                name_1, prop);
                                       };
                                   (function (o)
                                    {
                                      return ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).Maybe)(
                                             d_1, f_1, o);
                                    })(padding.Right);
                                 }
                                 var pr;
                                 var d_2;
                                 var f_2 =
                                     function (n)
                                     {
                                       var prop = px(n);
                                       var name_1 = "padding-top";
                                       var _this = panel;
                                       var this_1 = _this;
                                       return void
                                              ((jQuery((this_1.get_Dom)())).css)(
                                              name_1, prop);
                                     };
                                 var pt =
                                     (function (o)
                                      {
                                        return ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).Maybe)(
                                               d_2, f_2, o);
                                      })(padding.Top);
                                 var d_3;
                                 var f_3 =
                                     function (n)
                                     {
                                       var prop = px(n);
                                       var name_1 = "padding-bottom";
                                       var _this = panel;
                                       var this_1 = _this;
                                       return void
                                              ((jQuery((this_1.get_Dom)())).css)(
                                              name_1, prop);
                                     };
                                 var pb =
                                     (function (o)
                                      {
                                        return ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).Maybe)(
                                               d_3, f_3, o);
                                      })(padding.Top);
                                 return [panel, valign];
                               };
                      };
                  return (function (list)
                          {
                            return ((W$.List$).mapi)(mapping_1, list);
                          })(cols);
                };
            var body =
                (function (rows)
                 {
                   return ((((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).VerticalTableWith)(
                          rowTrans, rows);
                 })(
                (function (list)
                 {
                   return ((W$.List$).map)(mapping, list);
                 })(
                ((((((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).ToRowElements).get)(
                 ))((form.get_Body)())));
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   new W$.$List({
                                  $: 1,
                                  $0: [{
                                         $: 0
                                       }, body],
                                  $1: new W$.$List({
                                                     $: 0
                                                   })
                                }), (form.get_State)(), (form.get_Reset)());
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithResetButton =
function (formlet)
{
  var inputRecord =
      (((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).FormButtonConfiguration$).get_Default)(
      );
  return ((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithCustomResetButton)(
         {
           Label:{
                   $: 1,
                   $0: "Reset"
                 },
           Style: inputRecord.Style
         }, formlet);
};

(((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithCustomResetButton =
function (resetConf, formlet)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var form = (formlet.BuildForm)(undefined);
            var label =
                ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).Maybe)(
                "Reset", function (x)
                         {
                           return x;
                         }, resetConf.Label);
            var x_2 = "button";
            var x_3 = "resetButton";
            var x_4 = label;
            var x_1 =
                new W$.$List({
                               $: 1,
                               $0: ((W$.Attr).NewAttr)("type", x_2),
                               $1:
                               new W$.$List({
                                              $: 1,
                                              $0:
                                              ((W$.Attr).NewAttr)("class", x_3),
                                              $1:
                                              new W$.$List({
                                                             $: 1,
                                                             $0:
                                                             ((W$.Attr).NewAttr)(
                                                             "value", x_4),
                                                             $1:
                                                             new W$.$List({
                                                                            $: 0
                                                                          })
                                                           })
                                            })
                             });
            var body = x_1;
            var name = "input";
            var f = function (_arg2)
                    {
                      return function (_arg1)
                             {
                               return ((form.get_Reset)())(undefined);
                             };
                    };
            var reset_1 =
                (((W$.Html).Events).op_BarGreaterBang)(
                ((W$.Html).Tag)(name, body),
                function (t)
                {
                  var t_1 = t;
                  var f_1 = f;
                  return (((W$.Html).Events).On)("click", f_1, t_1);
                });
            var matchValue = resetConf.Style;
            if (matchValue.$ == 1)
            {
              var style = matchValue.$0;
              (reset_1.set_Item)("style", style);
            }
            var reset = reset_1;
            var b = new W$.$List({
                                   $: 1,
                                   $0: [{
                                          $: 0
                                        }, reset],
                                   $1: new W$.$List({
                                                      $: 0
                                                    })
                                 });
            var a = (form.get_Body)();
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   ((W$.List$).append)(a, b), (form.get_State)(),
                   (form.get_Reset)());
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithSubmitButton =
function (formlet)
{
  var inputRecord =
      (((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).FormButtonConfiguration$).get_Default)(
      );
  return ((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithCustomSubmitButton)(
         {
           Label:{
                   $: 1,
                   $0: "Submit"
                 },
           Style: inputRecord.Style
         }, formlet);
};

(((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithCustomSubmitButton =
function (submitConf, formlet)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var form = (formlet.BuildForm)(undefined);
            var submitLabel =
                ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).Maybe)(
                "Submit", function (x)
                          {
                            return x;
                          }, submitConf.Label);
            var submitEv = ((new W$.$Event())._ctor)();
            var disabled = [true];
            var x_2 = "button";
            var x_3 = "submitButton";
            var x_4 = submitLabel;
            var x_1 =
                new W$.$List({
                               $: 1,
                               $0: ((W$.Attr).NewAttr)("type", x_2),
                               $1:
                               new W$.$List({
                                              $: 1,
                                              $0:
                                              ((W$.Attr).NewAttr)("class", x_3),
                                              $1:
                                              new W$.$List({
                                                             $: 1,
                                                             $0:
                                                             ((W$.Attr).NewAttr)(
                                                             "value", x_4),
                                                             $1:
                                                             new W$.$List({
                                                                            $: 0
                                                                          })
                                                           })
                                            })
                             });
            var body = x_1;
            var name = "input";
            var f = function (submit_1)
                    {
                      return function (_arg1)
                             {
                               if (!disabled[0])
                               {
                                 (submitEv.Trigger)(undefined);
                               }
                             };
                    };
            var submit =
                (((W$.Html).Events).op_BarGreaterBang)(
                ((W$.Html).Tag)(name, body),
                function (t)
                {
                  var t_1 = t;
                  var f_1 = f;
                  return (((W$.Html).Events).On)("click", f_1, t_1);
                });
            var matchValue = submitConf.Style;
            if (matchValue.$ == 1)
            {
              var style = matchValue.$0;
              (submit.set_Item)("style", style);
            }
            var f_2 =
                function (res)
                {
                  if (res.$ == 1)
                  {
                    var cls = "disabledButton";
                    var _this = submit;
                    var this_1 = _this;
                    void ((jQuery((this_1.get_Dom)())).addClass)(cls);
                    disabled[0] = true;
                  }
                  else
                  {
                    var x = res.$0;
                    var cls_1 = "disabledButton";
                    var this_2 = submit;
                    var this_3 = this_2;
                    void ((jQuery((this_3.get_Dom)())).removeClass)(cls_1);
                    disabled[0] = false;
                  }
                };
            (function (b)
             {
               return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Iterate)(
                      f_2, b);
             })((form.get_State)());
            var init ={
                        $: 1,
                        $0: new W$.$List({
                                           $: 0
                                         })
                      };
            var this_4 = submitEv;
            var ev = this_4;
            var state =
                (function (event)
                 {
                   return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Init)(
                          init, event);
                 })(
                (function (b)
                 {
                   return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Snapshot)(
                          ev, b);
                 })((form.get_State)()));
            var b_1 = new W$.$List({
                                     $: 1,
                                     $0: [{
                                            $: 0
                                          }, submit],
                                     $1: new W$.$List({
                                                        $: 0
                                                      })
                                   });
            var a = (form.get_Body)();
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   ((W$.List$).append)(a, b_1), state, (form.get_Reset)());
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithSubmitAndResetButtons =
function (formlet)
{
  var inputRecord =
      (((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).FormButtonConfiguration$).get_Default)(
      );
  var inputRecord_1 =
      (((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).FormButtonConfiguration$).get_Default)(
      );
  return ((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithCustomSubmitAndResetButtons)(
         {
           Label:{
                   $: 1,
                   $0: "Submit"
                 },
           Style: inputRecord.Style
         },{
             Label:{
                     $: 1,
                     $0: "Reset"
                   },
             Style: inputRecord_1.Style
           }, formlet);
};

(((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithCustomSubmitAndResetButtons =
function (submitConf, resetConf, formlet)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var form = (formlet.BuildForm)(undefined);
            var disabled = [true];
            var submitEv = ((new W$.$Event())._ctor)();
            var label =
                ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).Maybe)(
                "Submit", function (x)
                          {
                            return x;
                          }, submitConf.Label);
            var x_2 = "button";
            var x_3 = "submitButton";
            var x_4 = label;
            var x_1 =
                new W$.$List({
                               $: 1,
                               $0: ((W$.Attr).NewAttr)("type", x_2),
                               $1:
                               new W$.$List({
                                              $: 1,
                                              $0:
                                              ((W$.Attr).NewAttr)("class", x_3),
                                              $1:
                                              new W$.$List({
                                                             $: 1,
                                                             $0:
                                                             ((W$.Attr).NewAttr)(
                                                             "value", x_4),
                                                             $1:
                                                             new W$.$List({
                                                                            $: 0
                                                                          })
                                                           })
                                            })
                             });
            var body = x_1;
            var name = "input";
            var f = function (_arg2)
                    {
                      return function (_arg1)
                             {
                               if (!disabled[0])
                               {
                                 (submitEv.Trigger)(undefined);
                               }
                             };
                    };
            var submit_1 =
                (((W$.Html).Events).op_BarGreaterBang)(
                ((W$.Html).Tag)(name, body),
                function (t)
                {
                  var t_1 = t;
                  var f_1 = f;
                  return (((W$.Html).Events).On)("click", f_1, t_1);
                });
            var matchValue = submitConf.Style;
            if (matchValue.$ == 1)
            {
              var style = matchValue.$0;
              (submit_1.set_Item)("style", style);
            }
            var submit = submit_1;
            var label_1 =
                ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).Maybe)(
                "Reset", function (x)
                         {
                           return x;
                         }, resetConf.Label);
            var x_6 = "button";
            var x_7 = "resetButton";
            var x_8 = label_1;
            var x_5 =
                new W$.$List({
                               $: 1,
                               $0: ((W$.Attr).NewAttr)("type", x_6),
                               $1:
                               new W$.$List({
                                              $: 1,
                                              $0:
                                              ((W$.Attr).NewAttr)("class", x_7),
                                              $1:
                                              new W$.$List({
                                                             $: 1,
                                                             $0:
                                                             ((W$.Attr).NewAttr)(
                                                             "value", x_8),
                                                             $1:
                                                             new W$.$List({
                                                                            $: 0
                                                                          })
                                                           })
                                            })
                             });
            var body_1 = x_5;
            var name_1 = "input";
            var f_2 = function (_arg4)
                      {
                        return function (_arg3)
                               {
                                 return ((form.get_Reset)())(undefined);
                               };
                      };
            var reset_1 =
                (((W$.Html).Events).op_BarGreaterBang)(
                ((W$.Html).Tag)(name_1, body_1),
                function (t)
                {
                  var t_1 = t;
                  var f_1 = f_2;
                  return (((W$.Html).Events).On)("click", f_1, t_1);
                });
            var matchValue_1 = resetConf.Style;
            if (matchValue_1.$ == 1)
            {
              var style_1 = matchValue_1.$0;
              (reset_1.set_Item)("style", style_1);
            }
            var reset = reset_1;
            var buttons =
                ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).InTable)(
                new W$.$List({
                               $: 1,
                               $0:
                               new W$.$List({
                                              $: 1,
                                              $0: submit,
                                              $1:
                                              new W$.$List({
                                                             $: 1,
                                                             $0: reset,
                                                             $1:
                                                             new W$.$List({
                                                                            $: 0
                                                                          })
                                                           })
                                            }),
                               $1: new W$.$List({
                                                  $: 0
                                                })
                             }));
            var f_3 =
                function (res)
                {
                  if (res.$ == 1)
                  {
                    var msg = res.$0;
                    var cls = "disabledButton";
                    var _this = submit;
                    var this_1 = _this;
                    void ((jQuery((this_1.get_Dom)())).addClass)(cls);
                    disabled[0] = true;
                  }
                  else
                  {
                    var x = res.$0;
                    var cls_1 = "disabledButton";
                    var this_2 = submit;
                    var this_3 = this_2;
                    void ((jQuery((this_3.get_Dom)())).removeClass)(cls_1);
                    disabled[0] = false;
                  }
                };
            (function (b)
             {
               return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Iterate)(
                      f_3, b);
             })((form.get_State)());
            var ev = ((new W$.$Event())._ctor)();
            var h =
                function (unitVar0_1)
                {
                  return (ev.Trigger)(
                         (((form.get_State)()).$IBehavior_1_n7022c65334d74452_get_CurrentValue)(
                         ));
                };
            var this_4 = submitEv;
            var event = this_4;
            void
            (event.$IObservable_1_pa29d3c612f3d457_Subscribe)(
            ((W$.Observer$).Simple)(h));
            var h_1 = function (r)
                      {
                        if (r.$ == 1)
                        {
                          var x = r;
                          (ev.Trigger)(x);
                        }
                      };
            var event_1 = (form.get_State)();
            void
            (event_1.$IObservable_1_pa29d3c612f3d457_Subscribe)(
            ((W$.Observer$).Simple)(h_1));
            var matchValue_2 =
                (((form.get_State)()).$IBehavior_1_n7022c65334d74452_get_CurrentValue)(
                );
            var __1;
            if (matchValue_2.$ == 0)
            {
              __1 ={
                     $: 1,
                     $0: new W$.$List({
                                        $: 0
                                      })
                   };
            }
            else
            {
              var res_1 = matchValue_2;
              __1 = res_1;
            }
            var state_1 = __1;
            var this_5 = ev;
            var state =
                ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Init)(
                state_1, this_5);
            var b_1 = new W$.$List({
                                     $: 1,
                                     $0: [{
                                            $: 0
                                          }, buttons],
                                     $1: new W$.$List({
                                                        $: 0
                                                      })
                                   });
            var a = (form.get_Body)();
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   ((W$.List$).append)(a, b_1), state, (form.get_Reset)());
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithFormContainer =
function (formlet)
{
  return ((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithCustomFormContainer)(
         (((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).FormContainerConfiguration$).get_Default)(
         ), formlet);
};

(((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithCustomFormContainer =
function (fc, formlet)
{
  var f =
      function (formEl)
      {
        var d = new W$.$List({
                               $: 0
                             });
        var f_1 = function (descr)
                  {
                    var __1;
                    if (descr.$ == 1)
                    {
                      var genEl = descr.$0;
                      __1 = new W$.$List({
                                           $: 1,
                                           $0: genEl(undefined),
                                           $1: new W$.$List({
                                                              $: 0
                                                            })
                                         });
                    }
                    else
                    {
                      var text = descr.$0;
                      var x = new W$.$List({
                                             $: 1,
                                             $0: ((W$.Html).text)(text),
                                             $1: new W$.$List({
                                                                $: 0
                                                              })
                                           });
                      var body = x;
                      var name = "p";
                      __1 = new W$.$List({
                                           $: 1,
                                           $0: ((W$.Html).Tag)(name, body),
                                           $1: new W$.$List({
                                                              $: 0
                                                            })
                                         });
                    }
                    return __1;
                  };
        var description =
            (function (o)
             {
               return ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).Maybe)(
                      d, f_1, o);
             })(fc.Description);
        var x_2 = "headerPanel";
        var x_1 = new W$.$List({
                                 $: 1,
                                 $0: ((W$.Attr).NewAttr)("class", x_2),
                                 $1: new W$.$List({
                                                    $: 0
                                                  })
                               });
        var body_1 = x_1;
        var name_1 = "div";
        var d_1 =
            ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).InTable)(
            new W$.$List({
                           $: 1,
                           $0:
                           new W$.$List({
                                          $: 1,
                                          $0:
                                          ((W$.Html).append)(
                                          ((W$.Html).Tag)(name_1, body_1),
                                          description),
                                          $1: new W$.$List({
                                                             $: 0
                                                           })
                                        }),
                           $1:
                           new W$.$List({
                                          $: 1,
                                          $0:
                                          new W$.$List({
                                                         $: 1,
                                                         $0: formEl,
                                                         $1: new W$.$List({
                                                                            $: 0
                                                                          })
                                                       }),
                                          $1: new W$.$List({
                                                             $: 0
                                                           })
                                        })
                         }));
        var f_2 =
            function (formElem)
            {
              var __1;
              if (formElem.$ == 1)
              {
                var genElem = formElem.$0;
                __1 = genElem(undefined);
              }
              else
              {
                var text = formElem.$0;
                var x = new W$.$List({
                                       $: 1,
                                       $0: ((W$.Html).text)(text),
                                       $1: new W$.$List({
                                                          $: 0
                                                        })
                                     });
                var body = x;
                var name = "h1";
                __1 = ((W$.Html).Tag)(name, body);
              }
              var hdr = __1;
              var x_4 = "headerPanel";
              var x_3 = new W$.$List({
                                       $: 1,
                                       $0: ((W$.Attr).NewAttr)("class", x_4),
                                       $1: new W$.$List({
                                                          $: 0
                                                        })
                                     });
              var body_2 = x_3;
              var name_2 = "div";
              var header =
                  ((W$.Html).append)(
                  ((W$.Html).Tag)(name_2, body_2),
                  new W$.$List({
                                 $: 1,
                                 $0: hdr,
                                 $1: description
                               }));
              return ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).InTable)(
                     new W$.$List({
                                    $: 1,
                                    $0: new W$.$List({
                                                       $: 1,
                                                       $0: header,
                                                       $1: new W$.$List({
                                                                          $: 0
                                                                        })
                                                     }),
                                    $1:
                                    new W$.$List({
                                                   $: 1,
                                                   $0:
                                                   new W$.$List({
                                                                  $: 1,
                                                                  $0: formEl,
                                                                  $1:
                                                                  new W$.$List({
                                                                                 $:
                                                                                 0
                                                                               })
                                                                }),
                                                   $1: new W$.$List({
                                                                      $: 0
                                                                    })
                                                 })
                                  }));
            };
        var tb =
            (function (o)
             {
               return ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).Maybe)(
                      d_1, f_2, o);
             })(fc.Header);
        var x_6 = "formlet";
        var x_5 = new W$.$List({
                                 $: 1,
                                 $0: ((W$.Attr).NewAttr)("class", x_6),
                                 $1: new W$.$List({
                                                    $: 0
                                                  })
                               });
        var body_3 = x_5;
        var name_3 = "td";
        var cell =
            ((W$.Html).append)(
            ((W$.Html).Tag)(name_3, body_3),
            new W$.$List({
                           $: 1,
                           $0: tb,
                           $1: new W$.$List({
                                              $: 0
                                            })
                         }));
        var d_2;
        var f_3 =
            function (color)
            {
              return (cell.set_Item)("style", "border-color: " + (color.Show)());
            };
        (function (o)
         {
           return ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).Maybe)(
                  d_2, f_3, o);
         })(fc.BorderColor);
        var action = function (_1)
                     {
                       var tupledArg = arguments.length > 1 ?
                                       arguments :
                                       _1;
                       var name = tupledArg[0];
                       var value = tupledArg[1];
                       if (value.$ == 0)
                       {}
                       else
                       {
                         var v = value.$0;
                         var prop = v;
                         var name_2 = name;
                         var _this = cell;
                         var this_1 = _this;
                         void ((jQuery((this_1.get_Dom)())).css)(name_2, prop);
                       }
                     };
        var f_4 = function (color)
                  {
                    return (color.Show)();
                  };
        var f_5 = function (v)
                  {
                    var x = v;
                    return (x.toString)() + "px";
                  };
        var f_6 = function (v)
                  {
                    var x = v;
                    return (x.toString)() + "px";
                  };
        var f_7 = function (v)
                  {
                    var x = v;
                    return (x.toString)() + "px";
                  };
        var f_8 = function (v)
                  {
                    var x = v;
                    return (x.toString)() + "px";
                  };
        (function (list)
         {
           var l = list;
           var f_9 = action;
           return ((W$.Seq$).iter)(f_9, l);
         })(
        new W$.$List({
                       $: 1,
                       $0:
                       ["background-color",
                        (function (value)
                         {
                           return ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).MapOption)(
                                  f_4, value);
                         })(fc.BackgroundColor)],
                       $1:
                       new W$.$List({
                                      $: 1,
                                      $0:
                                      ["padding-left",
                                       (function (value)
                                        {
                                          return ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).MapOption)(
                                                 f_5, value);
                                        })((fc.Padding).Left)],
                                      $1:
                                      new W$.$List({
                                                     $: 1,
                                                     $0:
                                                     ["padding-right",
                                                      (function (value)
                                                       {
                                                         return ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).MapOption)(
                                                                f_6, value);
                                                       })((fc.Padding).Right)],
                                                     $1:
                                                     new W$.$List({
                                                                    $: 1,
                                                                    $0:
                                                                    ["padding-top",
                                                                     (function (value)
                                                                      {
                                                                        return ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).MapOption)(
                                                                               f_7,
                                                                               value
                                                                               );
                                                                      })(
                                                                     (fc.Padding).Top
                                                                     )],
                                                                    $1:
                                                                    new W$.$List({
                                                                                   $:
                                                                                   1,
                                                                                   $0:
                                                                                   ["padding-bottom",
                                                                                    (function (value)
                                                                                     {
                                                                                       return ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).MapOption)(
                                                                                              f_8,
                                                                                              value
                                                                                              );
                                                                                     })(
                                                                                    (fc.Padding).Bottom
                                                                                    )],
                                                                                   $1:
                                                                                   new W$.$List({
                                                                                                  $:
                                                                                                  0
                                                                                                })
                                                                                 })
                                                                  })
                                                   })
                                    })
                     }));
        var matchValue = fc.Style;
        if (matchValue.$ == 0)
        {}
        else
        {
          var style = matchValue.$0;
          var style_1 = style;
          var this_2 = cell;
          var this_3 = this_2;
          void ((jQuery((this_3.get_Dom)())).attr)("style", style_1);
        }
        var matchValue_1 = fc.CssClass;
        if (matchValue_1.$ == 0)
        {}
        else
        {
          var cls = matchValue_1.$0;
          var cls_1 = cls;
          var this_4 = cell;
          var this_5 = this_4;
          void ((jQuery((this_5.get_Dom)())).addClass)(cls_1);
        }
        var x_9 = new W$.$List({
                                 $: 1,
                                 $0: cell,
                                 $1: new W$.$List({
                                                    $: 0
                                                  })
                               });
        var body_4 = x_9;
        var name_4 = "tr";
        var x_8 = new W$.$List({
                                 $: 1,
                                 $0: ((W$.Html).Tag)(name_4, body_4),
                                 $1: new W$.$List({
                                                    $: 0
                                                  })
                               });
        var body_5 = x_8;
        var name_5 = "tbody";
        var x_7 = new W$.$List({
                                 $: 1,
                                 $0: ((W$.Html).Tag)(name_5, body_5),
                                 $1: new W$.$List({
                                                    $: 0
                                                  })
                               });
        var body_6 = x_7;
        var name_6 = "table";
        return ((W$.Html).Tag)(name_6, body_6);
      };
  return (function (flet)
          {
            return ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).MapElement)(
                   f, flet);
          })(formlet);
};

(((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithErrorSummary =
function (label, flet)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var form = (flet.BuildForm)(undefined);
            var x_1 = "errorPanel";
            var x = new W$.$List({
                                   $: 1,
                                   $0: ((W$.Attr).NewAttr)("class", x_1),
                                   $1: new W$.$List({
                                                      $: 0
                                                    })
                                 });
            var body = x;
            var name = "div";
            var errPan = ((W$.Html).Tag)(name, body);
            var b = new W$.$List({
                                   $: 1,
                                   $0: [{
                                          $: 0
                                        }, errPan],
                                   $1: new W$.$List({
                                                      $: 0
                                                    })
                                 });
            var a = (form.get_Body)();
            var body_1 = ((W$.List$).append)(a, b);
            var f =
                function (res)
                {
                  if (res.$ == 1)
                  {
                    var fs = res.$0;
                    var x_3 = new W$.$List({
                                             $: 1,
                                             $0: ((W$.Html).text)(label),
                                             $1: new W$.$List({
                                                                $: 0
                                                              })
                                           });
                    var body_2 = x_3;
                    var name_1 = "legend";
                    var x_2 =
                        new W$.$List({
                                       $: 1,
                                       $0: ((W$.Html).Tag)(name_1, body_2),
                                       $1: new W$.$List({
                                                          $: 0
                                                        })
                                     });
                    var body_3 = x_2;
                    var name_2 = "fieldset";
                    var fldSet = ((W$.Html).Tag)(name_2, body_3);
                    var _this = errPan;
                    var this_1 = _this;
                    void ((jQuery((this_1.get_Dom)())).empty)();
                    var mapping =
                        function (s)
                        {
                          var x_4 =
                              new W$.$List({
                                             $: 1,
                                             $0: ((W$.Html).text)(s + " "),
                                             $1: new W$.$List({
                                                                $: 0
                                                              })
                                           });
                          var body_4 = x_4;
                          var name_3 = "li";
                          return ((W$.Html).Tag)(name_3, body_4);
                        };
                    (function (arg00)
                     {
                       return (fldSet.Append)(arg00);
                     })((function (x_4)
                         {
                           var x_5 = x_4;
                           var body_4 = x_5;
                           var name_3 = "ul";
                           return ((W$.Html).Tag)(name_3, body_4);
                         })((function (list)
                             {
                               return ((W$.List$).map)(mapping, list);
                             })(fs)));
                    (errPan.Append)(fldSet);
                  }
                  else
                  {
                    var this_2 = errPan;
                    var this_3 = this_2;
                    void ((jQuery((this_3.get_Dom)())).empty)();
                  }
                };
            (function (value)
             {
               return void value;
             })(
            (function (b_1)
             {
               return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Map)(
                      f, b_1);
             })((form.get_State)()));
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   body_1, (form.get_State)(), (form.get_Reset)());
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithReset =
function (f, flet)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var form = (flet.BuildForm)(undefined);
            var reset = function (unitVar0_1)
                        {
                          f(undefined);
                          return ((form.get_Reset)())(undefined);
                        };
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   (form.get_Body)(), (form.get_State)(), reset);
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithValidationFrame =
function (formlet)
{
  return ((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithCustomValidationFrame)(
         (((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).ValidationFrameConfiguration$).get_Default)(
         ), formlet);
};

(((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithCustomValidationFrame =
function (vc, formlet)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var form = (formlet.BuildForm)(undefined);
            var x = new W$.$List({
                                   $: 1,
                                   $0: (form.get_Element)(),
                                   $1: new W$.$List({
                                                      $: 0
                                                    })
                                 });
            var body = x;
            var name = "div";
            var panel = ((W$.Html).Tag)(name, body);
            var f =
                function (res)
                {
                  if (res.$ == 1)
                  {
                    var msgs = res.$0;
                    var matchValue = vc.ValidClass;
                    if (matchValue.$ == 1)
                    {
                      var cls = matchValue.$0;
                      var cls_1 = cls;
                      var _this = panel;
                      var this_1 = _this;
                      void ((jQuery((this_1.get_Dom)())).removeClass)(cls_1);
                    }
                    var matchValue_1 = vc.ErrorClass;
                    if (matchValue_1.$ == 1)
                    {
                      var cls_2 = matchValue_1.$0;
                      var cls_3 = cls_2;
                      var this_2 = panel;
                      var this_3 = this_2;
                      void ((jQuery((this_3.get_Dom)())).addClass)(cls_3);
                    }
                    var matchValue_2 = vc.ErrorStyle;
                    if (matchValue_2.$ == 1)
                    {
                      var style = matchValue_2.$0;
                      var style_1 = style;
                      var this_4 = panel;
                      var this_5 = this_4;
                      void ((jQuery((this_5.get_Dom)())).attr)("style", style_1);
                    }
                    else
                    {
                      var style_2 = "";
                      var this_6 = panel;
                      var this_7 = this_6;
                      void ((jQuery((this_7.get_Dom)())).attr)("style", style_2);
                    }
                  }
                  else
                  {
                    var matchValue_3 = vc.ErrorClass;
                    if (matchValue_3.$ == 1)
                    {
                      var cls_4 = matchValue_3.$0;
                      var cls_5 = cls_4;
                      var this_8 = panel;
                      var this_9 = this_8;
                      void ((jQuery((this_9.get_Dom)())).removeClass)(cls_5);
                    }
                    var matchValue_4 = vc.ValidClass;
                    if (matchValue_4.$ == 1)
                    {
                      var cls_6 = matchValue_4.$0;
                      var cls_7 = cls_6;
                      var this_10 = panel;
                      var this_11 = this_10;
                      void ((jQuery((this_11.get_Dom)())).addClass)(cls_7);
                    }
                    var matchValue_5 = vc.ValidStyle;
                    if (matchValue_5.$ == 1)
                    {
                      var style_3 = matchValue_5.$0;
                      var style_4 = style_3;
                      var this_12 = panel;
                      var this_13 = this_12;
                      void
                      ((jQuery((this_13.get_Dom)())).attr)("style", style_4);
                    }
                    else
                    {
                      var style_5 = "";
                      var this_14 = panel;
                      var this_15 = this_14;
                      void
                      ((jQuery((this_15.get_Dom)())).attr)("style", style_5);
                    }
                  }
                };
            (function (b)
             {
               return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Iterate)(
                      f, b);
             })((form.get_State)());
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   new W$.$List({
                                  $: 1,
                                  $0: [{
                                         $: 0
                                       }, panel],
                                  $1: new W$.$List({
                                                     $: 0
                                                   })
                                }), (form.get_State)(), (form.get_Reset)());
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithValidationIcon =
function (formlet)
{
  return ((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithCustomValidationIcon)(
         (((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).ValidationIconConfiguration$).get_Default)(
         ), formlet);
};

(((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithCustomValidationIcon =
function (vic, formlet)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var form = (formlet.BuildForm)(undefined);
            var x_1 = new W$.$List({
                                     $: 0
                                   });
            var body = x_1;
            var name = "div";
            var x = new W$.$List({
                                   $: 1,
                                   $0: ((W$.Html).Tag)(name, body),
                                   $1: new W$.$List({
                                                      $: 0
                                                    })
                                 });
            var body_1 = x;
            var name_1 = "div";
            var iconPan = ((W$.Html).Tag)(name_1, body_1);
            var xBody =
                ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).InTable)(
                new W$.$List({
                               $: 1,
                               $0:
                               new W$.$List({
                                              $: 1,
                                              $0: (form.get_Element)(),
                                              $1:
                                              new W$.$List({
                                                             $: 1,
                                                             $0: iconPan,
                                                             $1:
                                                             new W$.$List({
                                                                            $: 0
                                                                          })
                                                           })
                                            }),
                               $1: new W$.$List({
                                                  $: 0
                                                })
                             }));
            var f =
                function (res)
                {
                  if (res.$ == 1)
                  {
                    var msgs = res.$0;
                    var cls = vic.ValidIconClass;
                    var _this = iconPan;
                    var this_1 = _this;
                    void ((jQuery((this_1.get_Dom)())).removeClass)(cls);
                    var cls_1 = vic.ErrorIconClass;
                    var this_2 = iconPan;
                    var this_3 = this_2;
                    void ((jQuery((this_3.get_Dom)())).addClass)(cls_1);
                    var l = msgs;
                    var s = "";
                    var f_1 = function (x_2)
                              {
                                return function (y)
                                       {
                                         return (x_2 + " ") + y;
                                       };
                              };
                    (iconPan.set_Item)("title", ((W$.Seq$).fold)(f_1, s, l));
                  }
                  else
                  {
                    var cls_2 = vic.ErrorIconClass;
                    var this_4 = iconPan;
                    var this_5 = this_4;
                    void ((jQuery((this_5.get_Dom)())).removeClass)(cls_2);
                    var cls_3 = vic.ValidIconClass;
                    var this_6 = iconPan;
                    var this_7 = this_6;
                    void ((jQuery((this_7.get_Dom)())).addClass)(cls_3);
                    (iconPan.set_Item)("title", "");
                  }
                };
            (function (b)
             {
               return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Iterate)(
                      f, b);
             })((form.get_State)());
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   new W$.$List({
                                  $: 1,
                                  $0: [{
                                         $: 0
                                       }, xBody],
                                  $1: new W$.$List({
                                                     $: 0
                                                   })
                                }), (form.get_State)(), (form.get_Reset)());
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithLegend =
function (label, flet)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var form = (flet.BuildForm)(undefined);
            var x_1 = new W$.$List({
                                     $: 1,
                                     $0: ((W$.Html).text)(label),
                                     $1: new W$.$List({
                                                        $: 0
                                                      })
                                   });
            var body = x_1;
            var name = "legend";
            var x = new W$.$List({
                                   $: 1,
                                   $0: ((W$.Html).Tag)(name, body),
                                   $1: new W$.$List({
                                                      $: 1,
                                                      $0: (form.get_Element)(),
                                                      $1: new W$.$List({
                                                                         $: 0
                                                                       })
                                                    })
                                 });
            var body_1 = x;
            var name_1 = "fieldset";
            var xBody = ((W$.Html).Tag)(name_1, body_1);
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   new W$.$List({
                                  $: 1,
                                  $0: [{
                                         $: 0
                                       }, xBody],
                                  $1: new W$.$List({
                                                     $: 0
                                                   })
                                }), (form.get_State)(), (form.get_Reset)());
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithLabelConfiguration =
function (lc, formlet)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var form = (formlet.BuildForm)(undefined);
            var mapping =
                function (_2)
                {
                  var tupledArg = arguments.length > 1 ?
                                  arguments :
                                  _2;
                  var label = tupledArg[0];
                  var el = tupledArg[1];
                  var d ={
                           $: 0
                         };
                  var f = function (_1)
                          {
                            var tupledArg_1 = arguments.length > 1 ?
                                              arguments :
                                              _1;
                            var l = tupledArg_1[0];
                            var _arg1 = tupledArg_1[1];
                            return{
                                    $: 1,
                                    $0: [l, lc]
                                  };
                          };
                  return [(function (o)
                           {
                             return ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).Maybe)(
                                    d, f, o);
                           })(label), el];
                };
            var body = (function (list)
                        {
                          return ((W$.List$).map)(mapping, list);
                        })((form.get_Body)());
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   body, (form.get_State)(), (form.get_Reset)());
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithTextLabel =
function (label, flet)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var form = (flet.BuildForm)(undefined);
            var x = new W$.$List({
                                   $: 1,
                                   $0: ((W$.Html).text)(label),
                                   $1: new W$.$List({
                                                      $: 0
                                                    })
                                 });
            var body_1 = x;
            var name = "label";
            var body =
                new W$.$List({
                               $: 1,
                               $0:
                               [{
                                  $: 1,
                                  $0:
                                  [((W$.Html).Tag)(name, body_1),
                                   ((((IntelliFactory$.WebSharper$).Formlet$).LabelConfiguration$).get_Default)(
                                   )]
                                }, (form.get_Element)()],
                               $1: new W$.$List({
                                                  $: 0
                                                })
                             });
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   body, (form.get_State)(), (form.get_Reset)());
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithLabelAndInfo =
function (label, info, formlet)
{
  var x_1 = info;
  var x_2 = "infoIcon";
  var x =
      new W$.$List({
                     $: 1,
                     $0: ((W$.Attr).NewAttr)("title", x_1),
                     $1: new W$.$List({
                                        $: 1,
                                        $0: ((W$.Attr).NewAttr)("class", x_2),
                                        $1: new W$.$List({
                                                           $: 0
                                                         })
                                      })
                   });
  var body = x;
  var name = "span";
  var iconPan = ((W$.Html).Tag)(name, body);
  var lblTbl =
      function (unitVar0)
      {
        var x_3 = new W$.$List({
                                 $: 1,
                                 $0: ((W$.Html).text)(label),
                                 $1: new W$.$List({
                                                    $: 0
                                                  })
                               });
        var body_1 = x_3;
        var name_1 = "label";
        return ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).InTable)(
               new W$.$List({
                              $: 1,
                              $0:
                              new W$.$List({
                                             $: 1,
                                             $0: ((W$.Html).Tag)(name_1, body_1),
                                             $1:
                                             new W$.$List({
                                                            $: 1,
                                                            $0: iconPan,
                                                            $1:
                                                            new W$.$List({
                                                                           $: 0
                                                                         })
                                                          })
                                           }),
                              $1: new W$.$List({
                                                 $: 0
                                               })
                            }));
      };
  return ((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithLabel)(
         lblTbl, formlet);
};

(((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithLabel =
function (genLabel, flet)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var form = (flet.BuildForm)(undefined);
            var x = new W$.$List({
                                   $: 1,
                                   $0: genLabel(undefined),
                                   $1: new W$.$List({
                                                      $: 0
                                                    })
                                 });
            var body_1 = x;
            var name = "div";
            var body =
                new W$.$List({
                               $: 1,
                               $0:
                               [{
                                  $: 1,
                                  $0:
                                  [((W$.Html).Tag)(name, body_1),
                                   ((((IntelliFactory$.WebSharper$).Formlet$).LabelConfiguration$).get_Default)(
                                   )]
                                }, (form.get_Element)()],
                               $1: new W$.$List({
                                                  $: 0
                                                })
                             });
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   body, (form.get_State)(), (form.get_Reset)());
          }
        };
};

if (typeof
    (((IntelliFactory$.WebSharper$).Formlet$).Enhance$).ValidationIconConfiguration$
    == "undefined")
{
  (((IntelliFactory$.WebSharper$).Formlet$).Enhance$).ValidationIconConfiguration$
  = {};
}

((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).ValidationIconConfiguration$).get_Default =
function (unitVar0)
{
  return{
          ValidIconClass: "validIcon",
          ErrorIconClass: "errorIcon"
        };
};

if (typeof
    (((IntelliFactory$.WebSharper$).Formlet$).Enhance$).ValidationFrameConfiguration$
    == "undefined")
{
  (((IntelliFactory$.WebSharper$).Formlet$).Enhance$).ValidationFrameConfiguration$
  = {};
}

((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).ValidationFrameConfiguration$).get_Default =
function (unitVar0)
{
  return{
          ValidClass:{
                       $: 1,
                       $0: "successFormlet"
                     },
          ValidStyle:{
                       $: 0
                     },
          ErrorClass:{
                       $: 1,
                       $0: "errorFormlet"
                     },
          ErrorStyle:{
                       $: 0
                     }
        };
};

if (typeof
    (((IntelliFactory$.WebSharper$).Formlet$).Enhance$).FormButtonConfiguration$
    == "undefined")
{
  (((IntelliFactory$.WebSharper$).Formlet$).Enhance$).FormButtonConfiguration$ =
  {};
}

((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).FormButtonConfiguration$).get_Default =
function (unitVar0)
{
  return{
          Label:{
                  $: 1,
                  $0: "Button"
                },
          Style:{
                  $: 1,
                  $0: "margin-right: 10px;"
                }
        };
};

if (typeof
    (((IntelliFactory$.WebSharper$).Formlet$).Enhance$).FormContainerConfiguration$
    == "undefined")
{
  (((IntelliFactory$.WebSharper$).Formlet$).Enhance$).FormContainerConfiguration$
  = {};
}

((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).FormContainerConfiguration$).get_Default =
function (unitVar0)
{
  var Description ={
                     $: 0
                   };
  return{
          Header:{
                   $: 0
                 },
          Padding:
          (((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).Padding$).get_Default)(
          ),
          Description: Description,
          BackgroundColor:{
                            $: 0
                          },
          BorderColor:{
                        $: 0
                      },
          CssClass:{
                     $: 0
                   },
          Style:{
                  $: 0
                }
        };
};

if (typeof (((IntelliFactory$.WebSharper$).Formlet$).Enhance$).Padding$ ==
    "undefined")
{
  (((IntelliFactory$.WebSharper$).Formlet$).Enhance$).Padding$ = {};
}

((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).Padding$).get_Default =
function (unitVar0)
{
  return{
          Left:{
                 $: 0
               },
          Right:{
                  $: 0
                },
          Top:{
                $: 0
              },
          Bottom:{
                   $: 0
                 }
        };
};

if (typeof
    (((IntelliFactory$.WebSharper$).Formlet$).Enhance$).FormRowConfiguration$ ==
    "undefined")
{
  (((IntelliFactory$.WebSharper$).Formlet$).Enhance$).FormRowConfiguration$ = {};
}

((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).FormRowConfiguration$).get_Default =
function (unitVar0)
{
  return{
          Padding:
          (((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).Padding$).get_Default)(
          ),
          Color:{
                  $: 0
                },
          Class:{
                  $: 0
                },
          Style:{
                  $: 0
                }
        };
};

if (typeof ((IntelliFactory$.WebSharper$).Formlet$).LabelConfiguration$ ==
    "undefined")
{
  ((IntelliFactory$.WebSharper$).Formlet$).LabelConfiguration$ = {};
}

(((IntelliFactory$.WebSharper$).Formlet$).LabelConfiguration$).get_Default =
function (unitVar0)
{
  return{
          Align:{
                  $: 1
                },
          VerticalAlign:{
                          $: 1
                        },
          Placement:{
                      $: 0
                    }
        };
};

if (typeof ((IntelliFactory$.WebSharper$).Formlet$).Controls$ == "undefined")
{
  ((IntelliFactory$.WebSharper$).Formlet$).Controls$ = {};
}

(((IntelliFactory$.WebSharper$).Formlet$).Controls$).Input =
function (defaultValue)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var ev = ((new W$.$Event())._ctor)();
            var x_1 = "inputText";
            var x_2 = "text";
            var x =
                new W$.$List({
                               $: 1,
                               $0: ((W$.Attr).NewAttr)("class", x_1),
                               $1:
                               new W$.$List({
                                              $: 1,
                                              $0:
                                              ((W$.Attr).NewAttr)("type", x_2),
                                              $1: new W$.$List({
                                                                 $: 0
                                                               })
                                            })
                             });
            var body = x;
            var name = "input";
            var f = function (input_1)
                    {
                      return function (_arg1)
                             {
                               return (ev.Trigger)({
                                                     $: 0,
                                                     $0: (input_1.get_Value)()
                                                   });
                             };
                    };
            var input =
                (((W$.Html).Events).op_BarGreaterBang)(
                ((W$.Html).Tag)(name, body),
                function (t)
                {
                  var t_1 = t;
                  var f_1 = f;
                  return (((W$.Html).Events).On)("keyup", f_1, t_1);
                });
            var _this = ev;
            var st =
                ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Init)(
                {
                  $: 0,
                  $0: defaultValue
                }, _this);
            var reset = function (unitVar0_1)
                        {
                          (input.set_Item)("value", defaultValue);
                          return (ev.Trigger)({
                                                $: 0,
                                                $0: defaultValue
                                              });
                        };
            reset(undefined);
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   new W$.$List({
                                  $: 1,
                                  $0: [{
                                         $: 0
                                       }, input],
                                  $1: new W$.$List({
                                                     $: 0
                                                   })
                                }), st, reset);
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Controls$).Checkbox =
function (def)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var ev = ((new W$.$Event())._ctor)();
            var x_1 = "inputCheckbox";
            var x = new W$.$List({
                                   $: 1,
                                   $0: ((W$.Attr).NewAttr)("class", x_1),
                                   $1: new W$.$List({
                                                      $: 0
                                                    })
                                 });
            var body = x;
            var name = "input";
            var x_2 = "checkbox";
            var f =
                function (cb_1)
                {
                  return function (_arg1)
                         {
                           return (function (arg00)
                                   {
                                     return (ev.Trigger)(arg00);
                                   })(
                                  (function (arg0)
                                   {
                                     return{
                                             $: 0,
                                             $0: arg0
                                           };
                                   })(
                                  ((jQuery((cb_1.get_Dom)())).attr)("checked")));
                         };
                };
            var cb =
                (((W$.Html).Events).op_BarGreaterBang)(
                ((W$.Html).append)(
                ((W$.Html).Tag)(name, body),
                new W$.$List({
                               $: 1,
                               $0: ((W$.Attr).NewAttr)("type", x_2),
                               $1: new W$.$List({
                                                  $: 0
                                                })
                             })),
                function (t)
                {
                  var t_1 = t;
                  var f_1 = f;
                  return (((W$.Html).Events).On)("click", f_1, t_1);
                });
            if (def)
            {
              (cb.set_Item)("defaultChecked", "true");
            }
            else
            {
              var name_1 = "checked";
              var _this = cb;
              var this_1 = _this;
              void ((jQuery((this_1.get_Dom)())).removeAttr)(name_1);
            }
            var this_2 = ev;
            var st =
                ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Init)(
                {
                  $: 0,
                  $0: def
                }, this_2);
            var rst =
                function (unitVar0_1)
                {
                  if (def)
                  {
                    (cb.set_Item)("checked", "checked");
                  }
                  else
                  {
                    var name_2 = "checked";
                    var this_3 = cb;
                    var this_4 = this_3;
                    void ((jQuery((this_4.get_Dom)())).removeAttr)(name_2);
                  }
                  return (ev.Trigger)({
                                        $: 0,
                                        $0: def
                                      });
                };
            rst(undefined);
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   new W$.$List({
                                  $: 1,
                                  $0: [{
                                         $: 0
                                       }, cb],
                                  $1: new W$.$List({
                                                     $: 0
                                                   })
                                }), st, rst);
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Controls$).CheckboxGroup =
function (values)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var ev = ((new W$.$Event())._ctor)();
            var group = ((W$.Html).NewId)();
            var mapping = function (_1)
                          {
                            var tupledArg = arguments.length > 1 ?
                                            arguments :
                                            _1;
                            var _arg1 = tupledArg[0];
                            var _arg2 = tupledArg[1];
                            var b = tupledArg[2];
                            return b;
                          };
            var def = (function (list)
                       {
                         return ((W$.Array).ofList)(list);
                       })((function (list)
                           {
                             return ((W$.List$).map)(mapping, list);
                           })(values));
            var resetCB =
                function (chkBox)
                {
                  return function (b)
                         {
                           if (b)
                           {
                             (chkBox.set_Item)("checked", "checked");
                           }
                           else
                           {
                             var name = "checked";
                             var _this = chkBox;
                             var this_1 = _this;
                             void
                             ((jQuery((this_1.get_Dom)())).removeAttr)(name);
                           }
                         };
                };
            var mapping_1 =
                function (_1)
                {
                  var tupledArg = arguments.length > 1 ?
                                  arguments :
                                  _1;
                  var label = tupledArg[0];
                  var value = tupledArg[1];
                  var def_1 = tupledArg[2];
                  var x_1 = "inputCheckbox";
                  var x_2 = "checkbox";
                  var x_3 = group;
                  var x =
                      new W$.$List({
                                     $: 1,
                                     $0: ((W$.Attr).NewAttr)("class", x_1),
                                     $1:
                                     new W$.$List({
                                                    $: 1,
                                                    $0:
                                                    ((W$.Attr).NewAttr)(
                                                    "type", x_2),
                                                    $1:
                                                    new W$.$List({
                                                                   $: 1,
                                                                   $0:
                                                                   ((W$.Attr).NewAttr)(
                                                                   "name", x_3),
                                                                   $1:
                                                                   new W$.$List({
                                                                                  $:
                                                                                  0
                                                                                })
                                                                 })
                                                  })
                                   });
                  var body = x;
                  var name = "input";
                  var chkBox = ((W$.Html).Tag)(name, body);
                  if (def_1)
                  {
                    (chkBox.set_Item)("defaultChecked", "true");
                  }
                  else
                  {
                    var name_1 = "checked";
                    var _this = chkBox;
                    var this_1 = _this;
                    void ((jQuery((this_1.get_Dom)())).removeAttr)(name_1);
                  }
                  return [chkBox, label, value, def_1];
                };
            var cbLbVls = (function (list)
                           {
                             return ((W$.List$).map)(mapping_1, list);
                           })(values);
            var update =
                function (unitVar0_1)
                {
                  var chooser =
                      function (_1)
                      {
                        var tupledArg = arguments.length > 1 ?
                                        arguments :
                                        _1;
                        var cb = tupledArg[0];
                        var _arg3 = tupledArg[1];
                        var value = tupledArg[2];
                        var _arg4 = tupledArg[3];
                        return ((jQuery((cb.get_Dom)())).attr)("checked") ?
                               {
                                 $: 1,
                                 $0: value
                               }:
                               {
                                 $: 0
                               };
                      };
                  return (function (arg00)
                          {
                            return (ev.Trigger)(arg00);
                          })((function (arg0)
                              {
                                return{
                                        $: 0,
                                        $0: arg0
                                      };
                              })((function (list)
                                  {
                                    return ((W$.List$).choose)(chooser, list);
                                  })(cbLbVls)));
                };
            var reset = function (unitVar0_1)
                        {
                          var action = function (_1)
                                       {
                                         var tupledArg = arguments.length > 1 ?
                                                         arguments :
                                                         _1;
                                         var cb = tupledArg[0];
                                         var _arg5 = tupledArg[1];
                                         var _arg6 = tupledArg[2];
                                         var b = tupledArg[3];
                                         return (resetCB(cb))(b);
                                       };
                          (function (list)
                           {
                             var l = list;
                             var f = action;
                             return ((W$.Seq$).iter)(f, l);
                           })(cbLbVls);
                          return update(undefined);
                        };
            var mapping_2 =
                function (_1)
                {
                  var tupledArg = arguments.length > 1 ?
                                  arguments :
                                  _1;
                  var chkBox = tupledArg[0];
                  var label = tupledArg[1];
                  var _arg9 = tupledArg[2];
                  var _arg10 = tupledArg[3];
                  var f = function (_arg8)
                          {
                            return function (_arg7)
                                   {
                                     return update(undefined);
                                   };
                          };
                  (function (t)
                   {
                     var t_1 = t;
                     var f_1 = f;
                     return (((W$.Html).Events).On)("click", f_1, t_1);
                   })(chkBox);
                  var x = new W$.$List({
                                         $: 1,
                                         $0: ((W$.Html).text)(label),
                                         $1: new W$.$List({
                                                            $: 0
                                                          })
                                       });
                  var body = x;
                  var name = "label";
                  return [{
                            $: 0
                          },
                          ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).InTable)(
                          new W$.$List({
                                         $: 1,
                                         $0:
                                         new W$.$List({
                                                        $: 1,
                                                        $0:
                                                        ((W$.Html).Tag)(
                                                        name, body),
                                                        $1:
                                                        new W$.$List({
                                                                       $: 1,
                                                                       $0:
                                                                       chkBox,
                                                                       $1:
                                                                       new W$.$List({
                                                                                      $:
                                                                                      0
                                                                                    })
                                                                     })
                                                      }),
                                         $1: new W$.$List({
                                                            $: 0
                                                          })
                                       }))];
                };
            var body_1 = (function (list)
                          {
                            return ((W$.List$).map)(mapping_2, list);
                          })(cbLbVls);
            var chooser_1 = function (_1)
                            {
                              var tupledArg = arguments.length > 1 ?
                                              arguments :
                                              _1;
                              var _arg11 = tupledArg[0];
                              var v = tupledArg[1];
                              var b = tupledArg[2];
                              return b ?
                                     {
                                       $: 1,
                                       $0: v
                                     }:
                                     {
                                       $: 0
                                     };
                            };
            var def_2 = (function (list)
                         {
                           return ((W$.List$).choose)(chooser_1, list);
                         })(values);
            var init ={
                        $: 0,
                        $0: def_2
                      };
            var this_2 = ev;
            var state =
                (function (event)
                 {
                   return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Init)(
                          init, event);
                 })(this_2);
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   body_1, state, reset);
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Controls$).RadioButtonGroup =
function (def, values)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var ev = ((new W$.$Event())._ctor)();
            var group = ((W$.Html).NewId)();
            var mapping =
                function (_1)
                {
                  var tupledArg = arguments.length > 1 ?
                                  arguments :
                                  _1;
                  var label = tupledArg[0];
                  var value = tupledArg[1];
                  var x_1 = "inputRadio";
                  var x_2 = "radio";
                  var x_3 = group;
                  var x =
                      new W$.$List({
                                     $: 1,
                                     $0: ((W$.Attr).NewAttr)("class", x_1),
                                     $1:
                                     new W$.$List({
                                                    $: 1,
                                                    $0:
                                                    ((W$.Attr).NewAttr)(
                                                    "type", x_2),
                                                    $1:
                                                    new W$.$List({
                                                                   $: 1,
                                                                   $0:
                                                                   ((W$.Attr).NewAttr)(
                                                                   "name", x_3),
                                                                   $1:
                                                                   new W$.$List({
                                                                                  $:
                                                                                  0
                                                                                })
                                                                 })
                                                  })
                                   });
                  var body = x;
                  var name = "input";
                  return [((W$.Html).Tag)(name, body), label, value];
                };
            var rbLbVls = (function (list)
                           {
                             return ((W$.List$).map)(mapping, list);
                           })(values);
            var resetRB =
                function (rb)
                {
                  return function (value)
                         {
                           return function (ix)
                                  {
                                    if (def.$ == 0)
                                    {
                                      var name = "checked";
                                      var _this = rb;
                                      var this_1 = _this;
                                      void
                                      ((jQuery((this_1.get_Dom)())).removeAttr)(
                                      name);
                                      (ev.Trigger)({
                                                     $: 1,
                                                     $0: new W$.$List({
                                                                        $: 0
                                                                      })
                                                   });
                                    }
                                    else
                                    {
                                      var defIx = def.$0;
                                      if (defIx === ix)
                                      {
                                        (rb.set_Item)("checked", "checked");
                                        (ev.Trigger)({
                                                       $: 0,
                                                       $0: value
                                                     });
                                      }
                                      else
                                      {
                                        var name_1 = "checked";
                                        var this_2 = rb;
                                        var this_3 = this_2;
                                        void
                                        ((jQuery((this_3.get_Dom)())).removeAttr)(
                                        name_1);
                                      }
                                    }
                                  };
                         };
                };
            var reset =
                function (unitVar0_1)
                {
                  var action = function (ix)
                               {
                                 return function (_1)
                                        {
                                          var tupledArg = arguments.length > 1 ?
                                                          arguments :
                                                          _1;
                                          var rb = tupledArg[0];
                                          var _arg1 = tupledArg[1];
                                          var value = tupledArg[2];
                                          return ((resetRB(rb))(value))(ix);
                                        };
                               };
                  return (function (list)
                          {
                            var l = list;
                            var f = action;
                            return ((W$.Seq$).iteri)(f, l);
                          })(rbLbVls);
                };
            var mapping_1 =
                function (ix)
                {
                  return function (_1)
                         {
                           var tupledArg = arguments.length > 1 ?
                                           arguments :
                                           _1;
                           var rb = tupledArg[0];
                           var label = tupledArg[1];
                           var value = tupledArg[2];
                           ((resetRB(rb))(value))(ix);
                           var f = function (_arg3)
                                   {
                                     return function (_arg2)
                                            {
                                              return (ev.Trigger)({
                                                                    $: 0,
                                                                    $0: value
                                                                  });
                                            };
                                   };
                           (function (t)
                            {
                              var t_1 = t;
                              var f_1 = f;
                              return (((W$.Html).Events).On)("click", f_1, t_1);
                            })(rb);
                           var x = new W$.$List({
                                                  $: 1,
                                                  $0: ((W$.Html).text)(label),
                                                  $1: new W$.$List({
                                                                     $: 0
                                                                   })
                                                });
                           var body = x;
                           var name = "label";
                           return [{
                                     $: 1,
                                     $0:
                                     [((W$.Html).Tag)(name, body),
                                      ((((IntelliFactory$.WebSharper$).Formlet$).LabelConfiguration$).get_Default)(
                                      )]
                                   }, rb];
                         };
                };
            var body_1 = (function (list)
                          {
                            return ((W$.List$).mapi)(mapping_1, list);
                          })(rbLbVls);
            var __1;
            if (def.$ == 0)
            {
              __1 ={
                     $: 0
                   };
            }
            else
            {
              var defIx_1 = def.$0;
              var chooser = function (_1)
                            {
                              var tupledArg = arguments.length > 1 ?
                                              arguments :
                                              _1;
                              var ix = tupledArg[0];
                              var value = tupledArg[1];
                              var __1;
                              if (def.$ == 0)
                              {
                                __1 ={
                                       $: 0
                                     };
                              }
                              else
                              {
                                var defIx = def.$0;
                                __1 = (defIx === ix ?
                                       {
                                         $: 1,
                                         $0: value
                                       }:
                                       {
                                         $: 0
                                       });
                              }
                              return __1;
                            };
              var mapping_2 = function (ix)
                              {
                                return function (_1)
                                       {
                                         var tupledArg = arguments.length > 1 ?
                                                         arguments :
                                                         _1;
                                         var _arg4 = tupledArg[0];
                                         var value = tupledArg[1];
                                         return [ix, value];
                                       };
                              };
              __1 = (function (list)
                     {
                       var l = list;
                       var p = chooser;
                       return ((W$.Seq$).tryPick)(p, l);
                     })((function (list)
                         {
                           return ((W$.List$).mapi)(mapping_2, list);
                         })(values));
            }
            var initValue =
                (function (o)
                 {
                   return ((((IntelliFactory$.WebSharper$).Formlet$).Result$).OfOption)(
                          o);
                 })(__1);
            var this_4 = ev;
            var state =
                (function (event)
                 {
                   return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Init)(
                          initValue, event);
                 })(this_4);
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   body_1, state, reset);
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Controls$).Password =
function (defaultValue)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var ev = ((new W$.$Event())._ctor)();
            var x_1 = "inputPassword";
            var x_2 = "password";
            var x =
                new W$.$List({
                               $: 1,
                               $0: ((W$.Attr).NewAttr)("class", x_1),
                               $1:
                               new W$.$List({
                                              $: 1,
                                              $0:
                                              ((W$.Attr).NewAttr)("type", x_2),
                                              $1: new W$.$List({
                                                                 $: 0
                                                               })
                                            })
                             });
            var body = x;
            var name = "input";
            var f = function (input_1)
                    {
                      return function (_arg1)
                             {
                               return (ev.Trigger)({
                                                     $: 0,
                                                     $0: (input_1.get_Value)()
                                                   });
                             };
                    };
            var input =
                (((W$.Html).Events).op_BarGreaterBang)(
                ((W$.Html).Tag)(name, body),
                function (t)
                {
                  var t_1 = t;
                  var f_1 = f;
                  return (((W$.Html).Events).On)("keyup", f_1, t_1);
                });
            var _this = ev;
            var st =
                ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Init)(
                {
                  $: 0,
                  $0: defaultValue
                }, _this);
            var rst = function (unitVar0_1)
                      {
                        (input.set_Item)("value", defaultValue);
                        return (ev.Trigger)({
                                              $: 0,
                                              $0: defaultValue
                                            });
                      };
            rst(undefined);
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   new W$.$List({
                                  $: 1,
                                  $0: [{
                                         $: 0
                                       }, input],
                                  $1: new W$.$List({
                                                     $: 0
                                                   })
                                }), st, rst);
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Controls$).TextArea =
function (defaultValue)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var ev = ((new W$.$Event())._ctor)();
            var x = new W$.$List({
                                   $: 0
                                 });
            var body = x;
            var name = "textarea";
            var f = function (ta_1)
                    {
                      return function (_arg1)
                             {
                               return (ev.Trigger)({
                                                     $: 0,
                                                     $0: (ta_1.get_Value)()
                                                   });
                             };
                    };
            var ta =
                (((W$.Html).Events).op_BarGreaterBang)(
                ((W$.Html).Tag)(name, body),
                function (t)
                {
                  var t_1 = t;
                  var f_1 = f;
                  return (((W$.Html).Events).On)("keyup", f_1, t_1);
                });
            var rst = function (unitVar0_1)
                      {
                        (ta.set_Item)("value", defaultValue);
                        return (ev.Trigger)({
                                              $: 0,
                                              $0: defaultValue
                                            });
                      };
            rst(undefined);
            var _this = ev;
            var state =
                ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Init)(
                {
                  $: 0,
                  $0: defaultValue
                }, _this);
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   new W$.$List({
                                  $: 1,
                                  $0: [{
                                         $: 0
                                       }, ta],
                                  $1: new W$.$List({
                                                     $: 0
                                                   })
                                }), state, rst);
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Controls$).Select =
function (def, vls)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var ev = ((new W$.$Event())._ctor)();
            var mapping = function (_1)
                          {
                            var tuple = arguments.length > 1 ?
                                        arguments :
                                        _1;
                            return tuple[1];
                          };
            var aVls = (function (list)
                        {
                          return ((W$.Array).ofList)(list);
                        })((function (list)
                            {
                              return ((W$.List$).map)(mapping, list);
                            })(vls));
            var __1;
            if (def >= 0)
            {
              var _this = vls;
              __1 = def < ((W$.Seq$).length)(_this);
            }
            else
            {
              __1 = false;
            }
            var sIx = __1 ?
                      {
                        $: 1,
                        $0: def
                      }:
                      {
                        $: 0
                      };
            var mapping_1 =
                function (i)
                {
                  return function (_1)
                         {
                           var tupledArg = arguments.length > 1 ?
                                           arguments :
                                           _1;
                           var nm = tupledArg[0];
                           var _arg1 = tupledArg[1];
                           var x = new W$.$List({
                                                  $: 1,
                                                  $0: ((W$.Html).text)(nm),
                                                  $1: new W$.$List({
                                                                     $: 0
                                                                   })
                                                });
                           var body = x;
                           var name = "option";
                           var o = ((W$.Html).Tag)(name, body);
                           var x_1 = i;
                           (o.set_Item)("value", (x_1.toString)());
                           return o;
                         };
                };
            var sel = (function (x)
                       {
                         var x_1 = x;
                         var body = x_1;
                         var name = "select";
                         return ((W$.Html).Tag)(name, body);
                       })((function (list)
                           {
                             return ((W$.List$).mapi)(mapping_1, list);
                           })(vls));
            var d ={
                     $: 1,
                     $0: new W$.$List({
                                        $: 0
                                      })
                   };
            var f = function (ix)
                    {
                      return{
                              $: 0,
                              $0: aVls[ix]
                            };
                    };
            var sValue =
                (function (o)
                 {
                   return ((((IntelliFactory$.WebSharper$).Formlet$).Utils$).Maybe)(
                          d, f, o);
                 })(sIx);
            var reset = function (unitVar0_1)
                        {
                          if (sIx.$ == 0)
                          {}
                          else
                          {
                            var ix = sIx.$0;
                            var x = ix;
                            (sel.set_Item)("value", (x.toString)());
                          }
                          return (ev.Trigger)(sValue);
                        };
            var f_1 =
                function (_arg3)
                {
                  return function (_arg2)
                         {
                           return (function (arg00)
                                   {
                                     return (ev.Trigger)(arg00);
                                   })(
                                  (function (arg0)
                                   {
                                     return{
                                             $: 0,
                                             $0: arg0
                                           };
                                   })(aVls[parseInt((sel.get_Item)("value"))]));
                         };
                };
            (function (t)
             {
               var t_1 = t;
               var f_2 = f_1;
               return (((W$.Html).Events).On)("change", f_2, t_1);
             })(sel);
            reset(undefined);
            var this_1 = ev;
            var state =
                (function (event)
                 {
                   return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Init)(
                          sValue, event);
                 })(this_1);
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   new W$.$List({
                                  $: 1,
                                  $0: [{
                                         $: 0
                                       }, sel],
                                  $1: new W$.$List({
                                                     $: 0
                                                   })
                                }), state, reset);
          }
        };
};

(((IntelliFactory$.WebSharper$).Formlet$).Controls$).Button =
function (label)
{
  return{
          BuildForm:
          function (unitVar0)
          {
            var ev = ((new W$.$Event())._ctor)();
            var n = [0];
            var x = new W$.$List({
                                   $: 1,
                                   $0: ((W$.Html).text)(label),
                                   $1: new W$.$List({
                                                      $: 0
                                                    })
                                 });
            var body = x;
            var name = "button";
            var f = function (_arg2)
                    {
                      return function (_arg1)
                             {
                               (function (arg00)
                                {
                                  return (ev.Trigger)(arg00);
                                })({
                                     $: 0,
                                     $0: n[0]
                                   });
                               return n[0] = n[0] + 1;
                             };
                    };
            var btn =
                (((W$.Html).Events).op_BarGreaterBang)(
                ((W$.Html).Tag)(name, body),
                function (t)
                {
                  var t_1 = t;
                  var f_1 = f;
                  return (((W$.Html).Events).On)("click", f_1, t_1);
                });
            var reset = function (unitVar0_1)
                        {
                          n[0] = 0;
                          return (ev.Trigger)({
                                                $: 1,
                                                $0: new W$.$List({
                                                                   $: 0
                                                                 })
                                              });
                        };
            var init ={
                        $: 1,
                        $0: new W$.$List({
                                           $: 0
                                         })
                      };
            var _this = ev;
            var state =
                (function (event)
                 {
                   return ((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Init)(
                          init, event);
                 })(_this);
            return ((((IntelliFactory$.WebSharper$).Formlet$).Form$).Create)(
                   new W$.$List({
                                  $: 1,
                                  $0: [{
                                         $: 0
                                       }, btn],
                                  $1: new W$.$List({
                                                     $: 0
                                                   })
                                }), state, reset);
          }
        };
};

if (typeof (((IntelliFactory$.WebSharper$).Formlet$).Controls$).State$ ==
    "undefined")
{
  (((IntelliFactory$.WebSharper$).Formlet$).Controls$).State$ = {};
}

((((IntelliFactory$.WebSharper$).Formlet$).Controls$).State$).SetDomValue =
function (dom, value)
{
  return void ((jQuery(dom)).val)(value);
};

((((IntelliFactory$.WebSharper$).Formlet$).Controls$).State$).DomValue =
function (dom)
{
  var _this = jQuery(dom);
  var x = (_this.val)();
  return (x instanceof Array ?
          x :
          [x])[0];
};

((((W$.Registry).Types).get)()).BehaviorBuilder_p51af59b9dce6fb76 =
(((IntelliFactory$.WebSharper$).Formlet$).Behavior$).$BehaviorBuilder;
((((W$.Registry).Types).get)())["Behavior`1_p502a7fce5ec2ea0"] =
(((IntelliFactory$.WebSharper$).Formlet$).Behavior$).$Behavior_1;
(((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).$Behavior_1).prototype)["$$IEquatable`1_p36687d34b8177c46__IEquatable_1"]
= 1;
(((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).$Behavior_1).prototype).$$IStructuralEquatable_n56ca4a8a2a725a05__IStructuralEquatable
= 1;
(((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).$Behavior_1).prototype)["$$IBehavior`1_n7022c65334d74452__IBehavior_1"]
= 1;
(((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).$Behavior_1).prototype)["$$IObservable`1_pa29d3c612f3d457__IObservable_1"]
= 1;
(((((IntelliFactory$.WebSharper$).Formlet$).Behavior$).Do).get)();
(((((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).ToRowElements).get)(
);
(((((IntelliFactory$.WebSharper$).Formlet$).FormBodyUtils$).VerticalTable).get)(
);
((((W$.Registry).Types).get)()).FormletBuilder_p15ee854d3e5ccb28 =
(((IntelliFactory$.WebSharper$).Formlet$).Formlet$).$FormletBuilder;
(((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Do).get)();
((((W$.Registry).Types).get)()).FlowletBuilder_p2199379283f02ef0 =
(((IntelliFactory$.WebSharper$).Formlet$).Flowlet$).$FlowletBuilder;
(((((IntelliFactory$.WebSharper$).Formlet$).Flowlet$).Do).get)();
(((((IntelliFactory$.WebSharper$).Formlet$).Operators$).formlet).get)();
(((((IntelliFactory$.WebSharper$).Formlet$).Operators$).flowlet).get)();
((((W$.Registry).Types).get)())["Form`1_n41364d96e5842217"] =
((IntelliFactory$.WebSharper$).Formlet$).$Form_1;
((((IntelliFactory$.WebSharper$).Formlet$).$Form_1).prototype).$$IWidget_p4036373d8372c14d__IWidget
= 1;
((((IntelliFactory$.WebSharper$).Formlet$).$Form_1).prototype).$$INode_p5129303de1c6d8ef__INode
= 1;
((((IntelliFactory$.WebSharper$).Formlet$).$Form_1).prototype)["$$IObservable`1_pa29d3c612f3d457__IObservable_1"]
= 1;
