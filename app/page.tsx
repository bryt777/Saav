import SplashScreen from "@/components/SplashScreen";
import UploadBox from "@/components/UploadBox";

export default function Home() {
  return (
    <>
      <SplashScreen />

      <main className="min-h-screen flex items-center justify-center bg-black px-6">

        <div className="max-w-xl w-full">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10">

            <h1 className="text-6xl font-bold text-center">
              SEVEN
            </h1>

            <p className="mt-4 text-center text-zinc-400">
              PUBG Mobile & BGMI Active.sav Editor
            </p>

            <div className="mt-10 space-y-2 text-zinc-300">

              <div>✓ Graphics</div>
              <div>✓ Brightness</div>
              <div>✓ Crosshair</div>
              <div>✓ Sensitivity</div>
              <div>✓ Audio</div>

            </div>

            <UploadBox />

          </div>

        </div>

      </main>
    </>
  );
}
