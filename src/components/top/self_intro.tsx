export default function Self_Introduction() {
    return (
        <section className="flex w-full max-w-2xl flex-col gap-8 py-4">
            <div className="flex items-center justify-center">
                <hr className="h-[2px] w-4/5 border-t-2 border-dashed border-rubyred md:w-full" />
                <h2 className="w-full text-center text-2xl font-bold md:text-3xl">About Me</h2>
                <hr className="h-[2px] w-4/5 border-t-2 border-dashed border-rubyred md:w-full" />
            </div>
            <div className="flex w-full flex-col gap-8 md:gap-14">
                {/* 自己紹介 */}
                <section className="flex flex-col md:gap-1">
                    <h2 className="mb-3 border-l-8 border-l-rubyred pl-2 text-xl font-bold md:text-2xl">自己紹介</h2>
                    <p className="border-l-8 border-l-[transparent] pl-2 text-base md:text-lg">ざわたくです。石川県の大学生です。</p>
                    <p className="border-l-8 border-l-[transparent] pl-2 text-base md:text-lg">さけるチーズとサラダチキンが好きです。</p>
                </section>

                {/* 好きなもの */}
                <section className="flex flex-col md:gap-1">
                    <h2 className="mb-3 border-l-8 border-l-rubyred pl-2 text-xl font-bold md:text-2xl">好きなもの</h2>
                    <p className="border-l-8 border-l-[transparent] pl-2 text-base md:text-lg">さけるチーズ / サラダチキン</p>
                </section>

                {/* 趣味 */}
                <section className="flex flex-col md:gap-1">
                    <h2 className="mb-3 border-l-8 border-l-rubyred pl-2 text-xl font-bold md:text-2xl">趣味</h2>
                    <p className="border-l-8 border-l-[transparent] pl-2 text-base md:text-lg">お絵描き / フィルムカメラ</p>
                </section>
            </div>
        </section>
    );
}