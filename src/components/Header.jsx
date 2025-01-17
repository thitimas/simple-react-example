const Header = ({ title, instructions }) => {
    return (
      <header>
        <h1>{title}</h1>
        <p className="instructions">{instructions}</p>
      </header>
    );
  };
  
  export default Header;
  