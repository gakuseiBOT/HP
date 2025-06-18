import { NextPage } from 'next';
import React from 'react';
import { Metadata } from 'next';
import CmdCard from '@/components/cmdCard';

export const metadata: Metadata = {
  title: 'コマンド一覧 - gakuseiBotコミュニティ',
  description: 'gakuseiBOTのコマンド一覧です。',
};

const ContactsPage: NextPage = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white text-black space-y-0">
      <section
        id="head"
        className="flex flex-col border border-gray-300 p-5 items-center justify-center w-full min-h-[370px] space-y-5"
      >
        <h1 className="text-4xl font-bold">使い方</h1>
        <p className="text-lg">gakuseiBotのコマンド一覧です。</p>
      </section>
      <section
        id="commands"
        className="lg:w-2/5 w-full flex flex-col mx-auto space-y-5 p-5"
      >
        {/* group-1 */}
        <CmdCard
          title="createembed"
          isRunning={true}
          description="カスタム埋め込みを作成します。"
          args={[
            {
              name: 'タイトル',
              description: '埋め込みのタイトルを入力します。',
              defaultValue: 'タイトル',
            },
            {
              name: '説明',
              description: '埋め込みに記載したいメッセージを入力します。',
              defaultValue: '説明',
            },
            {
              name: 'カラー',
              description: '埋め込みの色をカラーコードで指定できます。',
              required: false,
            },
            {
              name: '画像URL',
              description: '指定したURLの画像を添付できます。',
              required: false,
            },
          ]}
        />
        <CmdCard
          title="first_message_link"
          isRunning={true}
          description="指定したチャンネルの最初のメッセージにジャンプできます。"
        />
        <CmdCard
          title="studystart"
          isRunning={true}
          description="勉強を開始します。"
        />
        <CmdCard
          title="studyend"
          isRunning={true}
          description="勉強を終了します。"
        />
        <CmdCard
          title="search"
          isRunning={true}
          description="ウィキペディアからの引用検索をします。"
        />
        <CmdCard
          title="setgreeting"
          isRunning={true}
          description="挨拶メッセージ送信チャンネル指定および機能のオンオフ設定をします。"
        />
        <CmdCard
          title="botinfo"
          isRunning={true}
          description="botの導入情報を確認できます。"
        />
        <CmdCard
          title="status"
          isRunning={true}
          description="botの起動からの時間を確認できます。"
        />
        <CmdCard
          title="kanji_quiz_read"
          isRunning={true}
          description="漢字の読みの問題を出題します。読み書きともに制限時間は30秒。"
        />
        <CmdCard
          title="kanji_quiz_write"
          isRunning={true}
          description="漢字の書きの問題を出題します。読み書きともに制限時間は30秒。"
        />
        {/* group-2 */}
        <CmdCard
          title="math_quiz"
          isRunning={true}
          description="数学の問題を出題します。制限時間は45秒です。"
        />
        <CmdCard
          title="ranking"
          isRunning={true}
          description="サーバーごとにクイズに正解した回数をランキング形式で表示します。（回数はサーバーごとにカウントされます。）"
        />
        <CmdCard
          title="globalranking"
          isRunning={true}
          description="全サーバーでクイズに正解した回数をランキング形式で表示します。"
        />
        <CmdCard
          title="set_global_chat"
          isRunning={true}
          description="グローバルチャットシステムを起動させます。使用したいチャンネルで実行して下さい。"
        />
        <CmdCard
          title="disable_global_chat"
          isRunning={true}
          description="グローバルチャットシステムをオフにする際にグローバルチャットシステムを起動したチャンネルで実行して下さい。"
        />
        <CmdCard
          title="add_quote"
          isRunning={true}
          description="名言集に名言を追加します。"
        />
        <CmdCard
          title="delete_quote"
          isRunning={true}
          description="名言を削除します。"
        />
        <CmdCard
          title="list_quote"
          isRunning={true}
          description="サーバー内の名言を一覧表示します。"
        />
        <CmdCard
          title="random_quote"
          isRunning={true}
          description="ランダムに名言を表示します。"
        />
        <CmdCard
          title="server_ping"
          isRunning={true}
          description="指定したIPアドレスにPINGを送信します。"
        />
        <CmdCard
          title="server_time"
          isRunning={true}
          description="アプリの簡単な処理速度を確認します。"
        />
        <CmdCard
          title="server_info"
          isRunning={true}
          description="サーバーの詳細な情報を表示します。"
        />
        <CmdCard
          title="check_verified_bots"
          isRunning={true}
          description="サーバー内の認証されていないBOTを検出します。"
        />
        {/* group-3 */}
        <CmdCard
          title="rolepanel"
          isRunning={true}
          description="最大20個のロールでロール付与パネルを作成します。"
        />
        <CmdCard
          title="ticket_create"
          isRunning={true}
          description="チケットを作成します。"
        />
        <CmdCard
          title="serverguide"
          isRunning={true}
          description="ルールのテンプレを送信します。"
        />
        <CmdCard
          title="user_info"
          isRunning={true}
          description="ユーザーの作成日、警告回数、ブラックリスト、制限状態を表示します。(gakuseibotによる独自のもの)。"
        />
        <CmdCard
          title="weather"
          isRunning={true}
          description="地域を選択して天気を取得します。"
        />
        <CmdCard
          title="user_ban"
          isRunning={true}
          description="指定したユーザーをサーバーからBANします。"
        />
        <CmdCard
          title="user_unban"
          isRunning={true}
          description="指定したユーザーのサーバーからのBANを解除します。"
        />
        <CmdCard
          title="channel_lock"
          isRunning={true}
          description="荒らしにあった場合にチャンネルをロックします。"
        />
        <CmdCard
          title="poll"
          isRunning={true}
          description="アンケートを作成します。"
          args={[
            {
              name: 'title',
              description: 'タイトルを入力します。',
            },
            {
              name: 'question',
              description: '質問を入力します。',
            },
            {
              name: 'answer1',
              description: '選択肢を入力します。',
            },
            {
              name: 'answer2',
              description: '選択肢を入力します。',
            },
            {
              name: 'emoji1',
              description: '選択肢の絵文字を入力します。',
            },
            {
              name: 'emoji2',
              description: '選択肢の絵文字を入力します。',
            },
            {
              name: 'onevote',
              description: '1つの選択肢にしか投票できないようにします。',
              required: false,
            },
            {
              name: 'color',
              description: '埋め込みの色を指定します。',
              required: false,
            },
          ]}
        />
        <h1 className="text-2xl font-semibold">停止中のコマンド</h1>
        {/* ここからisRunnning={false} */}
        {/* group-1 ここから */}
        <CmdCard
          title="setreminder"
          isRunning={false}
          description="指定した日付のリマインダーを設定します。"
          args={[
            {
              name: 'date',
              description: 'リマインダーを設定する日付です。',
            },
            {
              name: 'message',
              description: 'リマインダーの内容です。',
            },
            {
              name: 'days_before',
              description: 'リマインダーの何日前に通知するかです。',
            },
          ]}
        />
        <CmdCard
          title="showreminders"
          isRunning={false}
          description="自分のリマインダーを表示します。"
        />
        <CmdCard
          title="clear_mine_reminders"
          isRunning={false}
          description="自分のリマインダーを削除します。"
        />
        <CmdCard
          title="listreminders"
          isRunning={false}
          description="自分のリマインダー一覧を表示します。"
        />
        {/* group-2 ここから */}
        <CmdCard
          title="setsticky"
          isRunning={false}
          description="固定メッセージを設定します。"
        />
        <CmdCard
          title="removesticky"
          isRunning={false}
          description="固定メッセージを解除します。"
        />
      </section>
    </main>
  );
};

export default ContactsPage;
