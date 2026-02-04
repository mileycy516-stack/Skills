# Monte Carlo Simulation

You cannot predict the future, but you can simulate the multiverse.

## Concept
Take your trading stats (Win %, Avg Win, Avg Loss) and shuffle them randomly 10,000 times to create "possible futures".

## Algorithm
1.  **Inputs**:
    *   Starting Capital: $10,000.
    *   Win Rate: 50%.
    *   Win Payoff: $200.
    *   Loss Payoff: -$100.
    *   Trades per Year: 300.
2.  **Simulation (1 Run)**:
    *   Loop 300 times.
    *   Generate random number (0.0 - 1.0).
    *   If Random < WinRate, add $200. Else, subtract $100.
    *   Track "Peak Equity" and "Max Drawdown" during the loop.
3.  **Iteration**: Repeat Step 2 for 10,000 runs.

## Insights to Extract
*   **Median Return**: What is the "most likely" outcome?
*   **1% Ruin Point**: What is the worst-case scenario that happened 100 times out of 10,000? (Prepare for this).
*   **Drawdown Duration**: How long (in days/trades) did the simulation stay below the previous peak? (This tests your patience).

## Implementation in Code
```python
import random

def run_simulation(trades=300, win_rate=0.5, win_amt=200, loss_amt=100):
    equity = 10000
    peak = equity
    max_drawdown = 0
    
    for _ in range(trades):
        if random.random() < win_rate:
            equity += win_amt
        else:
            equity -= loss_amt
        
        peak = max(peak, equity)
        drawdown = (peak - equity) / peak
        max_drawdown = max(max_drawdown, drawdown)
        
    return equity, max_drawdown
```
