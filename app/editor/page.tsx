"use client";

export default function EditorPage() {

  const fileName =
    typeof window !== "undefined"
      ? localStorage.getItem("seven-name")
      : "";

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="mx-auto max-w-6xl px-6 py-20">

        <h1 className="text-5xl font-bold">
          Editor
        </h1>

        <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-10">

          <p className="text-zinc-300">
            File:
          </p>

          <h2 className="mt-3 text-2xl">
            {fileName}
          </h2>

        </div>

      </div>

    </main>
  );
}
