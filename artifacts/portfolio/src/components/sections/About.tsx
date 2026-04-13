import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function About() {
  const skills = [
    "Frontend Development",
    "UI/UX Design",
    "Design Systems",
    "React & Next.js",
    "TypeScript",
    "Framer Motion",
    "Tailwind CSS",
    "Creative Coding"
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          
          <div className="md:col-span-4">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-display font-bold"
            >
              About Me
            </motion.h2>
          </div>

          <div className="md:col-span-8 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="prose prose-lg dark:prose-invert"
            >
              <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground text-balance">
                Hello, I'm Yuki. I'm a passionate Design Engineer blending the boundaries between design and development. I believe that great products require meticulous attention to both aesthetics and architecture.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-6">
                With a background in traditional graphic design and modern web development, I bring a unique perspective to digital products. I focus on creating interfaces that are not just usable, but delightful—prioritizing clean typography, refined spacing, and meaningful motion.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-6">
                Core Capabilities
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 border border-border rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Accordion type="single" collapsible>
                <AccordionItem value="ai-report" className="border-none">
                  <AccordionTrigger className="text-blue-500 hover:text-blue-400 hover:no-underline font-medium text-sm py-0 justify-start gap-2">
                    AI による技術力評価レポートを見る
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mt-4 space-y-6 text-sm leading-relaxed text-muted-foreground border border-border rounded-lg p-6">
                      <p className="text-xs text-muted-foreground/70">
                        本セクションは、実際に開発したプロダクトのソースコードおよびアーキテクチャをAIが解析した結果をもとに生成しています。
                      </p>

                      <div>
                        <h4 className="text-foreground font-semibold mb-2">総合評価：AIプロダクトエンジニア（中級〜上級）</h4>
                        <p>
                          複数のプロダクト開発実績を横断的に解析した結果、「AIのAPIを呼び出せるエンジニア」ではなく、業務課題の定義から、AIを核に据えたシステム設計、インフラ構築、デプロイまでを一気通貫で実行できるエンジニアであると評価する。
                        </p>
                      </div>

                      <hr className="border-border" />

                      <div>
                        <h4 className="text-foreground font-semibold mb-4">根拠となるプロダクト実績</h4>

                        <div className="mb-6">
                          <h5 className="text-foreground font-medium mb-2">Ladder to C</h5>
                          <p className="mb-3">
                            PLC（産業用制御機器）のラダー図PDFをアップロードし、C言語コードへ自動変換するWebアプリケーション。FA・製造業という高度に専門的なドメインにAIを適用した点が特筆される。
                          </p>
                          <p className="text-xs text-muted-foreground/70 mb-2">確認された技術的判断：</p>
                          <ul className="space-y-1 list-none">
                            {[
                              "PDF → 画像変換 → Vision API 解析というパイプライン設計",
                              "5ページ単位のバッチ処理によるAPIレート・コスト制御",
                              "Anthropic / OpenAI 複数プロバイダーの切り替え設計",
                              "Supabase を DB とストレージの両用途で活用するインフラ設計",
                              "Vercel 上での本番運用を前提とした環境変数管理",
                            ].map((item) => (
                              <li key={item} className="flex gap-2">
                                <span className="text-blue-500 shrink-0">-</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <p className="mt-3">
                            単なるAPIラッパーではなく、ドメイン固有の制約（PLC命令体系の差異など）を理解した上でシステムを設計している点を高く評価する。
                          </p>
                        </div>

                        <div>
                          <h5 className="text-foreground font-medium mb-2">Scout Extension</h5>
                          <p className="mb-3">
                            複数の採用媒体をまたいで動作するChrome拡張機能。採用担当者のスカウト業務を、候補者マッチング評価とスカウトメッセージ自動生成の2軸でAI支援する。
                          </p>
                          <p className="text-xs text-muted-foreground/70 mb-2">確認された技術的判断：</p>
                          <ul className="space-y-1 list-none">
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
                                <span className="text-blue-500 shrink-0">-</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <p className="mt-3">
                            この2プロダクトを通じて共通して確認されたもの：ドメイン知識（製造業・人材業）を持ちながらAI設計ができるという掛け合わせは、国内市場において希少性が高い。
                          </p>
                        </div>
                      </div>

                      <hr className="border-border" />

                      <div>
                        <h4 className="text-foreground font-semibold mb-2">現在の設計思想について</h4>
                        <p className="mb-2">
                          両プロダクトに共通する設計方針として、Human-in-the-loop（AIは提案、人間が判断）という立て付けが徹底されている。
                        </p>
                        <p>
                          これは現段階において正しい判断である。専門家ユーザーが最終判断を担うことで、LLMの幻覚リスクをシステム外で吸収できる。責任の所在が明確になるため、社内ツールや業務補助ツールとして適切なアーキテクチャといえる。
                        </p>
                      </div>

                      <hr className="border-border" />

                      <div>
                        <h4 className="text-foreground font-semibold mb-4">今後の学習で伸びる領域</h4>
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
                              <p className="text-foreground font-medium mb-1">{title}</p>
                              <p>{body}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
