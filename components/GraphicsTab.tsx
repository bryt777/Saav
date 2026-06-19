"use client";

import { useState } from "react";

export default function GraphicsTab() {
  const [brightness, setBrightness] = useState(30);
  const [fps, setFps] = useState(3);
  const [quality, setQuality] = useState(6);

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <h2 className="text-2xl font-bold">
        Graphics
      </h2>

      <div className="mt-8">

        <label>
          Brightness ({brightness}%)
        </label>

        <input
          className="w-full"
          type="range"
          min="0"
          max="100"
          value={brightness}
          onChange={(e) =>
            setBrightness(Number(e.target.value))
          }
        />

      </div>

      <div className="mt-6">

        <label>FPS</label>

        <select
          className="w-full rounded-xl bg-black p-3"
          value={fps}
          onChange={(e) =>
            setFps(Number(e.target.value))
          }
        >
          <option value={1}>30 FPS</option>
          <option value={2}>60 FPS</option>
          <option value={3}>90 FPS</option>
          <option value={4}>120 FPS</option>
        </select>

      </div>

      <div className="mt-6">

        <label>Graphics Quality</label>

        <select
          className="w-full rounded-xl bg-black p-3"
          value={quality}
          onChange={(e) =>
            setQuality(Number(e.target.value))
          }
        >
          <option value={1}>Smooth</option>
          <option value={4}>HD</option>
          <option value={6}>HDR</option>
          <option value={7}>UHD</option>
        </select>

      </div>

    </div>
  );
}
