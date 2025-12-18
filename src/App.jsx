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
    <div className="app">
      <h1>DevFinder</h1>
      
      <Search loadUser={loadUser} />

      {isLoading && <p>Carregando...</p>}
      {error && <p>Usuário não encontrado!</p>}
      
      {userData && (
        <>
          <UserCard user={userData} />
          
          {repos.length > 0 && (
            <div className="repos-container">
              {repos.map((repo) => (
                <Repo key={repo.id} repo={repo} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default App

