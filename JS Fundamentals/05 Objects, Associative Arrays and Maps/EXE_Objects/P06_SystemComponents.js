function printSystemComponents(data) {
    let systems = new Map();

    for(let row of data) {
        let [system, component, subcomponent] = row.split(/\s*\|\s*/);

        if(! systems.get(system)){
            systems.set(system, new Map());
        }
        
        if(! systems.get(system).get(component)){
            systems.get(system).set(component, [])
        }
        
        systems.get(system).get(component).push(subcomponent);
    }

    let sortedSystems = Array.from(systems.keys())
        .sort((sys1, sys2) => sortSystems(sys1, sys2));

    for(let system of sortedSystems) {
        console.log(system);

        let sortedComponents = Array.from(systems.get(system).keys())
            .sort((comp1, comp2) => sortComponents(system, comp1, comp2));

        for(let component of sortedComponents) {
            console.log(`|||${component}`);
            let subComponents = systems.get(system).get(component);

            for (let subComponent of subComponents) {
                console.log(`||||||${subComponent}`);
            }
        }
    }

    function sortSystems(a, b) {
        if(systems.get(a).size !== systems.get(b).size) {
            return systems.get(b).size - systems.get(a).size; // sort by amount of components
        } else {
            return a.toLowerCase().localeCompare(b.toLowerCase()); // then alphabetically
        }
    }

    function sortComponents(system, comp1, comp2) {
        return systems
            .get(system).get(comp2).length - systems.get(system).get(comp1).length;
    }
}