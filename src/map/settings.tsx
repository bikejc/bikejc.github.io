import {CaseStringsActions, HideLevel} from "../bike-bus/params"
import {Dispatch} from "react"
import {OptActions} from "next-utils/use-set"

export const HideLevelButton = ({ type, hideLevel, setHideLevel, enableUnpinned }: Buttons) => ({
    id: hideLevel,
    states: [
        { label: "👁️", id: "None", title: `Show all ${type}s`, activate: () => setHideLevel("None"), },
        ...(enableUnpinned ? [
            { label: "👁️", id: "Unpinned", title: `Show pinned ${type}s only`, style: { opacity: 0.6 }, activate: () => setHideLevel("Unpinned"), }
        ] : []),
        { label: "👁️", id: "All", title: `Hide all ${type}s`, style: { opacity: 0.3 }, activate: () => setHideLevel("All"), },
    ]
})

export const ResetButton = ({ type, setHideLevel, actions }: Buttons) => ({
    id: "reset",
    states: [{
        label: "♻️", id: "reset", title: `Reset ${type}s display`,
        activate: () => {
            setHideLevel('None')
            actions.reset()
        }
    }]
})

export type Buttons = {
    type: string
    hideLevel: HideLevel
    setHideLevel: Dispatch<HideLevel>
    actions: OptActions<string> | CaseStringsActions
    enableUnpinned: boolean
}

export const Buttons = (props: Buttons) => [ HideLevelButton(props), ResetButton(props) ]
