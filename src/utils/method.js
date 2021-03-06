const colors = ['#62bccc', '#337ac0', '#ee9323', '#F2b922'];

export const getRandomColor = () => colors[randomNumber(colors.length - 1)]

export const randomNumber = (num) => {
    return Math.ceil(Math.random() * num);

}
export const saveFromFavorites = (id) => {
    const popcornTime = localStorage.getItem('popcornTime');
    if(!popcornTime){
        localStorage.setItem('popcornTime', JSON.stringify([id]));
        alert('successfully added to favorites')

    }else{
        const popcorTimeData = JSON.parse(popcornTime);
        if(popcorTimeData.includes(id)){
            alert('already added in favorites');
        }else{
            localStorage.setItem('popcornTime', JSON.stringify([...new Set([...JSON.parse(popcornTime), id])]));
            alert('successfully added to favorites');

        }
        
    }
        
}