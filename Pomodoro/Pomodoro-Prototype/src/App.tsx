/* Um componente em React é uma função ou classe que retorna um elemento React. 
Ele pode ser reutilizado em diferentes partes da aplicação, 
permitindo a construção de interfaces de usuário de forma modular e eficiente. 

Os componentes podem receber propriedades (props) para personalizar seu comportamento e aparência, 
e podem manter seu próprio estado para gerenciar dados internos. 

Eles são a base para a construção de aplicações React, 
permitindo a criação de interfaces complexas a partir de componentes simples e reutilizáveis.

Seu nome deve obedecer a convenção de começar com letra maiúscula,
para que o React possa diferenciá-lo de elementos HTML nativos. 
A esse padrão de nomenclatura, damos o nome de PascalCase. */

import { TimerIcon } from "lucide-react";
import { Heading } from "./components/Heading";
import "./styles/global.css";
import "./styles/theme.css";

export function App() {
    console.log("Renderizando o componente App");
    return (
        <>
            <Heading>
                Olá Mundo!
                <button>
                    <TimerIcon />
                </button>
            </Heading>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, debitis. Impedit aspernatur quis id incidunt iure
                exercitationem quo obcaecati, nesciunt quod magnam aperiam vel
                similique, accusantium nostrum vero doloremque possimus?
            </p>
        </>
    );
}
