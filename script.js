document.addEventListener("DOMContentLoaded", function () {
    const stage = new NGL.Stage("molecule-viewer");

    function loadMolecule(type) {
        let moleculeFile = "";
        let title = "";
        let description = "";
        let features = "";

        switch (type) {
            case "carbohydrate":
                moleculeFile = "https://files.rcsb.org/download/8WLB.pdb";
                title = "Carbohydrates";
                description = "Carbohydrates provide energy and serve as structural components.";
                features = "Exist in ring or linear forms, with glycosidic linkages. Their stereochemistry affects function.";
                break;
            case "lipid":
                moleculeFile = "https://files.rcsb.org/download/1O7Q.pdb";
                title = "Lipids";
                description = "Lipids store energy and form cell membranes.";
                features = "Form bilayers, micelles, or vesicles, with hydrophobic tails and hydrophilic heads.";
                break;
            case "nucleic_acid":
                moleculeFile = "https://files.rcsb.org/download/6M0J.pdb";
                title = "Nucleic Acids";
                description = "Nucleic acids store and transmit genetic information.";
                features = "DNA adopts a double-helix, while RNA forms varied structures like loops and stems.";
                break;
            case "protein":
                moleculeFile = "https://files.rcsb.org/download/2GTB.pdb";
                title = "Proteins";
                description = "Proteins perform enzymatic, structural, and transport functions.";
                features = "Fold into primary, secondary, tertiary, and quaternary structures, stabilized by various interactions.";
                break;
            default:
                title = "Select a Biomolecule";
                description = "Click a button to learn about the biomolecule.";
                features = "";
                return;
        }

        // Update UI
        document.getElementById("molecule-title").innerText = title;
        document.getElementById("molecule-description").innerText = description;
        document.getElementById("molecule-features").innerText = features;

        // Remove old molecule before loading new one
        stage.removeAllComponents();

        // Load the new molecule
        stage.loadFile(moleculeFile, { defaultRepresentation: true }).then(function (component) {
            component.autoView();
        });
    }

    // Attach event listeners for buttons
    document.getElementById("carbohydrate-btn").addEventListener("click", function () {
        loadMolecule("carbohydrate");
    });

    document.getElementById("lipid-btn").addEventListener("click", function () {
        loadMolecule("lipid");
    });

    document.getElementById("nucleic-acid-btn").addEventListener("click", function () {
        loadMolecule("nucleic_acid");
    });

    document.getElementById("protein-btn").addEventListener("click", function () {
        loadMolecule("protein");
    });
});
