const init = () => {
    const r = prompt("Please, write your first number");
    const e = prompt("Please, write your second number");
    const i = Number(r);
    const o = Number(e);
    if (isNaN(i) || isNaN(o)) {
    alert("This is not a nubmer. Please try again."); 
    return init();
    }
    alert(` • ${i}+${o}=${i + o} \n • ${i}-${o}=${i - o} \n • ${i}*${o}=${i * o} \n • ${i}/${o}=${i / o}`)
}

init();