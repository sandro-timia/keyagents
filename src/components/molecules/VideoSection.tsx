import Heading from '../atoms/Heading';

interface VideoSectionProps {
  videoUrl: string;
  title: string;
  description: string;
}

export default function VideoSection({ videoUrl, title, description }: VideoSectionProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="order-2 md:order-1">
        <Heading level={2} className="mb-4 text-electric-blue">{title}</Heading>
        <p className="text-dark-gray text-lg mb-6">{description}</p>
      </div>
      <div className="order-1 md:order-2 relative aspect-video rounded-xl overflow-hidden shadow-lg border-4 border-electric-blue">
        <iframe
          src={videoUrl}
          title="Course preview video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
} 