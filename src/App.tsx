import TopCategories from "./components/Categories/TopCategories";
import Feedback from "./components/feedback/Feedback";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import RecentlyAdded from "./components/recentlyAdded/RecentlyAdded";
import Search from "./components/search/Search";
import Subscribe from "./components/Subscribe/Subscribe";

const App = () => {
  return (
    <div className="main">
      <Header />
      <Main />
      <Search />
      <RecentlyAdded />
      <TopCategories />
      <Feedback />
      <Subscribe />
    </div>
  );
};

export default App;
