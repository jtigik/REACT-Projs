type DefaultInputProps = {} & React.ComponentProps<'input'>;

export function DefaultInput({ type }: DefaultInputProps) {
    return (
        <>
            <label htmlFor="myInput">task</label>
            <input id="myInput" type={type} />
        </>
    );
}