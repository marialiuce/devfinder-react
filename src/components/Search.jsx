import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

export const Search = ({ loadUser }) => {
  const [userName, setUserName] = useState("")

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      loadUser(userName)
    }
  }

  return (
    <div className="bg-slate-800 p-6 rounded-2xl flex flex-col items-center gap-4 shadow-lg border border-slate-700">
        <h2 className="text-xl font-semibold">Busque por um usuário:</h2>
        <p className="text-gray-400 mb-2">Conheça seus melhores repositórios</p>
        
        <div className="flex gap-2 w-full">
            <input 
                type="text" 
                placeholder="Digite o nome do usuário" 
                className="flex-1 p-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition"
                onChange={(e) => setUserName(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button 
                onClick={() => loadUser(userName)}
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition active:scale-95"
            >
                <BsSearch />
            </button>
        </div>
    </div>
  )
}