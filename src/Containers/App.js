import React,{Component} from 'react';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
import Cardlist from '../Components/Cardlist';
import './App.css';

class App  extends Component{
    constructor(){
        super()
        this.state = {
            robot:[],
            searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then(robot =>this.setState({robot}))
    }
    onSearchChanage=(event) =>{
        this.setState({searchfield:event.target.value})
    }
    render(){
        const {robot, searchfield} = this.state;
        const filterrobot = robot.filter(robot =>robot.name.toLowerCase().includes(searchfield.toLowerCase()))
        return(
            <div className='tc'>
                <h1 className='f2'>Robofriends</h1>
                <Searchbox Searchchange={this.onSearchChanage}/>
                <Scroll>
                    <Cardlist robot={filterrobot}/>
                </Scroll>    
            </div>
        );
    }
}
export default App;