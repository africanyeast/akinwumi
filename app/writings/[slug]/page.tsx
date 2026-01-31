import { getWritingBySlug, getAllWritings } from "@/lib/mdx";
import { ProjectLayout } from "@/components/ProjectLayout";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const posts = await getAllWritings();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const post = await getWritingBySlug(resolvedParams.slug);
    if (!post) {
        return {};
    }
    return {
        title: `${post.frontmatter.title} | Wumi`,
        description: post.frontmatter.summary,
    };
}

export default async function WritingPage({ params }: Props) {
    const resolvedParams = await params;
    const post = await getWritingBySlug(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <ProjectLayout
            title={post.frontmatter.title}
            summary={post.frontmatter.summary}
            tags={post.frontmatter.tags || []}
            date={post.frontmatter.date}
        >
            <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-6 prose-p:leading-8 prose-li:my-2">
                {post.content}
            </div>
        </ProjectLayout>
    );
}
