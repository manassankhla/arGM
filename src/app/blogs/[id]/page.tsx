"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Search } from "lucide-react";
import Container from "@/components/container";
import DOMPurify from "dompurify";

export default function BlogPostPage() {
    const params = useParams();
    const id = params.id as string;

    // Blog posts data (in a real app, this would come from a database or CMS)
    const blogPosts = [
        {
            id: "1",
            title: "What Your Analytics are Trying to Tell You About Your Business ACTUAL Results",
            category: "Analytics",
            categories: ["Analytics", "Business"],
            image: "/Blog-Page-Images/Blog.jpg",
            excerpt: "As a business owner, you have access to tons of analytical data about your business...",
            content: `
        <p>As a business owner, you have access to tons of analytical data about your business. From website traffic to social media engagement, there's no shortage of metrics to track. But what do all these numbers really mean?</p>
        
        <p>Understanding your analytics is crucial for making informed business decisions. The data you collect can reveal patterns in customer behavior, highlight successful marketing strategies, and identify areas that need improvement.</p>
        
        <h2>Key Metrics to Watch</h2>
        
        <p>Not all metrics are created equal. While it's tempting to track everything, focusing on key performance indicators (KPIs) that align with your business goals is more effective. These might include conversion rates, customer acquisition costs, and customer lifetime value.</p>
        
        <p>Your analytics can tell you where your customers are coming from, what content resonates with them, and at what point they're leaving your sales funnel. This information is invaluable for optimizing your marketing efforts and improving your overall business strategy.</p>
        
        <h2>Making Data-Driven Decisions</h2>
        
        <p>The real power of analytics lies in how you use the data. It's not enough to simply collect information – you need to analyze it, draw insights, and take action based on what you learn.</p>
        
        <p>Regular review of your analytics should be part of your business routine. Set aside time each week or month to dive into your data, look for trends, and adjust your strategies accordingly. Remember, the goal isn't just to have data, but to use it to drive meaningful improvements in your business.</p>
      `,
            date: "January 15, 2024",
            readTime: "5 min read",
        },
        {
            id: "2",
            title: "Common Copywriting Mistakes that are Making Your Ideal Customers Click Away",
            category: "Copywriting",
            categories: ["Copywriting", "Marketing"],
            image: "/Blog-Page-Images/Blog.jpg",
            excerpt: "Copywriting is an art, not a science. And, what works sometimes for words...",
            content: `
        <p>Copywriting is an art, not a science. And what works sometimes for words on a page doesn't always translate to the digital world. Your website copy is often the first impression potential customers have of your business, and poor copywriting can send them running to your competitors.</p>
        
        <h2>Mistake #1: Writing for Yourself, Not Your Audience</h2>
        
        <p>One of the biggest mistakes businesses make is writing copy that focuses on what they want to say rather than what their audience needs to hear. Your customers don't care about your company history or awards – they care about how you can solve their problems.</p>
        
        <p>Always write with your ideal customer in mind. What are their pain points? What solutions are they looking for? How can you make their lives easier? Answer these questions in your copy, and you'll see better engagement.</p>
        
        <h2>Mistake #2: Using Jargon and Complex Language</h2>
        
        <p>Industry jargon might make you sound knowledgeable, but it can also alienate potential customers who aren't familiar with the terminology. Keep your language simple, clear, and accessible. Remember, the goal is to communicate, not to impress.</p>
        
        <h2>Mistake #3: Weak Calls-to-Action</h2>
        
        <p>Your copy should guide readers toward a specific action, whether that's making a purchase, signing up for a newsletter, or contacting you for more information. Weak or unclear calls-to-action leave visitors unsure of what to do next, resulting in lost opportunities.</p>
      `,
            date: "January 10, 2024",
            readTime: "4 min read",
        },
        {
            id: "3",
            title: "5 IG Stories Strategies to Boost Your Social Media Engagement",
            category: "Social Media",
            categories: ["Social Media", "Marketing"],
            image: "/Blog-Page-Images/Blog.jpg",
            excerpt: "Want to increase your audience engagement on social media? In the changing landscape...",
            content: `
        <p>Want to increase your audience engagement on social media? In the changing landscape of social media marketing, Instagram Stories have become one of the most powerful tools for connecting with your audience and building brand awareness.</p>
        
        <h2>Strategy #1: Use Interactive Stickers</h2>
        
        <p>Instagram offers a variety of interactive stickers like polls, questions, quizzes, and sliders. These features encourage your followers to engage directly with your content, creating a two-way conversation rather than passive consumption.</p>
        
        <p>The more your audience interacts with your Stories, the more likely Instagram's algorithm is to show your content to them in the future. It's a win-win situation that boosts both engagement and visibility.</p>
        
        <h2>Strategy #2: Share Behind-the-Scenes Content</h2>
        
        <p>People love getting a peek behind the curtain. Share your creative process, day-to-day operations, or team moments. This humanizes your brand and helps build stronger connections with your audience.</p>
        
        <h2>Strategy #3: Create Story Highlights</h2>
        
        <p>Don't let your best Stories disappear after 24 hours. Organize them into Highlights on your profile so new visitors can explore your content. This is especially useful for FAQs, product showcases, or customer testimonials.</p>
        
        <h2>Strategy #4: Post Consistently</h2>
        
        <p>Consistency is key on social media. Aim to post Stories regularly – ideally daily – to stay top-of-mind with your audience. This doesn't mean you need to create elaborate content every day; even simple updates can keep you connected.</p>
        
        <h2>Strategy #5: Use Strategic Hashtags and Location Tags</h2>
        
        <p>Adding relevant hashtags and location tags to your Stories can help new people discover your content. This expands your reach beyond your current followers and can attract potential customers who are interested in your niche.</p>
      `,
            date: "January 5, 2024",
            readTime: "6 min read",
        },
    ];

    // Find the current blog post
    const currentPost = blogPosts.find((post) => post.id === id);

    // Sanitize HTML content to prevent XSS attacks
    const [sanitizedContent, setSanitizedContent] = useState("");

    useEffect(() => {
        if (currentPost && typeof window !== "undefined") {
            const clean = DOMPurify.sanitize(currentPost.content);
            setSanitizedContent(clean);
        }
    }, [currentPost]);

    // Get related articles (exclude current post)
    const relatedArticles = blogPosts.filter((post) => post.id !== id).slice(0, 3);

    if (!currentPost) {
        return (
            <main className="bg-white text-black min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-serif mb-4">Blog Post Not Found</h1>
                    <Link href="/blogs" className="underline">
                        Return to Blog
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-white text-black min-h-screen">
            <Container>
                <div className="py-16 px-6">
                    {/* Back to Blog */}
                    <Link
                        href="/blogs"
                        className="inline-block text-sm uppercase tracking-wider mb-8 hover:underline"
                    >
                        ← Back to Blog
                    </Link>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {/* Categories */}
                            <div className="flex gap-3 mb-4">
                                {currentPost.categories.map((cat, index) => (
                                    <span
                                        key={index}
                                        className="text-xs uppercase tracking-widest text-gray-600"
                                    >
                                        {cat}
                                    </span>
                                ))}
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl font-heading italic mb-6 leading-tight">
                                {currentPost.title}
                            </h1>

                            {/* Meta Info */}
                            <div className="flex gap-4 text-sm text-gray-600 mb-8">
                                <span>{currentPost.date}</span>
                                <span>•</span>
                                <span>{currentPost.readTime}</span>
                            </div>

                            {/* Featured Image */}
                            <div className="relative h-[400px] mb-10 rounded-lg overflow-hidden">
                                <Image
                                    src={currentPost.image}
                                    alt={currentPost.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Blog Content */}
                            <div
                                className="font-body prose prose-lg max-w-none
                  prose-headings:font-serif prose-headings:font-normal
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                  prose-a:text-black prose-a:underline
                "
                                dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                            />
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Search Box */}
                            <div className="mb-10">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search the Site..."
                                        className="w-full px-4 py-3 bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-gray-300 rounded"
                                    />
                                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                </div>
                            </div>

                            {/* Related Articles */}
                            <div>
                                <h3 className="text-xl font-heading italic mb-6 uppercase tracking-wider">
                                    Related Articles
                                </h3>

                                <div className="space-y-6">
                                    {relatedArticles.map((article) => (
                                        <Link
                                            key={article.id}
                                            href={`/blogs/${article.id}`}
                                            className="block group"
                                        >
                                            <div className="relative h-[180px] mb-3 rounded overflow-hidden">
                                                <Image
                                                    src={article.image}
                                                    alt={article.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition duration-300"
                                                />
                                            </div>

                                            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                                                {article.category}
                                            </p>

                                            <h4 className="font-heading italic text-lg leading-snug group-hover:underline">
                                                {article.title}
                                            </h4>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Search by Category */}
                            <div className="mt-12">
                                <h3 className="text-xl font-heading italic mb-6 uppercase tracking-wider">
                                    Search by Category
                                </h3>

                                <div className="space-y-3">
                                    <button className="font-body block w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 transition rounded">
                                        Wellness
                                    </button>
                                    <button className="font-body block w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 transition rounded">
                                        DIY Beauty
                                    </button>
                                    <button className="font-body block w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 transition rounded">
                                        Food
                                    </button>
                                    <button className="font-body block w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 transition rounded">
                                        Meditation
                                    </button>
                                    <button className="font-body block w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 transition rounded">
                                        Energy Tips
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}
