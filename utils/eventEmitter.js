export default class EventEmitter {
  constructor() {
    if (!this.__events) {
      this.__events = {};
    }
  }

  handleEventsMap(event) {
    if (typeof this.__events[event] !== 'object') {
      this.__events[event] = [];
    }
  }

  on(event, listener) {
    this.handleEventsMap(event);
    this.__events[event].push(listener);
    return () => this.off(event, listener);
  }

  off(event, listener) {
    this.handleEventsMap(event);
    const idx = this.__events[event].indexOf(listener);
    if (idx > -1) {
      this.__events[event].splice(idx, 1);
    }
  }

  removerAllListeners() {
    this.__events &&
      Object.keys(this.__events).array.forEach((event) =>
        this.__events[event].splice(0, this.__events[event].length)
      );
  }

  emit(event, ...args) {
    this.handleEventsMap(event);
    [...this.__events[event]].forEach((listener) => listener.apply(this, args));
  }

  once(event, listener) {
    this.handleEventsMap(event);
    const remove = this.on(event, (...args) => {
      remove();
      listener.apply(this, args);
    });
    return remove;
  }
}
