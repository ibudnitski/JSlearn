let styles = ['jazz', 'blues'];
styles.push('rock-n-roll');
styles[Math.round(styles.length/2) - 1] = 'Classic';
console.log(styles);
console.log(styles.shift());
console.log(styles);
styles.unshift('Rap', 'Ragga');