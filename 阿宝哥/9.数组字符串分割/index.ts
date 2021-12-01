type JoinStrArray<Arr, Separator extends string, Result extends string = ""> = (
  Arr extends [infer L, ...infer R] ? L extends string ? JoinStrArray<R, Separator, `${Result}${Result extends '' ? '' : Separator}${L}`> : never : Result
)

// 测试用例
  type Names = ["Sem", "Lolo", "Kaquko"]
type NamesComma = JoinStrArray<Names, ","> // "Sem,Lolo,Kaquko"
type NamesSpace = JoinStrArray<Names, " "> // "Sem Lolo Kaquko"
type NamesStars = JoinStrArray<Names, "⭐️"> // "Sem⭐️Lolo⭐️Kaquko"
