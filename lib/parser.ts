export function parseSave(buffer: Buffer) {
  const text = buffer.toString("latin1");

  function getInt(key: string) {
    const idx = text.indexOf(key);

    if (idx === -1) return 0;

    return buffer.readInt32LE(idx + key.length + 29);
  }

  function getFloat(key: string) {
    const idx = text.indexOf(key);

    if (idx === -1) return 0;

    return buffer.readFloatLE(idx + key.length + 33);
  }

  return {
    artQuality: getInt("ArtQuality"),
    fpsLevel: getInt("FPSLevel"),
    brightness: Math.round(
      getFloat("ScreenLightness") * 100
    )
  };
}
