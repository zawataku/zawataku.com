export default function Self_Introduction() {
    return (
        <section className="flex w-full max-w-2xl flex-col gap-14 border-t py-10">
            <h1 className="text-center text-3xl font-bold md:text-4xl">-- About Me --</h1>

            {/* 自己紹介 */}
            <section className="flex flex-col md:gap-1">
                <h2 className="mb-3 border-l-8 border-l-primary-700 pl-2 text-xl font-bold md:text-3xl">自己紹介</h2>
                <p className="border-l-8 border-l-[transparent] pl-2 text-base md:text-xl">ざわたくです。石川県の大学生です。</p>
                <p className="border-l-8 border-l-[transparent] pl-2 text-base md:text-xl">さけるチーズとサラダチキンが好きです。</p>
            </section>

            {/* 好きなもの */}
            <section className="flex flex-col md:gap-1">
                <h2 className="mb-3 border-l-8 border-l-primary-700 pl-2 text-xl font-bold md:text-3xl">好きなもの</h2>
                <p className="border-l-8 border-l-[transparent] pl-2 text-base md:text-xl">さけるチーズ / サラダチキン</p>
            </section>

            {/* 趣味 */}
            <section className="flex flex-col md:gap-1">
                <h2 className="mb-3 border-l-8 border-l-primary-700 pl-2 text-xl font-bold md:text-3xl">趣味</h2>
                <p className="border-l-8 border-l-[transparent] pl-2 text-base md:text-xl">お絵描き / フィルムカメラ</p>
            </section>

            {/* 経歴 */}
            {/* <section className="flex flex-col md:gap-1">
                <h2 className="mb-3 border-l-8 border-l-primary-700 pl-2 text-xl font-bold md:text-3xl">経歴</h2>
                <table className="border-l-8 border-l-[transparent] pl-2">
                    <tbody>
                        <tr>
                            <td className="p-2">2019/04 - 2022/03</td>
                            <td className="p-2">〇〇高等学校卒業</td>
                        </tr>
                        <tr>
                            <td className="p-2">2021年 - 現在</td>
                            <td className="p-2">石川県内の大学に在学中</td>
                        </tr>
                        <tr>
                            <td className="p-2">2023年</td>
                            <td className="p-2">〇〇インターンシップに参加</td>
                        </tr>
                    </tbody>
                </table>
            </section> */}
        </section>
    );
}