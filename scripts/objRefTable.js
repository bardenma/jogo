const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Behaviors.solid,
		C3.Behaviors.Pin,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Acts.Scroll,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Pin.Acts.PinByImagePoint,
		C3.Plugins.System.Cnds.Compare,
		C3.Behaviors.Platform.Exps.VectorX,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetMirrored
	];
};
self.C3_JsPropNameTable = [
	{Plataforma: 0},
	{CentrarEm: 0},
	{RestritoAoLayout: 0},
	{personagem: 0},
	{Sólido: 0},
	{chão: 0},
	{lava: 0},
	{moeda: 0},
	{fundo: 0},
	{Fixar: 0},
	{personagem2: 0},
	{chao: 0},
	{porta: 0},
	{Texto: 0},
	{bau: 0},
	{download: 0},
	{Sprite: 0},
	{moedas: 0}
];

self.InstanceType = {
	personagem: class extends self.ISpriteInstance {},
	chão: class extends self.ISpriteInstance {},
	lava: class extends self.ISpriteInstance {},
	moeda: class extends self.ISpriteInstance {},
	fundo: class extends self.ISpriteInstance {},
	personagem2: class extends self.ISpriteInstance {},
	chao: class extends self.ISpriteInstance {},
	porta: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	bau: class extends self.ISpriteInstance {},
	download: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {}
}