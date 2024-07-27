import { Github } from 'lucide-react';
import { Button } from '~/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';

const DisclaimerDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="ghost">Disclaimer</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Disclaimer</DialogTitle>
        </DialogHeader>
        <div className="max-h-[70vh] overflow-scroll">
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Content Origin and Copyright: This dashboard displays content
              originally published on YouTube. All videos, titles, descriptions,
              and other associated content are the property of their respective
              owners. We do not claim ownership of any content shown here.
            </li>
            <li>
              Fair Use and Transformative Work: The summaries and analyses
              provided are generated using AI language models and are intended
              for educational and informational purposes only. This use is
              believed to fall under fair use doctrine as a transformative work.
            </li>
            <li>
              Accuracy and AI-Generated Content: The summaries are created using
              artificial intelligence and may not fully capture all nuances or
              details of the original content. Users should refer to the
              original videos for complete and accurate information.
            </li>
            <li>
              No Endorsement: The inclusion of any content on this dashboard
              does not imply endorsement, approval, or recommendation of the
              content or its creators.
            </li>
            <li>
              External Links: This dashboard may contain links to external
              websites or platforms. We are not responsible for the content or
              privacy practices of these external sites.
            </li>
            <li>
              Data Collection and Privacy: Information displayed here is
              collected through automated means. We respect privacy rights and
              aim to comply with all relevant data protection laws.
            </li>
            <li>
              Non-Commercial Use: This dashboard is for non-commercial,
              educational purposes only. It is not intended to compete with or
              replace the original content platforms.
            </li>
            <li>
              Removal Requests: If you are a content owner and wish to have your
              content removed from this dashboard, please contact us at{' '}
              <a className="underline" href="mailto:ooithianhooi@gmail.com">
                this email
              </a>
              .
            </li>
            <li>
              Limitations of Liability: We provide this dashboard "as is"
              without any warranties. We shall not be liable for any damages
              arising from the use of this dashboard.
            </li>
            <li>
              Changes to Content: The content on this dashboard is subject to
              change without notice as it reflects real-time data from YouTube.
            </li>
            <li>
              By using this dashboard, you acknowledge that you have read,
              understood, and agree to this disclaimer. If you do not agree,
              please do not use this dashboard.
            </li>
          </ol>
        </div>
        <DialogFooter className="sm:flex-col sm:space-x-0 ">
          <div className="flex space-x-2">
            <p>
              <strong>Thian Hooi</strong>
            </p>
            <a
              href="https://github.com/ThianHooi"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
          <div className="italic text-sm">Last updated: 27 July 2024</div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerDialog;
