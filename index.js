import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Icon,Button} from 'antd';
const ButtonGroup = Button.Group;

class Education extends React.Component{
  constructor(){
    super();
    this.state ={
      isShow: false,
      item:["The Ohio State University","B.S Computer and Information Science","Minor Major: Mathematics","GPA:3.43"],
    };
  }
  _changeStatus(){
    this.setState({
      isShow: !(this.state.isShow),
    });
  }
  _getContent(){
     let c = this.state.item.map((i,index) => {
       return(
       <li key = {index}>{i}</li>
      );
    });
     return c;
  };

  render(){
    let content;
    let iconType = "plus-circle-o";
    if(this.state.isShow){
      content = this._getContent();
      iconType = "minus-circle-o"
    }
    return(
      <div className ="Education" style={{marginBottom: 20}}>
          <h2>Education <Icon type = {iconType} onClick = {() => this._changeStatus()}/> </h2>
        <ul>
            {content}
        </ul>
      </div>
    );
  }
}

class Academic extends React.Component{
  constructor(){
    super();
    this.state={
      isShow: false,
      item:["Project: Design, Development","Foundations II: Data Structures and Algorithms","Database: Introduction to Database Systems"],
    };
  }

  _changeStatus(){
    this.setState({
    isShow: !(this.state.isShow),
    });
  }

  _getContent(){
    let c = this.state.item.map((i,index) => {
      return(
      <li key = {index}>{i}</li>
     );
   });
    return c;
  }

  render(){
    let content;
    let show ="plus-circle-o";
    if(this.state.isShow){
      content = this._getContent();
      show = "minus-circle-o"
    }

    return (
      <div className = "Academic" style={{marginBottom: 20}}>
        <h2>Academic <Icon type = {show} onClick = {() => this._changeStatus()}/></h2>
        <ul>
          {content}
        </ul>
      </div>
    );
  }
}

class Skills extends React.Component{
  constructor(){
    super();
    this.state = {
      isShow: false,
      isShowCode: false,
      isShowSystem: false,
      isShowLanguage: false,
      isShowTools: false,
      item:[
        {id: "Coding Language",isShow:false, use: ["React App| Javascript| HTML","Java","C# on Unity Game Engine"], understand: ["Paython","C++"]},
        {id: "Operating System", isShow:false, use: ["Windows10"], understand:["Linux"]},
        {id: "Language",isShow:false, use:["English","Chinese Mandarin"], understand:[]},
        {id: "Tools",isShow:false, use:["Photoshop CS3", "Git", "Micro Office & Iwork"], understand:[]}
      ],
    };
  }
_changeStatus(){
        this.setState({
          isShow: !this.state.isShow
          });
  }
_changeStatus2(index){
   let newItem = this.state.item;
   newItem[index].isShow =  !newItem[index].isShow;
   this.setState(
     {
       item: newItem
     }
   );
}


_dealList(array){
  let test = array.map((item,index) => <li key = {index}>{item}</li>);
  return(
     <ul>
       {test}
     </ul>
   );
}
_getContent(){
      return(
        this.state.item.map((one,index) =>{

          let list1;
          let show ="caret-down";
          let list2;

          if(one.isShow){
            list1 = this._dealList(one.use);
            list2 = this._dealList(one.understand);
            show = "caret-up";
          }
            return(
              <div key = {index} className = {one.id}>
                    <h3>{one.id} <Icon type ={show} onClick  = {() => this._changeStatus2(index)}/></h3>
                      {list1}
                      {list2}
              </div>

            );
        }));
}
  render(){
    let content;
    let show ="plus-circle-o";
    if(this.state.isShow){
      content = this._getContent();
      show = "minus-circle-o"
    }
    return(
      <div className = "SKills" style={{marginBottom: 20}}>
        <h2>Skills <Icon type = {show} onClick = {() => this._changeStatus()}/> </h2>
      {content}
      </div>
    );
  }
}

class ClassProject extends React.Component{
  constructor(){
    super();
    this.state ={
      isShow: false,
      item:[
        {id: "Super Mario Brother",
         isShow:false,
         content:"Mario Game: Program Game"
                  +"\"Super Mario Brother\" based on"
                  +"Microsoft visual studio MonoGame."
                  +"Simulate the \"Super Mario Brother\""
                  +"Level-1 and have all the function in the"
                  +"game which orginal \"Super Mario Brother\" has"},

        {id: "Car Seller Web Page(DataBase Extra Credit Project)",
         isShow:false,
         content:"By connect Visual studio Database to webpage,"
                 +"the webpage can show the information in the database"
                 +"such as car VIN, car Brand, Seller and so on."
                 +"If database update, webpage can also update"},
      ],
    };
  }
  _changeStatus(){
    this.setState({
      isShow: !this.state.isShow,
    });
  }
  _changeStatus2(index){
    let newItem = this.state.item;
    newItem[index].isShow = !newItem[index].isShow;
    this.setState({
      item: newItem
    });
  }
  _getContent(){
      return(
        this.state.item.map((one,index) => {
          let description;
          let show ="caret-down";
          if(one.isShow){
            description = <p>{one.content}</p>;
              show = "caret-up"
          }
          return(
            <section key ={index} className = {one.id}>
              <h3>{one.id}<Icon type ={show} onClick  = {() => this._changeStatus2(index)}/></h3>
              <p>{description}</p>
            </section>
          );
        })
      );
  }
  render(){
    let content;
    let show = "plus-circle-o";
    if(this.state.isShow){
      content = this._getContent();
      show = "minus-circle-o";
    }
    return(
      <div className = "ClassProject" style={{marginBottom: 20}}>
        <h2>ClassProject <Icon type = {show} onClick = {() => this._changeStatus()}/> </h2>
      {content}
      </div>
    );
  }
}

