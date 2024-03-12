import "./leaut.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

function MainLayout({ children }) {
  const search = useRef();
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
     if(search.current.value){
      
     }
    }
  };
  return (
    <div className="layout">
      <div className="sied-bar">
        <div className="col">
          <div className="logo">
            <img src="/logo.png" alt="logo" />
          </div>
          <div className="icons">
            <Link to="/">
              {" "}
              <img src="/hom.png" alt="home icon" />
            </Link>
            <Link to="/movis">
              {" "}
              <img src="/Shape.png" alt="home icon" />
            </Link>
            <Link to="/seris">
              <img src="/tv.png" alt="home icon" />
            </Link>
            <img src="/Book.png" alt="home icon" />
          </div>
        </div>
        <div className="user">
          <img src="/user.png" alt="" />
        </div>
      </div>
      <main>
        <header>
          <div className="search">
            <img src="/search.png" alt="search-icon" />
            <input
              ref={search}
              onKeyDown={handleKeyDown}
              type="text"
              placeholder="Search for movies or TV series"
            />
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
