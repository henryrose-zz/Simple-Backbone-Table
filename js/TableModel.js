/** This model contains definitions of a barebones Model and Collection class for this example **/

// This is a model that doesn't do much
henry.TableModel = Backbone.Model.extend({
    defaults : {
        first_name : 'first name', 
        last_name : 'last name'
    }
}); 

// This collection doesn't do much, but could validate it's dat
henry.TableCollection = Backbone.Collection.extend({
    model : henry.TableModel
}); 