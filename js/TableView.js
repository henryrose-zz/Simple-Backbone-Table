/** This View renders the skeleton of a table and manages a set of subviews to display each row **/

henry.TableView = Backbone.View.extend({

    /** 
     * To keep our markup somewhat separate from the js we use templates, stored in an object at the top of each view. 
     *  - It's best to keep these templates very granular
     *  - Sometimes these are functions built with  _.template(), sometimes they are just strings
     *  - Avoid logic in your templates
     **/
    templates : {
        TH : '<tr><th>First Name</th><th>Last Name</th><th></th>'
    },
    
    // In the initialize function we mostly deal with 'this' scoping and binding to non-DOM events
    initialize : function(){
        var me = this; 
        _.bindAll(me, 'renderRows', 'addRow'); 
        me.collection.bind('add', me.addRow); 
    }, 
    
    /**
     * The render function is responsible for creating an accurate portrayal of the model in any state
     * - Keep it brief, if your render function is getting very large you probably ought to break it in to multiple sub-renders or sub views
     **/
    render : function(){
        var me = this, 
            rows; 

        me.$el.empty(); 
        me.$el.append(me.templates.TH); 
        
        me.renderRows();
        
        return this; 
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