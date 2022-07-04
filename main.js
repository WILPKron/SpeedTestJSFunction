"use strict";
import "./style.css";
import { checkCode, mixarr } from "./lib/helper"

const objectCheck = {
    itemCount: 10000, // i
    iterationCount: 100, // j
    line: {
        one: [],
        two: [],
    },
    moreToLess: {
        one: [],
        two: [],
    },
    mix: {
        one: [],
        two: [],
    },
    workCode: {
        find: 1 === 1,
        object: 1 === 1,
        map: 1 === 1,
        filter: 1 === 1,
        some: 1 === 1,
    }
}

for(let i = 0; i < objectCheck.itemCount; i++) {
    objectCheck.line.one.push({ "ID": i });
    objectCheck.line.two.push({ "ID": i });
}

objectCheck.moreToLess.one = objectCheck.line.one;
objectCheck.moreToLess.two = objectCheck.line.two.reverse();

objectCheck.mix.one = mixarr(objectCheck.line.one);
objectCheck.mix.two = mixarr(objectCheck.line.two);

const h1 = document.querySelector("#title")
h1.innerHTML = `Количество элементов: ${new Intl.NumberFormat('ru-RU').format(objectCheck.itemCount)},<br> Количество итераций: ${objectCheck.iterationCount}`


// Дана упорядоченная последовательность чисел от 1 до N. Одно из чисел удалили. Оставшиеся числа перемешали в
// случайном порядке. Найдите удаленное число. Желательно, чтобы алгоритмическая сложность была не больше О(n).



