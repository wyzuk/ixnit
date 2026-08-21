/**
 * Exercise: Custom Pub/Sub Event Emitter
 */

class SimpleEventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(eventName, listener) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    this.events.get(eventName).push(listener);

    // Return unsubscribe function
    return () => this.off(eventName, listener);
  }

  once(eventName, listener) {
    const wrapper = (...args) => {
      this.off(eventName, wrapper);
      listener.apply(this, args);
    };
    return this.on(eventName, wrapper);
  }

  emit(eventName, ...args) {
    const listeners = this.events.get(eventName);
    if (!listeners) return false;

    // Clone array to prevent issues if a listener unsubscribes during emit
    [...listeners].forEach(fn => fn(...args));
    return true;
  }

  off(eventName, listener) {
    const listeners = this.events.get(eventName);
    if (!listeners) return;

    this.events.set(
      eventName,
      listeners.filter(fn => fn !== listener)
    );
  }
}

// Test
const emitter = new SimpleEventEmitter();
const unsub = emitter.on('user:login', user => console.log('Welcome', user));
emitter.once('app:ready', () => console.log('App is ready!'));

emitter.emit('app:ready');
emitter.emit('app:ready'); // Does not fire second time

emitter.emit('user:login', 'Walton');
unsub();
emitter.emit('user:login', 'Walton'); // No output after unsub
