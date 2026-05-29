import { Link } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";

export const Categories = ({ posts }) => {

    const getCategoryIcon = (tag) => {

  const value = tag.toLowerCase();

  if (value.includes("ai") || value.includes("llm") || value.includes("gemini") || value.includes("claude")) return "🤖";

  if (value.includes("cloud") || value.includes("aws") || value.includes("azure") || value.includes("google")) return "☁️";

  if (value.includes("javascript") || value.includes("typescript")) return "⚡";

  if (value.includes("python")) return "🐍";

  if (value.includes("node")) return "🟢";

  if (value.includes("go")) return "🐹";

  if (value.includes("html")) return "📄";

  if (value.includes("web")) return "🌐";

  if (value.includes("mobile") || value.includes("android")) return "📱";

  if (value.includes("security")) return "🔒";

  if (value.includes("sql") || value.includes("data")) return "🗄️";

  if (value.includes("performance") || value.includes("benchmark")) return "📊";

  if (value.includes("cli")) return "⌨️";

  if (value.includes("career") || value.includes("learning") || value.includes("beginners")) return "🎓";

  if (value.includes("opensource")) return "🌍";

  if (value.includes("kubernetes")) return "☸️";

  if (value.includes("forms")) return "📝";

  if (value.includes("challenge") || value.includes("hackathon")) return "🏆";

  return "📚";
};

  const allTags = posts.flatMap(post => post.tag_list);
  const uniqueTags = [...new Set(allTags)];

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">

      <Navbar />

      {/* Header */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 pt-12 pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-orange-600 mb-2">
          Browse Topics
        </p>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">

          <div>
            <h1
              className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Categories
            </h1>

            <div className="w-12 h-0.5 bg-orange-600 rounded-full mt-4" />
          </div>

          <p className="text-sm text-gray-400">
            {uniqueTags.length} topics · {posts.length} articles
          </p>

        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 pb-16">

        <section>

          <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400 mb-4">
            All topics
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

            {uniqueTags.map((tag, i) => (

              <Link
                to={`/categories/${tag.toLowerCase()}`}
                key={i}
                className="bg-white border border-gray-100 rounded-xl px-4 py-4 flex items-center justify-between hover:border-orange-200 hover:bg-orange-50 transition-all duration-200 no-underline group"
              >

                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {getCategoryIcon(tag)}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-800 group-hover:text-orange-700 transition-colors">
                      {tag}
                    </p>

                    <p className="text-xs text-gray-400">
                      Category
                    </p>
                  </div>

                </div>

                <span className="text-gray-400 group-hover:text-gray-700 transition-colors text-sm">
                  →
                </span>

              </Link>

            ))}

          </div>

        </section>

      </div>

      {/* Footer */}
      <footer className="mt-auto text-center py-6 border-t border-gray-100 text-xs text-gray-300">
        RP<span className="text-orange-400">.</span> — Developer Blog
      </footer>

    </div>
  );
};