var cellTypes = [
    'Karpas-422-ENCODE', 'astrocyte-ENCODE',
       'MCF10A_treated_with_TAM24hr-Ji2017', 'osteoblast-ENCODE',
       'H1_Derived_Neuronal_Progenitor_Cultured_Cells-Roadmap',
       'H9-Roadmap', 'H1_BMP4_Derived_Mesendoderm_Cultured_Cells-Roadmap',
       'H1-hESC-Roadmap',
       'H1_BMP4_Derived_Trophoblast_Cultured_Cells-Roadmap',
       'spleen-ENCODE', 'transverse_colon-ENCODE',
       'CD34-positive_mobilized-Roadmap', 'OCI-LY7-ENCODE', 'H7',
       'iPS_DF_19.11_Cell_Line-Roadmap', 'CD3-positive_T_cell-Roadmap',
       'T-cell-ENCODE', 'CD4-positive_helper_T_cell-Corces2016',
       'thymus_fetal-Roadmap',
       'CD56-positive_natural_killer_cells-Roadmap',
       'natural_killer_cell-Corces2016', 'Jurkat-Engreitz',
       'CD8-positive_alpha-beta_T_cell-ENCODE',
       'CD8-positive_alpha-beta_T_cell-Corces2016', 'GM12878-Roadmap',
       'Jurkat_anti-CD3_PMA_4hr-Engreitz',
       'CD4-positive_helper_T_cell-ENCODE',
       'CD19-positive_B_cell-Roadmap',
       'BJAB_anti-IgM_anti-CD40_4hr-Engreitz',
       'endothelial_cell_of_umbilical_vein-Roadmap',
       'dendritic_cell_treated_with_Lipopolysaccharide_100_ng-mL_for_4_hour-Garber2017',
       'dendritic_cell_treated_with_Lipopolysaccharide_100_ng-mL_for_2_hour-Garber2017',
       'dendritic_cell_treated_with_Lipopolysaccharide_100_ng-mL_for_6_hour-Garber2017',
       'CD14-positive_monocyte_treated_with_LPS_4h-Novakovic2016',
       'CD14-positive_monocyte_treated_with_RPMI_d6-Novakovic2016',
       'THP-1_monocyte-VanBortle2017',
       'CD14-positive_monocyte_treated_with_RPMI_d1-Novakovic2016',
       'dendritic_cell_treated_with_Lipopolysaccharide_100_ng-mL_for_30_minute-Garber2017',
       'dendritic_cell_treated_with_Lipopolysaccharide_0_ng-mL_for_0_hour-Garber2017',
       'THP_pmaLPS_ATAC_120h', 'THP1_LPS_4hr-Engreitz',
       'U937_LPS_4hr-Engreitz', 'U937-Engreitz', 'placenta-Roadmap',
       'THP_pmaLPS_ATAC_6h', 'heart_ventricle-ENCODE',
       'THP_pmaLPS_ATAC_24h', 'THP_pmaLPS_ATAC_96h',
       'dendritic_cell_treated_with_Lipopolysaccharide_100_ng-mL_for_1_hour-Garber2017',
       'CD14-positive_monocyte_treated_with_LPS_d6-Novakovic2016',
       'THP1-Engreitz', 'body_of_pancreas-ENCODE', 'pancreas-Roadmap',
       'ovary-Roadmap', 'HepG2-Roadmap', 'adrenal_gland_fetal-ENCODE',
       'SK-N-SH-ENCODE',
       'A549_treated_with_ethanol_0.02_percent_for_1_hour-Roadmap',
       'erythroblast-Corces2016',
       'CD14-positive_monocyte_treated_with_RPMI_1h-Novakovic2016',
       'THP_pmaLPS_ATAC_2h', 'THP_pmaLPS_ATAC_1h', 'THP_pmaLPS_ATAC_12h',
       'THP_pmaLPS_ATAC_72h',
       'CD14-positive_monocyte_treated_with_BG_d6-Novakovic2016', 'NCCIT',
       'trophoblast_cell-ENCODE', 'B_cell-ENCODE', 'K562-Roadmap',
       'gastrocnemius_medialis-ENCODE', 'MM.1S-ENCODE',
       'stomach_fetal-Roadmap', 'uterus-ENCODE',
       'induced_pluripotent_stem_cell-ENCODE',
       'bipolar_neuron_from_iPSC-ENCODE',
       'H1_Derived_Mesenchymal_Stem_Cells-Roadmap', 'HeLa-S3-Roadmap',
       'LoVo', 'psoas_muscle-Roadmap', 'spinal_cord_fetal-ENCODE',
       'muscle_of_leg_fetal-Roadmap', 'muscle_of_trunk_fetal-Roadmap',
       'CD14-positive_monocyte-ENCODE', 'HCT116-ENCODE',
       'CD14-positive_monocytes-Roadmap', 'PC-9-ENCODE',
       'myotube_originated_from_skeletal_muscle_myoblast-Roadmap',
       'A673-ENCODE', 'HT29', 'cardiac_muscle_cell-ENCODE',
       'megakaryocyte-erythroid_progenitor-Corces2016',
       'CD14-positive_monocyte_treated_with_BG_d1-Novakovic2016',
       'CD14-positive_monocyte_treated_with_BG_1h-Novakovic2016',
       'small_intestine_fetal-Roadmap', 'mammary_epithelial_cell-Roadmap',
       'large_intestine_fetal-Roadmap', 'white_adipose-Loft2014',
       'brite_adipose-Loft2014', 'keratinocyte-Roadmap', 'LNCAP',
       'stomach-Roadmap', 'IMR90-Roadmap', 'HAP1',
       'coronary_artery-ENCODE', 'MDA-MB-231', 'fibroblast_of_arm-ENCODE',
       'MCF10A-Ji2017', 'coronary_artery_smooth_muscle_cell-Miller2016',
       'hepatocyte-ENCODE',
       'CD14-positive_monocyte_treated_with_LPS_d1-Novakovic2016',
       'adipose_tissue-ENCODE',
       'CD14-positive_monocyte_treated_with_RPMI_4h-Novakovic2016',
       'sigmoid_colon-ENCODE', 'Panc1-ENCODE',
       'skeletal_muscle_myoblast-Roadmap', 'THP_pmaLPS_ATAC_48h',
       'CD14-positive_monocyte-Novakovic2016', 'BJAB-Engreitz',
       'breast_epithelium-ENCODE', 'liver-ENCODE',
       'CD14-positive_monocyte_treated_with_BG_4h-Novakovic2016',
       'THP_pmaLPS_ATAC_0h', 'epithelial_cell_of_prostate-ENCODE',
       'fibroblast_of_lung-Roadmap', 'thyroid_gland-ENCODE',
       'foreskin_fibroblast-Roadmap', 'THP-1_macrophage-VanBortle2017',
       'MCF-7-ENCODE', 'fibroblast_of_dermis-Roadmap',
       'adrenal_gland-ENCODE',
       'CD14-positive_monocyte_treated_with_LPS_1h-Novakovic2016'
];

