var React = require('react-native');

var {
  DeviceEventEmitter
} = React;

var BackgroundGeolocationManager = React.NativeModules.RNBackgroundGeolocation;

var BackgroundGeolocation = {
  configure: function(config) {
    BackgroundGeolocationManager.configure(config);
  },
  setConfig: function(config) {
    BackgroundGeolocationManager.setConfig(config);
  },
  getState: function(callback) {
    BackgroundGeolocationManager.getState(callback);
  },
  on: function(event, callback) {
    return DeviceEventEmitter.addListener(event, callback);
  },
  start: function(callback) {
    BackgroundGeolocationManager.start(callback);
  },
  stop: function() {
    BackgroundGeolocationManager.stop();
  },
  onMotionChange: function(callback) {
    return DeviceEventEmitter.addListener("motionchange", callback);
  },
  onLocation: function(callback) {
    return DeviceEventEmitter.addListener("location", callback);
  },
  onGeofence: function(callback) {
    return DeviceEventEmitter.addListener("geofence", callback);
  },
  sync: function(callback) {
    BackgroundGeolocation.sync(callback);
  },
  changePace: function(value) {
    BackgroundGeolocationManager.changePace(value);
  },
  finish: function(taskId) {
    BackgroundGeolocationManager.finish(taskId);
  },
  getCurrentPosition: function(options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    options = options || {};
    BackgroundGeolocationManager.getCurrentPosition(options, callback);
  },
  getOdometer: function(callback) {
    BackgroundGeolocationManager.getOdometer(callback);
  },
  resetOdometer: function(callback) {
    console.log('resetOdometer: ', callback);
    BackgroundGeolocationManager.resetOdometer(callback);
  },
  addGeofence: function(config, callbackFn, failureFn) {
    BackgroundGeolocationManager.addGeofence(
      config.identifier,
      config.radius,
      config.latitude,
      config.longitude,
      config.notifyOnEntry,
      config.notifyOnExit);
  },
  removeGeofence: function(identifier) {
    BackgroundGeolocationManager.removeGeofence(identifier);
  },
  getGeofences: function(callback) {
    BackgroundGeolocationManager.getGeofences(callback);
  }
};

module.exports = BackgroundGeolocation;
