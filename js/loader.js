window.addEventListener('load', function() {
    const myTimeOut = setTimeout(preload, 2000);

    function preload() {
     const load = document.getElementById('container');
     load.style.display = 'none';
    }
})


