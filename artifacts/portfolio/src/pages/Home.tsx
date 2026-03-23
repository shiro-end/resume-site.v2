export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-semibold text-gray-900 hover:text-gray-600">
            Yuzo Iwasaki
          </a>
          <div className="flex gap-5 text-sm text-gray-600">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#experience" className="hover:text-gray-900">Experience</a>
            <a href="#skills" className="hover:text-gray-900">Skills</a>
            <a href="#articles" className="hover:text-gray-900">Articles</a>
            <a href="#talks" className="hover:text-gray-900">Talks</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
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
              <h3 className="text-lg font-semibold mb-1">GMOタウンWiFi株式会社</h3>
              <p className="text-sm text-gray-500 mb-3">期間: 2025年 - 現在</p>
              <p className="text-gray-700 leading-relaxed">
                業務内容: 2025年8月よりリファラル経由で入社。現在はグループ会社も含めたセキュリティ、内部統制、情シス業務を担当しています。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">株式会社CAMPFIRE</h3>
              <p className="text-sm text-gray-500 mb-3">期間: 2016年 - 2025年</p>
              <p className="text-gray-700 leading-relaxed">
                業務内容: 前職の経営悪化によりサーバーサイドエンジニアとしてジョイン、当初はCakePHPでできたアプリケーションの開発に関わっていました。Ruby/Railsでのリプレイスを経て、SREに転向、SREチームの立ち上げとリード、マネージャーを経験しました。その後開発チームのマネージャーを経てVPoE/プロダクト開発部長に就任。マネジメントや採用、IT統制など幅広く関わりました。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">株式会社ワンズ</h3>
              <p className="text-sm text-gray-500 mb-3">期間: 2015年 - 2016年</p>
              <p className="text-gray-700 leading-relaxed">
                業務内容: 新しいチャレンジを求めてWeb業界に転職し、プログラマとしておもにRailsアプリケーションの開発に従事しました。小さい会社だったためSEO担当も兼任しており、この時期にWeb開発の基礎とSEOについての深い知見を身に付けました。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">日本サード・パーティ株式会社</h3>
              <p className="text-sm text-gray-500 mb-3">期間: 2010年 - 2014年</p>
              <p className="text-gray-700 leading-relaxed">
                業務内容: おもにHP Factory Expressというサービスにインフラエンジニアとして関わっていました。キッティング、ラッキングからソフトウェアのインストール及び設定、トラブルシューティング、シェルスクリプトやVBAを使った業務効率化など様々な業務を行いました。特にLinux周りに関わることが多く、最終的にはソフトウェアチームのリーダーとして現場を率いていました。また、会社が資格取得を奨励していたこともあり、LPICやCCNAなどのベンダ資格を4年間で10個以上取得しました。
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "Ruby", years: "5年以上", slug: "ruby" },
              { name: "Rails", years: "5年以上", slug: "rails" },
              { name: "JavaScript", years: "5年以上", slug: "javascript" },
              { name: "SRE", years: "5年以上", slug: "sre" },
              { name: "AWS", years: "5年以上", slug: "aws" },
              { name: "Google Cloud", years: "2年", slug: "google-cloud" },
              { name: "Terraform", years: "3年", slug: "terraform" },
              { name: "セキュリティ", years: "5年以上", slug: "security" },
              { name: "ネットワーク", years: "5年以上", slug: "network" },
              { name: "データベース", years: "5年以上", slug: "database" },
              { name: "OS", years: "5年以上", slug: "os" },
              { name: "ハードウェア", years: "3年", slug: "hardware" },
              { name: "マネジメント", years: "5年以上", slug: "management" },
              { name: "採用", years: "5年以上", slug: "recruitment" },
              { name: "情シス", years: "3年", slug: "information-systems" },
              { name: "IT統制", years: "5年以上", slug: "it-control" },
              { name: "ISMS", years: "1年", slug: "isms" },
              { name: "英語", years: "5年以上", slug: "english" },
              { name: "ポルトガル語", years: "4年", slug: "portuguese" },
              { name: "将棋", years: "5年以上", slug: "shogi" },
            ].map((skill) => (
              <div key={skill.slug} className="border border-gray-200 rounded p-4">
                <div className="font-medium text-gray-900">{skill.name}</div>
                <div className="text-sm text-gray-500 mt-1">{skill.years}</div>
                <a
                  href={`https://yuzoiwasaki-me.vercel.app/skills/${skill.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline mt-2 inline-block"
                >
                  Read More
                </a>
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
