import React, { Component} from 'react';
import Notifications from "./notifications";
import filmList from "../films/filmList";
import FilmList from '../films/filmList';
class Dashboard extends Component {
    render(){
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6"></div>
                        <FilmList  />
                    <div className="col s12 m5 offset-m1"></div>
                        <Notifications />
                </div>
            </div>
        )
    }
}


export default Dashboard;