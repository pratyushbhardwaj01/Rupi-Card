import ApplyForm from "./ApplyForm";
import Header from "./Header";

const Backdrop = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center">
      <Header />
      <div className="max-w-6xl w-full bg-transparent z-10 h-full p-6 md:flex md:flex-row-reverse">
        <img
          className="w-60 mb-6 md:mb-0 md:w-96 md:ml-10"
          src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png"
        />
        <div>
          <span className="text-3xl md:text-6xl mt-6">
            <strong>NX Wave.</strong>
            <span className="md:text-5xl text-justify">
              The next-gen credit card for those who love rewards.
            </span>
          </span>
          <div className="space-x-2 text-sm mt-2 md:text-base">
            <span>1% cashback</span>
            <span>+</span>
            <span>5x rewards</span>
            <span>+</span>
            <span>Zero forex markup</span>
          </div>
          <div className="hidden md:block">
            <ApplyForm className="mt-4" />
          </div>
        </div>
      </div>
      <video
        className="absolute top-0 -z-10 min-h-screen object-cover"
        autoPlay
        muted
        loop
      >
        <source
          src="https://www.uni.cards/videos/nxt_wave_bg.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Backdrop;
