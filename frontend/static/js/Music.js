const names = {
    Metro: 'Metro Exodus | Alexey Omelchuk',
    AO_ME: '(feat. Alexey Omelchuk)',
    Darkd: 'Daniel Dombrowsky',
    RG: 'Rockit Gaming',
    YVDC: 'Yann van der Cruyssen',
    MS: 'Marshmello',
    AW: 'Alan Walker',
    R: ' (Reinterpretation)',
    ARF: 'ARForest',
    H: 'Hammock',
    CMG: '猎豹游戏-Cheetah Mobile Games'
}
const A = 'Avicii';
const pic = {
    FC5H: 'sXoTkCSoRg3dKAXoGAeO-g==/109951164755567880.jpg',
    FC5dd: 'yV6IKkL41Szrz6alluloag==/109951164765747826.jpg',
    FC5d: 'Jxqp8vVqdeTqFlj5a1szwg==/109951164855762156.jpg',
    FC3: 'm-zAYKAjy0lb1qBKl_RhiA==/109951164856034586.jpg',
    TIM: 'aVCCrPZ1n3kSa3laalm8Ew==/109951164192725091.jpg',
    LALYWR: '4T6A1mYknB2uBcSzbO0tBg==/109951168146238319.jpg',
    DL: 'IpqbavbMImv_suJkyzWpRw==/109951169050809032.jpg',
    RS2: 'sEK_zHQXHIArzH13_e0oNg==/109951164486899276.jpg',
    ME: 'NFmXq-aV8LMjzgP8Cdr-Mw==/109951164160330628.jpg',
    ME_SSS: 'LFx_1GtjttUyJNOty7353A==/109951164676455784.jpg',
    DD4: 'Bf4_c1dQ6IHm0Aj5xwGKeA==/109951164686026073.jpg',
    DD1_3: 'v6PpzfD2vttc-cM_YYuIKw==/109951163934695583.jpg',
    RAIN: 'vewfGOB1Y_FdA-tG0a9tjA==/109951169818980292.jpg',
    ELIXIR: '7HqanvQlWWlI-88MXJLr0w==/109951168272043162.jpg',
    Stray: 'E7Xm2AUMCWHRCXuwOtNkxA==/109951168150088580.jpg',
    DIE: 'T7CfAIy9BGu80xIIflmcAg==/109951168959882340.jpg',
    TCV1: 'hEzy5_H4gt3_lPfEsp4glw==/109951170861877411.jpg',
    HOW: 'PwYUKtow3_YBxRB3ylrlow==/109951166273007147.jpg',
    TU: 'vrXsouN6rhgah68sHv4Akg==/109951169530454564.jpg'
};
const lrc = {
    MYM: `[00:00.000]作曲 : Daniel Dombrowsky\n[00:00.000]\n[00:10.000]Please don't look backx8 (翻译: 切勿回首)\n[00:31.000]We caught your sneaker (翻译: 我们抓到你的告密者了)\n[00:33.000]We know you're stalking (翻译: 我们知道你在潜行)\n[00:36.000]Now we are moving (翻译: 现在全员行动)\n[00:38.000]And we are looming (翻译: 我们之间一触即发)\n[00:41.000]We caught your sneaker (翻译: 我们抓到你的告密者了)\n[00:43.000]We know you're stalking (翻译: 我们知道你在潜行)\n[00:46.000]Now we are moving (翻译: 现在全员行动)\n[00:48.000]And we are looming (翻译: 我们之间一触即发)\n[00:50.000]Please don't look back (翻译: 切勿回首)\n[01:10.000]We caught your sneaker (翻译: 我们抓到你的告密者了)\n[01:13.000]We know you're stalking (翻译: 我们知道你在潜行)\n[01:15.000]Now we are moving (翻译: 现在全员行动)\n[01:17.000]And we are looming (翻译: 我们之间一触即发)\n[01:20.000]We caught your sneaker (翻译: 我们抓到你的告密者了)\n[01:23.000]We know you're stalking (翻译: 我们知道你在潜行)\n[01:25.000]Now we are moving (翻译: 现在全员行动)\n[01:27.000]And we are looming (翻译: 我们之间一触即发)\n[01:51.000]Please don't look backx8 (翻译: 切勿回首)\n[02:11.000]We caught your sneaker (翻译: 我们抓到你的告密者了)\n[02:14.000]We know you're stalking (翻译: 我们知道你在潜行)\n[02:17.000]Now we are moving (翻译: 现在全员行动)\n[02:20.000]And we are looming (翻译: 我们之间一触即发)\n[02:21.000]We caught your sneaker (翻译: 我们抓到你的告密者了)\n[02:24.000]We know you're stalking (翻译: 我们知道你在潜行)\n[02:27.000]Now we are moving (翻译: 现在全员行动)\n[02:30.000]And we are looming (翻译: 我们之间一触即发)\n[02:33.000]YOU ESCEAPED (翻译: 逃跑的猎物)\n[02:36.000]Level 3 Deadly Decadence (翻译: Level 3 致命堕落)`,
    TGR: `[00:00.000]作曲 : Daniel Dombrowsky\n[00:35.000]Dreamer kiss sweater (翻译: 魂不守舍者爱吻着紧张流汗的人)\n[00:38.000]He must do something (翻译: 他一定要有所行动)\n[00:41.000]Amour song to feel (翻译: 请认真的感受这风流韵情的乐曲)\n[00:44.000]Take my mind to face (翻译: 接受我真心的求爱)\n[00:47.000]Dreamer kiss sweater (翻译: 魂不守舍者爱吻着紧张流汗的人)\n[00:49.000]He must do something (翻译: 他一定要有所行动)\n[00:53.000]Amour song to feel (翻译: 请认真的感受这风流韵情的乐曲)\n[00:56.000]Take my mind to face (翻译: 接受我真心的求爱)\n[01:22.000]Dreamer kiss sweater (翻译: 魂不守舍者爱吻着紧张流汗的人)\n[01:25.000]He must do something (翻译: 他一定要有所行动)\n[01:28.000]Amour song to feel (翻译: 请认真的感受这风流韵情的乐曲)\n[01:31.000]Take my mind to face (翻译: 接受我真心的求爱)\n[01:34.000]Dreamer kiss sweater (翻译: 魂不守舍者爱吻着紧张流汗的人)\n[01:37.000]He must do something (翻译: 他一定要有所行动)\n[01:39.000]Amour song to feel (翻译: 请认真的感受这风流韵情的乐曲)\n[01:43.000]Take my mind to face (翻译: 接受我真心的求爱)\n[01:45.000]Dreamer kiss sweater (翻译: 魂不守舍者爱吻着紧张流汗的人)\n[01:47.000]He must do something (翻译: 他一定要有所行动)\n[01:51.000]Amour song to feel (翻译: 请认真的感受这风流韵情的乐曲)\n[01:54.000]Take my mind to face (翻译: 接受我真心的求爱)\n[01:57.000]Dreamer kiss sweater (翻译: 魂不守舍者爱吻着紧张流汗的人)\n[01:59.000]He must do something (翻译: 他一定要有所行动)\n[02:03.000]Amour song to feel (翻译: 请认真的感受这风流韵情的乐曲)\n[02:06.000]Take my mind to face (翻译: 接受我真心的求爱)`,
    FA_PHI: `[00:11.000]この壊れた世界 光が揺蕩う (翻译: 这破碎的世界 摇曳着光)[00:17.000]永遠の謳う惑星で 待っているから (翻译: 在永远歌唱的星球上 我等待着你)[00:24.000]泡沫の世界 砕け散る空 (翻译: 泡沫般的世界 破碎散落的天空)[00:30.000]片翼の背でも きっと届くはず (翻译: 即使只有单翼 也定然能够到达)[02:39.000]この壊れた世界 光が揺蕩う (翻译: 这破碎的世界 摇曳着光)[02:46.000]永遠の謳う惑星で 待っているから (翻译: 在永远歌唱的星球上 我等待着你)[02:53.000]泡沫の世界 砕け散る空 (翻译: 泡沫般的世界 破碎散落的天空)[02:59.000]片翼の背でも きっと届くはず (翻译: 即使只有单翼 也定然能够到达)[03:17.000]僕の落ちた世界 偽色の蒼 (翻译: 我坠入的世界 是那虚伪的苍蓝)[03:24.000]君を喪っても まだ翔べるから (翻译: 即使失去了你 我仍然能够飞翔)[04:12.000]この壊れたセカイ (翻译: 这破碎的世界)`,
    CURSED: `[00:00.000] 作词 : Aurora Sky\n[00:01.000] 作曲 : Aurora Sky\n[00:02.000] 编曲 : Aurora Sky\n[00:21.386]迷惘的灵魂啊\n[00:24.999]快回家吧\n[00:31.938]孤单的灵魂啊\n[00:35.644]别流泪啊\n[00:42.557]Beneath the cutthroat shattered sunsets' glow\n[00:54.716]Lies a world immersed in tales of woe\n[01:04.800]Through twilight's cracks where the tears of sorrow blend\n[01:15.221]I wander lost with a rusted heart to mend\n[01:25.232]Hear your voice\n[01:36.012]Hear your voice\n[01:46.726]Am I the cursed one on the earth\n[01:52.443]Or we are all the same\n[01:57.253]Feel like I'm trapped in this prison\n[02:03.003]Trying to find my way\n[03:23.883]I saw the planet enveloped with a huge electronic web\n[03:30.496]Dense and heavy\n[03:33.542]Many get soporous and lose their minds\n[03:37.667]Lost in an enchanted vision\n[03:40.447]And indulged in a tortured personality\n[03:45.778]It is hard to tell what is worth and what is not\n[03:50.675]But at least you can choose the life you want to live\n[03:56.568]So believe in yourself\n[03:58.997]The truth just lies deep down inside\n[04:05.313]Hear your voice\n[04:15.798]Hear your voice\n[04:25.262]What are you craving\n[04:30.521]What do you fear\n[04:36.002]Hell could be heaven\n[04:41.389]Don't be afraid\n[05:09.259]Before we forget\n[05:11.960]Let go of past regret\n[05:14.644]Here stand to pray\n[05:17.448]Watch as the haze decays\n[05:20.052]Then we forget\n[05:22.721]Let go of past regret\n[05:25.392]Here stand to pray\n[05:28.059]Watch as the haze decays\n[05:46.636]迷惘的灵魂啊\n[05:50.321]快回家吧\n[05:56.973]孤单的灵魂啊\n[06:00.990]别流泪啊\n[06:21.284]What are you waiting for?`
}

