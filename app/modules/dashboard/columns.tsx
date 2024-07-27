import { ColumnDef } from '@tanstack/react-table';
import { Eye } from 'lucide-react';
import { Button } from '~/components/ui/button';
import YouTubeAnchor from './YouTubeAnchor';
import { getSearchGoogleMapsUrl } from '~/lib/utils';
import GoogleMapAnchor from './GoogleMapAnchor';

type Summary = {
  introduction?: Introduction;
  pros?: string;
  cons?: string;
  summary?: string;
};

type Introduction = {
  name?: string;
  location?: string;
  extra?: string[];
};

export type Video = {
  videoId?: string;
  title?: string;
  videoUrl?: string;
  property_name?: string;
  location?: string;
  summary?: Summary;
};

const padNumber = (num: number, numberOfDigits = 3) =>
  num.toString().padStart(numberOfDigits, '0');

export const columns: ColumnDef<Video>[] = [
  {
    accessorKey: 'videoId',
    header: 'ID',
  },
  {
    accessorKey: 'video_number',
    header: 'Number',
    cell: ({ row }) => <span>#{padNumber(row.getValue('video_number'))}</span>,
  },

  {
    accessorKey: 'property_name',
    header: 'Property Name',
  },
  {
    accessorKey: 'location',
    header: 'Location',
  },
  {
    accessorKey: 'location',
    header: 'Google Maps',
    cell: ({ row }) => (
      <GoogleMapAnchor
        href={getSearchGoogleMapsUrl(
          row.getValue('property_name'),
          row.getValue('location')
        )}
      />
    ),
  },
  {
    accessorKey: 'videoUrl',
    header: 'Video URL',
    cell: ({ row }) => <YouTubeAnchor href={row.getValue('videoUrl') ?? ''} />,
  },
];

export const getColumns = (onView?: (row: any) => void): ColumnDef<Video>[] => {
  return [
    ...columns,
    {
      accessorKey: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <Button
          onClick={() => onView?.(row.original)}
          variant="outline"
          size="icon"
        >
          <Eye />
        </Button>
      ),
    },
  ];
};
