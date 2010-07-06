// This is a partial port of SharpCouch
// http://code.google.com/p/couchbrowse/source/browse/trunk/SharpCouch/SharpCouch.cs
module FSharpCouch
    open System
    open System.Net
    open System.Text
    open System.IO

    let WriteRequest url methodName content contentType =
        let request =  WebRequest.Create(string url)
        request.Method <- methodName
        request.ContentType <- contentType 
        let bytes = UTF8Encoding.UTF8.GetBytes(string content)
        use requestStream = request.GetRequestStream()
        requestStream.Write(bytes, 0, bytes.Length) 
        request
    let AyncReadResponse (request:WebRequest) =
        async { use! response = request.AsyncGetResponse()
                use stream = response.GetResponseStream()
                use reader = new StreamReader(stream)
                let contents = reader.ReadToEnd()
                return contents }
    let ProcessRequest url methodName content contentType =
        async { let request = WriteRequest url methodName content contentType
                let! response = AyncReadResponse(request) 
                return response}
        |> Async.RunSynchronously
    let CreateDocument url content = 
        ProcessRequest url "POST" content "application/json"