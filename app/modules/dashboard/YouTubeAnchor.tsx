import { Youtube } from 'lucide-react';

type Props = {
  href: string;
};

const YouTubeAnchor = ({ href }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center space-x-1 underline"
    >
      <span>YouTube</span>
      <Youtube className="w-5 h-5" />
    </a>
  );
};

export default YouTubeAnchor;
