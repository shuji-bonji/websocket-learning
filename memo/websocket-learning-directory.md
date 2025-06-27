# WebSocket学習サイト ディレクトリ構成

```
websocket-learning/
├── src/
│   ├── app.html                      # HTMLテンプレート
│   ├── app.d.ts                      # TypeScript型定義
│   ├── lib/                          # 共通ライブラリ
│   │   ├── components/               # 再利用可能コンポーネント
│   │   │   ├── layout/
│   │   │   │   ├── Header.svelte
│   │   │   │   ├── Sidebar.svelte
│   │   │   │   ├── Footer.svelte
│   │   │   │   └── Navigation.svelte
│   │   │   ├── learning/
│   │   │   │   ├── LessonCard.svelte
│   │   │   │   ├── ProgressBar.svelte
│   │   │   │   ├── CodeBlock.svelte
│   │   │   │   ├── MermaidDiagram.svelte
│   │   │   │   └── InteractiveDemo.svelte
│   │   │   ├── websocket/
│   │   │   │   ├── ConnectionStatus.svelte
│   │   │   │   ├── MessageLogger.svelte
│   │   │   │   ├── WebSocketDemo.svelte
│   │   │   │   └── ProtocolSelector.svelte
│   │   │   └── ui/
│   │   │       ├── Button.svelte
│   │   │       ├── Card.svelte
│   │   │       ├── Modal.svelte
│   │   │       └── Tabs.svelte
│   │   ├── stores/                   # Svelte stores
│   │   │   ├── websocket.ts          # WebSocket状態管理
│   │   │   ├── progress.ts           # 学習進捗管理
│   │   │   ├── theme.ts              # テーマ設定
│   │   │   └── navigation.ts         # ナビゲーション状態
│   │   ├── utils/                    # ユーティリティ関数
│   │   │   ├── websocket-helpers.ts  # WebSocket補助関数
│   │   │   ├── markdown-helpers.ts   # Markdown処理
│   │   │   ├── storage.ts            # ローカルストレージ
│   │   │   └── validators.ts         # バリデーション
│   │   └── types/                    # TypeScript型定義
│   │       ├── websocket.ts          # WebSocket関連型
│   │       ├── curriculum.ts         # カリキュラム型
│   │       └── common.ts             # 共通型
│   └── routes/                       # SvelteKitページ
│       ├── +layout.svelte            # 共通レイアウト
│       ├── +layout.ts                # レイアウトロード
│       ├── +page.svelte              # トップページ
│       ├── +page.ts                  # トップページロード
│       ├── curriculum/               # カリキュラム全体
│       │   ├── +page.svelte          # カリキュラム概要
│       │   └── +page.md              # カリキュラム説明
│       ├── phase1/                   # Phase 1: 基礎理解
│       │   ├── +layout.svelte        # Phase1共通レイアウト
│       │   ├── +page.svelte          # Phase1概要
│       │   ├── introduction/         # 1. WebSocket入門 (5-7h)
│       │   │   ├── +page.svelte
│       │   │   ├── what-is-websocket/        # 1.1 WebSocketとは何か (1h)
│       │   │   │   ├── +page.svelte
│       │   │   │   └── +page.svx
│       │   │   ├── http-limitations/         # 1.2 HTTPの限界 (1h)
│       │   │   │   ├── +page.svelte
│       │   │   │   └── +page.svx
│       │   │   ├── use-cases/               # 1.3 利用例と適用場面 (2-3h)
│       │   │   │   ├── +page.svelte
│       │   │   │   ├── +page.svx
│       │   │   │   └── examples/            # 11カテゴリー別サンプル
│       │   │   │       ├── chat.svx
│       │   │   │       ├── collaboration.svx
│       │   │   │       ├── notifications.svx
│       │   │   │       ├── data-streaming.svx
│       │   │   │       ├── iot.svx
│       │   │   │       ├── pwa.svx
│       │   │   │       ├── simulation.svx
│       │   │   │       ├── backend.svx
│       │   │   │       ├── security.svx
│       │   │   │       ├── finance-medical.svx
│       │   │   │       └── vr-metaverse.svx
│       │   │   └── comparison/              # 1.4 他技術比較 (1h)
│       │   │       ├── +page.svelte
│       │   │       └── +page.svx
│       │   ├── network-tech/        # 2. ネットワーク技術 (6.5-7.5h)
│       │   │   ├── +page.svelte
│       │   │   ├── http-basics/             # 2.1 HTTP基礎 (45min)
│       │   │   │   ├── +page.svelte
│       │   │   │   └── +page.svx
│       │   │   ├── osi-model/               # 2.2 OSI参照モデル (1h)
│       │   │   │   ├── +page.svelte
│       │   │   │   └── +page.svx
│       │   │   ├── http-versions/           # 2.3 HTTP対応 (2h)
│       │   │   │   ├── +page.svelte
│       │   │   │   └── +page.svx
│       │   │   ├── connection-process/      # 2.4 接続確立 (1.5-2.5h)
│       │   │   │   ├── +page.svelte
│       │   │   │   └── +page.svx
│       │   │   └── security/                # 2.5 セキュリティ (1h)
│       │   │       ├── +page.svelte
│       │   │       └── +page.svx
│       │   ├── api-structure/       # 3. API基本構造 (5-6h)
│       │   │   ├── +page.svelte
│       │   │   ├── lifecycle/               # 3.1 接続ライフサイクル (2h)
│       │   │   │   ├── +page.svelte
│       │   │   │   └── +page.svx
│       │   │   ├── event-model/             # 3.2 イベントベース通信 (2h)
│       │   │   │   ├── +page.svelte
│       │   │   │   └── +page.svx
│       │   │   └── roles/                   # 3.3 役割分担 (1-2h)
│       │   │       ├── +page.svelte
│       │   │       └── +page.svx
│       │   └── basic-operations/    # 4. 基本操作 (4-5h)
│       │       ├── +page.svelte
│       │       ├── url-connection/          # 4.1 URL接続 (1h)
│       │       │   ├── +page.svelte
│       │       │   └── +page.svx
│       │       ├── api-implementation/      # 4.2 API実装 (2-3h)
│       │       │   ├── +page.svelte
│       │       │   └── +page.svx
│       │       └── reconnection/            # 4.3 再接続処理 (1-2h)
│       │           ├── +page.svelte
│       │           └── +page.svx
│       ├── phase2/                   # Phase 2: 実装技術
│       │   ├── +layout.svelte
│       │   ├── +page.svelte
│       │   ├── data-communication/  # 5. データ通信 (6-7h)
│       │   │   ├── +page.svelte
│       │   │   ├── svelte-stores/           # 5.1 Svelteストア (2-3h)
│       │   │   │   ├── +page.svelte
│       │   │   │   └── +page.svx
│       │   │   ├── send-receive/            # 5.2 送受信パターン (2h)
│       │   │   │   ├── +page.svelte
│       │   │   │   └── +page.svx
│       │   │   └── error-handling/          # 5.3 エラーハンドリング (2-3h)
│       │   │       ├── +page.svelte
│       │   │       └── +page.svx
│       │   ├── frames-protocols/    # 6. フレーム・プロトコル (6-7h)
│       │   │   ├── +page.svelte
│       │   │   ├── frame-structure/         # 6.1 フレーム構造 (1-2h)
│       │   │   │   ├── +page.svelte
│       │   │   │   └── +page.svx
│       │   │   ├── binary-data/             # 6.2 バイナリデータ (1-2h)
│       │   │   │   ├── +page.svelte
│       │   │   │   └── +page.svx
│       │   │   └── subprotocols/            # 6.3 サブプロトコル (2-3h)
│       │   │       ├── +page.svelte
│       │   │       ├── +page.svx
│       │   │       └── examples/
│       │   │           ├── graphql-ws.svx
│       │   │           ├── mqtt.svx
│       │   │           ├── json-rpc.svx
│       │   │           └── custom.svx
│       │   └── advanced-topics/     # 7. 高度なトピック (8-10h)
│       │       ├── +page.svelte
│       │       ├── security/                # 7.1 セキュリティ (3-4h)
│       │       │   ├── +page.svelte
│       │       │   └── +page.svx
│       │       ├── pwa-integration/         # 7.2 PWA統合 (3-4h)
│       │       │   ├── +page.svelte
│       │       │   └── +page.svx
│       │       └── scalability/             # 7.3 スケーラビリティ (2h)
│       │           ├── +page.svelte
│       │           └── +page.svx
│       ├── phase3/                   # Phase 3: テスト・評価
│       │   ├── +layout.svelte
│       │   ├── +page.svelte
│       │   ├── testing/             # 8. テスト手法 (5-6h)
│       │   │   ├── +page.svelte
│       │   │   ├── client-testing/          # 8.1 クライアント側 (2-3h)
│       │   │   │   ├── +page.svelte
│       │   │   │   └── +page.svx
│       │   │   ├── server-testing/          # 8.2 サーバー側 (1-2h)
│       │   │   │   ├── +page.svelte
│       │   │   │   └── +page.svx
│       │   │   └── e2e-testing/             # 8.3 E2Eテスト (1-2h)
│       │   │       ├── +page.svelte
│       │   │       └── +page.svx
│       │   └── comparison/          # 9. 技術比較 (3-4h)
│       │       ├── +page.svelte
│       │       ├── alternatives/            # 9.1 代替技術 (2h)
│       │       │   ├── +page.svelte
│       │       │   └── +page.svx
│       │       └── selection-criteria/      # 9.2 適用判断 (1-2h)
│       │           ├── +page.svelte
│       │           └── +page.svx
│       ├── phase4/                   # Phase 4: 実践開発
│       │   ├── +layout.svelte
│       │   ├── +page.svelte
│       │   ├── projects/            # 10. 実践プロジェクト (15-20h)
│       │   │   ├── +page.svelte
│       │   │   ├── chat-app/                # 10.1 チャットアプリ (7-10h)
│       │   │   │   ├── +page.svelte
│       │   │   │   ├── +page.svx
│       │   │   │   └── implementation/
│       │   │   │       ├── protocol-design.svx
│       │   │   │       ├── client-setup.svx
│       │   │   │       ├── server-setup.svx
│       │   │   │       └── pwa-features.svx
│       │   │   └── collaborative-editor/    # 10.2 共同編集 (8-10h)
│       │   │       ├── +page.svelte
│       │   │       ├── +page.svx
│       │   │       └── implementation/
│       │   │           ├── crdt-basics.svx
│       │   │           ├── conflict-resolution.svx
│       │   │           └── sync-strategies.svx
│       │   └── socket-io/           # Socket.IO (オプション 3-5h)
│       │       ├── +page.svelte
│       │       ├── +page.svx
│       │       └── comparison/
│       │           ├── when-to-use.svx
│       │           └── migration.svx
│       ├── resources/                # 学習リソース
│       │   ├── +page.svelte
│       │   ├── references/                  # 参考資料
│       │   │   ├── +page.svelte
│       │   │   ├── official-docs.svx
│       │   │   ├── rfc-specs.svx
│       │   │   └── libraries.svx
│       │   ├── tools/                       # 開発ツール
│       │   │   ├── +page.svelte
│       │   │   ├── debugging.svx
│       │   │   ├── testing-tools.svx
│       │   │   └── monitoring.svx
│       │   └── glossary/                    # 用語集
│       │       ├── +page.svelte
│       │       └── +page.svx
│       ├── demos/                    # インタラクティブデモ
│       │   ├── +layout.svelte
│       │   ├── +page.svelte
│       │   ├── basic-connection/            # 基本接続デモ
│       │   │   ├── +page.svelte
│       │   │   └── +page.ts
│       │   ├── echo-server/                 # エコーサーバー
│       │   │   ├── +page.svelte
│       │   │   └── +page.ts
│       │   ├── chat-demo/                   # チャットデモ
│       │   │   ├── +page.svelte
│       │   │   └── +page.ts
│       │   ├── subprotocol-demo/            # サブプロトコルデモ
│       │   │   ├── +page.svelte
│       │   │   └── +page.ts
│       │   └── stress-test/                 # 負荷テストデモ
│       │       ├── +page.svelte
│       │       └── +page.ts
│       └── api/                      # API routes (サーバー機能)
│           ├── websocket/
│           │   └── +server.ts               # WebSocketサーバー
│           └── demo/
│               ├── echo/
│               │   └── +server.ts           # エコーサーバー
│               └── chat/
│                   └── +server.ts           # チャットサーバー
├── static/                           # 静的ファイル
│   ├── favicon.png
│   ├── images/
│   │   ├── diagrams/                        # 図表画像
│   │   └── screenshots/                     # スクリーンショット
│   ├── icons/                               # PWAアイコン
│   └── manifest.json                        # PWAマニフェスト
├── docs/                             # 既存のMarkdownドキュメント
│   ├── curriculum.md                        # 元カリキュラム
│   ├── socket.md                            # Socket基礎
│   ├── end-to-end-hop-by-hop.md            # 通信方式
│   ├── readystatus-and-close-code.md       # 状態・コード
│   ├── web_realtime_communication_overview.md
│   ├── list-of-websocket-uses.md
│   ├── list-of-major-websocket-subprotocols.md
│   ├── list-of-webtransport-uses.md
│   ├── table-of-contents.md
│   └── instructions.md
├── tests/                            # テストファイル
│   ├── unit/                                # ユニットテスト
│   │   ├── stores/
│   │   ├── utils/
│   │   └── components/
│   ├── integration/                         # 統合テスト
│   └── e2e/                                 # E2Eテスト
│       └── playwright.config.ts
├── scripts/                          # ビルド・デプロイスクリプト
│   ├── build.js
│   ├── deploy.js
│   └── dev-server.js
├── .github/                          # GitHub Actions
│   └── workflows/
│       ├── ci.yml                           # CI/CD
│       ├── deploy.yml                       # デプロイ
│       └── lighthouse.yml                   # パフォーマンス監視
├── package.json
├── svelte.config.js
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js                       # スタイリング
├── mdsvex.config.js                         # MDsveX設定
├── README.md
├── CLAUDE.md                                # Claude Code連携用
└── .gitignore
```

## 🎯 ディレクトリ構成のポイント

### **階層設計**

- **Phase別構成**: カリキュラムの4つのPhaseを明確に分離
- **学習時間順**: 各セクションは推奨学習順序で配置
- **理論→実践**: 理論学習からハンズオン実装まで段階的

### **SvelteKit最適化**

- **File-based routing**: SvelteKitの規約に従った自然なURL構造
- **Layout継承**: Phase別・セクション別のレイアウト管理
- **型安全性**: TypeScript中心の実装とSvelte 5対応

### **MDsveX統合**

- **.svx拡張子**: Markdown + Svelteコンポーネントの組み合わせ
- **インタラクティブ要素**: WebSocketデモを含む学習コンテンツ
- **コードハイライト**: シンタックスハイライト対応

### **PWA対応**

- **Service Worker**: `/static/sw.js`で実装
- **マニフェスト**: PWAとして機能
- **オフライン学習**: キャッシュ戦略の実装

### **開発体験**

- **Hot reload**: 開発時の高速フィードバック
- **型チェック**: TypeScript + Svelte check
- **テスト統合**: Vitest + Playwright
- **CI/CD**: GitHub Actions完全統合
