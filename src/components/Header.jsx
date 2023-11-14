import Logo from "../img/logo.jpeg";

const Header = () => {
  return (
    <header>
      <img src={Logo} />
      <span>CodeCraft</span>
      <span className="creator">By shubham mishra</span>
    </header>
  );
};

export default Header;
