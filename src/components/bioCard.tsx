import Image from 'next/image';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const roleStyles: Record<string, string> = {
  Owner: 'bg-amber-50 text-amber-700 ring-amber-200',
  Engineer: 'bg-blue-50 text-blue-700 ring-blue-200',
  Adviser: 'bg-violet-50 text-violet-700 ring-violet-200',
  Moderator: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  Creator: 'bg-rose-50 text-rose-700 ring-rose-200',
};

export default function BioCard({
  text,
  name,
  avatar,
  homepage,
  twitter,
  github,
  role,
}: {
  text: string;
  name: string;
  avatar?: string;
  homepage?: string;
  twitter?: string;
  github?: string;
  role: string;
}) {
  return (
    <article className="group flex w-full max-w-sm flex-col items-center rounded-3xl border border-slate-200/80 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
      <div className="relative h-16 w-16 overflow-hidden rounded-full bg-slate-100 ring-4 ring-slate-50">
        {avatar ? (
          <Image
            src={avatar}
            alt={`${name} のアイコン`}
            width={64}
            height={64}
            unoptimized
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-xl font-bold text-slate-400">
            {name.slice(0, 1)}
          </span>
        )}
      </div>
      <span
        className={`mt-4 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${
          roleStyles[role] ?? 'bg-slate-100 text-slate-600 ring-slate-200'
        }`}
      >
        {role}
      </span>
      <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-900">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
      {(github || twitter || homepage) && (
        <div className="mt-5 flex items-center gap-2">
          {github && (
            <a
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} の GitHub`}
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              <GitHubIcon style={{ fontSize: 18 }} />
            </a>
          )}
          {twitter && (
            <a
              href={`https://twitter.com/${twitter}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} の X (Twitter)`}
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              <TwitterIcon style={{ fontSize: 18 }} />
            </a>
          )}
          {homepage && (
            <a
              href={homepage}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} のウェブサイト`}
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              <LanguageIcon style={{ fontSize: 18 }} />
            </a>
          )}
        </div>
      )}
    </article>
  );
}
