function FormatDate(data_date) {
    let date = new Date (data_date);
    let numero_jour = date.getDate();
    let mois = date.getMonth() + 1;
    let annee = date.getFullYear();
    let nouvelle_date = numero_jour + "/" + mois + "/" + annee;

    return nouvelle_date;
}














///////////

