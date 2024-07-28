import { Button } from '~/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import { Github } from 'lucide-react';

const AboutDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="ghost">About</Button>
      </DialogTrigger>
      <DialogContent className="md:w-[60vw]">
        <DialogHeader>
          <DialogTitle>About the project</DialogTitle>
        </DialogHeader>
        <section className="max-h-[70vh] overflow-scroll">
          <p>
            Welcome to <strong>Project Video Summarizer</strong>!
          </p>

          <p className="mt-2">
            This dashboard is a hobby project born out of curiosity and a
            passion for exploring the capabilities of Large Language Models
            (LLMs) and their applications in content summarization.
          </p>

          <h3 className="mt-2 font-semibold">What We Do</h3>
          <p>
            We curate a selection of property reviews videos from the Youtube
            Channel{' '}
            <a
              href="https://www.youtube.com/c/iherng"
              target="_blank"
              rel="noopener noreferrer"
            >
              iherng
            </a>
            and use Google's Gemini AI (specifically the{' '}
            <code>gemini-1.5-pro</code> model) to generate summaries of each
            video. Our goal is to provide quick insights into video content,
            making it easier for users to find relevant information without
            watching entire videos.
          </p>

          <h3 className="mt-2 font-semibold">Key Features</h3>
          <ul className="list-disc list-inside">
            <li>
              YouTube Video Curation: property reviews videos from the Youtube
              Channel, iherng.
            </li>
            <li>
              AI-Powered Summaries: Each video is summarized using the Gemini
              1.5 Pro model by Google.
            </li>
            <li>
              Easy Navigation: Browse through summaries to quickly find content
              that interests you.
            </li>
            <li>
              Original Source Links: Each summary is accompanied by a link to
              the original YouTube video.
            </li>
          </ul>

          <h3 className="mt-2 font-semibold">Technology Stack</h3>
          <ul className="list-disc list-inside">
            <li>Data Collection: Python scripts for YouTube data scraping</li>
            <li>Summarization: Google's Gemini 1.5 Pro model via API</li>
            <li>Frontend: React, Tailwind CSS, Shadcn UI</li>
          </ul>

          <h3 className="mt-2 font-semibold">Purpose and Limitations</h3>
          <p>
            This project is an experiment in AI application and is intended for
            educational and demonstration purposes only. The summaries are
            AI-generated and may not capture all nuances of the original
            content. Always refer to the original videos for complete
            information.
          </p>

          <h3 className="mt-2 font-semibold"> Future Plans</h3>
          <p>
            We're constantly looking to improve and expand this project. Future
            updates may include:
          </p>
          <ul>
            <li>Refined summarization techniques</li>
          </ul>

          <h3 className="mt-2 font-semibold">Feedback and Contributions</h3>
          <p>
            As an open experiment, we welcome feedback and suggestions. If you
            have ideas for improvement or would like to contribute, please reach
            out to <a href="mailto:ooithianhooi@gmail.com">this email</a>.
          </p>

          <p className="mt-4">
            Thank you for exploring this project with us. We hope it provides
            value and sparks your interest in the possibilities of AI and
            content curation!
          </p>
        </section>
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

export default AboutDialog;
