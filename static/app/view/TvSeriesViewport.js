/*
 * File: app/view/TvSeriesViewport.js
 * Date: Sun Sep 11 2011 23:29:53 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be generated the first time you export.
 *
 * You should implement event handling and custom methods in this
 * class.
 */

Ext.define('TvSeries.view.TvSeriesViewport', {
    extend: 'TvSeries.view.ui.TvSeriesViewport',

    showWindow: null,

    initComponent: function() {
        this.callParent(arguments);
        
        this.showWindow = Ext.create('TvSeries.view.ShowWindow', {
            renderTo: Ext.getBody()
        });
        this.showWindow.on('hide',  this.reloadEpisodesGrid, this);
        this.showWindow.on("selectEpisode", this.selectEpisode, this);

        this.down("SerialsGrid").on("loadSeason", this.loadSeason, this);
        this.down("SeasonsGrid").on("loadEpisode", this.loadEpisode, this);
        this.down("EpisodesGrid").on("loadShowWindow", this.loadShowWindow, this);
        this.down("#logoutButton").on("click", this.logout, this);

        this.manageUrl();
    },
    
    loadSeason: function(record){
        Ext.History.add(record.data.title);
        this.down("SeasonsGrid").load(record);
    },
	
    loadEpisode: function(serial, season){
        Ext.History.add(serial.data.title + "/" + season.data.title);
        this.down("EpisodesGrid").load(serial, season);
    },
	
    loadShowWindow: function(episode, season, serial){
        Ext.History.add(serial.data.title + "/" + season.data.title + "/" + episode.data.title);
        this.showWindow.loadVideo(episode, season, serial, this.down("EpisodesGrid"));
    },
	
    reloadEpisodesGrid: function(){
        this.down("EpisodesGrid").reload();
    },
        
    selectEpisode: function(episode){
        this.down("EpisodesGrid").getSelectionModel().select(episode);
    },
    
    manageUrl: function(){
        var serialStore = this.down("SerialsGrid").getStore();
        var token = Ext.History.getToken();
        if(token !== null){
            token = decodeURIComponent(token);
            var tmp = token.split("/");
            if(tmp[0]){
                var serialTitle = tmp[0];
                serialStore.load({
                    scope: this,
                    callback: function(records, options, success){
                        if(success){
                            var serial = serialStore.findRecord("title", serialTitle);
                            //load seasons
                            this.down("SerialsGrid").getSelectionModel().select(serial);
                            this.down("SeasonsGrid").load(serial, function(){
                                if(tmp[1]){
                                    //open episode window
                                    var seasonTitle = tmp[1];
                                    var season = this.down("SeasonsGrid").getStore().findRecord("title", seasonTitle);
                                    this.down("SeasonsGrid").getSelectionModel().select(season);
                                    this.down("EpisodesGrid").load(serial, season, function(){
                                        if(tmp[2]){
                                            var episodeTitle = tmp[2];
                                            var episode = this.down("EpisodesGrid").getStore().findRecord("title", episodeTitle);
                                            this.down("EpisodesGrid").getSelectionModel().select(episode);
                                            this.showWindow.loadVideo(episode, season, serial, this.down("EpisodesGrid"));
                                        }
                                    }, this);
                                }
                            }, this);
                        }
                    }
                });
            }
        }else{
            serialStore.load();
        }
    },
    
    logout: function(){
        Ext.Ajax.request({
            url: '"../dynamic/?callName=Logout"',
            scope: this,
            success: function(response){
                var responseObj = Ext.decode(response.responseText);
                if(responseObj.success != true)
                    Ext.Msg.alert("Fehler", responseObj.errorMsg);
                else
                    //user successfully logged out
                    location.reload();
            },
            failure: function(response){
                var responseObj = Ext.decode(response.responseText);
                Ext.Msg.alert("Fehler", responseObj.errorMsg);
            }
        });
    }
});