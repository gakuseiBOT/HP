import { NextPage } from 'next';
import React from 'react';
import { Metadata } from 'next';
import BioCard from '@/components/bioCard';

export const metadata: Metadata = {
  title: '開発者紹介 - gakuseiBotコミュニティ',
  description: 'gakuseiBOTの開発を支えるメンバーたちをご紹介します。',
};

const ContactsPage: NextPage = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white text-black space-y-0">
      <section
        id="head"
        className="flex flex-col border border-gray-300 p-5 items-center justify-center w-full min-h-[370px] space-y-5"
      >
        <h1 className="text-4xl font-bold">開発者紹介</h1>
        <p className="text-lg">gakuseiBOTの開発を支えるメンバーたちをご紹介します。</p>
      </section>
      <section
        id="members"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-20 justify-items-center items-center mx-auto max-w-7xl"
      >
        <BioCard
          avatar="https://github.com/akiy2009.png"
          github="akiy2009"
          name="aki._.yama"
          role="Owner"
          text="gakuseiBOTの設計と全体統括を担当しています。"
          twitter="JJ5RVW_2022"
        />
        <BioCard
          avatar="https://github.com/Yori072.png"
          github="Yori072"
          name="y_yori07"
          role="Engineer"
          text="HPの作成頑張ってもらっています。"
          twitter="Yori07_Editor"
        />
        <BioCard
          avatar="https://github.com/takoyakidath.png"
          github="takoyakidath"
          name="takoyaki_death"
          role="Engineer"
          text="クラウドサーバーの管理等をしていただいています。"
          twitter="Takoyaki_death"
        />
        <BioCard
          avatar="https://github.com/maikuradentetu.png"
          github="maikuradentetu"
          name="maikuradentetu"
          role="Adviser"
          text="今まで培ってきた経験を共有していただいています。"
          twitter="nanka365"
        />
        <BioCard
          avatar="https://github.com/yuito-it.png"
          name="YuitoAkatsuki"
          role="Engineer"
          text="フルスタックエンジニア兼高校生兼ぬっこをしています。"
          github="yuito-it"
          twitter="yuito_it_"
          homepage="https://yuito.work"
        />
        <BioCard
          avatar="https://github.com/hosshey7240.png"
          github="hosshey7240"
          name="hosshey_7240"
          role="Moderator"
          text="モデレーターとして、サーバーの管理をしていただいています。"
          twitter="hosshey_7240"
        />
        <BioCard
          avatar="https://github.com/Hazometa.png"
          github="Hazometa"
          name="hazometa"
          role="Moderator"
          text="サーバーの管理をメインで活動していただいています。"
        />
        <BioCard
          avatar="https://github.com/i03-Dinar.png"
          name="Dinar"
          role="Creator"
          text="gakuseiBOTのアイコンやホームページを作ります。"
          github="i03-Dinar"
          twitter="i03_Dinar"
        />
        <BioCard
          name="kento_kato."
          role="Programmer"
          text="皆様が使いやすいHPを作れるように頑張ります。"
        />
        <BioCard
          avatar="https://github.com/Puton1221.png"
          name="ぷとん(Puton)"
          role="Programmer"
          text="培ってきた技術を元に発展に力を注げるよう頑張ります。"
          github="PUton1221"
          twitter="PutonFPS"
        />
        <BioCard
          avatar="https://github.com/nemu-a1021.png"
          name="ねむa"
          role="Programmer"
          text="頑張ります。"
          github="nemu-a1021"
          twitter="nemu_adatoomou"
        />
      </section>
    </main>
  );
};

export default ContactsPage;
