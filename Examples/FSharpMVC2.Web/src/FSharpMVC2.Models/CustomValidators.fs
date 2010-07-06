namespace FSharpMVC2.Web.Models
open System
open System.ComponentModel.DataAnnotations
open System.ComponentModel
open System.Globalization
open System.Web.Security

[<AttributeUsage(AttributeTargets.Class, AllowMultiple = true, Inherited = true)>]
[<Sealed>] 
type PropertiesMustMatchAttribute = 
    inherit ValidationAttribute 
        val typeId : obj
        val mutable originalProperty : string
        val mutable confirmProperty : string
        new (originalProperty, confirmProperty) = 
            {inherit ValidationAttribute("'{0}' and '{1}' do not match."); originalProperty = originalProperty; 
             confirmProperty = confirmProperty; typeId = new Object()} 
        member x.OriginalProperty with get() = x.originalProperty and set(value) = x.originalProperty <- value
        member x.ConfirmProperty with get() = x.confirmProperty and set(value) = x.confirmProperty <- value
        override x.TypeId with get() = x.typeId
        override x.FormatErrorMessage name =
            String.Format(CultureInfo.CurrentUICulture, x.ErrorMessageString, x.OriginalProperty, x.ConfirmProperty)
        override x.IsValid value =
            let properties = TypeDescriptor.GetProperties value
            let originalValue = properties.Find(x.OriginalProperty, true).GetValue(value)
            let confirmValue = properties.Find(x.ConfirmProperty, true).GetValue(value)
            Object.Equals(originalValue, confirmValue)

[<AttributeUsage(AttributeTargets.Field ||| AttributeTargets.Property, AllowMultiple = false, Inherited = true)>]
[<Sealed>] 
type ValidatePasswordLengthAttribute = 
    val minCharacters : int
    new () = {inherit ValidationAttribute("'{0}' must be at least {1} characters long."); 
                minCharacters = Membership.Provider.MinRequiredPasswordLength} 
    inherit ValidationAttribute 
        override x.FormatErrorMessage name =
            String.Format(CultureInfo.CurrentUICulture, x.ErrorMessageString, name, x.minCharacters)
        override x.IsValid value =
            let valueAsString = value :?> string
            (valueAsString <> null && valueAsString.Length >= x.minCharacters)
