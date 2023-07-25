import axios from 'axios'
import { useState } from 'react'
import Header from '../components/Header'
import { toast } from 'react-hot-toast'

function Register() {

    const [name, setName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()

    const handleClick = () => {
        axios.post('http://localhost:3403/register', {
            name: name,
            email: email,
            password: password,
        }).then((response) => {
            if (response.data.verify) {
                toast.success(`${name}, sua conta foi registrada`)
            }
        }).catch((err) => {
            console.log(err)
            toast.error(`Erro ao registrar sua conta`)
        }) 
    };

    const handleChangeName = (e: string) => {
        setName(e)
    }

    const handleChangeEmail = (e: string) => {
        setEmail(e)
    }

    const handleChangePassword = (e: string) => {
        setPassword(e)
    }

return (
    <div>
        <div className="text-center">
        <Header />
            <h1 className="mb-12 mt-12">Registre-se Inserindo os dados solicitados!</h1>
        </div>
            <div className="text-center">
                <input type="text" className="border border-black mb-6" placeholder='Digite seu Nome Completo:' onChange={({target:{value}}) => {handleChangeName(value)}}/> Nome
                <br />
                <input type="text" className="border border-black mb-6" placeholder='Digite seu E-mail:' onChange={({target: {value}}) => {handleChangeEmail(value)}}/> E-mail
                <br />
                <input type="password" className="border border-black mb-6" placeholder='Digite sua Senha:' onChange={({target: {value}}) => {handleChangePassword(value)}}/> Senha
                <br />
                <button className='border border-black p-4' onClick={handleClick}>Registrar</button>
            </div>
    </div>
)
}

export default Register