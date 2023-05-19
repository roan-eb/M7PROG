class GetDataFromApi {
    url = "";
    data = null;

    constructor(newURL) {
        this.url = newURL;
    }

    async getData() {
        await fetch(this.url)
            .then( (response) => {
                return response.json();
            }).then((data) =>{
                this.data = data;
            });
        return this.data;
    }
}

class Header {
    headerElement;
    headerFigure;
    headerIElement;
    headerH1;
    placeToRenderHeader;

    constructor(placeToRenderHeader){
        this.placeToRenderHeader = document.getElementsByTagName(placeToRenderHeader)[0];


        this.headerElement = document.createElement("header");
        this.headerElement.classList = "header";

        this.headerFigure = document.createElement("figure");
        this.headerFigure.classList = "header__logo";

        this.headerIElement = document.createElement("i");
        this.headerIElement.classList = "fa-regular fa-face-laugh-beam";

        this.headerH1 = document.createElement("h1");
        this.headerH1.classList = "header__happiness";
        this.headerH1.innerText = "Collection of Happiness";
    }

    render(){
        this.placeToRenderHeader.appendChild(this.headerElement);

        this.headerElement.appendChild(this.headerFigure);
        this.headerFigure.appendChild(this.headerIElement);
        this.headerFigure.appendChild(this.headerH1);

    }
}

class Main {
    sectionRight;
    sectionLeft;

    constructor(){

    }
}


class App {
    GetDataFromApi;

    constructor() {
        this.header = new Header("body");
        this.main = new Main("body");

        this.GetDataFromApi = new GetDataFromApi("./data/data.json");
        
        // this.GetDataFromApi
        //     .getData().then((data) => {
        //         this.bankyMain.makeTransactionsFromData(data);
        //         this.bankyMain.makeButtonsFromData(data);
        //     });

        this.header.render();
        this.main.render();
    }
}

const app = new App();