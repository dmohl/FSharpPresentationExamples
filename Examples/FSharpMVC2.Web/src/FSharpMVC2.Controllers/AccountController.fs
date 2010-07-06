namespace FSharpMVC2.Web.Controllers

open System
open System.Web
open System.Web.Mvc
open System.Web.Security
open FSharpMVC2.Web.Models
open System.Security.Principal

module AccountControllerModule =
    let AssignIfNull value newValue =
        match value with
        | _ when value = null -> newValue
        | _ -> value

[<HandleError>]
type AccountController =
    val mutable formsService : IFormsAuthenticationService
    val mutable membershipService : IMembershipService
    inherit Controller
        new () = {inherit Controller(); formsService = new FormsAuthenticationService();
                 membershipService = new AccountMembershipService()}
        member x.FormsService with get() = x.formsService and set(value) = x.formsService <- value
        member x.MembershipService with get() = x.membershipService and set(value) = x.membershipService <- value
        // **************************************
        // URL: /Account/LogOn
        // **************************************
        member x.LogOn () =
             x.View() :> ActionResult
        [<HttpPost>]
        member x.LogOn (model:LogOnModel) returnUrl =
            match x.ModelState.IsValid with
            | true ->
                match x.MembershipService.ValidateUser(model.UserName, model.Password) with
                | true ->
                    x.FormsService.SignIn(model.UserName, model.RememberMe)
                    match String.IsNullOrEmpty(returnUrl) with
                    | false -> x.Redirect(returnUrl) :> ActionResult
                    | _ -> x.RedirectToAction("Index", "Home") :> ActionResult
                | _-> x.ModelState.AddModelError("", 
                        "The user name or password provided is incorrect.")
                      x.View(model) :> ActionResult
            | _ -> x.View(model) :> ActionResult
        // **************************************
        // URL: /Account/LogOff
        // **************************************
        member x.LogOff () =
            x.FormsService.SignOut()
            x.RedirectToAction("Index", "Home") :> ActionResult
        // **************************************
        // URL: /Account/Register
        // **************************************
        member x.Register () =
            x.ViewData.["PasswordLength"] <- x.MembershipService.MinPasswordLength
            x.View() :> ActionResult
        [<HttpPost>]
        member x.Register(model:RegisterModel) =
            match x.ModelState.IsValid with
            | true ->
                let createStatus = x.MembershipService.CreateUser(model.UserName, model.Password, model.Email)
                match createStatus with
                | MembershipCreateStatus.Success ->
                    x.formsService.SignIn(model.UserName, false)
                    x.RedirectToAction("Index", "Home") :> ActionResult
                | _ ->
                    x.ModelState.AddModelError("", AccountValidation.ErrorCodeToString(createStatus))
                    x.View(model) :> ActionResult
              | _ ->
                  x.ViewData.["PasswordLength"] <- x.MembershipService.MinPasswordLength
                  x.View(model) :> ActionResult
        // **************************************
        // URL: /Account/ChangePassword
        // **************************************
        [<Authorize>]
        member x.ChangePassword () =
            x.ViewData.["PasswordLength"] <- x.MembershipService.MinPasswordLength
            x.View() :> ActionResult
        [<Authorize>]
        [<HttpPost>]
        member x.ChangePassword(model:ChangePasswordModel) =
            match x.ModelState.IsValid with
            | true ->
                let changePasswordResult = 
                    x.MembershipService.ChangePassword(x.User.Identity.Name, model.OldPassword, model.NewPassword)
                match changePasswordResult with
                | true -> x.RedirectToAction("ChangePasswordSuccess") :> ActionResult
                | _ ->  
                    x.ModelState.AddModelError("", 
                        "The current password is incorrect or the new password is invalid.")
                    x.View(model) :> ActionResult
            | _ -> 
                x.ViewData.["PasswordLength"] <- x.MembershipService.MinPasswordLength
                x.View(model) :> ActionResult
        // **************************************
        // URL: /Account/ChangePasswordSuccess
        // **************************************
        member x.ChangePasswordSuccess () = x.View()
