import css from "./dot.module.css";
import {CSSProperties} from "react";

export default function Dot({ color, style }: { color: string, style?: CSSProperties }) {
    return <span
        className={css.dot}
        style={{ backgroundColor: color, ...style, marginRight: "0.3em", marginTop: "-0.2em", }}/>
}
