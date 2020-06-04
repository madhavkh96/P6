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
var photoMain = new ParallaxTile('Photography');

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
    document.getElementById('photo-1').style.display = 'none';

    p_cg.addEventListener('click', function (mev) { openCG(); });
    unity_proj.addEventListener('click', function (mev) { openGD(); });
    photography.addEventListener('click', function (mev) { OpenPhotos(); });

    toggle(p_cg, true);
    toggle(unity_proj, true);
    toggle(photography, true);
}


function openCG() {
    if (computerGraphics.opened) {
        computerGraphics.opened = false;
        p_cg.style.height = 'auto';
        toggle(p_cg, true);
        cg_desc.innerHTML = '▼';
        ray_tracer.style.display = 'none';
        particle_system.style.display = 'none';

    } else {
        computerGraphics.opened = true;
        p_cg.style.height = 'auto';
        toggle(p_cg, false);
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
        toggle(unity_proj, true);
        document.getElementById('gd-desc').innerHTML = '▼';
        document.getElementById('unity-game-1').style.display = 'none';
    } else {
        gameDev.opened = true;
        unity_proj.style.height = 'auto';
        toggle(unity_proj, false);
        document.getElementById('gd-desc').innerHTML = '▲';
        document.getElementById('unity-game-1').style.display = '';
    }
}

function OpenPhotos(){
    if (photoMain.opened) {
        photoMain.opened = false;
        photography.style.height = 'auto';
        toggle(photography, true);
        document.getElementById('photo-desc').innerHTML = '▼';
        document.getElementById('photo-1').style.display = 'none';
    } else {
        photoMain.opened = true;
        photography.style.height = 'auto';
        toggle(photography, false);
        document.getElementById('photo-desc').innerHTML = '▲';
        document.getElementById('photo-1').style.display = '';
    }
}

function toggle(element, expand) {
    if (expand) {
        var css = `#${element.id}:hover { cursor: pointer; margin: 100px 50px 0px 50px; -webkit - transition: margin 0.25s; -moz - transition: margin 0.25s; }`;
        var style = document.createElement('style');


        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        element.appendChild(style);
    } else {
        var css1 = `#${element.id}:hover { cursor: pointer; margin: 100px 100px 0px 100px; -webkit - transition: margin 0.25s; -moz - transition: margin 0.25s; }`;
        var style = document.createElement('style');


        if (style.styleSheet) {
            style.styleSheet.cssText = css1;
        } else {
            style.appendChild(document.createTextNode(css1));
        }
        element.appendChild(style);
    }
}


init();
