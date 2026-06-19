export function setInt(
  buffer: Buffer,
  key: string,
  value: number
) {
  const idx = buffer.indexOf(key);

  if (idx === -1) return;

  buffer.writeInt32LE(
    value,
    idx + key.length + 29
  );
}

export function setFloat(
  buffer: Buffer,
  key: string,
  value: number
) {
  const idx = buffer.indexOf(key);

  if (idx === -1) return;

  buffer.writeFloatLE(
    value,
    idx + key.length + 33
  );
}
