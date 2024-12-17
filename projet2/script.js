import { DataPrice } from "./class/data.js";
import { PriceData } from "./class/price.js";

//Ajout évènement au submit
const formTva = document.getElementById('tva-form')
formTva.addEventListener('submit', function (event) {
    event.preventDefault();

    
    //Arrondissement des valeurs
    const priceTTC = parseFloat(document.getElementById('prix').value);
    const taxRate = parseFloat(document.getElementById('taux').value);
    
    //Gestion des erreurs
    if (isNaN(priceTTC) || isNaN(taxRate) || priceTTC <= 0 || taxRate < 0) {
        alert('Veuillez entrer des valeurs valides.');
        return;
    }

    const resultsSection = document.getElementById('results');
    const priceData = new PriceData(priceTTC, taxRate);
    const dataPrice = new DataPrice (priceTTC, taxRate);
    resultsSection.innerHTML = `
        <p><strong>Prix HT :</strong> ${priceData.htPrice.toFixed(2)} €</p>
        <p><strong>Part TVA :</strong> ${dataPrice.taxAmount.toFixed(2)} €</p>
        <p><strong>Prix TTC :</strong> ${priceData.ttcPrice.toFixed(2)} €</p>
    `;
});