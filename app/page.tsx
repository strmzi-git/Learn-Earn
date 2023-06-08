import HeadBody from "./components/HeadPage/HeadBody/HeadBody";
import Header from "./components/HeadPage/Header/Header";

export default function Home() {
  return (
    <div className="w-[100vw]">
      <div className="bg-myBlue clippedBg-head h-[1400px] md:h-[1000px]">
        <Header />
        <HeadBody />
      </div>
    </div>
  );
}