const HMF = `[00:00.00] 作曲 : Dan Romer\n[00:10.11]I once was a child.\n[00:14.13]With innocent eyes.\n[00:17.76]And my family sworn.\n[00:21.87]They knew best for my life.\n[00:26.31]I followed their rules.\n[00:29.93]As i played with my friends.\n[00:33.83]When it came to the world.\n[00:37.96]I never thought it would end.\n[00:42.43]Help me Faith.\n[00:46.48]Help me Faith.\n[00:49.51]Shield me from sorrow.\n[00:53.32]From fear of tomorrow.\n[00:58.46]Help me Faith.\n[01:02.75]Help me Faith.\n[01:05.67]Shield me from sadness.\n[01:09.37]From worry and madness.\n[01:12.77]Lead me to the bliss.\n[01:22.66]And as I grew up.\n[01:26.33]I could never be free.\n[01:30.26]'Cause the shackles I wore.\n[01:34.21]Can't be touched or be seen.\n[01:38.55]My heart never loved.\n[01:42.37]And my soul couldn't laugh.\n[01:46.28]So much hate in my life.\n[01:50.22]Couldn't make out the path.\n[01:55.2]Help me Faith.\n[01:59.1]Help me Faith.\n[02:02.2]Shield me from sorrow.\n[02:05.71]From fear of tomorrow.\n[02:10.93]Help me Faith.\n[02:14.75]Help me Faith.\n[02:18.2]Shield me from sadness.\n[02:21.74]From worry and madness.\n[02:25.26]Lead me to the bliss.\n[02:35.0]When I grew old.\n[02:38.68]I was riddled with sin.\n[02:42.64]Locked my soul in the dark.\n[02:46.55]Never let the light in.\n[02:51.29]I crawled towards the gate\n[02:55.4]With little time left.\n[02:58.77]I cried:"What have i done!!!"\n[03:02.66]As I took my last breath.\n[03:07.42]Help me Faith.\n[03:11.33]Help me Faith.\n[03:14.44]Shield me from sorrow.\n[03:18.11]From fear of tomorrow.\n[03:23.56]Help me Faith.\n[03:27.48]Help me Faith.\n[03:30.56]Shield me from sadness.\n[03:34.18]From worry and madness.\n[03:37.56]Lead me to the bliss.\n[03:45.64]Lead me to the bliss.`;
const WWRA = `[00:00.00] 作曲 : Dan Romer\n[00:12.85]In the west shall rise.\n[00:18.70]The sinister creed.\n[00:23.32]The rich will get what they want.\n[00:28.61]The poor will lose what they need.\n[00:33.51]The devil knows our fears.\n[00:38.57]He told all his friends.\n[00:44.24]They'll block the sun with their lies.\n[00:49.51]As darkness descends.\n[00:55.09]Oh Lord, the great collapse.\n[01:00.13]Won't be our end.\n[01:04.21]When the world falls into the flames.\n[01:10.34]We will rise again.\n[01:15.66]We will rise again.\n[01:23.45]Let the wars begin.\n[01:28.62]We'll keep our pistols near.\n[01:34.01]Our neighbors, frail and thin.\n[01:39.08]As they disappear.\n[01:44.40]Let the chaos come.\n[01:49.52]Let our houses freeze.\n[01:54.76]The lights will all go out.\n[01:59.97]But we'll finally see.\n[02:05.64]Oh Lord, the great collapse.\n[02:10.60]Won't be our end.\n[02:14.74]When the world falls into the flames.\n[02:20.81]We will rise again.\n[02:26.08]We will rise again.\n[02:33.72]When the sky has cleared.\n[02:39.55]And the storm has passed.\n[02:44.35]We'll walk arm in arm.\n[02:49.59]Down our promised path.\n[02:54.49]We'll watch the sun come up.\n[02:59.91]From its bed of black.\n[03:05.06]We will enter Eden's Garden.\n[03:10.37]And never look back.\n[03:15.94]Oh Lord, the great collapse.\n[03:20.94]Won't be our end.\n[03:25.28]When the world falls into the flames.\n[03:31.00]We will rise again.\n[03:36.34]We will rise again.\n[03:39.86]`;
const BAC_R = `[00:00.00] 作曲: Marc Byrd/Andrew Payne Thompson/Daniel Romer-friedman\n[00:05.00] 歌词提供: LANREN\n[00:10.00] 歌词来源: www.musixmatch.com\n[00:15.00] 作词作曲: Dan Romer\n[01:30.98] Gonna build a castle\n[01:46.78] Gonna build it high\n[02:17.98] Gonna build a castle\n[02:33.78] Gonna build it high\n[03:39.17] Where the light shines\n[03:54.78] Where the light shines\n[04:09.98] Where the light shines\n[04:25.78] Where the light shines\n[04:41.78] Where the light shines\n[04:56.98] Where the light shines`;
const NHOF_R = `[00:00.00] 作曲: Marc Byrd/Andrew Payne Thompson/Daniel Romer-friedman\n[00:05.00] 歌词提供: LANREN\n[00:10.00] 歌词来源: www.musixmatch.com\n[00:15.00] 作词作曲: Dan Romer\n[02:32.98]He once was a peach picker\n[02:49.98]He reaped the orchard on his own\n[03:04.98]His hands were hard and calloused\n[03:20.98]He served so many non believers until he heard the voice\n[03:39.98]Now he's our shepherd\n[03:51.98]Now he's our captain\n[04:03.98]Now he's our keeper\n[04:20.98]Now he's our Father\n[04:24.15]He's gonna lead us down that path`;
const SATELLITE = `[00:00.000] 作词 : かめりあ\n[00:00.000] 作曲 : かめりあ\n[00:00.000] 编曲 : かめりあ\n[00:00.000] 制作人 : かめりあ\n[00:00.000]作词: かめるかめりあ\n[00:02.000]作曲: かめるかめりあ\n[00:17.103]Long ago, people prayed for a wish\n[00:20.700]to a star who floated in the sky\n[00:23.693]Only artifacts can be seen there,\n[00:26.859]no matter how much we try\n[00:29.723]Instead of natural scintillation,\n[00:33.249]they always mechanically blink\n[00:36.529]No one believes fairytales anymore,\n[00:39.650]but our two hearts in sync\n[00:41.644]To wish upon a satellite, satellite\n[00:54.867]Wish upon a satellite, satellite\n[01:07.395]Wish upon a satellite...\n[02:37.869]一万年前の"ヒト"は 星ってやつに祈ったんだって\n[02:44.690]機械めいた信号じゃなく 瞬いたらしいんだ\n[02:50.757]記録か絵の中か おとぎ話にしか無いけど\n[02:57.152]星の代わりに 二つの願いをそっと\n[03:02.393]To wish upon a satellite, satellite\n[03:28.611]Wish upon a satellite, satellite\n[03:41.283]Wish upon a satellite...`;
const FA_AVICII = `[00:00.000]作词 : Tim Bergling/Carl Falk/Joe Janiak/Joakim Berg\n[00:01.000]作曲 : Tim Bergling/Carl Falk/Joe Janiak/Joakim Berg\n[00:13.000]All of the troubled times that we have overcome (翻译: 我们已然熬过这段满是艰难的时日)\n[00:20.000]All of the trials to find somewhere that we belong (翻译: 不胜数的努力考验都带领我们找寻最终所属之地)\n[00:27.000]All I know is that with you I'm holding on (翻译: 我深知你定会永伴我身边)\n[00:34.000]'Cause all of the days out, all of the days out on the run (翻译: 终日在外狂奔 逃离眼前生活)\n[00:40.000]\n[00:43.000]Don't you love it, how it all just fades away? (翻译: 你难道不享受一切消逝散去之感)\n[00:50.000]When your close, don't feel the songs of yesterday (翻译: 当你闭目时 别再为昨日之歌感伤)\n[00:56.000]And I can't go back and I can't go back (翻译: 我定然不会回到过去 回到昨日)\n[01:04.000]Don't you love it, how it all, it all just fades away? (翻译: 你难道不享受一切消逝散去之感)\n[01:11.000]\n[01:15.000]It all just fades away (翻译: 纷纭散去 一切都消散不见)\n[01:18.000]\n[01:26.000]All of the tracks we traced, we raced to reach the sun (翻译: 我们沿着重重轨迹 与彼此竞相追逐前方灼日)\n[01:33.000]All of the lights to find the place where we belong (翻译: 所有光芒都闪耀着带我们去往我们的归属之地)\n[01:40.000]All I know is that with you I'm moving on (翻译: 我只明白 与你一起让我不断前行)\n[01:47.000]'Cause all of the days out, all of the days out on the run (翻译: 只因我们终日在外狂奔 逃离眼前生活)\n[01:52.000]\n[01:54.000]And I can't go back, and I can't go back (翻译: 我定然不会回到过去 回到昨日)\n[02:03.000]Don't you love it, how it all, it all just fades away? (翻译: 你难道不享受一切消逝散去之感)\n[02:09.000]\n[02:14.000]It all just fades away (翻译: 纷纭散去 一切都消散不见)\n[02:21.000]It all just fades away (翻译: 一切都淡出这世界)\n[02:28.000]It all just fades away (翻译: 纷纭散去 一切都消散不见)\n[02:31.000]\n[02:37.000]And I can't go back and I can't go back (翻译: 我定然不会回到过去 回到昨日)\n[02:46.000]Don't you love it, how it all, it all just fades away? (翻译: 你难道不享受一切消逝散去之感)`
const WATER = `[00:00.000] 作词 : 沙包P\n[00:01.000] 作曲 : A-39\n[00:02.702]夢みたいになんて\n[00:08.194]きっとできないかな\n[00:13.952]すべてを吐いたあげく\n[00:19.200]海に沈んで消えていく\n[00:22.195]\n[00:25.202]輝く世界は\n[00:28.199]つい暗くなるんだ\n[00:30.948]気づいたらここに\n[00:33.202]たどり着いていたんだ\n[00:35.699]\n[00:36.451]かなわない願は\n[00:38.693]底へ落ちるんだ\n[00:42.200]もっともっと潜れば\n[00:44.950]見つけ出すのかな わからない\n[00:48.945]\n[00:59.197]海に 沈む 闇に 彷徨う\n[01:01.890]過去も 今も すべて を抱いて\n[01:04.885]冷たい急流にさらわれていく\n[01:07.639]深呼吸をする\n[01:09.634]\n[01:33.133]暗い世界から\n[01:35.143]きっと戻れないんだ\n[01:37.892]ひたすら逃げていて\n[01:40.634]最低な僕だから\n[01:43.141]\n[01:43.641]後悔の隙も無い\n[01:46.391]底へ落ちるんだ\n[01:49.387]乱流に巻き込まれ\n[01:51.881]ただ君の名前を叫んだ\n[01:56.887]\n[01:58.383]深度 乱流 酸素 欠乏\n[02:01.137]僕を みつけないで\n[02:04.131]この海に宿命られた\n[02:06.883]僕なんだから ねぇ\n[02:09.390]\n[02:09.636]圧力 対流 窒息 目眩\n[02:12.643]あけない夜にもがく\n[02:15.391]叶わない願いをただ探していた\n[02:26.633]\n[02:42.884]孤独の世界はもう\n[02:46.392]すでに飽きたから\n[02:49.387]一筋光は\n[02:52.139]目の前に差し込んだ\n[02:54.138]\n[02:54.890]君か 夢か どっち\n[02:57.642]もうわからないんだよ\n[02:59.882]知らないその先に\n[03:03.135]ただ必死に手を差し伸べた\n[03:13.383]\n[03:31.636]海に 泳ぐ 君 追いつける\n[03:34.386]涙も最後の約束も\n[03:37.382]ここに埋めないでと願って\n[03:40.134]深呼吸をする\n[03:42.385]\n[04:02.635]ただ君と会えると祈った\n[04:07.635]\n[04:50.635]ただ必死に手を差し伸べた`;
const RRY50_GM = `[00:00.000]作词 : Gunnar Greve/Øyvind Sauvik/Ella Marie Hætta Isaksen\n[00:01.000]作曲 : Alan Walker/James Njie/Fredrik Borch Olsen/Sander Meland/Marcus Arnbekk/Carl Hovind/Gunnar Greve/Øyvind Sauvik/Ella Marie Hætta Isaksen\n[00:49.000]Confetti is falling (翻译: 礼花鸣响 彩纸飘落)\n[00:52.000]At five in the morning (翻译: 在五点时 人群集聚)\n[00:55.000]They're screaming and crying (翻译: 他们嘶吼 他们哭泣)\n[00:57.000]But I'm all by myself (翻译: 我却自由 无拘无束)\n[01:00.000]I know you I'm sorry (翻译: 我理解你 也很遗憾)\n[01:03.000]I made up a story (翻译: 我编造了 一个故事)\n[01:05.000]I'm lonely I'm falling (翻译: 我很孤独 我正堕落)\n[01:08.000]Just like you I'm sorry (翻译: 就如同你 我很遗憾)\n[02:00.000]Lo-lo-ha-he-ey-yo-la (翻译: Lo-lo-ha-he-ey-yo-la)\n[02:02.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[02:05.000]Lo-lo lo-lo (翻译: Lo-lo lo-lo)\n[02:11.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[02:13.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[02:16.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[02:19.000]Lo-lo-le-ho-le (翻译: Lo-lo-le-ho-le)\n[02:57.000]Confetti is falling (翻译: 凌晨五点 人们聚集)\n[03:00.000]At five in the morning (翻译: 礼花放出 彩纸飘落)\n[03:03.000]They're screaming and crying (翻译: 他们嘶吼 他们哭泣)\n[03:05.000]But I'm all by myself (翻译: 我却可以 自由自在)\n[03:08.000]I know you I'm sorry (翻译: 我理解你 我很抱歉)\n[03:11.000]I made up a story (翻译: 因我编造 一个故事)\n[03:13.000]I'm lonely I'm falling (翻译: 我极孤独 我正堕落)\n[03:16.000]Just like you I'm sorry (翻译: 就如同你 我很抱歉)\n[03:41.000]Confetti is falling (翻译: 礼花已鸣响 彩纸正飘落)\n[03:43.000]At five in the morning (翻译: 在五点之时 人们都聚集)\n[03:46.000]They're screaming and crying (翻译: 他们在嘶吼 他们在哭泣)\n[03:49.000]But I'm all by myself (翻译: 我却无拘束 自由而自在)\n[03:52.000]I know you I'm sorry (翻译: 我理解你 我很抱歉)\n[03:54.000]I made up a story (翻译: 因我编故事 借此来哄骗)\n[03:57.000]I'm lonely I'm falling (翻译: 我极度孤独 我正在堕落)\n[04:00.000]Just like you I'm sorry (翻译: 这就如同你 我感到遗憾)\n[04:52.000]Lo-lo-ha-he-ey-yo-la (翻译: Lo-lo-ha-he-ey-yo-la)\n[04:54.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[04:57.000]Lo-lo lo-lo (翻译: Lo-lo lo-lo)\n[05:02.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[05:05.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[05:08.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[05:10.000]Lo-lo-le-ho-le (翻译: Lo-lo-le-ho-le)\n[05:49.000]Confetti is falling (翻译: 在五点之时 人们都聚集)\n[05:52.000]At five in the morning (翻译: 礼花已鸣响 彩纸正飘落)\n[05:55.000]They're screaming and crying (翻译: 他们正嘶吼 他们正流泪)\n[05:57.000]But I'm all by myself (翻译: 我在此时却 无拘而无束)\n[06:00.000]I know you I'm sorry (翻译: 我能理解你 我也很抱歉)\n[06:03.000]I made up a story (翻译: 因为我为此 编造个故事)\n[06:05.000]I'm lonely I'm falling (翻译: 我极度孤独 我正在堕落)\n[06:08.000]Just like you I'm sorry (翻译: 就像你一样 我感到抱歉)\n[06:33.000]Confetti is falling (翻译: 礼花已经鸣响 彩纸正在飘落)\n[06:35.000]At five in the morning (翻译: 在五点的时候 人们聚在一起)\n[06:38.000]They're screaming and crying (翻译: 他们正在嘶吼 他们正在哭泣)\n[06:41.000]But I'm all by myself (翻译: 我却自由自在 我却无拘无束)\n[06:44.000]I know you I'm sorry (翻译: 我能够理解你 我对此很遗憾)\n[06:46.000]I made up a story (翻译: 因为我编故事 借这些来哄骗)\n[06:49.000]I'm lonely I'm falling (翻译: 我已极度孤独 我还正在堕落)\n[06:52.000]Just like you I'm sorry (翻译: 就如同你一样 我感到很遗憾)\n[07:43.000]Lo-lo-ha-he-ey-yo-la (翻译: Lo-lo-ha-he-ey-yo-la)\n[07:46.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[07:49.000]Lo-lo lo-lo (翻译: Lo-lo lo-lo)\n[07:54.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[07:57.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[07:59.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[08:02.000]Lo-lo-le-ho-le (翻译: Lo-lo-le-ho-le)\n[08:41.000]Confetti is falling (翻译: 凌晨五点时分 人们聚在一起)\n[08:44.000]At five in the morning (翻译: 礼花已经鸣响 彩纸正在飘落)\n[08:46.000]They're screaming and crying (翻译: 他们喊叫嘶吼 他们感动哭泣)\n[08:49.000]But I'm all by myself (翻译: 我却无拘无束 我却自由自在)\n[08:52.000]I know you I'm sorry (翻译: 我能够理解你 我对此很抱歉)\n[08:54.000]I made up a story (翻译: 因为我编故事 借这些来哄骗)\n[08:57.000]I'm lonely I'm falling (翻译: 我已极度孤独 我还正在堕落)\n[09:00.000]Just like you I'm sorry (翻译: 就如同你一样 我感到很遗憾)\n[09:25.000]Confetti is falling (翻译: 在五点之时 人们都聚集)\n[09:27.000]At five in the morning (翻译: 礼花已鸣响 彩纸正飘落)\n[09:30.000]They're screaming and crying (翻译: 他们正嘶吼 他们正流泪)\n[09:33.000]But I'm all by myself (翻译: 我在此时却 无拘而无束)\n[09:35.000]I know you I'm sorry (翻译: 我能理解你 我也很抱歉)\n[09:38.000]I made up a story (翻译: 因我编故事 借此来哄骗)\n[09:41.000]I'm lonely I'm falling (翻译: 我极度孤独 我正在堕落)\n[09:44.000]Just like you I'm sorry (翻译: 就像你一样 我感到抱歉)\n[10:35.000]Lo-lo-ha-he-ey-yo-la (翻译: Lo-lo-ha-he-ey-yo-la)\n[10:38.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[10:40.000]Lo-lo lo-lo (翻译: Lo-lo lo-lo)\n[10:46.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[10:49.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[10:51.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[10:54.000]Lo-lo-le-ho-le (翻译: Lo-lo-le-ho-le)\n[11:33.000]Confetti is falling (翻译: 在五点之时 人们都聚集)\n[11:35.000]At five in the morning (翻译: 礼花已鸣响 彩纸正飘落)\n[11:38.000]They're screaming and crying (翻译: 他们正嘶吼 他们正流泪)\n[11:41.000]But I'm all by myself (翻译: 我在此时却 无拘而无束)\n[11:44.000]I know you I'm sorry (翻译: 我能理解你 我也很抱歉)\n[11:46.000]I made up a story (翻译: 因我编故事 借此来哄骗)\n[11:49.000]I'm lonely I'm falling (翻译: 我极度孤独 我正在堕落)\n[11:52.000]Just like you I'm sorry (翻译: 就像你一样 我感到抱歉)\n[12:16.000]Confetti is falling (翻译: 礼花鸣响 彩纸飘落)\n[12:19.000]At five in the morning (翻译: 在五点时 人群集聚)\n[12:22.000]They're screaming and crying (翻译: 他们嘶吼 他们哭泣)\n[12:24.000]But I'm all by myself (翻译: 我却自由 无拘无束)\n[12:27.000]I know you I'm sorry (翻译: 我理解你 也很遗憾)\n[12:30.000]I made up a story (翻译: 我编造了 一个故事)\n[12:32.000]I'm lonely I'm falling (翻译: 我很孤独 我正堕落)\n[12:35.000]Just like you I'm sorry (翻译: 就如同你 我很抱歉)\n[13:27.000]Lo-lo-ha-he-ey-yo-la (翻译: Lo-lo-ha-he-ey-yo-la)\n[13:29.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[13:32.000]Lo-lo lo-lo (翻译: Lo-lo lo-lo)\n[13:38.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[13:41.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[13:43.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[13:46.000]Lo-lo-le-ho-le (翻译: Lo-lo-le-ho-le)\n[14:25.000]Confetti is falling (翻译: 礼花鸣响 彩纸飘落)\n[14:27.000]At five in the morning (翻译: 在五点时 人群集聚)\n[14:30.000]They're screaming and crying (翻译: 他们嘶吼 他们哭泣)\n[14:33.000]But I'm all by myself (翻译: 我却自由 无拘无束)\n[14:35.000]I know you I'm sorry (翻译: 我理解你 也很遗憾)\n[14:38.000]I made up a story (翻译: 我编造了 一个故事)\n[14:41.000]I'm lonely I'm falling (翻译: 我很孤独 我正堕落)\n[14:43.000]Just like you I'm sorry (翻译: 就如同你 我很抱歉)\n[15:08.000]Confetti is falling (翻译: 礼花已鸣响 彩纸正飘落)\n[15:11.000]At five in the morning (翻译: 在五点之时 人们都聚集)\n[15:14.000]They're screaming and crying (翻译: 他们在嘶吼 他们在哭泣)\n[15:16.000]But I'm all by myself (翻译: 我却无拘束 自由而自在)\n[15:19.000]I know you I'm sorry (翻译: 我能理解你 我也很抱歉)\n[15:22.000]I made up a story (翻译: 因为我为此 编造了故事)\n[15:24.000]I'm lonely I'm falling (翻译: 我极度孤独 我正在堕落)\n[15:27.000]Just like you I'm sorry (翻译: 这就如同你 我感到遗憾)\n[16:19.000]Lo-lo-ha-he-ey-yo-la (翻译: Lo-lo-ha-he-ey-yo-la)\n[16:21.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[16:24.000]Lo-lo lo-lo (翻译: Lo-lo lo-lo)\n[16:30.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[16:32.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[16:35.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[16:38.000]Lo-lo-le-ho-le (翻译: Lo-lo-le-ho-le)\n[17:16.000]Confetti is falling (翻译: 礼花已鸣响 彩纸正飘落)\n[17:19.000]At five in the morning (翻译: 在五点之时 人们都聚集)\n[17:22.000]They're screaming and crying (翻译: 他们在嘶吼 他们在哭泣)\n[17:24.000]But I'm all by myself (翻译: 我却无拘束 自由而自在)\n[17:27.000]I know you I'm sorry (翻译: 我能理解你 我也很抱歉)\n[17:30.000]I made up a story (翻译: 因为我为此 编造个故事)\n[17:33.000]I'm lonely I'm falling (翻译: 我极度孤独 我正在堕落)\n[17:35.000]Just like you I'm sorry (翻译: 这就如同你 我感到遗憾)\n[18:00.000]Confetti is falling (翻译: 凌晨五点时分 人们聚在一起)\n[18:03.000]At five in the morning (翻译: 礼花已经鸣响 彩纸正在飘落)\n[18:05.000]They're screaming and crying (翻译: 他们喊叫嘶吼 他们感动哭泣)\n[18:08.000]But I'm all by myself (翻译: 我却无拘无束 我却自由自在)\n[18:11.000]I know you I'm sorry (翻译: 我能够理解你 我对此很抱歉)\n[18:14.000]I made up a story (翻译: 因为我编故事 借这些来哄骗)\n[18:16.000]I'm lonely I'm falling (翻译: 我已极度孤独 我还正在堕落)\n[18:19.000]Just like you I'm sorry (翻译: 就如同你一样 感到很遗憾)\n[19:11.000]Lo-lo-ha-he-ey-yo-la (翻译: Lo-lo-ha-he-ey-yo-la)\n[19:13.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[19:16.000]Lo-lo lo-lo (翻译: Lo-lo lo-lo)\n[19:21.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[19:24.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[19:27.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[19:30.000]Lo-lo-le-ho-le (翻译: Lo-lo-le-ho-le)\n[20:08.000]Confetti is falling (翻译: 凌晨五点时分 人们聚在一起)\n[20:11.000]At five in the morning (翻译: 礼花已经鸣响 彩纸正在飘落)\n[20:13.000]They're screaming and crying (翻译: 他们喊叫嘶吼 他们感动哭泣)\n[20:16.000]But I'm all by myself (翻译: 我却无拘无束 我却自由自在)\n[20:19.000]I know you I'm sorry (翻译: 我能够理解你 对此很抱歉)\n[20:22.000]I made up a story (翻译: 因为我编故事 借这些来哄骗)\n[20:24.000]I'm lonely I'm falling (翻译: 我已极度孤独 我还正在堕落)\n[20:27.000]Just like you I'm sorry (翻译: 就如同你一样 我感到很遗憾)\n[20:52.000]Confetti is falling (翻译: 礼花已鸣响 彩纸正飘落)\n[20:54.000]At five in the morning (翻译: 在五点之时 人们都聚集)\n[20:57.000]They're screaming and crying (翻译: 他们在嘶吼 他们在哭泣)\n[21:00.000]But I'm all by myself (翻译: 我却无拘束 自由而自在)\n[21:03.000]I know you I'm sorry (翻译: 我能理解你 我也很抱歉)\n[21:05.000]I made up a story (翻译: 因我编故事 借此来哄骗)\n[21:08.000]I'm lonely I'm falling (翻译: 我极度孤独 我正在堕落)\n[21:11.000]Just like you I'm sorry (翻译: 就如你一般 我感到遗憾)\n[22:02.000]Lo-lo-ha-he-ey-yo-la (翻译: Lo-lo-ha-he-ey-yo-la)\n[22:05.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[22:08.000]Lo-lo lo-lo (翻译: Lo-lo lo-lo)\n[22:13.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[22:16.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[22:19.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[22:21.000]Lo-lo-le-ho-le (翻译: Lo-lo-le-ho-le)\n[23:00.000]Confetti is falling (翻译: 礼花已鸣响 彩纸正飘落)\n[23:02.000]At five in the morning (翻译: 在五点之时 人们都聚集)\n[23:05.000]They're screaming and crying (翻译: 他们正嘶吼 他们在哭泣)\n[23:08.000]But I'm all by myself (翻译: 我却无拘束 自由而自在)\n[23:11.000]I know you I'm sorry (翻译: 我能理解你 我也很抱歉)\n[23:13.000]I made up a story (翻译: 因我编故事 借此来哄骗)\n[23:16.000]I'm lonely I'm falling (翻译: 我极度孤独 我正在堕落)\n[23:19.000]Just like you I'm sorry (翻译: 这就如同你 我感到遗憾)\n[23:44.000]Confetti is falling (翻译: 礼花鸣响 彩纸飘落)\n[23:46.000]At five in the morning (翻译: 在五点时 人群集聚)\n[23:49.000]They're screaming and crying (翻译: 他们嘶吼 他们哭泣)\n[23:52.000]But I'm all by myself (翻译: 我却自由 无拘无束)\n[23:54.000]I know you I'm sorry (翻译: 我理解你 也很遗憾)\n[23:57.000]I made up a story (翻译: 我编造了 一个故事)\n[24:00.000]I'm lonely I'm falling (翻译: 我很孤独 我正堕落)\n[24:02.000]Just like you I'm sorry (翻译: 就如同你 我很遗憾)\n[24:54.000]Lo-lo-ha-he-ey-yo-la (翻译: Lo-lo-ha-he-ey-yo-la)\n[24:57.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[25:00.000]Lo-lo lo-lo (翻译: Lo-lo lo-lo)\n[25:05.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[25:08.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[25:10.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[25:13.000]Lo-lo-le-ho-le (翻译: Lo-lo-le-ho-le)\n[25:52.000]Confetti is falling (翻译: 礼花鸣响 彩纸飘落)\n[25:54.000]At five in the morning (翻译: 在五点时 人群集聚)\n[25:57.000]They're screaming and crying (翻译: 他们嘶吼 他们哭泣)\n[26:00.000]But I'm all by myself (翻: 我却自由 无拘无束)\n[26:03.000]I know you I'm sorry (翻译: 我理解你 也很遗憾)\n[26:05.000]I made up a story (翻译: 我编造了 一个故事)\n[26:08.000]I'm lonely I'm falling (翻译: 我很孤独 我正堕落)\n[26:11.000]Just like you I'm sorry (翻译: 就如同你 我很遗憾)\n[26:35.000]Confetti is falling (翻译: 在五点之时 人们都聚集)\n[26:38.000]At five in the morning (翻译: 礼花已鸣响 彩纸正飘落)\n[26:41.000]They're screaming and crying (翻译: 他们在嘶吼 他们在哭泣)\n[26:44.000]But I'm all by myself (翻译: 我却无拘束 自由而自在)\n[26:46.000]I know you I'm sorry (翻译: 我能理解你 我也很抱歉)\n[26:49.000]I made up a story (翻译: 因我编故事 借这些来哄骗)\n[26:52.000]I'm lonely I'm falling (翻译: 我极度孤独 我正在堕落)\n[26:54.000]Just like you I'm sorry (翻译: 就如你一般 我感到遗憾)\n[27:46.000]Lo-lo-ha-he-ey-yo-la (翻译: Lo-lo-ha-he-ey-yo-la)\n[27:49.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[27:51.000]Lo-lo lo-lo (翻译: Lo-lo lo-lo)\n[27:57.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[28:00.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[28:02.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[28:05.000]Lo-lo-le-ho-le (翻译: Lo-lo-le-ho-le)\n[28:44.000]Confetti is falling (翻译: 在五点之时 人们都聚集)\n[28:46.000]At five in the morning (翻译: 礼花已鸣响 彩纸正飘落)\n[28:49.000]They're screaming and crying (翻译: 他们在嘶吼 他们正哭泣)\n[28:52.000]But I'm all by myself (翻译: 我却无拘束 自由而自在)\n[28:54.000]I know you I'm sorry (翻译: 我能理解你 我也很抱歉)\n[28:57.000]I made up a story (翻译: 因我编故事 借此来哄骗)\n[29:00.000]I'm lonely I'm falling (翻译: 我极度孤独 我正在堕落)\n[29:02.000]Just like you I'm sorry (翻译: 就如你一般 我感到遗憾)\n[29:27.000]Confetti is falling (翻译: 凌晨五点时分 人们聚在一起)\n[29:30.000]At five in the morning (翻译: 礼花已经鸣响 彩纸正在飘落)\n[29:33.000]They're screaming and crying (翻译: 他们     嘶吼 他们感动哭泣)\n[29:35.000]But I'm all by myself (翻译: 我却无拘无束 我却自由自在)\n[29:38.000]I know you I'm sorry (翻译: 我能够理解你 我对此很抱歉)\n[29:41.000]I made up a story (翻译: 因为我编故事 借这些来哄骗)\n[29:43.000]I'm lonely I'm falling (翻译: 我已极度孤独 我还正在落)\n[29:46.000]Just like you I'm sorry (翻译: 就如同你一样 我感到很遗憾)\n[30:38.000]Lo-lo-ha-he-ey-yo-la (翻译: Lo-lo-ha-he-ey-yo-la)\n[30:40.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[30:43.000]Lo-lo lo-lo (翻译: Lo-lo lo-lo)\n[30:48.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[30:51.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[30:54.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[30:57.000]Lo-lo-le-ho-le (翻译: Lo-lo-le-ho-le)\n[31:35.000]Confetti is falling (翻译: 凌晨五点时分 人们聚在一起)\n[31:38.000]At five in the morning (翻译: 礼花已经鸣响 彩纸正在飘落)\n[31:41.000]They're screaming and crying (翻译: 他们喊叫嘶吼 他们感动哭泣)\n[31:43.000]But I'm all by myself (翻译: 我却无拘无束 我却自由自在)\n[31:46.000]I know you I'm sorry (翻译: 我能够理解你 我对此很抱歉)\n[31:49.000]I made up a story (翻译: 因为我编故事 借这些来哄骗)\n[31:52.000]I'm lonely I'm falling (翻译: 我已极度孤独 我还正在堕落)\n[31:54.000]Just like you I'm sorry (翻译: 就如同你一样 我感到很遗憾)\n[32:19.000]Confetti is falling (翻译: 礼花已鸣响 彩纸正飘落)\n[32:22.000]At five in the morning (翻译: 在五点之时 人们都聚集)\n[32:24.000]They're screaming and crying (翻译: 他们在嘶吼 他们在哭泣)\n[32:27.000]But I'm all by myself (翻译: 我却无拘束 自由而自在)\n[32:30.000]I know you I'm sorry (翻译: 我能理解你 我也很抱歉)\n[32:33.000]I made up a story (翻译: 因我编故事 借此来哄骗)\n[32:35.000]I'm lonely I'm falling (翻译: 我极度孤独 我正在堕落)\n[32:38.000]Just like you I'm sorry (翻译: 这就如同你 我感到遗憾)\n[33:29.000]Lo-lo-ha-he-ey-yo-la (翻译: Lo-lo-ha-he-ey-yo-la)\n[33:32.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[33:35.000]Lo-lo lo-lo (翻译: Lo-lo lo-lo)\n[33:40.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[33:43.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[33:46.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[33:49.000]Lo-lo-le-ho-le (翻译: Lo-lo-le-ho-le)\n[34:27.000]Confetti is falling (翻译: 礼花已鸣响 彩纸正飘落)\n[34:30.000]At five in the morning (翻译: 在五点之时 人们都聚集)\n[34:33.000]They're screaming and crying (翻译: 他们在嘶吼 他们在哭泣)\n[34:35.000]But I'm all by myself (翻译: 我却无拘束 自由而自在)\n[34:38.000]I know you I'm sorry (翻译: 我能理解你 我也很抱歉)\n[34:41.000]I made up a story (翻译: 因我编故事 借此来哄骗)\n[34:43.000]I'm lonely I'm falling (翻译: 我极度孤独 我正在堕落)\n[34:46.000]Just like you I'm sorry (翻译: 这就如同你 我感到遗憾)\n[35:11.000]Confetti is falling (翻译: 凌晨五点 人们聚集)\n[35:13.000]At five in the morning (翻译: 礼花放出 彩纸飘落)\n[35:16.000]They're screaming and crying (翻译: 他们嘶吼 他们哭泣)\n[35:19.000]But I'm all by myself (翻译: 我却自由 无拘无束)\n[35:22.000]I know you I'm sorry (翻译: 我理解你 也很遗憾)\n[35:24.000]I made up a story (翻译: 我编故事 借此欺骗)\n[35:27.000]I'm lonely I'm falling (翻译: 我很孤独 我正堕落)\n[35:30.000]Just like you I'm sorry (翻译: 就如同你 我很遗憾)\n[36:21.000]Lo-lo-ha-he-ey-yo-la (翻译: Lo-lo-ha-he-ey-yo-la)\n[36:24.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[36:27.000]Lo-lo lo-lo (翻译: Lo-lo lo-lo)\n[36:32.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[36:35.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[36:38.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[36:40.000]Lo-lo-le-ho-le (翻译: Lo-lo-le-ho-le)\n[37:19.000]Confetti is falling (翻译: 凌晨五点 人们聚集)\n[37:22.000]At five in the morning (翻译: 礼花放出 彩纸飘落)\n[37:24.000]They're screaming and crying (翻译: 他们嘶吼 他们哭泣)\n[37:27.000]But I'm all by myself (翻译: 我却自由 无拘无束)\n[37:30.000]I know you I'm sorry (翻译: 我理解你 也很遗憾)\n[37:33.000]I made up a story (翻译: 我编故事 借此欺骗)\n[37:35.000]I'm lonely I'm falling (翻译: 我很孤独 我正堕落)\n[37:38.000]Just like you I'm sorry (翻译: 就如同你 我很遗憾)\n[38:03.000]Confetti is falling (翻译: 在五点之时 人们都聚集)\n[38:05.000]At five in the morning (翻译: 礼花已鸣响 彩纸正飘落)\n[38:08.000]They're screaming and crying (翻译: 他们在嘶吼 他们在哭泣)\n[38:11.000]But I'm all by myself (翻译: 我却无拘束 自由而自在)\n[38:14.000]I know you I'm sorry (翻译: 我能理解你 我也很抱歉)\n[38:16.000]I made up a story (翻译: 因我编故事 借此来哄骗)\n[38:19.000]I'm lonely I'm falling (翻译: 我极度孤独 我正在堕落)\n[38:22.000]Just like you I'm sorry (翻译: 就如你一般 我感到遗憾)\n[39:13.000]Lo-lo-ha-he-ey-yo-la (翻译: Lo-lo-ha-he-ey-yo-la)\n[39:16.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[39:19.000]Lo-lo lo-lo (翻译: Lo-lo lo-lo)\n[39:24.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[39:27.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[39:29.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[39:32.000]Lo-lo-le-ho-le (翻译: Lo-lo-le-ho-le)\n[40:11.000]Confetti is falling (翻译: 在五点之时 人们都聚集)\n[40:13.000]At five in the morning (翻译: 礼花已鸣响 彩纸正飘落)\n[40:16.000]They're screaming and crying (翻译: 他们在嘶吼 他们在哭泣)\n[40:19.000]But I'm all by myself (翻译: 我却无拘束 自由而自在)\n[40:22.000]I know you I'm sorry (翻译: 我能理解你 我也很抱歉)\n[40:24.000]I made up a story (翻译: 因我编故事 借此来哄骗)\n[40:27.000]I'm lonely I'm falling (翻译: 我极度孤独 我正在堕落)\n[40:30.000]Just like you I'm sorry (翻译: 就如你一般 我感到遗憾)\n[40:55.000]Confetti is falling (翻译: 礼花已经鸣响 彩纸正在飘落)\n[40:57.000]At five in the morning (翻译: 凌晨五点时分 人们聚在一起)\n[41:00.000]They're screaming and crying (翻译: 他们喊叫嘶吼 他们感动哭泣)\n[41:03.000]But I'm all by myself (翻译: 我却自由自在 我却无拘无束)\n[41:05.000]I know you I'm sorry (翻译: 我能够理解你 我对此很抱歉)\n[41:08.000]I made up a story (翻译: 因为我编故事 借这些来哄骗)\n[41:11.000]I'm lonely I'm falling (翻译: 我已极度孤独 我还正在堕落)\n[41:13.000]Just like you I'm sorry (翻译: 就如同你一样 我感到很遗憾)\n[42:05.000]Lo-lo-ha-he-ey-yo-la (翻译: Lo-lo-ha-he-ey-yo-la)\n[42:08.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[42:10.000]Lo-lo lo-lo (翻译: Lo-lo lo-lo)\n[42:16.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[42:19.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[42:21.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[42:24.000]Lo-lo-le-ho-le (翻译: Lo-lo-le-ho-le)\n[43:03.000]Confetti is falling (翻译: 礼花已经鸣响 彩纸正在飘落)\n[43:05.000]At five in the morning (翻译: 凌晨五点时分 人们聚在一起)\n[43:08.000]They're screaming and crying (翻译: 他们喊叫嘶吼 他们感动哭泣)\n[43:11.000]But I'm all by myself (翻译: 我却自由自在 我却无拘无束)\n[43:13.000]I know you I'm sorry (翻译: 我能够理解你 我对此很抱歉)\n[43:16.000]I made up a story (翻译: 因为我编故事 借这些来哄骗)\n[43:19.000]I'm lonely I'm falling (翻译: 我已极度孤独 我还正在堕落)\n[43:22.000]Just like you I'm sorry (翻译: 就如同你一样 我感到很遗憾)\n[43:47.000]Confetti is falling (翻译: 礼花已鸣响 彩纸正飘落)\n[43:49.000]At five in the morning (翻译: 在五点之时 人们都聚集)\n[43:52.000]They're screaming and crying (翻译: 他们在嘶吼 他   在哭泣)\n[43:54.000]But I'm all by myself (翻译: 我却无拘束 自由而自在)\n[43:57.000]I know you I'm sorry (翻译: 我能解你 我也很抱歉)\n[44:00.000]I made up a story (翻译: 因我编故事 借此来哄骗)\n[44:02.000]I'm lonely I'm falling (翻译: 我极度孤独 我正在堕落)\n[44:05.000]Just like you I'm sorry (翻译: 就像你一样 我感到遗憾)\n[44:57.000]Lo-lo-ha-he-ey-yo-la (翻译: Lo-lo-ha-he-ey-yo-la)\n[44:59.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[45:02.000]Lo-lo lo-lo (翻译: Lo-lo lo-lo)\n[45:08.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[45:10.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[45:13.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[45:16.000]Lo-lo-le-ho-le (翻译: Lo-lo-le-ho-le)\n[45:55.000]Confetti is falling (翻译: 礼花已鸣响 彩纸正飘落)\n[45:57.000]At five in the morning (翻译: 在五点之时 人们都聚集)\n[46:00.000]They're screaming and crying (翻译: 他们在嘶吼 他们在哭泣)\n[46:03.000]But I'm all by myself (翻译: 我却无拘束 自由而自在)\n[46:05.000]I know you I'm sorry (翻译: 我能理解你 我也很抱歉)\n[46:08.000]I made up a story (翻译: 因我编故事 借此来哄骗)\n[46:11.000]I'm lonely I'm falling (翻译: 我极度孤独 我正在堕落)\n[46:13.000]Just like you I'm sorry (翻译: 这就如同你 我感到遗憾)\n[46:38.000]Confetti is falling (翻译: 礼花鸣响 彩纸飘落)\n[46:41.000]At five in the morning (翻译: 在五点时 人群集聚)\n[46:43.000]They're screaming and crying (翻译: 他们嘶吼 他们哭泣)\n[46:46.000]But I'm all by myself (翻译: 我却自由 无拘无束)\n[46:49.000]I know you I'm sorry (翻译: 我理解你 也很遗憾)\n[46:52.000]I made up a story (翻译: 我编造了 一个故事)\n[46:54.000]I'm lonely I'm falling (翻译: 我很孤独 我正堕落)\n[46:57.000]Just like you I'm sorry (翻译: 就如同你 我很遗憾)\n[47:49.000]Lo-lo-ha-he-ey-yo-la (翻译: Lo-lo-ha-he-ey-yo-la)\n[47:51.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[47:54.000]Lo-lo lo-lo (翻译: Lo-lo lo-lo)\n[48:00.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[48:02.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[48:05.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[48:08.000]Lo-lo-le-ho-le (翻译: Lo-lo-le-ho-le)\n[48:46.000]Confetti is falling (翻译: 礼花鸣响 彩纸飘落)\n[48:49.000]At five in the morning (翻译: 在五点时 人集聚)\n[48:52.000]They're screaming and crying (翻译: 他们嘶吼 他们哭泣)\n[48:54.000]But I'm all by myself (翻译: 我却自由 无拘无束)\n[48:57.000]I know you I'm sorry (翻译: 我理解你 也很遗憾)\n[49:00.000]I made up a story (翻译: 我编造了 一个故事)\n[49:02.000]I'm lonely I'm falling (翻译: 我很孤独 我正堕落)\n[49:05.000]Just like you I'm sorry (翻译: 就如同你 我很遗憾)\n[49:30.000]Confetti is falling (翻译: 在五点之时 人们都聚集)\n[49:33.000]At five in the morning (翻译: 礼花已鸣响 彩纸正飘落)\n[49:35.000]They're screaming and crying (翻译: 他们在嘶吼 他们在哭泣)\n[49:38.000]But I'm all by myself (翻译: 我却无拘束 自由而自在)\n[49:41.000]I know you I'm sorry (翻译: 我能理解你 我也很抱歉)\n[49:44.000]I made up a story (翻译: 因我编故事 借此来哄骗)\n[49:46.000]I'm lonely I'm falling (翻译: 我极度孤独 我正在堕落)\n[49:49.000]Just like you I'm sorry (翻译: 就如你一般 我感到遗憾)\n[50:41.000]Lo-lo-ha-he-ey-yo-la (翻译: Lo-lo-ha-he-ey-yo-la)\n[50:43.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[50:46.000]Lo-lo lo-lo (翻译: Lo-lo lo-lo)\n[50:51.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[50:54.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[50:57.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[51:00.000]Lo-lo-le-ho-le (翻译: Lo-lo-le-ho-le)\n[51:38.000]Confetti is falling (翻译: 在五点之时 人们都聚集)\n[51:41.000]At five in the morning (翻译: 礼花已鸣响 彩纸正飘落)\n[51:43.000]They're screaming and crying (翻译: 他们在嘶吼 他们在哭泣)\n[51:46.000]But I'm all by myself (翻译: 我却无拘束 自由而自在)\n[51:49.000]I know you I'm sorry (翻译: 我能理解你 我也很抱歉)\n[51:52.000]I made up a story (翻译: 因我编故事 借此来哄骗)\n[51:54.000]I'm lonely I'm falling (翻译: 我极度孤独 我正在堕落)\n[51:57.000]Just like you I'm sorry (翻译: 就如你一般 我感到遗憾)\n[52:22.000]Confetti is falling (翻译: 凌晨五点时分 人们聚在一起)\n[52:24.000]At five in the morning (翻译: 礼花已经鸣响 彩纸正在飘落)\n[52:27.000]They're screaming and crying (翻译: 他们喊叫嘶吼 他们感动哭泣)\n[52:30.000]But I'm all by myself (翻译: 我却无拘无束 我却自由自在)\n[52:33.000]I know you I'm sorry (翻译: 我能够理解你 我对此很抱歉)\n[52:35.000]I made up a story (翻译: 因为我编故事 借这些来哄骗)\n[52:38.000]I'm lonely I'm falling (翻译: 我已极度孤独 我还正在堕落)\n[52:41.000]Just like you I'm sorry (翻译: 就如同你一样 我感到很遗憾)\n[53:32.000]Lo-lo-ha-he-ey-yo-la (翻译: Lo-lo-ha-he-ey-yo-la)\n[53:35.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[53:38.000]Lo-lo lo-lo (翻译: Lo-lo lo-lo)\n[53:43.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[53:46.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[53:49.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[53:51.000]Lo-lo-le-ho-le (翻译: Lo-lo-le-ho-le)\n[54:30.000]Confetti is falling (翻译: 凌晨五点时分 人们聚在一起)\n[54:33.000]At five in the morning (翻译: 礼花已经鸣响 彩纸正在飘落)\n[54:35.000]They're screaming and crying (翻译: 他们喊叫嘶吼 他们感动哭泣)\n[54:38.000]But I'm all by myself (翻译: 我却无拘无束 我却自由自在)\n[54:41.000]I know you I'm sorry (翻译: 我能够理解你 我对此很抱歉)\n[54:44.000]I made up a story (翻译: 因为我编故事 借这些来哄骗)\n[54:46.000]I'm lonely I'm falling (翻译: 我已极度孤独 我还正在堕落)\n[54:49.000]Just like you I'm sorry (翻译: 就如同你一样 我感到很遗憾)\n[55:14.000]Confetti is falling (翻译: 礼花已鸣响 彩纸正飘落)\n[55:16.000]At five in the morning (翻译: 在五点之时 人们都聚集)\n[55:19.000]They're screaming and crying (翻译: 他们在嘶吼 他们在哭泣)\n[55:22.000]But I'm all by myself (翻译: 我却无拘束 自由而自在)\n[55:24.000]I know you I'm sorry (翻译: 我能理解你 我也很抱歉)\n[55:27.000]I made up a story (翻译: 因我编故事 借此来哄骗)\n[55:30.000]I'm lonely I'm falling (翻译: 我极度孤独 我正在堕落)\n[55:33.000]Just like you I'm sorry (翻译: 就像你一样 我感到遗憾)\n[56:25.000]Lo-lo-ha-he-ey-yo-la (翻译: Lo-lo-ha-he-ey-yo-la)\n[56:27.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[56:30.000]Lo-lo lo-lo (翻译: Lo-lo lo-lo)\n[56:35.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[56:38.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[56:40.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[56:43.000]Lo-lo-le-ho-le (翻译: Lo-lo-le-ho-le)\n[57:22.000]Confetti is falling (翻译: 礼花已鸣响 彩纸正飘落)\n[57:24.000]At five in the morning (翻译: 在五点之时 人们都聚集)\n[57:27.000]They're screaming and crying (翻译: 他们在嘶吼 他们在哭泣)\n[57:30.000]But I'm all by myself (翻译: 我却无拘束 自由而自在)\n[57:33.000]I know you I'm sorry (翻译: 我能理解你 我也很抱歉)\n[57:35.000]I made up a story (翻译: 因我编故事 借此来哄骗)\n[57:38.000]I'm lonely I'm falling (翻译: 我极度孤独 我正在堕落)\n[57:41.000]Just like you I'm sorry (翻译: 就像你一样 我感到遗憾)\n[58:05.000]Confetti is falling (翻译: 礼花鸣响 彩纸飘落)\n[58:08.000]At five in the morning (翻译: 在五点时 人群集聚)\n[58:11.000]They're screaming and crying (翻译: 他们嘶吼 他们哭泣)\n[58:14.000]But I'm all by myself (翻译: 我却自由 无拘束)\n[58:16.000]I know you I'm sorry (翻译: 我理解你 也很遗憾)\n[58:19.000]I made up a story (翻译: 我编造了 一个故事)\n[58:22.000]I'm lonely I'm falling (翻译: 我很孤独 我正堕落)\n[58:24.000]Just like you I'm sorry (翻译: 就如同你 我很遗憾)\n[59:16.000]Lo-lo-ha-he-ey-yo-la (翻译: Lo-lo-ha-he-ey-yo-la)\n[59:19.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[59:21.000]Lo-lo lo-lo (翻译: Lo-lo lo-lo)\n[59:27.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[59:29.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[59:32.000]Lo-lo-ho-lo-le-lo-la (翻译: Lo-lo-ho-lo-le-lo-la)\n[59:35.000]Lo-lo-le-ho-le (翻译: Lo-lo-le-ho-le)\n[60:14.000]Confetti is falling (翻译: 凌晨五点 人们聚集)\n[60:16.000]At five in the morning (翻译: 礼花放出 彩纸飘落)\n[60:19.000]They're screaming and crying (翻译: 他们嘶吼 他们哭泣)\n[60:22.000]But I'm all by myself (翻译: 我却自由 无拘无束)\n[60:24.000]I know you I'm sorry (翻译: 我理解你 也很遗憾)\n[60:27.000]I made up a story (翻译: 我编故事 借此欺骗)\n[60:30.000]I'm lonely I'm falling (翻译: 我很孤独 我正堕落)\n[60:33.000]Just like you I'm sorry (翻译: 就如同你 我很遗憾)`;
const GHOST = `[00:00.000] 作词 : Alan Walker/Jamie Aura Stenzel/Andrew Frampton/Max Farrar/Marcus Ambekk/Colton Avery/Fredrick Borch Olsen\n[00:01.000] 作曲 : Alan Walker/Jamie Aura Stenzel/Andrew Frampton/Max Farrar/Marcus Ambekk/Colton Avery/Fredrick Borch Olsen \n[00:06.382]Today I'm kinda feelin like a ghost\n[00:09.895]Call my friends but ain't nobody home\n[00:12.892]Tell myself I'm fine but I don't really know\n[00:16.289]I'm just scared that I'll end up I'll end up I'll end up alone\n[00:20.504]\n[00:20.663]I never let it show\n[00:23.000]But I feel like a missed call on a phone\n[00:26.374]Tryna live my life pay as you go\n[00:29.693]But I'm so scared that I'll end up I'll end up I'll end up alone\n[00:33.929]\n[00:33.981]You know I'm like a ghost\n[00:35.624]Sometimes I have to fade\n[00:37.855]And it haunts me that I have to be this way\n[00:40.675]You say it's gone cold\n[00:42.341]I say I'll do better\n[00:44.421]But I always seem to disappear again\n[00:47.365]You know I'm like a ghost\n[00:48.908]I see it in your face\n[00:51.152]And it haunts me that I have to be this way\n[00:54.084]You say it's gone cold\n[00:55.619]I say I'll do better\n[00:57.846]But I always seem to disappear again\n[01:00.576]You know I'm like a ghost\n[01:03.137]You know I never meant to cut you off\n[01:06.264]Got phantom feelings I can never stop\n[01:09.599]Strange things to worry 'bout I know\n[01:12.916]But I'm so scared that I'll end up I'll end up I'll end up alone\n[01:17.446]I can't see myself in the mirror\n[01:17.100]\n[01:20.508]Does that mean I'm not really here\n[01:22.949]I'm losing touch with everything I know\n[01:26.182]And I'm so scared that I'll end up I'll end up I'll end up alone\n[01:30.533]You know I'm like a ghost\n[01:30.492]\n[01:32.283]Sometimes I have to fade\n[01:34.409]And it haunts me that I have to be this way\n[01:37.273]You say it's gone cold\n[01:38.979]I say I'll do better\n[01:41.120]But I always seem to disappear again\n[01:43.938]You know I'm like a ghost\n[01:45.614]I see it in your face\n[01:47.756]And it haunts me that I have to be this way\n[01:50.674]You say it's gone cold\n[01:52.285]I say I'll do better\n[01:54.434]But I always seem to disappear again\n[01:57.270]You know I'm like a ghost\n[02:03.849]You know I'm like a ghost\n[01:59.669]\n[02:13.137]I'll be ok\n[02:11.404]\n[02:14.784]I'll be alright I know\n[02:19.791]I'll be ok\n[02:21.471]I'm so scared that I'll end up alone\n[02:21.211]\n[02:37.199]You know I'm like a ghost\n[02:24.112]\n[02:38.914]I see it in your face\n[02:41.193]And it haunts me that I have to be this way\n[02:43.972]You say it's gone cold\n[02:45.640]I say I'll do better\n[02:47.788]But I always seem to disappear again\n[02:50.635]You know I'm like a ghost`;
const TS = `[00:00.00] 作词 : Anders Froen/Jesper Borgen/Tommy Laverdi/Gunnar Greve/Lars Kristian Rosness/Marcus Arnbekk\n[00:01.00] 作曲 : Alan Walker/Anders Froen/Jesper Borgen/Lars Kristian Rosness/Marcus Arnbekk \n[00:10.07]Hello, hello\n[00:11.87]Can you hear me as I scream your name?\n[00:17.52]Hello, hello\n[00:19.47]Do you meet me before I fade away?\n[00:25.37]\n[00:25.54]Is this a place that I call home\n[00:29.41]To find what I've become?\n[00:32.59]Walk along the path unknown\n[00:36.91]We live, we love, we lie\n[00:40.02]\n[00:40.71]Deep in the dark I don't need the light\n[00:44.22]There is a ghost inside me\n[00:47.47]It all belongs to the other side\n[00:51.90]We live, we love, we lie\n[00:55.85]\n[01:25.04]Hello, hello\n[01:26.93]Nice to meet you\n[01:29.91]Voices inside my head\n[01:32.33]Hello, hello\n[01:34.34]I believe you\n[01:37.26]How can I forget?\n[01:39.83]\n[01:40.14]Is this a place that I call home\n[01:43.79]To find what I've become?\n[01:47.42]Walk along the path unknown\n[01:51.74]We live, we love, we lie\n[01:55.04]\n[01:55.68]Deep in the dark I don't need the light\n[01:59.11]There is a ghost inside me\n[02:02.44]It all belongs to the other side\n[02:06.91]We live, we love, we lie\n[02:10.04]\n[02:15.65]We live, we love, we lie\n[02:22.54]We live, we love, we lie`;
const PLAESCREEN = `[00:00.000]作词 : WyvernP\n[00:01.000]作曲 : WyvernP\n[00:25.000]This is the story for one character of misery (翻译: 这是一位悲惨人物的故事)\n[00:30.000]Diffuse out from the old brown tube (翻译: 从老旧的显像管里倾泻而出的)\n[00:32.000]It's the anguish, sad and fury (翻译: 即是沮丧，悲伤和愤怒)\n[00:36.000]My tears are falling down (翻译: 我的眼泪在落下)\n[00:38.000]Can you see my sorrow through the screen? (翻译: 你能透过屏幕看到我的哀愁吗？)\n[00:41.000]I need you now but I couldn't even try (翻译: 我需要你但我连试都试不到)\n[00:43.000]Oh dear, my love trapped inside of my fear (翻译: 呜呼，我的恋情深陷恐惧之中)\n[00:48.000]The data world is breaking down at once (翻译: 数据世界正在立刻崩溃)\n[00:52.000]All those number of the walls are fading away (翻译: 所有数字的幕墙正在消失殆尽)\n[00:59.000]The pieces of the memories are gone (翻译: 记忆的片段已然丢失不见)\n[01:03.000]I'm still alive in empty hive so cry (翻译: 我活于空虚尘世失声痛哭)\n[01:34.000]Oh, the hidden face behind of blurry screen (翻译: 哦，那模糊屏幕中出现的那双脸啊)\n[01:39.000]Now it seems like you forgetting everything from me (翻译: 如今好似要从我身边忘掉我的一切了)\n[01:46.000]Oh, please my dear won't you come back to me (翻译: 亲爱的求你了，您不会回到我身边吗)\n[01:50.000]There's nothing left to say but I'm still here alive (翻译: 我已无话可说，而我仍然健在)\n[01:59.000]This is the story for one character of misery (翻译: 这是一位悲惨人物的故事)\n[02:04.000]Counting down of the farewell to the end (翻译: 终焉之时正在悄然临近)\n[02:07.000]So I said with waving goodbye (翻译: 所以我只得挥手告别)\n[02:10.000]I'm left behind the memories and fall asleep by lullaby (翻译: 我留下回忆，伴着摇篮曲沉睡不醒)`;
const WFL_AVICII = `[00:00.000]作词 : Avicii/Salem Al Fakir/Vincent Pontare/Simon Aldred/Martin Garrix\n[00:01.000]作曲 : Avicii/Salem Al Fakir/Vincent Pontare/Simon Aldred/Martin Garrix\n[00:14.000]Where there's a will, there's a way, kind of beautiful (翻译: 有志者事竟成，这是多么美好)\n[00:18.000]And every night has its day, so magical (翻译: 夜晚伴随着黎明，这是多么神奇)\n[00:22.000]And if there's love in this life, there's no obstacle (翻译: 若世间充满爱，那将不再有阻碍)\n[00:25.000]That can't be defeated (翻译: 爱可以战胜一切)\n[00:29.000]For every tyrant a tear for the vulnerable (翻译: 一滴眼泪即可感化暴君)\n[00:33.000]In every lost soul the bones of a miracle (翻译: 迷失的灵魂都有铮铮傲骨)\n[00:37.000]For every dreamer a dream we're unstoppable (翻译: 心怀梦想，我们势不可挡)\n[00:40.000]With something to believe in (翻译: 只要我们信念尚存)\n[00:44.000] (翻译: 周一我疲惫不堪)\n[00:44.000]Monday left me broken\n[00:47.000]Tuesday I was through with hopin' (翻译: 周二我怀揣希望)\n[00:51.000]Wednesday my empty arms were open (翻译: 周三我张开双臂)\n[00:55.000]Thursday waiting for love, waiting for love (翻译: 周四我等待爱情)\n[01:00.000]Thank the stars it's Friday (翻译: 周五我赞赏群星)\n[01:02.000]I'm burning like a fire gone wild on Saturday (翻译: 周六我如火燎原)\n[01:06.000]Guess I won't be coming to church on Sunday (翻译: 周日我不去礼堂)\n[01:10.000]I'll be waiting for love (翻译: 我会一直等待爱情)\n[01:12.000]Waiting for love to come around (翻译: 等待爱的到来)\n[01:17.000]\n[02:07.000]We are one of a kind, irreplaceable (翻译: 我们每个人都是独一无二，无可替代的)\n[02:10.000]How did I get so blind and so cynical? (翻译: 但为何我会如此盲目，愤世嫉俗)\n[02:14.000]If there's love in this life we're unstoppable (翻译: 若世间充满爱，那我们将无可阻挡)\n[02:18.000]No, we can't be defeated (翻译: 我们不可能会被打败)\n[02:21.000]\n[02:22.000]Monday left me broken (翻译: 周一我疲惫不堪)\n[02:25.000]Tuesday I was through with hopin' (翻译: 周二我怀揣希望)\n[02:29.000]Wednesday my empty arms were open (翻译: 周三我张开双臂)\n[02:32.000]Thursday waiting for love, waiting for love (翻译: 周四我等待爱情)\n[02:37.000]Thank the stars it's Friday (翻译: 周五我赞赏群星)\n[02:40.000]I'm burning like a fire gone wild on Saturday (翻译: 周六我如火燎原)\n[02:44.000]Guess I won't be coming to church on Sunday (翻译: 周日我不去礼堂)\n[02:47.000]I'll be waiting for love (翻译: 我会一直等待爱情)\n[02:50.000]Waiting for love to come around (翻译: 等待爱的到来)`;