// Function to populate the dropdown with cell types
function populateDropdown() {
    var dropdown = document.getElementById("cell-type-dropdown");
    cellTypes.forEach(function(cellType) {
        var option = document.createElement("option");
        option.value = cellType;
        option.textContent = cellType;
        dropdown.appendChild(option);
    });
}

// Call the function to populate the dropdown when the page loads
populateDropdown();

// Add event listener to the dropdown
document.getElementById("cell-type-dropdown").addEventListener("change", handleSelection);
var selectedCellTypes = [];
function handleSelection() {
    var dropdown = document.getElementById("cell-type-dropdown");

    console.log(selectedCellTypes)

    for (var i = 0; i < dropdown.options.length; i++) {
        if (dropdown.options[i].selected) {
            var selectedCellType = dropdown.options[i]
            if (selectedCellTypes.includes(selectedCellType.value)) {
                // If the option is already selected, deselect it
                selectedCellType.selected = false;
                alert("You have already selected this cell type.");
                return; // Exit the function
            }
            selectedCellTypes.push(dropdown.options[i].value);
        console.log(selectedCellTypes)
        }
    }

    // Update the info section with selected cell types as a list
    var infoSection = document.getElementById("selected-cell-types-info");
    infoSection.innerHTML = "";

    if (selectedCellTypes.length > 0) {
  // Create a list item for each selected cell type
  selectedCellTypes.forEach(function(cellType, index) {
    var li = document.createElement("li");
    var span = document.createElement("span");
    span.textContent = "●"; // Bullet symbol
    span.className = getColorClass(index); // Assign color class based on index
    li.appendChild(span);
    li.appendChild(document.createTextNode(cellType)); // Display cell type name
    infoSection.appendChild(li);
  });
} else {
  // Display a message if no cell types are selected
  infoSection.textContent = "No cell types selected";
}

    // Disable options if more than five are selected
    if (selectedCellTypes.length >= 5) {
        for (var j = 0; j < dropdown.options.length; j++) {
            if (!dropdown.options[j].selected) {
                dropdown.options[j].disabled = true;
            }
        }
    } else {
        // Enable all options
        for (var k = 0; k < dropdown.options.length; k++) {
            dropdown.options[k].disabled = false;
        }
    }
}

