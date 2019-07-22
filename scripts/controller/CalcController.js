class CalcController{

    constructor(){

        this._locale = "pt-BR";
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._displayCalc;
        this._currentDate =  new Date();
        this.initialize();
    }

    initialize(){
        
        this.setDisplayDateTime();

        let teste = setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);

    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(valor){
        return this._timeEl.innerHTML = valor;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(valor){
        return this._dateEl.innerHTML = valor;
    }

    get displayCalc(){
        return this._displayCalcEl;
    }

    set displayCalc(valor){
        this._displayCalcEl.innerHTML = valor;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(valor){
        this._currentDate = valor;
    }
}