export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="fixed top-0 left-0 right-0 bg-black z-50">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 hover:opacity-80">
            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
              <img src="/avatar.jpg" alt="avatar" className="w-full h-full object-cover object-top" />
            </div>
            <span className="font-semibold text-white">Tatsuya Kuroiwa</span>
          </a>
          <div className="flex gap-5 text-sm text-gray-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#works" className="hover:text-white">Works</a>
            <a href="#interests" className="hover:text-white">Interests</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-24 pb-20">

        {/* About Me */}
        <section id="about" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            人事歴10年、個人事業歴6年のフリーランス人事です。支援する企業様の規模や業種を問わず成果を出し続けてきました。最近は仕事もさることながら、経営と生成AIの交わるを考えながら日々の学びを深めています。
          </p>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Experience</h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-semibold mb-3">フリーランス人事</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>大手ITコンサル子会社でエンジニアのダイレクトリクルーティング【６年/更新中】</li>
                <li>ベンチャー企業の採用コンサル及びスカウト業務【１年】</li>
                <li>中小企業で人事マネージャー業務【４年】</li>
                <li>メーカー企業で新卒採用担当業務【１年】</li>
                <li>社員0名のベンチャー企業でなんでも担当【２年/更新中】</li>
                <li>広告業界で採用領域のなんでも担当【２年/更新中】</li>
                <li>ベンチャー企業の壁打ち担当【１年】</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">事業会社人事（電通グループ）</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>採用・教育・労務・給与・評価を含めた人事領域全般を担当</li>
                <li>新卒・中途採用の企画〜実行までを一貫して推進</li>
                <li>採用・教育ノウハウをグループ会社に営業、プロジェクト管理から請求まで行い間接部門で歴代唯一数字を持った</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">人事向け営業会社</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>営業担当として人事担当者向けに商材の提案</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "営業", years: "3年" },
              { name: "採用", years: "10年以上" },
              { name: "教育", years: "4年" },
              { name: "労務", years: "4年" },
              { name: "給与", years: "4年" },
              { name: "福利厚生", years: "4年" },
              { name: "評価", years: "4年" },
              { name: "役員会資料作成", years: "4年" },
              { name: "HRシステム導入・進行管理", years: "4年" },
              { name: "各種委員会運営", years: "4年" },
            ].map((skill) => (
              <div key={skill.name} className="border border-gray-200 rounded p-4">
                <div className="font-medium text-gray-900">{skill.name}</div>
                <div className="text-sm text-gray-500 mt-1">{skill.years}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Works */}
        <section id="works" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "作品名1",
                description: "作品の簡単な説明文をここに入れてください。",
                tags: ["タグ1", "タグ2"],
                url: "#",
              },
              {
                title: "作品名2",
                description: "作品の簡単な説明文をここに入れてください。",
                tags: ["タグ1", "タグ2", "タグ3"],
                url: "#",
              },
              {
                title: "作品名3",
                description: "作品の簡単な説明文をここに入れてください。",
                tags: ["タグ1", "タグ2"],
                url: "#",
              },
            ].map((work) => (
              <div key={work.title} className="border border-gray-200 rounded-lg overflow-hidden flex flex-col">
                <div className="bg-gray-100 h-36 flex items-center justify-center text-gray-400 text-sm">
                  thumbnail
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">{work.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">{work.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {work.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-900 hover:underline mt-auto"
                  >
                    詳しく見る
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section id="interests" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Interests</h2>

          <div className="space-y-10">
            {([
              {
                category: "ガジェット",
                videos: [
                  { title: "「最強充電器」決定版2025夏 ～140W部門～ 有名メーカー製品5つを実機比較＆徹底検証！", videoId: "YRERsKIluvA", url: "https://www.youtube.com/watch?v=YRERsKIluvA" },
                  { title: "【システム構築編】Raspberry Pi 5 × 外付けGPUでどこまで高速化できるのか？【part1/2】", videoId: "q48pcksDEiI", url: "https://www.youtube.com/watch?v=q48pcksDEiI" },
                ],
              },
              {
                category: "生成AI",
                videos: [
                  { title: '【"数学オリンピック優勝"のAIは便利なのか】今井翔太「AIは賢くなり過ぎた」「2026年は"仕事で使えるAI"の競争」／ChatGPTとGeminiは「動画と科学」で革命起こす【1on1 Tech】', videoId: "Bt761_2_Fgo", url: "https://www.youtube.com/watch?v=Bt761_2_Fgo" },
                  { title: "Now Available: Replit Agent 3", videoId: "nr6qrQTv7QI", url: "https://www.youtube.com/watch?v=nr6qrQTv7QI" },
                  { title: "【トップAI起業家が断言：2026年中に言語の壁はなくなる】音声AIで挑む言語の壁／メガネが最適な理由／英語以外の世界が広がる／正確性の急上昇／どう稼ぐか？／AI時代に必要なスキル／高市首相への提言", videoId: "N30YYfIqGEg", url: "https://www.youtube.com/watch?v=N30YYfIqGEg" },
                ],
              },
              {
                category: "セキュリティ",
                booklist: [
                  { title: "Ransomware Pursuit Team", url: "https://www.amazon.co.jp/dp/B0CF1C9667" },
                  { title: "ランサムウエアから会社を守る", url: "https://www.amazon.co.jp/dp/B0BMNZKN5J" },
                  { title: "経営層のためのサイバーセキュリティ実践入門", url: "https://www.amazon.co.jp/dp/B0CW1BRK98" },
                ],
              },
              {
                category: "人事",
                booklist: [
                  { title: "ヒューマン・リソース・マネジメント", url: "https://www.amazon.co.jp/dp/4478440514" },
                  { title: "ダイアローグ 対話する組織", url: "https://www.amazon.co.jp/dp/4478005672" },
                  { title: "働くひとのためのキャリア・デザイン", url: "https://www.amazon.co.jp/dp/456961941X" },
                  { title: "人が育つ会社をつくる―キャリア創造のマネジメント", url: "https://www.amazon.co.jp/dp/4532312825" },
                  { title: "人事アセスメントの科学", url: "https://www.amazon.co.jp/dp/4382054354" },
                  { title: "人事評価の総合科学", url: "https://www.amazon.co.jp/dp/4561265384" },
                ],
              },
            ] as Array<
              { category: string; tools: { name: string; icon: string; url: string }[]; videos?: never; booklist?: never } |
              { category: string; videos: { title: string; videoId: string; url: string }[]; tools?: never; booklist?: never } |
              { category: string; booklist: { title: string; url: string }[]; tools?: never; videos?: never }
            >).map((group) => (
              <div key={group.category}>
                <h3 className="text-base font-semibold text-gray-800 mb-3">{group.category}</h3>
                {"tools" in group && group.tools ? (
                  <div className="flex flex-wrap gap-3">
                    {group.tools.map((tool, i) => (
                      <a
                        key={i}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-sm transition-all w-28"
                      >
                        <img src={tool.icon} alt={tool.name} className="w-10 h-10 object-contain" />
                        <span className="text-xs text-gray-700 text-center font-medium">{tool.name}</span>
                      </a>
                    ))}
                  </div>
                ) : "booklist" in group && group.booklist ? (
                  <ul className="space-y-2">
                    {group.booklist.map((book, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-gray-400 text-xs">📖</span>
                        <a
                          href={book.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-800 hover:text-blue-600 hover:underline"
                        >
                          {book.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : group.videos ? (
                  <div className={`grid grid-cols-1 gap-4 ${group.videos.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
                    {group.videos.map((video, i) => (
                      <a
                        key={i}
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                          <img
                            src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                            alt={video.title}
                            className="absolute inset-0 w-full h-full object-cover bg-gray-100"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = "none";
                              (e.target as HTMLImageElement).parentElement!.style.background = "#f3f4f6";
                            }}
                          />
                        </div>
                        <div className="p-3">
                          <p className="text-sm font-medium text-gray-900 line-clamp-2">{video.title}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Contact</h2>
          <p className="text-gray-700">
            お問い合わせは以下のメールアドレスまでお気軽にどうぞ:{" "}
            <a
              href="mailto:kuroiwa.work@gmail.com"
              className="text-blue-600 hover:underline"
            >
              kuroiwa.work@gmail.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