function getColorClass(index) {
  var colors = ["blue", "green", "orange", "pink", "yellow"];
  return colors[index % colors.length]; // Repeat colors if more than 5 cell types are selected
}

function exploreCellTypes() {

// Show loading symbol
    document.getElementById("loading").style.display = "block";
            // Send selected cell types to the Python script using AJAX
            var xhr = new XMLHttpRequest();
//            xhr.open("POST", 'http://localhost:5000/process_data', true)
            xhr.open("POST", "processData.py", true)
            xhr.setRequestHeader("Content-Type", "application/json");
            console.log("outside")
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
            if (xhr.status === 200) {
            // Hide loading symbol
            document.getElementById("loading").style.display = "none";

            // Show the button to display the graph
            document.getElementById("show-graph-button").style.display = "block";
                // Handle response from the server
//                var response = JSON.parse(xhr.responseText);
                var responseText = xhr.responseText;
                console.log("response"+responseText)
//            handleResponse(response.result);

                alert("Data processing completed. Check the console for details.");
                 processCompleted();
            } else {
                // Handle errors if any
                console.error("An error occurred while processing data.");
//                alert("An error occurred while processing data. Please try again later.");
            }
        }
    };
    console.log("inside")
    console.log(JSON.stringify(selectedCellTypes))
            xhr.send(JSON.stringify(selectedCellTypes));
        }

// Function to handle the response from the server
function handleResponse(responseText) {
    var response = JSON.parse(responseText);
    console.log("response"+response)

    // Extract graph statistics
    var graphStatistics = response.graph_statistics;
    var numEnchancers = graphStatistics.num_enhancers;
    var numGenes = graphStatistics.num_genes;
    var numEdges = graphStatistics.num_edges;
    var edgesWithMultipleEnchancers = graphStatistics.edges_with_multiple_enchancers;
    var targetGenesWithMultipleEnchancers = graphStatistics.target_genes_with_multiple_enhancers;

    // Display graph statistics
    document.getElementById("num-enchancers").innerText = numEnchancers;
    document.getElementById("num-genes").innerText = numGenes;
    document.getElementById("num-edges").innerText = numEdges;
    document.getElementById("target-genes-multiple-enchancers").innerText = targetGenesWithMultipleEnchancers.join(", ");

}

function showGraph() {
    // Redirect to the combined graph page
    window.location.href = "combined_graph.html";
}

// Function to handle the process completion
function processCompleted() {
//    hideLoadingAnimation();
    // Show the alert message
    alert("Data processing completed. Check the console for details.");
    // Show the "Show Graph" button only after the user accepts the alert
    showGraphButton();
}

// Define a function to fetch and display graph statistics
function displayGraphStatistics() {
    // Fetch the JSON file
    fetch('response.json')
        .then(response => response.json())
        .then(data => {
            // Extract graph statistics from the JSON data
            const graphStatistics = data.graph_statistics;

            // Create HTML content to display graph statistics
            const htmlContent = `
                <h2>Graph Statistics</h2>
                <p>Number of Enhancers: ${graphStatistics.num_enhancers}</p>
                <p>Number of Genes: ${graphStatistics.num_genes}</p>
                <p>Number of Edges: ${graphStatistics.num_edges}</p>
                <p>Target Genes with Multiple Enhancers: ${graphStatistics.target_genes_with_multiple_enhancers.join(', ')}</p>
            `;

            // Display the HTML content
            document.getElementById('graph-stats').innerHTML = htmlContent;
        })
        .catch(error => console.error('Error fetching JSON:', error));
}

// Function to handle click event on the display stats button
function handleDisplayStatsButtonClick() {
    displayGraphStatistics();
}
// Add event listener to the display stats button
document.getElementById('display-stats-button').addEventListener('click', handleDisplayStatsButtonClick);

// Function to handle the completion of data processing
function processCompleted() {
    // Show the alert message
    alert("Click OK to view graph statistics.");

    // Show the button to display graph statistics
    document.getElementById('display-stats-button').style.display = 'block';
}

