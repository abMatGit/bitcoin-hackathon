class BitQueue {
  constructor(queue) {
    this.queue = queue;
  }

  state() {
    this.sortBitValues();
    return this.queue
  }

  insert(element, paid) {
    this.queue.push(element);
    this.sortBitValues();
    return this.queue;
  }

  pop(){
    return this.queue.pop();
  }

  sortBitValues(){
    this.queue.sort(this.sortFunction);
  }

  sortFunction(a, b) {
    return a.score() - b.score();
  }
}

module.exports = BitQueue;
