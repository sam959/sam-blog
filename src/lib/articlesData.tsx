'use server'
import fs from 'fs/promises'; // Usa fs/promises per utilizzare async/await
import path from 'path';
import {Article} from '../model/article';
import {cache} from 'react';

const postsDirectory = path.join(process.cwd(), 'posts');

async function readAll() {
    return fs.readdir(postsDirectory);
}

export const getPostBySlug = async (slug: string): Promise<Article> => {
    const fullPath = path.join(postsDirectory, `${slug}`);
    const fileContents = await fs.readFile(fullPath, 'utf-8');
    return JSON.parse(fileContents);
};

export const getPostById = async (id: string): Promise<Article> => {
    console.log("finding article+++", id);

    let newVar = await getAllPosts();
    console.log("found article+++", newVar);
    return newVar.find(post => post.id == id);
};

export const getAllPosts = cache(async () => {
    await new Promise(r => setTimeout(r, 2000));

    const slugs = await readAll();
    return await Promise.all(slugs.map(slug => getPostBySlug(slug)));
});