export function ValoresInputs ({valor, nome}:{valor:number, nome:string}){
    return(
        <>
        <div className="valorInput">
         o valor desse componente é {valor}
        </div>
        {
            nome && (
                <>
                e seu nome é: {nome}
                </>
            )
        }
    </>
    )
}
