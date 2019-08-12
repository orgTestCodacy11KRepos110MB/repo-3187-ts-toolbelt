import {Omit} from './Omit'

type _Merge<O extends object, O1 extends object> = {
    [K in keyof (O & O1)]: K extends keyof O1
                         ? O1[K]
                         : K extends keyof O
                           ? O[K]
                           : never
}

/** Complete the fields of **`O`** with the ones of **`O1`**
 * @param O to complete
 * @param O1 to copy from
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type Merge<O extends object, O1 extends object> =
    _Merge<O, Omit<O1, keyof O>>
    // We make sure keys do NOT overlap
    // Otherwise we'd loose field meta
