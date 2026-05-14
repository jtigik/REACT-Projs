import style from "./Heading.module.css";

export function Heading() {
    console.log(style);
    return (
        <h1 className={`${style.heading} ${style.paragraph}`}>Olá Mundo 2!</h1>
    );
}
