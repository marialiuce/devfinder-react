export const UserCard = ({ user }) => {
  return (
    <div className="bg-slate-800 p-8 rounded-2xl flex flex-col items-center gap-4 shadow-lg border border-slate-700 w-full">
      <img 
        src={user.avatar_url} 
        alt={user.name} 
        className="w-32 h-32 rounded-full border-4 border-blue-500"
      />
      
      <div className="text-center">
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p className="text-gray-400 text-sm">@{user.login}</p>
        {user.location && <p className="text-blue-400 mt-2 text-sm">{user.location}</p>}
      </div>

      <div className="flex justify-around w-full mt-4 bg-slate-900 p-4 rounded-xl border border-slate-700">
          <div className="flex flex-col items-center">
              <p className="text-xs text-gray-400 uppercase">Seguidores</p>
              <p className="text-xl font-bold">{user.followers}</p>
          </div>
          <div className="flex flex-col items-center">
              <p className="text-xs text-gray-400 uppercase">Seguindo</p>
              <p className="text-xl font-bold">{user.following}</p>
          </div>
      </div>
    </div>
  )
}