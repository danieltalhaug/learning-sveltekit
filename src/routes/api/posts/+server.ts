import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

async function getPosts(): Promise<Post[]> {
    const posts: Post[] = [];
    const paths = import.meta.glob('/src/posts/*.md', {
        eager: true,
    });

    // Create posts data
    for (const path in paths)  {
        const file = paths[path];
        const slug = path.split('/').at(-1)?.replace('.md', '');

        if (slug && file && typeof file === 'object' && 'metadata' in file) {
            const metadata = file.metadata as Omit<Post, 'slug'>;
            const post = {...metadata, slug} satisfies Post;
            
            posts.push(post);
        }
    }

    // Sort by date
    posts.sort((first, second) => {
        return new Date(second.date).getTime() - new Date(first.date).getTime();
    });

    return posts;
}

export async function GET() {
    const posts = await getPosts();
    
    return json(posts);
}
