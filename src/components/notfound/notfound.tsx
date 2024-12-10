export default function NotFound() {
    return (
        <section className="flex h-screen flex-col items-center bg-primary-300 p-8 text-primary-800">
            <div className="relative flex size-full justify-center overflow-hidden rounded-xl bg-[#fff] px-8 shadow-lg">
                <div className="flex h-screen flex-col items-center justify-center">
                    <img
                        src="/img/404.webp"
                        alt="404 Not Found"
                        className="w-2/3 max-w-md rounded-xl"
                    />
                    <h1 className="mt-8 text-4xl font-bold text-primary-900">Page Not Found</h1>
                    <p className="mt-4 text-center text-primary-900">
                        お探しのページは一時的にアクセスができない状況にあるか，移動もしくは削除された可能性があります．
                    </p>
                    <a
                        href="/"
                        className="mt-6 rounded px-6 py-2 text-primary-900 transition"
                    >
                        Go Back Home
                    </a>
                </div>
            </div>
        </section>
    );
}