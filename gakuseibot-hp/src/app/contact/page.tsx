import { NextPage } from "next";
import { Button } from "@/components/button";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {

};

const ContactsPage: NextPage = () => {
  return (
    <main className="flex min-h-[80vh] flex-col items-center bg-white text-black space-y-0">
      <section
        id="contact"
        className="flex flex-col items-center justify-center flex-1 w-full space-y-8"
      >
        <h1 className="text-4xl font-bold">お問い合わせ先</h1>
        <p className="text-lg">
          ご依頼やご質問は下記連絡先にて受け付けております。
          <br />
          どうぞお気軽にご連絡・お問い合わせください。
        </p>
        <div
          id="discord"
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <h2 className="text-3xl">
            Discordサポートサーバー
          </h2>
          <p className="text-lg">
            Discordサーバーでは、お問い合わせやご質問に対応しております。<br />
            雑談チャンネルもありますので、お気軽にご参加ください。
          </p>
          <Button href="/discord">
            Discordサーバーに参加
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ContactsPage;
