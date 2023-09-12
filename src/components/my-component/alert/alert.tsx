import { Component,h,Listen,State, Prop } from "@stencil/core";

@Component({
    tag:'my-alert',
    styleUrl:'./alert.css',
    shadow: true
})
export class MyAlert{
    @State() alertVisible = false;
    @Prop() testAltId: string;
    @Listen('showAlert',{target:'body'})
    onShow(event:CustomEvent<boolean>){
        console.log("wee")
        this.alertVisible = event.detail;
    }
    onClose(){
        this.alertVisible = false;
    }
render(){
    let alertHtml = null;
    if(this.alertVisible){
        alertHtml = <div class="alert">
        <span class="closebtn" test-id={this.testAltId} role="alert" onClick={this.onClose.bind(this)}>&times;</span>
        This is an alert box.
      </div>;
      }else{
        alertHtml = ''
      }
    return (
        alertHtml
    )
}
}