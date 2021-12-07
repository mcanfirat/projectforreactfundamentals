import React, {Component} from "react";
import Scrool from '../components/Scrool';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state={
            robots:[],
            searchfield:''}
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>{return response.json();})
            .then(users=>{this.setState({ robots:users })});
    }
    onSearchChange = (event) => {
        this.setState({ searchfield:event.target.value })
    }
    render() {
        const {robots,searchfield} = this.state; 
        const filteredRobots= robots.filter(robot => {
            return (robot.name.toLowerCase().includes(searchfield.toLowerCase()));})
        
        return !robots.length ?
             <h1 className='tc f1'>Loading...</h1>:

             (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scrool>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scrool>
                </div>
        );}
    }
export default App;