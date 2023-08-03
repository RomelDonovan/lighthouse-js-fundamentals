const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'
const judgeVegetable = function(vegetables, metric) {  
  if(vegetables[0].redness > vegetables[1].redness && vegetables[0].redness > vegetables[2].redness) {
    vegetables = vegetables[0];
    return vegetables.submitter;
  }
  else if(vegetables[1].redness > vegetables[0].redness && vegetables[0].redness > vegetables[2].redness) {
    vegetables = vegetables[1];
    return vegetables.submitter;
  }
  else {
    vegetables = vegetables[2];
    return vegetables.submitter;
  }
}


console.log(judgeVegetable(vegetables,metric));