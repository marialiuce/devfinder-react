import { BsCodeSlash } from 'react-icons/bs'
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai' 
import { RiGitRepositoryLine } from 'react-icons/ri'

export const Repo = ({ repo }) => {
  return (
    <div className="repo">
        <h3>{repo.name}</h3>
        <p className="language">
            <BsCodeSlash /> 
            <span>{repo.language}</span>
        </p>
        <div className="stats">
            <div className="stat">
                <AiOutlineStar />
                <span>{repo.stargazers_count}</span>
            </div>
            <div className="stat">
                <AiOutlineFork />
                <span>{repo.forks_count}</span>
            </div>
        </div>
        <a href={repo.html_url} target="_blank" className="repo-btn">
            <span>Ver Código</span>
            <RiGitRepositoryLine /> 
        </a>
    </div>
  )
}