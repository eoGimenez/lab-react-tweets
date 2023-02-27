function User(user) {
  let {name, handle} = user.user
  return (
  <span className="user">
    <span className="name">{name}</span>
    <span className="handle">{"@"+handle}</span>
  </span>
  )
}

export default User;
