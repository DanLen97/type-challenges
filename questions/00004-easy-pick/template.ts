type MyPick<T, K extends keyof T> = {
  [V in K]: T[V]
}
