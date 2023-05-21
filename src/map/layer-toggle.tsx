import {ChangeEvent, Dispatch} from "react";

export type Button = {
    label: string
    title?: string
    active: boolean
    setActive: Dispatch<boolean>
    disabled?: boolean
}

export type Props = {
    label?: string
    title?: string
    buttons: Button[]
}

export function LayerToggle({ label, title, buttons }: Props) {
    return <li key={"Schools"}>
        {label && <span title={title} style={{ display: "inline", fontSize: "1.2em", }}>{label}:</span>}
        {" "}
        {
            buttons.map(
                ({ label, title, active, setActive, disabled }) => {
                    const opacity = active ? 1 : 0.4
                    return <label key={label} title={title} style={{display: "inline", opacity, }}>
                        <input
                            type={"checkbox"}
                            disabled={disabled}
                            style={{ display: "none", }}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                const checked = e.target.checked
                                if (checked === active) {
                                    console.error(`layer "Schools": checked ${checked} != active ${active}`)
                                }
                                setActive(!active)
                            }}
                            checked={active}
                        />
                        {label}
                    </label>
                }
            )
        }
        {/*<span>{"ℹ️"}</span>*/}
    </li>
}
