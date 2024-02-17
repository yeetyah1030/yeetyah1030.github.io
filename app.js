// app.js
AFRAME.registerComponent('tap-to-place', {
    init: function () {
        var sceneEl = this.el.sceneEl;
        sceneEl.addEventListener('onefingerstart', this.handleTap.bind(this));
    },
    handleTap: function (event) {
        // Create SVG image at tap location
        var tapX = event.detail.position.x;
        var tapY = event.detail.position.y;
        
        var svgImage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
        svgImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'star1.svg');
        svgImage.setAttribute('x', tapX);
        svgImage.setAttribute('y', tapY);
        // Set other attributes as needed
        
        // Append SVG image to scene or specific entity
        this.el.appendChild(svgImage);
    }
});
