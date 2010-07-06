module HomeControllerTests

open System
open NUnit.Framework
open SpecUnit
open FSharpMVC2.Web.Controllers
open System.Web
open System.Web.Mvc

[<TestFixture>]      
type HomeController__when_calling_the_index_action () =   
    let SUT = new HomeController()
    [<DefaultValue(false)>]  
    val mutable result : ViewResult
    inherit SpecUnit.ContextSpecification()
        override x.Because () =
            x.result <- SUT.Index() :?> ViewResult
        [<Test>]    
        member x.should_have_a_non_null_result () =    
            x.result.ShouldNotBeNull |> ignore
        [<Test>]    
        member x.should_have_the_expected_message_in_view_data () =    
            x.result.ViewData.["Message"].ShouldEqual("Welcome to ASP.NET MVC!") |> ignore

[<TestFixture>]      
type HomeController__when_calling_the_about_action () =   
    let SUT = new HomeController()
    [<DefaultValue(false)>]  
    val mutable result : ViewResult
    inherit SpecUnit.ContextSpecification()
        override x.Because () =
            x.result <- SUT.About() :?> ViewResult
        [<Test>]    
        member x.should_have_a_non_null_result () =    
            x.result.ShouldNotBeNull |> ignore
