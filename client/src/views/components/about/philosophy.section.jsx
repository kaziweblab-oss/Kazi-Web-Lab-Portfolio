import { SectionTitle } from "../sectionTitle";

export const MyPhilosophy = () => {
  return (
    <div className="flex flex-col gap-10">
      <SectionTitle title="My Philosophy" />
      <div className="flex flex-col gap-5 font-semibold ">
        <p className="text-cyan-400 ">
          Learn Continuously. Build Consistently. Improve Constantly.
        </p>
        <p className="text-slate-300">
          I believe every project is an opportunity to learn something new. I
          value clean code, thoughtful design, problem-solving, and continuous
          improvement.
        </p>
        <p className="text-violet-300">
          My goal is to grow as a developer while creating meaningful digital
          products.
        </p>
      </div>
    </div>
  );
};