const URL = {
    DRMP3: 'https://freetyst.nf.migu.cn/public/product9th/product46/2023/04/1820/2022%E5%B9%B412%E6%9C%8813%E6%97%A516%E7%82%B938%E5%88%86%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E5%8F%91%E7%8E%B0%E9%9F%B3%E4%B9%9050246%E9%A6%96817142/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_128_16_Stero/69995017091204057.mp3?channelid=02&msisdn=43c796c3-1c3f-4842-9fbe-84d0a02b29c4&Tim=1716475261033&Key=a7a8db559b98575e',
    TIRED: 'https://freetyst.nf.migu.cn/public/ringmaker01/n17/2017/05/%E6%97%A0%E6%8D%9F/2017%E5%B9%B405%E6%9C%8817%E6%97%A514%E7%82%B951%E5%88%86%E7%B4%A7%E6%80%A5%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5SONY112%E9%A6%96/flac/Tired-Alan%20Walker.flac?channelid=02&msisdn=555f0408-651a-428a-8b5f-828ca4bde31e&Tim=1716258045798&Key=9474dabf5e5e49f7',
    APTII: 'https://freetyst.nf.migu.cn/public/product9th/product46/2022/12/1510/2019%E5%B9%B412%E6%9C%8825%E6%97%A511%E7%82%B954%E5%88%86%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5SONY15%E9%A6%96168982/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_128_16_Stero/6005973LNFX105830.mp3?channelid=02&msisdn=0a91a141-22a2-4343-a9a7-753d04a55360&Tim=1716264988096&Key=f42ea047c32ea8b5',
}

