// p1d4e8f398ec9ff63

if (typeof WebSharperProject$ == "undefined")
{
  WebSharperProject$ = {};
}

WebSharperProject$.$RegistrationSequence =
function ()
{};

(WebSharperProject$.$RegistrationSequence).prototype = new W$.$Control();

((WebSharperProject$.$RegistrationSequence).prototype).get_Body =
function (unitVar1)
{
  var _this = this;
  return (((WebSharperProject$.RegistrationForm$).RegistrationSequence).get)();
};

if (typeof WebSharperProject$.RegistrationForm$ == "undefined")
{
  WebSharperProject$.RegistrationForm$ = {};
}

(WebSharperProject$.RegistrationForm$).input =
function (label, error)
{
  return (function (flet)
          {
            return ((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithTextLabel)(
                   label, flet);
          })(
         (function (formlet)
          {
            return ((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithValidationIcon)(
                   formlet);
          })(
         (((((IntelliFactory$.WebSharper$).Formlet$).Validator$).IsNotEmpty)(
          error))(
         ((((IntelliFactory$.WebSharper$).Formlet$).Controls$).Input)(""))));
};

(WebSharperProject$.RegistrationForm$).inputEmail =
function (label, error)
{
  return (function (flet)
          {
            return ((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithTextLabel)(
                   label, flet);
          })(
         (function (formlet)
          {
            return ((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithValidationIcon)(
                   formlet);
          })(
         (((((IntelliFactory$.WebSharper$).Formlet$).Validator$).IsEmail)(error))(
         ((((IntelliFactory$.WebSharper$).Formlet$).Controls$).Input)(""))));
};

(WebSharperProject$.RegistrationForm$).RegistrationSequence =
Delay(
function (unitVar0)
{
  var inputRecord =
      (((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).FormContainerConfiguration$).get_Default)(
      );
  var fc ={
            Header: (function (arg0)
                     {
                       return{
                               $: 1,
                               $0: arg0
                             };
                     })((function (arg0)
                         {
                           return{
                                   $: 0,
                                   $0: arg0
                                 };
                         })("Enter the following information to register:")),
            Padding: inputRecord.Padding,
            Description: inputRecord.Description,
            BackgroundColor: inputRecord.BackgroundColor,
            BorderColor: inputRecord.BorderColor,
            CssClass: inputRecord.CssClass,
            Style: inputRecord.Style
          };
  var registrationForm =
      (function (formlet)
       {
         return ((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithCustomFormContainer)(
                fc, formlet);
       })(
      (function (formlet)
       {
         return ((((IntelliFactory$.WebSharper$).Formlet$).Enhance$).WithSubmitAndResetButtons)(
                formlet);
       })((((WebSharperProject$.RegistrationForm$).RegistrationForm).get)()));
  var completeRegistration =
      function (registrationInformation)
      {
        return function (unitVar1)
               {
                 ((W$.Rpc).Send)(
                 "WebSharperProject.RegistrationForm, WebSharperProject, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null:SaveRegistrationToCouch",
                 [registrationInformation]);
                 var x_1 =
                     new W$.$List({
                                    $: 1,
                                    $0: ((W$.Html).text)("Registration summary"),
                                    $1: new W$.$List({
                                                       $: 0
                                                     })
                                  });
                 var body = x_1;
                 var name = "legend";
                 var x_2 =
                     new W$.$List({
                                    $: 1,
                                    $0:
                                    (function (data)
                                     {
                                       return ((W$.Html).text)(data);
                                     })(
                                    ((("Hi " + registrationInformation.FirstName)
                                      + " ") + registrationInformation.LastName)
                                    + "!"),
                                    $1: new W$.$List({
                                                       $: 0
                                                     })
                                  });
                 var body_1 = x_2;
                 var name_1 = "p";
                 var x_3 = new W$.$List({
                                          $: 1,
                                          $0: (function (data)
                                               {
                                                 return ((W$.Html).text)(data);
                                               })("You are now registered."),
                                          $1: new W$.$List({
                                                             $: 0
                                                           })
                                        });
                 var body_2 = x_3;
                 var name_2 = "p";
                 var x =
                     new W$.$List({
                                    $: 1,
                                    $0: ((W$.Html).Tag)(name, body),
                                    $1:
                                    new W$.$List({
                                                   $: 1,
                                                   $0:
                                                   ((W$.Html).Tag)(
                                                   name_1, body_1),
                                                   $1:
                                                   new W$.$List({
                                                                  $: 1,
                                                                  $0:
                                                                  ((W$.Html).Tag)(
                                                                  name_2, body_2
                                                                  ),
                                                                  $1:
                                                                  new W$.$List({
                                                                                 $:
                                                                                 0
                                                                               })
                                                                })
                                                 })
                                  });
                 var body_3 = x;
                 var name_3 = "fieldset";
                 return ((W$.Html).Tag)(name_3, body_3);
               };
      };
  var flow =
      (function (builder_)
       {
         return (builder_.Bind)(
                registrationForm,
                function (_arg6)
                {
                  var initialForm = _arg6;
                  return (builder_.ReturnFrom)(
                         ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).OfElement)(
                         completeRegistration(initialForm)));
                });
       })((((((IntelliFactory$.WebSharper$).Formlet$).Flowlet$).Do).get)());
  var x_5 = new W$.$List({
                           $: 1,
                           $0: ((W$.Html).text)("Register today!"),
                           $1: new W$.$List({
                                              $: 0
                                            })
                         });
  var body_4 = x_5;
  var name_4 = "h1";
  var x_4 = new W$.$List({
                           $: 1,
                           $0: ((W$.Html).Tag)(name_4, body_4),
                           $1: new W$.$List({
                                              $: 0
                                            })
                         });
  var body_5 = x_4;
  var name_5 = "div";
  return ((W$.Html).append)(
         ((W$.Html).Tag)(name_5, body_5),
         new W$.$List({
                        $: 1,
                        $0: (flow.BuildForm)(undefined),
                        $1: new W$.$List({
                                           $: 0
                                         })
                      }));
});

(WebSharperProject$.RegistrationForm$).RegistrationForm =
Delay(
function (unitVar0)
{
  return ((((IntelliFactory$.WebSharper$).Formlet$).Operators$).op_LessMultiplyGreater)(
         ((((IntelliFactory$.WebSharper$).Formlet$).Operators$).op_LessMultiplyGreater)(
         ((((IntelliFactory$.WebSharper$).Formlet$).Operators$).op_LessMultiplyGreater)(
         ((((IntelliFactory$.WebSharper$).Formlet$).Formlet$).Yield)(
         function (firstName)
         {
           return function (lastName)
                  {
                    return function (email)
                           {
                             return{
                                     FirstName: firstName,
                                     LastName: lastName,
                                     Email: email
                                   };
                           };
                  };
         }),
         ((WebSharperProject$.RegistrationForm$).input)(
         "First Name", "Please enter your first name")),
         ((WebSharperProject$.RegistrationForm$).input)(
         "Last Name", "Please enter your last name")),
         ((WebSharperProject$.RegistrationForm$).inputEmail)(
         "Email", "Please enter a valid email address"));
});

(((WebSharperProject$.RegistrationForm$).RegistrationSequence).get)();
(((WebSharperProject$.RegistrationForm$).RegistrationForm).get)();
((((W$.Registry).Types).get)()).RegistrationSequence_n489e35374b5a312f =
WebSharperProject$.$RegistrationSequence;
((WebSharperProject$.$RegistrationSequence).prototype).$$IComponent_p4642b924f95be4a6__IComponent
= 1;
((WebSharperProject$.$RegistrationSequence).prototype).$$IDisposable_p1a5dece2430d1c7__IDisposable
= 1;
((WebSharperProject$.$RegistrationSequence).prototype).$$IParserAccessor_p23114829d1dcea79__IParserAccessor
= 1;
((WebSharperProject$.$RegistrationSequence).prototype).$$IUrlResolutionService_p3d8fd69f2d090451__IUrlResolutionService
= 1;
((WebSharperProject$.$RegistrationSequence).prototype).$$IDataBindingsAccessor_naf467a036212eec__IDataBindingsAccessor
= 1;
((WebSharperProject$.$RegistrationSequence).prototype).$$IControlBuilderAccessor_p12767bfcffc685b4__IControlBuilderAccessor
= 1;
((WebSharperProject$.$RegistrationSequence).prototype).$$IControlDesignerAccessor_p21c9dfd732eeac7e__IControlDesignerAccessor
= 1;
((WebSharperProject$.$RegistrationSequence).prototype).$$IExpressionsAccessor_p63d69e724f7de2af__IExpressionsAccessor
= 1;
((WebSharperProject$.$RegistrationSequence).prototype).$$IWidget_p4036373d8372c14d__IWidget
= 1;
((WebSharperProject$.$RegistrationSequence).prototype).$$INode_p5129303de1c6d8ef__INode
= 1;
