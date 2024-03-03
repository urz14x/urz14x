import Image from "next/image";

export default function Project({ id }: { id: string }) {
  return (
    <ul id={id}>
      <li>
        <div className="flex md:flex-row flex-col-reverse gap-3 md:gap-3 text-slate-500 hover:text-slate-300 text-base md:text-sm transition-all">
          <section className="md:w-1/3 w-2/3">
            <Image
              src="/img/projects/Project-M-One.jpg"
              alt="Ustami Razib Profile"
              className=" rounded-md w-full h-full object-contain"
              width={200}
              height={48}
              priority
            />
          </section>

          <section className="md:w-2/3 w-full flex flex-col">
            <h3>Travel App · M-One Travel</h3>
            <p>
              Creating a web-based travel application interface at the m-one
              travella company built using laravel, tailwindcss
            </p>
          </section>
        </div>
      </li>
    </ul>
  );
}
