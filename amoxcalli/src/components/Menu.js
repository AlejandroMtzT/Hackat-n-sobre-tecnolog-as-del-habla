import React from 'react';


export default class Menu extends React.Component {
    render () {
        return(
           <div>
            <div className='row'>
                <div className='three columns'>
                    <h1> Wicker </h1>

                    <Login user={this.state.user} setUser={this.setUser} />

                    <PageList user={this.state.user} />

                </div>
                <div className='nine columns'>
                    <RouteHandler user={this.state.user} />
                </div>
            </div>
        </div>
      );
    }
    setUser = (user) => this.setState({ user: user });
}
