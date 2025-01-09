export default function Page() {
  return (
    <>
      <h2>商品一覧</h2>
      <button type="button">商品を追加する</button>
      <table>
        <thead>
          <tr>
            <th>商品ID</th>
            <th>商品名</th>
            <th>単価</th>
            <th>説明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>コットン100％バックリボンティアードワンピース(黒)</td>
            <td>6900</td>
            <td>
              大人の愛らしさを引き立てる、ナチュラルな風合い。リラックスxトレンドを楽しめる、上品なティアードワンピース
            </td>
            <td>
              <button type="button">更新・削除</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>ライトストレッチカットソー(ネイビー)</td>
            <td>2980</td>
            <td>
              しなやかな肌触りが心地よい、程よいフィット感のカットソー。ビジネスカジュアルにも普段遣いにも使える、ベーシックなデザイン。
            </td>
            <td>
              <button type="button">更新・削除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
