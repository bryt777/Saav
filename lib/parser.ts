export interface SaveSettings {
  artQuality: number;
  fpsLevel: number;
  brightness: number;
  crosshairColor: number;
  mainVolume: number;
  uiVolume: number;
}

function readInt(buffer: Buffer, key: string) {
  const idx = buffer.indexOf(key);

  if (idx === -1) return 0;

  return buffer.readInt32LE(idx + key.length + 29);
}

function readFloat(buffer: Buffer, key: string) {
  const idx = buffer.indexOf(key);

  if (idx === -1) return 0;

  return buffer.readFloatLE(idx + key.length + 33);
}

export function parseSave(buffer: Buffer): SaveSettings {
  return {
    artQuality: readInt(buffer, "ArtQuality"),
    fpsLevel: readInt(buffer, "FPSLevel"),
    brightness: Math.round(
      readFloat(buffer, "ScreenLightness") * 100
    ),
    crosshairColor: readInt(buffer, "HolographicCHColor"),
    mainVolume: Math.round(
      readFloat(buffer, "MainVolumValue") * 100
    ),
    uiVolume: Math.round(
      readFloat(buffer, "UIVolumValue") * 100
    )
  };
}
