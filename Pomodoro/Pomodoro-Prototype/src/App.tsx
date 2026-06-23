import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { Cycles } from "./components/Cycles";
import { DefaultInput } from "./components/DefaultInput";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

import "./styles/global.css";
import "./styles/theme.css";

export function App() {

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
                        <DefaultInput 
                            labelText="Task" 
                            id="myInput" 
                            type='text' 
                            placeholder="Enter your task"
                            /*disabled*/
                        />
                    </div>
                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="formRow">
                        <Cycles />
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
