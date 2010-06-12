open System

// ------- Not Tail Recursive
let nums = LazyList.ofSeq <| seq {99999999L..999999999L}
let rec sumOfRange (nums:LazyList<int64>) =
    match nums with
    | LazyList.Cons(number, rest) -> number + sumOfRange rest
    | LazyList.Nil -> 0L

do printf "Total = %A" (sumOfRange nums)
do Console.ReadLine() |> ignore

