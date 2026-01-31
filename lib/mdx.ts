import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const contentDirectory = path.join(process.cwd(), "content");
const headingsOptions = { behavior: 'wrap' } as const; // Type assertion to fix type error

// Generic function to get MDX content by slug and type
export async function getMDXContent(type: "projects" | "writings", slug: string) {
    const realSlug = slug.replace(/\.mdx?$/, "");
    let fullPath = path.join(contentDirectory, type, `${realSlug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        fullPath = path.join(contentDirectory, type, `${realSlug}.md`); // Start check for .md
    }

    if (!fs.existsSync(fullPath)) {
        return null; // Not found
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { content, frontmatter } = await compileMDX<{ title: string; summary: string; date?: string; tags?: string[] }>({
        source: fileContents,
        components: {
            // Add more MDX components here
        },
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [
                    rehypeSlug,
                    [rehypeAutolinkHeadings, headingsOptions],
                    [rehypePrettyCode, {
                        theme: 'github-dark',
                        keepBackground: false,
                        defaultLang: 'typescript',
                    }],
                ],
            }
        },
    });

    return { slug: realSlug, frontmatter, content };
}

export async function getAllContent(type: "projects" | "writings") {
    const dir = path.join(contentDirectory, type);

    if (!fs.existsSync(dir)) {
        return [];
    }

    const files = fs.readdirSync(dir);
    const items = await Promise.all(
        files.filter(file => /\.(md|mdx)$/.test(file)).map(async (file) => { // Updated filter
            const result = await getMDXContent(type, file);
            return result ? {
                slug: result.slug,
                ...result.frontmatter,
            } : null;
        })
    );

    return items
        .filter((item): item is NonNullable<typeof item> => item !== null)
        .sort((a, b) => {
            if (a.date && b.date) {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            }
            return 0;
        });
}

// maintain backward compatibility if needed, or just export the new ones
export const getAllProjects = () => getAllContent("projects");
export const getAllWritings = () => getAllContent("writings");
export const getProjectBySlug = (slug: string) => getMDXContent("projects", slug);
export const getWritingBySlug = (slug: string) => getMDXContent("writings", slug);
