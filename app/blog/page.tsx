import Link from 'next/link'
import '../../styles/Blog.module.css'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch',
    excerpt: 'Explore the latest trends shaping the future of web development, including serverless architecture, AI-powered development tools, and more.',
    date: 'May 15, 2024',
    author: 'John Doe'
  },
  {
    id: 2,
    title: 'Mastering Data Science: Tips from Industry Experts',
    excerpt: 'Learn valuable insights and tips from experienced data scientists to help you excel in your data science journey.',
    date: 'May 10, 2024',
    author: 'Jane Smith'
  },
  {
    id: 3,
    title: 'Mobile App Development: Native vs. Cross-Platform',
    excerpt: 'Dive into the pros and cons of native and cross-platform mobile app development to help you choose the right approach for your project.',
    date: 'May 5, 2024',
    author: 'Mike Johnson'
  },
  {
    id: 4,
    title: 'The Role of AI in Modern Education',
    excerpt: 'Discover how artificial intelligence is transforming the education sector, from personalized learning experiences to intelligent tutoring systems.',
    date: 'April 30, 2024',
    author: 'Sarah Lee'
  },
  {
    id: 5,
    title: 'Cybersecurity Best Practices for Small Businesses',
    excerpt: 'Learn essential cybersecurity practices to protect your small business from common digital threats and data breaches.',
    date: 'April 25, 2024',
    author: 'David Brown'
  }
]

export default function Blog() {
  return (
    <div className="blog">
      <h1 className="section-title">SMIT Hyderabad Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p className="post-meta">By {post.author} on {post.date}</p>
            <p className="post-excerpt">{post.excerpt}</p>
            <Link href={`/blog/${post.id}`} className="btn">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  )
}