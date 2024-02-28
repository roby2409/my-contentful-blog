import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export const getAllStories = () => {
  const files = fs.readdirSync(path.join('src/stories'));
  const mdxFiles = files.filter(file => file.split('.')[1] === 'mdx');

  const posts = mdxFiles
    .map(file => {
      const fileData = fs.readFileSync(path.join('src/stories', file), 'utf-8');
      const { data } = matter(fileData);
      return {
        frontMatter: data,
        slug: file.split('.')[0],
      };
    })
    .filter(post => new Date(post.frontMatter.date) >= new Date('2021-01-01'))
    .sort((a, b) => {
      const dateA = new Date(a.frontMatter.date).getTime();
      const dateB = new Date(b.frontMatter.date).getTime();
      return dateB - dateA;
    });

  return posts;
};
