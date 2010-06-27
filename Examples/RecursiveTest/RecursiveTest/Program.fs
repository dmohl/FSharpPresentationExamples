open System

// Original

//let nums = List.ofArray [|99L..999999999L|]
// 
//let sqr n = n * n
// 
//let rec sumOfSquare num =
//    Match nums with
//    | n :: rest -> (sqr n) + sumOfSquare rest
//    | [] -> 0L

// ------- Not Tail Recursive
let nums = LazyList.ofSeq <| seq {999000000L..999999999L}
let rec sumOfRange (nums:LazyList<int64>) =
    match nums with
    | LazyList.Cons(number, rest) -> number + sumOfRange rest
    | LazyList.Nil -> 0L

do printf "Total = %A" (sumOfRange nums)
do Console.ReadLine() |> ignore

