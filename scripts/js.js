function CheckoutModel(){
	this.literature = [
		{name:"О компании QAP INT."},
		{name:"Преимущества использования инструмента для Вашего бизнеса."},
		{name:"Перспективы сотрудничества с QAP INT."},
		{name:"Описание решения для разработки HTML-5 презентаций."},
		{name:"Описание разработанного инструмента CLM2CRM и его интеграция с salesforce.com(русский)."},
		{name:"Описание разработанного инструмента CLM2CRM и его интеграция с salesforce.com(english)."}
	];
	this.mail = ko.observable();
	this.theme = ko.observable();
	this.textMessage = ko.observable();

	this.selectedList = ko.observableArray([]);

	this.filledData = ko.observable(false);
	this.filledDataTrue = function(){
		this.filledData(true);
	}
};

ko.applyBindings(new CheckoutModel());