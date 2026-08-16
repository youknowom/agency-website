import { Link } from "react-router-dom";
import InteractiveGrid from "./InteractiveGrid";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-32 px-4 sm:px-6 lg:px-8 text-center"
    >
      {/* Mesh Gradient glowing halo in the center matching primary brand orange */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div
          className="w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full blur-[100px] sm:blur-[160px] opacity-20 dark:opacity-30"
          style={{
            background: "radial-gradient(circle, #ff5a1f 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Interactive grid canvas — replaces static CSS grid */}
      <InteractiveGrid />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center">
        {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
          Web Design &middot; Development &middot; Digital Products
        </div> */}

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[var(--text)] leading-[1.05] max-w-3xl">
          We build websites
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
            that grow your business.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-base sm:text-lg text-[var(--muted)] leading-relaxed">
          WebCraft is a digital agency helping startups and businesses design,
          build, and launch websites that look great, perform fast, and turn
          visitors into customers.
        </p>

        <div className="mt-12 text-xs font-bold uppercase tracking-[0.25em] text-[var(--muted)] opacity-85">
          Strategy &middot; Design &middot; Development &middot; Launch
        </div>
      </div>
    </section>
  );
}

export default Hero;
