import { notFound } from "next/navigation";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import updates from "@/data/updates.json";
import fs from "fs/promises";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

export default async function UpdateDetailPage({ params }: { params: { slug: string } }) {
  const update = updates.find((u) => u.slug === params.slug);
  if (!update) return notFound();

  const mdPath = path.join(process.cwd(), "src/data/updates", `${update.slug}.md`);

  let contentHtml = "";
  try {
    const fileContent = await fs.readFile(mdPath, "utf-8");
    const processed = await remark().use(html).process(fileContent);
    contentHtml = processed.toString();
  } catch (err) {
    console.error("Markdown読み込み失敗:", err);
    contentHtml = "<p>本文が見つかりません</p>";
  }

  const formattedDate = format(new Date(update.date), "yyyy年MM月dd日", { locale: ja });

  return (
    <main className="flex flex-col items-center w-full min-h-screen space-y-0 text-black bg-white">
      <section className="w-full border flex flex-col items-center p-5 min-h-[150px] bg-white text-black space-y-6 justify-center">
        <h2 className="mt-10 text-4xl font-bold">更新情報</h2>
        <h1 className="text-2xl font-bold mb-2">{update.title}</h1>
        <div className="text-sm mb-4">更新日: {formattedDate}</div>
      </section>
      
      <div
        className="prose prose-sm prose-blue"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </main>
  );
}
