type Content = {
  tip: string;
  details: string[];
};

export type Article = {
  title: string;
  description: string;
  tags: string[];
  contents: Content[];
};
