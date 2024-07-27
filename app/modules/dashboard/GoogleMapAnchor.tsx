import { Map } from 'lucide-react';

type Props = {
  href: string;
};

const GoogleMapAnchor = ({ href }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center space-x-1 underline"
    >
      <span>Map</span>
      <Map className="w-5 h-5" />
    </a>
  );
};

export default GoogleMapAnchor;
