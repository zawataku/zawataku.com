export default function NotFound() {
    return (
        <section className="flex h-screen flex-col items-center bg-primary-300 p-8 text-primary-800">
            <div className="relative flex size-full justify-center overflow-hidden rounded-xl bg-[#fff] px-6 shadow-lg">
                <div className="flex h-screen flex-col items-center justify-center">
                    <img src="/img/404.webp" alt="404 Not Found" className="w-full max-w-md rounded-xl md:w-2/3" />
                    <p className="mt-1 text-center text-sm text-primary-900">Illustration by 2個 (@chohjaharaSA)</p>
                    <h1 className="my-8 text-4xl font-bold text-primary-900 md:text-5xl">404 Not Found</h1>
                    <p className="text-center text-primary-900">お探しのページは一時的にアクセスができない状況にあるか，移動もしくは削除された可能性があります．</p>
                    <a href="/" className="mt-6 rounded px-6 py-2 text-primary-900 underline underline-offset-4 duration-300 hover:opacity-60">トップページに戻る</a>
                </div>
            </div>
        </section>
    );
}