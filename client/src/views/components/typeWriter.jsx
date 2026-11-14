import { TypeAnimation } from "react-type-animation";

export const Typewriter = ({texts}) => {

  return (
    <div className="text-3xl font-bold text-white">
      <TypeAnimation
        sequence={texts.flatMap((texts) => [texts, 1000])}
        wrapper="span"
        speed={5}
        repeat={Infinity}
        className="text-[#ccd6f6]"
      />
    </div>
  );
};
