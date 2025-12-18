export const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.login}</p>
      <p>{user.location}</p>
      <div className="stats">
          <div>
              <p>Seguidores:</p>
              <p>{user.followers}</p>
          </div>
          <div>
              <p>Seguindo:</p>
              <p>{user.following}</p>
          </div>
      </div>
    </div>
  )
}