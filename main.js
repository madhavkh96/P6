class ParallaxTile{
    constructor(title) {
        this.title = title;
        this.opened = false;
        this.information = 'Placeholder';
        this.projectList = [];
    }

}

var computerGraphics = new ParallaxTile('Computer Graphics');
var gameDev = new ParallaxTile('Game Development');

var p_cg = document.getElementById('comp-graphics0');
var unity_proj = document.getElementById('unity-projects');
var cg_desc = document.getElementById('cg-desc');
var ray_tracer = document.getElementById('ray-tracer');
var particle_system = document.getElementById('particle-system');
var photography = document.getElementById('photography');

function init() {

    p_cg.style.backgroundImage = "url('images/cg-main.png')"
    unity_proj.style.backgroundImage = "url('images/unity-main.png')"
    photography.style.backgroundImage = "url('images/photography-main-edit.jpg')"


    ray_tracer.style.display = 'none';
    particle_system.style.display = 'none';
    document.getElementById('unity-game-1').style.display = 'none';

    p_cg.addEventListener('click', function (mev) { openCG(); });
    unity_proj.addEventListener('click', function (mev) { openGD(); });

}


function openCG() {
    if (computerGraphics.opened) {
        computerGraphics.opened = false;
        p_cg.style.height = 'auto';
        cg_desc.innerHTML = '▼';
        ray_tracer.style.display = 'none';
        particle_system.style.display = 'none';

    } else {
        computerGraphics.opened = true;
        p_cg.style.height = 'auto';
        cg_desc.style.textShadow = '2px 2px 2px #000'
        cg_desc.innerHTML = '▲';
        ray_tracer.style.display = '';
        particle_system.style.display = '';
    }
}

function openGD() {
    if (gameDev.opened) {
        gameDev.opened = false;
        unity_proj.style.height = 'auto';
        document.getElementById('gd-desc').innerHTML = '▼';
        document.getElementById('unity-game-1').style.display = 'none';
    } else {
        gameDev.opened = true;
        unity_proj.style.height = 'auto';
        document.getElementById('gd-desc').innerHTML = gameDev.information;
        document.getElementById('gd-desc').innerHTML = '▲';
        document.getElementById('unity-game-1').style.display = '';
    }
}


init();
