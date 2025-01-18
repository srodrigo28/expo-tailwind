"use dom"

export default function Index(){
    return(
        <div className="bg-black h-screen w-screen text-white flex p-5 pt-20 justify-center">
            <form className="bg-zinc-900 p-12 h-96 rounded-md">
                <h1 className="mb-10 font-bold text-center text-2xl">Seja bem vindo </h1>
                <div className="row flex flex-col">
                    <label className="font-semibold" id="email">E-mail</label>
                    <input 
                        className="p-2 w-full rounded-md"
                        type="text" placeholder="E-mail" />
                </div>
                <div className="row flex flex-col mt-3">
                    <label className="font-semibold" id="senha">Senha</label>
                    <input 
                        className="p-2 w-full rounded-md"
                        type="password" placeholder="senha" />
                </div>
                <div className="flex justify-between mt-8">
                    <button 
                        className="w-20 px-2 py-2 bg-blue-500 text-white 
                        rounded-md hover:bg-blue-600"
                    >Entrar</button>
                    <button 
                        className="w-20 px-2 py-2 bg-green-700 text-white 
                        rounded-md hover:bg-green-500"
                    >Cadastrar</button>
                </div>
            </form>
        </div>
    )
}