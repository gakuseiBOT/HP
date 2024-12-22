import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '利用規約 - gakuseiBotコミュニティ',
  description: 'gakuseiBotコミュニティの利用規約です。',
};

const markdownString = `
# 利用規約

この利用規約（以下，「本規約」といいます。）は，GakuseiBotコミュニティ（以下，「当団体」といいます。）が提供するすべてのサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。

## 第1条（適用）

1. 本規約は，ユーザーと当団体との間の本サービスの利用に関わる一切の関係に適用されるものとします。
2. 当団体は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。
3. 本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。

## 第2条（利用登録）

1. 本サービスにおいては，登録希望者が本規約に同意の上，当団体の定める方法によって利用登録を申請し，当団体がこれを承認することによって，利用登録が完了するものとします。
2. 当団体は，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。
    1. 利用登録の申請に際して虚偽の事項を届け出た場合
    2. 本規約に違反したことがある者からの申請である場合
    3. その他，当団体が利用登録を相当でないと判断した場合

## 第3条（アカウント認証情報の管理）

1. ユーザーは，自己の責任において，本サービスのアカウントの認証情報を適切に管理するものとします。
2. ユーザーは，いかなる場合にも，自己の認証情報を第三者に譲渡または貸与し，もしくは第三者と共用することはできません。当団体は，認証情報が登録情報と一致してログインされた場合には，そのユーザーIDを登録しているユーザー自身による利用とみなします。
3. 認証情報が第三者によって使用されたことによって生じた損害は，当団体に故意又は重大な過失がある場合を除き，当団体は一切の責任を負わないものとします。

## 第4条（利用料金および支払方法）

1. ユーザーは，本サービスの有料部分の対価として，当団体が別途定め，本ウェブサイトに表示する利用料金を，当団体が指定する方法により支払うものとします。
2. ユーザーが利用料金の支払を遅滞した場合には，ユーザーは年14．6％の割合による遅延損害金を支払うものとします。

## 第5条（禁止事項）

ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。

1. 法令または公序良俗に違反する行為
2. 犯罪行為に関連する行為
3. 当団体及び第三者の知的財産権，著作権，肖像権，プライバシー権，名誉等，他の権利を侵害する行為
4. 当団体及び第三者のサービスの運営を妨害するまたはそのおそれのある行為
5. 他のユーザーに関する個人情報等を収集または蓄積する行為
6. 他のユーザーに成りすます行為
7. 当団体が許諾しない本サービス上での宣伝，広告，勧誘，または営業行為
8. 当団体のサービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為
9. その他，当団体が不適切と判断する行為

## 第6条（本サービスの提供の停止等）

当団体は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。

1. 本サービスにかかるコンピュータシステムの保守点検を行う場合
2. 地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合
3. コンピュータまたは通信回線等が事故により停止した場合
4. その他，当団体が本サービスの提供が困難と判断した場合

当団体は，本サービスの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。

## 第7条（利用制限および登録抹消）

当団体は，ユーザーが以下のいずれかに該当する場合には，事前の通知なく，ユーザーに対して，本サービスの全部もしくは一部の利用を制限し，またはユーザーとしての登録を抹消することができるものとします。

1. 本規約のいずれかの条項に違反した場合
2. 登録事項に虚偽の事実があることが判明した場合
3. 料金等の支払債務の不履行があった場合
4. 当団体からの連絡に対し，一定期間返答がない場合
5. 本サービスについて，最終の利用から一定期間利用がない場合
6. その他，当団体が本サービスの利用を適当でないと判断した場合

当団体は，本条に基づき当団体が行った行為によりユーザーに生じた損害について，一切の責任を負いません。

## 第8条（退会）

ユーザーは，当団体の定める退会手続により，本サービスから退会できるものとします。

## 第9条（保証の否認および免責事項）

1. 当団体は，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
2. 当団体は，本サービスに起因してユーザーに生じたあらゆる損害について、当団体の故意又は重過失による場合を除き、一切の責任を負いません。ただし，本サービスに関する当団体とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合，この免責規定は適用されません。
3. 前項ただし書に定める場合であっても，当団体は，当団体の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当団体またはユーザーが損害発生につき予見し，または予見し得た場合を含みます。）について一切の責任を負いません。また，当団体の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は，ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。
4. 当団体は，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。

## 第10条（サービス内容の変更等）

当団体は，ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。

## 第11条（利用規約の変更）

当団体は以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。

1. 本規約の変更がユーザーの一般の利益に適合するとき。
2. 本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。

当団体はユーザーに対し、前項による本規約の変更にあたり、事前に、本規約を変更する旨及び変更後の本規約の内容並びにその効力発生時期を通知します。

## 第12条（個人情報の取扱い）

当団体は，本サービスの利用によって取得する個人情報については，当団体「プライバシーポリシー」に従い適切に取り扱うものとします。

## 第13条（通知または連絡）

ユーザーと当団体との間の通知または連絡は，当団体の定める方法によって行うものとします。当団体は,ユーザーから,当団体が別途定める方式に従った変更届け出がない限り,現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い,これらは,発信時にユーザーへ到達したものとみなします。

## 第14条（権利義務の譲渡の禁止）

ユーザーは，当団体の書面による事前の承諾なく，利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し，または担保に供することはできません。

## 第15条（準拠法・裁判管轄）

本規約の解釈にあたっては，日本法を準拠法とします。
本サービスに関して紛争が生じた場合には，東京地方裁判所を専属的合意管轄とします。

## 第16条（分離可能性）

本契約の一部の条項が無効、違法または執行不能となった場合においても、その他の条項の有効性、合法性および執行可能性はいかなる意味においても損なわれることはなく、また影響を受けないものとします。

## 附則

この規約は令和7年1月1日より試行する。

以上
`;

const Home = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-white text-black space-y-0 py-5">
      <ReactMarkdown remarkPlugins={[remarkGfm]} className='markdown'>{markdownString}</ReactMarkdown>
    </main>
  );
};

export default Home;