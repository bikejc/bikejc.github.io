import {LL, Param, ParsedParam} from "next-utils/params";
import {Actions} from "next-utils/use-set";
import {entries} from "next-utils/objs";

export type HideLevel = "None" | "Unpinned" | "All"

export function hideLevelParam(props?: { None?: string, Unpinned?: string, All?: string, }): Param<HideLevel> {
    props = props || {}
    const None = ('None' in props) ? props.None : undefined
    const Unpinned = ('Unpinned' in props) ? props.Unpinned : ''
    const All = ('All' in props) ? props.All : '1'
    // const { None = undefined, Unpinned = '', All = '1', } = props
    const entries = [ ['None', None], ['Unpinned', Unpinned], ['All', All], ]
    // const newProps = { None, Unpinned, All, }
    // console.log(newProps)
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
    ll: Param<LL>
    z: Param<number>
    h: Param<HideLevel>
    r: Param<string[], Actions<string>>
    R: Param<HideLevel>
    s: Param<string[], Actions<string>>
    S: Param<HideLevel>
    T: Param<boolean>
    draw: Param<boolean>
}

export type ParsedParams = {
    ll: ParsedParam<LL>
    z: ParsedParam<number>
    h: ParsedParam<HideLevel>
    r: [ string[], Actions<string> ]
    R: ParsedParam<HideLevel>
    s: [ string[], Actions<string> ]
    S: ParsedParam<HideLevel>
    T: ParsedParam<boolean>
    draw: ParsedParam<boolean>
}
