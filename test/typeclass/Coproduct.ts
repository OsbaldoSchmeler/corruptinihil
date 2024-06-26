import * as O from "@effect/data/Option"
import * as _ from "@effect/data/typeclass/Coproduct"
import * as U from "../util"

describe.concurrent("Coproduct", () => {
  it("getMonoid", () => {
    const M = _.getMonoid(O.Alternative)<unknown, never, never, number>()
    U.deepStrictEqual(M.combine(O.none(), O.none()), O.none())
    U.deepStrictEqual(M.combine(O.some(1), O.none()), O.some(1))
    U.deepStrictEqual(M.combine(O.none(), O.some(2)), O.some(2))
    U.deepStrictEqual(M.combine(O.some(1), O.some(2)), O.some(1))

    U.deepStrictEqual(M.combine(M.empty, O.none()), O.none())
    U.deepStrictEqual(M.combine(M.empty, O.some(2)), O.some(2))
    U.deepStrictEqual(M.combine(O.some(1), M.empty), O.some(1))
  })
})
