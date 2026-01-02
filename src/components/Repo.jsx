import { BsCodeSlash } from 'react-icons/bs'
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai' 
import { RiGitRepositoryLine } from 'react-icons/ri'

export const Repo = ({ repo }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-xl flex flex-col gap-4 border border-slate-700 hover:border-blue-500 transition duration-300">
        <h3 className="text-lg font-bold text-white">{repo.name}</h3>
        
        <p className="flex items-center gap-2 text-sm text-gray-400">
            <BsCodeSlash className="text-blue-500" /> 
            <span>{repo.language || "No language"}</span>
        </p>
        
        <div className="flex gap-4">
            <div className="flex items-center gap-1 bg-slate-900 px-2 py-1 rounded text-sm text-yellow-500">
                <AiOutlineStar />
                <span>{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-1 bg-slate-900 px-2 py-1 rounded text-sm text-gray-300">
                <AiOutlineFork />
                <span>{repo.forks_count}</span>
            </div>
        </div>
        
        <a 
            href={repo.html_url} 
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-700 text-white py-2 rounded-lg border border-slate-700 transition"
        >
            <span>View Code</span>
            <RiGitRepositoryLine /> 
        </a>
    </div>
  )
}