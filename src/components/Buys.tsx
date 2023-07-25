import SideBar from "./SideBar"
import { useState } from "react"
import axios from "axios"

function Buys() {

    const [clientName, setClientName] = useState<string>('Cliente X')
    const [flux, setFlux] = useState<number>(0)
    const [row, setRows] = useState<any>([])
    const [date, setDate] = useState<string>();
    const [value, setValue] = useState<number>();
    const [product, setProduct] = useState<string>();
    const [desc, setDesc] = useState<string>();

    const today = new Date();

    const setActDate = (_row: any) => {

        const actMonth = today.getMonth()
        const actDate = today.getDate()
        const actYear = today.getFullYear()

        setDate(`${actDate}/${actMonth}/${actYear}`)

    }
    
    const handleChangeValue = (e: number) => {
        setValue(e)
    }
    
    const handleChangeProduct = (e: string) => {
        setProduct(e)
    }
    
    const handleChangeDesc = (e: string) => {
        setDesc(e)
    }
    
    const totalFlux = (row: any) => {
        setFlux(flux + row.value)
    }

    const addRow = () => {
        const newRow = {
            value: value,
            product: product,
            desc: desc,
        }
        setRows([...row, newRow])
        totalFlux(newRow)
        setActDate(newRow)
        postBuys()
    };

    const postBuys = () => {
        axios.post('http://localhost:3403/buys', {
            product: product,
            value: value,
            desc: desc,
            date: date,
        }).then(response => console.log(response.data))
        .catch(error => console.log(error))
    }

return (
    <div>
        <div>
            <SideBar />
        </div>
        <div className="bg-[url('https://images.unsplash.com/reserve/JjdWbOCTlemWMuvC0BeF_DSC_0867edit.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80')] h-screen w-72 absolute inset-y-0 right-0">
        </div>
        <div className="ml-72 mr-72">
            <p className="text-3xl text-center">Aqui você ira organizar tudo que você comprou recentemente.</p>
            <div className="grid grid-cols-2">
            <div className="ml-8 mt-12">
                <p>Valor</p> <input type="number" placeholder="Valor da Compra" onChange={({target: {value}}) => {handleChangeValue(parseInt(value))}} className="border-solid border-black border" />
                <br />
                <p>Produto</p> <input type="text" placeholder="Produto Comprado" onChange={({target: {value}}) => {handleChangeProduct(value)}} className="border-solid border-black border" />
                <br />
                <p>Descrição</p> <input type="text" placeholder="Especificações" onChange={({target: {value}}) => {handleChangeDesc(value)}} className="border-solid border-black border" />
                <br />
                <button onClick={addRow}>Registrar Fluxo</button>
            </div>
            <div className="mt-12">
                <div className="flex text-xl">
                <p>Cliente:</p> <p className="bg-blue-100 ml-4">{`${clientName}`}</p>
                </div>
                <br />
                <div className="flex text-xl">
                <p>Saídas:</p> <p className="bg-blue-100 ml-4">{`${flux}`}</p>
                </div>
                <br />
            </div>
            </div>
            <table className="border-collapse mt-12 ml-16">
                <thead>
                    <tr>
                        <th className="border border-slate-600">
                            <p className="ml-8 mr-8">DATA</p>
                        </th>
                        <th className="border border-slate-600">
                            <p className="ml-8 mr-8">VALOR</p>
                        </th>
                        <th className="border border-slate-600">
                            <p className="ml-8 mr-8">PRODUTO</p>
                        </th>
                        <th className="border border-slate-600">
                            <p className="ml-20 mr-20">DESCRIÇÃO</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {row.length > 0 ? (
                        row.map((row: any, index: number) => {
                        return (
                            <tr key={index}>
                                <td className="border border-slate-600">{date}</td>
                                <td className="border border-slate-600">{row.value}</td>
                                <td className="border border-slate-600">{row.product}</td>
                                <td className="border border-slate-600">{row.desc}</td>
                            </tr>
                            )
                        })
                    ) : (
                        <td colSpan={4}>Nenhuma linha adicionada ainda</td>
                    )}
                </tbody>
            </table>
        </div>
    </div>
)
}

export default Buys