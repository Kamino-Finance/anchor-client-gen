import * as FooEnum from "./FooEnum.js"

export { BarStruct } from "./BarStruct.js"
export type { BarStructFields, BarStructJSON } from "./BarStruct.js"
export { FooEnum }

/** Enum type */
export type FooEnumKind =
  | FooEnum.Unnamed
  | FooEnum.UnnamedSingle
  | FooEnum.Named
  | FooEnum.Struct
  | FooEnum.OptionStruct
  | FooEnum.VecStruct
  | FooEnum.NoFields
export type FooEnumJSON =
  | FooEnum.UnnamedJSON
  | FooEnum.UnnamedSingleJSON
  | FooEnum.NamedJSON
  | FooEnum.StructJSON
  | FooEnum.OptionStructJSON
  | FooEnum.VecStructJSON
  | FooEnum.NoFieldsJSON

export { FooStruct } from "./FooStruct.js"
export type { FooStructFields, FooStructJSON } from "./FooStruct.js"