const wy = 'http://music.163.com/song/media/outer/url?id=';
const notlrc = `[00:00.00] 纯音乐，请欣赏`;
const wypic = 'http://p1.music.126.net/';

const musicList = [
    // Intro (feat. Rook1e)
    {
        name: 'Intro (feat. Rook1e)',
        artist: 'barnes blvd. | Rook1e',
        url: wy + '557584800.mp3',
        pic: wypic + '1cb3zkiL7LY68UGU3KiL5Q==/109951166210611320.jpg',
        lrc: notlrc,
        highlight: 39
    },
    // 星相运轨-The End of Time-
    {
        name: '星相运轨-The End of Time-',
        artist: `EndCat-终猫`,
        url: wy + '1956794669.mp3',
        pic: wypic + 'GO7ZIaI0znI9Ru4BPK1KoA==/109951167561496922.jpg',
        lrc: notlrc,
        highlight: 48
    },
    // 创 / Demiurge
    {
        name: `创 / Demiurge`,
        artist: 'RABPIT',
        url: URL.DRMP3,
        pic: wypic + 'VE_Ns-DSX9RJq8ktsEH8hw==/109951168044629185.jpg',
        lrc: notlrc,
        theme: '#FFCC33',
        highlight: 89
    },
    // S.A.T.E.L.L.I.T.E.
    {
        name: 'S.A.T.E.L.L.I.T.E.',
        artist: 'かめりあ',
        url: wy + '1336689103.mp3',
        pic: wypic + '5yoSxiYtRU9kINBf7LMzew==/109951165777230224.jpg',
        lrc: SATELLITE,
        highlight: 41
    },
    // PRAGMATISM -RESURRECTION-
    {
        name: 'PRAGMATISM -RESURRECTION-',
        artist: 'Laur',
        url: wy + '1907125216.mp3',
        pic: wypic + 'TyhOfIS34c1YLrTshe1YWg==/109951166856274537.jpg',
        lrc: notlrc,
        highlight: 34
    },
    // Rainy Heart
    {
        name: 'Rainy Heart',
        artist: '阿卡姆巫师',
        url: wy + '1343261569.mp3',
        pic: wypic + '6mPYqhp8Gk-EP_DvtOvqZg==/109951163830414347.jpg',
        lrc: notlrc,
        highlight: 94
    },
    // 末日-The End - Theo5970
    {
        name: '末日-The End - Theo5970',
        artist: names.CMG,
        url: wy + '1464843109.mp3',
        pic: wypic + pic.DL,
        lrc: notlrc,
        highlight: 44
    },
    // Tales of Dragonia
    {
        name: 'Tales of Dragonia',
        artist: 'BrunuhVille',
        url: wy + '434659207.mp3',
        pic: wypic + 'JNpu6XHgFBvlPEs9LPNejA==/109951164258416922.jpg',
        lrc: notlrc,
        highlight: 120 + 48
    },
    // Comptine D'un Autre Été, L'après-Midi
    {
        name: 'Comptine D\'un Autre Été, L\'après-Midi',
        artist: 'Yann Tiersen',
        url: wy + '26635189.mp3',
        pic: wypic + 'iEbah2l5A8vXnW3sfvaNqA==/5511851790125542.jpg',
        lrc: notlrc,
        highlight: 48
    },
    // Eutopia
    {
        name: 'Eutopia',
        artist: 'Las Lau',
        url: wy + '2022357170.mp3',
        pic: wypic + 'V8KW2DQagVHeKULlSVRjOg==/109951168308986708.jpg',
        lrc: notlrc,
        highlight: 120 + 10
    },
    // WATER(Feat.Miku)
    {
        name: 'WATER(Feat.Miku)',
        artist: 'A-39,沙包P,初音ミク',
        url: wy + '1404469236.mp3',
        pic: wypic + 'PSAXSOdCwFL8WLjG4o3XKg==/109951164496021221.jpg',
        lrc: WATER,
        highlight: 69
    },
    // 太阳雨
    {
        name: '太阳雨',
        artist: '张晓贞',
        url: wy + '1400563120.mp3',
        pic: wypic + pic.RS2,
        lrc: notlrc,
        highlight: 54
    },
    // Oh John (Reinterpretation)
    {
        name: 'Oh John' + names.R,
        artist: names.H,
        url: wy + '1427158409.mp3',
        pic: wypic + pic.FC5H,
        lrc: notlrc,
        highlight: 97
    },
    // We Will Rise Again (Reinterpretation)
    {
        name: 'We Will Rise Again' + names.R,
        artist: names.H,
        url: wy + '1427160415.mp3',
        pic: wypic + pic.FC5H,
        lrc: notlrc,
        highlight: 86
    },
    // Let the Water Wash Away Your Sins (Reinterpretation)
    {
        name: 'Let the Water Wash Away Your Sins' + names.R,
        artist: names.H,
        url: wy + '1427158410.mp3',
        pic: wypic + pic.FC5H,
        lrc: notlrc,
        highlight: 115
    },
    // Now He's Our Father (Reinterpretation)
    {
        name: 'Now He\'s Our Father' + names.R,
        artist: names.H,
        url: wy + '1427160420.mp3',
        pic: wypic + pic.FC5H,
        lrc: NHOF_R,
        highlight: 94
    },
    // Oh the Bliss (Reinterpretation)
    {
        name: 'Oh the Bliss' + names.R,
        artist: names.H,
        url: wy + '1427160416.mp3',
        pic: wypic + pic.FC5H,
        lrc: notlrc,
        highlight: 90
    },
    // Help Me Faith (Reinterpretation)
    {
        name: 'Help Me Faith' + names.R,
        artist: names.H,
        url: wy + '1427160421.mp3',
        pic: wypic + pic.FC5H,
        lrc: notlrc,
        highlight: 16
    },
    // Build a Castle (Reinterpretation)
    {
        name: 'Build a Castle' + names.R,
        artist: names.H,
        url: wy + '1427160417.mp3',
        pic: wypic + pic.FC5H,
        lrc: BAC_R,
        highlight: 219
    },
    // Keep Your Rifle by Your Side (Reinterpretation)
    {
        name: 'Keep Your Rifle by Your Side' + names.R,
        artist: names.H,
        url: wy + '1427160419.mp3',
        pic: wypic + pic.FC5H,
        lrc: notlrc,
        highlight: 105
    },
    // Now That This Old World Is Ending
    {
        name: 'Now That This Old World Is Ending',
        artist: 'Dan Romer',
        url: wy + '554191327.mp3',
        pic: wypic + pic.FC5d,
        lrc: notlrc,
        highlight: 66
    },
    // When the Morning Light Shines In
    {
        name: 'When the Morning Light Shines In',
        artist: 'Dan Romer',
        url: wy + '554191338.mp3',
        pic: wypic + pic.FC5d,
        lrc: notlrc,
        highlight: 137
    },
    // Safe and Sound
    {
        name: 'Safe and Sound',
        artist: 'Dan Romer',
        url: wy + '554191346.mp3',
        pic: wypic + pic.FC5d,
        lrc: notlrc,
        highlight: 50
    },
    // Help Me Faith
    {
        name: 'Help Me Faith',
        artist: 'Dan Romer | Madi Diaz',
        url: wy + '1428010471.mp3',
        pic: wypic + pic.FC5dd,
        lrc: HMF,
        highlight: 42
    },
    // We Will Rise Again
    {
        name: 'We Will Rise Again',
        artist: 'Dan Romer | Gregory And The Hawk',
        url: wy + '1428010474.mp3',
        pic: wypic + pic.FC5dd,
        lrc: WWRA,
        highlight: 54
    },
    // Far Cry 3
    {
        name: 'Far Cry 3',
        artist: 'Brian Tyler',
        url: wy + '28188762.mp3',
        pic: wypic + pic.FC3,
        lrc: notlrc,
        highlight: 93
    },
    // Further
    {
        name: 'Further',
        artist: 'Brian Tyler | Serena McKinney',
        url: wy + '28188776.mp3',
        pic: wypic + pic.FC3,
        lrc: notlrc,
        highlight: 61
    },
    // Rook Island
    {
        name: 'Rook Island',
        artist: 'Brian Tyler',
        url: wy + '28188767.mp3',
        pic: wypic + pic.FC3,
        lrc: notlrc,
        highlight: 71
    },
    // stellar
    {
        name: 'stellar',
        artist: '.diedlonely | Enouement',
        url: wy + '2053895724.mp3',
        pic: wypic + 'qxOf5KxLzvp_1lB9DjXuxg==/109951170048177909.jpg',
        lrc: notlrc,
        highlight: 73
    },
    // snowfall(Slowed + names.Reverb)
    {
        name: 'snowfall (Slowed + names.Reverb)',
        artist: 'Øneheart | reidenshi',
        url: wy + '1930169224.mp3',
        pic: wypic + 'ZcuNfL8Sot7a2rq2ATSFvw==/109951166751555252.jpg',
        lrc: notlrc,
        highlight: 24
    },
    // Daylight
    {
        name: 'Daylight',
        artist: 'Seredris',
        url: wy + '1372188635.mp3',
        pic: wypic + 'OjiWGpbpC80EbQgkxEayiA==/109951164152228527.jpg',
        lrc: notlrc,
        highlight: 81
    },
    // Fades Away
    {
        name: 'Fades Away',
        artist: A + ' | Noonie Bao',
        url: wy + '1370108699.mp3',
        pic: wypic + pic.TIM,
        lrc: FA_AVICII,
        highlight: 127
    },
    // Force
    {
        name: 'Force',
        artist: names.AW,
        url: wy + '31311107.mp3',
        pic: wypic + 'C8WtOUxN4NMWFlTV3GmJcg==/109951169023366938.jpg',
        lrc: notlrc,
        highlight: 18
    },
    // 50rry (Gamers Mix)
    {
        name: '50rry (Gamers Mix)',
        artist: names.AW + ' | ISÁK',
        url: 'https://freetyst.nf.migu.cn/public/product9th/product46/2022/08/1022/2022%E5%B9%B407%E6%9C%8828%E6%97%A517%E7%82%B909%E5%88%86%E7%B4%A7%E6%80%A5%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5SONY1%E9%A6%96214712/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_128_16_Stero/6005973TFHM225323.mp3?channelid=02&msisdn=3ae3c580-bbc6-4e70-803a-820538c5a3a6&Tim=1716364761027&Key=72cbcb5b1b8eed27',
        pic: wypic + '9YziC20_9BQ0Rd5fUq4jiw==/109951165717603232.jpg',
        lrc: RRY50_GM,
        theme: '#FFCC33',
        highlight: 99
    },
    // Ghost
    {
        name: 'Ghost',
        artist: 'Au/Ra | Alan Walker',
        url: 'https://freetyst.nf.migu.cn/public/product9th/product45/2022/03/1714/2019%E5%B9%B411%E6%9C%8807%E6%97%A511%E7%82%B946%E5%88%86%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5SONY4%E9%A6%96546595/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_128_16_Stero/6005971JTQC142139.mp3?channelid=02&msisdn=92c4dccf-afd1-4d8b-b115-b0c7a24902dd&Tim=1716259973838&Key=36ea23ff25536397',
        pic: wypic + 'gizs68-39zSDknlP8uqNzw==/109951164473556462.jpg',
        lrc: GHOST,
        theme: '#FFCC33',
        highlight: 145
    },
    // The Spectre
    {
        name: 'The Spectre',
        artist: names.AW,
        url: 'https://freetyst.nf.migu.cn/public/product9th/product44/2021/08/0307/2019%E5%B9%B410%E6%9C%8821%E6%97%A520%E7%82%B914%E5%88%86%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5SONY1%E9%A6%96984242/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_128_16_Stero/6005971JPC4070851.mp3?channelid=02&msisdn=6f8501d7-f0b3-4fc3-9283-d94c751d4585&Tim=1716252320460&Key=913a316c3f359b1d',
        pic: wypic + 'P6XMbCPENqlMsvPDEGIQxg==/109951165982513700.jpg',
        lrc: TS,
        theme: '#FFCC33',
        highlight: 52
    },
    // Rising Tide
    {
        name: 'Rising Tide',
        artist: 'Jack Wall',
        url: wy + '1491419467.mp3',
        pic: wypic + 'KiuNiPCAwQr7AjCS61pu-A==/109951165426474519.jpg',
        lrc: notlrc,
        highlight: 19
    },
    // 摇曳
    {
        name: '摇曳',
        artist: 'Zeta',
        url: wy + '551338278.mp3',
        pic: wypic + 'tS0C_tayuibzXu5TwzFw5Q==/109951163240402889.jpg',
        lrc: notlrc,
        highlight: 50
    },
    // 沉睡花园(Remix)
    {
        name: '沉睡花园(Remix)',
        artist: 'HOW',
        url: wy + '2007861182.mp3',
        pic: wypic + 'PwYUKtow3_YBxRB3ylrlow==/109951166273007147.jpg',
        lrc: notlrc,
        highlight: 35
    },
    // 斯坦威(Remix)
    {
        name: '斯坦威(Remix)',
        artist: 'HOW',
        url: wy + '2007862283.mp3',
        pic: wypic + 'PwYUKtow3_YBxRB3ylrlow==/109951166273007147.jpg',
        lrc: notlrc,
        highlight: 36
    },
    // A New Home
    {
        name: 'A New Home ' + names.AO_ME,
        artist: names.Metro,
        url: wy + '1372954187.mp3',
        pic: wypic + pic.ME,
        lrc: notlrc,
        highlight: 19
    },
    // Race Against Fate (feat. Alexey Omelchuk)
    {
        name: 'Race Against Fate ' + names.AO_ME,
        artist: names.Metro,
        url: wy + '1372953110.mp3',
        pic: wypic + pic.ME,
        lrc: notlrc,
        highlight: 108
    },
    // Dawn of Hope (feat. Alexey Omelchuk)
    {
        name: 'Dawn of Hope ' + names.AO_ME,
        artist: names.Metro,
        url: wy + '1372953111.mp3',
        pic: wypic + pic.ME,
        lrc: notlrc,
        highlight: 112
    },
    // Overture (feat. Alexey Omelchuk)
    {
        name: 'Overture ' + names.AO_ME,
        artist: names.Metro,
        url: wy + '1372953092.mp3',
        pic: wypic + pic.ME,
        lrc: notlrc,
    },
    // One More Step
    {
        name: 'One More Step',
        artist: names.Metro,
        url: wy + '1420869090.mp3',
        pic: wypic + pic.ME_SSS,
        lrc: notlrc,
        highlight: 8
    },
    // The Price of Silence
    {
        name: 'The Price of Silence',
        artist: names.Metro,
        url: wy + '1420859938.mp3',
        pic: wypic + pic.ME_SSS,
        lrc: notlrc,
        highlight: 135
    },
    // Sky
    {
        name: 'Sky',
        artist: 'James Portland',
        url: wy + '574251077.mp3',
        pic: wypic + 'dcZ05V8OSCY-D9kRisbSbQ==/109951163363406699.jpg',
        lrc: notlrc,
        highlight: 46
    },
    // 青丘
    {
        name: '青丘',
        artist: 'BLACK 0',
        url: wy + '2012438447.mp3',
        pic: wypic + 'f14M27QZTGCf4wPQxJ0ekQ==/109951168213826091.jpg',
        lrc: notlrc,
        highlight: 42
    },
    // Another Me
    {
        name: 'Another Me',
        artist: 'Neutral Moon',
        url: wy + '1440867211.mp3',
        pic: wypic + '3122_vkBacExzh4eYzeBmg==/109951164908821988.jpg',
        lrc: notlrc,
        highlight: 158
    },
    // Palescreen (feat. Madol)
    {
        name: 'Palescreen (feat. Madol)',
        artist: 'WyvernP | Madol',
        url: wy + '2000963349.mp3',
        pic: wypic + '10maQ2sNMFi-wm-LdluhXg==/109951168084142662.jpg',
        lrc: PLAESCREEN,
        highlight: 71
    },
    // Protoflicker
    {
        name: 'Protoflicker',
        artist: 'Silentroom',
        url: wy + '1433290493.mp3',
        pic: wypic + 'KbvD_KJNQqCViGS2TdswLg==/109951166035264533.jpg',
        lrc: notlrc,
        highlight: 96
    },
    // Antithese (反命题)
    {
        name: 'Antithese',
        artist: 'Blacklolita',
        url: wy + '2159260860.mp3',
        pic: wypic + '8Sr6-ZwWi6TMM8AdydGa9w==/109951170074811357.jpg',
        lrc: notlrc,
        highlight: 24
    },
    // Waiting For Love
    {
        name: 'Waiting For Love',
        artist: A,
        url: wy + '1870755113.mp3',
        pic: wypic + pic.LALYWR,
        lrc: WFL_AVICII,
        highlight: 112
    },
    // Sunshine
    {
        name: 'Sunshine',
        artist: 'David Guetta | ' + A,
        url: wy + '29709093.mp3',
        pic: wypic + 'kIqddHKlmyXT5mSvTmt6dg==/109951166202805627.jpg',
        lrc: notlrc,
        theme: '#FFCC33',
        highlight: 131
    },
    // 战殇-The War
    {
        name: '战殇-The War',
        artist: names.CMG,
        url: wy + '1464845040.mp3',
        pic: wypic + pic.DL,
        lrc: notlrc,
        highlight: 23
    },
    // 海洋-The Ocean
    {
        name: '海洋-The Ocean',
        artist: names.CMG,
        url: wy + '1464841600.mp3',
        pic: wypic + pic.DL,
        lrc: notlrc,
        highlight: 37
    },
    // 青石巷-The Alley
    {
        name: '青石巷-The Alley',
        artist: names.CMG,
        url: wy + '1464843108.mp3',
        pic: wypic + pic.DL,
        lrc: notlrc,
        highlight: 64
    },
    // 三周年-The 3rd Anniversary
    {
        name: '三周年-The 3rd Anniversary',
        artist: names.CMG,
        url: wy + '1464843140.mp3',
        pic: wypic + pic.DL,
        lrc: notlrc,
        highlight: 90
    },
    // 丑小鸭-The Ugly Duckling
    {
        name: '丑小鸭-The Ugly Duckling',
        artist: names.CMG,
        url: wy + '1464841552.mp3',
        pic: wypic + pic.DL,
        lrc: notlrc,
        highlight: 73
    },
    // 游乐园-The Amusement Park
    {
        name: '游乐园-The Amusement Park',
        artist: names.CMG,
        url: wy + '1464842011.mp3',
        pic: wypic + pic.DL,
        lrc: notlrc,
        highlight: 60
    },
    // 天空之梦-Dream of Sky
    {
        name: '天空之梦-Dream of Sky',
        artist: names.CMG,
        url: wy + '1464841854.mp3',
        pic: wypic + pic.DL,
        lrc: notlrc,
        highlight: 60
    },
    // FATE
    {
        name: 'FATE',
        artist: names.CMG,
        url: wy + '1352916948.mp3',
        pic: wypic + pic.RS2,
        lrc: notlrc,
        highlight: 30
    },
    // 彩虹山
    {
        name: '彩虹山',
        artist: names.CMG,
        url: wy + '1400563128.mp3',
        pic: wypic + pic.RS2,
        lrc: notlrc,
        highlight: 60
    },
    // The Real Meat
    {
        name: 'The Real Meat',
        artist: names.Darkd,
        url: wy + '1421651838.mp3',
        pic: wypic + pic.DD4,
        lrc: notlrc,
        highlight: 39
    },
    // Repercussions
    {
        name: 'Repercussions',
        artist: names.Darkd,
        url: wy + '1421651837.mp3',
        pic: wypic + pic.DD4,
        lrc: notlrc,
        highlight: 57
    },
    // Joy Kill
    {
        name: 'Joy Kill',
        artist: names.Darkd,
        url: wy + '1421651835.mp3',
        pic: wypic + pic.DD4,
        lrc: notlrc,
        highlight: 88
    },
    // The Golden Rule
    {
        name: 'The Golden Rule',
        artist: names.Darkd,
        url: wy + '1352576639.mp3',
        pic: wypic + pic.DD1_3,
        lrc: lrc.TGR,
        highlight: 58
    },
    // Mind Your Manors
    {
        name: 'Mind Your Manors',
        artist: names.Darkd,
        url: wy + '1352576640.mp3',
        pic: wypic + pic.DD1_3,
        lrc: lrc.MYM,
        highlight: 30
    },
    // Memories
    {
        name: 'Memories',
        artist: 'Sappheiros',
        url: wy + '407002778.mp3',
        pic: wypic + 'MBbK_uyZEq4hGiDAEaoXBA==/109951164933320477.jpg',
        lrc: notlrc,
        highlight: 63
    },
    // Elixir
    {
        name: 'Elixir',
        artist: 'Lime | Kankitsu',
        url: wy + '2018445973.mp3',
        pic: wypic + pic.ELIXIR,
        lrc: notlrc,
        highlight: 30
    },
    // Rain
    {
        name: 'Rain',
        artist: 'Brian Crain',
        url: wy + '1091055.mp3',
        pic: wypic + pic.RAIN,
        lrc: notlrc,
    },
    // 雨夜
    {
        name: '雨夜',
        artist: '四季音色',
        url: wy + '410181618.mp3',
        pic: wypic + 'hWiypXV3Gj0oMLxxkydofQ==/18365142719272422.jpg',
        lrc: notlrc,
        highlight: 32
    },
    // Beyond The Timeline
    {
        name: 'Beyond The Timeline',
        artist: 'Plum - Melodic Artist',
        url: wy + '1922395111.mp3',
        pic: wypic + 'HVeWYaPR7FB8FrX_e-eJoA==/109951167077881007.jpg',
        lrc: notlrc,
        highlight: 37
    },
    // Luminescence
    {
        name: 'Luminescence',
        artist: '米虾Fomiki | 初云CLoudie | 卉HUI-Works',
        url: wy + '1944086441.mp3',
        pic: wypic + 'O3cbV21s7sArn9bDiw3Q6Q==/109951167372690150.jpg',
        lrc: notlrc,
        highlight: 60
    },
    // Fractured Angel
    {
        name: 'Fractured Angel',
        artist: 'DJ Raisei',
        url: wy + '2097198105.mp3',
        pic: wypic + '7izFwymd_tXMEuqd18sc0w==/109951169036144331.jpg',
        lrc: lrc.FA_PHI,
        highlight: 160
    },
    // Round of Fairy Hill
    {
        name: 'Round of Fairy Hill',
        artist: 'Plum - Melodic Artist',
        url: wy + '1922395688.mp3',
        pic: wypic + 'HVeWYaPR7FB8FrX_e-eJoA==/109951167077881007.jpg',
        lrc: notlrc,
    },
    // cryout
    {
        name: 'cryout',
        artist: 'Ju_E',
        url: wy + '2002948634.mp3',
        pic: wypic + 'J7BHAOMrAFo4Y1vZWU8tfg==/109951168104694134.jpg',
        lrc: notlrc,
        highlight: 57
    },
    // 용서 (原谅)
    {
        name: '용서',
        artist: 'Theo5970',
        url: wy + '2602755487.mp3',
        pic: wypic + 'qDZ5hIRbyVi7a_YTUzbc9A==/109951169727552382.jpg',
        lrc: notlrc,
        highlight: 137
    },
    // Inside the Wall
    {
        name: 'Inside the Wall',
        artist: names.YVDC,
        url: wy + '2007034411.mp3',
        pic: wypic + pic.Stray,
        lrc: notlrc,
    },
    // Follow the Light
    {
        name: 'Follow the Light',
        artist: names.YVDC,
        url: wy + '2007033623.mp3',
        pic: wypic + pic.Stray,
        lrc: notlrc,
    },
    // Intruder
    {
        name: 'Intruder',
        artist: names.YVDC,
        url: wy + '2007033621.mp3',
        pic: wypic + pic.Stray,
        lrc: notlrc,
    },
    // The Notebooks
    {
        name: 'The Notebooks',
        artist: names.YVDC,
        url: wy + '2007033620.mp3',
        pic: wypic + pic.Stray,
        lrc: notlrc,
    },
    // Ant Village
    {
        name: 'Ant Village',
        artist: names.YVDC,
        url: wy + '2007034422.mp3',
        pic: wypic + pic.Stray,
        lrc: notlrc,
    },
    // RIPPER
    {
        name: 'RIPPER',
        artist: 'Fridway',
        url: wy + '1356691771.mp3',
        pic: wypic + '3gHrXq0K2dpiacWRktovTw==/109951163976245019.jpg',
        lrc: notlrc,
        highlight: 106
    },
    // Clock Paradox (时钟悖论)
    {
        name: 'Clock Paradox',
        artist: 'WyvernP',
        url: wy + '1945128093.mp3',
        pic: wypic + 'f8Q0IpY-FuW9tMZl7s5uZw==/109951168747938080.jpg',
        lrc: notlrc,
        highlight: 112
    },
    // Chronologika
    {
        name: 'Chronologika',
        artist: 'Hundotte',
        url: wy + '1881137637.mp3',
        pic: wypic + 'T_thf8gT8sG4B01HtTsUsg==/109951166453423631.jpg',
        lrc: notlrc,
        highlight: 139
    },
    // Shapez.io
    {
        name: 'Shapez.io Soundtrack',
        artist: 'Peppsen',
        url: 'https://shapez.io/v/b07e04e7/res/sounds/music/theme-short.mp3',
        pic: wypic + 'n2D2CRazdfBkLnhM0PnVcw==/109951165108795675.jpg',
        lrc: notlrc,
    },
    // I'll Keep Coming
    {
        name: 'I\'ll Keep Coming',
        artist: 'Low Roar',
        url: 'https://d1.music.126.net/dmusic/2487/d845/02b5/af1136ffe080403595dc1cba7ac1ce10.flac',
        pic: wypic + pic.DIE,
        theme: '#CC0033',
        highlight: 189,
        lrc: `[00:00.000]作曲 : Ryan Joseph Karazija/Andrew Scheps\n[00:39.000]Faintly I'll go (翻译: 我轻轻的去)\n[00:53.000]To take this head on (翻译: 坚持下去)\n[01:05.000]Soon I'll come around (翻译: 很快我就会到来)\n[01:12.000]Lost and never found (翻译: 失去和再也找不到的)\n[01:19.000]Waiting for my words (翻译: 等待我的承诺)\n[01:25.000]Seen but never heard (翻译: 看到却不曾听说过的)\n[01:32.000]Buried underground (翻译: 深埋在地下)\n[01:39.000]But I'll keep coming (翻译: 但我会继续前进)\n[02:09.000]Wipe those tears off (翻译: 擦掉那些眼泪)\n[02:22.000]And make your heart proud (翻译: 让你的心感到骄傲)\n[02:34.000]Soon I'll come around (翻译: 很快我就会到来)\n[02:41.000]Lost and never found (翻译: 失去和再也找不到的)\n[02:48.000]Waiting for my words (翻译: 等待我的承诺)\n[02:54.000]Seen but never heard (翻译: 看到却不曾听说过的)\n[03:02.000]Buried underground (翻译: 深埋在地下)\n[03:08.000]But I'll keep coming (翻译: 但我会继续前进)\n[03:22.000]I'll keep coming (翻译: 我会继续前进)\n[03:36.000]I'll keep coming (翻译: 我会继续前进)\n[03:49.000]I'll keep coming (翻译: 我会继续前进)\n[04:03.000]I'll keep coming (翻译: 我会继续前进)\n[04:17.000]I'll keep coming (翻译: 我会继续前进)\n[04:31.000]I'll keep coming (翻译: 我会继续前进)\n[04:45.000]I'll keep coming (翻译: 我会继续前进)\n[04:58.000]I'll keep coming (翻译: 我会继续前进)\n[05:12.000]I'll keep coming (翻译: 我会继续前进)\n[05:26.000]I'll keep coming (翻译: 我会继续前进)`,
    },
    // Memories
    {
        name: 'Memories',
        artist: 'Gabriel Brosteanu',
        url: wy + '1431465265.mp3',
        pic: wypic + 'MdvSlWmsJ5mxUy_eMjD99g==/109951164809952122.jpg',
        lrc: notlrc,
        highlight: 74
    },
    // The End (TDX特仑苏 Remix)
    {
        name: 'The End (TDX特仑苏 Remix)',
        artist: 'TDX特仑苏',
        url: wy + '1439741040.mp3',
        pic: wypic + 'BIux0xeYvtdFmLA-mYkz4g==/109951164895040325.jpg',
        lrc: notlrc,
        highlight: 55
    },
    // Crysis 3 - New York Memories
    {
        name: 'Crysis 3 - New York Memories',
        artist: 'Borislav Slavov | Peter Antovszki',
        url: wy + '26211091.mp3',
        pic: wypic + '5PLL_oUHJvP34FSs0P2VtQ==/18665309395003237.jpg',
        lrc: notlrc,
        highlight: 30
    },
    // A Brotherhood of Heroes
    {
        name: 'A Brotherhood of Heroes',
        artist: 'Wilbert Roget II',
        url: wy + '518894227.mp3',
        pic: wypic + 'bt-Bsf9joVtwLQDlFTwXCg==/109951165510541208.jpg',
        lrc: notlrc,
        highlight: 62
    },
    // Inferno
    {
        name: 'Inferno',
        artist: 'Jack Wall | Big Giant Circles',
        url: wy + '1331056352.mp3',
        pic: wypic + 'BsLeg1r2ZS6o6-pz5iL5rA==/109951168680375653.jpg',
        lrc: notlrc,
        highlight: 72
    },
    // Modern Warfare II
    {
        name: 'Modern Warfare II',
        artist: 'Sarah Schachner',
        url: wy + '1998254949.mp3',
        pic: wypic + 'IIfUEOK9SbuvBf6z44MCxw==/109951168058826038.jpg',
        lrc: notlrc,
        highlight: 54
    },
    // Looming Dread
    {
        name: 'Looming Dread',
        artist: '中島健太郎',
        url: wy + '1349914819.mp3',
        pic: wypic + 'omgEAkmKUsMwqoEQ8NH1XA==/109951169414455053.jpg',
        lrc: notlrc,
        highlight: 23
    },
    // I Really Want to Stay at Your House
    {
        name: 'I Really Want to Stay at Your House',
        artist: 'Rosa Walton | Hallie Coggins',
        url: wy + '1496089152.mp3',
        pic: wypic + 'ETNtwbJ4s1oCNXAyr_YEYQ==/109951170504647739.jpg',
        lrc: `[00:00.000]作词 : Rosa Walton\n[00:00.000]作曲 : Rosa Walton\n[00:00.000]编曲 : Rosa Walton\n[00:01.000]I couldn't wait for you to come clear the cupboards (翻译: 我等不及你来清理这橱柜)\n[00:09.000]But now you're going to leave with nothing but a sign (翻译: 但如今你离去 只留下一处标记)\n[00:16.000]Another evening I'll be sitting reading in between your lines (翻译: 又一个夜晚 我静坐品味你言外之意)\n[00:23.000]Because I miss you all the time (翻译: 因为我却时刻思念着你)\n[00:27.000]\n[00:30.000]So, get away (翻译: 所以 那就离开吧)\n[00:32.000]Another way to feel what you didn't want yourself to know (翻译: 只为让自己不愿了解真相)\n[00:37.000]And let yourself go (翻译: 放任你自己走吧)\n[00:39.000]You know you didn't lose your self-control (翻译: 你深知 你并未失去自制力)\n[00:43.000]let's start at the rainbow (翻译: 让我们于彩虹之上开始)\n[00:46.000]Turn away (翻译: 拒绝内心纷扰)\n[00:47.000]Another way to be where you didn't want yourself to go (翻译: 另一种方式前往你不愿涉足半步的天地)\n[00:52.000]Let yourself go (翻译: 放任你自己走吧)\n[00:54.000]Is that a compromise (翻译: 这是否等于妥协了呢)\n[00:59.000]\n[01:00.000]So what do you wanna do, what's your point-of-view (翻译: 所以你想做什么呢 说出你的观点)\n[01:04.000]There's a party soon do you wanna go (翻译: 这里有场狂欢派对 你是否想去呢)\n[01:08.000]A handshake with you, what's your point-of-view (翻译: 同你握手 询问你的看法)\n[01:11.000]I'm on top of you, I don't wanna go (翻译: 我全心倾覆于你 不愿离去)\n[01:15.000]'Cause I really wanna stay at your house (翻译: 因为我真的想要呆在你家里)\n[01:18.000]And I hope this works out (翻译: 多希望能一直呆着)\n[01:22.000]But you know how much you broke me apart (翻译: 但你知道 你令我内心多么分崩离析)\n[01:26.000]I'm done with you, I'm ignoring you (翻译: 我已经受够你了 我要将你忽视)\n[01:29.000]I don't wanna know (翻译: 我不想再了解了)\n[01:31.000]\n[01:41.000]And I'm aware that you were lying in the gutter (翻译: 我意识到 你深陷于恶劣环境中)\n[01:48.000]'Cause I did everything to be there by your side-ide (翻译: 因为我已竭尽全力 只为陪伴你身旁)\n[01:55.000]So when you tell me I'm the reason I just can't believe the lies (翻译: 所以当你告诉我 我就是其中的原因时 对于这些谎言 我简直难以置信)\n[02:03.000]And why do I so want to call you (翻译: 为何我这么想给你打电话)\n[02:07.000]\n[02:09.000]So what do you wanna do, what's your point-of-view (翻译: 所以你想做什么呢 说出你的观点)\n[02:13.000]There's a party soon do you wanna go (翻译: 这里有场狂欢派对 你是否想去呢)\n[02:17.000]A handshake with you, what's your point-of-view (翻译: 同你握手 询问你的看法)\n[02:21.000]I'm on top of you, I don't wanna go (翻译: 我全心倾覆于你 不愿离去)\n[02:24.000]'Cause I really wanna stay at your house (翻译: 因为我真的想要呆在你家里)\n[02:28.000]And I hope this works out (翻译: 我希望这一切都会成功)\n[02:31.000]But you know how much you broke me apart (翻译: 但你知道 你令我内心多么分崩离析)\n[02:35.000]I'm done with you, I'm ignoring you (翻译: 我已经受够你了 我要将你忽视)\n[02:38.000]I don't wanna know (翻译: 我不想再了解了)\n[02:41.000]\n[02:42.000]You\n[02:47.000]Oh-oh-oh\n[02:51.000]I don't know why I'm no-one (翻译: 我不知为何 自己的内心犹如沉溺水下)\n[02:54.000]\n[02:55.000]So, get away (翻译: 所以 那就离开吧)\n[02:58.000]Another way to feel what you didn't want yourself to know (翻译: 只为让自己不愿了解真相)\n[03:03.000]And let yourself go (翻译: 放任你自己走吧)\n[03:04.000]You know you didn't lose your self-control (翻译: 你深知 你并未失去自制力)\n[03:09.000]Let's start at the rainbow (翻译: 让我们于彩虹之上开始)\n[03:12.000]Turn away (翻译: 拒绝内心纷扰)\n[03:13.000]Another way to be where you didn't want yourself to go (翻译: 只为让自己不愿继续前行)\n[03:18.000]Let yourself go (翻译: 放任你自己走吧)\n[03:19.000]Is that a compromise (翻译: 这是否等于妥协了呢)\n[03:24.000]\n[03:29.000]So what do you wanna do, what's your point-of-view (翻译: 所以你想做什么呢 说出你的观点)\n[03:34.000]There's a party soon do you wanna go (翻译: 这里有场狂欢派对 你是否想去呢)\n[03:37.000]A handshake with you, what's your point-of-view (翻译: 同你握手 询问你的看法)\n[03:41.000]I'm on top of you, I don't wanna go (翻译: 我全心倾覆于你 不愿离去)\n[03:45.000]'Cause I really wanna stay at your house (翻译: 因为我真的想要呆在你家里)\n[03:48.000]and I hope this works out (翻译: 我希望这一切都会成功)\n[03:52.000]But you know how much you broke me apart (翻译: 但你知道 你令我内心多么分崩离析)\n[03:56.000]I'm done with you, I'm ignoring you (翻译: 我已经受够你了 我要将你忽视)\n[03:59.000]I don't wanna know (翻译: 我不想再了解了)`,
        highlight: 30
    },
    // 驟雨の狭間
    {
        name: '驟雨の狭間',
        artist: 'Silentroom',
        url: wy + '1424487649.mp3',
        pic: wypic + 'oeDtLsAoKNXEjv2iAAXeaQ==/109951166035215430.jpg',
        lrc: notlrc,
        highlight: 23
    },
    // HYPER MEMORIES
    {
        name: 'HYPER MEMORIES',
        artist: 'Wooden | Salty Salt',
        url: wy + '2040666539.mp3',
        pic: wypic + 'gTnjP5BwUKI-xDvjpIRwPA==/109951168555565840.jpg',
        lrc: notlrc,
        highlight: 38
    },
    // Agnostic
    {
        name: 'Agnostic',
        artist: '卉HUI-Works | AiSS | AiSS_初号机',
        url: wy + '1805342105.mp3',
        pic: wypic + 'COgh-IzDllqxpBhLNciJCw==/109951165549639954.jpg',
        lrc: notlrc,
        highlight: 47
    },
    // Bye
    {
        name: 'Bye',
        artist: 'DingerBox',
        url: wy + '2123751604.mp3',
        pic: wypic + 'FEHivpvMysFKMxLNoP_jlQ==/109951169310485931.jpg',
        lrc: notlrc,
        highlight: 37
    },
    // The Chariot ~REVIIVAL~
    {
        name: 'The Chariot ~REVIIVAL~',
        artist: 'Attoclef',
        url: wy + '2042303390.mp3',
        pic: wypic + 'xaQXNrC7L-JPi9GePsUiBw==/109951168569510551.jpg',
        lrc: notlrc,
        highlight: 61
    },
    // Dance with Silence
    {
        name: 'Dance with Silence',
        artist: 'かめりあ',
        url: wy + '1482677424.mp3',
        pic: wypic + 'ZEnZiv-WTPnOq7-W0SeSYQ==/109951165777227600.jpg',
        lrc: notlrc,
        highlight: 53
    },
    // The Everlasting Rain
    {
        name: 'The Everlasting Rain',
        artist: 'AiSS',
        url: wy + '2069929537.mp3',
        pic: wypic + 'C54MEj2IxbknD9BxzuDAoQ==/109951168805952670.jpg',
        lrc: notlrc,
        highlight: 137
    },
    // Lapis
    {
        name: 'Lapis',
        artist: 'SHIKI',
        url: wy + '22792646.mp3',
        pic: wypic + 'fOv1icutWVi70oJMZarC0Q==/109951166316308520.jpg',
        lrc: notlrc,
        highlight: 53
    },
    // Nhelv
    {
        name: 'Nhelv',
        artist: 'Silentroom',
        url: wy + '2079867335.mp3',
        pic: wypic + 'iYZ1wuFdipQrUYgnU6LM4w==/109951163970008764.jpg',
        lrc: notlrc,
        highlight: 45
    },
    // the end of this world, and the girl who crossed the moon's oceans.
    {
        name: 'the end of this world, and the girl who crossed the moon\'s oceans.',
        artist: 'Frums',
        url: wy + '528271201.mp3',
        pic: wypic + '7IjZ03qZK8oeHCes7py3Lw==/109951163100730449.jpg',
        lrc: notlrc,
        highlight: 41
    },
    // Aegleseeker
    {
        name: 'Aegleseeker',
        artist: 'Silentroom | Frums',
        url: wy + '1847741361.mp3',
        pic: wypic + 'eZVZ8fkPw6sflERIjrTApA==/109951166027400520.jpg',
        lrc: notlrc,
        highlight: 17
    },
    // Nisemono
    {
        name: 'Nisemono',
        artist: 'Frums',
        url: wy + '1461712229.mp3',
        pic: wypic + 'fTqQgjoxUO5cmZA9J0vQMQ==/109951165126262727.jpg',
        lrc: notlrc,
        highlight: 89
    },
    // We Want To Run
    {
        name: 'We Want To Run',
        artist: 'Frums',
        url: wy + '528271233.mp3',
        pic: wypic + 'd_SreECLjq72og8BUe6d1A==/109951163100806760.jpg',
        lrc: notlrc,
        highlight: 38
    },
    // Zephyrs
    {
        name: 'Zephyrs',
        artist: 'Frums',
        url: wy + '528116875.mp3',
        pic: wypic + 'C5GAue9SnyeuUle02ZtzDw==/109951163100736077.jpg',
        lrc: notlrc,
        highlight: 69
    },
    // stop-motion
    {
        name: 'stop-motion',
        artist: 'Frums',
        url: wy + '2629809574.mp3',
        pic: wypic + 'MOpjcys3_9m1CbX5c1qWyg==/109951169983942628.jpg',
        lrc: notlrc,
        highlight: 47
    },
    // Angel Echo
    {
        name: 'Angel Echo',
        artist: 'Silentroom',
        url: wy + '1363319896.mp3',
        pic: wypic + 'qiaHEp5dyZu7Av2OuaXPNw==/109951166035225474.jpg',
        lrc: notlrc,
        highlight: 20
    },
    // Ammon's Scotoma
    {
        name: 'Ammon\'s Scotoma',
        artist: 'Silentroom',
        url: wy + '1945066723.mp3',
        pic: wypic + 'oB9cX6eGOkbMY7hPyr9vpA==/109951167384133246.jpg',
        lrc: notlrc,
        highlight: 56
    },
    // Avantgarde (先驱)
    {
        name: 'Avantgarde',
        artist: 'Raimukun',
        url: wy + '2010302251.mp3',
        pic: wypic + 'lL4YMkQkIKn9GqX0onDJRQ==/109951169377374299.jpg',
        lrc: notlrc,
        highlight: 19
    },
    // Aquarius
    {
        name: 'Aquarius',
        artist: 'Switch Technique',
        url: wy + '1813386978.mp3',
        pic: wypic + '0M1EixFs4SVvxTKnEvG5aA==/109951165642881540.jpg',
        lrc: notlrc,
        highlight: 65
    },
    // Are You Lost
    {
        name: 'Are You Lost',
        artist: 'Park Bird',
        url: wy + '518894020.mp3',
        pic: wypic + 'B0hvMNWSoxW5jMc9kgS5xA==/109951165076735700.jpg',
        lrc: notlrc,
        highlight: 84
    },
    // Upwards
    {
        name: 'Upwards',
        artist: '阿卡姆巫师',
        url: wy + '1343278877.mp3',
        pic: wypic + 'I8JKUzhGGwRCw9A0TW_tMw==/109951163834563468.jpg',
        lrc: notlrc,
        highlight: 60
    },
    // Cursed
    {
        name: 'Cursed',
        artist: 'Aurora Sky',
        url: wy + '2611969886.mp3',
        pic: wypic + '-GzAUpbPPg_29b3ZHFfHGg==/109951169822119867.jpg',
        lrc: lrc.CURSED,
        highlight: 148
    },
    // The Last String
    {
        name: 'The Last String',
        artist: 'Jacoo | Oneira',
        url: wy + '29544534.mp3',
        pic: wypic + 'Rp9f44cDRXsBL2hds0taig==/109951169486481507.jpg',
        lrc: `[00:00.000]作曲 : Joachim Dencker Christiansen/Hanitriniala T Rakotoson\n[00:01.000]作词 : Jacoo\n[00:04.000]\n[00:14.000]You have your sorrows engraved in your skin (翻译: 忧愁尽数刻凿着你褶皱的肌肤)\n[00:28.000]Let me pull the last string for the last time (翻译: 就让我最后一次拨动琴弦)\n[00:39.000]For the last time (翻译: 最后一次弹奏音符)\n[00:50.000]\n[02:01.000]With all your worries (翻译: 即便伴着思绪中的数千忧虑)\n[02:05.000]You're standing so still (翻译: 你也仍傲然屹立)\n[02:16.000]Let me calm and sing for the last time (翻译: 就让我也泰然处之)\n[02:26.000]For the last time (翻译: 为你而献出绝唱)\n[02:40.000]`,
        highlight: 46
    },
    // Trap Crow
    {
        name: 'Trap Crow',
        artist: 'Puru',
        url: wy + '1994868824.mp3',
        pic: wypic + '1L_k7ZURF57OQDwWqEEGFw==/109951168024363053.jpg',
        lrc: notlrc,
        highlight: 120
    },
    // opia -awakened-
    {
        name: 'opia -awakened-',
        artist: 'rN',
        url: wy + '1865991374.mp3',
        pic: wypic + 'wnBwvpA8xyLeqhY6PUh2jA==/109951166240786755.jpg',
        lrc: notlrc,
        highlight: 49
    },
    // Program
    {
        name: 'Program',
        artist: 'Noisia | Phace',
        url: wy + '574126297.mp3',
        pic: wypic + 'EruARXMOaAFGMAzpvYrnug==/109951163362309274.jpg',
        lrc: notlrc,
        highlight: 90
    },
    // #1f1e33
    {
        name: '#1f1e33',
        artist: 'かめりあ',
        url: wy + '1454169010.mp3',
        pic: wypic + 'OqG4_H0iwJ-wp91Ep3WuBw==/109951165777242162.jpg',
        lrc: notlrc,
        highlight: 29
    },
    // Hello (BPM) 2024
    {
        name: 'Hello (BPM) 2024',
        artist: 'かめりあ',
        url: wy + '2122590750.mp3',
        pic: wypic + 'Xwdq6rWpuRb2psb3_Y28Sw==/109951169300055457.jpg',
        lrc: notlrc,
        highlight: 32
    },
    // Choke
    {
        name: 'Choke',
        artist: 'Project-G',
        url: wy + '1385635476.mp3',
        pic: wypic + 'xZVbgk1vDSQ0SHGAyv89pA==/109951167942754893.jpg',
        lrc: notlrc,
        highlight: 44
    },
    // Chronokinesia
    {
        name: 'Chronokinesia',
        artist: 'Project-G',
        url: wy + '1920628136.mp3',
        pic: wypic + 'Jxpm44NLb5yk8VIWV4G5ag==/109951168832436283.jpg',
        lrc: notlrc,
        highlight: 66
    },
    // Into Black
    {
        name: 'Into Black',
        artist: 'Joe Ford',
        url: wy + '1483116416.mp3',
        pic: wypic + 'wInb4Fm4VzcsmadWJ22x8Q==/109951169045676022.jpg',
        lrc: notlrc,
        highlight: 67
    },
    // Pluripotency
    {
        name: 'Pluripotency',
        artist: 'Factal',
        url: wy + '1470415862.mp3',
        pic: wypic + 'ifcy05ojkDsfTWtiC90_Rg==/109951166681276489.jpg',
        lrc: notlrc,
        highlight: 98
    },
    // D I V E D - R A I N
    {
        name: 'D I V E D - R A I N',
        artist: 'Noir-D | E-Specter | 2088 RECORDS',
        url: wy + '2094759047.mp3',
        pic: wypic + '1x7FSxrV5A0bMVQ0Br3PYg==/109951169015215585.jpg',
        lrc: notlrc,
        highlight: 66
    },
    // rainstorm
    {
        name: 'Rainstorm',
        artist: 'H1RO*4',
        url: wy + '2711173215.mp3',
        pic: wypic + 'LKTaWtv4myQd40GuAgRGBQ==/109951171236473607.jpg',
        lrc: notlrc,
        highlight: 43
    },
    // O'er The Flood
    {
        name: 'O\'er The Flood',
        artist: 'Goreshit',
        url: wy + '29268881.mp3',
        pic: wypic + 'sszwZPtdOGqDjGtQT2JD-g==/7845015465361031.jpg',
        lrc: notlrc,
        highlight: 16
    },
    // Credits EX
    {
        name: 'Credits EX',
        artist: 'Frums',
        url: wy + '405372425.mp3',
        pic: wypic + 'DAESz0Z0szQrCsgAT5e5iw==/3295236359250897.jpg',
        lrc: `[00:00.000]作曲 : Frums\n[00:01.000]编曲 : Frums\n[00:05.000]Now for the official national weather service forecast for Eastern Massachusetts inside of 1-495. (翻译: 现在由国家气象局为你播报马萨诸塞州东部I-495内的天气预报)\n[00:11.000]including Boston,issued at 7:21 PM,Thursday,October 22nd. (翻译: 包括波士顿，发表于10月22日周四晚7时21分)\n[00:16.000]Tonight:Mostly cloudy with isolated showers until midnight,then mostly clear after midnight. (翻译: 今晚大部多云，局部地区前半夜有阵雨，后半基本无雨)\n[00:21.000]Lows in the lower 40's. (翻译: 最低温度近40℉(5℃))\n[00:23.000]West winds 10-15mph with gusts up to 25mph. (翻译: 西风10~15mph(5~6ms)，最高风速25mph(11m/s))\n[00:27.000]Chance of rain 20 percent. (翻译: 降水概率20%)\n[00:30.000]Friday:Sunny.Lush color with highs in the lower 50's. (翻译: 周五晴，最高温度近50℉(10℃))\n[00:33.000]Northwest winds 10-15mph with gusts up to 25mph. (翻译: 西北风10~15mph(5~6ms)，最高风速25mph(11m/s))\n[00:38.000]Friday night,mostly clear. (翻译: 周五晚基本无雨)\n[00:40.000]Lows in the mid-30's. (翻译: 最低温度近35℉(2℃))\n[00:42.000]North winds 10-15mph. (翻译: 北风10~15mph(5~6ms))\n[00:44.000]Saturday:Partly cloudy. (翻译: 周六部分地区多云)\n[00:46.000]igh---\n[00:46.000]High\n[00:46.000]igh-\n[00:46.000]igh--\n[00:47.000]igh----\n[00:47.000]igh-----\n[00:47.000]igh------\n[00:47.000]igh-------\n[00:47.000]igh--------\n[00:47.000]igh---------\n[00:47.000]igh----------...\n[01:19.000]F\n[01:19.000]F\n[01:19.000]F\n[01:20.000]F\n[01:20.000]F\n[01:20.000]F\n[01:20.000]F\n[01:20.000]F\n[01:20.000]Fun\n[01:20.000]Funding\n[01:20.000]Funding for\n[01:20.000]Funding for this\n[01:21.000]pro\n[01:21.000]program\n[01:21.000]program was\n[01:21.000]program was made\n[01:21.000]po\n[01:21.000]possi\n[01:22.000]possible\n[01:22.000]possible by\n[01:22.000]possible by (x2)\n[01:22.000]possible by (x3)\n[01:22.000]possible by (x4)\n[01:22.000]possible by (x5)\n[01:23.000]Fun\n[01:23.000]possible by\n[01:23.000]possible by (x2)\n[01:23.000]possible by (x3)\n[01:23.000]possible by (x4)\n[01:23.000]Funding\n[01:23.000]possible by\n[01:23.000]possible by↓ (x2)\n[01:23.000]possible by↓↓ (x3)\n[01:24.000]possible by↓↓↓ (x4)\n[01:24.000]Funding for\n[01:24.000]Funding for this\n[01:24.000]Funding for thi\n[01:24.000]Funding for thii\n[01:24.000]Funding for thiii\n[01:24.000]Funding for thiiii\n[01:24.000]Funding for thiiiii\n[01:24.000]Funding for thiiiiii\n[01:24.000]Funding for thiiiiiii\n[01:24.000]Funding for thiiiiiiiii\n[01:24.000]pro\n[01:24.000]program\n[01:24.000]pro\n[01:24.000]program\n[01:25.000]pro\n[01:25.000]pro (x2)\n[01:25.000]pro (x3)\n[01:25.000]pro (x4)\n[01:25.000]prog\n[01:25.000]progr\n[01:25.000]program\n[01:25.000]Fun\n[01:25.000]Funding\n[01:26.000]Funding for\n[01:26.000]possible by\n[01:26.000]possible by (x2)\n[01:26.000]program was made\n[01:26.000]po\n[01:26.000]possi\n[01:27.000]possible\n[01:27.000]possible by\n[01:27.000]view\n[01:27.000]viewers\n[01:27.000]viewers like\n[01:27.000]viewers like you.\n[01:28.000]viewers like\n[01:28.000]viewers like you.\n[01:28.000]viewers like\n[01:28.000]viewers like you.\n[01:29.000]viewers like\n[01:29.000]viewers like you.\n[01:29.000]viewers like\n[01:29.000]viewers like you.\n[01:30.000]viewers like\n[01:30.000]viewers like you.\n[01:30.000]viewers like\n[01:30.000]viewers like you.\n[01:31.000]Fu\n[01:31.000]Fu (x2)\n[01:31.000]Fun\n[01:31.000]Funding\n[01:31.000]Funding for\n[01:31.000]Funding for this\n[01:31.000]pro\n[01:32.000]program\n[01:32.000]program was\n[01:32.000]program was made\n[01:32.000]po\n[01:32.000]possi\n[01:32.000]possible\n[01:33.000]possible by\n[01:33.000]possible by (x2)\n[01:33.000]possible by (x3)\n[01:33.000]possible by (x4)\n[01:33.000]possible by (x5)\n[01:33.000]Fun\n[01:34.000]possible by\n[01:34.000]possible by (x2)\n[01:34.000]possible by (x3)\n[01:34.000]possible by (x4)\n[01:34.000]Funding\n[01:34.000]possible by\n[01:34.000]possible by↓ (x2)\n[01:34.000]possible by↓↓ (x3)\n[01:34.000]possible by↓↓↓ (x4)\n[01:34.000]Funding for\n[01:34.000]Funding for this\n[01:34.000]Funding for thi\n[01:34.000]Funding for thii\n[01:35.000]Funding for thiii\n[01:35.000]Funding for thiiii\n[01:35.000]Funding for thiiiiii\n[01:35.000]Funding for thiiiiiii\n[01:35.000]Funding for thiiiiiiii\n[01:35.000]Funding for thiiiiiiiii\n[01:35.000]pro\n[01:35.000]program\n[01:35.000]pro\n[01:35.000]program\n[01:35.000]pro\n[01:35.000]pro (x2)\n[01:36.000]pro (x3)\n[01:36.000]pro (x4)\n[01:36.000]prog\n[01:36.000]progr\n[01:36.000]program\n[01:36.000]Fun\n[01:36.000]Funding\n[01:36.000]Funding for\n[01:37.000]possible by\n[01:37.000]possible by (x2)\n[01:37.000]program was made\n[01:37.000]po\n[01:37.000]possi\n[01:37.000]possible\n[01:37.000]possible by\n[01:38.000]view\n[01:38.000]viewers\n[01:38.000]viewers like\n[01:38.000]viewers like you.\n[01:38.000]viewers like\n[01:39.000]viewers like you.\n[01:39.000]viewers like\n[01:39.000]viewers like you.\n[01:39.000]viewers like\n[01:40.000]viewers like you.\n[01:40.000]viewers like\n[01:40.000]viewers like you.\n[01:40.000]viewers like\n[01:41.000]viewers like you.\n[01:41.000]Broad\n[01:41.000]Broadcast\n[01:41.000]Cor\n[01:42.000]Corpo\n[01:42.000]Corpora\n[01:42.000]Corporation\n[01:42.000]Cor\n[01:42.000]Corpo\n[01:42.000]Corpora\n[01:42.000]Corporation\n[01:43.000]Cor\n[01:43.000]Corpo\n[01:43.000]Corpora\n[01:43.000]Corporation\n[01:43.000]Cor\n[01:44.000]Corpo\n[01:44.000]Cor\n[01:44.000]Corpo\n[01:44.000]Cor\n[01:44.000]Cor (x2)\n[01:44.000]Cor (x3)\n[01:44.000]Corpo\n[01:44.000]Corpora\n[01:45.000]Corporation\n[01:45.000]Cor\n[01:45.000]Corpo\n[01:45.000]Corpora\n[01:45.000]Corporation\n[01:45.000]Cor\n[01:46.000]Corpo\n[01:46.000]Corpora\n[01:46.000]Corporation\n[01:46.000]Cor\n[01:46.000]Corpo\n[01:46.000]Cor\n[01:46.000]Cor\n[01:46.000]Corpo (x2)\n[01:47.000]Corpo (x3)\n[01:47.000]Cor\n[01:47.000]Corpo\n[01:47.000]Corpora\n[01:47.000]Corporation\n[01:47.000]Cor\n[01:47.000]Cor (x2)\n[01:47.000]Cor (x3)\n[01:48.000]Corpo\n[01:48.000]Corpora\n[01:48.000]Corporation\n[01:48.000]Cor\n[01:48.000]Cor (x2)\n[01:48.000]Cor (x3)\n[01:48.000]Corpo\n[01:48.000]Corpora\n[01:49.000]Corporation\n[01:49.000]Cor\n[01:49.000]Cor (x2)\n[01:49.000]Cor (x3)\n[01:49.000]Corpo\n[01:49.000]Corpora\n[01:49.000]Corporation\n[01:49.000]Cor\n[01:49.000]Cor (x2)\n[01:49.000]Cor↓\n[01:50.000]Corpo↓\n[01:50.000]Corpora↓\n[01:50.000]Corporation↓\n[01:50.000]Cor↓\n[01:50.000]Cor↓ (x2)\n[01:50.000]Cor\n[01:50.000]Corpo\n[01:50.000]Corpora\n[01:51.000]Corporation\n[01:51.000]Cor\n[01:51.000]Cor (x2)\n[01:51.000]Cor (x3)\n[01:51.000]Corpo\n[01:51.000]Corpora\n[01:51.000]Cor\n[01:51.000]Corpora\n[01:51.000]Cor\n[01:51.000]Corpo\n[01:51.000]Corpora\n[01:51.000]Cor\n[01:52.000]Corpo\n[01:52.000]Corpora\n[01:52.000]Corporat\n[01:52.000]Corporati\n[01:52.000]Corporation\n[01:52.000]Cor\n[01:52.000]Corpo\n[01:52.000]Corpora\n[01:52.000]Cor\n[01:52.000]Corpo\n[01:53.000]Cor\n[01:53.000]Corpo\n[01:53.000]Corpora\n[01:53.000]Cor\n[01:53.000]Corpo\n[01:53.000]Corpora\n[01:53.000]Cor\n[01:53.000]Corpo\n[01:53.000]Cor\n[01:53.000]Corpo\n[01:53.000]Corpora\n[01:53.000]Cor\n[01:54.000]Corpo\n[01:54.000]Corpora\n[01:54.000]Cor\n[01:54.000]Corpo\n[01:54.000]Cor\n[01:54.000]Corpora\n[01:54.000]Cor\n[01:54.000]Corpo\n[01:54.000]Cor\n[01:54.000]Corpo\n[01:54.000]Cor\n[01:54.000]Cor (x2)\n[01:54.000]Cor (x3)\n[01:55.000]Corpo\n[01:55.000]Corpora\n[01:55.000]Cor\n[01:55.000]Corpo\n[01:55.000]Cor\n[01:55.000]Corpo\n[01:55.000]Corpora\n[01:55.000]Cor\n[01:55.000]Corpo\n[01:55.000]Corpora\n[01:55.000]Cor\n[01:56.000]Corpo\n[01:56.000]Cor\n[01:56.000]Corpo\n[01:56.000]Corpora\n[01:56.000]Cor\n[01:56.000]Corpo\n[01:56.000]Corpora\n[01:56.000]Cor\n[01:56.000]Corpo\n[01:56.000]Cor\n[01:56.000]Corpo\n[01:56.000]Corpora\n[01:57.000]Cor\n[01:57.000]Corpo\n[01:57.000]Cor\n[01:57.000]Corpo\n[01:57.000]Corpora\n[01:57.000]Corporat\n[01:57.000]Corporatio\n[01:57.000]Corporation\n[01:57.000]Cor\n[01:57.000]Cor (x2)\n[01:57.000]Cor (x3)\n[01:57.000]Corpo\n[01:58.000]Corpora\n[01:58.000]Cor\n[01:58.000]Corpo\n[01:58.000]Cor\n[01:58.000]Corpo\n[01:58.000]Corpora\n[01:58.000]Cor\n[01:58.000]Corpo\n[01:58.000]Corpora\n[01:58.000]Cor\n[01:58.000]Corpo\n[01:58.000]Cor\n[01:59.000]Corpo\n[01:59.000]Corpora\n[01:59.000]Cor\n[01:59.000]Corpo\n[01:59.000]Corpora\n[01:59.000]Cor\n[01:59.000]Corpo\n[01:59.000]Cor\n[01:59.000]Corpo\n[01:59.000]Corpora\n[01:59.000]Cor\n[02:00.000]Corpo\n[02:00.000]Cor\n[02:00.000]Corpo\n[02:00.000]Cor\n[02:00.000]Corpo\n[02:00.000]Cor\n[02:00.000]Cor (x2)\n[02:00.000]Cor (x3)\n[02:00.000]Corpo\n[02:00.000]Corpora\n[02:00.000]Cor\n[02:00.000]Corpo\n[02:01.000]Cor\n[02:01.000]Corpo\n[02:01.000]Corpora\n[02:01.000]Cor\n[02:01.000]Corpo\n[02:01.000]Corpora\n[02:01.000]Cor\n[02:01.000]Corpo\n[02:01.000]Cor\n[02:01.000]Corpo\n[02:01.000]Corpora\n[02:01.000]Cor\n[02:02.000]Corpo\n[02:02.000]Corpora\n[02:02.000]Cor\n[02:02.000]Corpo\n[02:02.000]Cor\n[02:02.000]Corpo\n[02:02.000]Corpora\n[02:02.000]Cor\n[02:02.000]Corpo\n[02:02.000]Cor\n[02:02.000]Corpo\n[02:02.000]Corporat\n[02:03.000]Corporatt\n[02:03.000]Corporattt\n[02:03.000]Corporatttt\n[02:03.000]Corporattttt\n[02:03.000]Corporatttttt\n[02:03.000]Corporattttttt\n[02:03.000]Corporatttttttt\n[02:03.000]▒Corporattttttttt\n[02:03.000]▒▒orporatttttttttt\n[02:03.000]▒▒▒▒▒▒▒▒tttttttttt\n[02:03.000]▒▒▒▒▒tion\n[02:04.000]▒▒▒▒\n[02:05.000]▒▒▒\n[02:06.000]▒▒\n[02:07.000]▒\n[02:14.000]Annual financial suppor\n[02:15.000]Annual financial suppor (x2)\n[02:16.000]por\n[02:16.000]por (x2)\n[02:16.000]por (x3)\n[02:16.000]por (x4)\n[02:16.000]Annual\n[02:17.000]Annual financial\n[02:17.000]Annual financial suppor\n[02:18.000]Annual\n[02:18.000]Annual financial\n[02:19.000]Annual financial suppor\n[02:19.000]Annual\n[02:19.000]Annual financial\n[02:20.000]Annual financial suppor\n[02:20.000]Annual\n[02:21.000]Annual financial\n[02:21.000]Annual financial suppor\n[02:22.000]Annual\n[02:22.000]Annual financial\n[02:23.000]Annual financial suppor\n[02:23.000]Annual\n[02:23.000]Annual financial\n[02:24.000]th\n[02:24.000]tha\n[02:24.000]than\n[02:24.000]thank\n[02:24.000]thank you.\n[02:24.000]By\n[02:24.000]Byci\n[02:24.000]Bycipo\n[02:25.000]Bycipor\n[02:25.000]Bycipo\n[02:25.000]Bycipor\n[02:25.000]Bycipo\n[02:25.000]Byciporoa\n[02:25.000]Byciporrrr\n[02:25.000]Byciporrrro\n[02:25.000]Byciporrrroo\n[02:25.000]Byciporrrrooo\n[02:25.000]Byciporoa\n[02:25.000]Byciporoaa\n[02:25.000]Byciporoaaa\n[02:26.000]Byciporoaaaa\n[02:26.000]Byciporoaaaaa\n[02:26.000]wers\n[02:26.000]wersble\n[02:26.000]wersbb\n[02:26.000]wersbbb\n[02:26.000]wersbf\n[02:26.000]wersbff\n[02:26.000]wersblefi\n[02:26.000]wersblefii\n[02:26.000]wersblefiii\n[02:27.000]wersblefia\n[02:27.000]wersblefina\n[02:27.000]wersblefinaa\n[02:27.000]wersblefinaaa\n[02:27.000]wersblefinaaaa\n[02:27.000]Fun\n[02:27.000]Fun (x2)\n[02:27.000]Funding\n[02:27.000]Fun\n[02:28.000]Fun (x2)\n[02:28.000]Fun (x3)\n[02:28.000]Fun\n[02:28.000]Funding\n[02:28.000]Fun\n[02:28.000]Fun (x2)\n[02:28.000]Fun (x3)\n[02:28.000]Fun\n[02:29.000]Funding\n[02:29.000]Fun\n[02:29.000]Fun (x2)\n[02:29.000]Fun (x3)\n[02:29.000]Fun\n[02:29.000]Funding\n[02:29.000]ding\n[02:30.000]Fi\n[02:30.000]porti\n[02:30.000]Fin\n[02:30.000]Fina\n[02:30.000]Finan\n[02:30.000]po\n[02:30.000]poc\n[02:30.000]pocor\n[02:30.000]by\n[02:30.000]por\n[02:31.000]portio\n[02:31.000]portion\n[02:31.000]portionn\n[02:31.000]portionnn\n[02:31.000]portionnnn\n[02:31.000]By\n[02:31.000]By (x2)\n[02:31.000]By (x3)\n[02:31.000]By (x4)\n[02:32.000]B\n[02:32.000]By\n[02:32.000]B\n[02:32.000]B (x2)\n[02:32.000]B (x3)\n[02:32.000]B (x4)\n[02:32.000]By\n[02:32.000]By (x2)\n[02:32.000]B\n[02:33.000]By\n[02:33.000]By (x2)\n[02:33.000]By (x3)\n[02:33.000]By (x4)\n[02:33.000]By\n[02:33.000]finan\n[02:33.000]B\n[02:33.000]B (x2)\n[02:33.000]nc\n[02:33.000]nc (x2)\n[02:33.000]nc (x3)\n[02:33.000]nc (x4)\n[02:34.000]Cor\n[02:34.000]Corr\n[02:34.000]Corrr\n[02:34.000]Corrrr\n[02:34.000]Corrrrr\n[02:34.000]Corrrrrr\n[02:34.000]Corrrrrrr\n[02:34.000]Corrrrrrrr\n[02:34.000]viewer\n[02:34.000]viewer like\n[02:34.000]viewer like you.\n[02:34.000]viewer like\n[02:34.000]viewer like you.\n[02:35.000]viewer like\n[02:35.000]viewer like you.\n[02:35.000]Fun\n[02:35.000]Funding\n[02:35.000]Fun\n[02:35.000]Funding\n[02:36.000]Fun\n[02:36.000]Fun (x2)\n[02:36.000]Fun\n[02:36.000]Funding\n[02:36.000]Fun↑\n[02:36.000]Fun↑↑\n[02:36.000]Fun↑↑↑\n[02:36.000]Fun↑↑↑↑\n[02:37.000]Fun↑↑↑↑↑\n[02:37.000]Fun↑↑↑↑↑↑\n[02:37.000]Fun↑↑↑↑↑↑↑\n[02:37.000]Fun↑↑↑↑↑↑↑↑\n[02:37.000]Fun↑↑↑↑↑↑↑↑↑\n[02:37.000]Fun↑↑↑↑↑↑↑↑↑↑\n[02:37.000]Fun↑↑↑↑↑↑↑↑↑↑↑\n[02:37.000]Corpora\n[02:37.000]Corporation\n[02:37.000]Corporationn\n[02:38.000]Corporationnn\n[02:38.000]Corporationnnn\n[02:38.000]Corporationnnnn\n[02:38.000]Corporationnnnnn\n[02:38.000]Corporationnnnnnn\n[02:38.000]Corporationnnnnnnn\n[02:38.000]Corporationnnnnnnnn\n[02:38.000]The\n[02:38.000]The corporation\n[02:38.000]The corporation for\n[02:39.000]and annual\n[02:39.000]The corporation for public\n[02:39.000]The corporation for public broadcasting\n[02:39.000]and\n[02:40.000]financial su\n[02:40.000]of\n[02:40.000]off\n[02:40.000]offf\n[02:40.000]offff\n[02:40.000]offfff\n[02:40.000]financial\n[02:41.000]for financial\n[02:41.000]s-\n[02:41.000]s--\n[02:41.000]s---\n[02:42.000]i\n[02:42.000]in\n[02:42.000]viewers\n[02:43.000]viewers you\n[02:43.000]this\n[02:44.000]this is\n[02:44.000]P\n[02:45.000]PB\n[02:45.000]PBS.\n[02:45.000]PBS..\n[02:45.000]PBS...\n[02:45.000]PBS....\n[02:45.000]PBS.....\n[02:45.000]PBS......\n[02:45.000]PBS.......\n[02:45.000]PBS........\n[02:45.000]------------\n[02:46.000]Here are the 7PM observations for the Boston metropolitan area. (翻译: 这里是波士顿及周边地区晚7点的实时汇报)\n[02:50.000]At Logan Airport,it was cloudy. (翻译: 洛根机场，多云)\n[02:53.000]The temperature was 68°. (翻译: 气温68℉(20℃))\n[02:55.000]The dew point,47. (翻译: 露点47℉(8℃))\n[02:56.000]And the relative humidity,46 percent. (翻译: 即相对湿度46%)\n[03:00.000]The wind was southwest at 13mph. (翻译: 西南风，风速13mph(6ms))\n[03:03.000]The pressure was 29.99" and is rising. (翻译: 气压29.99inHg(101.56kPa)并且还在升高)\n[03:07.000]Elsewher\n[03:07.000]Elsewherr\n[03:07.000]Elsewherrr\n[03:07.000]Elsewherrrr\n[03:07.000]Elsewherrrrr\n[03:07.000]Elsewherrrrrr\n[03:07.000]Elsewherrrrrrr\n[03:28.000]F\n[03:28.000]F\n[03:28.000]F\n[03:28.000]F\n[03:28.000]F\n[03:28.000]F\n[03:29.000]F\n[03:29.000]F\n[03:29.000]Fun\n[03:29.000]Funding\n[03:29.000]Funding for\n[03:29.000]Funding for this pro\n[03:30.000]program\n[03:30.000]program was\n[03:30.000]program was made\n[03:30.000]Poss\n[03:30.000]Possible\n[03:31.000]Possible by\n[03:31.000]Possible by (x2)\n[03:31.000]Possible by (x3)\n[03:31.000]Possible by (x4)\n[03:31.000]Possible by (x5)\n[03:31.000]Fun\n[03:32.000]By\n[03:32.000]thi\n[03:32.000]thii\n[03:32.000]thiii\n[03:32.000]thiiii\n[03:32.000]By (x2)\n[03:32.000]thiiiii\n[03:32.000]thiiiiii\n[03:32.000]thiiiiiii\n[03:32.000]thiiiiiiii\n[03:32.000]By (x3)\n[03:32.000]thiiiiiiiii\n[03:32.000]By (x4)\n[03:32.000]Funding\n[03:32.000]by\n[03:32.000]by (x2)\n[03:32.000]by (x3)\n[03:32.000]by (x4)\n[03:32.000]for\n[03:33.000]Program.\n[03:33.000]Pro\n[03:33.000]gram.\n[03:33.000]pro\n[03:34.000]pro (x2)\n[03:34.000]pro (x3)\n[03:34.000]pro (x4)\n[03:34.000]Fun\n[03:34.000]Funding\n[03:34.000]Funding for\n[03:35.000]by\n[03:35.000]by\n[03:35.000]made\n[03:35.000]poss\n[03:35.000]possible\n[03:35.000]possible by\n[03:36.000]view\n[03:36.000]viewers\n[03:36.000]viewers like\n[03:36.000]viewers like you.\n[03:36.000]viewers like\n[03:37.000]viewers like you.\n[03:37.000]viewers like\n[03:37.000]viewers like you.\n[03:37.000]viewers like\n[03:38.000]viewers like you.\n[03:38.000]viewers like\n[03:38.000]viewers like you.\n[03:38.000]viewers like\n[03:39.000]viewers like you.\n[03:39.000]viewers like\n[03:39.000]viewers like you.\n[03:39.000]Fun\n[03:39.000]Fun (x2)\n[03:39.000]Fun\n[03:40.000]Funding for\n[03:40.000]Funding for this\n[03:40.000]Funding for this program\n[03:40.000]Funding for this program was\n[03:40.000]Funding for this program was made\n[03:41.000]Possi\n[03:41.000]Possible\n[03:41.000]By\n[03:41.000]by (x2)\n[03:42.000]by (x3)\n[03:42.000]by (x4)\n[03:42.000]by (x5)\n[03:42.000]Fun\n[03:42.000]By\n[03:42.000]by (x2)\n[03:42.000]by (x3)\n[03:42.000]by (x4)\n[03:42.000]by (x5)\n[03:43.000]Funding\n[03:43.000]Fun↓\n[03:43.000]Fun↓↓\n[03:43.000]Fun↓↓↓\n[03:43.000]Fun↓↓↓↓\n[03:43.000]Funding\n[03:43.000]ding\n[03:43.000]diing\n[03:43.000]diiing\n[03:43.000]diiiing\n[03:43.000]diiiiing\n[03:43.000]diiiiiing\n[03:43.000]diiiiiiing\n[03:43.000]diiiiiiiing\n[03:43.000]diiiiiiiiing\n[03:44.000]Pro\n[03:44.000]Program.\n[03:44.000]Pro\n[03:44.000]Pro (x2)\n[03:44.000]Pro (x3)\n[03:44.000]Pro\n[03:44.000]Program.\n[03:45.000]Fun\n[03:45.000]Funding\n[03:45.000]Funding for\n[03:45.000]by\n[03:45.000]by (x2)\n[03:46.000]made\n[03:46.000]possi\n[03:46.000]possible\n[03:46.000]possible view\n[03:46.000]possible viewers\n[03:47.000]like\n[03:47.000]like you.\n[03:47.000]like\n[03:47.000]like you.\n[03:48.000]like\n[03:48.000]like you.\n[03:48.000]like\n[03:48.000]like you.\n[03:49.000]like\n[03:49.000]like you.\n[03:49.000]like\n[03:49.000]like you.\n[04:05.000]Funding for this program was made... (翻译: 本节目的经费由)\n[04:08.000]Possible by viewers like you. (翻译: 像你这样的观众提供)\n[04:10.000]Funding for this program was made... (翻译: 本节目的经费由)\n[04:13.000]Possible by viewers like... (翻译: 像你这样的观众)\n[04:15.000]YOU (翻译: 提供)`,
        highlight: 80
    },
    // Ragnarok
    {
        name: 'Ragnarok',
        artist: 'Gram | かめりあ',
        url: wy + '518088775.mp3',
        pic: wypic + 'k9JsdiFgmN_g1Eef5e4l1A==/109951163062440483.jpg',
        lrc: notlrc,
        highlight: 49
    },
    // green to blue
    {
        name: 'Green To Blue',
        artist: 'Aurenth',
        url: wy + '2067668284.mp3',
        pic: wypic + '2PzKnSbNd25nfG4VwEm_cQ==/109951168768491513.jpg',
        lrc: notlrc,
        highlight: 6
    },
    // 黐線
    {
        name: '黐線',
        artist: 'FliZ | 神游_NEUROMANCER',
        url: wy + '2698506301.mp3',
        pic: wypic + pic.TCV1,
        lrc: notlrc,
        highlight: 39
    },
    // Doxa
    {
        name: 'Doxa',
        artist: 'Project-G | 神游_NEUROMANCER',
        url: wy + '2698506296.mp3',
        pic: wypic + pic.TCV1,
        lrc: notlrc,
        highlight: 66
    },
    // 痴生
    {
        name: '痴生',
        artist: 'Dirty Octopus | 神游_NEUROMANCER',
        url: wy + '2698506297.mp3',
        pic: wypic + pic.TCV1,
        lrc: notlrc,
        highlight: 66
    },
    // Alaya
    {
        name: 'Alaya',
        artist: '硝酸生菜Synzak | 神游_NEUROMANCER',
        url: wy + '2698499127.mp3',
        pic: wypic + pic.TCV1,
        lrc: notlrc,
        highlight: 111
    },
    // 歸壹
    {
        name: '歸壹',
        artist: 'sdklmr | 神游_NEUROMANCER',
        url: wy + '2698506300.mp3',
        pic: wypic + pic.TCV1,
        lrc: notlrc,
        highlight: 165
    },
    // 通靈
    {
        name: '通靈',
        artist: 'Ac7i | 神游_NEUROMANCER',
        url: wy + '2698499128.mp3',
        pic: wypic + pic.TCV1,
        lrc: notlrc,
        highlight: 47
    },
    // Corrosion
    {
        name: 'Corrosion',
        artist: 'Noir-D | 神游_NEUROMANCER',
        url: wy + '2698499126.mp3',
        pic: wypic + pic.TCV1,
        lrc: notlrc,
        highlight: 78
    },
    // Lo-fi Romance
    {
        name: 'Lo-fi Romance',
        artist: 'ORKZ',
        url: wy + '2075056121.mp3',
        pic: wypic + "eLaWuSxD3fxHACqSuznSeg==/109951168855224255.jpg",
        lrc: notlrc,
        highlight: 76
    },
    // Re:Gain -Another Monday morning-
    {
        name: 'Re:Gain -Another Monday morning-',
        artist: 'Project-G',
        url: wy + '1939436833.mp3',
        pic: wypic + "VEozFLnDEvpzeeAZUz45RA==/109951167312197593.jpg",
        lrc: notlrc,
        highlight: 54
    },
    // Neuropathy
    {
        name: 'Neuropathy',
        artist: 'postt | z1broad2 | 神游_NEUROMANCER',
        url: wy + '2698499129.mp3',
        pic: wypic + pic.TCV1,
        lrc: notlrc,
        highlight: 505
    },
    // 終末
    {
        name: '終末',
        artist: '硝酸生菜Synzak',
        url: wy + '1380312421.mp3',
        pic: wypic + "eHfMf0yPQ6sFeCOm4i8LcA==/109951164241401799.jpg",
        lrc: notlrc,
        highlight: 47
    },
    // LiMiNAL%VOiD
    {
        name: 'LiMiNAL%VOiD',
        artist: '%1iLiUM | 神游_NEUROMANCER',
        url: wy + '2698506298.mp3',
        pic: wypic + pic.TCV1,
        lrc: notlrc,
        highlight: 62
    },
    // Collapse
    {
        name: 'Collapse',
        artist: '硝酸生菜Synzak',
        url: wy + '1336578038.mp3',
        pic: wypic + 'CHIat_MVN0XxqOu1H0FDlA==/109951164082947676.jpg',
        lrc: notlrc,
        highlight: 117
    },
    // 朝聖
    {
        name: '朝聖',
        artist: 'Estrella | 神游_NEUROMANCER',
        url: wy + '2698506299.mp3',
        pic: wypic + pic.TCV1,
        lrc: notlrc,
        highlight: 138
    },
    // R.I.P.
    {
        name: 'R.I.P.',
        artist: 'eicateve',
        url: wy + '2019022000.mp3',
        pic: wypic + "anGmYEbxBunenbY3cuLm_w==/109951169518974669.jpg",
        lrc: notlrc,
        highlight: 100
    },
    // It Takes Two Theme
    {
        name: 'It Takes Two Theme',
        artist: 'Kristofer Eng',
        url: wy + '1962584310.mp3',
        pic: wypic + "T_wSELH7ZdJoRqeGpnCQZg==/109951168510217047.jpg",
        lrc: notlrc,
        highlight: 107
    },
    // 分离二重唱(Remix)
    {
        name: '分离二重唱(Remix)',
        artist: 'HOW',
        url: wy + '2007861208.mp3',
        pic: wypic + pic.HOW,
        lrc: notlrc,
        highlight: 164
    },
    // Heat
    {
        name: 'Heat',
        artist: 'Brian Tyler',
        url: wy + '28188761.mp3',
        pic: wypic + pic.FC3,
        lrc: notlrc,
        highlight: 51
    },
    // 地球-The Earth
    {
        name: '地球-The Earth',
        artist: names.CMG,
        url: wy + '1464843120.mp3',
        pic: wypic + pic.DL,
        lrc: notlrc,
        highlight: 90
    },
    // The Last Page
    {
        name: 'The Last Page',
        artist: names.ARF,
        url: wy + '1402825200.mp3',
        pic: wypic + 'z7NdacpHuCO_BuD0aGHnKQ==/109951164481782239.jpg',
        lrc: notlrc,
        highlight: 98
    },
    // Polaris
    {
        name: 'Polaris',
        artist: 'Frum',
        url: wy + '1944651768.mp3',
        pic: wypic + pic.TU,
        lrc: notlrc,
    },
    // Calling (feat. marok)
    {
        name: 'Calling (feat. marok)',
        artist: 'mamomo | MAROK',
        url: wy + '1944649836.mp3',
        pic: wypic + pic.TU,
        lrc: notlrc,
        highlight: 270
    },
    // The Unattended
    {
        name: 'The Unattended',
        artist: names.ARF,
        url: wy + '1944651756.mp3',
        pic: wypic + pic.TU,
        lrc: notlrc,
        highlight: 165
    },
    // 急 雨 過 城 頭
    {
        name: '急 雨 過 城 頭',
        artist: 'Tokamak | 2088 RECORDS',
        url: wy + '2094753481.mp3',
        pic: wypic + '1x7FSxrV5A0bMVQ0Br3PYg==/109951169015215585.jpg',
        lrc: notlrc,
    },
    // small mistake - I Will Suffer Until I Am Dead (mirror rmx)
    {
        name: 'small mistake - I Will Suffer Until I Am Dead (mirror rmx)',
        artist: 'mirrormage.',
        url: wy + '2637413242.mp3',
        pic: wypic + '3b0AVkBBYaHpQgiTKFPMOA==/109951170050848703.jpg',
        lrc: notlrc,
        highlight: 20,
    },
    // Fluorescent Light
    {
        name: 'Fluorescent Light',
        artist: 'Wooden | 卉HUI-Works',
        url: wy + '2021474593.mp3',
        pic: wypic + 'SVwMk1lj0cNyrq4P-SzZsw==/109951168299755748.jpg',
        lrc: notlrc,
        highlight: 161,
    },
    // Dead Channel
    {
        name: 'Dead Channel',
        artist: 'Project-G',
        url: wy + '1974437444.mp3',
        pic: wypic + '-phTZvBe_56TIm4fAErvdA==/109951167805864423.jpg',
        lrc: notlrc,
        highlight: 67,
    },
    // Inverted World
    {
        name: 'Inverted World',
        artist: names.ARF,
        url: wy + '2099631232.mp3',
        pic: wypic + '_Zs2T7NBtRClferLDOAJvQ==/109951169054501207.jpg',
        lrc: notlrc,
        highlight: 84,
    },
]

const ap = new APlayer({
    element: document.getElementById('aplayer'),
    lrcType: 1,
    theme: '#3366FF',
    audio: musicList
});