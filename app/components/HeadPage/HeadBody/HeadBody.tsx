import Image from "next/image";
import Container from "../../Container";
import Button from "../../buttons/Button";

const HeadBody = function () {
  return (
    <div className="w-full h-full ">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-6 h-[70%]">
          <div className="h-full flex leading-[60px] flex-col order-2 md:order-1 items-start pl-10 justify-center px-4 flex-[0.7] ">
            <div className="text-[50px] tracking-tight relative font-semibold">
              <p>
                Build full-stack web apps without worrying about the front-end
              </p>

              <Image
                className="absolute top-[72px] translate-x-[125px] transform rotate-[5deg]"
                src={"/underline.svg"}
                alt="underline"
                width={200}
                height={1}
              />
            </div>
            <p className="mb-4 mt-4 leading-[25px]">
              Want to build a full-stack app to test your skills but can't
              create a design? Use our front-end designs to focus on your
              backend.
            </p>
            <Button label="7-day trial" outline large />
          </div>
          <div className="h-full flex  md:order-2 order-1 flex-[4] md:flex-[1] overflow-hidden">
            <Image
              alt="Website development picture"
              src={"/website-development.svg"}
              height={1100}
              width={1100}
              className="scale-[1.3]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default HeadBody;
