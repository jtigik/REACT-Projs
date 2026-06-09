import { HistoryIcon, SettingsIcon, SunIcon, TimerIcon } from "lucide-react";
import style from "./styles.module.css";

export function Menu() {
    return (
        <nav className={style.menu}>
            <a className={style.menuLink} href='#'>
                <TimerIcon />
            </a>
            <a className={style.menuLink} href='#'>
                <HistoryIcon />
            </a>
            <a className={style.menuLink} href='#'>
                <SettingsIcon />
            </a>
            <a className={style.menuLink} href='#'>
                <SunIcon />
            </a>
        </nav>
    );
}
