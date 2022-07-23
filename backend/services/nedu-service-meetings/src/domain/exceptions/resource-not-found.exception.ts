export class ResourceNotFoundException extends Error {
    public code: string;

    constructor(message: string) {
        super(message);
        this.code = 'ResourceNotFoundException'
    }
}