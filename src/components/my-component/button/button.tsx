import { Component,h, Prop,EventEmitter, Event  } from "@stencil/core";


@Component({
    tag:'my-button',
    styleUrl:'./button.css',
    shadow:true
})
export class Button{
    @Prop({reflect:true, mutable:true}) size = 'medium';
    @Prop() testId: string;
    @Event({bubbles:true,composed:true}) showAlert: EventEmitter<boolean>;
    showAlertHandler(){
        console.log('emitted');
        this.showAlert.emit(true);  
    }
    render(){
        return <button name="btn" test-id={this.testId}  role="btn" onClick={this.showAlertHandler.bind(this)}><slot></slot></button>
    }
}