import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo/metadata";
import { FileText, Calendar } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = generateSEOMetadata({
  title: "Blog - HeavyPermit",
  description:
    "Ratgeber und Expertenwissen zu Schwertransport-Genehmigungen, rechtlichen Anforderungen und Tipps für Speditionen.",
  keywords: ["Schwertransport Blog", "Genehmigung Ratgeber", "Spedition Wissen"],
  canonical: "/blog",
});

const blogPosts = [
  {
    slug: "schwertransport-genehmigung-guide",
    title: "Schwertransport-Genehmigung: Der komplette Guide",
    excerpt:
      "Alles was Sie über Genehmigungen für Schwertransporte wissen müssen - von den rechtlichen Grundlagen bis zur Beantragung.",
    date: "2026-02-15",
    category: "Ratgeber",
  },
  {
    slug: "genehmigungs-pflichten-spediteure",
    title: "Genehmigungspflichten für Speditionen",
    excerpt:
      "Welche Pflichten haben Speditionen bei Schwertransporten? Ein Überblick über die wichtigsten rechtlichen Anforderungen.",
    date: "2026-02-10",
    category: "Rechtliches",
  },
  {
    slug: "strafen-vermeiden-schwertransporte",
    title: "Strafen bei fehlender Genehmigung vermeiden",
    excerpt:
      "Was kostet das Fahren ohne gültige Genehmigung? Wir zeigen Ihnen, wie Sie teure Bußgelder vermeiden können.",
    date: "2026-02-05",
    category: "Tipps",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog & Ratgeber
          </h1>
          <p className="text-xl text-gray-600">
            Expertenwissen zu Schwertransport-Genehmigungen
          </p>
        </div>

        {/* Blog Posts */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString("de-DE", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600">{post.excerpt}</p>
                  <div className="mt-4 text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition">
                    Weiterlesen →
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
