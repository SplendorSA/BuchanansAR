AFRAME.registerSystem("postprocessing", {

	composer: null,
	originalRenderMethod: null,

	/**
	 * Initialises this system.
	 */

	init() {

		const sceneEl = this.sceneEl;

		const scene = sceneEl.object3D;
		const renderer = sceneEl.renderer;
		const render = renderer.render;
		const camera = sceneEl.camera;

		const clock = new THREE.Clock();
		const composer = new POSTPROCESSING.EffectComposer(renderer);

		this.composer = composer;
		this.originalRenderMethod = render;

		const renderPass = new POSTPROCESSING.RenderPass(scene, camera);
		const smaaPass = new POSTPROCESSING.SMAAPass(Image);
		const filmPass = this.filmPass = new POSTPROCESSING.FilmPass({
			vignette: true,
			scanlines: false,
			sepia: true,
			noiseIntensity: 1.0,
			sepiaIntensity: 0.3,
			vignetteOffset: 0.5,
			vignetteDarkness: 0.4
    });

		filmPass.renderToScreen = true;

		composer.addPass(renderPass);
		composer.addPass(smaaPass);
		composer.addPass(filmPass);

		// Hack the render method.
		let calledByComposer = false;

		renderer.render = function() {

			if(calledByComposer) {

				render.apply(renderer, arguments);

			} else {

				calledByComposer = true;
				composer.render(clock.getDelta());
				calledByComposer = false;

			}

		};

	},

	/**
	 * Clean up when the system gets removed.
	 */

	remove() {

		this.composer.renderer.render = this.originalRenderMethod;
		this.composer.dispose();

	}

});
