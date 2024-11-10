import '../../styles/Courses.module.css'

const courses = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Learn to build modern web applications using HTML, CSS, JavaScript, and popular frameworks.',
    duration: '12 weeks',
    level: 'Beginner to Intermediate'
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Master the art of data analysis, machine learning, and statistical modeling.',
    duration: '16 weeks',
    level: 'Intermediate to Advanced'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Create stunning mobile apps for iOS and Android using React Native.',
    duration: '10 weeks',
    level: 'Intermediate'
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    description: 'Explore the fascinating world of AI, including machine learning and neural networks.',
    duration: '14 weeks',
    level: 'Advanced'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Learn to protect systems, networks, and programs from digital attacks.',
    duration: '12 weeks',
    level: 'Intermediate to Advanced'
  }
]

export default function Courses() {
  return (
    <div className="courses">
      <h1 className="section-title">Our Courses</h1>
      <div className="course-list">
        {courses.map((course) => (
          <div key={course.id} className="course-item">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <ul>
              <li><strong>Duration:</strong> {course.duration}</li>
              <li><strong>Level:</strong> {course.level}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}