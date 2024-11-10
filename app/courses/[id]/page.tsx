import '../../../styles/Courses-detail.module.css'

const courses = {
  'web-development': {
    title: 'Web Development',
    description: 'Learn to build modern web applications using HTML, CSS, JavaScript, and popular frameworks.',
    duration: '12 weeks',
    level: 'Beginner to Intermediate',
    syllabus: [
      'HTML5 and CSS3 fundamentals',
      'JavaScript ES6+ and DOM manipulation',
      'React.js for building user interfaces',
      'Node.js and Express for server-side development',
      'Database integration with MongoDB',
      'RESTful API design and implementation',
      'Authentication and authorization',
      'Deployment and hosting'
    ],
    instructor: 'John Doe',
    prerequisites: 'Basic computer skills and familiarity with web browsers'
  },
  'data-science': {
    title: 'Data Science',
    description: 'Master the art of data analysis, machine learning, and statistical modeling.',
    duration: '16 weeks',
    level: 'Intermediate to Advanced',
    syllabus: [
      'Introduction to Python for data science',
      'Data manipulation with Pandas',
      'Data visualization with Matplotlib and Seaborn',
      'Statistical analysis and hypothesis testing',
      'Machine learning algorithms and techniques',
      'Deep learning with TensorFlow and Keras',
      'Big data processing with Apache Spark',
      'Data science project development and presentation'
    ],
    instructor: 'Jane Smith',
    prerequisites: 'Basic programming knowledge and understanding of mathematics and statistics'
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    description: 'Create stunning mobile apps for iOS and Android using React Native.',
    duration: '10 weeks',
    level: 'Intermediate',
    syllabus: [
      'Introduction to React Native',
      'JavaScript ES6+ and React fundamentals',
      'Building user interfaces with React Native components',
      'Navigation and routing in mobile apps',
      'State management with Redux',
      'Integrating native device features',
      'API integration and data persistence',
      'Publishing apps to app stores'
    ],
    instructor: 'Mike Johnson',
    prerequisites: 'Basic knowledge of JavaScript and React'
  }
}

export default function CourseDetails({ params }: { params: { id: string } }) {
  const course = courses[params.id as keyof typeof courses]

  if (!course) {
    return <div>Course not found</div>
  }

  return (
    <div className="course-details">
      <h1 className="section-title">{course.title}</h1>
      <p className="description">{course.description}</p>
      <div className="course-info">
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Level:</strong> {course.level}</p>
        <p><strong>Instructor:</strong> {course.instructor}</p>
      </div>
      <div className="syllabus">
        <h2>Syllabus</h2>
        <ul>
          {course.syllabus.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="prerequisites">
        <h2>Prerequisites</h2>
        <p>{course.prerequisites}</p>
      </div>
    </div>
  )
}