import {LL, Param, ParsedParam} from "next-utils/params";

export type Params = {
    ll: Param<LL>
    z: Param<number>
    h: Param<boolean>
    r: Param<string[] | undefined>
    R: Param<string[] | undefined>
    s: Param<string[] | undefined>
    S: Param<boolean>
    draw: Param<boolean>
}

export type ParsedParams = {
    ll: ParsedParam<LL>
    z: ParsedParam<number>
    h: ParsedParam<boolean>
    r: ParsedParam<string[] | undefined>
    R: ParsedParam<string[] | undefined>
    s: ParsedParam<string[] | undefined>
    S: ParsedParam<boolean>
    draw: ParsedParam<boolean>
}
