# AWS Lambda(CDK) + Vitest Sample

## 使用ツール

- CDK v2
- Vitest(not prod)

## 使い方

```
yarn
yarn test // Vitestが動く
```

## 所感

- vitest は、さらっと使ってみた感じ Jest の代替ツールという感じ。
- Vite と同じくかなり早く動作するので、CI 等でテストを動かすには良さそう。。。
- テストコードも Jest と同じようにかける。
- まだ、開発途中なのでプロダクション等ではつかえない。😭
- デフォルトで TypeScript / JSX に対応している & jsdom の高速版の happy-dom にも対応しているので、Vue3 で JSX 使う人にはさらに良さげ。
- Lambda のテストにも使えるので、バックエンドでも良さそう。。。
