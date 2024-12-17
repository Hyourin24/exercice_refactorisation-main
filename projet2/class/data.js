export class DataPrice {
        constructor(ttcPrice, taxRate) {
            this.ttcPrice = ttcPrice;
            this.taxRate = taxRate;
            //calcul prix HT
            this.htP = ttcPrice / (1 + taxRate / 100);;
            //calcul montant taxes
            this.taxAmount = this.ttcPrice - this.htP;
        }
    }