// Create a new file for prayer time calculations
export class PrayerTimes {
  constructor() {
    this.timeNames = {
      fajr: 'Fajr',
      sunrise: 'Sunrise',
      dhuhr: 'Dhuhr',
      asr: 'Asr',
      maghrib: 'Maghrib',
      isha: 'Isha'
    };
  }

  // Calculate prayer times for given date and coordinates
  getTimes(date, coords) {
    const latitude = coords[0];
    const longitude = coords[1];
    
    // Get day of year
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    // Calculate times
    const times = {
      fajr: this.calculateFajr(date, latitude, longitude, dayOfYear),
      sunrise: this.calculateSunrise(date, latitude, longitude, dayOfYear),
      dhuhr: this.calculateDhuhr(date, latitude, longitude),
      asr: this.calculateAsr(date, latitude, longitude, dayOfYear),
      maghrib: this.calculateMaghrib(date, latitude, longitude, dayOfYear),
      isha: this.calculateIsha(date, latitude, longitude, dayOfYear)
    };

    return times;
  }

  // Helper methods for calculations
  calculateFajr(date, lat, lng, dayOfYear) {
    // Simplified calculation for demo
    const baseTime = new Date(date);
    baseTime.setHours(4);
    baseTime.setMinutes(30);
    return this.formatTime(baseTime);
  }

  calculateSunrise(date, lat, lng, dayOfYear) {
    const baseTime = new Date(date);
    baseTime.setHours(6);
    baseTime.setMinutes(15);
    return this.formatTime(baseTime);
  }

  calculateDhuhr(date, lat, lng) {
    const baseTime = new Date(date);
    baseTime.setHours(12);
    baseTime.setMinutes(30);
    return this.formatTime(baseTime);
  }

  calculateAsr(date, lat, lng, dayOfYear) {
    const baseTime = new Date(date);
    baseTime.setHours(15);
    baseTime.setMinutes(45);
    return this.formatTime(baseTime);
  }

  calculateMaghrib(date, lat, lng, dayOfYear) {
    const baseTime = new Date(date);
    baseTime.setHours(18);
    baseTime.setMinutes(30);
    return this.formatTime(baseTime);
  }

  calculateIsha(date, lat, lng, dayOfYear) {
    const baseTime = new Date(date);
    baseTime.setHours(20);
    baseTime.setMinutes(0);
    return this.formatTime(baseTime);
  }

  formatTime(date) {
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  }
} 