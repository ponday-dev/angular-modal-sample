export class ModalContext {
    
    constructor(
    private resolveFn: Function,
    private rejectFn: Function,
    public params: any
    ) { }

    resolve(val?: any) {
    this.resolveFn(val);
    }
    reject(reason?: any) {
    this.rejectFn(reason);
    }
}
    