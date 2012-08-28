/**
 * A simple view to render a row in a table
 **/
henry.TableRowView = Backbone.View.extend({

    tagName : 'tr', 
    templates : {
        TR : _.template('<td><%= first_name %></td><td>&nbsp;<%= last_name %><td><a href="#" class="remove">[x]</a></td>')
    },
    
    // DOM events
    events : {
        'click .remove' : 'onRemove'
    }, 
    
    initialize : function(){
        var me = this;     
        _.bindAll(me, 'onRemove'); 
    }, 
    
    render : function(){
        var me = this; 
        
        me.$el.html(me.templates.TR(me.model.attributes)); 
        return me.$el; 
        
    }, 
    onRemove : function(){
        var me = this; 
        me.model.destroy(); 
        me.remove(); 
    }
}); 