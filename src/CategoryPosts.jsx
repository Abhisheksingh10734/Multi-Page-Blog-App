import { Link, useParams } from "react-router-dom";

const getTagColor = (tag) => {

  const value = tag.toLowerCase();

  if (value.includes("ai") || value.includes("llm") || value.includes("gemini") || value.includes("claude")) {
    return "bg-violet-50 text-violet-700 border border-violet-100";
  }

  if (value.includes("cloud") || value.includes("aws") || value.includes("azure") || value.includes("google")) {
    return "bg-sky-50 text-sky-700 border border-sky-100";
  }

  if (value.includes("javascript") || value.includes("typescript")) {
    return "bg-yellow-50 text-yellow-700 border border-yellow-100";
  }

  if (value.includes("python")) {
    return "bg-emerald-50 text-emerald-700 border border-emerald-100";
  }

  if (value.includes("node")) {
    return "bg-green-50 text-green-700 border border-green-100";
  }

  if (value.includes("web") || value.includes("html")) {
    return "bg-cyan-50 text-cyan-700 border border-cyan-100";
  }

  if (value.includes("mobile") || value.includes("android")) {
    return "bg-pink-50 text-pink-700 border border-pink-100";
  }

  return "bg-orange-50 text-orange-700 border border-orange-100";
};

export const CategoryPosts = ({ data }) => {

  const { tag } = useParams();

  const filteredPosts = data.filter(post =>
    (post.tag_list || []).some(
      item => item.toLowerCase() === tag.toLowerCase()
    )
  );

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">

      {/* Header */}
      <div className="mb-10 flex flex-col gap-3">

        <p className="text-xs font-medium uppercase tracking-[0.2em] text-orange-600">
          Category
        </p>

        <div className="flex items-center justify-between flex-wrap gap-4">

          <div>

            <h1
              className="text-4xl sm:text-5xl font-bold text-gray-900 capitalize"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {tag}
            </h1>

            <div className="w-14 h-0.5 bg-orange-600 rounded-full mt-4" />

          </div>

          <p className="text-sm text-gray-400">
            {filteredPosts.length} articles found
          </p>

        </div>

      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (

        <div className="bg-white border border-gray-100 rounded-3xl py-24 px-6 text-center">

          <div className="text-6xl mb-5">
            📭
          </div>

          <h2
            className="text-2xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            No articles found
          </h2>

          <p className="text-gray-500 text-sm mb-8">
            There are no posts available in this category yet.
          </p>

          <Link
            to="/categories"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-orange-600 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-xl transition-all no-underline"
          >
            Browse Categories
          </Link>

        </div>

      )}

      {/* Posts */}
      {filteredPosts.length > 0 && (

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">

          {filteredPosts.map((post) => (

            <article
              key={post.id}
              className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:border-orange-200 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >

              {/* Cover */}
              <div className="relative w-full h-56 overflow-hidden bg-gray-100">

                {post.cover_image ? (

                  <img
                    src={post.cover_image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                ) : (

                  <div className="w-full h-full bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center text-6xl text-orange-300">
                    ✦
                  </div>

                )}

                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full">
                  {post.reading_time_minutes} min read
                </div>

              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">

                  {(post.tag_list || []).slice(0, 3).map((item, i) => (

                    <Link
                      key={i}
                      to={`/categories/${item.toLowerCase()}`}
                      className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full no-underline transition-all hover:scale-105 ${getTagColor(item)}`}
                    >
                      {item}
                    </Link>

                  ))}

                </div>

                {/* Title */}
                <h2
                  className="text-xl font-bold leading-snug text-gray-900 line-clamp-2 mb-3 group-hover:text-orange-700 transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1">
                  {post.description || "No description available for this article."}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-5 mt-6 border-t border-gray-100">

                  <div className="flex flex-col">

                    <span className="text-xs font-medium text-gray-700">
                      {post.user?.name || "Unknown author"}
                    </span>

                    <span className="text-[11px] text-gray-400">
                      {post.readable_publish_date}
                    </span>

                  </div>

                  <Link
                    to={`/post/${post.id}`}
                    className="inline-flex items-center gap-2 bg-gray-900 hover:bg-orange-600 text-white text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded-xl transition-all duration-300 no-underline"
                  >
                    Read Article
                    <span>→</span>
                  </Link>

                </div>

              </div>

            </article>

          ))}

        </div>

      )}

    </div>
  );
};