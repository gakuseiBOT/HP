import { NextPage } from 'next';
import React from 'react';
import { Metadata } from 'next';
import BioCard from '@/components/bioCard';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: '開発者紹介 - gakuseiBotコミュニティ',
  description: 'gakuseiBOTの開発を支えるメンバーたちをご紹介します。',
};

interface MemberData {
  name: string;
  avatar?: string;
  text: string;
  homepage?: string;
  twitter?: string;
  github?: string;
  role: "Owner" | "Engineer" | "Adviser" | "Moderator" | "Creator";
}

const MEMBER_DATA: MemberData[] = [
  {
    name: "aki._.yama",
    avatar: "https://github.com/akiy2009.png",
    text: "gakuseiBOTの設計と全体統括を担当しています。",
    twitter: "JJ5RVW_2022",
    github: "akiy2009",
    role: "Owner",
  },
  {
    name: "y_yori07",
    avatar: "https://github.com/Yori072.png",
    text: "HPの作成頑張ってもらっています。",
    twitter: "Yori07_Editor",
    github: "Yori072",
    role: "Engineer",
  },
  {
    name: "takoyakidath",
    avatar: "https://github.com/takoyakidath.png",
    text: "クラウドサーバーの管理等をしていただいています。",
    homepage: "https://takoyaki.pkopko.jp",
    twitter: "takoyakidath",
    github: "takoyakidath",
    role: "Engineer",
  },
  {
    name: "maikuradentetu",
    avatar: "https://github.com/maikuradentetu.png",
    text: "今まで培ってきた経験を共有していただいています。",
    twitter: "nanka365",
    github: "maikuradentetu",
    role: "Adviser",
  },
  {
    name: "YuitoAkatsuki",
    avatar: "https://github.com/yuito-it.png",
    text: "フルスタックエンジニアをしています。",
    homepage: "https://yuito-it.jp",
    github: "yuito-it",
    twitter: "yuito_it_",
    role: "Engineer",
  },
  {
    name: "hosshey_7240",
    avatar: "https://github.com/hosshey7240.png",
    text: "モデレーターとして、サーバーの管理をしていただいています。",
    twitter: "hosshey_7240",
    github: "hosshey7240",
    role: "Moderator",
  },
  {
    name: "hazometa",
    avatar: "https://github.com/Hazometa.png",
    text: "サーバーの管理をメインで活動していただいています。",
    github: "Hazometa",
    role: "Moderator",
  },
  {
    name: "Dinar",
    avatar: "https://github.com/i03-Dinar.png",
    text: "gakuseiBOTのアイコンやホームページを作ります。",
    twitter: "i03_Dinar",
    github: "i03-Dinar",
    role: "Creator",
  },
  {
    name: "kento_kato.",
    text: "皆様が使いやすいHPを作れるように頑張ります。",
    role: "Engineer",
  },
  {
    name: "ぷとん(Puton)",
    avatar: "https://github.com/Puton1221.png",
    text: "培ってきた技術を元に発展に力を注げるよう頑張ります。",
    github: "PUton1221",
    twitter: "PutonFPS",
    role: "Engineer",
  },
  {
    name: "ねむa",
    avatar: "https://github.com/nemu-a1021.png",
    text: "頑張ります。",
    github: "nemu-a1021",
    twitter: "nemu_adatoomou",
    role: "Engineer",
  }
];

const Member: NextPage = () => {
  return (
    <main className="flex w-full flex-col">
      <PageHeader
        eyebrow="Team"
        title="開発者紹介"
        description="gakuseiBOT の開発を支えるメンバーたちをご紹介します。"
      />
      <section
        id="members"
        className="mx-auto grid w-full max-w-6xl grid-cols-1 justify-items-center gap-6 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:gap-8 lg:px-8 lg:py-16"
      >
        { MEMBER_DATA.map((member, index) => (
          <BioCard
            key={index}
            avatar={member.avatar}
            name={member.name}
            role={member.role}
            text={member.text}
            homepage={member.homepage}
            github={member.github}
            twitter={member.twitter}
          /> 
        ))}
      </section>
    </main>
  );
};

export default Member;
