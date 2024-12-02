const content = React.createElement("div", {id:"parent"}, 
    [React.createElement("div", { id:"child1" }, 
    [
        React.createElement("h1", {}, "child1"),
        React.createElement("h2", {}, "this is h2 tag1 using react"),
        React.createElement("h2", {}, "this is h2 tag2 using react")
    ]),

    React.createElement("div", { id:"child2" }, 
    [
        React.createElement("h1", {}, "child2"),
        React.createElement("h2", {}, "this is h2 tag1 using react"),
        React.createElement("h2", {}, "this is h2 tag2 using react")
    ])

    
    
    ])

    const root = ReactDOM.createRoot(document.getElementById('root'));
    // root.appendChild(content);       won't work coz root isn't dom element but react specific root object and doesn't have append child method

    root.render(content)