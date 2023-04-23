// const heading = React.createElement('h1', {id:'heading'}, 'I am H1'); // just creating a h1

//Now ahieve this
/*
    <div id="parent">
        <div id="child">
            <div id="sibling2">
                <h1>Hello i am H1</h1>
            </div>
            <div id="sibling1">
                <h2>Helllo i am H2</h2>
            </div>
        </div>
    </div>

*/

const parent  = React.createElement('div', {id:'parent'},
            React.createElement('div', {id:'child'},
            [React.createElement('div', {id:'sibling1'},
            React.createElement('h1', {}, 'I am H1' )),
            React.createElement('div', {id:'sibling2'},
            React.createElement('h2', {}, 'I am H2' ))] ));

// so root is hwere u want react to render item to!!!! it cna be whole doc or some picec of dom
const root = ReactDOM.createRoot(document); 
root.render(parent); // render will replae everything inside the root and put new stuff


