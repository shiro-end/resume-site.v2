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
                    <h4 className="text-gray-900 font-semibold mb-2">総合評価：AIプロダクトエンジニア（中級〜上級）</h4>
                    <p>
                      複数のプロダクト開発実績を横断的に解析した結果、「AIのAPIを呼び出せるエンジニア」ではなく、業務課題の定義から、AIを核に据えたシステム設計、インフラ構築、デプロイまでを一気通貫で実行できるエンジニアであると評価する。
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
                          "Supabase を DB とストレージの両用途で活用するインフラ設計",
                          "Vercel 上での本番運用を前提とした環境変数管理",
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

                    <div>
                      <h5 className="text-gray-900 font-medium mb-2">Scout Extension</h5>
                      <p className="mb-3">
                        複数の採用媒体をまたいで動作するChrome拡張機能。採用担当者のスカウト業務を、候補者マッチング評価とスカウトメッセージ自動生成の2軸でAI支援する。
                      </p>
                      <p className="text-xs text-gray-400 mb-2">確認された技術的判断：</p>
                      <ul className="space-y-1">
                        {[
                          "Chrome Manifest V3 の Service Worker / Content Script / Sidebar という適切なコンポーネント分離",
                          "採用媒体ごとに独立したDOMパーサーを実装し、媒体固有のDOM変更が他に波及しない設計",
                          "トークン消費を最小化するための候補者データ圧縮ロジック（送信前に不要フィールドを除去）",
                          "媒体の複雑度に応じてモデルを動的に切り替えるコスト最適化（標準媒体と複雑媒体で異なるモデルを使用）",
                          "response_format: json_object による構造化出力の強制と、3分類スキームの設計",
                          "「実在しない経歴・スキルは書かない」という幻覚防止指示の明示的組み込み",
                          "社名伏字の検出（特定文字の出現率による閾値判定）という、ドメイン固有のエッジケース処理",
                          "XSS対策、APIキーの適切な格納場所の設計など、セキュリティ意識の実装への反映",
                        ].map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-blue-400 shrink-0">-</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3">
                        この2プロダクトを通じて共通して確認されたもの：ドメイン知識（製造業・人材業）を持ちながらAI設計ができるという掛け合わせは、国内市場において希少性が高い。
                      </p>
                    </div>
                  </div>

                  <hr className="border-gray-200" />

                  <div>
                    <h4 className="text-gray-900 font-semibold mb-2">現在の設計思想について</h4>
                    <p className="mb-2">
                      両プロダクトに共通する設計方針として、Human-in-the-loop（AIは提案、人間が判断）という立て付けが徹底されている。
                    </p>
                    <p>
                      これは現段階において正しい判断である。専門家ユーザーが最終判断を担うことで、LLMの幻覚リスクをシステム外で吸収できる。責任の所在が明確になるため、社内ツールや業務補助ツールとして適切なアーキテクチャといえる。
                    </p>
                  </div>

                  <hr className="border-gray-200" />

                  <div>
                    <h4 className="text-gray-900 font-semibold mb-4">今後の学習で伸びる領域</h4>
                    <p className="mb-4">
                      現在の実装水準は「プロンプトエンジニアリングの実践ができている」段階にある。以下の学習を積むことで、同じプロダクトで明確に品質差が出る段階に到達できると判断する。
                    </p>
                    <div className="space-y-4">
                      {[
                        {
                          title: "1. LLMの評価フレームワーク（Evals）",
                          body: "「プロンプトを変えたら精度が上がったか」を現在は感覚で判断している。LangSmithやBraintrustのような評価基盤を導入し、変換精度・マッチング精度を数値で測定・改善するサイクルを回せるようになると、プロダクト品質の改善速度が定性から定量に変わる。",
                        },
                        {
                          title: "2. RAG（Retrieval-Augmented Generation）",
                          body: "PLC命令セットや採用要件のようなドメイン固有知識を、プロンプトにベタ書きするのではなくベクトルDBに格納し、クエリに応じて動的に注入する設計。すでにSupabaseを使用しているため、pgvector拡張との距離は短い。ハードコードされた知識の限界を突破できる。",
                        },
                        {
                          title: "3. LLM-as-Judge",
                          body: "AIの出力を別のAIが評価する仕組み。Scout Extension が自動送信フェーズに進む際、あるいはLadder to Cの変換結果を人間のレビューなしに一定品質保証したい際に、直接的な価値を持つ技術。",
                        },
                        {
                          title: "4. Few-shot Examplesの体系的設計",
                          body: "現在の実装でも分類や生成は機能しているが、「良い例・悪い例」を3〜5件含めたfew-shot設計を導入することで、分類精度の測定可能な向上が見込める。理論的な裏付けを持った設計に昇華できる段階にある。",
                        },
                      ].map(({ title, body }) => (
                        <div key={title}>
                          <p className="text-gray-900 font-medium mb-1">{title}</p>
                          <p>{body}</p>
                        </div>
                      ))}
                    </div>
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
                  href="https://claude-code-interview-trainer.vercel.app/"
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
                  href="https://recruitsite-and-chatbot-api-server.vercel.app/"
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
