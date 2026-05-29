import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { AllPosts } from "./components/Posts/AllPosts";
import { PostHead } from "./components/Posts/PostHead/PostHead";
import { PostDetails } from "./components/PostDetails";
import useFetch from "./useFetch.jsx";

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

      <Navbar />
      <PostHead />

      <Routes>
        <Route path="/" element={<AllPosts data={posts} />} />

        <Route
          path="/post/:id"
          element={<PostDetails posts={posts} />}
        />

        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", padding: "50px" }}>
              <h2>404 — Page nahi mila! 😅</h2>
            </div>
          }
        />
      </Routes>

    </div>
  );
};

export default App;