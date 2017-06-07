document.addEventListener('DOMContentLoaded', () => {
    let work = document.getElementById('Work');
        
    work.addEventListener('click', event => {
        if (event.target.id[0] === '/') {
            window.open(`https://shoemakerdr.github.io${event.target.id}`, '_blank');
        }
   });
});