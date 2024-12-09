export default function Profile() {
    return (
        <div className="flex w-full max-w-3xl flex-col items-center gap-7 py-12">
            <h1 className="text-5xl font-bold">ざわたく.com</h1>
            <img
                src="/img/photo_001.webp"
                alt="プロフィールアイコン"
                className="size-24 rounded-full border-4 border-solid border-primary-800"
            />
        </div>
    )
}