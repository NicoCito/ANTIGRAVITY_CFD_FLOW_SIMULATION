// ===== Time Manager =====

import { Clock } from 'three';

export class TimeManager {
  private clock: Clock;
  private _paused = false;
  private _deltaTime = 0;
  private _elapsed = 0;

  constructor() {
    this.clock = new Clock(true);
  }

  get deltaTime(): number {
    return this._deltaTime;
  }

  get elapsed(): number {
    return this._elapsed;
  }

  get paused(): boolean {
    return this._paused;
  }

  update(): void {
    const raw = this.clock.getDelta();
    // Cap delta to avoid spiral of death on tab switch
    const capped = Math.min(raw, 1 / 15);
    if (this._paused) {
      this._deltaTime = 0;
    } else {
      this._deltaTime = capped;
      this._elapsed += capped;
    }
  }

  pause(): void {
    this._paused = true;
  }

  resume(): void {
    this._paused = false;
    this.clock.getDelta(); // flush accumulated delta
  }

  restart(): void {
    this._elapsed = 0;
    this._paused = false;
    this.clock.getDelta();
  }
}
