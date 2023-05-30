import {CaseStringsActions, HideLevel} from "../bike-bus/params"
import {Dispatch} from "react"
import {OptActions} from "next-utils/use-set"

export type Button = {
    type: string
    setHideLevel: Dispatch<HideLevel>
}

export type HideLevelButton = Button & {
    hideLevel: HideLevel
    enableUnpinned: boolean
}
export const HideLevelButton = ({ type, hideLevel, setHideLevel, enableUnpinned }: HideLevelButton) => ({
    id: hideLevel,
    states: [
        { label: "👁️", id: "None", title: `Show all ${type}s`, activate: () => setHideLevel("None"), },
        ...(enableUnpinned ? [
            { label: "👁️", id: "Unpinned", title: `Show pinned ${type}s only`, style: { opacity: 0.6 }, activate: () => setHideLevel("Unpinned"), }
        ] : []),
        { label: "👁️", id: "All", title: `Hide all ${type}s`, style: { opacity: 0.3 }, activate: () => setHideLevel("All"), },
    ]
})

export type ResetButton = Button & {
    actions: OptActions<string> | CaseStringsActions
}
export const ResetButton = ({ type, setHideLevel, actions }: ResetButton) => ({
    id: "reset",
    states: [{
        label: "♻️", id: "reset", title: `Reset ${type}s display`,
        activate: () => {
            setHideLevel('None')
            actions.reset()
        }
    }]
})

export type Buttons = HideLevelButton & ResetButton
export const Buttons = (props: Buttons) => [ HideLevelButton(props), ResetButton(props) ]
