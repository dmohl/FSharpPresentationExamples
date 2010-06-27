open System

// ------- Tail Recursive
let numsTailRecursive = LazyList.ofSeq <| seq {999000000L..999999999L}
let rec sumOfRangeTailRecursive (nums:LazyList<int64>) acc =
    match nums with
    | LazyList.Cons(number, rest) -> sumOfRangeTailRecursive rest (number + acc)
    | LazyList.Nil -> acc

do printf "Total = %A" (sumOfRangeTailRecursive numsTailRecursive 0L)
do Console.ReadLine() |> ignore
