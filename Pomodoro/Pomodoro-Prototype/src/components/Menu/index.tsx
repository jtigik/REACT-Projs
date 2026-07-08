import { HistoryIcon, MoonIcon, SettingsIcon, SunIcon, TimerIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import style from "./styles.module.css";

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = (localStorage.getItem("theme") as AvailableThemes) || "dark"; 
        //Recuperar o tema do localStorage, se existir. Senão, usar o tema padrão "dark"
        return storageTheme;
    });

    const nextThemeIcon = {//Objeto que mapeia o tema atual para o ícone do próximo tema
        dark: <SunIcon />,
        light: <MoonIcon />,
    }

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) {
        event.preventDefault(); //Não seguir o link clicado

        setTheme(prevTheme => {
            const nextTheme = prevTheme === "dark" ? "light" : "dark";
            return nextTheme;
        });
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme); //Salvar o tema no localStorage para persistir entre sessões

    }, [theme]);

    return (
        <nav className={style.menu}>
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
                {nextThemeIcon[theme]}
            </a>
        </nav>
    );
}
