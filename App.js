import React, {Component, useState} from "react";
import Slider from "./components/slider/slider.js";
import Body from "./components/body";
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showScroll: false,
            showScrollTwo: false,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.checkScrollTop);
        window.addEventListener('scroll', this.checkScrollTopTwo);
    }

    componentWillUnmount() {
        window.addEventListener('scroll', this.checkScrollTop);
        window.addEventListener('scroll', this.checkScrollTopTwo);
    }

    checkScrollTop = () => {
        let section = document.getElementById('section');

        let distanceTopEl = section.getBoundingClientRect().top;
        let heightEl = section.getBoundingClientRect().height;

        if (Math.abs(distanceTopEl) >= (heightEl / 2)) {
            this.setState({
                showScroll: true
            });
            console.log("+ first")
        }
        else if (Math.abs(distanceTopEl) <= (heightEl / 3)) {
            this.setState({
                showScroll: false
            });
            console.log("-")
        }

        // if (!showScroll && window.pageYOffset > 400) {
        //     setShowScroll(true)
        // }
        // else if (showScroll && window.pageYOffset <= 400) {
        //     setShowScroll(false)
        // }
    };

    checkScrollTopTwo = () => {
        let section = document.getElementById('sectionTwo');

        let distanceTopEl = section.getBoundingClientRect().top;
        let heightEl = section.getBoundingClientRect().height;

        if (distanceTopEl > 0) {
            this.setState({
                showScrollTwo: false
            });
            console.log("+ last")
        }
        else if (Math.abs(distanceTopEl) >= (heightEl / 3)) {
            this.setState({
                showScrollTwo: true
            });
            console.log("-")
        }
    };

    scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    render() {
        const {showScroll, showScrollTwo} = this.state;

        return (
            <div className="container">
                <div id="section" style={{opacity: showScroll ? 0 : 1}}  className="oneBlock" /*style={{opacity: `${this.state.opacity}`}}*//>
                <div id="sectionTwo" style={{opacity: showScrollTwo ? 0 : 1}}  className="twoBlock" onClick={this.scrollTop} />
                <div className="threeBlock" />
            </div>
        );
    }
}

export default App;
