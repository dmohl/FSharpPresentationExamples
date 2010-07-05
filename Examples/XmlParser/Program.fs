// From http://www.infoq.com/articles/Beyond-Foundations-FSharp
open System.Xml

let (|Node|Leaf|) (node : #System.Xml.XmlNode) =
     if node.HasChildNodes then
         Node (node.Name, seq { for x in node.ChildNodes -> x })
     else
         Leaf (node.InnerText)

let printXml node =
     let rec printXml indent node =
         match node with
         | Leaf (text) -> printfn "%s%s" indent text
         | Node (name, nodes) ->
             printfn "%s%s:" indent name
             nodes |> Seq.iter (printXml (indent + "    "))
     printXml "" node

let getDoc() =
    let temp = new XmlDocument()
    let text = "
        <fruit>
        <apples>
        <gannySmiths>1</gannySmiths>
        <coxsOrangePippin>3</coxsOrangePippin>
        </apples>
        <organges>2</organges>
        <bananas>4</bananas>
        </fruit>"
    temp.LoadXml(text)
    temp

printXml (getDoc().DocumentElement :> XmlNode)

do System.Console.ReadLine()