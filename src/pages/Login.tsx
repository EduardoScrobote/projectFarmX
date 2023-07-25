import { Link } from 'react-router-dom'
import { useState } from 'react'
import  axios  from "axios"
import { toast } from 'react-hot-toast'
import Header from '../components/Header'

function Login() {

    //! Estudar e fazer restrição de rotas

    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleChangeName = (e: string) => {
        setName(e)
    }

    const handleChangePassword = (e: string) => {
        setPassword(e)
    }

    const handleClickPost = () => {
        axios.post('http://localhost:3403/login', {
            name: name,
            password: password,
        }).then(response => {
            if (response.data.loggedIn === true) {
                window.location.href = 'http://localhost:5173/Dashboard';
            } else if (response.data.loggedIn === false) {
                toast.error('Senha ou Usuário Incorretos!')
            }
        }).catch(error => {
            console.error('Error during login:', error);
            toast.error('Senha ou Usuário Incorretos!')
        });
    };

return (
    <div>
        <Header />
        <div className="text-center mt-44">
            <p className="mb-8 text-5xl">Bem vindo ao projeto Fazenda X</p>
            <h1 className="text-xl">Digite a Baixo os seus dados de Usuário</h1>
            <div className="">
            <input type="text" placeholder="Usuário ou E-mail" onChange={({target:{ value }}) => {handleChangeName(value)}} className="border border-black h-8 mb-4 mt-12"/>
            <br />
            <input type="password" placeholder="Senha" onChange={({target: { value }}) => {handleChangePassword(value)}} className="border border-black h-8"/>
            <br />
            <button className="border border-black h-8 mt-6" onClick={handleClickPost} >Login</button>
            </div>
            <br />
            <span className="">Não possui conta ?</span>
            <br />
            <p className="mt-4">Registre-se <Link to='/login/register'>clicando aqui!</Link></p>
        </div>
    </div>
)
}

export default Login