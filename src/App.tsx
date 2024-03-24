import TopCategories from "./components/Categories/TopCategories";
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
      <TopCategories />
    </div>
  );
};

export default App;
