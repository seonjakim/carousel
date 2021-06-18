import '../styles/App.css'

const logoNlogin = (props) => {
  const {logo} = props;
  return (
    <nav className="nav">
      <img className="logo" src={logo} />
      <a className="loginBtn">로그인</a>
    </nav>
  )
}

export default logoNlogin;