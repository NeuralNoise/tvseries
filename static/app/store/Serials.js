/*
 * File: app/store/Serials.js
 * Date: Tue Jan 10 2012 18:20:16 GMT+0100 (CET)
 *
 * This file was generated by Ext Designer version 1.2.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TvSeries.store.Serials', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'Serials',
            proxy: {
                type: 'ajax',
                url: '../dynamic/?callName=GetSerials',
                reader: {
                    type: 'json',
                    idProperty: 'id'
                }
            },
            fields: [
                {
                    name: 'id',
                    type: 'int'
                },
                {
                    name: 'title',
                    type: 'string'
                }
            ]
        }, cfg)]);
    }
});