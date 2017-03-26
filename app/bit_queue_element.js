class BitQueueElement {
  constructor(queue, value, paid_worth) {
    this.queue = queue
    this.value = value;
    this.paid_worth = paid_worth;
    this.timestamp = Date.now();

    this.queue.insert(this);
  }

  addWorth(paid_worth) {
    return this.paid_worth = this.paid_worth + paid_worth;
  }

  timeWaiting() {
    return Date.now() - this.timestamp
  }

  score() {
    return (this.paid_worth * 1000) + (this.timeWaiting() * this.timeWaiting());
  }
}

module.exports = BitQueueElement
