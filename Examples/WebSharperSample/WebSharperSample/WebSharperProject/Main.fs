namespace WebSharperProject

open System
open IntelliFactory.WebSharper
open IntelliFactory.WebSharper.Html
open IntelliFactory.WebSharper.Formlet
open Newtonsoft.Json

module RegistrationForm =
    let couchDBUrl = "http://localhost:5984/registration/"

    type RegistrationInformation = 
        {
            FirstName : string
            LastName : string
            Email : string
        }

    [<JavaScript>]
    let input (label: string) (error: string) = 
        Controls.Input ""
        |> Validator.IsNotEmpty error
        |> Enhance.WithValidationIcon
        |> Enhance.WithTextLabel label

    [<JavaScript>]
    let inputEmail (label: string) (error: string) = 
        Controls.Input ""
        |> Validator.IsEmail error
        |> Enhance.WithValidationIcon
        |> Enhance.WithTextLabel label

    [<JavaScript>]
    let RegistrationForm : Formlet<RegistrationInformation> =
        Formlet.Yield (fun firstName lastName email -> 
                           {FirstName = firstName; 
                            LastName = lastName; Email = email})
        <*> input "First Name" "Please enter your first name"
        <*> input "Last Name" "Please enter your last name"
        <*> inputEmail "Email" "Please enter a valid email address"
    
    [<Rpc>]
    let SaveRegistrationToCouch (registrationInformation:RegistrationInformation) =
        JsonConvert.SerializeObject registrationInformation
        |> FSharpCouch.CreateDocument couchDBUrl 
        |> ignore

    [<JavaScript>]
    let RegistrationSequence =
        let registrationForm =
            RegistrationForm
            |> Enhance.WithSubmitAndResetButtons
            |> Enhance.WithCustomFormContainer {
                Enhance.FormContainerConfiguration.Default with
                    Header = 
                        "Enter the following information to register:" 
                        |> Enhance.FormPart.Text 
                        |> Some
                }
        let completeRegistration registrationInformation () =
            SaveRegistrationToCouch registrationInformation
            FieldSet [
                Legend [Text "Registration summary"]
                P ["Hi " + registrationInformation.FirstName + " " + 
                    registrationInformation.LastName + "!" |> Text]
                P ["You are now registered." |> Text]]
        let flow =
            Flowlet.Do {
                let! initialForm = registrationForm
                return! Formlet.OfElement (completeRegistration initialForm)
            }
        Div [H1 [Text "Register today!"]] -< [flow.BuildForm()]

[<JavaScriptType>]
type RegistrationSequence() = 
    inherit Web.Control()
    [<JavaScript>]
    override this.Body = RegistrationForm.RegistrationSequence

