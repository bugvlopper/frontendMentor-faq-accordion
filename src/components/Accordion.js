import { Component } from "react";
import "../css/Accordion.css"
import arrow from "../images/icon-arrow-down.svg"

class Accordion extends Component {
    state = {  } 

    _toggleActive(params){
        console.log(params);
        let target = params.target;console.log(target);
        if(target.nodeName === "H2"){
            if(target.parentElement.parentElement.className.match(/active/)){
            target.parentElement.parentElement.classList.remove("active")
          }else{
            let lastActive = document.getElementsByClassName("content")[0].getElementsByClassName("active")
            if (lastActive[0]) {
              lastActive[0].classList.remove("active")
            }
            target.parentElement.parentElement.classList.add('active')
          }
        }else{
            if(target.parentElement.className.match(/active/)){
                target.parentElement.classList.remove("active")
              }else{
                let lastActive = document.getElementsByClassName("content")[0].getElementsByClassName("active")
                if (lastActive[0]) {
                  lastActive[0].classList.remove("active")
                }
                target.parentElement.classList.add('active')
              }
        }
        
    }

    _hoverBoxMove(){
        document.getElementsByClassName('box')[0].style.left = "-14%";
    }
    
    _hoverReplace(){
         document.getElementsByClassName('box')[0].style.left = "-10%";
    }

    render() { 
        return (
            <div className="accordion" >
                <div className="faq-question" onClick={this._toggleActive} onMouseOver={this._hoverBoxMove} onMouseOut={this._hoverReplace}>
                    {this.props.children[0]}
                    <img src={arrow} alt="arrow" />
                </div>
                <div className="faq-response">
                    {this.props.children[1]}
                </div>
            </div>
        );
    }
}
 
export default Accordion;