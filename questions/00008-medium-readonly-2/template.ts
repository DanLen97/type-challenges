type MyReadonly2<T, K = keyof T> = {
  [X in keyof T as X extends K ? never : X]: T[X]
} & {
  readonly [X in keyof T as X extends K ? X : never]: T[X]
}
