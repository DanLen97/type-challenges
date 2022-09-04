type MyOmit<T, K extends keyof T> = {
  [X in keyof T as X extends K ? never : X]: T[X]
}

type obj = { a: 1; b: 2 }
type x = MyOmit<obj, 'b'>
