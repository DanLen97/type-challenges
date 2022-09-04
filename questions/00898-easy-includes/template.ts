import type { Equal } from '@type-challenges/utils'

type Includes<T extends readonly any[], U> = T extends [infer TFirst, ...infer TRest]
  ? Equal<TFirst, U> extends true
    ? true
    : Includes<TRest, U>
  : false
