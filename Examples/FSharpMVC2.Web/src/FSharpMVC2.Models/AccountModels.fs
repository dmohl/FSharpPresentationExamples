namespace FSharpMVC2.Web.Models
open System
open System.ComponentModel.DataAnnotations
open System.ComponentModel
open System.Web.Security

[<PropertiesMustMatch("NewPassword", "ConfirmPassword", ErrorMessage = "The new password and confirmation password do not match.")>]
type ChangePasswordModel() = 
    let mutable oldPassword = ""
    let mutable newPassword = ""
    let mutable confirmPassword = ""

    [<Required>]
    [<DataType(DataType.Password)>]
    [<DisplayName("Current password")>]
    member x.NewPassword with get() = oldPassword and set(value) = oldPassword <- value
    
    [<Required>]
    [<DataType(DataType.Password)>]
    [<ValidatePasswordLength>]
    [<DisplayName("New password")>]
    member x.OldPassword with get() = newPassword and set(value) = newPassword <- value

    [<Required>]
    [<DataType(DataType.Password)>]
    [<DisplayName("Confirm new password")>]
    member x.ConfirmPassword with get() = confirmPassword and set(value) = confirmPassword <- value

type LogOnModel() = 
    let mutable userName = ""
    let mutable password = ""
    let mutable rememberMe = false

    [<Required>]
    [<DisplayName("User name")>]
    member x.UserName with get() = userName and set(value) = userName <- value

    [<Required>]
    [<DataType(DataType.Password)>]
    [<DisplayName("Password")>]
    member x.Password with get() = password and set(value) = password <- value

    [<DisplayName("Remember me?")>]
    member x.RememberMe with get() = rememberMe and set(value) = rememberMe <- value

[<PropertiesMustMatch("Password", "ConfirmPassword", ErrorMessage = "The password and confirmation password do not match.")>]
type RegisterModel() = 
    let mutable userName = ""
    let mutable email = ""
    let mutable password = ""
    let mutable confirmPassword = ""

    [<Required>]
    [<DisplayName("User name")>]
    member x.UserName with get() = userName and set(value) = userName <- value

    [<Required>]
    [<DataType(DataType.EmailAddress)>]
    [<DisplayName("Email address")>]
    member x.Email with get() = email and set(value) = email <- value

    [<Required>]
    [<DataType(DataType.Password)>]
    [<DisplayName("Password")>]
    [<ValidatePasswordLength>]
    member x.Password with get() = password and set(value) = password <- value

    [<Required>]
    [<DataType(DataType.Password)>]
    [<DisplayName("Confirm password")>]
    member x.ConfirmPassword with get() = confirmPassword and set(value) = confirmPassword <- value

