import {BB, Param, ParsedParam} from "next-utils/params";
import {OptActions} from "next-utils/use-set";
import {entries, fromEntries, o2a} from "../../../../next-utils/dist/objs";
import {Dispatch, useCallback, useMemo, useState} from "react";

export type HideLevel = "None" | "Unpinned" | "All"

export function hideLevelParam(props?: { None?: string, Unpinned?: string, All?: string, }): Param<HideLevel> {
    props = props || {}
    const None = ('None' in props) ? props.None : undefined
    const Unpinned = ('Unpinned' in props) ? props.Unpinned : ''
    const All = ('All' in props) ? props.All : '1'
    const entries = [ ['None', None], ['Unpinned', Unpinned], ['All', All], ]
    const decodeObj = {} as { [encoded: string]: HideLevel }
    const undefineds = [] as HideLevel[]
    entries.forEach(([level, encoded]) => {
        if (encoded === undefined) {
            undefineds.push(level as HideLevel)
        } else {
            decodeObj[encoded] = level as HideLevel
        }
    })
    if (undefineds.length != 1) {
        throw new Error(`Invalid hideLevelParam props: ${JSON.stringify(props)}, ${JSON.stringify(entries)}`)
    }
    const [ undefinedLevel ] = undefineds
    return {
        encode(t: HideLevel): string | undefined {
            return { None, Unpinned, All }[t]
        },
        decode(v: string | undefined): HideLevel {
            return (v === undefined) ? undefinedLevel : decodeObj[v]
        },
    }
}


export type CaseStrings = { [k: string]: boolean } | null
export type CaseStringsActions = {
    set: Dispatch<CaseStrings>
    update: (e: string, v: boolean | undefined) => void
}
export function useCaseStrings(init: CaseStrings): [ CaseStrings, CaseStringsActions ] {
    const [ obj, setObj ] = useState(init)
    const actions = useMemo(
        () => {
            console.log("recomputing obj actions")
            return {
                update: (e: string, v: boolean | undefined) => {
                    const newObj = {...(obj || {})}
                    let changed = false
                    if (v === undefined) {
                        if (e in newObj) {
                            delete newObj[e]
                            changed = true
                        }
                    } else {
                        newObj[e] = v
                        changed = true
                    }
                    if (changed) {
                        if (entries(newObj).length) {
                            console.log("setObj:", newObj, obj, obj === newObj)
                            setObj(newObj)
                        } else {
                            console.log("setObj:", null)
                            setObj(null)
                        }
                    }
                    console.log("update:", e, v, obj, newObj, changed)
                },
                set: (cs: CaseStrings) => {
                    console.log("useCallback setObj:", cs)
                    setObj(cs)
                }
            }
        },
        [ obj, setObj ]
    )
    return [ init, actions ]
}
export function caseStringsParam(): Param<CaseStrings, CaseStringsActions> {
    const delimiter = ' '
    return {
        encode(t: CaseStrings): string | undefined {
            if (t === null) {
                console.log("encoded:", t, undefined)
                return undefined
            }
            const encoded = o2a<string, boolean, string>(t, (e, bool) => {
                const lower = e.toLowerCase()
                const upper = e.toUpperCase()
                if (lower == upper) {
                    throw new Error(`Ambiguous-cased encode: ${e} (${JSON.stringify(t)})`)
                }
                return bool ? upper : lower
            }).join(delimiter)
            console.log("encoded:", t, encoded)
            return encoded
        },
        decode(s: string | undefined): CaseStrings {
            if (s === undefined) {
                console.log("decoded:", s, null)
                return null
            }
            const decoded = fromEntries(
                s.split(delimiter).map(e => {
                    const lower = e.toLowerCase()
                    const upper = e.toUpperCase()
                    if (lower == upper) {
                        console.warn(`Parsing ambiguous-cased string: ${e} (${s})`)
                    }
                    return [ lower, !!e.match(/[A-Z]/) ]
                })
            )
            console.log("decoded:", s, decoded)
            return decoded
        },
        use: useCaseStrings,
    }
}

export type Params = {
    bb: Param<BB>
    h: Param<HideLevel>
    r: Param<CaseStrings, CaseStringsActions>
    R: Param<HideLevel>
    s: Param<string[] | null, OptActions<string>>
    S: Param<HideLevel>
    t: Param<boolean>
    draw: Param<boolean>
}

export type ParsedParams = {
    bb: ParsedParam<BB>
    h: ParsedParam<HideLevel>
    r: [ CaseStrings, CaseStringsActions ]
    R: ParsedParam<HideLevel>
    s: [ string[] | null, OptActions<string> ]
    S: ParsedParam<HideLevel>
    t: ParsedParam<boolean>
    draw: ParsedParam<boolean>
}
