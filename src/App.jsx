import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { AllPosts } from "./components/Posts/AllPosts";
import { PostHead } from "./components/Posts/PostHead/PostHead";
import { PostDetails } from "./components/PostDetails";
import useFetch from "./useFetch.jsx";
import { NotFound } from "./NotFound.jsx";
import { Categories } from "./Categories.jsx";
import { CategoryPosts } from "./CategoryPosts.jsx";

const App = () => {

  const { posts, isLoading, error } = useFetch(
    "https://dev.to/api/articles"
  );

  if (isLoading) {
    return <h1 className="text-2xl font-bold fixed top-[50%] left-[45%]">Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">


      <Routes>
        <Route
          path="/"
          element={
            <>
            <Navbar />
              <PostHead />
              <AllPosts data={posts} />
            </>
          }
        />

        <Route
          path="/categories/:tag"
          element={
            <>
            <Navbar />
              <PostHead />
              <CategoryPosts data={posts} />
            </>
          }
        />

        <Route
          path="/post/:id"
          element={
            <>
            <Navbar />
          <PostDetails posts={posts}/>
          </>
         }
        />

        <Route
          path="*"
          element={<NotFound />}
        />

        <Route
          path="/categories"
          element={<Categories posts={posts} />}
        />
      </Routes>

    </div>
  );
};

export default App;