import Works_Card from "./04a_worksProps"
export default function Works() {
    return (
        <section className="flex w-full max-w-2xl flex-col gap-12 border-t py-8">

            <h1 className="mt-5 text-center text-3xl font-bold md:text-4xl">-- Works --</h1>

            <Works_Card link="https://wst-viewer.vercel.app/" img="/img/photo_002.webp" title="起床標準時ビュワー" description="起床標準時（WST）を簡単に計算できるアプリ" />
            <Works_Card link="https://references-formatter.vercel.app/" img="/img/photo_003.webp" title="参考文献フォーマッタ" description="参考文献の書式を自動で整形してくれるフォーマッタ" />
        </section>
    )
}