import React, { Component } from 'react';
import './App.css';
import TopMenu from './Components/TopMenu/TopMenu.js';
import Header from './Components/Header/Header.js';
import Content from './Components/Content/Content.js';
import Footer from './Components/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu/>
        <Header/>
        <section>
            <div className="container app-container">
              <div className="row align-items-center">
                <Content type="1" image="01.jpg" title="For those about to rock..." quote="Thiss quote haha"/>
                <Content type="1" image="02.jpg" title="We salute you!" quote="Thiss quote haha"/>
                <Content type="1" image="03.jpg" title="Let there be rock!" quote="Thiss quote haha"/>
                <Content type="1" image="01.jpg" title="For those about to rock..." quote="Thiss quote haha"/>
                <Content type="1" image="02.jpg" title="We salute you!" quote="Thiss quote haha"/>
                <Content type="1" image="03.jpg" title="Let there be rock!" quote="Thiss quote haha"/>
                <Content type="1" image="01.jpg" title="For those about to rock..." quote="Thiss quote haha"/>
                <Content type="1" image="02.jpg" title="We salute you!" quote="Thiss quote haha"/>
                <Content type="1" image="03.jpg" title="Let there be rock!" quote="Thiss quote haha"/>
              </div>
            </div>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default App;
