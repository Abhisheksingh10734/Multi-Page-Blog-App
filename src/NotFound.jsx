import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full h-screen bg-gray-50 flex flex-col">

            {/* Navbar */}
            <nav className="bg-white border-b border-gray-100 px-8 h-14 flex items-center justify-between sticky top-0 z-10">
                <h1
                    className="text-2xl font-bold tracking-tight text-gray-900"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    RP<span className="text-orange-600">.</span>
                </h1>
                <button className="border border-gray-200 rounded-lg px-4 py-1.5 text-xs font-medium tracking-wider text-gray-500 hover:bg-gray-50 transition-all cursor-pointer">
                    <Link to={"/"}>
                        ← Go Home
                    </Link>
                </button>
            </nav>

            {/* Main */}
            <div className="flex-1 flex items-center justify-center px-4 overflow-hidden">
                <div className="max-w-2xl w-full text-center flex flex-col items-center gap-6">

                    {/* Big 404 */}
                    <div className="relative select-none">
                        <p
                            className="text-[160px] sm:text-[220px] font-bold leading-none text-gray-100 tracking-tighter"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            404
                        </p>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-orange-600 text-white px-5 py-2 rounded-full text-xs font-medium uppercase tracking-[0.2em]">
                                Page not found
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-4 w-full max-w-xs">
                        <div className="flex-1 h-px bg-gray-200" />
                        <span className="text-orange-500 text-lg">✦</span>
                        <div className="flex-1 h-px bg-gray-200" />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-3">
                        <h2
                            className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Looks like this page took a day off.
                        </h2>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-md mx-auto">
                            The article or page you're looking for doesn't exist, was moved, or the URL might be wrong. Head back and find something great to read.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-sm">
                        <button className="w-full bg-gray-900 text-white text-xs font-medium uppercase tracking-wider py-3 rounded-xl hover:bg-gray-700 transition-colors cursor-pointer">
                            <Link to={"/"}>
                                ← Back to Home
                            </Link>
                        </button>
                        <button className="w-full border border-gray-200 text-gray-600 text-xs font-medium uppercase tracking-wider py-3 rounded-xl hover:bg-orange-50 hover:border-orange-200 hover:text-orange-700 transition-all cursor-pointer"
                            onClick={() => navigate(-1)}>
                            {/* TODO: navigate(-1) */}
                            Go Back
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="text-center py-6 border-t border-gray-100 text-xs text-gray-300">
                RP<span className="text-orange-400">.</span> — Developer Blog
            </footer>

        </div>
    );
};