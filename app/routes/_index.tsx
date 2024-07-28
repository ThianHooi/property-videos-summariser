import type { MetaFunction } from '@remix-run/node';
import videos from '../../videos.json';
import { DataTable } from '~/modules/dashboard/DataTable';
import { columns, Video } from '~/modules/dashboard/columns';
import { DataSheet } from '~/modules/dashboard/DataDrawer';
import { useState } from 'react';
import DisclaimerDialog from '~/modules/dashboard/DisclaimerDialog';
import AboutDialog from '~/modules/dashboard/AboutDialog';

export const meta: MetaFunction = () => {
  return [
    { title: 'Property Videos Summary' },
    {
      name: 'description',
      content: 'Summary of property review videos by iherng',
    },
  ];
};

export default function Index() {
  const [selectedVideo, setSelectedVideo] = useState<Video>();

  return (
    <div className="flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4 justify-between w-full">
          <h1 className="text-3xl font-bold tracking-tight">Videos</h1>
          <div className="flex space-x-1 md:space-x-4">
            <AboutDialog />
            <DisclaimerDialog />
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-4 p-8 pt-6">
        <h2 className="text-sm font-medium leading-none">
          List of property review videos from iherng
        </h2>
        <DataTable
          columns={columns}
          data={videos as Video[]}
          onRowClick={(vid) => setSelectedVideo(vid)}
        />
        <DataSheet
          open={!!selectedVideo}
          onOpenChange={(open: boolean) => {
            if (!open) setSelectedVideo(undefined);

            return open;
          }}
          video={selectedVideo}
        />
      </div>
    </div>
  );
}
