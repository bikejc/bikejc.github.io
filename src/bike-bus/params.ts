import {LL, Param, ParsedParam} from "next-utils/params";

export type Params = {
    ll: Param<LL>
    z: Param<number>
    draw: Param<boolean>
}

export type ParsedParams = {
    ll: ParsedParam<LL>
    z: ParsedParam<number>
    draw: ParsedParam<boolean>
}
