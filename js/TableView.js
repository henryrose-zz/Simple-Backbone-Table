/** This View renders the skeleton of a table and manages a set of subviews to display each row **/

henry.TableView = Backbone.View.extend({

    // Provide a template to be used in the render function
    templates : {
        TH : '<tr><th>First Name</th><th>Last Name</th><th></th>'
    },
    
    // In the initialize function we mostly deal with 'this' scoping and binding to non-DOM events
    initialize : function(){
        var me = this; 
        _.bindAll(me, 'renderRows', 'addRow'); 
        me.collection.bind('add', me.addRow); 
    }, 
    
    // The render function builds the html needed for this view and inserts it in the element associated with this view. 
    render : function(){
        var me = this, 
            rows; 

        me.$el.empty(); 
        me.$el.append(me.templates.TH); 
        
        me.renderRows(); 
    }, 
    
    // Create a Table Row View and add it to the DOM
    addRow : function(row_model){
        var me = this, 
            view;  
            
        view = new henry.TableRowView({
            model : row_model
        }); 
        
        me.$el.append(view.render());     
    }, 
    
    
    // Render all the rows in the collection
    renderRows : function(){
        var me = this; 
        me.collection.each(me.addRow); 
    }
}); 