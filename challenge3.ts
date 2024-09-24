import assert from 'assert'

class BankCustomer {
    private name: string;
    private creditCard: string;

    constructor(name: string, creditCard: string) {
        this.name = name;
        this.creditCard = creditCard;
    }

    getName(): string {
        return this.name;
    }

    verifyPinInput(pinInput: string): boolean {
        if (this.creditCard === pinInput) {
            return true;
        } else {
            return false;
        }

    }
}

// Tests

const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));
// console.log(customer.verifyPinInput('3579'));
