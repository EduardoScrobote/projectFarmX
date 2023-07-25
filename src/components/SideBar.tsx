import { Link } from "react-router-dom"

function SideBar() {
    return (
            <div className="absolute bg-[url('https://images.unsplash.com/reserve/JjdWbOCTlemWMuvC0BeF_DSC_0867edit.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80')] w-72">
                <div className="h-screen flex flex-col">
                    <h1 className="mt-6 ml-4 text-4xl">Fazenda X</h1>
                    <span className="mt-12 ml-4 text-xl">Visão Geral</span>
                    <span className="mt-12 ml-4 text-xl"><Link to='/Dashboard/Buys'>Compras</Link></span>
                    <span className="mt-12 ml-4 text-xl">Vendas</span>
                    <span className="mt-12 ml-4 text-xl">Receitas Gerais</span>
                    <span className="mt-12 ml-4 text-xl">Emprestimos/Financiamentos</span>
                    <span className="mt-12 ml-4 text-xl">Despesas de RH</span>
                    <span className="mt-12 ml-4 text-xl">Estoque</span>
                    <span className="mt-12 ml-4 text-xl">Home</span>
                </div>
            </div>
    )
}

export default SideBar