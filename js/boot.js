/** Initialize a backbone Collection and a set of views to demonstrate their use **/

$(function(){ // This anonymous function wrapped inside a call to the magical jQuery function effectively delays the execution of this script until all necessary resources are available. 

    var name_collection, 
        table_view, 
        add_name_view; 


    /** Initalize our collection with sample data
        - In this case we're using json that was embedded in the page on load
        - This could easily be pulled asynchronously using Backone.sync
    **/
    name_collection = new henry.TableCollection(sample_data);

    // Initialize a table view (as defined TableView.js)
    table_view = new henry.TableView({
        el : $('#table'), 
        collection : name_collection
    }); 
    table_view.render(); 
    
    
    // Initialize an add name view (as defined in AddNameView.js)
    add_name_view = new henry.AddNameView({
        el : $('#add-name'), 
        collection : name_collection
    }); 
    add_name_view.render(); 

}); 