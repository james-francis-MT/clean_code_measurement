class Unit {
    constructor(relativeUnitMultiplier, relativeUnit=null) {
        this.relativeUnitMultiplier = relativeUnitMultiplier
        this.relativeUnit = relativeUnit
        this.baseUnit = this._getBaseUnit()
        this.ratioToBaseUnit = this._getAmountInBaseUnits(1)
    }

    _getBaseUnit() {
        if (!this.relativeUnit) {
            return this

        }
        return this.relativeUnit._getBaseUnit()
    }

    isCompatible(other_unit) {
        return this.baseUnit === other_unit.baseUnit
    }

    _getAmountInBaseUnits(amount) {
        if (!this.relativeUnit) {
            return amount * this.relativeUnitMultiplier;
        }
        return this.relativeUnit._getAmountInBaseUnits(amount * this.relativeUnitMultiplier);
    }

    getAmountInDesiredUnits(amount, desiredUnit) {
        return this.ratioToBaseUnit * amount / desiredUnit.ratioToBaseUnit

    }
}


const TEASPOON = new Unit(1)
const TABLESPOON = new Unit(3, TEASPOON)
const OUNCE = new Unit(2, TABLESPOON)
const CUP = new Unit(8, OUNCE)
const PINT = new Unit(2, CUP)
const QUART = new Unit(2, PINT)
const GALLON = new Unit(4, QUART)

const INCH = new Unit(1)
const FOOT = new Unit(12, INCH)
const YARD = new Unit(3, FOOT)
const FURLONG = new Unit(220, YARD)
const MILE = new Unit(8, FURLONG)

module.exports = {TEASPOON, TABLESPOON, OUNCE, CUP, PINT, QUART, GALLON, INCH, FOOT, YARD, FURLONG, MILE}





