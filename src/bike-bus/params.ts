import {LL, Param, ParsedParam} from "next-utils/params";
import {Actions} from "next-utils/use-set";

export type Params = {
    ll: Param<LL>
    z: Param<number>
    h: Param<boolean>
    H: Param<boolean>
    r: Param<string[], Actions<string>>
    R: Param<boolean>
    s: Param<string[], Actions<string>>
    S: Param<boolean>
    T: Param<boolean>
    draw: Param<boolean>
}

export type ParsedParams = {
    ll: ParsedParam<LL>
    z: ParsedParam<number>
    h: ParsedParam<boolean>
    H: ParsedParam<boolean>
    r: [ string[], Actions<string> ]
    R: ParsedParam<boolean>
    s: [ string[], Actions<string> ]
    S: ParsedParam<boolean>
    T: ParsedParam<boolean>
    draw: ParsedParam<boolean>
}
