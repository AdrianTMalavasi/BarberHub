export class Email {
    private _email: string;

    constructor(email: string) {
        this._email = email;
    }

    getEmail(): string {
        return this._email;
    }

    setEmail(email: string | undefined) {
        if (email && email.includes("@")) {
            this._email = email;
        }
    }

    toString(): string {
        return `Email: ${this._email}`;
    }
}