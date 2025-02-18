import { NextPage } from "next";
import React from "react";
import { Metadata } from "next";
import CmdCard from "@/components/cmdCard";

export const metadata: Metadata = {
  title: "コマンド一覧 - gakuseiBotコミュニティ",
  description: "gakuseiBOTのコマンド一覧です。",
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
          title="serach"
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
          title="user_info"
          isRunning={true}
          description="ユーザーの作成日、警告回数、ブラックリスト、制限状態を表示します。(gakuseibotによる独自のもの)。"
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
              name: "date",
              description: "リマインダーを設定する日付です。",
            },
            {
              name: "message",
              description: "リマインダーの内容です。",
            },
            {
              name: "days_before",
              description: "リマインダーの何日前に通知するかです。",
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
          title="setreaction"
          isRunning={false}
          description="特定の言葉に特定の言葉で反応します。"
        />
        {/* group-3 ここから */}
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
