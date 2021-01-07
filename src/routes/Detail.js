import React from 'react';
import Movie from '../components/Movie';

class Detail extends React.Component {
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/"); //home
        }
    }
    render(){
        const {location} = this.props;

        if(location.state) {
            return (
            <span>{location.state.title}</span>
            );
            
        } else {
            return null;
        }
        
    }
}

export default Detail;
 