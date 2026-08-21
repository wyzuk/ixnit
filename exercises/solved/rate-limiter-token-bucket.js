/**
 * Token Bucket Rate Limiter
 * 
 * Classic rate limiting algorithm used in APIs (e.g. Stripe / GitHub).
 * Refills tokens linearly over time up to capacity.
 */

class TokenBucket {
  constructor(capacity, refillRatePerSecond) {
    this.capacity = capacity;
    this.refillRate = refillRatePerSecond;
    this.tokens = capacity;
    this.lastRefillTimestamp = Date.now();
  }

  refill() {
    const now = Date.now();
    const elapsedTimeSeconds = (now - this.lastRefillTimestamp) / 1000;
    const tokensToAdd = elapsedTimeSeconds * this.refillRate;

    this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);
    this.lastRefillTimestamp = now;
  }

  tryConsume(tokensNeeded = 1) {
    this.refill();

    if (this.tokens >= tokensNeeded) {
      this.tokens -= tokensNeeded;
      return true; // Allowed
    }
    return false;  // Rate limited!
  }
}

// Test
const limiter = new TokenBucket(3, 1); // Capacity 3, refills 1 token/sec
console.log('Request 1:', limiter.tryConsume(1)); // true (2 left)
console.log('Request 2:', limiter.tryConsume(1)); // true (1 left)
console.log('Request 3:', limiter.tryConsume(1)); // true (0 left)
console.log('Request 4:', limiter.tryConsume(1)); // false (rate limited!)
