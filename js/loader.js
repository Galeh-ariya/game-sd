window.addEventListener('load', function() {
    const myTimeOut = setTimeout(preload, 1000);

    function preload() {
     const load = document.getElementById('container');
     load.style.display = 'none';
    }
})


