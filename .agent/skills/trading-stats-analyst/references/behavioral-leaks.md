# DETECTING BEHAVIORAL LEAKS

Data doesn't lie. Emotions leave footprints in the transaction log.

## 1. The "Revenge Trading" Spiral
**Pattern**:
1.  Big Loss occurred at `T`.
2.  Next trade opened at `T + 1 minute`.
3.  Position Size > Average Size (Trying to make it back).
4.  Setup Quality = Low/None.

**App Logic**:
*   Flag trades opened < 5 mins after a loss > 2R.
*   Label as "Potential Tilt".

## 2. The "Fear of Missing Out" (FOMO)
**Pattern**:
1.  Entry Price is far from VWAP or Moving Averages (Extended).
2.  Market speed (Volatility) is high at entry.
3.  Stop Loss is unusually wide to accommodate volatility.

**App Logic**:
*   Calculate `Distance_From_Mean` at entry.
*   Flag outliers.

## 3. The "Chicken" Exit (Fear)
**Pattern**:
1.  Trade hits 0.5R profit.
2.  Trade closed manually.
3.  MFE shows it went to 3R later.

**App Logic**:
*   Compare `Realized_R` vs `Planned_R`.
*   If `Realized << Planned` consistently, diagnose "Lack of Confidence" or "Over-leveraged" (scared of the PnL swings).

## 4. Size Inconsistency
**Pattern**:
*   Trade 1 risk: $50.
*   Trade 2 risk: $500.
*   Trade 3 risk: $25.

**Problem**: Mathematical expectancy is destroyed. A win on Trade 1 and 3 doesn't cover a loss on Trade 2.
**Fix**: Normalize logic to Risk % of Equity or Fixed Dollar Amount.
