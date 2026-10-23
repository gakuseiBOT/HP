type CmdCardProps = {
  title: string;
  description: string;
  isRunning?: boolean;
  args?: arg[];
};
type arg = {
  name: string;
  defaultValue?: string;
  description: string;
  required?: boolean;
};

export default function CmdCard({ title, description, isRunning = true, args }: CmdCardProps) {
  return (
    <article
      className={`border p-5 sm:p-6 ${
        isRunning ? 'border-slate-900/10 bg-white' : 'border-slate-900/10 bg-slate-50'
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <code className="rounded-lg bg-slate-900 px-2.5 py-1 font-mono text-sm font-semibold text-white">
          /{title}
        </code>
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${
            isRunning
              ? 'bg-emerald-50 text-emerald-700 ring-emerald-200'
              : 'bg-slate-100 text-slate-500 ring-slate-200'
          }`}
        >
          {isRunning ? '稼働中' : '停止中'}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
      {args && args.length > 0 && (
        <dl className="mt-4 divide-y divide-slate-100 rounded-xl bg-slate-50/70 px-4 py-1">
          {args.map((arg) => {
            const isRequired = arg.required ?? true;
            return (
              <div
                className="py-3"
                key={arg.name}
              >
                <dt className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-800">
                  <code className="font-mono">{arg.name}</code>
                  <span
                    className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${
                      isRequired
                        ? 'bg-blue-50 text-blue-700'
                        : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    {isRequired ? '必須' : 'オプション'}
                  </span>
                </dt>
                <dd className="mt-1 text-xs leading-relaxed text-slate-500">
                  {arg.description}
                  {arg.defaultValue && (
                    <span className="ml-1 text-slate-400">
                      （デフォルト: {arg.defaultValue}）
                    </span>
                  )}
                </dd>
              </div>
            );
          })}
        </dl>
      )}
    </article>
  );
}
