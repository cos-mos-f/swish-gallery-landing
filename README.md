# swish-gallery-landing

SWISH GALLERY ランディングページ

## 技術スタック

- **フレームワーク**: [Astro](https://astro.build/) v5
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/) v4
- **デプロイ**: GitHub Pages

## 開発

### 必要なもの

- Node.js 20 以上
- npm

### セットアップ

```bash
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

開発サーバーが `http://localhost:4321/` で起動します。

### ビルド

```bash
npm run build
```

ビルド結果は `dist/` ディレクトリに出力されます。

### プレビュー

```bash
npm run preview
```

ビルド結果をローカルでプレビューできます。

## デプロイ

`main` ブランチにプッシュすると、GitHub Actions により自動的に GitHub Pages にデプロイされます。

## プロジェクト構造

```
swish-gallery-landing/
├── src/
│   ├── pages/           # Astroページ
│   │   └── index.astro  # メインページ
│   └── styles/          # CSSファイル
│       └── global.css   # グローバルスタイル
├── public/              # 静的アセット
│   ├── assets/          # アイコンなど
│   ├── images/          # 画像ファイル
│   └── manifest.json    # PWAマニフェスト
├── astro.config.mjs     # Astro設定
├── tailwind.config.mjs  # Tailwind CSS設定
└── package.json         # プロジェクト設定
```
