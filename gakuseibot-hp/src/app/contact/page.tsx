import { NextPage } from "next";
import { Button } from "@/components/button";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {

};

const ContactsPage: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white text-black space-y-0">
      <section
        id="contact"
        className="flex flex-col items-center justify-center flex-1 w-full space-y-5"
      >
        <h1 className="text-4xl font-bold">お問い合わせ先</h1>
        <p className="text-lg">
          ご依頼やご質問は下記連絡先にて受け付けております。
          <br />
          どうぞお気軽にご連絡・お問い合わせください。
        </p>
        <div
          id="mail"
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <h2 id="mail" className="text-3xl">
            メール
          </h2>
          <div id="hp" className="flex flex-col items-center space-y-3">
            <h3 className="text-2xl">HPに関するお問い合わせ</h3>
            webmaster[at]
            <Button href="mailto:webmaster@">
              メールを送る
            </Button>
          </div>
          <div id="othermail" className="flex flex-col items-center">
            <h3 className="text-2xl">その他お問い合わせ</h3>
            info[at]
            <Button href="mailto:info@">
              メールを送る
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactsPage;
