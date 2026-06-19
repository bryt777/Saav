"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function UploadBox() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  async function handleFile(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (
      file.name.toLowerCase() !== "active.sav"
    ) {
      alert("Please select Active.sav");
      return;
    }

    const buffer = await file.arrayBuffer();

    localStorage.setItem(
      "seven-file",
      JSON.stringify(
        Array.from(new Uint8Array(buffer))
      )
    );

    localStorage.setItem(
      "seven-name",
      file.name
    );

    router.push("/editor");
  }

  return (
    <>
      <button
        className="mt-10 w-full rounded-2xl bg-white px-6 py-4 text-black font-semibold"
        onClick={() => inputRef.current?.click()}
      >
        Upload Active.sav
      </button>

      <input
        hidden
        ref={inputRef}
        type="file"
        onChange={handleFile}
      />
    </>
  );
}
