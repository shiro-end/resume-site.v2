export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="fixed top-0 left-0 right-0 bg-black z-50">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 hover:opacity-80">
            <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              YI
            </div>
            <span className="font-semibold text-white">Yuzo Iwasaki</span>
          </a>
          <div className="flex gap-5 text-sm text-gray-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#works" className="hover:text-white">Works</a>
            <a href="#articles" className="hover:text-white">Articles</a>
            <a href="#talks" className="hover:text-white">Talks</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-24 pb-20">

        {/* About Me */}
        <section id="about" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            エンジニア歴15年程度のベテランエンジニアです。ソフトウェアエンジニアリングをはじめ、SREやマネジメント、採用、IT統制など幅広く関わってきました。最近はセキュリティ、内部統制、情シスあたりをやっています。
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

        {/* Articles */}
        <section id="articles" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Articles</h2>

          <div className="space-y-8">
            {[
              {
                category: "SRE",
                articles: [
                  { title: "SREとDevOpsのおすすめ書籍まとめ", url: "https://qiita.com/yuzoiwasaki/items/eb9fbcb942d6f5c6fce4" },
                  { title: "CAMPFIREにSREを導入した話", url: "https://qiita.com/yuzoiwasaki/items/d8b56a98822e2b2bb6e7" },
                  { title: "SREチームのマネージャーを引退します！", url: "https://note.com/campfire_dev/n/na9fc70a3654b" },
                  { title: "ポストモーテムとは", url: "https://note.com/campfire_dev/n/n2a46e3832207" },
                  { title: "トイルとは", url: "https://note.com/campfire_dev/n/nd34ae0bee2fa" },
                  { title: "エラーバジェットとは", url: "https://note.com/campfire_dev/n/nd1b73ecbc17c" },
                  { title: "SREチームのインシデント対応について", url: "https://note.com/campfire_dev/n/n44b01a26d3d7" },
                  { title: "ポストモーテム読書会を開催しました！", url: "https://note.com/campfire_dev/n/nfe332057001e" },
                  { title: "プロダクションミーティングをやってみた", url: "https://note.com/campfire_dev/n/n9798f6d18182" },
                  { title: "SREにおけるコンテキストの話", url: "https://note.com/gch/n/n07ffec31d5a0" },
                ],
              },
              {
                category: "ソフトウェアエンジニアリング",
                articles: [
                  { title: "Nuxt+Bulma+S3でライブハウス支援サイトを作った", url: "https://qiita.com/yuzoiwasaki/items/d9b6ffa4ca1351825eee" },
                  { title: "Slack のスラッシュコマンドをサーバーレス構成で作ってみた", url: "https://zenn.dev/yuzoiwasaki/articles/e99a5a103902ba" },
                  { title: "初めてVimプラグインを自作してみた", url: "https://qiita.com/yuzoiwasaki/items/a6f03b170ca21700b969" },
                  { title: "imgixで遅延ロードを実装してみる", url: "https://qiita.com/yuzoiwasaki/items/27faa9f6b55babd783c7" },
                  { title: "SvelteKit でポートフォリオサイトを作ってみる", url: "https://zenn.dev/yuzoiwasaki/articles/7ed13f9c595047" },
                ],
              },
              {
                category: "マネジメント",
                articles: [
                  { title: "エンジニアリングマネージャーとして意識していること", url: "https://note.com/gch/n/ned8ffe2d19ea" },
                  { title: "エンジニアリングマネージャーとしての数ヶ月を振り返る", url: "https://qiita.com/yuzoiwasaki/items/c37aad8b0c3aae4626e0" },
                  { title: "VPoE評価アンケートをやってみた", url: "https://note.com/gch/n/nde6c0a8d885a" },
                  { title: "ヤフーの1on1を読んだちょっとした感想", url: "https://note.com/gch/n/n8a8c70d59f40" },
                ],
              },
              {
                category: "採用",
                articles: [
                  { title: "自分が考える良いカジュアル面談", url: "https://note.com/gch/n/nc19373d28cad" },
                  { title: "SREの採用で意識していること", url: "https://note.com/campfire_dev/n/n6d82b67a2412" },
                ],
              },
              {
                category: "IT統制",
                articles: [
                  { title: "初心者のためのIT統制マニュアル", url: "https://note.com/gch/n/n218640763953" },
                  { title: "2024年のIT統制はどうなるの？", url: "https://note.com/gch/n/nd5a5344c5fe7" },
                  { title: "最近のIT統制資料いろいろ", url: "https://note.com/gch/n/nf159a18d2fbc" },
                ],
              },
              {
                category: "セキュリティ",
                articles: [
                  { title: "セキュリティチェックシートを作った話", url: "https://note.com/gch/n/n9f1de7992952" },
                  { title: "ギャルによるAI活用ガイドライン", url: "https://note.com/gch/n/nd209629c6f65" },
                ],
              },
              {
                category: "その他",
                articles: [
                  { title: "CAMPFIREでの8年間を振り返る", url: "https://note.com/gch/n/nc59e3401ed39" },
                  { title: "外国人の子どもたちを対象にプログラミング教室を始めます", url: "https://note.com/gch/n/nf6ddccf7de1e" },
                  { title: "プログラミングワークショップ", url: "https://note.com/gch/n/n10b89a5b1827" },
                ],
              },
            ].map((group) => (
              <div key={group.category}>
                <h3 className="text-base font-semibold text-gray-800 mb-3">{group.category}</h3>
                <ul className="space-y-2">
                  {group.articles.map((article) => (
                    <li key={article.url}>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        {article.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Talks */}
        <section id="talks" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Talks</h2>
          <ul className="space-y-3">
            {[
              { title: "小さい組織でのSREの探求", url: "https://speakerdeck.com/yuzoiwasaki/xiao-saizu-zhi-deno-sre-notan-qiu" },
              { title: "MIXI・ZOZO・CAMPFIRE　SRE合同採用イベント〈３社でSREを再考してみる〉イベントレポート", url: "https://mixil.mixi.co.jp/report/16305" },
              { title: "Perl student has become SRE", url: "https://speakerdeck.com/yuzoiwasaki/perl-student-has-become-sre" },
              { title: "DevOpsとリーンの理論と実践", url: "https://speakerdeck.com/yuzoiwasaki/devopstorinfalseli-lun-toshi-jian" },
            ].map((talk) => (
              <li key={talk.url}>
                <a
                  href={talk.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  {talk.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Contact</h2>
          <p className="text-gray-700">
            お問い合わせは以下のメールアドレスまでお気軽にどうぞ:{" "}
            <a
              href="mailto:yuzoiwasaki0929@gmail.com"
              className="text-blue-600 hover:underline"
            >
              yuzoiwasaki0929@gmail.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
