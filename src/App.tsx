import Header from "./components/header/Header";
import Main from "./components/main/Main";
import RecentlyAdded from "./components/recentlyAdded/RecentlyAdded";
import Search from "./components/search/Search";

const App = () => {
  return (
    <div className="main">
      <Header />
      <Main />
      <Search />
      <RecentlyAdded />
    </div>
  );
};

export default App;
