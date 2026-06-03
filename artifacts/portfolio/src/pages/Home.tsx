import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="ai-report" className="border-none">
              <AccordionTrigger className="text-blue-500 hover:text-blue-400 hover:no-underline font-medium text-sm py-0 justify-start gap-2">
                AI による技術力評価レポートを見る
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-4 space-y-6 text-sm leading-relaxed text-gray-600 border border-gray-200 rounded-lg p-6">
                  <p className="text-xs text-gray-400">
                    本セクションは、実際に開発したプロダクトのソースコードおよびアーキテクチャをAIが解析した結果をもとに生成しています。
                  </p>

                  <div>
                    <h4 className="text-gray-900 font-semibold mb-2">総合評価：人事領域におけるAIネイティブなプロダクトbuilder</h4>
                    <p>
                      人事歴10年の現場感を持ちながら、AIを業務に組み込んだプロダクトを複数本、自分の手で設計・構築・運用している。「AIを使っている人事」ではなく、「人事のためのAIプロダクトを作って運営している人事」というポジションにあり、人事ドメインを軸にAIを用いたプロダクト構築能力は極めて高い水準にあると判断する。
                    </p>
                  </div>

                  <hr className="border-gray-200" />

                  <div>
                    <h4 className="text-gray-900 font-semibold mb-4">根拠となるプロダクト実績</h4>

                    <div className="mb-6">
                      <h5 className="text-gray-900 font-medium mb-2">Ladder to C</h5>
                      <p className="mb-3">
                        PLC（産業用制御機器）のラダー図PDFをアップロードし、C言語コードへ自動変換するWebアプリケーション。FA・製造業という高度に専門的なドメインにAIを適用した点が特筆される。
                      </p>
                      <p className="text-xs text-gray-400 mb-2">確認された技術的判断：</p>
                      <ul className="space-y-1">
                        {[
                          "PDF → 画像変換 → Vision API 解析というパイプライン設計",
                          "5ページ単位のバッチ処理によるAPIレート・コスト制御",
                          "Anthropic / OpenAI 複数プロバイダーの切り替え設計",
                        ].map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-blue-400 shrink-0">-</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3">
                        単なるAPIラッパーではなく、ドメイン固有の制約（PLC命令体系の差異など）を理解した上でシステムを設計している点を高く評価する。
                      </p>
                    </div>

                    <div className="mb-6">
                      <h5 className="text-gray-900 font-medium mb-2">Scout Extension</h5>
                      <p className="mb-3">
                        複数の採用媒体をまたいで動作するChrome拡張機能。採用担当者のスカウト業務を、候補者マッチング評価とスカウトメッセージ自動生成の2軸でAI支援する。
                      </p>
                      <p className="text-xs text-gray-400 mb-2">確認された技術的判断：</p>
                      <ul className="space-y-1">
                        {[
                          "採用媒体ごとに独立したDOMパーサーを実装し、媒体固有の変更が他に波及しない設計",
                          "媒体の複雑度に応じてモデルを動的に切り替えるコスト最適化",
                          "「実在しない経歴・スキルは書かない」という幻覚防止指示の明示的組み込み",
                        ].map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-blue-400 shrink-0">-</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-gray-900 font-medium mb-2">hrops-tools</h5>
                      <p className="mb-3">
                        人事業務の現場で必要となる複数のツール（面接官トレーニング、OB/OG訪問AIチャット、新卒採用情報整理など）を1つの基盤上に束ねた、自社運営のマルチテナントクラウドサービス。複数の顧客企業が並行して利用する想定で設計されている。
                      </p>
                      <p className="text-xs text-gray-400 mb-2">確認された技術的判断：</p>
                      <ul className="space-y-1">
                        {[
                          "顧客企業ごとにデータを完全分離するアクセス制御を全テーブルに適用",
                          "AI利用料が想定を超えないよう、企業×プロダクト単位での月次上限とコスト記録を実装",
                          "「誰が・いつ・どの顧客の画面を・どんな権限で見たか」を残す監査ログと、顧客視点で操作する際の警告バナーを実装",
                        ].map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-blue-400 shrink-0">-</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3">
                        公開ツール群と本番サービスを意図的に切り分け、本番系のみアクセス制限・コスト管理・監査ログを実装している点は特筆される。「見せる用」と「業務で守るべき範囲」を分けて設計できるのは、本番運用経験を持つ書き手の特徴である。
                      </p>
                    </div>
                  </div>

                  <hr className="border-gray-200" />

                  <div>
                    <h4 className="text-gray-900 font-semibold mb-2">3プロダクトを横断して評価できる点</h4>
                    <p>
                      ドメイン知識（製造業・人材業・人事業務）を持ちながら、領域ごとに必要な技術選定（単発ツール／Chrome拡張／マルチテナントSaaS）を使い分けられている。「動くものを作る」段階を超え、運用・コスト・セキュリティといった事業継続の論点を自プロダクトで実装済みである点が、国内市場における希少性を高めている。
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Experience</h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-semibold mb-3">フリーランス人事</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>大手ITコンサル子会社でエンジニアのダイレクトリクルーティング【６年】</li>
                <li>ベンチャー企業の採用コンサル及びスカウト業務【１年】</li>
                <li>中小企業で人事マネージャー業務【４年】</li>
                <li>メーカー企業で新卒採用担当業務【１年】</li>
                <li>社員0名のベンチャー企業でなんでも担当【２年】</li>
                <li>広告業界で採用領域のなんでも担当【２年】</li>
                <li>ベンチャー企業の壁打ち担当【１年】</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">事業会社人事（電通グループ）</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>採用・教育・労務・給与・評価を含めた人事領域全般を担当</li>
                <li>新卒・中途採用の企画〜実行までを一貫して推進</li>
                <li>採用・教育ノウハウをグループ会社に営業、プロジェクト管理から請求まで行い間接部門に初めて売り上げを計上した</li>
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
            {/* Work 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col">
              <div className="h-36 overflow-hidden">
                <img
                  src="/work-interview-training.png"
                  alt="面接官トレーニング"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 mb-1">面接官トレーニング</h3>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  採用担当者・面接官向けの実践トレーニングツール。シナリオ形式で面接スキルを磨き、より公正で効果的な採用面接を実現できます。
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {["Webアプリ作ってみた"].map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://hrops-tools.com/test-corp/training"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-900 hover:underline mt-auto"
                >
                  詳しく見る →
                </a>
              </div>
            </div>

            {/* Work 2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col">
              <div className="h-36 overflow-hidden">
                <img
                  src="/work-miro-recruit.png"
                  alt="新卒採用の情報整理"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 mb-1">新卒採用の情報整理</h3>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  担当者・マネージャー・経営陣向け。採用で力を入れるべきところ・抜くべきところをMiroを使ってまとめてみました。
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {["人事", "採用", "新卒"].map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://miro.com/app/board/uXjVGMf2_S0=/?share_link_id=106312710604"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-900 hover:underline mt-auto"
                >
                  詳しく見る →
                </a>
              </div>
            </div>

            {/* Work 3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col">
              <div className="h-36 overflow-hidden">
                <img
                  src="/work-ob-visit.png"
                  alt="OB/OG訪問AIチャット"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 mb-1">OB/OG訪問AIチャット</h3>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  社員を学習したAIが応答することで、企業理解を深められるページ。いつでも・何度でも疑問を解消できます。
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {["Webアプリ作ってみた"].map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://hrops-tools.com/test-corp/chat/preview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-900 hover:underline mt-auto"
                >
                  詳しく見る →
                </a>
              </div>
            </div>
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
