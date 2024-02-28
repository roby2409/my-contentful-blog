export type Story = {
  frontMatter: frontMatterStory;
  slug: string;
};

export type frontMatterStory = {
  date: string;
  description: string;
  readTime: string;
  thumbnail: string;
  title: string;
};
