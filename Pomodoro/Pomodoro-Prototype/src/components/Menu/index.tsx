import { HistoryIcon, SettingsIcon, SunIcon, TimerIcon } from "lucide-react";
import React, { useState } from "react";
import style from "./styles.module.css";

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>("dark");

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) {
        event.preventDefault(); //Não seguir o link clicado

        setTheme(prevTheme => {
            const nextTheme = prevTheme === "dark" ? "light" : "dark";
            return nextTheme;
        });

        document.documentElement.setAttribute("data-theme", theme);
    }
    return (
        <nav className={style.menu}>
            <h1>{theme}</h1>
            <a 
                className={style.menuLink} 
                href='#'
                aria-label="Ir para a Home"
                title="Ir para a Home"
            >
                <TimerIcon />
            </a>
            <a
                className={style.menuLink} 
                href='#'
                aria-label="Ver histórico de tarefas"
                title="Ver histórico de tarefas"
            >
                <HistoryIcon />
            </a>
            <a 
                className={style.menuLink} 
                href='#'
                aria-label="Ver configurações"
                title="Ver configurações"
            >
                <SettingsIcon />
            </a>
            <a 
                className={style.menuLink} 
                href='#' 
                onClick={handleThemeChange}
                aria-label="Mudar tema"
                title="Mudar tema"
            >
                <SunIcon />
            </a>
        </nav>
    );
}
