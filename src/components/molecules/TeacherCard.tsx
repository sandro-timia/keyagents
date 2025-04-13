import Heading from '../atoms/Heading';

interface TeacherCardProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedInUrl?: string;
}

export default function TeacherCard({
  name,
  role,
  bio,
  imageUrl,
  linkedInUrl
}: TeacherCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Placeholder for teacher image */}
      <div className="h-64 w-full bg-gradient-to-r from-electric-blue to-digital-violet flex items-center justify-center">
        <span className="text-2xl font-bold text-white">{name.charAt(0)}</span>
      </div>
      <div className="p-6">
        <Heading level={3} className="mb-1">{name}</Heading>
        <p className="text-electric-blue font-medium mb-4">{role}</p>
        <p className="text-dark-gray mb-4">{bio}</p>
        {linkedInUrl && (
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-electric-blue hover:text-digital-violet transition-colors inline-flex items-center"
          >
            <span>Connect on LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
} 