if(objectCheck.workCode.find) {

    checkCode(() => {
        for(let id in objectCheck.line.one) {
            objectCheck.line.two.find(item => item.ID === objectCheck.line.one[id].ID)
        }
    }, "findLineArrayTime", "(find) Массив с совпадающими по порядку", objectCheck.iterationCount)
    checkCode(() => {
        for(let id in objectCheck.line.one) {
            objectCheck.line.two.find(item => item.ID === objectCheck.line.one[id].ID)
        }
    }, "findLineArrayTime2", "(find) Массив с совпадающими по порядку", objectCheck.iterationCount)

    checkCode(() => {
        for(let id in objectCheck.moreToLess.one) {
            objectCheck.moreToLess.two.find(item => item.ID === objectCheck.moreToLess.one[id].ID)
        }
    }, "findArrayTime", "(find) Массив где один из массивов с обратным порядком", objectCheck.iterationCount)

    checkCode(() => {
        for(let id in objectCheck.mix.one) {
            objectCheck.mix.two.find(item => item.ID === objectCheck.mix.one[id].ID)
        }
    }, "findArrayMixTime", "(find) Перемешанные массивы", objectCheck.iterationCount)
}
//---------------------------------------------------
if(objectCheck.workCode.filter) {

    checkCode(() => {
        let result = objectCheck.line.one.filter(oneItem => {
            return objectCheck.line.two.find(twoItem => twoItem.id === oneItem.id ) !== undefined
        })
    }, "filterLineArrayTime", "(filter) Массив с совпадающими по порядку", objectCheck.iterationCount)
    checkCode(() => {
        let result = objectCheck.line.one.filter(oneItem => objectCheck.line.two.find(twoItem => twoItem.id === oneItem.id ) !== undefined )
    }, "filterLineArrayTime2", "(filter) Массив с совпадающими по порядку", objectCheck.iterationCount)

    checkCode(() => {
        let result = objectCheck.moreToLess.one.filter(oneItem => objectCheck.moreToLess.two.find(twoItem => twoItem.id === oneItem.id ) !== undefined )
    }, "filterArrayTime", "(filter) Массив где один из массивов с обратным порядком", objectCheck.iterationCount)

    checkCode(() => {
        let result = objectCheck.mix.one.filter(oneItem => objectCheck.mix.two.find(twoItem => twoItem.id === oneItem.id ) !== undefined )
    }, "filterArrayMixTime", "(filter) Перемешанные массивы", objectCheck.iterationCount)
}
//---------------------------------------------------
if(objectCheck.workCode.object) {

    checkCode(() => {
        let three = {}
        for(let id in objectCheck.line.two) {
            three[objectCheck.line.two[id].ID] = objectCheck.line.two[id]
        }
        for(let id in objectCheck.line.one) {
            three[objectCheck.line.one[id].ID]
        }
    }, "objectLineArrayTime", "(object) Массив с совпадающими по порядку", objectCheck.iterationCount)
    checkCode(() => {
        let three = {}
        for(let id in objectCheck.line.two) {
            three[objectCheck.line.two[id].ID] = objectCheck.line.two[id]
        }
        for(let id in objectCheck.line.one) {
            three[objectCheck.line.one[id].ID]
        }
    }, "objectLineArrayTime2", "(object) Массив с совпадающими по порядку", objectCheck.iterationCount)

    checkCode(() => {
        let three = {}
        for(let id in objectCheck.moreToLess.two) {
            three[objectCheck.moreToLess.two[id].ID] = objectCheck.moreToLess.two[id]
        }
        for(let id in objectCheck.moreToLess.one) {
            three[objectCheck.moreToLess.one[id].ID]
        }
    }, "objectArrayTime", "(object) Массив где один из массивов с обратным порядком", objectCheck.iterationCount)

    checkCode(() => {
        let three = {}
        for(let id in objectCheck.mix.two) {
            three[objectCheck.mix.two[id].ID] = objectCheck.mix.two[id]
        }
        for(let id in objectCheck.mix.one) {
            three[objectCheck.mix.one[id].ID]
        }
    }, "objectArrayMixTime", "(object) Перемешанные массивы", objectCheck.iterationCount)
}
//---------------------------------------------------
if(objectCheck.workCode.map) {
    checkCode(() => {
        let four = objectCheck.line.two.map(item => item.ID)
        for(let id in objectCheck.line.one) {
            four.includes(objectCheck.line.one[id].ID)
        }
    }, "mapLineArrayTime", "(map) Массив с совпадающими по порядку", objectCheck.iterationCount)
    checkCode(() => {
        let four = objectCheck.line.two.map(item => item.ID)
        for(let id in objectCheck.line.one) {
            four.includes(objectCheck.line.one[id].ID)
        }
    }, "mapLineArrayTime2", "(map) Массив с совпадающими по порядку", objectCheck.iterationCount)

    checkCode(() => {
        let four = objectCheck.moreToLess.two.map(item => item.ID)
        for(let id in objectCheck.moreToLess.one) {
            four.includes(objectCheck.moreToLess.one[id].ID)
        }
    }, "mapArrayTime", "(map) Массив где один из массивов с обратным порядком", objectCheck.iterationCount)

    checkCode(() => {
        let four =  objectCheck.mix.two.map(item => item.ID)
        for(let id in  objectCheck.mix.one) {
            four.includes( objectCheck.mix.one[id].ID)
        }
    }, "mapArrayMixTime", "(map) Перемешанные массивы", objectCheck.iterationCount)
}
//---------------------------------------------------
if(objectCheck.workCode.some) {
    checkCode(() => {
        let result = objectCheck.line.one.filter(oneItem => {
            return objectCheck.line.two.some(twoItem => twoItem.id === oneItem.id )
        })
    }, "someLineArrayTime", "(some) Массив с совпадающими по порядку", objectCheck.iterationCount)
    checkCode(() => {
        let result = objectCheck.line.one.filter(oneItem => objectCheck.line.two.some(twoItem => twoItem.id === oneItem.id ) )
    }, "someLineArrayTime2", "(some) Массив с совпадающими по порядку", objectCheck.iterationCount)

    checkCode(() => {
        let result = objectCheck.moreToLess.one.filter(oneItem => objectCheck.moreToLess.two.some(twoItem => twoItem.id === oneItem.id ) )
    }, "someArrayTime", "(some) Массив где один из массивов с обратным порядком", objectCheck.iterationCount)

    checkCode(() => {
        let result = objectCheck.mix.one.filter(oneItem => objectCheck.mix.two.some(twoItem => twoItem.id === oneItem.id ) )
    }, "someArrayMixTime", "(some) Перемешанные массивы", objectCheck.iterationCount)
}
//---------------------------------------------------