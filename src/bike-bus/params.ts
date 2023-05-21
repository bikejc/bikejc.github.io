import {BB, Param, ParsedParam} from "next-utils/params";
import {OptActions} from "next-utils/use-set";

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

export type Params = {
    bb: Param<BB>
    h: Param<HideLevel>
    r: Param<string[] | null, OptActions<string>>
    R: Param<HideLevel>
    s: Param<string[] | null, OptActions<string>>
    S: Param<HideLevel>
    t: Param<boolean>
    draw: Param<boolean>
}

export type ParsedParams = {
    bb: ParsedParam<BB>
    h: ParsedParam<HideLevel>
    r: [ string[] | null, OptActions<string> ]
    R: ParsedParam<HideLevel>
    s: [ string[] | null, OptActions<string> ]
    S: ParsedParam<HideLevel>
    t: ParsedParam<boolean>
    draw: ParsedParam<boolean>
}
