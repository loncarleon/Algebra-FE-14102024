// Kreirati objekt koji reprenzetira neki auto

var auto={
    brend:{
        tip: 'Volvo',
        model:'V40'
    },
    boja: 'crvena',
    brzina: 60,
    maxBrzina: 160,
    godinaProizvodnje: 1998,
    ubrzaj: function(brojSekundi){
        while(brojSekundi && this.brzina <= this.maxBrzina){
            this.brzina += 5;
            brojSekundi --;
        }
        return this.brzina;
    },
    zakoci: function(brojSekundi){
        while(brojSekundi && this.brzina > 0){
            this.brzina -= 20;
            brojSekundi --;
        }
        return this.brzina;
    },
    promijeniBoju: function(novaBoja){
        this.boja = novaBoja;
        return this.boja;
    }

    
};
//console.log(auto);
//Pozovi funkcije objekta s argumentima i ispiši rezultate

console.log(auto.brzina);
console.log(auto.zakoci(4));
console.log(auto.ubrzaj(10));
console.log(auto.promijeniBoju('plava'))

// sa petljom pristupi svim brojevima svojstvima tvog auta objekta

for( var key in auto){
    var value = auto[key];
    console.log(key + ':'+ value);
}

//ispiši u konzoli razumljivu rečenicu

console.log(' Boja mog ' + auto.brend.tip + ' auta je ' + auto.boja);

//pretvori objekt u JSON string

console.log(JSON.stringify(auto));

//bonus

var jsonAdresa = '{"ulica":"Ilica","broj":21, "grad":"Zagreb"}'

console.log(jsonAdresa);

var adresaObjekt = JSON.parse(jsonAdresa);
console.log(adresaObjekt);

var Osoba ={
    ime: "Perica",
    prezime: "Horvat",
    age: 55,
    toJSON: function(){
        return this.ime + " - " + this.prezime;
    },
};

console.log(JSON.stringify(Osoba));

var broj = 10;
console.log(broj.toString());

var Osoba2 ={
    ime: "Perica",
    prezime: "Horvat",
    toString: function(){
        return "Ja sam " + this.ime +" "+ this.prezime;
    }
    
};
console.log(Osoba2.toString());

var datum = new Date();

console.log(datum.toString());
console.log(datum.toLocaleString());
