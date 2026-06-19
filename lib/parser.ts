import { SaveData } from "./types";

export function parseSave(buffer: Buffer): SaveData {
  const text = buffer.toString("latin1");

  return {
    graphics: {
      artQuality: text.includes("ArtQuality") ? 1 : 0,
      fpsLevel: text.includes("FPSLevel") ? 1 : 0,
      brightness: text.includes("ScreenLightness") ? 30 : 0
    }
  };
}
