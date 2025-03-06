import path from "path";
import { Article } from "./_source/type/tipDetailType";
import fs from "fs";
import Header from "./_source/components/Header";
import Image from "next/image";
import imagePath from "@/constants/imagePath";
import { Metadata } from "next";

export const dynamicParams = false;

export async function generateStaticParams() {
  return Array.from({ length: 6 }).map((_, idx) => ({ id: idx + 1 + "" }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const param = await params;
  const id = param.id;

  const filePath = path.join(
    process.cwd(),
    "src/app/(with-layout)/(no-header)/fridge/tip/[id]/_source/data/tips",
    `${id}.json`
  );

  const rawData = fs.readFileSync(filePath, "utf8");

  const data: Article = JSON.parse(rawData);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      type: "website",
      images: [
        {
          url: imagePath.fridgeTipDetail.src,
          width: 600,
          height: 300,
          alt: "사이트 이미지",
        },
      ],
    },
  };
}

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const param = await params;
  const id = param.id;

  const filePath = path.join(
    process.cwd(),
    "src/app/(with-layout)/(no-header)/fridge/tip/[id]/_source/data/tips",
    `${id}.json`
  );

  const rawData = fs.readFileSync(filePath, "utf8");

  const data: Article = JSON.parse(rawData);

  return (
    <div className="mb-20 px-4">
      <Header title={data.title} />
      <div>
        <h1 className="heading-xl text-content-secondary mb-2">{data.title}</h1>
        <p>{data.description}</p>
        <div className="mt-4 mb-4">
          <Image
            src={imagePath.fridgeTipDetail.src}
            alt={imagePath.fridgeTipDetail.alt}
            height={300}
            width={600}
            priority
            className="w-[calc(100%+32px)] -ml-4 -mr-[50px] h-auto"
          />
        </div>
        <ul className="flex flex-wrap mb-5">
          {data.tags.map((tag) => (
            <li
              className="bg-foundation-tertiary px-2 py-0.5 paragraph-xs rounded"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <ol className="py-6 px-8 flex flex-col gap-8 heading-m text-content-secondary ">
        {data.contents.map((content, idx) => (
          <li key={idx} className="list-decimal">
            <h3>{content.tip}</h3>
            <ul className="mt-3">
              {content.details.map((detail, idx) => (
                <li className=" list-disc paragraph-m" key={idx}>
                  {detail}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default page;
