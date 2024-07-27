import { DialogProps } from '@radix-ui/react-dialog';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '~/components/ui/sheet';
import { Video } from './columns';
import Markdown from 'react-markdown';
import YouTubeAnchor from './YouTubeAnchor';

type Props = Pick<DialogProps, 'open' | 'onOpenChange'> & { video?: Video };

const Title = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg font-semibold">{children}</h3>
);

export function DataSheet({ open, onOpenChange, video }: Props) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="overflow-y-scroll min-w-[50vw]">
        <SheetHeader>
          <SheetTitle>{video?.property_name}</SheetTitle>
          <SheetDescription>
            <YouTubeAnchor href={video?.videoUrl ?? ''} />
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col space-y-4 py-4">
          <div>
            <Title>Location</Title>
            <p>{video?.location}</p>
          </div>

          <div>
            <Title>Introduction</Title>
            <ul className="list-disc list-inside">
              {video?.summary?.introduction?.extra?.map((extra, index) => (
                <li key={index}>{extra}</li>
              ))}
            </ul>
          </div>

          <div>
            <Title>Pros</Title>
            <Markdown>{video?.summary?.pros}</Markdown>
          </div>
          <div>
            <Title>Cons</Title>
            <Markdown>{video?.summary?.cons}</Markdown>
          </div>

          <div>
            <Title>Summary</Title>
            <Markdown>{video?.summary?.summary}</Markdown>
          </div>
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
