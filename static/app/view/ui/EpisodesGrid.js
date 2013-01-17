/*
 * File: app/view/ui/EpisodesGrid.js
 *
 * This file was generated by Ext Designer version 1.2.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TvSeries.view.ui.EpisodesGrid', {
    extend: 'Ext.grid.Panel',

    id: 'episodeGrid',
    title: '3 Episoden',
    store: 'Episodes',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            hidden: true,
                            id: 'addEpisodeButton',
                            itemId: 'addEpisodeButton',
                            icon: 'icons/add.png'
                        },
                        {
                            xtype: 'button',
                            id: 'addSingleEpisodeButton',
                            itemId: 'addSingleEpisodeButton',
                            icon: 'icons/add.png'
                        },
                        {
                            xtype: 'button',
                            id: 'openVideoButton',
                            itemId: 'openVideoButton',
                            text: 'Video öffnen'
                        },
                        {
                            xtype: 'button',
                            id: 'openVideoUrlButton',
                            itemId: 'openVideoUrlButton',
                            text: 'Video extern öffnen'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'textfield',
                            width: 150,
                            labelWidth: 45,
                            size: 10
                        },
                        {
                            xtype: 'button',
                            disabled: true,
                            icon: 'icons/search.png',
                            text: ''
                        }
                    ]
                }
            ],
            columns: [
                {
                    xtype: 'numbercolumn',
                    width: 80,
                    defaultWidth: 80,
                    align: 'right',
                    dataIndex: 'number',
                    text: 'Nummer',
                    format: 0
                },
                {
                    xtype: 'gridcolumn',
                    width: 350,
                    dataIndex: 'title',
                    flex: 1,
                    text: 'Titel'
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'premier',
                    text: 'Erstaustrahlung',
                    format: 'd.m.Y'
                },
                {
                    xtype: 'gridcolumn',
                    hidden: true,
                    dataIndex: 'ranking',
                    text: 'Bewertung'
                },
                {
                    xtype: 'templatecolumn',
                    tpl: Ext.create('Ext.XTemplate', 
                        '<img src="icons/av_{availability}.png" alt="{availability}" />'
                    ),
                    width: 46,
                    dataIndex: 'availability',
                    text: ''
                }
            ]
        });

        me.callParent(arguments);
    }
});