AFRAME.registerComponent('tap-to-place', {
    init: function () {
        var sceneEl = document.querySelector('#scene');

        sceneEl.addEventListener('onefingerstart', function (event) {
            // Get the position where the user tapped
            var tapPosition = event.detail.intersection.point;

            // Create an SVG image
            var svgImage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
            svgImage.setAttribute('x', tapPosition.x);
            svgImage.setAttribute('y', tapPosition.y);
            svgImage.setAttribute('width', '100');
            svgImage.setAttribute('height', '100');
            svgImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'star1.svg');

            // Append the SVG image to the scene
            sceneEl.appendChild(svgImage);
        });
    }
});
