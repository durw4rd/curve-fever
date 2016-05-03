import React from 'react';
import InfoComponent from './components/InfoComponent'
import AppBar from 'material-ui/lib/app-bar';

class App extends React.Component {
    render() {
        return (
            <div>
              <AppBar title="Curve Fever"/>
              <InfoComponent />
            </div>
        );
    }
}

export default App;
