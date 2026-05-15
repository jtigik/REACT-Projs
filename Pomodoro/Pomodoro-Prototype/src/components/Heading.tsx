import style from "./Heading.module.css";

export function Heading(props) {
    console.log(props);
    return (
        <h1 className={`${style.heading} ${style.paragraph}`}>
            {props.children}
        </h1>
    );
}
