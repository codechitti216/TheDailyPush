/*
 * Research Portfolio Template - CV Page
 * © 2025 Surya GS Chitti
 * 
 * This file is part of the Research Portfolio Template.
 * Template design and original implementation by Surya GS Chitti.
 * 
 * Attribution required when using this template.
 * GitHub: https://github.com/codechitti216/TheDailyPush
 */

import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Mail, Github, Linkedin } from 'lucide-react';

const CV = () => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Research_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="font-serif text-4xl font-semibold text-gray-900">Curriculum Vitae</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Academic and research portfolio template.
        </p>
        <Button onClick={handleDownload} size="lg">
          <Download className="mr-2 h-4 w-4" />
          Download CV (PDF)
        </Button>
      </div>

      {/* Contact Information */}
      <div className="content-card">
        <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-gray-600" />
              <a href="mailto:researcher@example.com" className="academic-link">
                researcher@example.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Github className="h-5 w-5 text-gray-600" />
              <a href="https://github.com/researcher" className="academic-link">
                github.com/researcher
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Linkedin className="h-5 w-5 text-gray-600" />
              <a href="https://linkedin.com/in/researcher" className="academic-link">
                linkedin.com/in/researcher
              </a>
            </div>
          </div>
          <div>
            <p className="text-gray-700">
              <strong>Phone:</strong> +1-555-123-4567<br />
              <strong>Preferred Locations:</strong> University City, State
            </p>
          </div>
        </div>
      </div>

      {/* TL;DR */}
      <div className="content-card">
        <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">TL;DR</h2>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Experience */}
      <div className="content-card">
        <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-6">Experience</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-serif text-xl font-medium text-gray-900">Senior Research Position</h3>
            <p className="text-gray-600 mb-2">Research Institution • Dates</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Project 1:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li><strong>Project 2:</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><strong>Project 3:</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
              <li><strong>Project 4:</strong> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-medium text-gray-900">Research Intern</h3>
            <p className="text-gray-600 mb-2">Research Lab • Dates</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Research Area 1:</strong> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</li>
              <li><strong>Research Area 2:</strong> Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-medium text-gray-900">Student Intern</h3>
            <p className="text-gray-600 mb-2">Academic Institution • Dates</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Project A:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</li>
              <li><strong>Project B:</strong> Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</li>
              <li><strong>Project C:</strong> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="content-card">
        <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-6">Education</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-serif text-xl font-medium text-gray-900">University Name</h3>
            <p className="text-gray-600">Ph.D. in Computer Science • Years</p>
            <p className="text-gray-700">Specialization: Machine Learning</p>
            <p className="text-sm text-gray-600 mt-1">
              Relevant Courses: Advanced Machine Learning, Research Methods, Data Structures, 
              Statistical Analysis, Computer Vision, Natural Language Processing
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-medium text-gray-900">University Name</h3>
            <p className="text-gray-600">M.S. in Computer Science • Years</p>
            <p className="text-sm text-gray-600 mt-1">
              Relevant Courses: Deep Learning, Database Systems, Algorithm Design, Systems Programming, Advanced Statistics
            </p>
          </div>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="content-card">
        <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-6">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-serif text-lg font-medium text-gray-900 mb-3">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'C/C++', 'SQL (Postgres)'].map(skill => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium text-gray-900 mb-3">Libraries & Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {['PyTorch', 'NumPy', 'Pandas', 'Scikit-learn', 'OpenCV', 'Open3D', 'Open3D-ML', 'Matplotlib', 'Streamlit', 'SciPy', 'BeautifulSoup'].map(skill => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium text-gray-900 mb-3">Developer Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['Git', 'VS Code', 'Jupyter', 'LM Studio'].map(skill => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium text-gray-900 mb-3">Other Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['Bash', 'Linux CLI', 'Trafilatura', 'Google Developer API', 'Whisper', 'CloudCompare'].map(skill => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Projects */}
      <div className="content-card">
        <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-6">Selected Projects</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-serif text-lg font-medium text-gray-900">Sample Research Project 1</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium text-gray-900">Sample Research Project 2</h3>
            <p className="text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-medium text-gray-900">Sample Research Project 3</h3>
            <p className="text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
            </p>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="text-center">
        <Button onClick={handleDownload} size="lg" variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download Full CV (PDF)
        </Button>
        <p className="text-sm text-gray-600 mt-2">
          Last updated: Template Version
        </p>
      </div>
    </div>
  );
};

export default CV;

