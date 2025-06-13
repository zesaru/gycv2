import React from 'react';
import Layout from '../../components/layoutj';
import '../../pages/empresa.css';
import empresajpg from '../../static/img/empresa.jpg'

const empresa = () => {
  return (
    <Layout >
      <main className="contenedor">
        <article>

          <img className='imagenempresa' src={empresajpg} alt="gyccorp" />
          <h3>株式会社  G&amp;C CORPORATION</h3><br /><br />
          <h4>株式会社 </h4>
          <p>弊社は、日本国内においてペルーをはじめてする南米の食品の輸入及び卸業に従事しています。</p>
          <p>取引を行うメーカーは、いずれもその国を代表し、最良の商品を提供する会社です。</p>
          <p>また弊社は、ビジネスレベルだけでない、深い縁をペルー共和国ともっています。それにより、文化、伝統、グルメと言った良さを皆様に伝えたい気持ちを強くもち、国際交流の場を築けるよう努めております。</p>
          <ul>
            <li>   CORPORACIÓN LINDLEY S.A. </li>
            <li>   GLORIA S.A. </li>
            <li>   DESHIDRATADORA DE ALIMENTOS NATURALES S.R.L.</li>
            <li>   KIKKO CORPORATION S.A. </li>
            <li>   CV EXIMP S.A.C. </li>
            <li>   DESTILERIAS UNIDAS S.A.C. </li>
            <li>   PRODUCTOS EXTRAGEL Y UNIVERSAL S.A.C.  (PEUSAC) </li>
            <li>   BODEGAS Y VIÑEDOS TABERNERO S.A.C. </li>
            <li>   UNIÓN DE CERVECERÍAS PERUANAS BACKUS Y JOHNSTON S.A.A. </li>
            <li>   ARCA CONTINENTAL </li>
            <li>   THE GREEN FARMER S.A.C </li>
            <li>   BONALI S.A </li>
            <li>   QUECHUA FOODS </li>
            <li>   PERUVIAN NATURE </li>
            <li>   FRUTEX S.A </li>
            <li>   AGROINDUSTRAS EMIC </li>
            <li>   NOBEX S.A </li>
          </ul>
          <br />

          <h4>ミッション</h4>
          <p>適切な価格で、より質に優れた南米製品を日本市場に導入すること。
またペルー産の商品をはじめ、南米食品・飲料は高栄養価な食べ物が多くあることやその伝統や文化といった付加価値について紹介することも弊社の使命です。そのため、弊社のクライアントにも最終商品者にもご満足いただけるサービスを提供し、常にその向上に努めております。</p>
          <br />
          <h4>ビジョン</h4>
          <p>南米地域と日本国とのあいだの取引を強化し、そのための架け橋となること。
他方、同時に、南米市場と日本市場の利点を活かした、ビジネスモデルの展開を図っております。これにより、双方の地域間の情報や製品の流通が容易化され、製品の質が確保され、経費削減をも可能にします。</p>
          <br />
          <h4>価値観</h4>
          <p>弊社の活動は、忠誠心・プロ意識をもって投資家、提携企業、クライアントなどから得た信頼に基づき展開しています。これらの関係性を大切にしてゆき、今後とも関係者のご満足いただける活動になるよう努めております。また、社会・環境への配慮は、輸入する商品選びの時点から始め、環境や健康の破壊につながらない努力をしております。</p>
          <br />
          <h4>社会的責任</h4>
          <p>南米地域の文化及び伝統を奨励するあらゆる社会・運動・文化活動を支援しています。なお、それを通じて南米地域と日本とのあいだの文化交流を推進しており、多文化共生に努めております。</p>
        </article>
      </main>
    </Layout>
  );
}

export default empresa;