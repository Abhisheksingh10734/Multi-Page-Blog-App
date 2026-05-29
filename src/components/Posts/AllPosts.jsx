import {Link} from "react-router-dom"

export const AllPosts = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto px-8 pb-16">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((post, idx) => (
          <div
            key={idx + 1}
            className="bg-white border border-gray-100 rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 hover:border-gray-200 transition-all duration-300 cursor-pointer border-2 border-black"
          >

            {/* Cover image */}
            <div className="w-full h-48 overflow-hidden bg-gray-100 flex-shrink-0">
              {post.cover_image
                ? (
                  <img
                    src={post.cover_image}
                    alt=""
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                )
                : (
                  <div className="w-full h-full bg-orange-50 flex items-center justify-center text-orange-300 text-4xl">
                    ✦
                  </div>
                )
              }
            </div>

            {/* Body */}
            <div className="p-5 flex flex-col flex-1 gap-3">

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {(post.tag_list || []).slice(0, 3).map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-medium uppercase tracking-wider text-orange-800 bg-orange-50 px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2
                className="text-base font-bold leading-snug text-gray-900 line-clamp-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {post.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1">
                {post.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-auto">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[11px] text-gray-400">{post.readable_publish_date}</span>
                  <span className="text-[11px] text-gray-400">⏱ {post.reading_time_minutes} min read</span>
                </div>

                <Link
                  to={`/post/${idx + 1}`}
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-gray-900 text-white text-xs font-medium tracking-wider px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors no-underline"
                >
                  Read →
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};