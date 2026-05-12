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

import { Fragment } from "react/jsx-runtime";

export function App() {
    console.log("Renderizando o componente App");
    return (
        <Fragment>
            <h1>Olá Mundo!</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                minus ullam recusandae explicabo rerum quae ab veritatis ipsa
                omnis, nam illo dolorum perspiciatis inventore itaque
                necessitatibus obcaecati aperiam aperiam.
            </p>
        </Fragment>
    );
}
