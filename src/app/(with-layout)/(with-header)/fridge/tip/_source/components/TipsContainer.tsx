import path from "path";
import TipItem from "./tip/TipItem";
import fs from "fs";

export type PrevArticle = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

const TipsContainer = async () => {
  const filePath = path.join(
    process.cwd(),
    "src/app/(with-layout)/(with-header)/fridge/tip/_source/data/tips",
    `prevTips.json`
  );

  const rawData = fs.readFileSync(filePath, "utf8");

  const ArticleList: PrevArticle[] = JSON.parse(rawData);

  return (
    <div className="">
      <div className=" mt-5 mb-5 heading-m">
        <p>식재료 관리가 고민이시라면</p>
      </div>
      <div className="flex flex-col gap-4 mb-20">
        {ArticleList.map((article) => (
          <TipItem article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
};

export default TipsContainer;
