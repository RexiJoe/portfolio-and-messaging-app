export default class xtacy<T>{

    state: T
    prevState: T | null
    // name: string 
    // _target: HTMLElement
    // _event: Event

    constructor(initialState: T){
        this.state = initialState;
        this.prevState = null;
        // this.name = crypto.randomUUID();
        // this._target = document.body;
        // this._event = new Event(this.name);
    };
    // setState(newState: T){
    //     this.prevState = this.state;
    //     this.state = newState;
    //     this._target.dispatchEvent(this._event);
    // };
    // activateState(callback: (state: T)=> void){
    //     this._target.addEventListener(this.name, ()=>{
    //         callback(this.state);
    //     });
    // };
    // activatePrevState(callback: (prevState: T | null)=> void){
    //     this._target.addEventListener(this.name, ()=>{
    //         callback(this.prevState);
    //     });
    // };
};