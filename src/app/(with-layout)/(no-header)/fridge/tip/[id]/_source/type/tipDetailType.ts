type Content = {
  tip: string;
  details: string[];
};

export type Article = {
  title: string;
  image: string;
  description: string;
  tags: string[];
  contents: Content[];
};
