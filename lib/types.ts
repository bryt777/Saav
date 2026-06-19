export interface GraphicsSettings {
  artQuality: number;
  fpsLevel: number;
  brightness: number;
}

export interface CrosshairSettings {
  color: string;
  hitEffectColor: string;
}

export interface AudioSettings {
  mainVolume: number;
  uiVolume: number;
}

export interface SensitivitySettings {
  camera: number;
  ads: number;
  gyro: number;
}

export interface SaveData {
  graphics: GraphicsSettings;
  crosshair: CrosshairSettings;
  audio: AudioSettings;
  sensitivity: SensitivitySettings;
}
