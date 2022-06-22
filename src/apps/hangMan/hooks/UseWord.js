import React, { useState } from 'react'

export const UseWord = () => {
    const list = ["Durazno", "Bloque", "Universidad", "Medicina", "Matematicas", "Seminario", "Karaoke", "Sistemas"];
    const words = list[Math.floor(Math.random() * list.length)];
    
    const listLetters = words.split("").map((item, index) => {
        item = item.toUpperCase();
        item = { letter: item, status: false, id : "letter_" + index};
        
        return item;
    });
    let [listWord, setListWord] = useState(listLetters);
    const ifContains = (letter) => {
        const newListWord = listWord.map((item) => {
            if (item.letter === letter && item.status === false){
                item.status = true;         
                
                
            };
            return item;
        });
        
        return newListWord;

    };
    const ifValid = (letter) => {
        for (let i = 0; i < listWord.length; i++){
            let item = listWord[i];
            if (item.letter === letter) {
                return true;
            };
            let newListWord1 = listWord.filter(estado => estado.status === true);
            let newListWord2 = listWord.filter(item => item.letter !== " ");
            if (newListWord1.length === newListWord2.length){
                if(!alert('Ganaste!')){window.location.reload();}
                break;
                
            };
            
            
        }
        return false;
    };
    
    
    return [listWord, setListWord, ifContains, ifValid];
};
