import { ReactNode } from "react";

export default function Experience({
  titleExp,
  year,
  tag,
  children,
}: {
  titleExp: string;
  year: string;
  tag: string;
  children: ReactNode;
}) {
  return (
    <>
      <div>
        <ol>
          <li className="mb-12 flex rounded-md items-start flex-col md:flex-row max-w-full transition-all text-slate-500 hover:text-slate-300">
            <section className="w-full md:w-1/4">
              <header className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                {year}
              </header>
            </section>
            <section className="w-full md:w-3/4 flex flex-col space-y-3">
              <div>
                <h3 className="font-medium leading-tight">{titleExp}</h3>
              </div>

              <p className=" text-sm mt-2">{children}</p>
              <div className="flex flex-wrap space-x-3">
                <span className="bg-green-400/20 text-xs px-4 py-1 rounded-full text-green-200">
                  {tag}
                </span>
              </div>
            </section>
          </li>
        </ol>
      </div>
    </>
  );
}
