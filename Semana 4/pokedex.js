const fetchPokemon = () =>  {
    const pokeSearch = document.getElementById("pokeName");
    let pokeInput = pokeSearch.value.toLowerCase();
    const url =  `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            const noImg = document.getElementById("pokeImg");
            noImg.src = "./assets/img/pokemon-sad.gif";
            
            const pokeName = document.getElementById("name-screen");
            const pokeMovs = document.getElementById("divMovements"); 
            const pokeHP = document.getElementById("hp");
            const pokeAttack = document.getElementById("attack");
            const pokeDefense = document.getElementById("defense");
            const pokeSAtt = document.getElementById("special-attack");
            const pokeSDfns = document.getElementById("special-defense");
            const pokeSpeed = document.getElementById("speed");
            const pokeId = document.getElementById("poke-Id");
            const pokeType = document.getElementById("type-screen");

            pokeName.innerHTML = "------";
            pokeMovs.innerHTML = "--------------------";
            pokeHP.innerHTML = "--";
            pokeAttack.innerHTML = "--";
            pokeDefense.innerHTML = "--";
            pokeSAtt.innerHTML = "--";
            pokeSDfns.innerHTML = "--";
            pokeSpeed.innerHTML = "--";
            pokeId.innerHTML = "--";
            pokeType.innerHTML = "--";

        }        
        return res.json();
    }).then((data) => {
        console.log(data);
        let pokeName = data.name;
        let pokeImg = data.sprites.front_default;
        let pokeMovs = data.moves;
        let arrayStats = data.stats;
        let pokeHP = arrayStats[0].base_stat;
        let pokeAttack = arrayStats[1].base_stat;
        let pokeDefense = arrayStats[2].base_stat;
        let pokeSAttack = arrayStats[3].base_stat;
        let pokeSDefense = arrayStats[4].base_stat;
        let pokeSpeed = arrayStats[5].base_stat;
        let pokeId = data.id;
        let arrayType = data.types;
        let pokeType = arrayType[0].type.name;

        console.log(pokeImg);
        pokeData(pokeName, pokeImg, pokeMovs, pokeHP, pokeAttack, pokeDefense, pokeSAttack, pokeSDefense, pokeSpeed, pokeId, pokeType);
    })
}


    const pokeData = (name, url, movs, hp, attack, defense, sAttack, sDefense, speed, id, type) => {
        const pokeName = document.getElementById("name-screen");
        const pokeImg = document.getElementById("pokeImg");
        const pokeMovs = document.getElementById("divMovements"); 
        const pokeHP = document.getElementById("hp");
        const pokeAttack = document.getElementById("attack");
        const pokeDefense = document.getElementById("defense");
        const pokeSAtt = document.getElementById("special-attack");
        const pokeSDfns = document.getElementById("special-defense");
        const pokeSpeed = document.getElementById("speed");
        const pokeId = document.getElementById("poke-Id");
        const pokeType = document.getElementById("type-screen");
        
         
        pokeMovs.innerHTML = `<p>Movements (${movs.length}):</p>`;

        pokeImg.src = url;
        pokeName.innerHTML = name.toUpperCase();
        
        for (let index = 0; index < movs.length; index++) {
            pokeMovs.innerHTML += `<p>${index+1+"."} ${movs[index].move.name}</p>`;
        }
        
        pokeHP.innerHTML = hp;
        pokeAttack.innerHTML = attack;
        pokeDefense.innerHTML = defense;
        pokeSAtt.innerHTML = sAttack;
        pokeSDfns.innerHTML = sDefense;
        pokeSpeed.innerHTML = speed;
        pokeId.innerHTML = "# " + id;
        pokeType.innerHTML = type;
        switch (pokeType.innerHTML) {
            case 'normal':
                pokeImg.style.backgroundColor = '#a8a878';
                break;
            case 'fire':
                pokeImg.style.backgroundColor = '#f08030';
                break;
            case 'water':
                pokeImg.style.backgroundColor = '#6890f0';
                break;
            case 'grass':
                pokeImg.style.backgroundColor = '#78c850';
                break; 
            case 'electric':
                pokeImg.style.backgroundColor = '#f8d030';
                break;
            case 'ice':
                pokeImg.style.backgroundColor = '#f08030';
                break;               
            case 'fighting':
                pokeImg.style.backgroundColor = '#c03028';
                break;
            case 'poison':
                pokeImg.style.backgroundColor = '#a040a0';
                break;
            case 'ground':
                pokeImg.style.backgroundColor = '#e0c068';
                break;
            case 'flying':
                pokeImg.style.backgroundColor = '#a890f0';
                break;
            case 'psychic':
                pokeImg.style.backgroundColor = '#f85888';
                break; 
            case 'bug':
                pokeImg.style.backgroundColor = '#a8b820';
                break;
            case 'rock':
                pokeImg.style.backgroundColor = '#b8a038';
                break;               
            case 'ghost':
                pokeImg.style.backgroundColor = '#705898';
                break;
            case 'dark':
                pokeImg.style.backgroundColor = '#705848';
                break; 
            case 'dragon':
                pokeImg.style.backgroundColor = '#7038f8';
                break;
            case 'steel':
                pokeImg.style.backgroundColor = '#b8b8d0';
                break;               
            case 'fairy':
                pokeImg.style.backgroundColor = '#f0b6bc';
                break;
        }
}
