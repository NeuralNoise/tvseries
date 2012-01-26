/*
 * File: app/view/AddWindow.js
 * Date: Fri Jan 13 2012 00:20:25 GMT+0100 (CET)
 *
 * This file was generated by Ext Designer version 1.2.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be generated the first time you export.
 *
 * You should implement event handling and custom methods in this
 * class.
 */

Ext.define('TvSeries.view.AddWindow', {
	extend: 'TvSeries.view.ui.AddWindow',

	initComponent: function() {
		var me = this;
		me.callParent(arguments);
		
		me.down("#replaceButton").on("click", this.replace, this);
		me.down("#submitButton").on("click", this.submit, this);
		
		me.down("#serialCombobox").on("select", this.loadSeason, this);
		
		//bswp Simpsons
		me.down("#searchText").setValue('{{Episodenlisteneintrag%}}%\\|% = %\\n"%\\n}%{",%NR_ST%OT%ZF%EAD%EA%DT%–%NR_GES');
		me.down("#replaceText").setValue('{%}%"%": "%", "%"},%{%number%originaltitle%about%premier%originalpremier%title%%unused');
		me.down("#code").setValue('{{Episodenlisteneintrag\n|NR_GES = 465\n|NR_ST = 1\n|EA = 26. September 2010\n|EAD = 30. August 2011\n|OT = Elementary School Musical\n|DT = Grundschul-Musical\n}}\n{{Episodenlisteneintrag\n|NR_GES = 466\n|NR_ST = 2\n|EA = 3. Oktober 2010\n|EAD = 6. September 2011\n|OT = Loan-a Lisa\n|DT = Auf diese Lisa können sie bauen\n}}\n{{Episodenlisteneintrag\n|NR_GES = 467\n|NR_ST = 3\n|EA = 10. Oktober 2010\n|EAD = 13. September 2011\n|OT = MoneyBART\n|DT = The Lisa Series\n}}\n{{Episodenlisteneintrag\n|NR_GES = 468\n|NR_ST = 4\n|EA = 7. November 2010\n|EAD = 29. Oktober 2011\n|OT = Treehouse of Horror XXI\n|DT = Blut und Spiele\n}}\n{{Episodenlisteneintrag\n|NR_GES = 469\n|NR_ST = 5\n|EA = 14. November 2010\n|EAD = 20. September 2011\n|OT = Lisa Simpson, This Isn’t Your Life\n|DT = Die Lisa-Studie\n}}\n{{Episodenlisteneintrag\n|NR_GES = 470\n|NR_ST = 6\n|EA = 21. November 2010\n|EAD = 27. September 2011\n|OT = The Fool Monty\n|DT = Das Wunder von Burns\n}}\n{{Episodenlisteneintrag\n|NR_GES = 471\n|NR_ST = 7\n|EA = 28. November 2010\n|EAD = 4. Oktober 2011\n|OT = How Munched is that Birdie in the Window?\n|DT = Eine Taube macht noch keinen Sommer\n}}\n{{Episodenlisteneintrag\n|NR_GES = 472\n|NR_ST = 8\n|EA = 5. Dezember 2010\n|EAD = 6. Dezember 2011\n|OT = The Fight Before Christmas\n|DT = The Fight Before Christmas\n}}\n{{Episodenlisteneintrag\n|NR_GES = 473\n|NR_ST = 9\n|EA = 12. Dezember 2010\n|EAD = 11. Oktober 2011\n|OT = Donnie Fatso\n|DT = Donnie Fatso\n}}\n{{Episodenlisteneintrag\n|NR_GES = 474\n|NR_ST = 10\n|EA = 9. Januar 2011\n|EAD = 18. Oktober 2011\n|OT = Moms I’d Like to Forget\n|DT = Im Zeichen des Schwertes\n}}\n{{Episodenlisteneintrag\n|NR_GES = 475\n|NR_ST = 11\n|EA = 16. Januar 2011\n|EAD = 25. Oktober 2011\n|OT = Flaming Moe\n|DT = Moeback Mountain\n}}\n{{Episodenlisteneintrag\n|NR_GES = 476\n|NR_ST = 12\n|EA = 23. Januar 2011\n|EAD = 10. Januar 2012\n|OT = Homer the Father\n|DT = Wenn der Homer mit dem Sohne\n}}\n{{Episodenlisteneintrag\n|NR_GES = 477\n|NR_ST = 13\n|EA = 13. Februar 2011\n|EAD = –\n|OT = The Blue and the Gray\n|DT = Die Farbe Grau\n}}\n{{Episodenlisteneintrag\n|NR_GES = 478\n|NR_ST = 14\n|EA = 20. Februar 2011\n|EAD = –\n|OT = Angry Dad – The Movie\n|DT = Wütender Dad – Der Film\n}}\n{{Episodenlisteneintrag\n|NR_GES = 479\n|NR_ST = 15\n|EA = 6. März 2011\n|EAD = –\n|OT = The Scorpion’s Tale\n|DT = Skorpione wie wir\n}}\n{{Episodenlisteneintrag\n|NR_GES = 480\n|NR_ST = 16\n|EA = 13. März 2011\n|EAD = –\n|OT = A Midsummer’s Nice Dreams\n|DT = Ein Sommernachtstrip\n}}\n{{Episodenlisteneintrag\n|NR_GES = 481\n|NR_ST = 17\n|EA = 27. März 2011\n|EAD = –\n|OT = Love is a Many Strangled Thing\n|DT = Denn sie wissen nicht, wen sie würgen\n}}\n{{Episodenlisteneintrag\n|NR_GES = 482\n|NR_ST = 18\n|EA = 10. April 2011\n|EAD = –\n|OT = The Great Simpsina\n|DT = –\n}}\n{{Episodenlisteneintrag\n|NR_GES = 483\n|NR_ST = 19\n|EA = 1. Mai 2011\n|EAD = –\n|OT = The Real Housewives of Fat Tony\n|DT = –\n}}\n{{Episodenlisteneintrag\n|NR_GES = 484\n|NR_ST = 20\n|EA = 8. Mai 2011\n|EAD = –\n|OT = Homer Scissorhands\n|DT = –\n}}\n{{Episodenlisteneintrag\n|NR_GES = 485\n|NR_ST = 21\n|EA = 15. Mai 2011\n|EAD = –\n|OT = 500 Keys\n|DT = –\n}}\n{{Episodenlisteneintrag\n|NR_GES = 486\n|NR_ST = 22\n|EA = 22. Mai 2011\n|EAD = –\n|OT = The Ned-Liest Catch\n|DT = –\n}}');
	},
	
	replace: function(){
		var me = this;

		var code = me.down("#code").getValue();
		var searchText = me.down("#searchText").getValue();
		var replaceText = me.down("#replaceText").getValue();
		
		searchText = searchText.split("%");
		replaceText = replaceText.split("%");
		
		if(searchText.length != replaceText.length){
			Ext.Msg.alert("Es ist ein Fehler aufgetreten.", "Verschieden viele Einträge in Ersetzte und Mit.");
		}


		for(var i in searchText){
			if(typeof searchText[i] != "undefined"){
				var search = new RegExp(searchText[i], "g");
				console.info(search + " with: " + replaceText[i]);
				code = code.replace(search, replaceText[i]);
			}
		}

		me.down("#code").setValue(code);
	},
	
	submit: function(){
		var me = this;
		me.down("form").getForm().submit({
			success: function(form, action) {
				Ext.Msg.alert('Erfolgreich gespeichert', "Änderungen erfolgreich gespeichert.<br />" + action.result.msg);
				this.close();
			},
			failure: function(form, action) {
				Ext.Msg.alert('Es ist ein Fehler aufgetreten', action.result.msg);
			},
			scope: me
		});
	},
	
	loadSeason: function(combobox, recs, eOpts){
		//update seasonStore
		var me =  this;
		var idSerial = combobox.getValue();
		
		var seasonStore = me.down("#seasonCombobox").getStore();
		seasonStore.getProxy().extraParams = {
			idSerial: idSerial
		};
		seasonStore.load();
	}
});