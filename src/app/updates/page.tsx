import UpdateTitle from "@/components/UpdateTitle";
import fs from "fs/promises";
import path from "path";
import { Metadata } from "next";

const isNew = (dateStr: string) => {
  const now = new Date();
  const posted = new Date(dateStr);
  const diff = (now.getTime() - posted.getTime()) / (1000 * 60 * 60 * 24);
  return diff < 4; // 3日以内
};

export const metadata: Metadata = {
  title: "更新情報 - gakuseiBotコミュニティ",
  description: "gakuseiBOTの更新情報をお知らせします。",
};

export default async function UpdatesPage() {
  const filePath = path.join(process.cwd(), "src/data/updates.json");
  const file = await fs.readFile(filePath, "utf-8");
  const update = JSON.parse(file);

  return (
    <main className="flex flex-col items-center w-full min-h-screen space-y-0 text-black bg-white">
      <section
        id="updates-head"
        className="w-full border flex flex-col items-center p-5 min-h-[370px] bg-white text-black space-y-6 justify-center"
      >
        <h1 className="mt-10 text-4xl font-bold">更新情報</h1>
        <p className="text-lg">日々新しくなるgakuseiBOTの様子をお伝えします。</p>
      </section>

      <p>ダミーデータです。この状態で公開しないでください。</p>
      <div className="max-w-2xl px-4 mx-auto">
        {update.map((update: any) => (
          <UpdateTitle
            key={update.slug}
            title={update.title}
            date={update.date}
            type={update.type}
            slug={update.slug}
            isNew={isNew(update.date)}
          />
        ))}
      </div>
    </main>
  );
}
