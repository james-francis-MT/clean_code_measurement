class Quantity {
    constructor(amount, unit) {
        this.amount = amount;
        this.unit = unit;
    }

    isEqual(that) {
        if (this.unit.isCompatible(that.unit)) {
            let thatAmountInDesiredUnits = that.unit.getAmountInDesiredUnits(
                that.amount,
                this.unit
            );
            return thatAmountInDesiredUnits == this.amount;
        }
        return false;
    }

    add(that) {
        if (this.unit.isCompatible(that.unit)) {
            let thatAmountInDesiredUnits = that.unit.getAmountInDesiredUnits(
                that.amount,
                this.unit
            );
            return new Quantity(
                thatAmountInDesiredUnits + this.amount,
                this.unit
            );
        }
        throw new Error("These quantities can't be added.");
    }
}

module.exports = { Quantity };
