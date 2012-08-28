/**
 *  This View displays a simple form allowing the user to add another record to our collection. 
 **/
 
henry.AddNameView = Backbone.View.extend({
    // Store the markup in a template
    templates : {
        FORM : _.template('<p>Add another name to the list: </p><form><label for="first_name">First name :</label> <input type="text" name="first_name" class="first_name"><label for="last_name">Last name:</label><input type="text" name="last_name" class="last_name"</input><button type="submit">Add</button></form>')
    }, 
    
    // DOM events are bound here
    events : {
        'submit' : 'onSubmit'
    }, 
    
    // Initialize generally handles 'this' scoping and non-DOM eventing
    initialize : function(){
        var me = this; 
        _.bindAll(me, 'onSubmit'); 
    }, 
    
    // Render the view
    render : function(){
        var me = this; 
        me.$el.append(me.templates.FORM()); 
    }, 
    
    // Handle the user submission of the form. 
    onSubmit : function(e){
        e.preventDefault(); 
        
        var me = this, 
            $first_name_input = $(e.target).find('input.first_name'), 
            $last_name_input = $(e.target).find('input.last_name'); 
        
        me.collection.add({
            first_name : $first_name_input.val(), 
            last_name : $last_name_input.val()
        }); 
        
        me.$el.find('input').val(''); 
    }
}); 