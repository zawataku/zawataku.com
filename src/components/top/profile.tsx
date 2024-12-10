export default function Profile() {
    return (
        <section className="flex w-full max-w-3xl flex-col items-center gap-8 pb-10 pt-16">
            <h1 className="text-4xl font-bold md:text-5xl">ざわたく.com</h1>
            <img
                src="/img/photo_001.webp"
                alt="プロフィールアイコン"
                className="size-28 rounded-full border-4 border-solid border-primary-800"
            />
        </section>
    )
}