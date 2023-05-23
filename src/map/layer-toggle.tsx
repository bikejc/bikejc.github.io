import {CSSProperties, useMemo} from "react"
import {fromEntries} from "next-utils/objs"

export type ButtonState = {
    id: string
    label: string
    title: string
    activate: () => void
    style?: CSSProperties
    className?: string
}
export type ButtonStateIdx = ButtonState & { idx: number }

export type Button = {
    id: string
    states: ButtonState[]
}

export function Button({ id, states }: Button) {
    const id2state = useMemo(() => fromEntries(states.map((state, idx) => [ state.id, { ...state, idx } ])), [ states ])
    const { label, idx } = useMemo(() => id2state[id], [ id, id2state ])
    const { title, style, className, activate, } = useMemo(() => states[(idx + 1) % states.length], [ idx, states ])
    return <label title={title} style={{ display: "inline", ...(style || {}), }} className={className || ''}>
        <input
            type={"button"}
            style={{ display: "none", }}
            onClick={() => activate()}
        />
        {label}
    </label>
}

export type LayerToggle = {
    label?: string
    title?: string
    buttons: Button[]
}

export function LayerToggle({ label, title, buttons }: LayerToggle) {
    return <li key={label}>
        {label && <span title={title} style={{ display: "inline", fontSize: "1.2em", }}>{label}:</span>}
        {" "}
        {buttons.map(button => <Button key={button.id} {...button} />)}
        {/*<span>{"ℹ️"}</span>*/}
    </li>
}
