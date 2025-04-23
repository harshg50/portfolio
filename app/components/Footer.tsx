import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-80 text-green-400 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold neon-text">
              H4CK3R_GUP74
            </Link>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/harsh-gupta-854937234"
              className="hover:text-green-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yourusername"
              className="hover:text-green-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href="mailto:harsh.gupta@outlook.in" className="hover:text-green-300 transition-colors">
              Email
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-green-600">
          © {new Date().getFullYear()} H4CK3R_GUP74. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
