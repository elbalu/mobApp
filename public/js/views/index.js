define([
    'jquery', 
    'underscore', 
    'backbone'
    ], 
    function($, _, Backbone){
    
        var indexView = Backbone.View.extend({
        
            el: $('#indexPage'),
        
            events: {
            },
            
            initialize: function() {
                $('#widget').draggable( { axis: "y",
                    containment: '#dropbox',
                    cursor: 'move',
                    revert: 'invalid' 
                });
                $( "#dest" ).droppable({
                  drop: function( event, ui ) {
                    console.log(this);
                    $( this )
                      .addClass( "ui-state-highlight" )
                      .find( "p" )
                        .html( "Dropped!" );
                  }
                });

            },
            
            render: function(json) {
            }
        
        });
        
        return indexView;
    
    }
);