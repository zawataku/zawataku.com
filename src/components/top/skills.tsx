export default function Skills() {
    return (
        <section className="flex w-full max-w-2xl flex-col gap-8 py-6">
            <div className="flex items-center justify-center">
                <hr className="h-[2px] border-rubyred border-t-2 border-dashed w-4/5 md:w-full" />
                <h2 className="text-center text-2xl font-bold w-full md:text-3xl">Skills</h2>
                <hr className="h-[2px] border-rubyred border-t-2 border-dashed w-4/5 md:w-full" />
            </div>
            <div className="flex w-full flex-col gap-14">
                <section className="flex flex-col md:gap-1">
                    <h2 className="mb-3 border-l-8 border-l-rubyred pl-2 text-xl font-bold md:text-2xl">ちょっとわかる</h2>
                    <p className="border-l-8 border-l-[transparent] pl-2 text-base md:text-lg">Next.js / React / Tailwind / 自宅鯖</p>
                </section>

                <section className="flex flex-col md:gap-1">
                    <h2 className="mb-3 border-l-8 border-l-rubyred pl-2 text-xl font-bold md:text-2xl">きょうみ</h2>
                    <p className="border-l-8 border-l-[transparent] pl-2 text-base md:text-lg">ITインフラまわり / </p>
                </section>
            </div>
        </section>
    )
}