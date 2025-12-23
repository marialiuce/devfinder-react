import { useState } from 'react'
import { Search } from './components/Search'
import { UserCard } from './components/UserCard'
import { Repo } from './components/Repo'

function App() {
  const [userData, setUserData] = useState(null)
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const loadUser = async (userName) => {
    setIsLoading(true)
    setError(false)
    setUserData(null)
    setRepos([])

    try {
      const res = await fetch(`https://api.github.com/users/${userName}`)
      const data = await res.json()

      if (res.status === 404) {
        setError(true)
        return
      }

      const { avatar_url, login, name, location, followers, following } = data
      
      const userData = {
        avatar_url,
        login,
        name,
        location,
        followers,
        following,
      }

      setUserData(userData)

      const reposRes = await fetch(`https://api.github.com/users/${userName}/repos?sort=created&per_page=50`)
      const reposData = await reposRes.json()

      const bestRepos = reposData
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 5)

      setRepos(bestRepos)

    } catch (err) {
      console.log(err)
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-gray-100 p-4">
      <div className="w-full max-w-lg flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-center mb-4">DevFinder</h1>
        
        <Search loadUser={loadUser} />

        {isLoading && <p className="text-center text-lg">Carregando...</p>}
        {error && <p className="text-center text-red-400">Usuário não encontrado!</p>}
        
        {userData && (
          <>
            <UserCard user={userData} />
            
            {repos.length > 0 && (
              <div className="flex flex-col gap-4 mt-4">
                <h3 className="text-xl font-bold text-center">Melhores Repositórios</h3>
                {repos.map((repo) => (
                  <Repo key={repo.id} repo={repo} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default App

