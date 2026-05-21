import style from "./Heading.module.css";

type HeadingProps = {
    children: string;
    attr1: number;
    attr2: string;
};

export function Heading(props: HeadingProps) {
    return (
        <h1 className={`${style.heading} ${style.paragraph}`}>
            {props.children}
        </h1>
    );
}
