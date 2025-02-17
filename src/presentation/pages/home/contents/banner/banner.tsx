import { TiPen } from "react-icons/ti";
import GridPattern from "../../../../../@components/magicui/grid-pattern";
import TypingAnimation from "../../../../../@components/magicui/typing-animation";
import { cn } from "../../../../../@lib/utils";
import mhrPhoto from "../../../../../assets/maheryPhoto.png";
import { BoxRevealDemo } from "../../../../customComponents/boxReveal";
const Banner = () => {
  return (
    <div className=" h-full flex flex-col items-center">
      <div className="relative p-2 md:p-10 mt-20 md:w-[80%] flex  justify-between  mx-auto md:flex-row flex-col">
        <div className="w-full ">
          <BoxRevealDemo />
        </div>

        <div className="md:w-1/3 w-full">
          <img className="w-full" src={mhrPhoto} alt="" loading="lazy" />
        </div>

        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [15, 10],
            [10, 15],
            [15, 10],
            [10, 15],
            [15, 10],
          ]}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </div>
      <div className="md:w-[80%] w-full mx-auto  px-10">
        <div className="bg-white dark:bg-zinc-900 py-9 px-5 rounded-xl ">
          <h1 className="flex gap-2">
            Trusted by <TiPen />
          </h1>
          <TypingAnimation
            className="flex text-black dark:text-white"
            text="Développeur Full Stack JavaScript/TypeScript, passionné par la création d’applications web performantes et intuitives. Je maîtrise les technologies modernes du front-end et du back-end , tout en assurant la qualité du code grâce à TypeScript."
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
