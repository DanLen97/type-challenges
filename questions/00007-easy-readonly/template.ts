type MyReadonly<T extends {}> = {
  readonly [K in keyof T]: T[K];
}
