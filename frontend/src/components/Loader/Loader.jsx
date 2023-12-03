import "./Loader.css";

export default function Loader() {
  return (
    <>
      <div className="h-screen w-screen fixed left-0 top-0 backdrop-blur-sm bg-white/50 backdrop">
        <div className="loader absolute">
          <div className="dot inline-block md:w-9 md:h-9 w-6 h-6"></div>
          <div className="dot inline-block md:w-9 md:h-9 w-6 h-6"></div>
          <div className="dot inline-block md:w-9 md:h-9 w-6 h-6"></div>
          <div className="dot inline-block md:w-9 md:h-9 w-6 h-6"></div>
          <div className="dot inline-block md:w-9 md:h-9 w-6 h-6"></div>
        </div>
      </div>
    </>
  );
}
