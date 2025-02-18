import React from 'react'
import estilos from './Login.module.css';


const Login = () => {
    return (
        <main>
            <section className={estilos.sectionLogin}>
                <input className={estilos.check} type="checkbox" id="check" aria-hidden="true" />
                <div className={estilos.signup}>
                    <form action="">
                        <label for="check" aria-hidden="true">Cliente</label>
                        <input type="text" name="nome" placeholder="Nome Completo" required="" />
                        <input type="email" name="email" placeholder="Seu Email" required="" />
                        <input type="number" name="tel" placeholder="Telefone" required="" />
                        <input type="password" name="senha" placeholder="Senha" required="" />
                        <button>Entrar</button>
                    </form>
                </div>

                <div className={estilos.login}>
                    <form>
                        <label for="check" aria-hidden="true">Barbeiro</label>
                        <input type="email" name="email" placeholder="Email" required="" />
                        <input type="password" name="senha" placeholder="Password" required="" />
                        <button>Entrar</button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Login;
