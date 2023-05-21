import css from "./settings.module.scss";
import {Dispatch, ReactNode, useState} from "react";
import {useRouter} from "next/router";
import A from "next-utils/a";

export type Icon = {
    src: string
    alt: string
    href: string
    key?: string
}

export type Props = {
    icons?: Icon[]
    show?: [ boolean, Dispatch<boolean> ]
    children?: ReactNode
}

export const SettingsGear = ({ icons, show, children }: Props) => {
    const router = useRouter()
    const basePath = router.basePath
    const [ fallbackShowSettings, setFallbackShowSettings ] = useState(false)
    const [ showSettings, setShowSettings ] = show || [ fallbackShowSettings, setFallbackShowSettings ]
    const [ hoverSettings, setHoverSettings ] = useState(false)
    return (
        <div className={css.gearContainer} onMouseEnter={() => setHoverSettings(true)} onMouseLeave={() => setHoverSettings(false)}>
            <div className={css.settings}>
                <i  className={`fa fa-gear ${css.gear}`}  onClick={() => {
                    console.log(`setShowSettings(${!showSettings})`)
                    setShowSettings(!showSettings)
                    if (showSettings) {
                        setHoverSettings(false)
                    }
                }}  />
                {
                    (showSettings || hoverSettings) &&
                    <div className={css.menu}>
                        {children}
                        <div className={css.icons}>{
                            icons?.map(
                                ({ src, alt, href, key }) =>
                                    <A key={key || src} href={href}>
                                        <img alt={alt} className={css.icon} src={`${basePath}/${src}`} />
                                    </A>)
                        }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
