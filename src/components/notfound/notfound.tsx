export default function NotFound() {
    return (
        <main className="fflex min-h-screen flex-col items-center bg-lavenderblush px-2 py-4 text-rubyred">
            <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center justify-center rounded-xl border-2 border-rubyred bg-white px-6">
                <div className="flex h-screen flex-col items-center justify-center">
                    <img src="/img/404.webp" alt="404 Not Found" className="w-full max-w-md rounded-xl md:w-2/3" />
                    <p className="mt-1 text-center text-sm">Illustration by 2個 (@chohjaharaSA)</p>
                    <h1 className="my-8 text-4xl font-bold md:text-5xl">404 Not Found</h1>
                    <p className="text-center">お探しのページは一時的にアクセスができない状況にあるか，移動もしくは削除された可能性があります．</p>
                    <a href="/" className="mt-6 rounded px-6 py-2 underline underline-offset-4 duration-300 hover:opacity-60">トップページに戻る</a>
                </div>
            </div>
        </main>
    );
}   