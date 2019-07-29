import React, { Component } from 'react';

import { CategoriesConsumer } from '../context/CategoriesContext';
import { EventsConsumer } from '../context/EventsContext';

class Form extends Component {
    state = { 
        name : '',
        category : ''
    }

    //if the user search an event or category
    handleGetDataEvent = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    render() { 
        return ( 
            <EventsConsumer>
                {(value) => {

                    return (
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                value.handleGetEvents(this.state);
                            }}
                        >
                            <fieldset className="uk-fieldset uk-margin">
                                <legend className="uk-legend uk-text-center">
                                    Search events by Name/City or Category
                                </legend>
                            </fieldset>

                            <div className="uk-column-1-3@m uk-margin">
                                <div className="uk-margin" uk-margin="true" >
                                    <input 
                                        name="name"
                                        className="uk-input"
                                        placeholder="Name or City of the Event"
                                        type="text"
                                        onChange={this.handleGetDataEvent}
                                    />
                                </div>

                                <div className="uk-margin" uk-margin="true" >
                                    <select 
                                        name="category" 
                                        className="uk-select"
                                        onChange={this.handleGetDataEvent}
                                    >
                                        <option value="">--Select Category--</option>
                                        <CategoriesConsumer>
                                            {(value) => {
                                                return (
                                                    value.categories.map(category => (
                                                        <option key={category.id}  value={category.id} 
                                                            data-uk-form-select >
                                                                {category.name}
                                                        </option>
                                                    ) )
                                                );
                                            }}
                                        </CategoriesConsumer>
                                        
                                    </select>
                                </div>

                                <div>
                                    <input type="submit" className="uk-button uk-button-danger"
                                        value="Search Events" />
                                </div>
                            </div>                
                        </form> 
                    );
                }}  
            </EventsConsumer> 
        );
    }
}
 
export default Form;