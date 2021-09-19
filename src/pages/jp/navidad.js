import React from 'react';
import Layout from "../../components/layoutj"
import styled from "styled-components"

const Content = styled.article`
  text-align: left;
`

const ContenInner = styled.p`
  font-size: 16px;
  line-height: 1.6em;
  padding: 12px;
`
const Title = styled.h4`
  padding: 10px;
  font-size: 20px;
  text-align: center;
`

const Subtitle = styled.span`
  font-weight: bolder;
`
const Indented = styled.span`
  padding-left: 10px;
`

const navidad = () => {
  return (
    <Layout>
      <main className="contenedor">
        <Content>
          <Title>抽選の規則や条件パネトングロリアキャンペーン</Title>
          <br />
          <ContenInner>
            <Subtitle>抽選事項：</Subtitle>
            <br />
            <br />
            抽選されるのは55アイテムです。
            <br />
            a) 沖縄への往復チケット5枚(2人1組)（各当選者5人に選択権があります)。
            <br />
            b) G&amp;C CORPORATIONギフトセット50人分
            <br />
            2. 未成年者の参加は、親権者もしくは未成年後見人の全責任の下可能です。
            <br />
            3. 抽選券は、パネトン900ℊの箱のパネトングロリアキャンペーンの表示がされている箇所を
切り取られたところのみが使用されます。その抽選券の裏側に参加に必要な内容が記載さ
れることになります。
            <br />
            4. ３に記載部分以外意外を抽選券とすることはできません。またコピーや不正に作成された
抽選券は受け付けられません。
            <br />
            5. 抽選は、株式会社G&amp;C CORPORATIONにおいて2022年02月12日に行われます。
            <br />
            6. 当選者の名前は、G&amp;C CORPORATIONのホームページ www.gyc-corp.com をはじめとする多く
の電子媒体などに掲載される予定です。
            <br />
            7. 抽選の内容は録画され、後日G&amp;C CORPORATIONのホームページとFACEBOOKに掲載される予定
です。
            <br />
            8. 抽選券の締め切りは2月10日消印となります。
            <br />
            9. 送付先：(株) G&amp;C CORPORATION本社 〒511-0001三重県桑名市上之輪新田1418番地  (株) G&amp;C CORPORATION美濃加茂営業所 〒505-0052　岐阜県美濃加茂市加茂野町今泉1261番地

            <br />
            <br />
            <Subtitle>応募事項：</Subtitle>
            <br />
            1. 抽選券に次の事項を読める字で記載してください：
            <br />
            a) フルネーム　（姓名）
            <br />
            b) 郵便番号を含む住所
            <br />
            c) e-mail ( 携帯のアドレスは受け付けません )
            <br />
            d) 電話番号（固定及び携帯電話）
            <br />
            e) 国籍
            <br />
            f) 生年月日
            <br />
            g) 抽選券を手に入れた方法や場所 
            <br />
            *a）～　f）は、必須事項です。
            <br />
            2. 同一人物による口数制限はありません 。
            <br />
            3. 抽選券一枚にあたり2人分の効力があります。 当選者本人が2人目を指定できます。
            <br />
            4. 原則として記載いただいた個人情報は、事前の確認なしに第三者に開示することはありません。
            <br />
            5. 抽選券が複数ある場合はまとめて送ることも可能です。
            <br />
            <br />
            <Subtitle>当選事項：</Subtitle>
            <br />
            1. 抽選の結果を明らかにするため、当選者は名前の公開をG&amp;C CORPORATIONに許可すること。
            <br/>
            2. 往復チケット5枚分(2人1組)に関する注意事項：
            <br />
            a) 往復チケットはエコノミークラスであり、日にち決定後の変更をすることはできません。
            <br />
            b) 2人は必ず同日出発になります。
            <br />
            c) 2月19日までに出発の日定を決め、旅行代理店に必ず連絡する必要があります。
            <br />
            d) チケットの出発日は2022年３月20日～2022年4月23日の間です。当選者の希望により変更される場合に生じた費用は各当選者の負担となります。
            <br />
            e) 第三者への譲渡は可能です。それに伴う費用の発生は当選者が負担するものとし、G&amp;C CORPORATIONは発生する費用や紛失などの責任は一切もちません。 

            <br />
            f) 出発地は次から選ぶことができます：関西、中部、羽田、成田。
            <br />
            g) 到着地は那覇空港に限ります。 
            <br />
            h) 最終到着地を追加や変更する場合に伴う費用や延泊などの費用は当選者が負担します。
            <br />
            3. 当選を辞退したことによる、報酬、支給やいかなる経済的な補償も致しかねます。
            <br />
            4. 55の賞はいずれも事前の連絡を経て当選者の住所に送付されます。
            <br />
            5. 往復チケットの当選者は最初にひかれる5枚とし、その次にギフトセット50人分の当選券をひいていきます。
            <br />
            6. 55人分の当選券以外にも５人分の券が引かれ、万が一55人分の券がいずれかが無効になることがある場合繰り上がりで当選します。
            <br />
            7. 当選者への連絡は、抽選日から7日間続けられもし連絡をとる事ができなかった場合無効となり、６に述べた通り繰り上げ順に当選者が変わります。
          </ContenInner>
        </Content>
      </main>
    </Layout>
  );
}

export default navidad;