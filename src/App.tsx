import style from "./App.module.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <div className={style.appbody}>
      <div style={{ width: "15%", height: "100%" }}>
        <Navbar />
      </div>
      <div style={{ width: "85%", height: "100vh", overflowY: "auto" }}>
        <Main />
      </div>
    </div>
  );
};

export default App;
