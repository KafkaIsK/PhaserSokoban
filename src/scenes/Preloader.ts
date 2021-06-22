import Phaser from 'phaser'

import WebFontFile from '../files/WebFontFile'

export default class Preloader extends Phaser.Scene
{
	constructor()
	{
		super('preloader')
	}

	preload()
	{
		const fonts = new WebFontFile(this.load, [
			'Poppins',
			'Righteous'
		])
		this.load.addFile(fonts)

		this.load.audio('game-music', 'assets/music/CaveLoop.wav');
		this.load.audio('click', 'assets/sfx/click_002.ogg')
		this.load.audio('confirmation', 'assets/sfx/confirmation_001.ogg')
		this.load.audio('error', 'assets/sfx/error_006.ogg')
		this.load.audio('move', 'assets/sfx/maximize_008.ogg')
	}

	create()
	{
		// this.scene.start('game', { level: 4 });
		this.scene.start('game', { level: 1 });

		this.sound.play('game-music', {
			loop: true,
			volume: 0.25
		});
	}
}