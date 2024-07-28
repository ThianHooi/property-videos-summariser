import { ColumnDef } from '@tanstack/react-table';
import { Eye } from 'lucide-react';
import { Button } from '~/components/ui/button';
import YouTubeAnchor from './YouTubeAnchor';
import { getSearchGoogleMapsUrl } from '~/lib/utils';
import GoogleMapAnchor from './GoogleMapAnchor';

type Summary = {
  introduction?: Introduction;
  pros?: string | string[];
  cons?: string | string[];
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
    filterFn: (row, id, value) => {
      const name = row.getValue<string>('property_name')?.toLowerCase();
      const location = row.getValue<string>('location')?.toLowerCase();
      const search = value.toLowerCase();

      return name?.includes(search) || location?.includes(search);
    },
  },
  {
    accessorKey: 'location',
    header: 'Location',
  },
  {
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
