'use server'
import fs from 'fs/promises'; // Usa fs/promises per utilizzare async/await
import path from 'path';
import {Article} from '../model/article';
import {cache} from 'react';

const postsDirectory = path.join(process.cwd(), 'posts');

async function readAll() {
    return  fs.readdir(postsDirectory);
}

export const getPostBySlug = async (slug: string): Promise<Article> => {
    const fullPath = path.join(postsDirectory, `${slug}`);
    const fileContents = await fs.readFile(fullPath, 'utf-8');
    return JSON.parse(fileContents);
};

export const getAllPosts = cache(async () => {
    const slugs = await readAll();
    return await Promise.all(slugs.map(slug => getPostBySlug(slug)));
});