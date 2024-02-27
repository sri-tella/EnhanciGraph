import sys
import json
import pandas as pd
import networkx as nx
import pyvis.network as net

# Load your data into a DataFrame
df = pd.read_csv("ABCinitialData.csv")

# Function to filter DataFrame based on selected cell types
def filter_data(selected_cell_types):
    filtered_dfs = []
    for cell_type in selected_cell_types:
        filtered_df = df[df['CellType'] == cell_type].copy()
        # Do further processing with filtered_df if needed
        filtered_dfs.append(filtered_df)
    return filtered_dfs

def generate_combined_graph(filtered_dfs):
    # Initialize an empty graph
    G_combined = nx.Graph()

    # Counter for edges connecting more than two enhancers
    edges_with_multiple_enhancers = 0

    # Counter for target genes with more than two enhancers
    target_genes_with_multiple_enhancers = []

    # Define colors for enhancer nodes
    enhancer_colors = ['deepskyblue', 'lightgreen', 'orange', 'pink', 'khaki']

    # Loop through each filtered DataFrame
    for i, filtered_df in enumerate(filtered_dfs):
        # Get the color for enhancer nodes
        enhancer_color = enhancer_colors[i % len(enhancer_colors)]
        # Add nodes and edges to the graph
        for index, row in filtered_df.iterrows():
            # Add enhancer node
            G_combined.add_node(row['region'], type='enhancer', color=enhancer_color, size=20)
            # Add gene node
            G_combined.add_node(row['TargetGene'], type='gene', color='silver', size=20)
            # Add edge
            edge_weight = 2  # You can define the edge weight based on your data
            G_combined.add_edge(row['region'], row['TargetGene'], weight=edge_weight, color='black')

    # Calculate graph statistics
    num_enhancers = sum(1 for node in G_combined.nodes(data=True) if node[1]['type'] == 'enhancer')
    num_genes = sum(1 for node in G_combined.nodes(data=True) if node[1]['type'] == 'gene')
    num_edges = G_combined.number_of_edges()

    # Identify target genes with more than two enhancers
    for node in G_combined.nodes(data=True):
        if node[1]['type'] == 'gene':
            gene = node[0]
            enhancer_neighbors = [n for n in G_combined.neighbors(gene) if G_combined.nodes[n]['type'] == 'enhancer']
            if len(enhancer_neighbors) >= 2:
                target_genes_with_multiple_enhancers.append(gene)

    # Mark edges connecting target genes with more than two enhancers as red
    for edge in G_combined.edges():
        source, target = edge
        if G_combined.nodes[target]['type'] == 'gene' and target in target_genes_with_multiple_enhancers:
            edges_with_multiple_enhancers += 1
            G_combined.edges[edge]['color'] = 'red'

    # Mark all edges from target genes with more than two enhancers as red
    for gene in target_genes_with_multiple_enhancers:
        for neighbor in G_combined.neighbors(gene):
            if G_combined.nodes[neighbor]['type'] == 'enhancer':
                G_combined.edges[(gene, neighbor)]['color'] = 'red'
                G_combined.edges[(gene, neighbor)]['weight'] = 3

    # Print graph statistics
    print("Graph Statistics:")
    print(f"Number of Enhancers: {num_enhancers}")
    print(f"Number of Genes: {num_genes}")
    print(f"Number of Edges: {num_edges}")
    print(f"Edges with Multiple Enhancers: {edges_with_multiple_enhancers}")
    print("Target Genes with More Than Two Enhancers:")
    print(target_genes_with_multiple_enhancers)

    # Convert to pyvis network
    pyvis_network_combined = net.Network(notebook=True)
    pyvis_network_combined.from_nx(G_combined)

    # Set node sizes and labels
    for node in pyvis_network_combined.nodes:
        node['size'] = 20
        if node['type'] == 'enhancer':
            node['label'] = node['id']  # Display enhancer node label

    # Display the combined graph
    pyvis_network_combined.show('combined_graph.html')

    response = {
        "graph_statistics": {
            "num_enhancers": num_enhancers,
            "num_genes": num_genes,
            "num_edges": num_edges,
            "target_genes_with_multiple_enhancers": target_genes_with_multiple_enhancers
        },
        "filtered_data_files": [f"filtered_data_{i}.csv" for i in range(len(filtered_dfs))]
    }

    # Print response JSON object
    response_json = json.dumps(response)

    with open('response.json', 'w') as file:
        file.write(response_json)

    print(response_json)

    return G_combined

# Main function to process selected cell types
def main():
    # Read selected cell types from request body
    data = json.loads(sys.stdin.read())
    selected_cell_types = data if isinstance(data, list) else []

    # Filter DataFrame based on selected cell types
    filtered_dfs = filter_data(selected_cell_types)

    # Process the filtered DataFrames further if needed
    for i, filtered_df in enumerate(filtered_dfs):
        # Example: Save each filtered DataFrame to a separate file
        filtered_df.to_csv(f"filtered_data_{i}.csv", index=False)

    print("Data processing completed.")

    generate_combined_graph(filtered_dfs)

    # Send a message indicating that data processing is completed
    print("Graph generation completed.")

if __name__ == "__main__":
    main()
