# 🎨 必要な画像ファイル

Swish Gallery ランディングページで必要な画像ファイルの一覧です。

---

## 📸 必要な画像ファイル

### 1. **favicon.ico**

- **配置場所**: `public/favicon.ico`
- **サイズ**: マルチサイズ（16x16, 32x32, 48x48px）
- **用途**: ブラウザタブに表示されるアイコン
- **デザイン**: Swish Gallery のロゴ（`public/icon.svg`をベースに）
- **背景色**: `#0F172A`（ダークブルー）

### 2. **apple-touch-icon.png**

- **配置場所**: `public/apple-touch-icon.png`
- **サイズ**: 180 x 180 px
- **用途**: iOS でホーム画面に追加した際のアイコン
- **デザイン**: Swish Gallery のロゴ（`public/icon.svg`をベースに）
- **背景色**: `#0F172A`（ダークブルー）
- **注意**: 角丸は不要（iOS が自動で適用）

### 3. **icon.svg** ✅ 作成済み

- **配置場所**: `public/icon.svg`
- **サイズ**: ベクター（スケーラブル）
- **用途**: モダンブラウザ用のファビコン
- **状態**: ✅ 既に作成済み（背景色付きバージョン）

### 4. **ogp.png** ⚠️ 最重要

- **配置場所**: `src/images/ogp.png`
- **サイズ**: 1200 x 630 px（必須）
- **用途**: Twitter、Facebook などで URL をシェアした時に表示される画像
- **デザイン仕様**:

  ```
  背景:
    - グラデーション（斜め135度）
    - 開始色: #48ADFF (青)
    - 終了色: #ED24C1 (ピンク)

  レイアウト:
    - ロゴ: 中央に配置（300x300px程度）
    - メインタイトル: "SWISH GALLERY"
      - フォント: Inter Bold
      - サイズ: 72-80pt
      - 色: 白 (#FFFFFF)
    - サブタイトル: "クリエイターのためのキャンバス"
      - フォント: Noto Sans JP Regular
      - サイズ: 36-40pt
      - 色: 白 (#FFFFFF)
    - キャッチコピー: "99% の画面領域。0% のノイズ。"
      - フォント: Noto Sans JP Light
      - サイズ: 24pt
      - 色: 白 (#FFFFFF, 70%透明度)
      - 位置: 下部
  ```

---

## 🛠️ 画像の作成方法

### 最も簡単な方法: オンラインツール（推奨）

#### Favicon & Apple Touch Icon:

1. **[RealFaviconGenerator](https://realfavicongenerator.net/)** にアクセス
2. `public/icon.svg` をアップロード
3. 設定で背景色を `#0F172A` に指定
4. 生成 → ダウンロード
5. `favicon.ico` と `apple-touch-icon.png` を `public/` に配置

#### OGP画像:

**[Canva](https://www.canva.com/)** を使用（無料）:

1. カスタムサイズ: 1200 x 630 px で新規作成
2. 背景にグラデーションを適用（#48ADFF → #ED24C1）
3. `public/icon.svg` をアップロードして中央に配置
4. テキストを上記仕様通りに配置
5. `ogp.png` として書き出し
6. `src/images/` に保存

### 代替ツール:

- **Figma**: プロフェッショナルなデザインツール
- **Photoshop**: Adobe製品をお持ちの場合
- **OG Image Generator**: https://og-image.vercel.app/

---

## ✅ チェックリスト

- [ ] `public/favicon.ico` を作成
- [ ] `public/apple-touch-icon.png` を作成
- [ ] `public/icon.svg` を確認 ✅ 作成済み
- [ ] `src/images/ogp.png` を作成（最重要）
- [ ] ブラウザでファビコンが表示されることを確認
- [ ] 本番デプロイ後、Twitter Card Validator でテスト
- [ ] 本番デプロイ後、Facebook Sharing Debugger でテスト

---

## 📐 サイズ早見表

| ファイル             | 幅       | 高さ     | 形式   |
| -------------------- | -------- | -------- | ------ |
| favicon.ico          | 16/32/48 | 16/32/48 | ICO    |
| apple-touch-icon.png | 180      | 180      | PNG    |
| icon.svg             | -        | -        | SVG ✅ |
| ogp.png              | 1200     | 630      | PNG ⚠️ |

---

## 🎨 カラーパレット

```css
プライマリ（青）:   #48ADFF
セカンダリ（ピンク）: #ED24C1
背景（ダーク）:      #0F172A
テキスト（白）:      #FFFFFF
```

---

## 📚 参考リンク

- [Favicon Generator](https://realfavicongenerator.net/)
- [Canva](https://www.canva.com/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

---

**最優先**: `src/images/ogp.png` (1200x630px) を作成してください。
これがないと、SNS でシェアされた際に画像が表示されません。
