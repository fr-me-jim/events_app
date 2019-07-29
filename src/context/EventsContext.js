import React, { Component } from 'react';
import axios from 'axios';

const EventsContext = React.createContext();
export const EventsConsumer = EventsContext.Consumer;

class EventsProvider extends Component {
    
    token = '2APUSJV2HEID4CFXRNIT';

    sort = 'date';
    
    state = { 
        events : []
    }

    handleGetEvents = async (search) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?token=${this.token}&q=${search.name}&categories=${search.category}&sort_by=${this.sort}`;

        //look up API with url
        const events = await axios.get(url);

        this.setState({
            events : events.data.events
        })
    }

    render() { 
        return ( 
            <EventsContext.Provider
                value={{
                    events : this.state.events,
                    handleGetEvents : this.handleGetEvents
                }}
            >
                {this.props.children}
            </EventsContext.Provider>    
        );
    }
}
 
export default EventsProvider;