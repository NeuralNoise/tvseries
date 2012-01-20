/*
 * File: app/view/LoginWindow.js
 * Date: Mon Jan 09 2012 21:32:19 GMT+0100 (CET)
 *
 * This file was generated by Ext Designer version 1.2.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be generated the first time you export.
 *
 * You should implement event handling and custom methods in this
 * class.
 */

Ext.define('TvSeries.view.LoginWindow', {
    extend: 'TvSeries.view.ui.LoginWindow',

    initComponent: function() {
        var me = this;
        me.callParent(arguments);

       me.down("#username").on('specialkey', function(f,e){if (e.getKey() == e.ENTER) this.submit()}, this);
       me.down("#secret").on('specialkey', function(f,e){if (e.getKey() == e.ENTER) this.submit()}, this);
       me.down("#loginbutton").on("click", this.submit, this);
    },
	
     submit: function(){
	 this.down("form").getForm().submit({
		success: function(form, action) {
			//TODO: geziehlt neuladen
			location.reload();
		},
		failure: function(form, action) {
			var response = Ext.decode(action.response.responseText);
			Ext.Msg.alert('Fehler', response.errorInfo);
		}
	});
     }
});