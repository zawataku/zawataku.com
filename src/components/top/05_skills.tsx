export default function Skills() {
    return (
        <section className="flex w-full max-w-2xl flex-col gap-14 border-t py-8">

            <h1 className="mt-5 text-center text-3xl font-bold md:text-4xl">-- Skills --</h1>

            <section className="flex flex-col md:gap-1">
                <h2 className="mb-3 border-l-8 border-l-primary-700 pl-2 text-xl font-bold md:text-3xl">ちょっとわかる</h2>
                <p className="border-l-8 border-l-[transparent] pl-2 text-base md:text-xl">Next.js / React / Tailwind</p>
            </section>

            <section className="flex flex-col md:gap-1">
                <h2 className="mb-3 border-l-8 border-l-primary-700 pl-2 text-xl font-bold md:text-3xl">きょうみ</h2>
                <p className="border-l-8 border-l-[transparent] pl-2 text-base md:text-xl">サーバー / ネットワーク / Linux / Proxmox</p>
            </section>

        </section>
    )
}