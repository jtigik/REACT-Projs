import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

import "./styles/global.css";
import "./styles/theme.css";

export function App() {
    console.log("Renderizando o componente App");
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            <Container>
                <CountDown />
            </Container>

            <Container>
                <form className="form" action="">
                    <div className="formRow">
                        <label htmlFor="myInput">task</label>
                        <input id="myInput" name="text" />
                    </div>
                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="formRow">
                        <p>Ciclos</p>
                        <p>0 0 0 0 0 0</p>
                    </div>
                    <div className="formRow">
                        <button type="submit">Add Task</button>
                    </div>
                </form>
            </Container>

            <Container>
                <Heading>FOOTER</Heading>
            </Container>
        </>
    );
}
