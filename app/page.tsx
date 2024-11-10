import Link from 'next/link'
import '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>Welcome to SMIT Hyderabad</h1>
          <p>Empowering minds through quality education and innovative learning experiences.</p>
          <div className="cta-buttons">
            <Link href="/courses" className="btn">Explore Courses</Link>
            &nbsp;
            <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
      <section className="featured-courses">
        <div className="container">
          <h2 className="section-title">Featured Courses</h2>
          <div className="course-grid">
            <div className="course-card">
              <h3>Web Development</h3>
              <p>Learn to build modern web applications</p>
              <Link href="/courses/web-development" className="btn">Learn More</Link>
            </div>
            <div className="course-card">
              <h3>Data Science</h3>
              <p>Master the art of data analysis and machine learning</p>
              <Link href="/courses/data-science" className="btn">Learn More</Link>
            </div>
            <div className="course-card">
              <h3>Mobile App Development</h3>
              <p>Create stunning mobile apps for iOS and Android</p>
              <Link href="/courses/mobile-app-development" className="btn">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}