class PersonalProject extends React.Component{
  constructor(){
    super();
    this.state={
      isShow:false,
      item:[
        {id:"Miky Way",
          content:"\"control UFO to suck cow\" is a game which based on"
          +"the component of super mario game which we create in the class."
          +"Player control the UFO avoid the obsactal and catch the cow on"
          +"the earth. In the game we have score system, credit system, collect system"},
        {id:"Ebay Seller Calculator V1.0",
          content:"Seller Calculator which can predict how much one seller can get after one sale. This program is based on JVM and code by Java",
        },
        {id:"NooBox",
        content:"NooBox is a chrome extension which can Extract images and use Multi-engines Reverse to search made by my friend \"Ainoob\", I join this program develop 2017 Summer, The version I Joined 0.9.3.6 "}
      ],
    };
  }
  _changeStatus(){
    this.setState({
      isShow: !this.state.isShow,
    });
  }
  _changeStatus2(index){
    let newItem = this.state.item;
    newItem[index].isShow = !newItem[index].isShow;
    this.setState({
      item: newItem
    });
  }
  _getContent(){
    return(
      this.state.item.map((one,index) => {
        let description;
        let show = "caret-down";
        if(one.isShow){
          description = <p>{one.content}</p>;
            show = "caret-up";
        }
          return(
            <section key ={one.id}>
              <h3>{one.id}<Icon type ={show} onClick  = {() => this._changeStatus2(index)}/></h3>
              {description}
            </section>
          );
      }));
  }
  render(){
    let content;
    let show = "plus-circle-o";
    if(this.state.isShow){
      content = this._getContent();
      show = "minus-circle-o";
    }
    return(
      <div className = "PersonalProject" style={{marginBottom: 20}}>
        <h2>PersonalProject <Icon type = {show} onClick = {() => this._changeStatus()}/></h2>
      {content}
    </div>
    );
  }
}
class WorkExperience extends React.Component{
  render(){
    return(
      <div className = "WorkExperience" style={{marginBottom: 20}}>
        <h2>WorkExperience<button>show</button></h2>
      </div>
    );
  }
}

  class Resume extends React.Component{

        render(){
            return(
              <div className = "Resume" >

                <div id = "Header" style={{marginBottom: 20}}>
                  <h1>Xuan Yang</h1>
                  <ul id ="contact" >
                      <li><Icon type="phone" />:   +1(614)-404-8356 </li>
                      <li><Icon type="mail" />:   yang.2766@osu.edu  </li>
                    <li><Icon type="github" />:   <a href ="https://github.com/MaMaMiY">@MaMaMiY</a></li>
                  </ul>
                </div>

                  <div className ="content">
                        <Education />
                      <Academic />
                    <Skills />

                  <article>
                    <ClassProject />
                    <PersonalProject />
                  </article>
                  </div>
            </div>
          );}
}
class MainPage extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
          <div className = "Main">
            <h2>Hi!, This is George</h2>
          <p>
            During 2017 Summer, I begin to learn Web Application developing by<br/>
            myself. <a href ="https://www.codeschool.com/">CodeSchool</a> helps me a lot.<br/><br/>

            I have learn JavaScrip, HTML&HTML5, CSS&CSS3, React on this website.<br/>
            Thus, Recommending this website to others who is going learn Web <br/>
            stuff but don't know how to start.<br/><br/>

            Based on these knowledge, My buddy <a href = "https://ainoob.com/en/">"Ainoob"</a> let me join his project<br/>
            NooBox which is a Reverse Image Search Engine and implent on the Chrome extension.<br/><br/>

            I will record the process we develop this program<br/><br/>
            Join version: 0.9.3.5
          </p>
      </div>);
    }
  }
class Main extends React.Component{
      constructor(){
        super();
        this.state ={
          option: "Main"
        }
      }
      _changeState(newOption){
        this.setState({
          option: newOption,
        });
      }
      render(){
        let select;
          switch (this.state.option) {
            case "Main":
                select = <MainPage/>;
              break;
            case "Resume":
                select = <Resume />;
          }
          return(
            <div className= "Main">
              <ButtonGroup>
              <Button type="primary"  onClick ={() => this._changeState("Main")}>Main</Button>
              <Button type="primary"  onClick ={() => this._changeState("Resume")}>Introduction</Button>
            <Button type="primary"  onClick ={() => {alert("Coming Soon")}}>SelfGrowth</Button>
              </ButtonGroup>

              {select}
            </div>
          );
      }
}
ReactDOM.render(
  <Main />,
  document.getElementById("root")
);
