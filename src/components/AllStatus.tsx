function AllStatus() {
return (
        <div className="ml-72 bg-blue-200 h-screen">
                <div className="grid grid-cols-3 gap-36 ml-20 mt-16 mb-48">
                    <div>
                        <h1>Entradas Mês:</h1>
                        <span>35000,00R$</span>
                    </div>
                    <div>
                        <h1>Saidas Mês:</h1>
                        <span>15000,00R$</span>
                    </div>
                    <div>
                        <h1>Receita Liquída Mês:</h1>
                        <span>15000,00R$</span>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-36 ml-20 mt-16 ">
                    <div className="mb-12">
                        <h1>Compras</h1>
                        <span>Ultimos Fluxos:</span>
                        <br />
                        <span>1000R$</span>
                        <br />
                        <span>1000R$</span>
                        <br />
                        <span>1000R$</span>
                </div>
                <div className="mb-12">
                        <h1>Vendas</h1>
                        <span>Ultimos Fluxos:</span>
                        <br />
                        <span>1000R$</span>
                        <br />
                        <span>1000R$</span>
                        <br />
                        <span>1000R$</span>
                </div>
                <div className="mb-12">
                        <h1>Ultimas Receitas</h1>
                        <span>Ultimos Fluxos:</span>
                        <br />
                        <span>1000R$</span>
                        <br />
                        <span>1000R$</span>
                        <br />
                        <span>1000R$</span>
                </div>
                <div className="mb-12">
                        <h1>Financiamentos</h1>
                        <span>Ultimos Fluxos:</span>
                        <br />
                        <span>1000R$</span>
                        <br />
                        <span>1000R$</span>
                        <br />
                        <span>1000R$</span>
                </div>
                <div className="mb-12">
                        <h1>Despesas de R/H</h1>
                        <span>Ultimos Fluxos:</span>
                        <br />
                        <span>1000R$</span>
                        <br />
                        <span>1000R$</span>
                        <br />
                        <span>1000R$</span>
                </div>
            </div>
    </div>
)
}

export default AllStatus