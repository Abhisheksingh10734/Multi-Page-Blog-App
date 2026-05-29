import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

export const PostDetails = ({ posts }) => {

  const { id } = useParams();

  const matchingPost = posts.find((post, idx) => idx + 1 === Number(id));

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero / Cover */}
      <div className="w-full h-72 sm:h-96 overflow-hidden bg-orange-50">
        {matchingPost?.cover_image
          ? <img src={matchingPost.cover_image} alt="" className="w-full h-full object-cover" />
          : <div className="w-full h-full flex items-center justify-center text-orange-200 text-6xl">✦</div>
        }
      </div>

      {/* Main layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 flex flex-col lg:flex-row gap-10">

        {/* ── Article ── */}
        <article className="flex-1 min-w-0">

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {(matchingPost?.tag_list || ['javascript', 'webdev', 'react']).map((t, i) => (
              <span key={i} className="text-[10px] font-medium uppercase tracking-wider text-orange-800 bg-orange-50 px-2.5 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {matchingPost?.title || 'Article Title Goes Here'}
          </h1>

          {/* Author row */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
            <img
              src={matchingPost?.user?.profile_image || 'https://api.dicebear.com/7.x/initials/svg?seed=RP'}
              alt=""
              className="w-11 h-11 rounded-full object-cover bg-orange-100"
            />
            <div>
              <p className="text-sm font-semibold text-gray-900">{matchingPost?.user?.name || 'Author Name'}</p>
              <p className="text-xs text-gray-400">{matchingPost?.readable_publish_date || 'Jan 1, 2024'}</p>
            </div>

            <div className="flex items-center gap-6 ml-auto text-xs text-gray-400">
              <span>⏱ {matchingPost?.reading_time_minutes || 5} min read</span>
              <span>💬 {matchingPost?.comments_count || 0} comments</span>
              <span>❤️ {matchingPost?.public_reactions_count || 0} reactions</span>
            </div>
          </div>

          {/* Body content placeholder */}
          <div className="prose prose-gray max-w-none space-y-4">
            <p className="text-base text-gray-600 leading-relaxed">
              {matchingPost?.description || 'Article description or intro paragraph goes here. This is where the article body content will be rendered from the API response.'}
            </p>

            {/* Placeholder content blocks */}
            {!matchingPost?.body_html && (
              <>
                <div className="h-4 bg-gray-100 rounded-full w-full" />
                <div className="h-4 bg-gray-100 rounded-full w-5/6" />
                <div className="h-4 bg-gray-100 rounded-full w-4/6" />

                <div className="bg-gray-900 rounded-xl p-5 my-6">
                  <div className="h-3 bg-gray-700 rounded w-2/3 mb-3" />
                  <div className="h-3 bg-gray-700 rounded w-1/2 mb-3" />
                  <div className="h-3 bg-gray-600 rounded w-3/4" />
                </div>

                <div className="h-4 bg-gray-100 rounded-full w-full" />
                <div className="h-4 bg-gray-100 rounded-full w-3/4" />
                <div className="h-4 bg-gray-100 rounded-full w-5/6" />
                <div className="h-4 bg-gray-100 rounded-full w-2/3" />

                <div className="border-l-4 border-orange-400 pl-5 my-6 bg-orange-50 py-4 rounded-r-xl">
                  <div className="h-3 bg-orange-100 rounded w-5/6 mb-2" />
                  <div className="h-3 bg-orange-100 rounded w-3/4" />
                </div>

                <div className="h-4 bg-gray-100 rounded-full w-full" />
                <div className="h-4 bg-gray-100 rounded-full w-4/5" />
              </>
            )}

            {/* Render actual HTML if available */}
            {matchingPost?.body_html && (
              <div dangerouslySetInnerHTML={{ __html: matchingPost.body_html }} />
            )}
          </div>

          {/* Reaction bar */}
          <div className="flex items-center gap-3 mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500 mr-2">Was this helpful?</p>
            {['❤️', '🦄', '🤯', '🙌', '🔥'].map((emoji, i) => (
              <button
                key={i}
                className="text-xl p-2 rounded-xl hover:bg-orange-50 hover:scale-110 transition-all cursor-pointer border border-transparent hover:border-orange-100"
              >
                {emoji}
              </button>
            ))}
          </div>

        </article>

        {/* ── Sidebar ── */}
        <aside className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-6">

          {/* Author card */}
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400 mb-4">Written by</p>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={matchingPost?.user?.profile_image || 'https://api.dicebear.com/7.x/initials/svg?seed=RP'}
                alt=""
                className="w-12 h-12 rounded-full object-cover bg-orange-100"
              />
              <div>
                <p className="text-sm font-bold text-gray-900">{matchingPost?.user?.name || 'Author Name'}</p>
                <p className="text-xs text-gray-400">@{matchingPost?.user?.username || 'username'}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              {matchingPost?.user?.summary || 'Author bio goes here. A short description about the writer.'}
            </p>
            <button className="w-full border border-gray-200 text-xs font-medium uppercase tracking-wider text-gray-600 py-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              Follow
            </button>
          </div>

          {/* Stats card */}
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400 mb-4">Stats</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Reactions', value: matchingPost?.public_reactions_count || 0 },
                { label: 'Comments', value: matchingPost?.comments_count || 0 },
                { label: 'Read time', value: `${matchingPost?.reading_time_minutes || 5}m` },
                { label: 'Published', value: matchingPost?.readable_publish_date?.split(' ')[0] || 'Jan' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-1">{s.label}</p>
                  <p className="text-lg font-bold text-gray-900">{s.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Share card */}
          <div className="bg-white border border-gray-100 rounded-xl p-5">
            <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400 mb-4">Share</p>
            <div className="flex gap-2">
              {['𝕏', 'in', 'f', '🔗'].map((icon, i) => (
                <button
                  key={i}
                  className="flex-1 h-9 flex items-center justify-center rounded-lg border border-gray-100 text-gray-500 text-sm font-bold hover:bg-orange-50 hover:border-orange-200 hover:text-orange-700 transition-all cursor-pointer"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Back button */}
          <button className="w-full bg-gray-900 text-white text-xs font-medium uppercase tracking-wider py-3 rounded-xl hover:bg-gray-700 transition-colors cursor-pointer">
            <Link to={"/"}>
            ← Back to All Posts
            </Link>
          </button>

        </aside>
      </div>
    </div>
  );
}; 